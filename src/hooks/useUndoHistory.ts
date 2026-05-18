import { useState } from "react";

const MAX_HISTORY = 10;

export interface ScanSnapshot {
  tabJawStates: Record<string, { upper: boolean; lower: boolean; bite: boolean }>;
  scannedTabs: string[];
  activeTabId: string;
  tabs: Array<{ id: string; label: string; type: "treatment" | "bite" | "pre-treatment" | "additional" }>;
  currentJaw: 'upper' | 'lower' | 'bite' | null;
  /** Human-readable description of the action that produced this state, e.g. "Scanned upper jaw" */
  label: string;
}

export interface UndoHistoryState {
  /** Call after each meaningful mutation to record the new state. */
  push: (snapshot: Omit<ScanSnapshot, "label">, label: string) => void;
  /** Step back one. Returns the snapshot to restore, or null if at start. */
  undo: () => ScanSnapshot | null;
  /** Step forward one. Returns the snapshot to restore, or null if at latest. */
  redo: () => ScanSnapshot | null;
  /** Jump directly to any index in the combined history (used by timeline). */
  jumpTo: (index: number) => ScanSnapshot | null;
  /** Lock in current position — permanently discards all redo (future) states. */
  accept: () => void;
  /** Clear all history (e.g. on workflow change). */
  reset: () => void;
  canUndo: boolean;
  canRedo: boolean;
  /** "3 / 5" — current position + 1 out of total snapshots */
  stepInfo: string;
  /** Label of the snapshot at current position */
  currentLabel: string;
  /** All snapshots before current position */
  past: ScanSnapshot[];
  /** All snapshots after current position */
  future: ScanSnapshot[];
}

export function useUndoHistory(): UndoHistoryState {
  // Linear history array — snapshots from oldest (0) to newest
  const [history, setHistory] = useState<ScanSnapshot[]>([]);
  // Pointer to the currently active snapshot (-1 = nothing in history yet)
  const [pointer, setPointer] = useState(-1);

  const push = (snapshot: Omit<ScanSnapshot, "label">, label: string) => {
    setHistory(prev => {
      // Discard any redo future, then append
      const trimmed = prev.slice(0, pointer + 1);
      const next = [...trimmed, { ...snapshot, label }];
      return next.length > MAX_HISTORY ? next.slice(next.length - MAX_HISTORY) : next;
    });
    setPointer(Math.min(pointer + 1, MAX_HISTORY - 1));
  };

  const undo = (): ScanSnapshot | null => {
    if (pointer <= 0) return null;
    const newPointer = pointer - 1;
    setPointer(newPointer);
    return history[newPointer] ?? null;
  };

  const redo = (): ScanSnapshot | null => {
    if (pointer >= history.length - 1) return null;
    const newPointer = pointer + 1;
    setPointer(newPointer);
    return history[newPointer] ?? null;
  };

  const jumpTo = (index: number): ScanSnapshot | null => {
    if (index < 0 || index >= history.length) return null;
    setPointer(index);
    return history[index];
  };

  const accept = () => {
    setHistory(prev => prev.slice(0, pointer + 1));
    // pointer stays at its current value (which is now the last index)
  };

  const reset = () => {
    setHistory([]);
    setPointer(-1);
  };

  const safePointer = Math.max(0, pointer);
  const total = history.length;

  return {
    push,
    undo,
    redo,
    jumpTo,
    accept,
    reset,
    canUndo: pointer > 0,
    canRedo: pointer < history.length - 1 && history.length > 0,
    stepInfo: total > 0 ? `${safePointer + 1} / ${total}` : "—",
    currentLabel: history[pointer]?.label ?? "",
    past: history.slice(0, pointer),
    future: history.slice(pointer + 1),
  };
}

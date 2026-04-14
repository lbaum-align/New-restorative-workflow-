import { useState, useRef, useCallback, useEffect } from "react";

const MAX_NAME_LENGTH = 30;
const VALID_NAME_REGEX = /^[A-Za-z0-9 \-_]*$/;

export interface InlineRenameHandle {
  insertChar: (char: string) => void;
  deleteChar: () => void;
  confirmEdit: () => void;
  cancelEdit: () => void;
}

export interface UseInlineRenameOptions {
  onRename: (id: string, newLabel: string) => void;
  onEditingStateChange?: (editing: boolean) => void;
  maxLength?: number;
  validRegex?: RegExp;
}

export function useInlineRename({
  onRename,
  onEditingStateChange,
  maxLength = MAX_NAME_LENGTH,
  validRegex = VALID_NAME_REGEX,
}: UseInlineRenameOptions) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [editError, setEditError] = useState<string | null>(null);
  const [charLimitReached, setCharLimitReached] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const originalLabelRef = useRef<string>("");

  const isEditing = editingId !== null;

  // Auto-focus input when entering edit mode
  useEffect(() => {
    if (editingId && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingId]);

  const startRename = useCallback(
    (id: string, currentLabel: string, e?: React.MouseEvent) => {
      e?.stopPropagation();
      setEditingId(id);
      setEditValue(currentLabel);
      setEditError(null);
      setCharLimitReached(false);
      originalLabelRef.current = currentLabel;
      onEditingStateChange?.(true);
    },
    [onEditingStateChange]
  );

  const validateInput = useCallback(
    (value: string): string | null => {
      if (!validRegex.test(value)) {
        return "Only letters, numbers, spaces, '-' and '_' are supported.";
      }
      return null;
    },
    [validRegex]
  );

  const handleEditChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const error = validateInput(raw);
      if (error) {
        setEditError(error);
        return;
      }
      if (raw.length > maxLength) {
        setCharLimitReached(true);
        setEditError(`Maximum ${maxLength} characters reached.`);
        return;
      }
      setCharLimitReached(false);
      setEditError(null);
      setEditValue(raw);
    },
    [validateInput, maxLength]
  );

  const confirmRename = useCallback(() => {
    const trimmed = editValue.trim();
    if (!trimmed) {
      // Revert to original name when empty
      if (editingId) {
        onRename(editingId, originalLabelRef.current);
      }
      setEditingId(null);
      setEditError(null);
      setCharLimitReached(false);
      onEditingStateChange?.(false);
      return;
    }
    if (!validRegex.test(trimmed)) {
      setEditError("Only letters, numbers, spaces, '-' and '_' are supported.");
      return;
    }
    if (editingId) {
      onRename(editingId, trimmed);
    }
    setEditingId(null);
    setEditError(null);
    setCharLimitReached(false);
    onEditingStateChange?.(false);
  }, [editValue, editingId, onRename, onEditingStateChange, validRegex]);

  const cancelRename = useCallback(() => {
    setEditingId(null);
    setEditError(null);
    setCharLimitReached(false);
    onEditingStateChange?.(false);
  }, [onEditingStateChange]);

  const handleEditKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        confirmRename();
      } else if (e.key === "Escape") {
        e.preventDefault();
        cancelRename();
      }
    },
    [confirmRename, cancelRename]
  );

  // Imperative handle methods for virtual keyboard integration
  const insertChar = useCallback(
    (char: string) => {
      if (!editingId) return;
      const input = inputRef.current;
      const selStart = input?.selectionStart ?? null;
      const selEnd = input?.selectionEnd ?? null;
      const hasSelection =
        input && selStart !== null && selEnd !== null && selStart !== selEnd;

      setEditValue((prev) => {
        let newVal: string;
        if (hasSelection) {
          newVal = prev.slice(0, selStart) + char + prev.slice(selEnd);
        } else {
          newVal = prev + char;
        }
        if (newVal.length > maxLength) {
          setCharLimitReached(true);
          setEditError(`Maximum ${maxLength} characters reached.`);
          return prev;
        }
        if (!validRegex.test(newVal)) {
          setEditError(
            "Only letters, numbers, spaces, '-' and '_' are supported."
          );
          return prev;
        }
        setCharLimitReached(false);
        setEditError(null);

        if (input) {
          const cursorPos =
            (hasSelection ? selStart : prev.length) + char.length;
          requestAnimationFrame(() => {
            input.setSelectionRange(cursorPos, cursorPos);
          });
        }
        return newVal;
      });
    },
    [editingId, maxLength, validRegex]
  );

  const deleteChar = useCallback(() => {
    if (!editingId) return;
    const input = inputRef.current;
    const selStart = input?.selectionStart ?? null;
    const selEnd = input?.selectionEnd ?? null;
    const hasSelection =
      input && selStart !== null && selEnd !== null && selStart !== selEnd;

    setEditValue((prev) => {
      let newVal: string;
      if (hasSelection) {
        newVal = prev.slice(0, selStart) + prev.slice(selEnd);
        if (input) {
          requestAnimationFrame(() => {
            input.setSelectionRange(selStart, selStart);
          });
        }
      } else {
        newVal = prev.slice(0, -1);
      }
      setCharLimitReached(false);
      setEditError(null);
      return newVal;
    });
  }, [editingId]);

  // The handle object to pass to a virtual keyboard or parent via ref
  const handle: InlineRenameHandle = {
    insertChar,
    deleteChar,
    confirmEdit: confirmRename,
    cancelEdit: cancelRename,
  };

  return {
    // State
    editingId,
    editValue,
    editError,
    charLimitReached,
    isEditing,

    // Refs
    inputRef,

    // Actions
    startRename,
    confirmRename,
    cancelRename,
    handleEditChange,
    handleEditKeyDown,

    // Imperative handle for keyboard integration
    handle,
    insertChar,
    deleteChar,
  };
}

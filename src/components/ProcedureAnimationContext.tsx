import { createContext, useContext, useState, ReactNode } from 'react';

interface AnimationState {
  isAnimating: boolean;
  procedureName: string;
  fromPosition: { x: number; y: number; width: number; height: number } | null;
  toPosition: { x: number; y: number; width: number; height: number } | null;
}

interface ProcedureAnimationContextType {
  animationState: AnimationState;
  startAnimation: (
    procedureName: string,
    fromPosition: { x: number; y: number; width: number; height: number },
    toPosition: { x: number; y: number; width: number; height: number }
  ) => void;
  endAnimation: () => void;
}

const ProcedureAnimationContext = createContext<ProcedureAnimationContextType | undefined>(undefined);

export function ProcedureAnimationProvider({ children }: { children: ReactNode }) {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isAnimating: false,
    procedureName: '',
    fromPosition: null,
    toPosition: null,
  });

  const startAnimation = (
    procedureName: string,
    fromPosition: { x: number; y: number; width: number; height: number },
    toPosition: { x: number; y: number; width: number; height: number }
  ) => {
    setAnimationState({
      isAnimating: true,
      procedureName,
      fromPosition,
      toPosition,
    });
  };

  const endAnimation = () => {
    setAnimationState({
      isAnimating: false,
      procedureName: '',
      fromPosition: null,
      toPosition: null,
    });
  };

  return (
    <ProcedureAnimationContext.Provider value={{ animationState, startAnimation, endAnimation }}>
      {children}
    </ProcedureAnimationContext.Provider>
  );
}

export function useProcedureAnimation() {
  const context = useContext(ProcedureAnimationContext);
  if (!context) {
    throw new Error('useProcedureAnimation must be used within ProcedureAnimationProvider');
  }
  return context;
}

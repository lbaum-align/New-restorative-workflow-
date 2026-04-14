interface BottomActionsProps {
  onBack?: () => void;
  onNext?: () => void;
  backText?: string;
  nextText?: string;
  hideBack?: boolean;
  hideNext?: boolean;
  nextDisabled?: boolean;
}

export default function BottomActions({
  onBack,
  onNext,
  backText = "Back",
  nextText = "Next",
  hideBack = false,
  hideNext = false,
  nextDisabled = false,
}: BottomActionsProps) {
  return (
    <>
      <div className="flex-1" />

      {!hideNext && (
        <div className="w-[168px] h-[64px]">
        </div>
      )}
    </>
  );
}
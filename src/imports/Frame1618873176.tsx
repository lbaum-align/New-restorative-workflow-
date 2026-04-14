function Text() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#3e3d40] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Patient name
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text />
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Field">
      <Content />
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text input" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[#ddd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
          <Field />
        </div>
      </div>
    </div>
  );
}

function Fields() {
  return (
    <div className="content-stretch flex items-center relative rounded-[20px] shrink-0 w-full" data-name="Fields">
      <TextInput />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative size-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)] w-full" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type your patient name
      </p>
      <Fields />
    </div>
  );
}
import svgPaths from "./svg-91h6vf16xe";

function Path() {
  return null;
}

function Path1() {
  return (
    <div className="absolute inset-[5.03%_5.01%_4.97%_5.03%]" data-name="Path">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Group 5415">
          <path d={svgPaths.p59c5600} fill="var(--fill-0, #F3F3F3)" id="Path 7165" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute contents inset-0" data-name="Container">
      <Path />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group 5414">
          <path d={svgPaths.p34e25a00} fill="var(--fill-0, #717073)" id="Path 7164" />
        </g>
      </svg>
      <Path1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute left-0 size-[40px] top-0" data-name="Container">
      <Container />
      <div className="absolute inset-[21.25%]" data-name="Vector">
        <div className="absolute inset-[-2.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.pdbdf480} id="Vector" stroke="var(--stroke-0, #939598)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Ellipse() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute inset-[20%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute left-1/2 size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Container">
      <div className="absolute inset-[90%_7.5%_0_7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 4">
          <path d={svgPaths.p360abb80} fill="var(--fill-0, black)" id="Ellipse 521" opacity="0.1" />
        </svg>
      </div>
      <Ellipse />
    </div>
  );
}

export default function SettingsButton() {
  return (
    <div className="relative size-full" data-name="Settings button">
      <Container2 />
    </div>
  );
}
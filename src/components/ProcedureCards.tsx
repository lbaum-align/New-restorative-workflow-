import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-h1v07yads";
import svgPathsFixedRestorative from "../imports/svg-jxvxoh7ots";
import { Check } from "lucide-react";

interface ProcedureCardsProps {
  onSelect: (procedure: string) => void;
  currentProcedure: string;
}

// Spring configs from spec
const cardSpring = { type: "spring" as const, stiffness: 400, damping: 30 };
const checkSpring = { type: "spring" as const, stiffness: 500, damping: 30 };

function CheckmarkBadge({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={checkSpring}
          className="absolute top-[16px] right-[16px] z-10 flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]"
        >
          <Check size={20} color="#009ace" strokeWidth={3} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProcedureCard({
  proc,
  selected,
  onSelect,
  renderSvg,
  index,
}: {
  proc: { id: string; bg: string; name: string; svgPaths: any; svgType: string };
  selected: boolean;
  onSelect: (id: string) => void;
  renderSvg: (svgType: string, paths: any) => React.ReactNode;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(proc.id)}
      className="content-stretch flex h-[261px] items-start justify-between px-[27px] py-[28px] relative rounded-[16px] shrink-0 flex-1 cursor-pointer text-left"
      style={{
        backgroundColor: proc.bg,
        // Border & shadow applied via inline style for instant response (not animated by Motion)
        border: selected ? "4px solid white" : "4px solid transparent",
        boxShadow: selected
          ? "0px 4px 8px 0px rgba(0,0,0,0.3), 0px 8px 24px 0px rgba(0,0,0,0.2)"
          : "none",
        touchAction: "manipulation",
      }}
      // Initial animation when cards appear
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: selected ? 1.02 : 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        ...cardSpring,
        delay: index * 0.05, // Stagger effect
      }}
      whileHover={{
        scale: selected ? 1.03 : 1.01,
        transition: { type: "spring", stiffness: 500, damping: 25 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Checkmark badge */}
      <CheckmarkBadge visible={selected} />

      <div className="content-stretch flex flex-col h-[196px] items-end justify-between leading-[0] relative shrink-0 w-full max-w-[480px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
            <p
              className="col-1 font-['Roboto:Medium',sans-serif] font-medium leading-[40px] ml-0 mt-0 relative row-1 text-[#f0f0f0] text-[32px] whitespace-pre-wrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {proc.name}
            </p>
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          {renderSvg(proc.svgType, proc.svgPaths)}
        </div>
      </div>
    </motion.button>
  );
}

export default function ProcedureCards({
  onSelect,
  currentProcedure,
}: ProcedureCardsProps) {
  const procedureCards = [
    { id: "Study model", bg: "#009ace", name: "Study model", svgPaths: svgPaths, svgType: "study" },
    { id: "Invisalign", bg: "#0072a3", name: "Invisalign", svgPaths: svgPaths, svgType: "invisalign" },
    { id: "Fixed restorative", bg: "#005780", name: "Fixed restorative", svgPaths: svgPathsFixedRestorative, svgType: "fixed" },
    { id: "Appliances", bg: "#008ec2", name: "Appliance", svgPaths: svgPaths, svgType: "appliance" },
    { id: "Dentures", bg: "#006796", name: "Dentures", svgPaths: svgPaths, svgType: "dentures" },
    { id: "Scan for surgical guide", bg: "#005780", name: "Scan for surgical guide", svgPaths: svgPaths, svgType: "surgical" },
    { id: "All on X", bg: "#003f5e", name: "All on X", svgPaths: svgPaths, svgType: "allonx" },
  ];

  const renderSvg = (svgType: string, paths: any) => {
    if (svgType === "fixed") {
      return (
        <div className="col-1 h-[115.925px] ml-0 mt-0 relative row-1 w-[80.339px]">
          <div className="absolute inset-[-0.54%_-0.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.5892 117.176">
              <g id="Group">
                <path d={paths.p21d92200} id="Vector" stroke="white" strokeLinejoin="round" strokeWidth="1.25" />
                <path d={paths.p304a7b00} id="Vector_2" stroke="white" strokeLinejoin="round" strokeWidth="1.25" />
              </g>
            </svg>
          </div>
        </div>
      );
    }
    if (svgType === "study") {
      return (
        <div className="col-1 h-[150px] ml-0 mt-0 relative row-1 w-[133.338px]">
          <div className="absolute inset-[-0.42%_-0.35%_-0.42%_-0.47%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.432 151.251">
              <g id="Group">
                <g id="Group_2">
                  <path d={paths.pbb81e00} id="Vector" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                  <path d={paths.p11aff340} id="Vector_2" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                  <path d={paths.p4ce6fbe} id="Vector_3" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                </g>
                <path d={paths.pf659c80} id="Vector_4" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d={paths.p522a200} id="Vector_5" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d={paths.p32269e20} id="Vector_6" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
              </g>
            </svg>
          </div>
        </div>
      );
    }
    if (svgType === "invisalign") {
      return (
        <div className="h-[139.927px] relative shrink-0 w-[247.301px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247.301 139.927">
            <g id="Group 1511076965">
              <path d={paths.pc66d500} id="Vector" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
              <path d={paths.pb7f1200} id="Vector_2" stroke="white" strokeMiterlimit="10" strokeWidth="1.25" />
            </g>
          </svg>
        </div>
      );
    }
    return <div className="h-[100px] w-[100px]" />;
  };

  return (
    <div className="bg-white rounded-[8px] py-[40px] px-[40px] flex flex-col gap-[40px] w-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]">
      {/* Title */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p
          className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.93)]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          What are you scanning today?
        </p>
      </div>

      {/* Card Rows Container */}
      <div className="flex flex-col gap-[16px] w-full">
        {/* Top Row - 3 cards */}
        <div className="flex items-center gap-[12px] w-full">
          {procedureCards.slice(0, 3).map((proc, index) => (
            <ProcedureCard
              key={proc.id}
              proc={proc}
              selected={proc.id === currentProcedure}
              onSelect={onSelect}
              renderSvg={renderSvg}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Row - 4 cards */}
        <div className="flex gap-[12px] items-center w-full">
          {procedureCards.slice(3).map((proc, index) => (
            <ProcedureCard
              key={proc.id}
              proc={proc}
              selected={proc.id === currentProcedure}
              onSelect={onSelect}
              renderSvg={renderSvg}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
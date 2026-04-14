import Home4Sq from "../imports/Home4Sq-130-12995";

interface RestoHomeProps {
  onBack: () => void;
}

export default function RestoHome({ onBack }: RestoHomeProps) {
  return (
    <div className="min-h-screen bg-[#85868a] relative">
      {/* Main Container */}
      <div className="w-full h-screen">
        <Home4Sq />
      </div>
    </div>
  );
}
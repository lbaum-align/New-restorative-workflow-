import { motion } from "motion/react";

interface HomePageProps {
  onNavigate: (destination: 'flow' | 'resto' | 'iteroHome' | 'scanGuidance') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-[48px] mb-4 text-[#0067ac]">Flexible Rx and multi layer flow</h1>
        </div>
        
        <div className="flex justify-center gap-8">
          {/* Patient Flow Card */}
          <button
            onClick={() => onNavigate('iteroHome')}
            className="bg-white rounded-[12px] p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 border-transparent hover:border-[#5FCEFA] group max-w-md w-full"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#d7edf6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5FCEFA] transition-colors">
                <svg className="w-12 h-12 text-[#0067ac]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h2 className="text-[28px] mb-3 text-[#0067ac]">Test flow</h2>
              <p className="text-gray-600 text-[18px]">
                Test the new workflow including flexible Rx, multi-layer in scan and view tools
              </p>
            </div>
          </button>

          {/* Scan Guidance Card */}
          <button
            onClick={() => onNavigate('scanGuidance')}
            className="bg-white rounded-[12px] p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 border-transparent hover:border-[#5FCEFA] group max-w-md w-full"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#d7edf6] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5FCEFA] transition-colors">
                <svg className="w-12 h-12 text-[#0067ac]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-[28px] mb-3 text-[#0067ac]">Scan Guidance</h2>
              <p className="text-gray-600 text-[18px]">
                Explore scan guidance modes with 3D model, ghost wand and directional arrows
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

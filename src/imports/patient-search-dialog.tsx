import { useState } from 'react';
import { Search } from 'lucide-react';

interface PatientSearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPatient?: (patient: Patient) => void;
}

interface Patient {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  chartNumber: string;
}

export default function PatientSearchDialog({ isOpen, onClose, onSelectPatient }: PatientSearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  // Mock patient data for demonstration
  const mockPatients: Patient[] = [
    { fullName: 'John Smith', gender: 'Male', dateOfBirth: '03/15/1985', chartNumber: 'CH-1001' },
    { fullName: 'Jane Doe', gender: 'Female', dateOfBirth: '07/22/1990', chartNumber: 'CH-1002' },
    { fullName: 'Robert Johnson', gender: 'Male', dateOfBirth: '11/05/1978', chartNumber: 'CH-1003' },
  ];

  const filteredPatients = searchQuery.length >= 3 
    ? mockPatients.filter(p => 
        p.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.chartNumber.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelectPatient = () => {
    if (selectedPatient && onSelectPatient) {
      onSelectPatient(selectedPatient);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div 
          className="bg-white rounded-[8px] shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)] w-[480px] pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-[24px] pt-[24px] pb-[16px] border-b border-[#e0e0e0]">
            <h2 className="font-['Roboto',sans-serif] font-medium text-[20px] text-[#3e3d40] mb-[16px]">
              Search Patient
            </h2>
            
            <input
              type="text"
              placeholder="Type at least 3 letters"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-[12px] py-[8px] border border-[#e0e0e0] rounded-[4px] font-['Roboto',sans-serif] text-[14px] text-[#3e3d40] focus:outline-none focus:border-[#00B8D4] transition-colors"
            />
          </div>

          {/* Table Header */}
          <div className="px-[24px] py-[12px] border-b border-[#e0e0e0] bg-[#f5f5f5]">
            <div className="grid grid-cols-[2fr_1fr_1.5fr_1fr] gap-[16px]">
              <div className="font-['Roboto',sans-serif] font-medium text-[12px] text-[#00B8D4]">
                Full Name
              </div>
              <div className="font-['Roboto',sans-serif] font-medium text-[12px] text-[#00B8D4]">
                Gender
              </div>
              <div className="font-['Roboto',sans-serif] font-medium text-[12px] text-[#00B8D4]">
                Date of Birth
              </div>
              <div className="font-['Roboto',sans-serif] font-medium text-[12px] text-[#00B8D4]">
                Chart #
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="px-[24px] py-[24px] min-h-[300px] max-h-[400px] overflow-auto">
            {searchQuery.length < 3 ? (
              <div className="flex flex-col items-center justify-center h-[250px]">
                <Search className="w-[48px] h-[48px] text-[#bdbdbd] mb-[16px]" strokeWidth={1.5} />
                <p className="font-['Roboto',sans-serif] text-[14px] text-[#757575]">
                  Type at least 3 letters
                </p>
              </div>
            ) : filteredPatients.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[250px]">
                <Search className="w-[48px] h-[48px] text-[#bdbdbd] mb-[16px]" strokeWidth={1.5} />
                <p className="font-['Roboto',sans-serif] text-[14px] text-[#757575]">
                  No patients found
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-[4px]">
                {filteredPatients.map((patient, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPatient(patient)}
                    className={`grid grid-cols-[2fr_1fr_1.5fr_1fr] gap-[16px] px-[12px] py-[12px] rounded-[4px] cursor-pointer transition-colors ${
                      selectedPatient === patient 
                        ? 'bg-[#e0f7fa]' 
                        : 'hover:bg-[#f5f5f5]'
                    }`}
                  >
                    <div className="font-['Roboto',sans-serif] text-[14px] text-[#3e3d40]">
                      {patient.fullName}
                    </div>
                    <div className="font-['Roboto',sans-serif] text-[14px] text-[#3e3d40]">
                      {patient.gender}
                    </div>
                    <div className="font-['Roboto',sans-serif] text-[14px] text-[#3e3d40]">
                      {patient.dateOfBirth}
                    </div>
                    <div className="font-['Roboto',sans-serif] text-[14px] text-[#3e3d40]">
                      {patient.chartNumber}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-[24px] py-[16px] border-t border-[#e0e0e0] flex justify-end gap-[12px]">
            <button
              onClick={onClose}
              className="px-[24px] py-[8px] rounded-[4px] font-['Roboto',sans-serif] font-medium text-[14px] text-[#3e3d40] hover:bg-[#f5f5f5] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSelectPatient}
              disabled={!selectedPatient}
              className={`px-[24px] py-[8px] rounded-[4px] font-['Roboto',sans-serif] font-medium text-[14px] transition-colors ${
                selectedPatient
                  ? 'bg-[#00B8D4] text-white hover:bg-[#00ACC1]'
                  : 'bg-[#e0e0e0] text-[#9e9e9e] cursor-not-allowed'
              }`}
            >
              Select Patient
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

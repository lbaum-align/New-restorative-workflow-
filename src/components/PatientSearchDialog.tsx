import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';

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

// Highlight matching text with bold
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query || query.length < 1) return <>{text}</>;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return (
    <>
      {before}
      <span style={{ fontWeight: 700 }}>{match}</span>
      {after}
    </>
  );
}

const mockPatients: Patient[] = [
  { fullName: 'MottiTest', gender: 'Male', dateOfBirth: '03/15/1985', chartNumber: '22A' },
  { fullName: 'MottiTest2', gender: 'Male', dateOfBirth: '07/22/1990', chartNumber: '23A.1noSWO' },
  { fullName: 'Test 1', gender: 'Female', dateOfBirth: '11/05/1978', chartNumber: '23B1' },
  { fullName: 'Test2', gender: 'Male', dateOfBirth: '05/12/1992', chartNumber: '23b1' },
  { fullName: 'John Smith', gender: 'Male', dateOfBirth: '01/18/1995', chartNumber: 'CH-1001' },
  { fullName: 'Jane Doe', gender: 'Female', dateOfBirth: '12/03/1973', chartNumber: 'CH-1002' },
  { fullName: 'Robert Johnson', gender: 'Male', dateOfBirth: '06/27/1988', chartNumber: 'CH-1003' },
  { fullName: 'Sarah Williams', gender: 'Female', dateOfBirth: '04/09/1976', chartNumber: 'CH-1004' },
  { fullName: 'Michael Brown', gender: 'Male', dateOfBirth: '08/21/1993', chartNumber: 'CH-1005' },
  { fullName: 'Emily Davis', gender: 'Female', dateOfBirth: '02/14/1982', chartNumber: 'CH-1006' },
  { fullName: 'James Wilson', gender: 'Male', dateOfBirth: '10/06/1987', chartNumber: 'CH-1007' },
  { fullName: 'Jennifer Martinez', gender: 'Female', dateOfBirth: '07/19/1979', chartNumber: 'CH-1008' },
  { fullName: 'David Anderson', gender: 'Male', dateOfBirth: '11/25/1991', chartNumber: 'CH-1009' },
  { fullName: 'Jessica Taylor', gender: 'Female', dateOfBirth: '03/08/1984', chartNumber: 'CH-1010' },
  { fullName: 'Daniel Thomas', gender: 'Male', dateOfBirth: '09/30/1981', chartNumber: 'CH-1011' },
  { fullName: 'Amanda Jackson', gender: 'Female', dateOfBirth: '05/20/1989', chartNumber: 'CH-1012' },
  { fullName: 'Christopher White', gender: 'Male', dateOfBirth: '08/14/1975', chartNumber: 'CH-1013' },
  { fullName: 'Samantha Harris', gender: 'Female', dateOfBirth: '12/01/1994', chartNumber: 'CH-1014' },
  { fullName: 'Matthew Clark', gender: 'Male', dateOfBirth: '04/17/1983', chartNumber: 'CH-1015' },
  { fullName: 'TestPatient Alpha', gender: 'Male', dateOfBirth: '01/01/2000', chartNumber: '04ca2628-5aff' },
  { fullName: 'TestPatient Beta', gender: 'Female', dateOfBirth: '06/15/1996', chartNumber: '1ef51605-fa18' },
];

export default function PatientSearchDialog({ isOpen, onClose, onSelectPatient }: PatientSearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const filteredPatients = useMemo(() => {
    if (searchQuery.trim().length === 0) return [];
    const q = searchQuery.toLowerCase().trim();
    return mockPatients.filter(p =>
      p.fullName.toLowerCase().includes(q) ||
      p.chartNumber.toLowerCase().includes(q) ||
      p.gender.toLowerCase().includes(q) ||
      p.dateOfBirth.includes(searchQuery.trim())
    );
  }, [searchQuery]);

  const handleSelectPatient = () => {
    if (selectedPatient && onSelectPatient) {
      onSelectPatient(selectedPatient);
    }
    handleClose();
  };

  const handleClose = () => {
    setSearchQuery('');
    setSelectedPatient(null);
    onClose();
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedPatient(null);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={handleClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ pointerEvents: 'none' }}>
        <div
          className="flex flex-col"
          style={{
            pointerEvents: 'auto',
            width: '680px',
            backgroundColor: '#e8e8e8',
            borderRadius: '4px',
            boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header area — gray background */}
          <div
            style={{
              backgroundColor: '#e8e8e8',
              borderRadius: '4px 4px 0 0',
              padding: '24px 28px 16px 28px',
            }}
          >
            <div className="flex items-center justify-between gap-[24px]">
              <h2
                className="shrink-0"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#3e3d40',
                  margin: 0,
                }}
              >
                Search Patient
              </h2>
              <div className="relative" style={{ width: '280px' }}>
                <input
                  type="text"
                  placeholder="Type to search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedPatient(null);
                  }}
                  autoFocus
                  className="w-full focus:outline-none"
                  style={{
                    padding: '8px 36px 8px 12px',
                    borderRadius: '4px',
                    border: searchQuery.length > 0 ? '2px solid #009BFB' : '1px solid #b0b1b3',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#3e3d40',
                    backgroundColor: '#ffffff',
                  }}
                />
                {searchQuery.length > 0 ? (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-[8px] top-1/2 -translate-y-1/2 cursor-pointer bg-transparent flex items-center justify-center"
                    style={{ border: 'none', padding: '2px' }}
                  >
                    <X size={16} color="#939598" />
                  </button>
                ) : (
                  <Search
                    className="absolute right-[10px] top-1/2 -translate-y-1/2"
                    size={16}
                    color="#939598"
                    strokeWidth={2}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Table area — white background */}
          <div
            style={{
              backgroundColor: '#ffffff',
              margin: '0 12px',
              borderRadius: '4px 4px 0 0',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Table Header */}
            <div
              style={{
                padding: '10px 20px',
                borderBottom: '2px solid #009BFB',
              }}
            >
              <div className="grid grid-cols-[2fr_1fr_1.5fr_1fr] gap-[16px]">
                {['Full Name', 'Gender', 'Date of Birth', 'Chart #'].map((label) => (
                  <div
                    key={label}
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 500,
                      fontSize: '13px',
                      lineHeight: '20px',
                      color: '#009BFB',
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div
              style={{
                minHeight: '260px',
                maxHeight: '360px',
                overflowY: 'auto',
                padding: '0',
              }}
            >
              {searchQuery.trim().length === 0 ? (
                <div className="flex flex-col items-center justify-center" style={{ height: '240px' }}>
                  <Search className="mb-[12px]" size={44} color="#bdbdbd" strokeWidth={1.5} />
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#757575',
                      margin: 0,
                    }}
                  >
                    Type to search for patients
                  </p>
                </div>
              ) : filteredPatients.length === 0 ? (
                <div className="flex flex-col items-center justify-center" style={{ height: '240px' }}>
                  <Search className="mb-[12px]" size={44} color="#bdbdbd" strokeWidth={1.5} />
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#757575',
                      margin: 0,
                    }}
                  >
                    No patients found
                  </p>
                </div>
              ) : (
                <div className="flex flex-col">
                  {filteredPatients.map((patient, index) => {
                    const isSelected = selectedPatient?.chartNumber === patient.chartNumber;
                    return (
                      <div
                        key={patient.chartNumber + '-' + index}
                        onClick={() => setSelectedPatient(patient)}
                        className="grid grid-cols-[2fr_1fr_1.5fr_1fr] gap-[16px] cursor-pointer transition-colors"
                        style={{
                          padding: '10px 20px',
                          backgroundColor: isSelected ? '#e0f7fa' : undefined,
                          borderBottom: index < filteredPatients.length - 1 ? '1px solid #e0e0e0' : undefined,
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) e.currentTarget.style.backgroundColor = '#f5f5f5';
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) e.currentTarget.style.backgroundColor = '';
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#3e3d40',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <HighlightText text={patient.chartNumber + ', ' + patient.fullName} query={searchQuery.trim()} />
                        </div>
                        <div
                          style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#3e3d40',
                          }}
                        >
                          {patient.gender}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#3e3d40',
                          }}
                        >
                          {patient.dateOfBirth}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#3e3d40',
                          }}
                        >
                          {patient.chartNumber}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Footer — white background, buttons aligned to end */}
          <div
            className="flex justify-end gap-[20px]"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '0 0 4px 4px',
              padding: '16px 20px 20px 20px',
              margin: '0 12px 12px 12px',
            }}
          >
            {/* Cancel — outlined secondary style */}
            <button
              type="button"
              onClick={handleClose}
              className="flex items-center justify-center cursor-pointer transition-colors"
              style={{
                height: '60px',
                minWidth: 140,
                padding: '0 32px',
                borderRadius: '4px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #939598',
              }}
            >
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#3e3d40',
                }}
              >
                Cancel
              </span>
            </button>

            {/* Select Patient — primary style matching Next button */}
            <button
              type="button"
              onClick={handleSelectPatient}
              disabled={!selectedPatient}
              className="flex items-center justify-center transition-colors"
              style={{
                height: '60px',
                minWidth: 160,
                padding: '0 32px',
                borderRadius: '4px',
                backgroundColor: selectedPatient ? '#bfeafb' : '#e0e0e0',
                border: `1px solid ${selectedPatient ? '#408dc1' : '#c0c0c0'}`,
                cursor: selectedPatient ? 'pointer' : 'not-allowed',
              }}
            >
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: selectedPatient ? '#0067ac' : '#9e9e9e',
                }}
              >
                Select Patient
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
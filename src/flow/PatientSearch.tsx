import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PatientList, { Patient } from "../components/PatientList";
import Header from "../components/Header";
import BottomActions from "../components/BottomActions";
import { Home, ChevronLeft } from "lucide-react";

interface PatientSearchProps {
  onBack: () => void;
  onNext: () => void;
  onCreateNew: () => void;
  onPatientSelect?: (patient: Patient) => void;
  onNavigateToMultiLayer?: () => void;
  onNavigateToView?: () => void;
}

// Mock patient data
const mockPatients: Patient[] = [
  {
    id: "1",
    firstName: "Sarah",
    lastName: "Johnson",
    dateOfBirth: "03/15/1985",
    gender: "female",
    chartNumber: "202401523",
  },
  {
    id: "2",
    firstName: "Michael",
    lastName: "Chen",
    dateOfBirth: "07/22/1978",
    gender: "male",
    chartNumber: "202402847",
  },
  {
    id: "3",
    firstName: "Emily",
    lastName: "Rodriguez",
    dateOfBirth: "11/08/1992",
    gender: "female",
    chartNumber: "202403156",
  },
  {
    id: "4",
    firstName: "David",
    lastName: "Thompson",
    dateOfBirth: "05/30/1980",
    gender: "male",
    chartNumber: "202404972",
  },
  {
    id: "5",
    firstName: "Jessica",
    lastName: "Martinez",
    dateOfBirth: "09/12/1995",
    gender: "female",
    chartNumber: "202405684",
  },
  {
    id: "6",
    firstName: "Robert",
    lastName: "Williams",
    dateOfBirth: "02/18/1972",
    gender: "male",
    chartNumber: "202406239",
  },
  {
    id: "7",
    firstName: "Amanda",
    lastName: "Davis",
    dateOfBirth: "06/25/1988",
    gender: "female",
    chartNumber: "202407891",
  },
  {
    id: "8",
    firstName: "James",
    lastName: "Miller",
    dateOfBirth: "12/03/1975",
    gender: "male",
    chartNumber: "202408345",
  },
  {
    id: "9",
    firstName: "Lisa",
    lastName: "Anderson",
    dateOfBirth: "04/17/1990",
    gender: "female",
    chartNumber: "202409567",
  },
  {
    id: "10",
    firstName: "Christopher",
    lastName: "Taylor",
    dateOfBirth: "08/09/1983",
    gender: "male",
    chartNumber: "202410238",
  },
  {
    id: "11",
    firstName: "Jennifer",
    lastName: "Moore",
    dateOfBirth: "01/28/1987",
    gender: "female",
    chartNumber: "202411792",
  },
  {
    id: "12",
    firstName: "Matthew",
    lastName: "Jackson",
    dateOfBirth: "10/14/1979",
    gender: "male",
    chartNumber: "202412463",
  },
  {
    id: "13",
    firstName: "Ashley",
    lastName: "White",
    dateOfBirth: "03/22/1994",
    gender: "female",
    chartNumber: "202413854",
  },
  {
    id: "14",
    firstName: "Daniel",
    lastName: "Harris",
    dateOfBirth: "07/06/1981",
    gender: "male",
    chartNumber: "202414625",
  },
  {
    id: "15",
    firstName: "Mina",
    lastName: "Young",
    dateOfBirth: "09/18/1991",
    gender: "female",
    chartNumber: "202415937",
  },
];

export default function PatientSearch({
  onBack,
  onNext,
  onCreateNew,
  onPatientSelect,
  onNavigateToMultiLayer,
  onNavigateToView,
}: PatientSearchProps) {
  const [activeSteps, setActiveSteps] = useState({
    rx: true,
    stepIcon: false,
    scan: false,
    search: false,
    email: false,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleStepToggle = (step: string) => {
    if (step === 'stepIcon' && onNavigateToMultiLayer) {
      onNavigateToMultiLayer();
      return;
    }
    
    setActiveSteps({
      rx: step === "rx",
      stepIcon: step === "stepIcon",
      scan: step === "scan",
      search: step === "search",
      email: step === "email",
    });
  };

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
    if (onPatientSelect) {
      onPatientSelect(patient);
    }
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setSelectedPatient(null);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-[250]">
        <Header activeSteps={activeSteps} onStepToggle={handleStepToggle} onNavigateToScan={onNavigateToMultiLayer} onNavigateToView={onNavigateToView} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Search Container */}
        <div className="px-[46px] pt-[52px] flex-1">
          <div className="content-stretch flex flex-col gap-[40px] items-start relative w-full">
            {/* Search Bar */}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
              label="Create a new patient"
              placeholder="Type your patient name"
            />

            {/* Patient List */}
            <PatientList
              patients={mockPatients}
              onPatientSelect={handlePatientSelect}
              searchQuery={searchQuery}
            />
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <BottomActions
          onBack={onBack}
          onNext={selectedPatient ? onNext : onCreateNew}
          backText="Back"
          nextText={selectedPatient ? "Continue" : "Create New Patient"}
        />
      </div>
    </div>
  );
}
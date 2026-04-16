import { useState, useEffect } from 'react';
import { LayoutGroup } from 'motion/react';
import { Patient } from './components/PatientList';
import HomePage from './HomePage';
import PatientSearch from './flow/PatientSearch';
import CreatePatient from './flow/CreatePatient';
import RestoHome from './flow/RestoHome';
import ScanningSelection from './flow/ScanningSelection';
import NewScan from './flow/NewScan';
import Dentures from './flow/Dentures';
import Appliances from './flow/Appliances';
import Invisalign from './flow/Invisalign';
import ImplantPlanning from './flow/ImplantPlanning';
import IteroHomepage from './components/IteroHomepage';
import PatientDetailsForm from './components/PatientDetailsForm';
import ScanPageMultiLayer from './flow/ScanPageMultiLayer';
import MultiLayerView from './flow/MultiLayerView';
import Summary from './flow/Summary';

// Application entrypoint with full workflow support
type View = 'home' | 'flow' | 'resto' | 'iteroHome' | 'patientDetails' | 'scanGuidance';
type FlowStep = 'search' | 'create' | 'scanning' | 'newScan' | 'scanMultiLayer' | 'multiLayerView' | 'summary';

// Define scan layer type
export interface ScannedLayer {
  id: string;
  label: string;
  type: "treatment" | "bite" | "pre-treatment" | "additional";
  scannedJaws: {
    upper: boolean;
    lower: boolean;
    bite: boolean;
  };
}

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [flowStep, setFlowStep] = useState<FlowStep>('search');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [selectedScanType, setSelectedScanType] = useState<string | null>(null);
  const [originalProcedureScanType, setOriginalProcedureScanType] = useState<string | null>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);
  const [scannedLayers, setScannedLayers] = useState<ScannedLayer[]>([]);
  const [toothTreatments, setToothTreatments] = useState<{ [tooth: string]: string }>({});
  const [toothSpecifications, setToothSpecifications] = useState<{ [tooth: string]: { [key: string]: string } }>({});
  const [selectedBiteOptions, setSelectedBiteOptions] = useState<string[]>([]);
  const [preTreatmentEnabled, setPreTreatmentEnabled] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea/select
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT'
      ) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'r':
          // R - Restart (go to home)
          setCurrentView('home');
          setFlowStep('search');
          setSelectedPatient(null);
          break;

        case 'escape':
          // Escape - Go back to home
          setCurrentView('home');
          setFlowStep('search');
          setSelectedPatient(null);
          break;

        case 'arrowleft':
          // Arrow Left - Go back one step
          e.preventDefault();
          if (currentView === 'flow') {
            handleFlowBack();
          } else if (currentView !== 'home') {
            handleBack();
          }
          break;

        case 'arrowright':
          // Arrow Right - Go forward (if applicable)
          e.preventDefault();
          if (currentView === 'flow' && selectedPatient && flowStep === 'search') {
            setFlowStep('scanning');
          }
          break;

        case '1':
          // 1 - Go to Flow
          if (currentView === 'home') {
            setCurrentView('iteroHome');
          }
          break;

        case '2':
          // 2 - Go to Flow (patient search)
          if (currentView === 'home') {
            setCurrentView('flow');
            setFlowStep('search');
            setSelectedPatient(null);
          }
          break;

        case '3':
          // 3 - Go to Resto
          if (currentView === 'home') {
            setCurrentView('resto');
          }
          break;

        case 'h':
          // H - Go to Home
          setCurrentView('home');
          setFlowStep('search');
          setSelectedPatient(null);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, flowStep, selectedPatient]);

  const handleNavigate = (destination: 'flow' | 'resto' | 'iteroHome' | 'scanGuidance') => {
    if (destination === 'flow') {
      setCurrentView('iteroHome');
      setSelectedPatient(null);
    } else {
      setCurrentView(destination);
    }
  };

  const handleBack = () => {
    setCurrentView('home');
    setFlowStep('search');
    setSelectedPatient(null);
  };

  const handleFlowBack = () => {
    if (flowStep === 'newScan') {
      setFlowStep('scanning');
    } else if (flowStep === 'scanning') {
      setFlowStep('search');
    } else if (flowStep === 'create') {
      setFlowStep('search');
    } else {
      // From patient search, go back to iTero Homepage
      setCurrentView('iteroHome');
    }
  };

  const handleNextInFlow = () => {
    if (flowStep === 'search') {
      // This will be called when a patient is selected
      setFlowStep('scanning');
    } else if (flowStep === 'create') {
      // After creating a patient, go to scanning
      alert('Patient created!');
      setFlowStep('scanning');
    } else if (flowStep === 'scanning') {
      // For now, just go back to home
      alert('Scan type selected! More flow screens coming soon...');
      setCurrentView('home');
      setFlowStep('search');
      setSelectedPatient(null);
    } else if (flowStep === 'newScan') {
      // For now, just go back to home
      alert('New scan created! More flow screens coming soon...');
      setCurrentView('home');
      setFlowStep('search');
      setSelectedPatient(null);
    } else if (flowStep === 'scanMultiLayer') {
      // For now, just go back to home
      alert('Multi-layer scan created! More flow screens coming soon...');
      setCurrentView('home');
      setFlowStep('search');
      setSelectedPatient(null);
    } else if (flowStep === 'multiLayerView') {
      // For now, just go back to home
      alert('Multi-layer view created! More flow screens coming soon...');
      setCurrentView('home');
      setFlowStep('search');
      setSelectedPatient(null);
    } else if (flowStep === 'summary') {
      // For now, just go back to home
      alert('Summary created! More flow screens coming soon...');
      setCurrentView('home');
      setFlowStep('search');
      setSelectedPatient(null);
    }
  };

  const handleCreateNew = () => {
    setFlowStep('create');
  };

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
    setFlowStep('scanning');
  };

  const handleProcedureChange = (procedureName: string) => {
    // Map procedure names to scan types
    const procedureMap: { [key: string]: string } = {
      "Study model": "studyModel",
      "Invisalign": "invisalign",
      "Fixed restorative": "fixedRestorative",
      "Crown & Bridge": "crown",
      "Crown": "crown",
      "Appliances": "appliances",
      "Dentures": "dentures",
      "Scan for surgical guide": "surgicalGuide",
      "All on X": "allOnX",
      "Implant planning": "implantPlanning",
      "Implant Planning": "implantPlanning",
      "Implant based": "implantPlanning",
      "Implant-based": "implantPlanning",
    };

    const newScanType = procedureMap[procedureName] || "general";
    setSelectedScanType(newScanType);
    setOriginalProcedureScanType(newScanType);
    setSelectedProcedure(procedureName);
  };

  // Global handler to navigate to multi-layer scan page from anywhere
  const handleNavigateToMultiLayer = () => {
    // If no patient is selected, create a default one
    if (!selectedPatient) {
      setSelectedPatient({
        id: "default",
        firstName: "Demo",
        lastName: "Patient",
        dateOfBirth: "01/01/1990",
        gender: "female",
        chartNumber: "847392561",
      });
    }
    setCurrentView('flow');
    setFlowStep('scanMultiLayer');
  };

  // Global handler to navigate to multi-layer view page from anywhere
  const handleNavigateToView = () => {
    // If no patient is selected, create a default one
    if (!selectedPatient) {
      setSelectedPatient({
        id: "default",
        firstName: "Demo",
        lastName: "Patient",
        dateOfBirth: "01/01/1990",
        gender: "female",
        chartNumber: "847392561",
      });
    }
    setCurrentView('flow');
    setFlowStep('multiLayerView');
  };

  // Handler for when user clicks edit icon in procedure button
  const handleProcedureEdit = () => {
    // Navigate back to scanning selection page (keep patient context)
    setFlowStep('scanning');
    setSelectedScanType(originalProcedureScanType);
  };

  // Handler for navigating to summary page
  const handleNavigateToSummary = () => {
    if (!selectedPatient) {
      setSelectedPatient({
        id: "default",
        firstName: "Demo",
        lastName: "Patient",
        dateOfBirth: "01/01/1990",
        gender: "female",
        chartNumber: "847392561",
      });
    }
    setCurrentView('flow');
    setFlowStep('summary');
  };

  // Handler for navigating back to Rx (newScan) page
  const handleNavigateToRx = () => {
    if (!selectedPatient) {
      setSelectedPatient({
        id: "default",
        firstName: "Demo",
        lastName: "Patient",
        dateOfBirth: "01/01/1990",
        gender: "female",
        chartNumber: "847392561",
      });
    }
    setCurrentView('flow');
    setFlowStep('newScan');
  };

  if (currentView === 'flow') {
    if (flowStep === 'search') {
      return (
        <LayoutGroup>
          <PatientSearch
            onBack={handleBack}
            onNext={handleNextInFlow}
            onCreateNew={handleCreateNew}
            onPatientSelect={handlePatientSelect}
            onNavigateToMultiLayer={handleNavigateToMultiLayer}
            onNavigateToView={handleNavigateToView}
          />
        </LayoutGroup>
      );
    }
    if (flowStep === 'create') {
      return (
        <LayoutGroup>
          <CreatePatient onBack={handleFlowBack} onNext={handleNextInFlow} onNavigateToMultiLayer={handleNavigateToMultiLayer} onNavigateToView={handleNavigateToView} />
        </LayoutGroup>
      );
    }
    if (flowStep === 'scanning' && selectedPatient) {
      return (
        <LayoutGroup>
          <ScanningSelection
            onNext={(scanType: string) => {
              setSelectedScanType(scanType);
              setOriginalProcedureScanType(scanType);
              // Set initial procedure name based on scan type
              const scanTypeToProcedure: { [key: string]: string } = {
                "studyModel": "Study model",
                "invisalign": "Invisalign",
                "fixed-restorative": "Fixed restorative",
                "fixedRestorative": "Fixed restorative",
                "appliances": "Appliances",
                "dentures": "Dentures",
                "surgicalGuide": "Scan for surgical guide",
                "allOnX": "All on X",
                "implantPlanning": "Implant planning",
              };
              setSelectedProcedure(scanTypeToProcedure[scanType] || scanType);
              setFlowStep('newScan');
            }}
            patient={selectedPatient}
            onNavigateToMultiLayer={handleNavigateToMultiLayer}
          />
        </LayoutGroup>
      );
    }
    if (flowStep === 'newScan' && selectedPatient) {
      // Check if the scan type is "dentures"
      if (selectedScanType === 'dentures') {
        return (
          <LayoutGroup>
            <Dentures
              onBack={handleFlowBack}
              onNext={handleNextInFlow}
              patient={selectedPatient}
              scanType={selectedScanType}
              onProcedureChange={handleProcedureChange}
              onNavigateToMultiLayer={handleNavigateToMultiLayer}
              onProcedureEdit={handleProcedureEdit}
              onNavigateToSummary={handleNavigateToSummary}
            />
          </LayoutGroup>
        );
      }
      
      // Check if the scan type is "appliances"
      if (selectedScanType === 'appliances') {
        return (
          <LayoutGroup>
            <Appliances
              onBack={handleFlowBack}
              onNext={handleNextInFlow}
              patient={selectedPatient}
              scanType={selectedScanType}
              onProcedureChange={handleProcedureChange}
              onNavigateToMultiLayer={handleNavigateToMultiLayer}
              onProcedureEdit={handleProcedureEdit}
              onNavigateToSummary={handleNavigateToSummary}
            />
          </LayoutGroup>
        );
      }
      
      // Check if the scan type is "invisalign"
      if (selectedScanType === 'invisalign') {
        return (
          <LayoutGroup>
            <Invisalign
              onBack={handleFlowBack}
              onNext={handleNextInFlow}
              patient={selectedPatient}
              scanType={selectedScanType}
              onProcedureChange={handleProcedureChange}
              onNavigateToMultiLayer={handleNavigateToMultiLayer}
              onProcedureEdit={handleProcedureEdit}
            />
          </LayoutGroup>
        );
      }
      
      // Check if the scan type is "implantPlanning"
      if (selectedScanType === 'implantPlanning') {
        return (
          <LayoutGroup>
            <ImplantPlanning
              onBack={handleFlowBack}
              onNext={handleNextInFlow}
              patient={selectedPatient}
              scanType={selectedScanType}
              onProcedureChange={handleProcedureChange}
              onNavigateToMultiLayer={handleNavigateToMultiLayer}
              onProcedureEdit={handleProcedureEdit}
            />
          </LayoutGroup>
        );
      }
      
      return (
        <LayoutGroup>
          <NewScan
            onBack={handleFlowBack}
            onNext={handleNextInFlow}
            patient={selectedPatient}
            scanType={selectedScanType || ''}
            initialProcedure={selectedProcedure || undefined}
            onProcedureChange={handleProcedureChange}
            onNavigateToMultiLayer={handleNavigateToMultiLayer}
            onNavigateToView={handleNavigateToView}
            onNavigateToSummary={handleNavigateToSummary}
            onProcedureEdit={handleProcedureEdit}
            externalToothTreatments={toothTreatments}
            onToothTreatmentsChange={setToothTreatments}
            externalToothSpecifications={toothSpecifications}
            onToothSpecificationsChange={setToothSpecifications}
            onPreTreatmentToggle={setPreTreatmentEnabled}
          />
        </LayoutGroup>
      );
    }
    if (flowStep === 'scanMultiLayer' && selectedPatient) {
      return (
        <LayoutGroup>
          <ScanPageMultiLayer
            onBack={handleFlowBack}
            onHome={handleBack}
            patient={selectedPatient}
            onNavigateToMultiLayer={handleNavigateToMultiLayer}
            onNavigateToView={handleNavigateToView}
            onNavigateToRx={handleNavigateToRx}
            onNavigateToSummary={handleNavigateToSummary}
            scanType={selectedScanType || ''}
            onScannedLayersChange={setScannedLayers}
            onWorkflowChange={setSelectedScanType}
            onBiteOptionsChange={setSelectedBiteOptions}
            toothTreatments={toothTreatments}
            preTreatmentEnabled={preTreatmentEnabled}
          />
        </LayoutGroup>
      );
    }
    if (flowStep === 'multiLayerView' && selectedPatient) {
      return (
        <LayoutGroup>
          <MultiLayerView
            onBack={handleFlowBack}
            onHome={handleBack}
            patient={selectedPatient}
            onNavigateToMultiLayer={handleNavigateToMultiLayer}
            onNavigateToView={handleNavigateToView}
            onNavigateToSummary={handleNavigateToSummary}
            onNavigateToRx={handleNavigateToRx}
            scannedLayers={scannedLayers}
            scanType={selectedScanType}
            selectedBiteOptions={selectedBiteOptions}
          />
        </LayoutGroup>
      );
    }
    if (flowStep === 'summary' && selectedPatient) {
      return (
        <LayoutGroup>
          <Summary
            onBack={handleFlowBack}
            onHome={handleBack}
            patient={selectedPatient}
            onNavigateToMultiLayer={handleNavigateToMultiLayer}
            onNavigateToView={handleNavigateToView}
            onNavigateToRx={handleNavigateToRx}
            scannedLayers={scannedLayers}
            scanType={originalProcedureScanType || selectedScanType}
            procedureToothTreatments={toothTreatments}
            procedureToothSpecifications={toothSpecifications}
          />
        </LayoutGroup>
      );
    }
  }

  if (currentView === 'resto') {
    return (
      <LayoutGroup>
        <RestoHome onBack={handleBack} />
      </LayoutGroup>
    );
  }

  if (currentView === 'iteroHome') {
    return (
      <IteroHomepage
        onNewScan={() => {
          setCurrentView('patientDetails');
        }}
      />
    );
  }

  if (currentView === 'scanGuidance') {
    const demoPatient = selectedPatient ?? {
      id: 'demo',
      firstName: 'Demo',
      lastName: 'Patient',
      dateOfBirth: '01/01/1990',
      gender: 'female',
      chartNumber: '000000',
    };
    return (
      <LayoutGroup>
        <ScanPageMultiLayer
          patient={demoPatient}
          onBack={() => setCurrentView('home')}
          onHome={() => setCurrentView('home')}
          enableScanGuidance={true}
        />
      </LayoutGroup>
    );
  }

  if (currentView === 'patientDetails') {
    return (
      <PatientDetailsForm
        onBack={() => {
          setCurrentView('iteroHome');
        }}
        onPatients={() => {
          setCurrentView('flow');
          setFlowStep('search');
          setSelectedPatient(null);
        }}
        onCreatePatient={(patient: Patient) => {
          setSelectedPatient(patient);
          // Go directly to scanning selection
          setCurrentView('flow');
          setFlowStep('scanning');
        }}
      />
    );
  }

  return (
    <LayoutGroup>
      <HomePage onNavigate={handleNavigate} />
    </LayoutGroup>
  );
}
import IteroHome from "../imports/IteroHome";

interface IteroHomepageProps {
  onNewScan: () => void;
}

export default function IteroHomepage({ onNewScan }: IteroHomepageProps) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Find the card component (the white card with shadow)
    const cardElement = target.closest('[data-name="1"]') || 
                       target.closest('[data-name="Landing page item"]');
    
    // Only proceed if we found a card element
    if (!cardElement) {
      return;
    }
    
    // Check if this card contains the "New Scan" text
    const textContent = cardElement.textContent || '';
    
    // Only trigger navigation if this is specifically the New Scan card
    if (textContent.trim() === 'New Scan') {
      console.log('New Scan card clicked - navigating to patient details');
      e.stopPropagation(); // Prevent event bubbling
      onNewScan();
    }
  };

  return (
    <div 
      className="h-screen w-screen"
      onClick={handleClick}
    >
      <IteroHome />
    </div>
  );
}

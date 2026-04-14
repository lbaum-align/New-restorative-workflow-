<div className="h-[76px] relative w-full bg-white">
        {/* New Scan - Left */}
        <div className="absolute left-[20px] top-1/2 -translate-y-1/2 flex gap-[16px] items-center">
          <NewScanIcon />
          <div className="font-['Roboto',sans-serif] font-medium text-[#474955] text-[24px] leading-[36px]">
            New Scan
          </div>
        </div>

        {/* Wizard Navigation - Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[5px] items-center z-10">
          <button 
            onClick={() => onStepToggle?.('rx')}
            className={`relative rounded-[6px] shrink-0 size-[60px] transition-all cursor-pointer ${
              activeSteps?.rx ? 'bg-[#A6E2F9]' : 'bg-white'
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[48px] h-[48px]">
                <RxIcon />
              </div>
            </div>
          </button>
          <Chevron />
          <StepIconContainer isActive={activeSteps?.stepIcon || false} onClick={() => {
            onStepToggle?.('stepIcon');
            onNavigateToScan?.();
          }} />
          <Chevron />
          <button 
            onClick={() => {
              onStepToggle?.('search');
              onNavigateToView?.();
            }}
            className={`relative rounded-[6px] shrink-0 size-[60px] transition-all cursor-pointer ${
              activeSteps?.search ? 'bg-[#A6E2F9]' : 'bg-white'
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[44px] h-[37px]">
                <SearchIconImport />
              </div>
            </div>
          </button>
          <Chevron />
          <button 
            onClick={() => {
              onStepToggle?.('email');
              onNavigateToSummary?.();
            }}
            className={`relative shrink-0 size-[60px] rounded-[6px] transition-all cursor-pointer ${
              activeSteps?.email ? 'bg-[#A6E2F9]' : 'bg-white'
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[48px] h-[27px] relative">
                <EmailIcon />
              </div>
            </div>
          </button>
        </div>

        {/* Right Icons */}
        <div className="absolute right-[17px] top-1/2 -translate-y-1/2 flex gap-[24px] items-center">
          <button className="transition-opacity hover:opacity-80">
            <BatteryIcon />
          </button>
          <button className="transition-opacity hover:opacity-80">
            <SettingsIcon />
          </button>
          <button className="transition-opacity hover:opacity-80">
            <HelpIcon />
          </button>
        </div>
      </div>
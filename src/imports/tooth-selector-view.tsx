<div className="bg-white rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] flex flex-col gap-[0px] pl-[24px] pr-[0px] py-[0px] overflow-hidden">
            <div className="flex w-full items-stretch relative h-[540px]">
              {/* ToothSelectorLarge with built-in Chart/Table toggle */}
              <div className={`${activeView === 'chart' ? 'w-[67%]' : 'w-full'} flex flex-col h-full min-w-0`}>
                <ToothSelectorLarge
                  onToothSelect={handleToothSelect}
                  selectedTeeth={selectedTeeth}
                  onTreatmentSelect={handleTreatmentSelect}
                  selectedTreatment={selectedTreatment}
                  toothTreatments={toothTreatments}
                  toothSpecifications={toothSpecifications}
                  onViewChange={(view) => setActiveView(view)}
                />
              </div>

              {/* Right Panel: Only show when chart view is active */}
              {activeView === 'chart' && (
                <>

                {/* Product Overlay - Positioned absolutely next to detail panel with no gap */}
                {isOverlayOpen && (
                  <div className="absolute right-[25%] w-[20%] h-[540px] z-20 transition-all duration-300">
                    <ProductOverlay
                      onMinimize={() => {
                        setIsOverlayOpen(false);
                        // Keep isEditMode true so the detail panel maintains its content
                      }}
                      onFavorite={() => setIsFavorited(!isFavorited)}
                      isFavorited={isFavorited}
                    />
                  </div>
                )}

                {/* Conditionally render instruction text or detail panel */}
                {showDetailsPanel ? (
                  <div ref={detailPanelRef} className="w-[33%] h-[540px] relative border-l border-[#e0e0e0]">
                    {/* Maximize button when overlay is closed and in edit mode */}
                    {!isOverlayOpen && isEditMode && (
                      <div 
                        className="absolute left-[-40px] size-[32px] top-[8px] cursor-pointer hover:opacity-70 transition-opacity z-10 bg-white rounded-[4px] shadow-md flex items-center justify-center"
                        onClick={() => setIsOverlayOpen(true)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setIsOverlayOpen(true);
                          }
                        }}
                      >
                        <svg className="block size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <g>
                            <path d="M24 8H16V10H21.17L14 17.17L15.41 18.58L22.58 11.41L22.59 16.59L24.59 16.58L24.58 8.58C24.58 8.27 24.45 7.98 24.23 7.76C24.01 7.54 23.72 7.41 23.41 7.41L24 8Z" fill="#3E3D40" />
                            <path d="M8 24H16V22H10.83L18 14.83L16.59 13.42L9.42 20.59L9.41 15.41L7.41 15.42L7.42 23.42C7.42 23.73 7.55 24.02 7.77 24.24C7.99 24.46 8.28 24.59 8.59 24.59L8 24Z" fill="#3E3D40" />
                          </g>
                        </svg>
                      </div>
                    )}
                    {selectedTreatment === "Implant based" ? (
                      <DetailPanelImplantBased
                        tooth={`Tooth ${selectedTeeth.join(', ')}`}
                        onDelete={handleDeleteIndication}
                        onAddInfo={() => {
                          console.log('Add restoration & crown info clicked');
                        }}
                        isEditMode={isEditMode}
                        onEditModeChange={(editMode) => {
                          setIsEditMode(editMode);
                          if (editMode) {
                            setIsOverlayOpen(true);
                          }
                        }}
                      />
                    ) : (
                      <DetailPanel
                        title="Details"
                        tooth={`Tooth ${selectedTeeth.join(', ')}`}
                        badgeLabel={selectedTreatment}
                        selectedTeeth={selectedTeeth}
                        onDelete={handleDeleteIndication}
                        onSpecificationChange={(specs) => {
                          // Update specifications for all selected teeth
                          const newToothSpecifications = { ...toothSpecifications };
                          selectedTeeth.forEach(tooth => {
                            newToothSpecifications[tooth] = specs;
                          });
                          setToothSpecifications(newToothSpecifications);
                          console.log('Updated tooth specifications:', newToothSpecifications);
                        }}
                      />
                    )}
                  </div>
                ) : hasIndications ? (
                  <div className="flex-1 h-[540px]">
                    <DetailPanelList
                      toothTreatments={toothTreatments}
                      toothSpecifications={toothSpecifications}
                      onDeleteTooth={(tooth) => {
                        const newToothTreatments = { ...toothTreatments };
                        delete newToothTreatments[tooth];
                        setToothTreatments(newToothTreatments);
                      }}
                      onCardClick={(tooth, treatment) => {
                        setSelectedTeeth([tooth]);
                        setSelectedTreatment(treatment);
                        setShowDropdownPanel(true);
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex-1 h-[540px] bg-white relative">
                    <div aria-hidden="true" className="absolute border-[#e0e0e0] border-l border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-col items-center justify-center size-full">
                      <p
                        className="font-['Roboto:Regular',sans-serif] font-normal text-[18px] text-[#3e3d40] text-center leading-[28px] max-w-[239px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Select one or more teeth and the type of restoration to define them here
                      </p>
                    </div>
                  </div>
                )}
                </>
              )}
            </div>
          </div>
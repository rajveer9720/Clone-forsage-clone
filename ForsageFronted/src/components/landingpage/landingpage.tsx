'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/button';
import Feeds from '@/components/search/feeds';
import { useDrawer } from '@/components/drawer-views/context';
import { Filters, GridSwitcher, SortList } from '@/components/search/filters';
import { OptionIcon } from '@/components/icons/option';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoCardsSection from './components/InfoCardsSection';
import ActivitySection from './components/ActivitySection';
import TechnologySection from './components/TechnologySection';
import RegistrationSection from './components/RegistrationSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function LandingPage() {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    const handleRegistrationClick = () => {
      setIsRegistrationOpen(true);
    };
  
    const handleCloseRegistration = () => {
      setIsRegistrationOpen(false);
    };
  
    return (
      <div className="App">
        <Header onRegistrationClick={handleRegistrationClick} />
        {isRegistrationOpen && <RegistrationSection onClose={handleCloseRegistration} />}
        <HeroSection />
      
        <ActivitySection />
     
        <TechnologySection />

        <InfoCardsSection />
        <FAQSection />
        <Footer />
        {/* <SmartContractInfo /> */}
      </div>
    );
}

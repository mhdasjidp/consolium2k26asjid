import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline, NightSkyline } from './components/Timeline';
import {
  StoryAndTimelineSection,
  InteractiveTerminalSection,
  CtaCountdownSection,
} from './components/LandingSections';
import { Footer } from './components/Footer';

/**
 * Ambient Toast / Easter-Egg Notification System permanently disabled
 * for the Consoulium 2k26: Ayatic Codex theme.
 */
export function dispatchToast(): void {
  // No-op: automatic popup notifications disabled
}

export const Toaster: React.FC = () => null;

export const AmbientNotifications: React.FC = () => null;

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="main" data-path="/">
        <div data-page="home">
          <Hero />
          <Timeline />
          <StoryAndTimelineSection />
          <div className="night">
            <div className="night__backdrop" aria-hidden="true">
              <NightSkyline />
            </div>
            <div className="night__content">
              <InteractiveTerminalSection />
              <CtaCountdownSection />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { PRELOADER_PHRASES } from '../theme';

export const STATUS_PHRASES = [
  'Observing the manifest signs...',
  'Decoding the cosmic codes...',
  'Aligning the rhythmic order...',
  'Contemplating the delicate balance...',
  'Unveiling the Ayatic Codex...',
];

export const Preloader: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const phraseTimer = window.setInterval(() => {
      setPhraseIndex((prev) => Math.min(STATUS_PHRASES.length - 1, prev + 1));
    }, 520);

    const progressTimer = window.setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 4));
    }, 80);

    return () => {
      window.clearInterval(phraseTimer);
      window.clearInterval(progressTimer);
    };
  }, []);

  return (
    <div
      id="loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Consoulium 2k26: Ayatic Codex"
    >
      <div className="ld-base" />
      <div className="ld-stage">
        <svg
          className="ld-pookalam"
          viewBox="-200 -200 400 400"
          aria-hidden="true"
        />
        <div className="ld-meta">
          <span>LOADING CODEX</span>
          <span className="ld-num">{progress}</span>
        </div>
        <p className="ld-status">{PRELOADER_PHRASES[phraseIndex]}</p>
      </div>
      <div className="ld-bands" aria-hidden="true" />
      <button className="ld-skip" type="button">
        SKIP →
      </button>
    </div>
  );
};

export default Preloader;

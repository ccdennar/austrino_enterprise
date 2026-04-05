import { useState, useEffect } from 'react';

type Season = 'summer' | 'fall' | 'winter' | 'spring';

export function useSeason(): { season: Season; setSeason: (s: Season) => void } {
  const [season, setSeasonState] = useState<Season>('summer');

  useEffect(() => {
    // Check localStorage first (for manual override)
    const stored = localStorage.getItem('austrino-season') as Season | null;
    
    if (stored) {
      setSeasonState(stored);
      document.documentElement.setAttribute('data-season', stored);
      return;
    }

    // Auto-detect based on date
    const date = new Date();
    const month = date.getMonth() + 1; // 1-12
    
    let detectedSeason: Season = 'summer';
    
    if (month >= 9 && month <= 11) {
      detectedSeason = 'fall';
    } else if (month === 12 || month <= 2) {
      detectedSeason = 'winter';
    } else if (month >= 3 && month <= 5) {
      detectedSeason = 'spring';
    }
    
    setSeasonState(detectedSeason);
    document.documentElement.setAttribute('data-season', detectedSeason);
  }, []);

  const setSeason = (newSeason: Season) => {
    setSeasonState(newSeason);
    document.documentElement.setAttribute('data-season', newSeason);
    localStorage.setItem('austrino-season', newSeason);
  };

  return { season, setSeason };
}
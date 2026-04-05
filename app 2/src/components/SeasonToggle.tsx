import { useSeason } from '../hooks/useSeason';

export function SeasonToggle() {
  const { season, setSeason } = useSeason();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2 glass-dark p-2 rounded-lg">
      {(['summer', 'fall', 'winter', 'spring'] as const).map((s) => (
        <button
          key={s}
          onClick={() => setSeason(s)}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            season === s 
              ? 'bg-primary text-white' 
              : 'hover:bg-white/10 text-muted-foreground'
          }`}
        >
          {s === 'summer' && '☀️'}
          {s === 'fall' && '🍂'}
          {s === 'winter' && '❄️'}
          {s === 'spring' && '🌸'}
          <span className="ml-1 capitalize">{s}</span>
        </button>
      ))}
    </div>
  );
}
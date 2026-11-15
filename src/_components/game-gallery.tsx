import { useState } from "react";
import { getUnlockedRewards } from "../gallery/gallery";
import { GALLERY_REWARDS, type GalleryReward } from "../gallery/rewards";
import { getAssetURL } from "../utils/get-asset-url";

const GameGallery = ({ onBack }: { onBack: () => void }) => {
  const [unlocked] = useState(getUnlockedRewards);
  const [selected, setSelected] = useState<GalleryReward | null>(null);

  return (
    <div className="absolute inset-0 z-50 isolate flex h-dvh w-full flex-col bg-[#302925] text-[#fffaf3]">
      <img src={getAssetURL("/banner.png")} alt="" className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#302925]/85" />

      <header className="shrink-0 px-7 pt-[max(1.5rem,env(safe-area-inset-top))] pb-6">
        <button
          type="button"
          onClick={() => selected ? setSelected(null) : onBack()}
          className="mb-3 flex min-h-11 items-center gap-2 rounded-sm font-mono text-xs uppercase tracking-wider text-[#fffaf3]/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CF6454]"
        >
          <span aria-hidden="true">←</span> {selected ? "Back to gallery" : "Back to menu"}
        </button>
        <h2 className="text-3xl font-semibold tracking-tight">{selected ? selected.title : "Gallery"}</h2>
        {!selected && <p className="mt-2 text-base text-[#fffaf3]/65">{unlocked.length} of {GALLERY_REWARDS.length} rewards unlocked</p>}
      </header>

      {selected ? (
        <div className="flex min-h-0 flex-1 items-center justify-center px-5 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <img src={selected.url} alt={selected.title} className="max-h-full w-full rounded-md object-contain" />
        </div>
      ) : (
        <div className="min-h-0 flex-1 overflow-y-auto px-7 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <p className="mb-5 text-base text-[#fffaf3]/65">Complete each quiz to collect your gifts.</p>
          <div className="grid grid-cols-2 gap-4">
            {GALLERY_REWARDS.map((reward) => {
              const isUnlocked = unlocked.some((item) => item.id === reward.id);
              return (
                <button
                  key={reward.id}
                  type="button"
                  disabled={!isUnlocked}
                  onClick={() => setSelected(reward)}
                  aria-label={isUnlocked ? `View ${reward.title}` : `${reward.title}: complete Quiz ${reward.quiz} to unlock`}
                  className="overflow-hidden rounded-md border border-[#dcb8ab]/40 bg-[#fff5ec] text-left text-[#493832] shadow-[0_3px_0_0_#CF6454] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CF6454] disabled:bg-[#fffaf3]/10 disabled:text-[#fffaf3]/65 disabled:shadow-none"
                >
                  {isUnlocked ? (
                    <img src={reward.url} alt="" loading="lazy" className="aspect-square w-full object-contain p-2" />
                  ) : (
                    <div className="flex aspect-square items-center justify-center" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="size-7 opacity-60">
                        <rect x="5" y="10" width="14" height="11" rx="2" />
                        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                  <div className="border-t border-current/10 px-3 py-3">
                    <p className="text-base font-medium leading-tight">{reward.title}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wide opacity-65">{isUnlocked ? "Tap to view" : `Complete Quiz ${reward.quiz}`}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameGallery;

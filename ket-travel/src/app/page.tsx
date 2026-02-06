"use client";

import { useState, useEffect, useCallback } from "react";
import { MapPin, RotateCcw, Palmtree } from "lucide-react";
import { itinerary } from "@/data/itinerary";
import DaySection from "@/components/DaySection";
import ProgressBar from "@/components/ProgressBar";

const STORAGE_KEY = "cat-travel-checked";

function getAllActivityIds(): string[] {
  return itinerary.flatMap((day) => day.activities.map((a) => a.id));
}

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setCheckedItems(new Set(JSON.parse(stored)));
      } catch {
        // ignore
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(Array.from(checkedItems))
      );
    }
  }, [checkedItems, mounted]);

  const toggleItem = useCallback((id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setCheckedItems(new Set());
  }, []);

  const totalActivities = getAllActivityIds().length;
  const allDone = checkedItems.size === totalActivities;

  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 animate-float" />
          <div
            className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white/20 animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-10 left-1/3 w-32 h-32 rounded-full bg-white/20 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 pt-12 pb-10">
          <div className="flex items-center gap-2 mb-2">
            <Palmtree className="w-6 h-6" />
            <span className="text-sm font-bold tracking-widest uppercase opacity-80">
              CAT Travel Agency
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            켓 여행사
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium text-white/80">
            푸꾸옥 4박 6일 여행 플래너
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-white/70">
            <MapPin className="w-4 h-4" />
            <span>Phu Quoc, Vietnam</span>
            <span className="mx-1">|</span>
            <span>2026.02.19 ~ 02.23</span>
          </div>

          {/* Progress */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white/80">
                여행 진행률
              </span>
              <span className="text-sm font-bold">
                {checkedItems.size}/{totalActivities} 완료
              </span>
            </div>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-white transition-all duration-700 ease-out"
                style={{
                  width: `${
                    totalActivities === 0
                      ? 0
                      : Math.round((checkedItems.size / totalActivities) * 100)
                  }%`,
                }}
              />
            </div>
            {allDone && (
              <p className="mt-2 text-center text-sm font-bold text-yellow-200 animate-pulse">
                모든 일정을 완료했습니다! 멋진 여행이었어요!
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Controls */}
      <div className="max-w-3xl mx-auto px-4 mt-6 flex justify-end">
        <button
          onClick={resetAll}
          className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-500 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 hover:text-slate-700 transition-colors shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          초기화
        </button>
      </div>

      {/* Itinerary */}
      <main className="max-w-3xl mx-auto px-4 mt-6 flex flex-col gap-10">
        {itinerary.map((day) => (
          <DaySection
            key={day.id}
            day={day}
            checkedItems={checkedItems}
            onToggle={toggleItem}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-4 mt-16 pb-8 text-center">
        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-400 font-medium">
            CAT 여행사 &copy; 2026 &mdash; 즐거운 푸꾸옥 여행 되세요!
          </p>
        </div>
      </footer>
    </div>
  );
}

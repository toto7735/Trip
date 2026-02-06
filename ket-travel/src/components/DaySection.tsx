"use client";

import type { Day } from "@/data/itinerary";
import ActivityCard from "./ActivityCard";

interface DaySectionProps {
  day: Day;
  checkedItems: Set<string>;
  onToggle: (id: string) => void;
}

const dayColors: Record<string, string> = {
  "day-1": "from-rose-500 to-orange-500",
  "day-2": "from-violet-500 to-purple-500",
  "day-3": "from-cyan-500 to-blue-500",
  "day-4": "from-emerald-500 to-teal-500",
  "day-5": "from-amber-500 to-yellow-500",
};

const dayBgColors: Record<string, string> = {
  "day-1": "from-rose-50 to-orange-50",
  "day-2": "from-violet-50 to-purple-50",
  "day-3": "from-cyan-50 to-blue-50",
  "day-4": "from-emerald-50 to-teal-50",
  "day-5": "from-amber-50 to-yellow-50",
};

export default function DaySection({
  day,
  checkedItems,
  onToggle,
}: DaySectionProps) {
  const completedCount = day.activities.filter((a) =>
    checkedItems.has(a.id)
  ).length;
  const allDone = completedCount === day.activities.length;
  const gradient = dayColors[day.id] || "from-slate-500 to-slate-600";
  const bgGradient = dayBgColors[day.id] || "from-slate-50 to-slate-50";

  return (
    <section className="relative">
      {/* Day header */}
      <div
        className={`sticky top-2 z-10 backdrop-blur-md bg-white/80 py-5 px-5 rounded-2xl shadow-sm border border-white/60`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex flex-col items-center justify-center text-white shadow-lg`}
          >
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
              {day.dayOfWeek}
            </span>
            <span className="text-lg font-black leading-none">{day.date}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black text-slate-800">
                {day.dayLabel}
              </h2>
              {allDone && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600">
                  ALL DONE
                </span>
              )}
            </div>
            <p className="text-sm text-slate-500 font-medium">{day.theme}</p>
          </div>
          <div
            className={`flex-shrink-0 px-4 py-2 rounded-xl bg-gradient-to-br ${gradient} shadow-md`}
          >
            <span className="text-2xl font-black text-white">
              {completedCount}/{day.activities.length}
            </span>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div
        className={`mt-3 p-4 rounded-3xl bg-gradient-to-br ${bgGradient} border border-white/50`}
      >
        <div className="flex flex-col gap-3">
          {day.activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              checked={checkedItems.has(activity.id)}
              onToggle={() => onToggle(activity.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

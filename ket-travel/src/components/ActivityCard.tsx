"use client";

import { Check } from "lucide-react";
import { ActivityIcon } from "./Icons";
import type { Activity } from "@/data/itinerary";

interface ActivityCardProps {
  activity: Activity;
  checked: boolean;
  onToggle: () => void;
  index: number;
}

export default function ActivityCard({
  activity,
  checked,
  onToggle,
  index,
}: ActivityCardProps) {
  return (
    <div
      className={`group relative flex items-start gap-4 p-4 rounded-2xl border transition-all duration-500 cursor-pointer select-none
        ${
          checked
            ? "bg-slate-50 border-slate-200 opacity-50 scale-[0.98]"
            : "bg-white border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-50 hover:-translate-y-0.5"
        }
      `}
      onClick={onToggle}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Check button */}
      <button
        className={`flex-shrink-0 mt-0.5 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300
          ${
            checked
              ? "bg-emerald-500 border-emerald-500 text-white"
              : "border-slate-300 group-hover:border-emerald-400"
          }
        `}
        aria-label={checked ? "완료 취소" : "완료 체크"}
      >
        {checked && <Check className="w-4 h-4" strokeWidth={3} />}
      </button>

      {/* Icon */}
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300
          ${
            checked
              ? "bg-slate-100 text-slate-400"
              : "bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600"
          }
        `}
      >
        <ActivityIcon name={activity.icon} className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-md transition-colors duration-300
              ${checked ? "bg-slate-100 text-slate-400" : "bg-emerald-50 text-emerald-700"}
            `}
          >
            {activity.time}
          </span>
          {activity.priority && !checked && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-600 border border-amber-200">
              MUST GO
            </span>
          )}
        </div>
        <h4
          className={`mt-1.5 font-bold text-base transition-colors duration-300
            ${checked ? "text-slate-400 line-through" : "text-slate-800"}
          `}
        >
          {activity.title}
        </h4>
        <p
          className={`mt-1 text-sm leading-relaxed transition-colors duration-300
            ${checked ? "text-slate-400" : "text-slate-500"}
          `}
        >
          {activity.description}
        </p>
        {activity.transport && (
          <div
            className={`mt-2 text-xs font-medium px-3 py-1.5 rounded-lg inline-block transition-colors duration-300
              ${
                checked
                  ? "bg-slate-50 text-slate-400"
                  : "bg-violet-50 text-violet-600"
              }
            `}
          >
            🚗 {activity.transport}
          </div>
        )}
        {activity.tips && (
          <div
            className={`mt-2 ml-1 text-xs font-medium px-3 py-1.5 rounded-lg inline-block transition-colors duration-300
              ${
                checked
                  ? "bg-slate-50 text-slate-400"
                  : "bg-blue-50 text-blue-600"
              }
            `}
          >
            💡 {activity.tips}
          </div>
        )}
      </div>
    </div>
  );
}

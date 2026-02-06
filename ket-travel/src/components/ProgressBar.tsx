"use client";

interface ProgressBarProps {
  checked: number;
  total: number;
}

export default function ProgressBar({ checked, total }: ProgressBarProps) {
  const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-600">여행 진행률</span>
        <span className="text-sm font-bold text-emerald-600">
          {checked}/{total} 완료 ({percentage}%)
        </span>
      </div>
      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

"use client"
import { motion } from "framer-motion"

type ContributionGridProps = {
  contributionData: any[]
  loading: boolean
}

export default function ContributionGrid({ contributionData, loading }: ContributionGridProps) {
  // Bulan untuk header grid
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]

  // Generate data placeholder jika data asli sedang dimuat
  const placeholderData = Array(53)
    .fill(0)
    .map(() =>
      Array(7)
        .fill(0)
        .map(() => Math.floor(Math.random() * 5)),
    )

  // Gunakan data placeholder jika loading atau tidak ada data tersedia
  const gridData = loading || !contributionData.length ? placeholderData : contributionData

  // Fungsi untuk menentukan warna berdasarkan jumlah kontribusi
  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-muted"
    if (count < 3) return "bg-blue-900/30"
    if (count < 6) return "bg-blue-700/40"
    if (count < 9) return "bg-blue-600/60"
    return "bg-blue-500/80"
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-max">
        {/* Label bulan */}
        <div className="flex text-xs text-muted-foreground mb-1">
          <div className="w-8"></div>
          {months.map((month, i) => (
            <div key={i} className="flex-1 text-center">
              {month}
            </div>
          ))}
        </div>

        {/* Grid kontribusi */}
        <div className="flex">
          {/* Label hari (Sen-Min) */}
          <div className="flex flex-col justify-between text-xs text-muted-foreground pr-2">
            <div></div>
            <div>Sen</div>
            <div>Rab</div>
            <div>Jum</div>
            <div></div>
          </div>

          {/* Grid cells */}
          <div className="flex gap-1">
            {gridData.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day: number, dayIndex: number) => (
                  <motion.div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day)}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.01 * (weekIndex + dayIndex),
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.5,
                      zIndex: 10,
                      boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center text-xs text-muted-foreground mt-2">
          <span>Sedikit</span>
          <div className="flex gap-1 mx-2">
            <div className="w-3 h-3 rounded-sm bg-muted"></div>
            <div className="w-3 h-3 rounded-sm bg-blue-900/30"></div>
            <div className="w-3 h-3 rounded-sm bg-blue-700/40"></div>
            <div className="w-3 h-3 rounded-sm bg-blue-600/60"></div>
            <div className="w-3 h-3 rounded-sm bg-blue-500/80"></div>
          </div>
          <span>Banyak</span>
        </div>
      </div>
    </div>
  )
}

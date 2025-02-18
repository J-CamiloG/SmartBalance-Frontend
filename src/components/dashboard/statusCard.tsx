import { TrendingUp, TrendingDown } from "lucide-react"
import { StatusCardProps } from "@/types/interface.dashboard"


export function StatusCard({ title, value, isPositive = true, icon: Icon, percentage = "12.5" }: StatusCardProps) {
    
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
        }).format(value)
    }

    return (
        <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white/90">{title}</h2>
                <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isPositive ? "bg-[#00FFC2]/10" : "bg-red-500/10"
                }`}
                >
                <Icon className={`h-5 w-5 ${isPositive ? "text-[#00FFC2]" : "text-red-500"}`} />
                </div>
            </div>
            <div className="space-y-2">
                <div className={`text-2xl font-bold ${isPositive ? "text-[#00FFC2]" : "text-red-500"}`}>
                {formatCurrency(value)}
                </div>
                <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 text-sm ${isPositive ? "text-[#00FFC2]" : "text-red-500"}`}>
                    {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    {isPositive ? "+" : ""}
                    {isPositive ? percentage : `-${percentage}`}%
                </div>
                <span className="text-sm text-white/60">vs mes anterior</span>
                </div>
            </div>
        </div>
    )
}


"use client"

import {
  Download,
  TrendingUp,
  TrendingDown,
  Wallet,
  LineChartIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/Navbar"

// Función para formatear números a pesos colombianos
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value)
}

const StatusCard = ({
  title,
  value,
  isPositive = true,
  icon: Icon,
}: {
  title: string
  value: number
  isPositive?: boolean
  icon: any
}) => (
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
          {isPositive ? "12.5%" : "-8.3%"}
        </div>
        <span className="text-sm text-white/60">vs mes anterior</span>
      </div>
    </div>
  </div>
)


export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="text-sm text-white/60">Analytics → Activity</div>
            <h1 className="text-3xl font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-6">
            <Button variant="outline" className="bg-zinc-900/50 border-white/10">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Estado de Pagos */}
          <div className="col-span-12 lg:col-span-4">
            <StatusCard title="Estado de Pagos" value={-2500000} isPositive={false} icon={Wallet} />
          </div>

          {/* Estado de Inversiones */}
          <div className="col-span-12 lg:col-span-4">
            <StatusCard title="Estado de Inversiones" value={4800000} isPositive={true} icon={LineChartIcon} />
          </div>

          {/* Estado de CDTs */}
          <div className="col-span-12 lg:col-span-4">
            <StatusCard title="Estado de CDTs" value={5000000} isPositive={true} icon={LineChartIcon} />
          </div>

          

        </div>
      </main>
    </div>
  )
}


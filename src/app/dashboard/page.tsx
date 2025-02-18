"use client"

import { Download, Wallet, LineChartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar"
import { StatusCard } from "@/components/dashboard/statusCard"

export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* header content  */}
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


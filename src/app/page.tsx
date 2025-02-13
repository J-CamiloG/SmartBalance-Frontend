"use client"

import { useState } from "react"
import Image from "next/image"
import { User, Lock, Eye, EyeOff, Cat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function HomePage() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <main className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/imgs/arena.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full p-6 md:p-12 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              <div className="min-h-[600px] flex flex-col p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] relative">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#00FFC2]/30 to-transparent" />
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute inset-y-0 -left-px w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                {/* Logo y título */}
                <div className="flex items-center flex-col gap-4 pb-8 border-b border-white/10">
                  <Cat className="text-[#00FFC2] w-20 h-20" />
                  <h1 className="text-3xl font-bold text-white">Iniciar Sesión</h1>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Usuario"
                          className="bg-white/5 border-white/10 h-14 pl-12 text-white placeholder:text-zinc-400 focus:bg-white/10 transition-colors"
                        />
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00FFC2]" />
                      </div>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Contraseña"
                          className="bg-white/5 border-white/10 h-14 pl-12 pr-12 text-white placeholder:text-zinc-400 focus:bg-white/10 transition-colors"
                        />
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00FFC2]" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-300"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        className="border-white/20 data-[state=checked]:bg-[#00FFC2] data-[state=checked]:border-[#00FFC2] bg-white/5"
                      />
                      <label htmlFor="remember" className="text-sm text-white">
                        Recordar datos
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90 rounded-full text-base font-medium shadow-[0_0_20px_rgba(0,255,194,0.3)] hover:shadow-[0_0_25px_rgba(0,255,194,0.4)] transition-all"
                      disabled={loading}
                    >
                      {loading ? "Iniciando sesión..." : "Iniciar sesión"}
                    </Button>
                  </form>

                  <p className="text-sm text-center text-white">
                    ¿No tienes cuenta?{" "}
                    <a href="#" className="text-[#00FFC2] hover:text-[#00FFC2]/80">
                      Regístrate aquí
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

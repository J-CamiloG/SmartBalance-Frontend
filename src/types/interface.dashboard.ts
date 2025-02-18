import type { LucideIcon } from "lucide-react"

export interface StatusCardProps {
    title: string
    value: number
    isPositive?: boolean
    icon: LucideIcon
    percentage?: string
}
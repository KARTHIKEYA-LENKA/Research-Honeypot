import { ArrowDown, ArrowUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AccountSummaryProps {
title: string
amount: string
change: string
trend: "up" | "down"
}

export function AccountSummary({ title, amount, change, trend }: AccountSummaryProps) {
return (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div
        className={`flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium ${
          trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {trend === "up" ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
        {change}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{amount}</div>
    </CardContent>
  </Card>
)
}

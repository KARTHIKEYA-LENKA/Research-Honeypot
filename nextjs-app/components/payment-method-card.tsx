import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PaymentMethodCardProps {
name: string
icon: string
lastUsed: string
status: "Connected" | "Disconnected"
}

export function PaymentMethodCard({ name, icon, lastUsed, status }: PaymentMethodCardProps) {
return (
  <Card className="overflow-hidden">
    <CardHeader className="bg-blue-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            {icon === "amazon" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10h18z" />
                <path d="M21 12H3" />
              </svg>
            )}
            {icon === "flipkart" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            )}
            {icon === "phonepe" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-3.5" />
                <path d="M2 10h20" />
              </svg>
            )}
            {icon === "paytm" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            )}
            {icon === "navi" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            )}
          </div>
          <h3 className="font-medium">{name}</h3>
        </div>
        <Badge variant={status === "Connected" ? "default" : "secondary"}>{status}</Badge>
      </div>
    </CardHeader>
    <CardContent className="p-4">
      <div className="text-sm text-gray-500">Last used: {lastUsed}</div>
      <div className="mt-4 flex justify-between">
        <button className="text-sm font-medium text-blue-600 hover:underline">Manage</button>
        <button className="text-sm font-medium text-gray-500 hover:underline">Disconnect</button>
      </div>
    </CardContent>
  </Card>
)
}

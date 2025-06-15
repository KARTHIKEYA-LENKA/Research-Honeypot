"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddPaymentMethodPage() {
const router = useRouter()
const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

const handleAddPaymentMethod = () => {
  // In a real app, you would handle the connection process here
  // For demo purposes, we'll just redirect back to the dashboard
  router.push("/dashboard")
}

const paymentMethods = [
  { id: "amazon", name: "Amazon Pay", icon: "amazon" },
  { id: "flipkart", name: "Flipkart Pay", icon: "flipkart" },
  { id: "phonepe", name: "PhonePe", icon: "phonepe" },
  { id: "paytm", name: "Paytm", icon: "paytm" },
  { id: "navi", name: "Navi", icon: "navi" },
  { id: "gpay", name: "Google Pay", icon: "gpay" },
  { id: "applepay", name: "Apple Pay", icon: "applepay" },
  { id: "creditcard", name: "Credit Card", icon: "creditcard" },
]

return (
  <div className="container mx-auto max-w-4xl p-4 py-8">
    <div className="mb-6">
      <Link href="/dashboard" className="mb-6 flex items-center text-gray-500 hover:text-gray-900">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>
      <h1 className="text-2xl font-bold">Add Payment Method</h1>
      <p className="text-gray-500">Connect a new payment method to your account</p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Select Payment Method</CardTitle>
        <CardDescription>Choose a payment method to connect to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`relative flex cursor-pointer flex-col items-center rounded-lg border p-4 transition-all hover:border-blue-600 ${
                selectedMethod === method.id ? "border-blue-600 bg-blue-50" : ""
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              {selectedMethod === method.id && (
                <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Check className="h-3 w-3" />
                </div>
              )}
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
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
                  {method.icon === "amazon" && <path d="M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10h18z M21 12H3" />}
                  {method.icon === "flipkart" && (
                    <>
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </>
                  )}
                  {method.icon === "phonepe" && (
                    <>
                      <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-3.5" />
                      <path d="M2 10h20" />
                    </>
                  )}
                  {method.icon === "paytm" && (
                    <>
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </>
                  )}
                  {method.icon === "navi" && (
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  )}
                  {method.icon === "gpay" && (
                    <>
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M18 9v7" />
                      <path d="M15 9v7" />
                      <path d="M10 9v7" />
                      <path d="M7 9v7" />
                    </>
                  )}
                  {method.icon === "applepay" && (
                    <>
                      <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 5 7.5 2 0 3-1 4-1s2 1 4 1c3 0 5-4.5 5-7.5 0-2.5-1-5.5-4-5.5-2 0-3 1-4 1s-2-1-4-1z" />
                      <path d="M12 4a2 2 0 0 0 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2" />
                    </>
                  )}
                  {method.icon === "creditcard" && (
                    <>
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </>
                  )}
                </svg>
              </div>
              <span className="text-center text-sm">{method.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleAddPaymentMethod} disabled={!selectedMethod} className="px-6">
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
)
}

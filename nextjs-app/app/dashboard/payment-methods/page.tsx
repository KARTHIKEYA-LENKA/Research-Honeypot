import Link from "next/link"
import { ArrowLeft, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentMethodCard } from "@/components/payment-method-card"

export default function PaymentMethodsPage() {
return (
  <div className="container mx-auto max-w-4xl p-4 py-8">
    <div className="mb-6">
      <Link href="/dashboard" className="mb-6 flex items-center text-gray-500 hover:text-gray-900">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Payment Methods</h1>
          <p className="text-gray-500">Manage your connected payment services</p>
        </div>
        <Link href="/dashboard/payment-methods/add">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Connected Payment Methods</CardTitle>
        <CardDescription>All your payment services in one place</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PaymentMethodCard name="Amazon Pay" icon="amazon" lastUsed="2 days ago" status="Connected" />
          <PaymentMethodCard name="Flipkart Pay" icon="flipkart" lastUsed="1 week ago" status="Connected" />
          <PaymentMethodCard name="PhonePe" icon="phonepe" lastUsed="3 days ago" status="Connected" />
          <PaymentMethodCard name="Paytm" icon="paytm" lastUsed="Yesterday" status="Connected" />
          <PaymentMethodCard name="Navi" icon="navi" lastUsed="5 days ago" status="Connected" />
        </div>
      </CardContent>
    </Card>
  </div>
)
}

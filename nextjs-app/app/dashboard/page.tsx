"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bell, CreditCard, Home, LogOut, Menu, Settings, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaymentMethodCard } from "@/components/payment-method-card"
import { AccountSummary } from "@/components/account-summary"
import { TransactionList } from "@/components/transaction-list"

export default function DashboardPage() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")

useEffect(() => {
  // Get user info from localStorage
  const storedFirstName = localStorage.getItem("firstName")
  const storedLastName = localStorage.getItem("lastName")

  if (storedFirstName) {
    setFirstName(storedFirstName)
  }

  if (storedLastName) {
    setLastName(storedLastName)
  }
}, [])

return (
  <div className="flex min-h-screen flex-col bg-gray-50">
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2 border-b py-4">
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
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M2 3h20" />
                  <path d="M21 3v18H3V3Z" />
                  <path d="M7 7h10" />
                  <path d="M7 11h10" />
                  <path d="M7 15h4" />
                </svg>
                <span className="text-xl font-bold text-blue-600">SecureBank</span>
              </div>
              <nav className="flex-1 overflow-auto py-4">
                <div className="grid gap-1 px-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/payment-methods"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <CreditCard className="h-4 w-4" />
                    Payment Methods
                  </Link>
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </div>
              </nav>
              <div className="border-t py-4">
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
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
            className="h-6 w-6 text-blue-600"
          >
            <path d="M2 3h20" />
            <path d="M21 3v18H3V3Z" />
            <path d="M7 7h10" />
            <path d="M7 11h10" />
            <path d="M7 15h4" />
          </svg>
          <span className="text-xl font-bold text-blue-600">SecureBank</span>
        </div>
      </div>
      <nav className="hidden md:flex md:gap-4 lg:gap-6">
        <Link href="/dashboard" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600">
          Dashboard
        </Link>
        <Link
          href="/dashboard/payment-methods"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          Payment Methods
        </Link>
        <Link
          href="/dashboard/profile"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          Profile
        </Link>
        <Link
          href="/dashboard/settings"
          className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          Settings
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-600" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <img
	    src="/avatar.svg" alt="Avatar" width="32" height="32" className="rounded-full" 
          />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </header>
    <div className="flex flex-1">
      <aside className="hidden w-64 border-r bg-white md:block">
        <div className="flex h-full flex-col">
          <nav className="flex-1 overflow-auto py-4">
            <div className="grid gap-1 px-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/payment-methods"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              >
                <CreditCard className="h-4 w-4" />
                Payment Methods
              </Link>
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </div>
          </nav>
          <div className="border-t py-4">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-5 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="grid gap-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {firstName ? firstName : "User"}</h1>
            <p className="text-gray-500">Here's an overview of your account</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AccountSummary title="Total Balance" amount="$12,345.67" change="+2.5%" trend="up" />
            <AccountSummary title="Monthly Spending" amount="$2,345.67" change="-1.2%" trend="down" />
            <AccountSummary title="Savings" amount="$5,432.10" change="+3.7%" trend="up" />
          </div>
          <Tabs defaultValue="payment-methods">
            <TabsList className="grid w-full grid-cols-2 md:w-auto">
              <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
              <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            </TabsList>
            <TabsContent value="payment-methods" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PaymentMethodCard name="Amazon Pay" icon="amazon" lastUsed="2 days ago" status="Connected" />
                <PaymentMethodCard name="Flipkart Pay" icon="flipkart" lastUsed="1 week ago" status="Connected" />
                <PaymentMethodCard name="PhonePe" icon="phonepe" lastUsed="3 days ago" status="Connected" />
                <PaymentMethodCard name="Paytm" icon="paytm" lastUsed="Yesterday" status="Connected" />
                <PaymentMethodCard name="Navi" icon="navi" lastUsed="5 days ago" status="Connected" />
                <Link href="/dashboard/payment-methods/add">
                  <Card className="flex h-full cursor-pointer flex-col items-center justify-center p-6 transition-colors hover:bg-gray-50">
                    <div className="rounded-full bg-blue-50 p-3">
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
                        className="h-6 w-6 text-blue-600"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </div>
                    <h3 className="mt-3 font-medium">Add New</h3>
                  </Card>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="transactions" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your recent financial activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <TransactionList />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  </div>
)
}

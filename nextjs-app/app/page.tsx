import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
return (
  <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
    <header className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
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
      <nav className="hidden md:flex md:gap-4 lg:gap-6">
        <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
          Features
        </Link>
        <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
          Pricing
        </Link>
        <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
          About
        </Link>
        <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/login">
          <Button variant="outline" className="hidden sm:flex">
            Sign In
          </Button>
        </Link>
        <Link href="/signup">
          <Button>Get Started</Button>
        </Link>
      </div>
    </header>
    <main className="flex-1">
      <section className="container mx-auto grid items-center gap-6 px-4 py-12 md:grid-cols-2 md:gap-8 md:px-6 md:py-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Secure Banking for the Digital Age
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl">
            Manage all your payment methods in one place. Connect with Amazon, Flipkart, PhonePe, Paytm, and more.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/signup">
              <Button size="lg" className="w-full min-[400px]:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img
	    src="/placeholder.svg" alt="Banking App" width="400" height="400" className="rounded-lg object-cover"
          />
        </div>
      </section>
      <section className="bg-blue-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Millions</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Join our community of users who trust us with their financial needs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-gray-500">Payment Partners</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="border-t bg-white py-6 md:py-12">
      <div className="container mx-auto flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
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
        <p className="text-sm text-gray-500">© 2024 SecureBank. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm text-gray-500 hover:underline">
            Terms
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:underline">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  </div>
)
}

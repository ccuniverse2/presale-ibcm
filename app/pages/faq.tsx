import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQContent } from "@/components/faq"

export const metadata: Metadata = {
  title: 'FAQ - IBCM Token',
  description: 'Frequently Asked Questions about IBCM Token and its sale process.',
}

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <FAQContent />
      </main>
      <Footer />
    </div>
  )
}
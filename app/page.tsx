import { Leaf, Shield, Coins, Users, QrCode, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Agricultural Supply Chain
            <span className="text-green-600 block">Powered by Blockchain</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Integrated platform with Hedera DLT for traceability, automated payments, and microfinance in the
            agricultural ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8" asChild>
              <Link href="/marketplace">Start as Farmer</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 bg-transparent"
              asChild
            >
              <Link href="/investor/dashboard">Admin Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How AgriTrust Works</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Farmer Registration</h4>
              <p className="text-gray-600">
                Farmers register with DID identity and get verified credentials for organic/fair trade certifications
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Supply Chain Tracking</h4>
              <p className="text-gray-600">
                Every event from planting to delivery is recorded on Hedera Consensus Service with immutable timestamps
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">NFT Lot Creation</h4>
              <p className="text-gray-600">
                Each harvest batch becomes an NFT with complete metadata, quality certificates, and ownership history
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Automated Payments</h4>
              <p className="text-gray-600">
                Smart contracts handle escrow and automatic revenue sharing to farmers, cooperatives, and stakeholders
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-center mb-8">Complete Ecosystem Flow</h4>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Farmers</h5>
                <p className="text-sm text-gray-600">Register lots, track events, receive payments</p>
              </div>

              <ArrowRight className="h-6 w-6 text-gray-400 hidden lg:block" />

              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Quality Labs</h5>
                <p className="text-sm text-gray-600">Issue verifiable quality certificates</p>
              </div>

              <ArrowRight className="h-6 w-6 text-gray-400 hidden lg:block" />

              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coins className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Marketplace</h5>
                <p className="text-sm text-gray-600">Trade AgriCredit tokens, access financing</p>
              </div>

              <ArrowRight className="h-6 w-6 text-gray-400 hidden lg:block" />

              <div className="flex-1 text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <QrCode className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-semibold mb-2">Consumers</h5>
                <p className="text-sm text-gray-600">Scan QR codes for complete traceability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">AgriTrust Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="agri-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Supply Chain Traceability</CardTitle>
                <CardDescription>
                  End-to-end tracking from farmer to consumer with Hedera Consensus Service
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="agri-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <Coins className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Automated Payments</CardTitle>
                <CardDescription>Smart contract escrow with automatic revenue sharing based on quality</CardDescription>
              </CardHeader>
            </Card>

            <Card className="agri-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Microfinance</CardTitle>
                <CardDescription>Credit access based on reputation and verified supply chain data</CardDescription>
              </CardHeader>
            </Card>

            <Card className="agri-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <QrCode className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>NFT Lot Management</CardTitle>
                <CardDescription>Each harvest batch represented as NFT with complete metadata</CardDescription>
              </CardHeader>
            </Card>

            <Card className="agri-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Reputation Scoring</CardTitle>
                <CardDescription>Performance-based rating system for all stakeholders in the chain</CardDescription>
              </CardHeader>
            </Card>

            <Card className="agri-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Identity Management</CardTitle>
                <CardDescription>DID/VC for identity verification and certification in the ecosystem</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 agri-gradient text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Join the Digital Agriculture Revolution?</h3>
          <p className="text-xl mb-8 opacity-90">
            Start your journey towards transparent and efficient agricultural supply chain
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8" asChild>
            <Link href="/marketplace">Register Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="text-lg font-semibold">AgriTrust</span>
          </div>
          <p className="text-gray-400">Agricultural Supply Chain Platform powered by Hedera DLT</p>
        </div>
      </footer>
    </div>
  )
}

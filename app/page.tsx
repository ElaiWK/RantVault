"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Coffee, Lock, Shield, Clock, Zap, Eye, Heart } from "lucide-react"
import Image from "next/image"

export default function RantVaultLanding() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo and Title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image src="/rantvaultlogo.png" alt="Rant Vault Logo" width={80} height={80} className="rounded-lg" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">RANT VAULT</h1>
          </div>

          {/* One-liner */}
          <p className="text-2xl md:text-3xl text-slate-300 mb-6 font-medium">
            Lock away your words. Cool off. Decide later.
          </p>

          {/* Hero Description */}
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rant Vault is a digital impulse-control tool. Write what you're really thinking, then lock your message away
            with a timer. When the cool-off period ends, decide if you still want to send it—or let it go. Save yourself
            from sending messages you'll regret.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              <a href="/rantvault.apk" download>
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open("https://coff.ee/tea4wolfd", "_blank")}
            >
              <Coffee className="mr-2 h-5 w-5" />
              Buy Me a Coffee
            </Button>
          </div>
          <p className="text-slate-500 mt-4">iOS version coming soon!</p>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Core Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">100% Private</h3>
                  <p className="text-slate-400">No accounts, no cloud. Your rants stay 100% on your device.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Flexible Timing</h3>
                  <p className="text-slate-400">
                    Lock your words away for any length of time—1 minute to 1 hour (or more).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-start gap-4">
                <Zap className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Your Choice</h3>
                  <p className="text-slate-400">
                    Defuse and save drafts locally, or let the fuse run out and copy the rant to your clipboard.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-start gap-4">
                <Eye className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Distraction-Free</h3>
                  <p className="text-slate-400">Minimal, distraction-free interface.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Works Offline</h3>
                  <p className="text-slate-400">Works offline. No servers, no spying. Pure privacy.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Totally Free</h3>
                  <p className="text-slate-400">Totally free. Because everyone needs to vent sometimes.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Target Audience */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h2 className="text-2xl font-bold mb-6 text-white">For Anyone Who's Ever Hit Send Too Soon</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Writers, introverts, hotheads, office workers—anyone who needs a "cool-off" buffer between thought and
            action. If you've ever fired off an angry email or texted in a rage, this is for you.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-slate-300 mb-6 font-medium">Impulse-control for the modern human.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              <a href="/rantvault.apk" download>
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open("https://coff.ee/tea4wolfd", "_blank")}
            >
              <Coffee className="mr-2 h-5 w-5" />
              Support the Creator
            </Button>
          </div>
          <p className="text-slate-500 mt-4">iOS version coming soon!</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-lg">
            Made by someone who's sent too many angry emails.
            <br />
            <span className="text-slate-300 font-medium">Impulse-control for the modern human.</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

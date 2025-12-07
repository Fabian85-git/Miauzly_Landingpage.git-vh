import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Modak } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import Script from "next/script"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const modak = Modak({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "miauzly.ch - Katzensitting Plattform Schweiz",
  description:
    "Die Schweizer Plattform für Katzensitting und Community. Finde liebevolle Katzensitter oder biete selbst Katzenbetreuung an.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-278ZJT0JD9" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-278ZJT0JD9');
          `}
        </Script>
      </head>
      <body className={`${geist.variable} ${geistMono.variable} ${modak.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

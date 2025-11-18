"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, CheckCircle2 } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [userType, setUserType] = useState("")
  const [location, setLocation] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitting(true)

      try {
        const formData = new FormData()
        formData.append("access_key", "5f1f06aa-ed2b-483f-b2cc-844fa01b8b93")
        formData.append("email", email)
        if (userType) formData.append("userType", userType)
        if (location) formData.append("location", location)
        formData.append("subject", "Neue Newsletter-Anmeldung von miauzly.ch")

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        })

        const data = await response.json()

        if (data.success) {
          setSubmitted(true)
          setTimeout(() => {
            setSubmitted(false)
            setEmail("")
            setUserType("")
            setLocation("")
          }, 5000)
        } else {
          console.error("Form submission failed:", data)
          alert("Es gab einen Fehler bei der Anmeldung. Bitte versuchen Sie es erneut.")
        }
      } catch (error) {
        console.error("Error submitting form:", error)
        alert("Es gab einen Fehler bei der Anmeldung. Bitte versuchen Sie es erneut.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <section id="newsletter" className="px-4 py-16 md:py-24 bg-[rgba(1,164,254,1)] text-[rgba(49,164,254,1)] bg-[rgba(49,164,254,1)]">
      <div className="mx-auto max-w-3xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF8204] mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mb-4">{t.newsletter.title}</h2>
                <p className="text-lg text-[#6B6B6B]">
                  {t.newsletter.subtitle}
                  <br />
                  {t.newsletter.description}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">{t.newsletter.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t.newsletter.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl border-gray-200 bg-gray-50 h-12 px-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userType">{t.newsletter.userTypeLabel}</Label>
                  <Select value={userType} onValueChange={setUserType}>
                    <SelectTrigger id="userType" className="rounded-xl border-gray-200 bg-gray-50 h-12 px-4 flex items-center">
                      <SelectValue placeholder={t.newsletter.userTypePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="owner">{t.newsletter.userTypes.owner}</SelectItem>
                      <SelectItem value="sitter">{t.newsletter.userTypes.sitter}</SelectItem>
                      <SelectItem value="both">{t.newsletter.userTypes.both}</SelectItem>
                      <SelectItem value="none">{t.newsletter.userTypes.none}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">{t.newsletter.locationLabel}</Label>
                  <Input
                    id="location"
                    type="text"
                    name="location"
                    placeholder={t.newsletter.locationPlaceholder}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="rounded-xl border-gray-200 bg-gray-50 h-12 px-4"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-gray-900 rounded-full px-12 py-6 transition-all font-medium cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Wird gesendet..." : t.newsletter.submitButton}
                </button>

                <p className="text-xs text-center text-[#6B6B6B]">{t.newsletter.privacy}</p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E8F3F8] mb-6 animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-brand-blue" />
              </div>
              <h3 className="text-2xl text-[#2D2D2D] mb-4">{t.newsletter.successTitle}</h3>
              <p className="text-lg text-[#6B6B6B] mb-6">
                {t.newsletter.successMessage}
                <br />
                {t.newsletter.successSubMessage}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          <div>
            <div className="text-2xl mb-1">🇨🇭</div>
            <p className="text-sm text-white">{t.newsletter.trustIndicators[0]}</p>
          </div>
          <div>
            <div className="text-2xl mb-1">🔒</div>
            <p className="text-sm text-white">{t.newsletter.trustIndicators[1]}</p>
          </div>
          <div>
            <div className="text-2xl mb-1">💚</div>
            <p className="text-sm text-white">{t.newsletter.trustIndicators[2]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

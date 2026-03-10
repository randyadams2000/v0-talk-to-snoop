"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function AnamAgentEmbed() {
  const [accepted, setAccepted] = useState(false)
  const [agreed, setAgreed] = useState(false)

  if (!accepted) {
    return (
      <div className="relative w-full h-full">
        <iframe
          src="https://lab.anam.ai/frame/L8ySWEhuszqHzveQwSAtt"
          width="720"
          height="480"
          allow="microphone"
          className="w-full h-full border-0"
          title="Talk to Snoop Dogg AI"
        />
        <div className="fixed inset-0 bg-white flex items-start justify-center pt-4 sm:pt-8 pb-4 sm:pb-8 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-md mx-4 shadow-xl border border-border max-h-[calc(100vh-50px)] sm:max-h-none">
            <h2 className="text-xl font-semibold text-foreground mb-4">Terms and Privacy</h2>
            <p className="text-muted-foreground text-sm mb-4">
              SnoopDogg.ai is a product of Talk2Me, Inc. and is based on Snoop{"'"}s persona, knowledge and voice, as well as AI, to generate the responses to your questions.
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Please review and accept our terms before continuing. This call may be recorded and shared with service providers for quality assurance and service improvement purposes.
            </p>
            <div className="flex items-start gap-3 mb-4">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked === true)}
                className="mt-0.5"
              />
              <label htmlFor="terms" className="text-sm text-foreground cursor-pointer">
                I agree to Talk2Me{"'"}s{" "}
                <a href="#" className="text-primary underline hover:no-underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-primary underline hover:no-underline">Privacy Policy</a>.
              </label>
            </div>
            <Button
              onClick={() => setAccepted(true)}
              disabled={!agreed}
              className="w-full"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <iframe
      src="https://lab.anam.ai/frame/L8ySWEhuszqHzveQwSAtt"
      width="720"
      height="480"
      allow="microphone"
      className="w-full h-full border-0"
      title="Talk to Snoop Dogg AI"
    />
  )
}

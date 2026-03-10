import { NextResponse } from "next/server"

const PERSONA_ID = "a985cf1f-50a0-4894-8f27-da2df2d913bf"

export async function POST() {
  const apiKey = process.env.ANAM_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "ANAM_API_KEY is not configured" },
      { status: 500 }
    )
  }

  try {
    const response = await fetch("https://api.anam.ai/v1/auth/session-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        personaConfig: {
          personaId: PERSONA_ID,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Anam API error:", response.status, errorText)
      return NextResponse.json(
        { error: `Failed to create session token: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json({ sessionToken: data.sessionToken })
  } catch (error) {
    console.error("[v0] Anam session error:", error)
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 500 }
    )
  }
}

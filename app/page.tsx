import { AnamAgentEmbed } from "@/components/anam-agent-embed"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SD</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Snoop Dogg.ai</h1>

          <div className="w-8 h-8" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center px-0 md:px-4 py-0 md:py-8 overflow-hidden">
        {/* Agent Widget Container - on mobile, fill height and crop sides; on desktop, show full aspect ratio */}
        <div className="w-full max-w-4xl flex-1 md:flex-none md:aspect-[3/2] overflow-hidden relative">
          <div className="absolute inset-0 md:relative md:w-full md:h-full flex items-center justify-center">
            <div className="h-full aspect-[3/2] md:w-full md:h-full md:aspect-auto">
              <AnamAgentEmbed />
            </div>
          </div>
        </div>

        <div className="text-center mt-4 md:mt-8 max-w-2xl px-4 hidden md:block">
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl text-pretty">
            Have a laid-back conversation with the legendary rapper and icon.
            Ask him anything — fo shizzle.
          </p>
        </div>

        <p className="text-muted-foreground text-sm mt-4 md:mt-6 text-center hidden md:block">
          Powered by{" "}
          <a 
            href="https://talk2me.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Talk2Me.ai
          </a>
        </p>
      </section>


    </main>
  )
}

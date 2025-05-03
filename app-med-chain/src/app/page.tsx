import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header companyName="MedChain" />

      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Welcome to MedChain</h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Our objective is to decentralize your medical information so you can see it anywhere, anytime.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
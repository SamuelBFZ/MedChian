export default function Footer() {
    return (
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MedChain. All rights reserved.
        </div>
      </footer>
    )
  }
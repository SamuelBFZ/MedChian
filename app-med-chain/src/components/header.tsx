import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  companyName: string
}

export default function Header({ companyName }: HeaderProps) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl font-bold">
            {companyName}
          </Link>
        </div>

        <div className="flex gap-3">
          <Button variant="outline">Sign In</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  )
}
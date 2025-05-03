import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header companyName="MedChain" />

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Iniciar sesión</CardTitle>
            <CardDescription className="text-center">Ingresa tus credenciales para acceder</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="correo">Correo electrónico</Label>
              <Input id="correo" type="email" placeholder="tu@ejemplo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="Ingresa tu contraseña" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full">Iniciar sesión</Button>
            <div className="text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <Link href="/register" className="underline text-primary">
                Registrarse
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    
      <Footer />
    </div>
  )
}

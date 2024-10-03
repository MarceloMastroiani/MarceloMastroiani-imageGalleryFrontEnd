"use client";

import { useState } from "react";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { fredoka } from "../fonts";
import Link from "next/link";

export default function AutFromComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //traer de la api el findOneByEmail para buscar el usuario por email
  //traer datos de la api para logear el usuario

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log("Autenticando con:", email, password);
  };

  return (
    <div
      className={`${fredoka.className} flex items-center justify-center min-h-screen login-container`}
    >
      <Card className="w-full max-w-md text-gray-100 card-container">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Iniciar sesión</CardTitle>
          <CardDescription className="text-gray-400">
            Ingresa tus credenciales para acceder
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">
                Correo electrónico
              </Label>
              <input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">
                Contraseña
              </Label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Iniciar sesión
          </Button>

          <Link
            href="/register"
            className={buttonVariants({ variant: "default" })}
          >
            Registrarse
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

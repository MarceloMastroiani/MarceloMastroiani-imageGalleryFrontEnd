"use client";

import { useState } from "react";

import { Label } from "@/src/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { fredoka } from "../fonts";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

//interface para guardar los datos del formulario del login
interface FormDataAuth {
  email: string;
  password: string;
}

export default function AutFromComponent() {
  const [formDataAuth, setFormDataAuth] = useState<FormDataAuth>({
    email: "",
    password: "",
  });

  const router = useRouter();

  //setea el valor de cada campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormDataAuth({
      ...formDataAuth,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //enviar el formulario a la api para autenticar el usuario y obtener el token
    await axios
      .post(`http://localhost:8080/auth/login`, formDataAuth)
      .then(async function (response) {
        console.log();

        //validamos si la data recibida es correcta
        if (response.status === 201) {
          //validamos el token para saber si existe el usuario
          await axios
            .get("http://localhost:8080/profile", {
              headers: {
                Authorization: `Bearer ${response.data.access_token}`,
              },
            })
            .then(function (tokenUser) {
              console.log(tokenUser.data);
              if (!tokenUser.status) {
                throw new Error("Error al obtener el token del usuario");
              }
              //si existe, redirigir al usuario a la pagina de inicio de la galeria de fotos
              return router.push("/gallery");
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
                type="email"
                name="email"
                placeholder="tu@ejemplo.com"
                value={formDataAuth.email}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">
                Contraseña
              </Label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formDataAuth.password}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <button type="submit" className="button-field-secondary">
              Iniciar sesión
            </button>
            <Link href="/register" className="button-field-main">
              Registrarse
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

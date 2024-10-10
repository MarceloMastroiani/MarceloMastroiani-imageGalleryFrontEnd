"use client";

import { Label } from "@/src/components/ui/label";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { fredoka } from "../fonts";
import axios from "axios";
import { useRouter } from "next/navigation";

//interface para guardar los datos del formulario
interface FormData {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export default function RegisterFromComponent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  //setea el valor de cada campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //envia el formulario a la api
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/user/create", formData)
      .then(function (response) {
        if (response.status === 201) {
          //el console.log es para ver que se recibe desde la api (ESTO SE DEBE QUITAR CUANDO SE MANDA PRODUCCION)
          console.log(response.data);
          return router.push("/login");
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
          <CardTitle className="text-2xl font-bold">Registro</CardTitle>
          <CardDescription className="text-gray-400">
            Ingresa tus credenciales para registrarte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {/* NOMBRE */}
              <div>
                <Label htmlFor="name" className="text-gray-200">
                  Nombre
                </Label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                  required
                  className="input-field"
                />
              </div>

              {/* APELLIDO */}
              <div>
                <Label htmlFor="lastname" className="text-gray-200">
                  Apellido
                </Label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Apellido"
                  required
                  className="input-field"
                />
              </div>

              {/* EMAIL */}
              <div>
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@ejemplo.com"
                  required
                  className="input-field"
                />
              </div>

              {/* CONTRASEÑA */}
              <div>
                <Label htmlFor="password" className="text-gray-200">
                  Contraseña
                </Label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="input-field"
                />
              </div>
            </div>
            <button type="submit" className="button-field-main">
              sing up
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

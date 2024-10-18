"use client";

import { useState } from "react";
import axios from "axios";

//componente para mostrar la galeria de fotos
export default function GalleryComponent() {
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<string | null>(null);

  const HadlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //si existe, enviar el formulario a la api para subir la foto
    if (file) {
      //crear un formulario para enviar el archivo
      const formData = new FormData();
      //agregar el archivo al formulario
      formData.append("file", file);

      await axios
        //se envia el formulario con el archivo a la api
        .post(`http://localhost:8080/images/upload`, formData)
        .then(function (response) {
          //guarda la respuesta en la variable data
          const data = response.data;
          //guarda la url de la imagen en la variable images para luego mostrarla
          setImages(data.imageUrl);
        });
    } else {
      console.log("No file selected");
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-input">Subir foto</label>
        <input type="file" onChange={HadlerChange} />
        <button>Subir foto</button>
      </form>
      {
        //si existe, muestra la galeria de fotos
        images && (
          <img src={images} alt="galeria de fotos" width={200} height={200} />
        )
      }
    </div>
  );
}

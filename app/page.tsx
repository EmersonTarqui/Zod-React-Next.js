"use client"

import { useEffect } from "react";
import { perfilSchema, enderecoSchema } from "@/lib/schemas/schema";

export default function Home() {
  
  useEffect(() => {
    // teste perfil valido
    const perfilValido = perfilSchema.safeParse({ 
      nome: "Emerson", 
      bio: "Dev Fullstack" 
    });
    // se der true no console é porque o perfil passou na regra
    console.log("teste perfil valido:", perfilValido.success);

    // teste cep invalido
    const cepInvalido = enderecoSchema.safeParse({
        rua: "Rua A", 
        numero: "10", 
        cidade: "SP", 
        estado: "SP", 
        cep: "12345" 
    });
    // se der false é porque o cep está com formato errado/incorreto (faltando "-" ou números)
    console.log("teste cep invalido:", cepInvalido.success);

    // teste cep valido
    const cepValido = enderecoSchema.safeParse({
        rua: "Rua A", 
        numero: "10", 
        cidade: "SP", 
        estado: "SP", 
        cep: "01234-567" 
    });
    // aqui deve retornar true porque o cep está no formato correto 00000-000
    console.log("teste cep valido:", cepValido.success);

  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Atividade Schemas-ZOD</h1>
      <p>Verifique o console (F12) para ver os teste.</p>
    </main>
  );
}
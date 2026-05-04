"use client"

import { useEffect } from "react";
import { z } from "zod";
import { perfilSchema } from "@/lib/schemas/schema";

// definindo o tipo do dado de perfil automaticamente com base no schema criado
type DadosPerfil = z.infer<typeof perfilSchema>;

export default function Home() {
  
  useEffect(() => {
    // função para validar e tratar erros com safeParse e flatten
    const validarPerfil = (dados: DadosPerfil) => {
      // Passo 1: Executar a validação segura
      const resultado = perfilSchema.safeParse(dados);

      // Passo 2: Verificar se deu certo
      if (!resultado.success) {
        // Passo 3: Extrair erros por campo usando .flatten().fieldErrors
        const erros = resultado.error.flatten().fieldErrors;
        console.log("Erros encontrados:", erros);
      } else {
        // Passo 4: Usar os dados com tipagem garantida
        console.log("Usuário criado com sucesso:", resultado.data);
      }
    };

    console.log("INICIANDO TESTES DA MISSAO 2");

    // Cenário 1: dados totalmente válidos
    const caso1: DadosPerfil = { 
      nome: "Emerson", 
      bio: "Dev Fullstack",
      email: "contato@emerson.dev" 
    };
    console.log("teste 1 (sucesso esperado):");
    validarPerfil(caso1);

    // Cenário 2: dados com um campo errado (nome < 2 caracteres)
    const caso2 = { 
      nome: "E", 
      bio: "Estudante de TSI" 
    } as DadosPerfil;
    console.log("\nteste 2 (erro no nome):");
    validarPerfil(caso2);

    // Cenário 3: dados com múltiplos erros (bio > 160 e site inválido)
    const caso3 = {
      nome: "Emerson",
      bio: "a".repeat(161),
      site: "www.google.com" //falta https:// antes de www.google.com
    } as DadosPerfil;
    console.log("\nteste 3 (múltiplos erros):");
    validarPerfil(caso3);

  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Atividade safeParse</h1>
      <p>Verifique o console (F12) para ver os 3 cenários de teste da Missão 2.</p>
    </main>
  );
}
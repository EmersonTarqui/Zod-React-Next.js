"use server";

import { cadastroSchema } from "@/lib/schemas/schema";

export async function criarUsuario(formData: FormData) {
  // Passo 1: Converter FormData para objeto
  const dadosBrutos = Object.fromEntries(formData);

  // Passo 2: Validar com Zod
  const resultado = cadastroSchema.safeParse(dadosBrutos);

  // Passo 3: Retornar erros se falhou
  if (!resultado.success) {
    return { erro: resultado.error.flatten().fieldErrors };
  }

  // Passo 4: Simular salvamento no banco
  console.log("DADOS SEGUROS NO SERVIDOR:", resultado.data);
  return { sucesso: true };
}
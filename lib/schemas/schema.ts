import z from "zod";

export const cadastroSchema = z.object({
    nome: z.string().min(2, "Nome precisa ter pelo menos 2 caracteres").max(50, "Nome muito grande"),
    email: z.string().email("E-mail válido").trim().toLowerCase(),
    senha: z.string().min(8, "Senha precisa ter pelo menos 8 caracteres")
    .regex(/[A-Z]/, "Precisa ter pelo menos uma letra maiúscula")
    .regex(/[0-9]/, "Precisa ter pelo menos um número")
});


export const perfilSchema = z.object({
    nome: z.string().min(2, "Nome precisa ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido").optional().or(z.literal("")),
    bio: z.string().max(160, "Máximo de 160 caracteres"),
    site: z.string().url("URL inválida").optional().or(z.literal(""))
});

export const enderecoSchema = z.object({
    rua: z.string().min(1, "Rua obrigatória"),
    numero: z.string().min(1, "Número obrigatório"),
    cidade: z.string().min(1, "Cidade obrigatória"),
    estado: z.string().length(2, "Use a sigla (ex: SP)"),
    cep: z.string().min(8, "CEP inválido")
}).refine((dados) => /^[0-9]{5}-?[0-9]{3}$/.test(dados.cep), {
    message: "Formato de CEP inválido (00000-000)",
    path: ["cep"]
});
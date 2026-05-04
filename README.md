# Atividades de Validacao com Zod e Next.js

Atividades da aula de SPA do curso TSI.

## Historico de Missoes

## feat(missao-1)
Criacao dos Schemas de validacao com Zod para perfil, endereco e cadastro.
```bash
# Campos validados:
# - Nome: min 2 caracteres
# - Email: formato string.email()
# - Senha: min 8 caracteres, maiuscula e numero (regex)
# - CEP: validacao de formato 00000-000 (refine)
```

## feat(missao-2)
Implementacao do safeParse para tratamento de erros seguro sem quebrar a aplicacao.
```bash
# Teste de fluxo:
# - Entrada de dados -> schema.safeParse(dados)
# - Se sucesso: console.log(resultado.data)
# - Se erro: tratamento com .flatten().fieldErrors
```

## feat(missao-3)
Integracao final com Server Actions, validando dados do formulario no servidor e exibindo fieldErrors no cliente.
```bash
# Fluxo de execucao:
# - Formulario envia FormData para Server Action
# - Action valida no servidor e retorna objeto { erro: ... }
# - Cliente recebe erro e mapeia nos campos via useState
```

## Tecnologias
 Next.js

 Zod

 Tailwind CSS

 TypeScript
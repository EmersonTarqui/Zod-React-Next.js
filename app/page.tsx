"use client";

import { useState } from "react";
import { criarUsuario } from "./actions/cadastrar";

type ErrosCampos = {
  nome?: string[];
  email?: string[];
  senha?: string[];
};

export default function PaginaCadastro() {
  const [erros, setErros] = useState<ErrosCampos | null>(null);
  const [sucesso, setSucesso] = useState(false);

  async function handleSubmit(formData: FormData) {
    setSucesso(false);
    setErros(null);

    // Chamando a server action
    const resultado = await criarUsuario(formData);

    if (resultado.erro) {
      // Se a validação falhar, salva os fieldErrors no estado
      setErros(resultado.erro);
    } else {
      // Se passar, mostra o sucesso e reseta o estado
      setSucesso(true);
    }
  }

  return (
    <main className="p-10 flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4 text-black">Cadastro - Missão 3</h1>

        {/* A action do formulário chama a função que lida com a Server Action */}
        <form action={handleSubmit} className="space-y-4">
          
          <div className="flex flex-col">
            <label className="font-bold text-sm text-gray-700">Nome:</label>
            <input name="nome" className="border p-2 rounded text-black bg-white focus:ring-2 focus:ring-blue-500 outline-none" />
            {/* Exibe o erro específico do campo logo abaixo do input */}
            {erros?.nome && <span className="text-red-500 text-xs mt-1 font-semibold">{erros.nome[0]}</span>}
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-sm text-gray-700">E-mail:</label>
            <input name="email" type="email" className="border p-2 rounded text-black bg-white focus:ring-2 focus:ring-blue-500 outline-none" />
            {erros?.email && <span className="text-red-500 text-xs mt-1 font-semibold">{erros.email[0]}</span>}
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-sm text-gray-700">Senha:</label>
            <input name="senha" type="password" className="border p-2 rounded text-black bg-white focus:ring-2 focus:ring-blue-500 outline-none" />
            {erros?.senha && <span className="text-red-500 text-xs mt-1 font-semibold">{erros.senha[0]}</span>}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700 transition-colors">
            Cadastrar
          </button>

          {/* Feedback visual de sucesso */}
          {sucesso && (
            <p className="text-green-600 font-bold text-center mt-2 p-2 bg-green-50 rounded border border-green-200">
               Cadastro validado no servidor!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
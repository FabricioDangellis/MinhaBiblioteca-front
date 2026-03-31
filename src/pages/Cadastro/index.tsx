import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const cadastrar = () => {
    alert("Cadastrado");
  };

  return (
    <div className="bg-blue-300 h-screen flex justify-center items-center">
      <div className="bg-[url(/grainient.png)] bg-cover bg-center text-center rounded-3xl shadow-2xl pt-8 w-3/4 max-w-125">
        <span className="text-3xl text-white font-bold">Crie sua conta</span>

        <div className="flex flex-col mt-8 bg-white rounded-3xl p-4 w-full justify-center">
          <button
            onClick={() => {
              alert("Vou logar com o Google");
            }}
            className="h-12 mt-5 border border-gray-300 hover:border-black cursor-pointer rounded-3xl flex justify-center items-center gap-3"
          >
            <FcGoogle className="h-6 w-6" />
            <span>Faça login com o Google</span>
          </button>

          <span className="mt-5 mb-5">ou</span>

          <form onSubmit={cadastrar} className="flex flex-col">
            <div className="w-full flex gap-1">
              <input
                type="text"
                className="w-1/2 bg-gray-100 h-12 pl-4 rounded-tl-3xl rounded-bl-3xl"
                placeholder="Primeiro nome"
              />
              <input
                type="text"
                className="w-1/2 bg-gray-100 h-12 pl-4 rounded-tr-3xl rounded-br-3xl"
                placeholder="Sobrenome"
              />
            </div>

            <input
              type="email"
              className="bg-gray-100 h-12 pl-4 rounded-3xl mt-2"
              placeholder="Email"
            />

            <div className="mt-2 flex gap-1">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-gray-100 w-7/8 h-12 pl-4 rounded-tl-3xl rounded-bl-3xl"
                placeholder="Senha"
              />

              <button type="button" className="w-1/8 bg-gray-100 flex justify-center items-center h-12 rounded-tr-3xl rounded-br-3xl" onClick={toggleVisibility}>
                {showPassword? <FaRegEyeSlash className="w-5 h-5 fill-gray-600" /> : <FaRegEye className="h-5 w-5 fill-gray-600"/> }
              </button>
            </div>

            <button
              type="submit"
              className="h-12 bg-black text-white font-bold rounded-3xl mt-5 cursor-pointer transition-colors hover:bg-white hover:text-black hover:border"
            >
              Cadastrar
            </button>
          </form>

          <span className="mt-5 text-sm">
            Ao criar uma conta no Letrarium, você concorda com nossos <br />
            <Link className="font-semibold no-underline hover:underline" to="/">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link className="font-semibold no-underline hover:underline" to="/">
              Política de Privacidade
            </Link>
            .
          </span>

          <span className="font-semibold mt-6">
            Já possui uma conta?{" "}
            <Link to="/" className="underline">
              {" "}
              Faça login aqui
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
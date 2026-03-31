import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const logar = () => {
    alert("Logando");
  };

  return (
    <div className="bg-blue-300 h-screen flex justify-center items-center">
      <div className="bg-[url(/grainient.png)] bg-cover bg-center text-center rounded-3xl shadow-2xl pt-8 w-3/4 max-w-125">
        <span className="text-3xl text-white font-bold">Faça seu login</span>

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

          <form onSubmit={logar} className="flex flex-col">

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
              Entrar
            </button>
          </form>

          <span className="mt-5 text-sm">
            Esqueceu sua senha?{" "}
            <Link className="font-semibold no-underline hover:underline" to="/">
              Crie uma nova
            </Link>
            .
          </span>

          <span className="font-semibold mt-6">
            È novo por aqui?{" "}
            <Link to="/cadastro" className="underline">
              {" "}
              Cadastre-se
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
import { gql, useMutation } from "@apollo/client";  //[gql]- permite sintaxe highlight , [useMutation]- Function rocks React
import { useState , FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/logo";
import { useCreateSubscriberMutation } from "../graphql/generated"; //--Mutation tipagem graphql> generated.ts de Codegen
import codeMockUpImage from '../assets/code-mockup.png' // add solução Importe image. erro Deploy Vercel


export function Subscribe() {
   const navigate = useNavigate();

   const [name, setName] = useState('');
   const [email, setMail] = useState('');

   const [createSubscriber, { loading }] = useCreateSubscriberMutation()//useMutation(CREATE_SUBSCRIBER_MUTATION)

   async function handleSubscribe(event : FormEvent){
     event.preventDefault();

     await createSubscriber({
        variables: {
            name,
            email,
        }
     })
     navigate('/event')
     //testar dados
     //console.log(name, email);
   }

   return(
       <div className="min-h-screen bg-blurImg bg-cover bg-no-repeat flex flex-col items-center">
         <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-atuo">
            <div className="max-w-[640px]">
                <Logo />
            <h1 className="mt-08 text-[2.5rem] leading-tight">
                Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
                Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
            </p> 
           </div>
           <div className="p-8 bg-gray-700 border border-gray-500 rounded">
              <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
              
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <input 
                    className="bg-gray-900 rounded px-5 h-14"
                    type="text" 
                    placeholder="Seu nome completo"
                    onChange={event => setName(event.target.value)}
                    />
                <input 
                    className="bg-gray-900 rounded px-5 h-14"
                    type="email" 
                    placeholder="Digite seu e-mail"
                    onChange={event => setMail(event.target.value)}
                 />

                 <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                    > Garantir minha vaga
                 </button>

              </form>
           </div>
         </div>
           <img src={codeMockUpImage} className="mt-10" alt="" />
       </div>
   ) 
}


// legendas classNames
// bg-blurImg -- propriedade de imagem em backgroud criei em tailwind.config.js
// bg-cover -- imgage de fundo faz um cover onde cubre a tela toda e não se repita
// leading-tight - reduso espaçãmento de testo da palavra
// leading-tight - reduso espaçãmento de testo da palavra
// useNavigate() - usado para redirecionar usuario para uma outra tela similar função de ancora 
// erro depoy Imagen fundo subscriber        <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
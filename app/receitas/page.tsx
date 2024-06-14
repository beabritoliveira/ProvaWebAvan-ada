'use client'
import { useRouter } from "@/node_modules/next/navigation";
import dadoos from "../../recipes.json"
import Link from "@/node_modules/next/link";

export default function Home() {
  const router = useRouter();
  let dados = {dadoos}
  console.log(dados)

  const HandleRecipe = (id : string) => {
    router.push(`/receitas/${id}/escolha`)
  }

  return (
    <div>
      <h1 className="text-center text-3xl pb-12 font-medium font-sans tracking-wider pt-8">Pagina de receitas</h1>
      <div className="h-screen grid grid-cols-4 gap-4 place-items-center content-start">
              {dadoos.map((receitas) => (
                <div 
                  key={receitas.id} 
                  onClick={() => router.push('/receitas/escolha') }
                  className="cursor-pointer border p-4 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={receitas.image}
                    width={250}
                    height={250}
                    className=" grid justify-items-center "
                  />
                  <div className='pt-2'>
                    <button type="button" onClick={() =>router.push(`/receitas/${receitas.id}/escolha`)} className="align-middle"> {receitas.name} </button>
                  </div>
                  
                </div>
              ))}
        </div>
    </div>
  );
}

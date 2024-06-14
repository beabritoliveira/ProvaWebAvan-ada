'use client'
import Link from "@/node_modules/next/link";
import { useRouter } from "@/node_modules/next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div className="place-content-center ">
      <img 
        src="https://media.istockphoto.com/id/505589419/pt/vetorial/gastronomia-s%C3%ADmbolo-do-restaurante.jpg?s=170667a&w=0&k=20&c=wjRvfBcBmaI-2DRKzbxBiOsLs1FSj_bFnHt8OJ10cNA="
        width={200}
        height={200}
        className=''
      />
      <h1 className="text-center text-3xl font-medium font-sans tracking-wider pt-8 pb-3">Portal de Receitas</h1>
      <p className="px-14 text-xl text-center font-medium pb-6" > Aplicação dedicada a exibir receitas classicas da culinaria brasileira para que a cultura seja perpetuada no cenário atual</p>
     <div className="text-center">
        <button className="bg-violet-200 p-3 rounded-full place-self-center " type="button" onClick={() => router.push('/receitas')}> Ver Receitas </button>
     </div>      
    </div>
  );
}

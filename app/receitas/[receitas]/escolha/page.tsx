'use client'
import Link from "@/node_modules/next/link";
import { useRouter } from "@/node_modules/next/navigation";


export default function Pagina({ params }: { params: { escolha: string } }) {
  return (
    <div>
      <div className='cursor-pointer mx-48 font-semibold sm:text-lg text-center border-2 border-white rounded-3xl hover:bg-white  bg-violet-200 text-indigo-950'>
            <p>Receita escolhida</p>
        </div>
    </div>
  );
}

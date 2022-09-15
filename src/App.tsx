import './styles/main.css'
//podemos passar o imagens atreves de imports
import logoImg from './assets/logo-nlv-esports.svg';
import { MagnifyingGlassPlus } from "phosphor-react";

//REACT sintax = JSX js XML(HTML)
// medida em rem são multiplas de 4
function App() {

  //ler a doc do tailwind para se familiarizar com os nomes das classes
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      {/* div responsavel pelo grid dos games */}
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href='' className='relative rounded-lg even'>
          <img src='/game1.png'></img>
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a> 
         <a href='' className='relative rounded-lg even'>
          <img src='/game2.png'></img>
           <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS:Go</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a> 
         <a href='' className='relative rounded-lg even'>
          <img src='/game3.png'></img>
             <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2 </strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a> 
         <a href='' className='relative rounded-lg even'>
          <img src='/game4.png'></img>
             <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortinite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a> 
         <a href='' className='relative rounded-lg even'>
          <img src='/game5.png'></img>
             <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a> 
         <a href='' className='relative rounded-lg even'>
          <img src='/game6.png'></img>
             <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a> 
      </div>

      
      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden '>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
             <strong className='text-2xl text-white font-black block'>Não encotrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encotrar novos palyers!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
       
    </div>
  )
}

export default App
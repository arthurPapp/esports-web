import './styles/main.css'
//podemos passar o imagens atreves de imports
import logoImg from './assets/logo-nlv-esports.svg';
import { GameBanner } from './componets/GameBanner';
import { useState, useEffect } from 'react';
import { CreateFormArea } from './componets/CreateFormArea';


//REACT sintax = JSX js XML(HTML)
//medida em rem são multiplas de 4
function App() {

  interface Game{
    id: string;
    title: string; 
    bannerUrl: string;
    _count: {
      ads: number;
    }
  }

  //react precisa sempre de uma variavel de estado composta por valor e função(set)
  //usamos o <> no final do useStates para mostar que ele e generico
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:8888/games')
      .then(response => response.json())
      .then(data => {
        setGames(data);
      })
  }, [])

  //ler a doc do tailwind para se familiarizar com os nomes das classes
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>
      
      {/* div responsavel pelo grid dos games */}
      <div className="grid grid-cols-6 gap-6 mt-16">
        {/* informaçoes que se repetem muito são exelentes exemplos de componentes */}
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <CreateFormArea />
      

    </div>
  )
}

export default App

// exemplo de lista
 {/* <a href='' className='relative rounded-lg even'>
          <img src='/game1.png'></img>
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>  */}
         {/* <a href='' className='relative rounded-lg even'>
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
        </a>  */}
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import axios from 'axios';
import { Check, GameController } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';

import { Input } from './Form/Input';

//import * as Select from '@radix-ui/react-select';
  
export function CreateAdModal() {
  interface Game{
      id: string;
      title: string; 
    }


  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<String[]>([]);
  const [gameId, setGameId] = useState<String>('');
  const [useChatVoiceChannel, setUseChatVoiceChannel] = useState(false);

  useEffect(() => {
    axios('http://localhost:8888/games')
      .then(response => {
        setGames(response.data);
      })
  }, [])

  async function handlerCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    if (!gameId) {
      return;
    }
    try {
      await axios.post(`http://localhost:8888/games/${gameId}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useChatVoiceChannel,
        discord:data.discord
      })
      alert('Anúncio criado com sucesso!')
    } catch (error) {
      alert('Errp ao criar Anúncio!')
    }   
  }

    return (
       
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>


            
              <form onSubmit={handlerCreateAd} className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='game' className='font-semibold'>Qual o game?</label>  
                  {/* <select
                    name='game' id='game'
                    defaultValue=''                    
                    className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none'
                  >
                    <option disabled value="">Selecione o game que deseja joga</option>
                    {games.map(game => {
                      return <option key={game.id} value={game.id}>{game.title}</option>
                    })}                    
                  </select> */}                         
                  <Select.Root onValueChange={setGameId}>
                          <Select.Trigger className='bg-zinc-900  py-3 px-4 rounded text-sm text-zinc-500'>
                            <Select.Value placeholder="Selecione o game que deseja jogar!"/>
                          </Select.Trigger>
                          <Select.Content className='fixed py-8 px-10 top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]'>
                            <Select.Viewport className='bg-zinc-900 py-3 px-4'>
                             {games.map(game => {
                               return (
                                 <Select.Item key={game.id} value={game.id} className='text-sm text-zinc-500'>
                                      <Select.ItemText>{game.title}</Select.ItemText>
                                  </Select.Item>
                                )
                               })}  
                            </Select.Viewport>
                          </Select.Content>
                      </Select.Root>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='name'>Seu nome (ou nickname)</label>                
                  <Input name='name' id='name' placeholder='Como te chamam no game?' />
                </div>
                
                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                     <label htmlFor='yearsPlaying'>Joga a quantos anos?</label>
                     <Input name='yearsPlaying' id='yearsPlaying' type="number" placeholder='Tudo bem ser 0' />
                  </div>
                  <div className='flex flex-col gap-2'>
                      <label htmlFor='discord'>Qual o seu Discord?</label>
                      <Input name='discord' id='discord' placeholder='Usuario#000' />
                  </div>
                </div>
                
                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='weekDays'>Quando costuma jogar?</label>             
                    
                <ToggleGroup.Root
                  onValueChange={setWeekDays}
                  type='multiple'
                  className='grid grid-cols-4 gap-2'
                >
                          <ToggleGroup.Item
                            value='0'
                            className={`w-8 h-10 rounded  ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title='Domingo'
                          >
                            D
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value='1'
                            className={`w-8 h-10 rounded  ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title='Segunda'
                            >
                            S
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value='2'
                            className={`w-8 h-10 rounded  ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title='Terça'
                          >
                            T
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value='3'
                            className={`w-8 h-10 rounded  ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title='Quarta'
                          >
                            Q
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value='4'
                            className={`w-8 h-10 rounded  ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title='Quinta'
                          >
                            Q
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value='5'
                            className={`w-8 h-10 rounded  ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title='Sexta'
                          >
                            S
                          </ToggleGroup.Item>
                          <ToggleGroup.Item value='6'
                            className={`w-8 h-10 rounded  ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            title='Sábado'
                          >
                            D
                          </ToggleGroup.Item>
                      </ToggleGroup.Root>
                    
                
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor='hourStart'>Qual o horario do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input type='time' name='hourStart' id='hourStart' placeholder='De' />
                      <Input type='time' name='hourEnd' id='hourEnd' placeholder='Ate'/>
                    </div>
                  </div>
                </div>
                
                <label className='mt-2 flex items-center gap-2 text-sm'>
                  <Checkbox.Root
                    className='w-6 h-6 p-1 rounded bg-zinc-900'
                    checked={useChatVoiceChannel}
                    onCheckedChange={(checked) => {
                      if (checked === true) {
                        setUseChatVoiceChannel(true)
                      } else {
                        setUseChatVoiceChannel(false)
                      }
                    }}
                  >
                    <Checkbox.Indicator>
                      <Check className='w-4 h-4 text-emerald-400' />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  Costumo me conectar ao chat de voz
                </label>
            
                  <footer className='mt-4 flex justify-end gap-4'>
                        <Dialog.Close
                          type='button'
                          className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                        >
                          Cancelar
                        </Dialog.Close>
                    <button
                      type='submit'
                      className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                    >
                      <GameController className='w-6 h-6'/>
                      Encotrar duo
                    </button>
                  </footer>
                
              </form>
          </Dialog.Content>
        </Dialog.Portal>
      
  );
  
//tentar usar o radix como desafio 
 
}


import { useContext, useState } from 'react'
import MobileFilterBar from '../components/MobileFilterBar'
import DesktopFilterBar from '../components/DesktopFilterBar'
import PokemonList from '../components/PokemonList'
import { PokemonContext } from '../context/PokemonContext'

const filters = [
  {
    id: 'tipo',
    name: 'Tipo',
    options: [
      { value: 'grass', label: 'Planta' },
      { value: 'fire', label: 'Fuego' },
      { value: 'bug', label: 'Bicho' },
      { value: 'fairy', label: 'Hada' },
      { value: 'dragon', label: 'Dragón' },
      { value: 'normal', label: 'Normal' },
      { value: 'water', label: 'Agua' },
      { value: 'electric', label: 'Eléctrico' },
      { value: 'shadow', label: 'Fantasma' },
      { value: 'rock', label: 'Roca' },
      { value: 'rayo', label: 'Rayo' },
      { value: 'flying', label: 'Volador' },
      { value: 'ground', label: 'Tierra' },
      { value: 'psychic', label: 'Psíquico' },
      { value: 'steel', label: 'Acero' },
      { value: 'dark', label: 'Siniestro' },
      { value: 'fighting', label: 'Lucha' },
      { value: 'ice', label: 'Hielo' },
      { value: 'poison', label: 'Veneno' }
    ]
  }
]

export const HomePage = () => {
  const { active, setActive, handleCheckbox } = useContext(PokemonContext)
  const [selected, setSelected] = useState({})

  const handleOnChange = e => {
    handleCheckbox(e)
    setSelected({
      ...selected,
      [e.target.name]: e.target.checked
    })
  }

  return (
    <div className='bg-white'>
      <div>
        <MobileFilterBar
          filters={filters}
          active={active}
          setActive={setActive}
          selected={selected}
          handleOnChange={handleOnChange}
        />
        <main className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
            <DesktopFilterBar
              filters={filters}
              setActive={setActive}
              selected={selected}
              handleOnChange={handleOnChange}
            />
            <div className='mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3'>
              <PokemonList />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

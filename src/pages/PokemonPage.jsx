import { Loader } from '../components/Loader'
import { capitalized } from '../helper/helper'
import { usePokemon } from '../hook/usePokemon'

const badgeClassName = {
  0: 'inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800',
  1: 'inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800',
  2: 'inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800',
  3: 'inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800',
  4: 'inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800',
  5: 'inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800',
  6: 'inline-flex items-center rounded-full bg-pink-100 px-3 py-0.5 text-sm font-medium text-pink-800'
}

export const PokemonPage = () => {
  const { pokemon, loading } = usePokemon()

  const getRandomNumer = min => {
    const max = 6
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <main className='bg-white'>
      {loading ? (
        <Loader />
      ) : (
        <div className='mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
            <div className='lg:col-span-4 lg:row-end-1'>
              <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100'>
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                  className='object-contain object-center'
                />
              </div>
            </div>
            <div className='mx-auto min-w-full mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none'>
              <div className='flex flex-col-reverse'>
                <div className='mt-4'>
                  <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                    {capitalized(pokemon.name)}
                  </h1>
                  <p className='mt-2 text-sm text-gray-500'>#{pokemon.id}</p>
                </div>
              </div>

              <div className='mt-5'>
                {pokemon.types.map((type, index) => (
                  <span key={type.type.name} className={`${badgeClassName[getRandomNumer(index)]} mr-3`}>
                    {capitalized(type.type.name)}
                  </span>
                ))}
              </div>

              <div className='mt-5 border-t border-gray-200 pt-5'>
                <h3 className='text-sm font-medium text-gray-900'>Especificaciones</h3>
                <div className='prose prose-sm mt-4 text-gray-500'>
                  <ul role='list'>
                    <li>Altura: {pokemon.height}</li>
                    <li>Peso: {pokemon.weight}KG</li>
                  </ul>
                </div>
              </div>

              <div className='mt-5 border-t border-gray-200 pt-5'>
                <h3 className='text-sm font-medium text-gray-900'>Estadísticas</h3>
                <div className='prose prose-sm mt-4 text-gray-500'>
                  <ul role='list'>
                    <li>Hp</li>
                    <div className='my-2'>
                      <div className='overflow-hidden rounded-full bg-gray-200'>
                        <div
                          className='h-2 rounded-full bg-indigo-600'
                          style={{ width: `${pokemon.stats[0].base_stat}%` }}
                        />
                      </div>
                    </div>
                    <li>Ataque</li>
                    <div className='my-2'>
                      <div className='overflow-hidden rounded-full bg-gray-200'>
                        <div
                          className='h-2 rounded-full bg-indigo-600'
                          style={{ width: `${pokemon.stats[1].base_stat}%` }}
                        />
                      </div>
                    </div>
                    <li>Defensa</li>
                    <div className='my-2'>
                      <div className='overflow-hidden rounded-full bg-gray-200'>
                        <div
                          className='h-2 rounded-full bg-indigo-600'
                          style={{ width: `${pokemon.stats[2].base_stat}%` }}
                        />
                      </div>
                    </div>
                    <li>Ataque especial</li>
                    <div className='my-2'>
                      <div className='overflow-hidden rounded-full bg-gray-200'>
                        <div
                          className='h-2 rounded-full bg-indigo-600'
                          style={{ width: `${pokemon.stats[3].base_stat}%` }}
                        />
                      </div>
                    </div>
                    <li>Defensa especial</li>
                    <div className='my-2'>
                      <div className='overflow-hidden rounded-full bg-gray-200'>
                        <div
                          className='h-2 rounded-full bg-indigo-600'
                          style={{ width: `${pokemon.stats[4].base_stat}%` }}
                        />
                      </div>
                    </div>
                    <li>Velocidad</li>
                    <div className='my-2'>
                      <div className='overflow-hidden rounded-full bg-gray-200'>
                        <div
                          className='h-2 rounded-full bg-indigo-600'
                          style={{ width: `${pokemon.stats[5].base_stat}%` }}
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

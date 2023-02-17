import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { CardPokemon } from './CardPokemon'
import { Loader } from './Loader'

const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons, onClickLoadMore } = useContext(PokemonContext)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
              <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                {filteredPokemons.length ? (
                  <>
                    {filteredPokemons.map(pokemon => (
                      <CardPokemon pokemon={pokemon} key={pokemon.id} />
                    ))}
                  </>
                ) : (
                  <>
                    {allPokemons.map(pokemon => (
                      <CardPokemon pokemon={pokemon} key={pokemon.id} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='flex justify-center pt-8 pb-16'>
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={onClickLoadMore}
            >
              Cargar más
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default PokemonList

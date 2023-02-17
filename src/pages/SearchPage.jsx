import { CardPokemon } from '../components/CardPokemon'
import { Loader } from '../components/Loader'
import { useSearch } from '../hook/useSearch'

export const SearchPage = () => {
  const { allPokemons, loading } = useSearch()

  return (
    <main className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='pb-10'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900'>Busqueda</h1>
            <p className='mt-4 text-base text-gray-500'>
              {allPokemons.length ? (
                <>
                  Se encontraron <span>{allPokemons.length}</span> resultados:
                </>
              ) : (
                'No se encontraron resultados.'
              )}
            </p>
          </div>
          <div className='mt-6 mb-20 lg:col-span-2 lg:mt-0 xl:col-span-3'>
            <div className='bg-white'>
              <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                  {allPokemons.map(pokemon => (
                    <CardPokemon pokemon={pokemon} key={pokemon.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

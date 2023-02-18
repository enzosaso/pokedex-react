import { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { PokemonContext } from '../context/PokemonContext'

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext)

  const navigate = useNavigate()

  const onSearchSubmit = e => {
    e.preventDefault()
    navigate('/search', {
      state: valueSearch
    })

    onResetForm()
  }

  return (
    <>
      <>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-8'>
          <div className='relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12'>
            <div className='flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2'>
              <div className='flex flex-shrink-0 items-center'>
                <Link to='/' className='logo'>
                  <img src='images/logo.svg' alt='Logo Pokedex' className='block h-10 w-auto' />
                </Link>
              </div>
            </div>
            <div className='min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6'>
              <div className='flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0'>
                <form onSubmit={onSearchSubmit} className='w-full'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                      <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                    </div>
                    <input
                      id='search'
                      name='valueSearch'
                      className='block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
                      value={valueSearch}
                      onChange={onInputChange}
                      placeholder='Buscar nombre de pokemon'
                      type='search'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>

      <Outlet />
    </>
  )
}

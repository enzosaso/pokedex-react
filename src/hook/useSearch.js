import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getPokemonsByName } from '../services/pokemons'

export const useSearch = () => {
  const location = useLocation()
  const [allPokemons, setAllPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  const name = location.state.toLowerCase()

  useEffect(() => {
    if (name) {
      getPokemonsByName(name)
        .then(res => {
          setAllPokemons(res)
        })
        .finally(() => setLoading(false))
    }
  }, [name])

  return { allPokemons, loading }
}

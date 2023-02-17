import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonByID } from '../services/pokemons'

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    getPokemonByID(id)
      .then(res => {
        setPokemon(res)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { pokemon, loading }
}

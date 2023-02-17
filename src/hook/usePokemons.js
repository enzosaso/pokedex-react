import { useEffect, useState } from 'react'
import { getPokemons } from '../services/pokemons'

export const usePokemons = ({ setLoading }) => {
  const [allPokemons, setAllPokemons] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getPokemons({ limit: 50, offset })
      .then(res => {
        setAllPokemons([...allPokemons, ...res])
      })
      .finally(() => setLoading(false))
  }, [offset])

  const onClickLoadMore = () => {
    setOffset(offset + 50)
  }

  return { allPokemons, onClickLoadMore }
}

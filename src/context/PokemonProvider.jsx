import { useState } from 'react'
import { useForm } from '../hook/useForm'
import { PokemonContext } from './PokemonContext'
import { usePokemons } from '../hook/usePokemons'
import { filterItems } from '../helper/helper'

export const PokemonProvider = ({ children }) => {
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: ''
  })

  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(false)
  const { allPokemons, onClickLoadMore } = usePokemons({ setLoading })

  const [filteredPokemons, setFilteredPokemons] = useState([])

  const handleCheckbox = e => {
    const { checked, name } = e.target
    const newItems = filterItems(allPokemons, filteredPokemons, checked, name)
    setFilteredPokemons(newItems)
  }

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        onClickLoadMore,
        loading,
        setLoading,
        active,
        setActive,
        handleCheckbox,
        filteredPokemons
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

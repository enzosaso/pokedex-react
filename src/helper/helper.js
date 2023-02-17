export const capitalized = word => {
  return word[0].toUpperCase() + word.substring(1)
}

export const filterItems = (allPokemons, filteredPokemons, isChecked, checkboxName) => {
  let newArr = []
  if (isChecked) {
    const filteredResults = allPokemons.filter(pokemon =>
      pokemon.types.map(type => type.type.name).includes(checkboxName)
    )
    newArr = [...filteredPokemons, ...filteredResults]
  } else {
    newArr = filteredPokemons.filter(pokemon => !pokemon.types.map(type => type.type.name).includes(checkboxName))
  }
  return newArr.filter((pokemon, i) => newArr.indexOf(pokemon) === i)
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const baseURL = 'https://pokeapi.co/api/v2/'

export const getPokemons = async ({ limit = 50, offset = 0 }) => {
  const res = await fetch(`${baseURL}pokemon/?offset=${offset}&limit=${limit}`)
  const data = await res.json()

  const promises = data.results.map(async pokemon => {
    const res = await fetch(pokemon.url)
    const data = await res.json()
    return data
  })

  const results = await Promise.all(promises)
  return results
}

export const getPokemonByID = async pokemon => {
  const res = await fetch(`${baseURL}pokemon/${pokemon}`)
  const data = await res.json()
  return data
}

export const getPokemonsByName = async name => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const data = await res.json()

  const filterByName = data.results.filter(pokemon => pokemon.name.includes(name))

  const promises = filterByName.map(async pokemon => {
    const res = await fetch(pokemon.url)
    const data = await res.json()
    return data
  })

  const results = await Promise.all(promises)
  return results
}

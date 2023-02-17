import React from 'react'
import { Link } from 'react-router-dom'
import { capitalized } from '../helper/helper'

const badgeClass = {
  poison: 'bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 text-white',
  fire: 'bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 text-white',
  grass: 'bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 text-white',
  electric: 'bg-yellow-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 text-white',
  water: 'bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 text-white',
  ground: 'bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-900 text-white',
  rock: 'bg-cyan-100 text-cyan-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-cyan-900 text-white',
  fairy: 'bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 text-white',
  bug: 'bg-violet-100 text-violet-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-violet-900 text-white',
  dragon:
    'bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 text-white',
  psychic: 'bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 text-white',
  normal: 'bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-900 text-white',
  fighting: 'bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 text-white',
  flying: 'bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 text-white',
  ice: 'bg-cyan-100 text-cyan-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-cyan-900 text-white',
  steel: 'bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-900 text-white',
  dark: 'bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-900 text-white',
  ghost: 'bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-900 text-white'
}

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='group'>
      <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
        {pokemon.sprites.other.dream_world.front_default ? (
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
            className='h-full w-full object-contain object-center group-hover:opacity-75'
          />
        ) : (
          <img
            src='images/pokemon_logo_default.png'
            alt={`Pokemon ${pokemon.name}`}
            className='h-full w-full object-contain object-center group-hover:opacity-75'
          />
        )}
      </div>
      <h3 className='mt-2 font-semibold text-gray-900'>{capitalized(pokemon.name)}</h3>
      {pokemon.types.map(type => (
        <span key={type.type.name} className={badgeClass[type.type.name]}>
          {capitalized(type.type.name)}
        </span>
      ))}
    </Link>
  )
}

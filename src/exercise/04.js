// Cache resources
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {
  fetchPokemon,
  PokemonDataView,
  PokemonErrorBoundary,
  PokemonForm,
  PokemonInfoFallback,
} from '../pokemon'
import {createResource} from '../utils'

function PokemonInfo({pokemonResource}) {
  const pokemon = pokemonResource.read()
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

const SUSPENSE_CONFIG = {
  timeoutMs: 4000,
  busyDelayMs: 300,
  busyMinDurationMs: 700,
}

const CacheContext = React.createContext()

function createPokemonResource(pokemonName) {
  return createResource(fetchPokemon(pokemonName))
}

function PokemonCacheProvider({children}) {
  const cache = React.useRef({})
  const getPokemonResource = React.useCallback(pokemonName => {
    pokemonName = pokemonName.toLowerCase()
    if (!cache.current[pokemonName]) {
      cache.current[pokemonName] = createPokemonResource(pokemonName)
      return cache.current[pokemonName]
    }
    return cache.current[pokemonName]
  }, [])

  return (
    <CacheContext.Provider value={getPokemonResource}>
      {children}
    </CacheContext.Provider>
  )
}

function AppWithProvider() {
  return (
    <PokemonCacheProvider>
      <App />
    </PokemonCacheProvider>
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')
  const [startTransition, isPending] = React.useTransition(SUSPENSE_CONFIG)
  const [pokemonResource, setPokemonResource] = React.useState(null)
  const getCache = React.useContext(CacheContext)

  React.useEffect(() => {
    if (!pokemonName) {
      setPokemonResource(null)
      return
    }
    startTransition(() => {
      setPokemonResource(getCache(pokemonName))
    })
  }, [pokemonName, startTransition, getCache])

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  function handleReset() {
    setPokemonName('')
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className={`pokemon-info ${isPending ? 'pokemon-loading' : ''}`}>
        {pokemonResource ? (
          <PokemonErrorBoundary
            onReset={handleReset}
            resetKeys={[pokemonResource]}
          >
            <React.Suspense
              fallback={<PokemonInfoFallback name={pokemonName} />}
            >
              <PokemonInfo pokemonResource={pokemonResource} />
            </React.Suspense>
          </PokemonErrorBoundary>
        ) : (
          'Submit a pokemon'
        )}
      </div>
    </div>
  )
}

export default AppWithProvider

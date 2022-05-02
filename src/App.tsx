import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import pokemon from './utils/pokedex';

function App() {

  const [display, setDisplay] = useState(pokemon)

  const [search, setSearch] = useState("")

  useEffect(()=>{
    if (search === "") {
      setDisplay(pokemon)
    }
  }, [search])

  const returnMatch = (searchTerm: string) => {
    return pokemon.filter((poke)=>{
      return poke.name.toLowerCase().includes(searchTerm)
    })
  }

  const searchFunction = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
    setDisplay(returnMatch(search))
  }

  return (
    <div>
      <h1>PokeDex Search</h1>
      <input name={search} value={search} placeholder="Search for a Pokemon" onChange={searchFunction}/>
    <div style={{display:"flex", flexWrap:"wrap", margin:"auto"}}>
      {display.map((poke)=>{
        return <div style={{marginRight:"50px"}}>
          <h1>{poke.name}</h1>
          <img src={poke.img} alt={poke.name}/>
        </div>
      })}
    </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Filtrar } from './Components/NavBar';

import Pagination from './Components/Paginacion';
import axios from 'axios';
import Character from './Components/Character';

function App() {

  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  const [filter, setFilter] = useState('')
  const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [pages, setPages] = useState(5)

  useEffect(() => {
    const url = currentPageUrl
    setLoading(true)
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results)
      setLoading(false);
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
      setPages(data.info.pages)
    }
    fetchData();
  }
    , [currentPageUrl])

    


  function nextPage() { setCurrentPageUrl(nextPageUrl) } 
  function prevPage() { setCurrentPageUrl(prevPageUrl) } 
  function goToPage(num) { setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`) } 
  if (loading) return "Cargando..."

  const charList = characters.map(char => 
  <Character key={char.id}
   name={char.name} img={char.image} 
   gender={char.gender} 
   species={char.species} />)

   //intento
   const personjesFiltrados = characters.filter((char) =>
		char.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)

  return (
    <div className="App">
      <Filtrar filter={filter} setFilter={setFilter} />
      <h1>API RICK & MORTY</h1>
      <section className='lista-personajes'>
				{loading ? (
					<p>Cargando...</p>
				) : personjesFiltrados.length > 0 ? (
					personjesFiltrados.map((personaje) => (
            <div>
						<Character key={personaje.id} name={personaje.name} img={personaje.image} gender={personaje.gender} species={personaje.species}/>
            </div>
					))
				) : (
					<p>
						No se encontro personajes con la busqueda{' '}
						<strong>"{filter}"</strong>.
					</p>
				)}
			</section>

      <Pagination  
      nextPage={nextPageUrl ? nextPage : null}  
      prevPage={prevPageUrl ? prevPage : null}    
      goToPage={goToPage}    pages={pages}/>  
      
    </div>
  );
}

export default App;

import React from 'react'
import { Filtrar } from './NavBar'




const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
    let pageButtons = []
    for (let i = 1; i <= pages; i++) { pageButtons.push(<button key={i} onClick={() => goToPage(i)}>{i}</button>) }
    return (
        <div>      
            {prevPage && (<button onClick={prevPage}>Previa</button>)}
            {pageButtons}
            {nextPage && (<button onClick={nextPage}>Siguiente</button>)}
        </div>)
}






export default Pagination
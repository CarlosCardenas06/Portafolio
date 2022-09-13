import React from 'react'


const Character = ({ name, img, gender, species }) => {
    return (

        <div className="character-card">

            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th >Nombre</th>
                        <th >Genero</th>
                        <th >Especie</th>
                    </tr>
                    
                       
                   
                </thead>
                <tbody>
                   <img src={img}/>
                    <td>{name}</td>
                    <td>{gender}</td>
                    <td>{species}</td>

                </tbody>
            </table>
        </div>

    )


}



export default Character
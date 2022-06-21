import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

import ItemDetail from "./ItemDetail";
import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad";
import {getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const[producto, setProducto] = useState({})

const { id } = useParams ()
// console.log(id)
// console.log(typeof id)


    useEffect(()=>{
        getFetch()
        .then((resp)=> setProducto(resp.find((producto) => producto.id === id)))
        .catch(err=>console.log(err))
    },[id] );


return (

        <section className="border border-1 border-danger">
        {producto ? <ItemDetail producto={producto} /> : <div>Cargando...</div>}

<Intercambiabilidad/>

        </section>


    )
}


export default ItemDetailContainer 
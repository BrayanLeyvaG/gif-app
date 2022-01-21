import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece'])

    return (

        <>
            <h2>Buscador de gifs</h2>
            <hr/>
            <AddCategory setCategories = {setCategories} />
            
            <ol>
                {
                    categories.map( category => (
                    <GifGrid 
                        key={category}
                        category = {category} />
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp
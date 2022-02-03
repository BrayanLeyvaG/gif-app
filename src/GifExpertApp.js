import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Welcome'])

    return (

        <>
            <h1>GifApp</h1>
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
import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Konosuba'])
    
    // const handleAdd = () => {
    //     setCategories( category => [...category, 'Naruto'] );
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />   
    
            <ol>
                {
                    categories.map(category => ( 
                    // <li key={category}> {category} </li>
                        <GifGrid 
                            key = {category}
                            category={category} 
                        />
                    ))
                }
                
            </ol>


        
        </>

    )
}

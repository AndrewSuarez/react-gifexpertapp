import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const HanldeInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const hanldeSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2) {
            
            setCategories(category => [inputValue, ...category] )
            setInputValue('')
        }

    }

    return (
        <form onSubmit={hanldeSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={HanldeInputChange}
            />            
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
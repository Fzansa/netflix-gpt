import React from 'react'
import langJson from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langToUse = useSelector(store => store.lang.langToUse);
    return (
        <div className='pt-[8%] bg-black' >
            <form className='grid grid-cols-12 w-[70%] mx-auto pb-10' >
                <input type='text' placeholder={langJson[langToUse].searchMoviePlaceholder} className='col-span-9 p-4 m-4' />
                <button className='col-span-3 bg-red-600 text-white p-4 m-4' >{langJson[langToUse].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
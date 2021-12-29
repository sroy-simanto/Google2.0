import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import {useResultContext} from '../../Context/ResultsContextProvider'
import {Links} from './Links'

export const Search = () => {
    const [text, setText] = useState('')
    const { setSearchTerm } = useResultContext()
    const [ debounceValue ] = useDebounce(text, 300)
    
    useEffect(() => {
        if (debounceValue) {
            setSearchTerm(debounceValue)
        }
    }, [debounceValue])

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
            <input
                value={text}
                type="text"
                className="sm:96 w-full h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
            />
            {text && (
                <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={e => setText('')}>
                    x
                </button>
            )}
            <Links />
        </div>
    )
}


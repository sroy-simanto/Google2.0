import React from 'react'
import { Search } from '../Pages/Search'


export const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <p className="cursor-pointer text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-200">Google</p>
                <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className="text-xl bg-white border rounded-full px-2 py-1 hover:shadow-lg dark:bg-gray-500 dark:text-gray-200">
                    {darkTheme ? 'Light💡':'Dark🌛'}
                </button>
            </div>
            <Search />
        </div>
    )
}



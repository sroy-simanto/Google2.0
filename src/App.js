import React, {useState} from 'react';

import { Navbar } from './components/Shared/Navbar'
import { Footer } from './components/Shared/Footer'
import { Router } from './components/Shared/Router'

  
const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Router />
                <Footer />
            </div>
        </div>
    )
}
export default App;
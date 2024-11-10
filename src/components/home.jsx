import React from 'react'
import Navbar from './navbar'
import Charts from './charts'

import Performance from './performance'
import QuickMenu from './quickmenu'
function Home() {
    return (
        <>
            <Navbar />
            <QuickMenu />
            <Performance />
            <Charts />
        </>
    )
}

export default Home
import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'

const Home = () => {
    const [category,SetCategory] = useState("All")
    
    return (
        <div>
            <Header/>
            <ExploreMenu category={category} SetCategory={SetCategory}/>
            <FoodDisplay category={category} />
        </div>
    )
}

export default Home
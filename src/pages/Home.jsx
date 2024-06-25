import React, { useEffect } from 'react'
import Hero from '../components/firstpage/Hero-section/Hero'
import OtherImage from '../components/firstpage/Other-images/OtherImage'
import RecentlyStacked from '../components/firstpage/Recently-stacked/RecentlyStacked'
import Seasonal from '../components/firstpage/Seasonal-favs/Seasonal'
import Swiperslide from '../components/firstpage/Swiperslide'
import Trending from '../components/firstpage/Trending/Trending'
import OtherProductRespoonsive from '../responsive/OtherProduct/OtherProductRespoonsive'
import ProductNewDrop from '../responsive/Productresponsive/ProductNewdrop'
import PantCompoRepo from '../responsive/PantComponent/PantCompoRepo'


function Home() {

    return (
        <div>
            <Swiperslide />
            <ProductNewDrop />
            {/* <NewDrop />
            <Products /> */}
            <Trending />
            <OtherProductRespoonsive />
            <Seasonal />
            <PantCompoRepo />
            <Hero />
            <OtherImage />
            <RecentlyStacked />

        </div>
    )
}

export default Home
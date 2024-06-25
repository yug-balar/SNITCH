import React, { useEffect, useState } from 'react';
import NewDrop from './NewDrop';
import Products from "./Products";


function ProductNewDrop() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {screenWidth <= 767 ? <NewDrop /> : <Products />}
        </div>
    );
}

export default ProductNewDrop;
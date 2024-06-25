import React, { useEffect, useState } from 'react';
import PantComponent from './PantComponent';
import Pants from './Pants';


function PantCompoRepo() {
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
            {screenWidth <= 767 ? <PantComponent /> : <Pants />}
        </div>
    );
}

export default PantCompoRepo;
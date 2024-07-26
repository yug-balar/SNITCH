import React, { useEffect, useState } from 'react';
import OtherProductRepo from "./OtherProductRepo"
import Otherproduct from "./Otherproduct"


function OtherProductRespoonsive() {
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
            {screenWidth <= 767 ? <OtherProductRepo /> : <Otherproduct />}
        </div>
    );
}

export default OtherProductRespoonsive;
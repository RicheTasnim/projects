import React, { useContext } from 'react';
import { AssetContext } from '../GrandPa/GrandPa';

const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Has: {gift}</p>
            <p>Also has: {asset}</p>
        </div>
    );
};

export default Special;
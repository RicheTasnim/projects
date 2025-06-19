import React from 'react';
import Special from '../Special/Special';
import Friend from '../Friend/Friend';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section className="flex">
                {asset && <Special asset={asset}></Special>}
                {name === 'Julfa' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;
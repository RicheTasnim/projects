import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Sohana'}></Cousin>
                <Cousin asset={asset} name={'Rafsan'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
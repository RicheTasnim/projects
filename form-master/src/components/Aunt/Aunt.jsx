import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { AssetContext, MoneyContext } from '../GrandPa/GrandPa';

const Aunt = () => {
    const gift = useContext(AssetContext);
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex">
                <Cousin name={'Julfa'}>
                    <p>Has:{gift}</p>
                </Cousin>
                <Cousin name={'Lutfa'}></Cousin>
            </section>
            <p>Money: {money} </p>
            <button onClick={()=> setMoney(money+1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunt;
import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunt from "../Aunt/Aunt";
import "./GrandPa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const GrandPa = () => {
  const[money, setMoney] = useState(1000);
  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <h3>Net money : {money}</h3>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Father asset={asset}></Father>
            <Uncle asset={asset}></Uncle>
            <Aunt></Aunt>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

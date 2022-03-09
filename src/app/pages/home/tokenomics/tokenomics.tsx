import React from "react";
import cn from "classnames";

import styles from "./Tokenomics.module.sass";
import "./tokenomics.css";

const Tokenomics = () => {

  return (
    <div className={cn(styles.tokenomicsSection)} id="tokenomics">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div>
                    <h1 className="after1 mt-10 text-center">TOKENOMICS</h1>
                    <div className="my-20 tokenomics-text">
                        <p>Avax Geisha uses a completely new and unique reflectionary minting system which allows all of our early Geisha holders to benefit from reflection's.</p> 
                        <p>Every NFT mint will have a 10% reflection which will be used for our reward system as it will allow our Geisha holders to claim their rewards whenever they please.</p> 
                        <p>Is that it? No, of course not! We will allow our NFTs to be sold on our very own marketplace and every single time your NFT is sold, you will earn 3% commission from that sale.</p>
                        <p>For other benefits please check Roadmap - Phase 3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Tokenomics;

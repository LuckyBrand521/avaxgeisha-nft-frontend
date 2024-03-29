import React from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import './faq.css';

const Faq = () => {
  return (
    <div className={cn(styles.faqSection)} id="faq">
        <div className="container">
            <div id="faq">
                <div className={cn(styles.card)}>
                    <h1 className="mt-10 text-center">FREQUENTLY ASKED QUESTIONS</h1>
                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">What are Avax Geisha NFTs?</h5>
                            <p className="card-text">
"Avax Geisha" is an NFT of high art which has a completely different, more beautiful view of the world. As a member of the Meta universe, it is their goal to bring calmness,
self-confidence, good luck, and happiness to others. Avax Geisha's are known and praised for their ability to help people make the right decisions which will lead to success,
good luck and happiness. They are like Sakura's blooming in the spring, enchanting and bewitching the entire world with their beauty. The fabulous art is what makes Avax Geisha's so popular and why every fan of the Meta universe craves to own one.
</p>
                        </div>
                    </div>

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">When can I buy Avax Geisha NFTs?</h5>
                            <p className="card-text">Public sale - 22th of February at 14:22 UTC</p>
                            <p className="card-text">Join our Discord for the most up to date information: <a href="http://discord.gg/avaxgeisha">http://discord.gg/avaxgeisha</a></p>
                        </div>
                    </div>

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">What is the price of a Avax Geisha NFT?</h5>
                            <p className="card-text">Public sale - 1.25 AVAX</p>
                        </div>
                    </div>

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">What benefits do the first owners/minters get?</h5>
                            <p className="card-text">1. Each mint will have a 10% fee and it will be distributed to all previous minters until all 10.000 NFT's have been minted.</p>
                            <p className="card-text">2. Please check Roadmap - Phase 3</p>
                            <p className="card-text">3. First minters/owners will get 3% of sales commission each time their NFT gets sold on our own marketplace when we launch.</p>
                        </div>
                    </div>

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">How many Avax Geisha NFTs will be minted?</h5>
                            <p className="card-text">10,000 Avax Geisha NFTs will be available for mint.</p>
                        </div>
                    </div>
                    
                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">What can I do with my geishas?</h5>
                            <p className="card-text">You're entirely free to use your Geisha's in whichever way you please.</p>
                        </div>
                    </div>

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">Which wallets are supported on mint?</h5>
                            <p className="card-text">You can mint using MetaMask or any wallet supported by WalletConnect</p>
                        </div>
                    </div>  

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">Where can I buy/mint/breed my Avax Geisha NFT?</h5>
                            <p className="card-text">Minting will be directly on our website - https://avaxgeisha.com
                            Please note, make sure you are visiting, https://avaxgeisha.com - check the URL carefully. We will never DM you on Discord.</p>
                        </div>
                    </div>      

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">How much will gas be?</h5>
                            <p className="card-text">Gas will be low compared to normal ETH transactions. You know the fees in the AVAX network is already very low</p>
                        </div>
                    </div>  

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">Is it possible to sell my NFT?</h5>
                            <p className="card-text">Yes! After the minting process, the NFT will be transferred to your wallet, afterwards you will be free to sell or trade it in 3rd party marketplaces.</p>
                        </div>
                    </div>  

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">How was the trait rarity score been calculated?</h5>
                            <p className="card-text">Each trait score has been calculated by the formula below:</p>
                            <p className="card-text">Rarity Score for a Trait Value = 1 / ([Number of Items with that Trait Value] / [Total Number of Items in Collection])</p>
                        </div>
                    </div>  

                    <div className="card mt-30">
                        <div className="card-body">
                            <h5 className="card-title">Where can I get support?</h5>
                            <p className="card-text">We are here to support you on our Discord server <a href="http://discord.gg/avaxgeisha">http://discord.gg/avaxgeisha</a></p>
                        </div>
                    </div>  
                </div>

                <div className="d-flex flex-column align-items-center justify-content-center mt-50">
                    <img className="rounded-circle img-responsive" src="/images/avalanche.png" alt="img" />
                </div>

            </div>
        </div>
    </div>
  );
};

export default Faq;

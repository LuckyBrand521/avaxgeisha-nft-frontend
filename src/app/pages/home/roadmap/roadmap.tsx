import React from "react";
import cn from "classnames";
import styles from "./Roadmap.module.sass";
import "./roadmap.css";

const Roadmap = () => {
  return (
    <div className={cn(styles.roadmapSection)} id="roadmap">
        <div className="container">
            <div className={cn(styles.card)}>
                    <h1 className="mt-10 text-center">ROADMAP</h1>
                    <section id="timeline">
                        <div className="demo-card-wrapper">
                            <div className="demo-card demo-card--step1">
                                <div className="head">
                                    <div className="number-box">
                                        <span>PHASE 1</span>
                                    </div>
                                    <h2><span className="small">EARLY</span> STAGE</h2>
                                </div>
                                <div className="body">
                                    <ul>
                                        <li><span className="green">&#10003;</span> Launch Website</li>
                                        <li><span className="green">&#10003;</span> Avax Geisha's 3D modeling</li>
                                        <li><span className="green">&#10003;</span> Creating contract</li>
                                        <li><span className="green">&#10003;</span> Contract tests on testnet</li>
                                        <li><span className="green">&#10003;</span> Website and contract implementations</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="demo-card demo-card--step2">
                                <div className="head">
                                    <div className="number-box">
                                        <span>PHASE 2</span>
                                    </div>
                                    <h2><span className="small">HELLO</span> WORLD!</h2>
                                </div>
                                <div className="body">
                                    <ul>
                                        <li><span className="green">&#10003;</span> 10,000 unique Geishas have awakened! Get yours before they are all gone.</li>
                                        <li><span className="green">&#10003;</span> Building Discord and Twitter communities</li>
                                        <li><span className="gray">&#10003;</span> Creating engagement and 50 Geisha NFT giveaways will be spread throughout this period.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="demo-card demo-card--step3">
                                <div className="head">
                                    <div className="number-box">
                                        <span>PHASE 3</span>
                                    </div>
                                    <h2><span className="small">PUBLIC</span> LAUNCH</h2>
                                </div>
                                <div className="body">
                                    <ul>
                                        <li><span className="gray">&#10003;</span> Launch website on mainnet</li>
                                        <li><span className="gray">&#10003;</span> Public sale</li>
                                        <li><span className="gray">&#10003;</span> When 15% SOLD - 50 lucky minters will get 50 GEISHAS (1 Geisha each)</li>
                                        <li><span className="gray">&#10003;</span> When 25% SOLD - 100 lucky minters will get 100 GEISHAS (1 Geisha each)</li>
                                        <li><span className="gray">&#10003;</span> When 50% SOLD - 5 lucky minters will get 2,500 USDT (500 USDT each)</li>
                                        <li><span className="gray">&#10003;</span> When 75% SOLD - 2 lucky minters will get 10,000 USDT (5,000 USDT each)</li>
                                        <li><span className="gray">&#10003;</span> When 100% SOLD - 2 lucky minters will get 30,000 USDT (15,000 USDT each)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="demo-card demo-card--step4">
                                <div className="head">
                                    <div className="number-box">
                                        <span>PHASE 4</span>
                                    </div>
                                    <h2><span className="small">AFTER</span> LAUNCH</h2>
                                </div>
                                <div className="body">
                                    <ul>
                                        <li><span className="gray">&#10003;</span> Partnership with secondary markets</li>
                                        <li><span className="gray">&#10003;</span> Release Avax Geisha Marketplace</li>
                                        <li><span className="gray">&#10003;</span> Search for new partners for our upcoming NFT gaming project which will be built on the Avalanche ecosystem.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>
        </div>
    </div>
    );
};

export default Roadmap;

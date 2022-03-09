import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { useWallet } from "../../core/context-provider/wallet/wallet-context";
import Hero from "./hero/hero";
import Mint from "./mint/mint";
import Roadmap from "./roadmap/roadmap";
import Team from "./team/team";
import About from "./about/about";
import Tokenomics from "./tokenomics/tokenomics";
import Rarity from "./rarity/rarity";
import FAQ from "./faq/faq";

const Home = (props: any) => {
    const { pageIndex, setPageIndex } = useWallet();
    const { location } = props;
    useEffect(() => {
        switch (location.hash) {
            case '#about':
                setPageIndex(0);
                return;
            // case '#tokenomics':
            //     setPageIndex(1);
            //     return;
            case '#mint':
                setPageIndex(1);
                return;
            // case '#rarity':
            //     setPageIndex(3);
            //     return;
            // case '#roadmap':
            //     setPageIndex(5);
            //     return;
            // case '#team':
            //     setPageIndex(6);
            //     return;
            // case '#faq':
            //     setPageIndex(7);
            //     return;
            default:
                setPageIndex(0);
        }
    },[]);

    useEffect(() => {
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#');
            if (hashParts.length > 1) {
                const hash = hashParts[1].slice(0);
                const query = document.querySelector(`#${hash}`);
                if(query) {
                    query.scrollIntoView();
                }
            }
        };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor;
    },[window.location.hash])

  return (
    <div>
        <Helmet>
            <script src="./js/script.js?ver=145" type="text/javascript"></script>
        </Helmet>
        <Hero />
        {/*<About />*/}
        {/*<Tokenomics />*/}
        <Mint />
        {/*<Rarity />*/}
        {/*<Roadmap />*/}
        {/*<Team />*/}
        {/*<FAQ />*/}
    </div>
  );
};

export default Home;

import React from "react";
import cn from "classnames";

import styles from "./Rarity.module.sass";
import "./rarity.css";

const Rarity = () => {

  return (
    <div className={cn(styles.raritySection)} id="rarity">
        <img style={{width: '100%'}} src="/rarity.jpg"></img>
    </div>
  );
};

export default Rarity;

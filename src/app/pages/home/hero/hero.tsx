import React, { useEffect, useState } from "react";
import Web3 from "web3";

import cn from "classnames";
import TimerStyled from "./timer/TimerStyled";
import {environment} from "../../../../environment";
import "./hero.css";

const Mint = () => {

  const [remainTime, setRemainTime] = useState<number>(0);
  const [isMintLive, setIsMintLive] = useState<boolean>(false);
  const [time, setTime] = useState<any>({ day: 0, hour: 0, minute: 0, second: 0 });
  const httpWeb3 = new Web3(new Web3.providers.HttpProvider(environment.rpcUrl));
  const startTime = 1645539742;

  useEffect(() => {
      let isSubscribed = true;
      httpWeb3.eth.getBlockNumber().then((blockNumber: any) => {
          httpWeb3.eth.getBlock(blockNumber).then((result: any) => {
              if(isSubscribed) {
                  setRemainTime((startTime - Number(result.timestamp)));
              }
          });
      });
      return () => {
          isSubscribed = false;
      };
  },[])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    },[])

    useEffect(() => {
        if(remainTime <= 0) {
            setIsMintLive(true);
        } else {
            setIsMintLive(false);
        }
        const formattedTime = getTimeFormat(remainTime);
        setTime(formattedTime);
    },[remainTime])

    const getTimeFormat = (time: number) => {
        if(time > 0) {
            let temp = time;
            const day = parseInt((temp / (3600 * 24)).toString());
            temp = temp - day * 3600 * 24;
            const hour = parseInt((temp / 3600).toString());
            temp = temp - hour * 3600;
            const minute = parseInt((temp / 60).toString());
            const second = temp - minute * 60;
            return{ day: day, hour: hour, minute: minute, second: second };
        }
        return { day: 0, hour: 0, minute: 0, second: 0 }
    }

  return (
    <section className="video-container" id="hero">
        <video src="/3d-geisha.mp4" autoPlay muted playsInline loop></video>
        <div className="callout">
            <div></div>
            <div className="mb-50">
                <p><img src="/logo_text.png" className="img-responsive animate__animated animate__heartBeat" alt="" /></p>
                {
                    isMintLive ? (
                        <>
                            <h3 className="mb-20 animate__animated animate__bounceInUp animate__slower">MINT LIVE</h3>
                            <a href="/home#mint" className="btn btn-lg btn-success mb-20">MINT NOW</a>
                        </>
                    ):(
                        <>
                            <h3 className="animate__animated animate__bounceInUp animate__slower">LAUNCHING IN</h3>
                            <TimerStyled seconds={time.second} minutes={time.minute} hours={time.hour} days={time.day}  />
                        </>
                    )
                }

                {/*<h3 className="animate__animated animate__bounceInUp animate__slower">OUR SOCIAL MEDIA</h3>*/}
                {/*<div className="d-flex justify-content-center mt-5">*/}
                {/*        <a className="mr-20" href="https://twitter.com/avaxgeisha">*/}
                {/*            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50" height="50"> <circle style={{fill: '#65A2D9'}}cx="256" cy="256" r="256"/> <path style={{fill: '#3A7CA5'}}d="M393.014,139.326c-26.703,23.169-53.253,43.475-74.954,71.852c-53.381,64.372-118.613,155.7-207.386,142.086l158.61,158.396c134.456-6.873,241.497-117.493,242.686-253.376L393.014,139.326z"/> <path style={{fill: '#FFFFFF'}}d="M397.872,162.471c-6.513,2.889-13.271,5.167-20.208,6.815c7.644-7.261,13.39-16.346,16.631-26.484c0.926-2.893-2.219-5.398-4.832-3.848c-9.65,5.725-20.044,10.016-30.894,12.762c-0.628,0.16-1.276,0.24-1.929,0.24c-1.979,0-3.896-0.733-5.411-2.065c-11.542-10.174-26.39-15.777-41.805-15.777c-6.672,0-13.405,1.04-20.016,3.091c-20.487,6.353-36.295,23.254-41.257,44.103c-1.86,7.818-2.362,15.648-1.496,23.264c0.097,0.876-0.314,1.486-0.569,1.772c-0.45,0.502-1.084,0.791-1.745,0.791c-0.072,0-0.15-0.003-0.224-0.01c-44.846-4.168-85.287-25.772-113.869-60.837c-1.455-1.789-4.253-1.569-5.415,0.422c-5.596,9.606-8.554,20.589-8.554,31.766c0,17.127,6.884,33.27,18.837,45.039c-5.027-1.193-9.893-3.07-14.414-5.582c-2.188-1.214-4.877,0.35-4.908,2.851c-0.31,25.445,14.588,48.087,36.905,58.282c-0.45,0.01-0.9,0.014-1.35,0.014c-3.537,0-7.121-0.338-10.645-1.015c-2.463-0.467-4.532,1.867-3.768,4.253c7.246,22.618,26.717,39.288,50.021,43.07c-19.339,12.983-41.863,19.83-65.302,19.83l-7.306-0.003c-2.255,0-4.16,1.469-4.73,3.65c-0.565,2.145,0.474,4.413,2.396,5.53c26.412,15.372,56.541,23.495,87.138,23.495c26.784,0,51.838-5.313,74.466-15.798c20.745-9.609,39.076-23.345,54.486-40.827c14.357-16.286,25.581-35.085,33.365-55.879c7.418-19.816,11.34-40.967,11.34-61.154v-0.964c0-3.241,1.465-6.291,4.024-8.37c9.706-7.882,18.16-17.158,25.122-27.572C403.796,164.578,400.896,161.13,397.872,162.471L397.872,162.471z"/> <path style={{fill: '#D1D1D1'}}d="M397.872,162.471c-6.515,2.889-13.271,5.167-20.208,6.815c7.644-7.261,13.39-16.346,16.632-26.484c0.926-2.893-2.219-5.398-4.832-3.848c-9.65,5.725-20.044,10.016-30.894,12.762c-0.628,0.16-1.276,0.24-1.929,0.24c-1.979,0-3.896-0.733-5.411-2.065c-11.542-10.174-26.39-15.777-41.805-15.777c-6.671,0-13.405,1.04-20.016,3.091c-14.322,4.441-26.343,14.048-33.985,26.546v205.477c6.222-2.029,12.293-4.403,18.198-7.139c20.745-9.609,39.076-23.345,54.486-40.827c14.357-16.287,25.581-35.085,33.365-55.879c7.418-19.816,11.34-40.967,11.34-61.154v-0.964c0-3.241,1.465-6.291,4.024-8.37c9.706-7.882,18.16-17.158,25.122-27.572C403.796,164.578,400.896,161.13,397.872,162.471z"/> </svg>*/}
                {/*        </a>*/}
                {/*        <a className="mr-20"href="https://discord.gg/avaxgeisha">*/}
                {/*            <svg width="50" height="50" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"> <circle cx="512" cy="512" r="512" style={{fill: '#5865f2'}}/> <path d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z" style={{fill:'#fff'}}/> </svg>*/}
                {/*        </a>*/}
                {/*        <a className="mr-20" href="https://t.me/avaxgeisha">*/}
                {/*            <img src="/telegram.png" style={{width: '50px'}} />*/}
                {/*        </a>*/}
                {/*    </div>*/}
                    
            </div>
        </div>
    </section>
  );
};
//<TimerStyled seconds={time.second} minutes={time.minute} hours={time.hour} days={time.day}  />
export default Mint;

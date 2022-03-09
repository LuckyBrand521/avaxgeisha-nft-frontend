import React, {useEffect, useState} from "react";

import {useWallet} from "../../core/context-provider/wallet/wallet-context";
import cn from "classnames";
import {checkMarketPlace, clearMinted, createCollections} from "../../core/utils/network/geisha";
import {toast} from "../../core/utils/notification.util";
import BarLoader from "react-spinners/BounceLoader";
import {Redirect} from "react-router-dom";
import {ROUTES} from "../../core/data/routes";
import Web3 from "web3";
import {avaxGeishaAbi} from "../../core/data/web3-abi-address/abi";
import {avaxGeishaAddress, marketAddress} from "../../core/data/web3-abi-address/address";

import "./mint.css";

const Dashboard = (props: any) => {
    const { setPageIndex, token } = useWallet();
    const { walletAddress, connectWallet, provider } = useWallet();
    const [visible, setVisible] = useState(false);
    const [primaryPrice, setPrimaryPrice] = useState<number>(0);
    const { isOwner } = useWallet();


    const metaWeb3 = new Web3(provider);
    const geishaContract = new metaWeb3.eth.Contract(avaxGeishaAbi, avaxGeishaAddress);

    useEffect(() => {
        if(!isOwner) {
            setPageIndex(0);
        }
        setPageIndex(4);
    },[]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        {
            isOwner ? (
                <div>
                    {
                        visible ? (
                            <BarLoader size={ 70 } color='white' />
                        ) : (
                            <div>
                                <div>
                                    <button
                                        className={cn("styles.button", "btn", "btn-block", 'btn-lg', 'btn-outline-danger' ,"mt-10")}
                                        onClick={() => {
                                            geishaContract.methods.withdrawFunds().send({ from: walletAddress })
                                                .then(async (result: any) => {
                                                    setVisible(false);
                                                    toast('success', `Withdrawn`)
                                                })
                                        }}
                                    >
                                        Withdraw AVAX
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className={cn("styles.button", "btn", "btn-block", 'btn-lg', 'btn-outline-danger' ,"mt-10")}
                                        onClick={() => {
                                            setVisible(true);
                                            createCollections(token).then((result) => {
                                                console.log(result);
                                                if(result.statusCode === 404) {
                                                    setVisible(false);
                                                    toast('danger', `Failed.`);
                                                } else {
                                                    setVisible(false);
                                                    toast('success', `${result} collections are created.`);
                                                }
                                            });
                                        }}
                                    >
                                        Create Collections
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className={cn("styles.button", "btn", "btn-block", 'btn-lg', 'btn-outline-danger' ,"mt-10")}
                                        onClick={() => {
                                            setVisible(true);
                                            clearMinted(token).then((result) => {
                                                setVisible(false);
                                                toast('success', `All minted items were cleared.`);
                                            });
                                        }}
                                    >
                                        Clear Minted
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className={cn("styles.button", "btn", "btn-block", 'btn-lg', 'btn-outline-danger' ,"mt-10")}
                                        onClick={() => {
                                            setVisible(true);
                                            checkMarketPlace(token).then((result) => {
                                                setVisible(false);
                                                toast('success', `${result} Checked.`);
                                            });
                                        }}
                                    >
                                        Check DataBase
                                    </button>
                                </div>
                                <div className="number-input mt-10">
                                    <input
                                        className="quantity"
                                        min="1"
                                        name="search"
                                        value={ primaryPrice }
                                        type="number"
                                        onChange={
                                            (e) => {
                                                setPrimaryPrice(Number(e.target.value));
                                            }
                                        }
                                    />
                                    <div className="d-flex align-items-center bg-danger">
                                        <h3 className="p-5">AVAX</h3>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className={cn("styles.button", "btn", "btn-block", 'btn-lg', 'btn-outline-danger' ,"mt-10")}
                                        onClick={async () => {
                                            if(primaryPrice <=0 ){
                                                toast('danger', 'Please input price value.')
                                            }
                                            const priceValue = Web3.utils.toWei(primaryPrice.toString(), 'ether');
                                            setVisible(true);
                                            geishaContract.methods.setTokenPrimaryPrice(priceValue).send({ from: walletAddress })
                                                .on('error', function () {
                                                    setVisible(false);
                                                })
                                                .on('confirmation', function () {
                                                    setVisible(false);
                                                })
                                                .then(async (result: any) => {
                                                    setVisible(false);
                                                    toast('success', `Primary token price update as ${primaryPrice}.`)
                                                })

                                        }}
                                    >
                                        Update TokenMintPrice
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            ) : (
                <Redirect exact from="/" to={ ROUTES.home }/>
            )
        }
    </div>
  );
};

export default Dashboard;

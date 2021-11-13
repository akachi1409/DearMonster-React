import React, {useState} from "react";

class Faq extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            faqs:[
                {   
                    id:0,
                    open:true,
                    question:"Which network is DearMonsters (DMS) tokens on and what type of token is it?",
                    anwsers:["DMS runs on Binance Smart Chain Mainnet. It is a BEP-20 reflection token."]
                },
                {
                    id:1,
                    open:false,
                    question:"How do I buy the presale?",
                    anwsers:["Members need to have at least 3 invites on DearMonsters Discord to qualify for the whitelist. Please provide your wallet address in the whitelist channel on DearMonsters Discord after doing so. Only whitelisted members will be able to access the DearMonsters Presale. You may join our discord at https://discord.gg/DearMonsters"]
                },
                {
                    id:2,
                    open:false,
                    question:"What wallet do I need and how do I configure it?",
                    anwsers:["1) Download Metamask wallet: https://metamask.io/",
                            "2) To configure, please follow the instructions in the link provided: https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",
                            "3) On BSC Mainnet, click on Assets, then Import Tokens."]
                },
                {
                    id:3,
                    open:false,
                    question:"How do I swap my currencies to BUSD?",
                    anwsers:["There are several ways that this can be done. The list is not exhaustive.",
                    "1) On Metamask: Click on Swap and select whichever cryptocurrency you would like to swap into BUSD",
                    "2) On Pancakeswap: https://pancakeswap.finance/swap Connect your wallet and select whichever cryptocurrency to swap into BUSD.",
                    "3) On Binance"]
                },
                {
                    id:4,
                    open:false,
                    question:"How do I know if my purchase of DMS is successful?",
                    anwsers:["You will be able to see a successful transaction on Metamask and BSCscan. "]
                },
                {
                    id:5,
                    open:false,
                    question:"Do I have to pay gas fees?",
                    anwsers:["Yes, as this is blockchain based. The gas fees are paid to the network and none of the gas fees goes to us. "]
                },
                {
                    id:6,
                    open:false,
                    question:"How do I know that the website is secure and I will get my DMS tokens from the Presale?",
                    anwsers:["Our website undergoes through rigorous security protocols. We deploy a smart contract to facilitate our Presale. For further ease of mind, we have conducted external audit checks with different audit agencies. More information regarding the audit can be found here: https://dearmonsters.info."]
                },
                {
                    id:7,
                    open:false,
                    question:"Why will I receive 3% lesser DMS tokens than purchase amount?",
                    anwsers:["DMS is a reflection token, with 3% tax. Of this 3%, 1.5% gets redistributed to all token holders, 1% is being burned (sent to Binance Burn Wallet Address and will never be accessible to anyone) and 0.5% goes to development. This redistribution feature means that token holders can earn more DMS simply by holding DMS tokens. Burning tokens creates scarcity of DMS which balances the economy of DMS. 0.5% is sent to Developer's wallet, primarily to pay for development fees incurred for current and future development of DearMonsters. "]
                },
                {
                    id:8,
                    open:false,
                    question:"Where will DMS be launched and where can I see the trading information?",
                    anwsers:["We will be launching DMS shortly after presale in Pancake Swap, Coin Gecko, CoinMarketCap and Poocoin. More listing will be made as we progress."]
                },
                {
                    id:9,
                    open:false,
                    question:"When will the game be lauched?",
                    anwsers:["DearMonsters gameplay will launch in December 2021. More information can be found from our official channels."]
                }
            ],
        }
        this.alterOpen = this.alterOpen.bind(this);
    }
    alterOpen ( id) {
        const {faqs} = this.state;
        for (var i = 0 ; i<faqs.length; i++){
            if ( faqs[i].id === id){
                faqs[i].open = !faqs[i].open;
                continue;
            }
        }
        this.setState({faqs:faqs})
    }
    
    render() {
        return(
        <div  className="flex flex-col" id="presale-faq">
            <div className="flex flex-col w-full justify-center">
                {
                    this.state.faqs &&
                    this.state.faqs.map((item,index)=>{
                        return(
                            <div className="flex flex-col justify-center" key={index}>
                                <div className="flex justify-center faq-question py-2 my-1">
                                    <span className="w-1/3 md:w-1/2 sm:w-2/3 text-left text-lg md:text-base sm:text-sm">{item.question}</span>
                                    {item.open?
                                        <span onClick={() => { this.alterOpen( item.id) }}>&#x271A;</span>
                                        :<span onClick={() => { this.alterOpen( item.id) }}>&#x268A;</span>
                                    } 
                                </div>
                                {item.open &&
                                <div className="flex justify-center">
                                    <p className="w-1/3 md:w-1/2 sm:w-2/3 xl:text-3lg lg:text-2lg md:text-base sm:text-base py-1 px-1">
                                        {item.anwsers.map((answer, index)=>{
                                            return(
                                                <p key={index}>{answer}</p>
                                            )
                                        })}
                                    </p>
                                </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>)
    }
    
}
export default Faq;
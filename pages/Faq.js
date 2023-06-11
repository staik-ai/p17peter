import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Page from "../site-components/page/Page";
import withContracts from "../site-components/hocs/withContracts";
import {Space} from "../components/Space";


import withMetamaskAccount from "../components/hocs/withMetamaskAccount";
import {
    LoginMessage,
    TransactionMessage
} from "../site-components/messages";

class Faq extends Component {
    static mapStateToProps = ({dangerMode}) => ({dangerMode});

    render () {
		const {metamaskAccount} = this.props;
        const isLoggedIntoMetamask = Object.keys(metamaskAccount).length > 0;
        return (
        <Page header={<Space danger={this.props.dangerMode}/>} contentClass="full-width">
		                <div className="glass container bg-color-white br-5">
                    <h1 className="normal display-6">FAQ</h1>
                                
                <br />
                <br />

                <p>The chances of actually guessing the correct number obviously improves after each guess. 
		Now because it gets easier to guess the number, the cost of the guess also increases.</p>

                <br />
				
	<img src="/static/images/favicon/guess_table.png" alt="Metamask" width="642" height="360"/> 			
				
<br />
<br />
                <br />

                <p>If nobody guesses correctly by the 17th guess, then the game ends and the HPB in the contract gets automatically transferred to the next game (minus a small dev fee) so as each game rolls over, the amount of Eth in the contract that is up for grabs gets bigger and bigger!</p>

                <br />

<h3></h3>

<dl class="faq">
  <dt>
    <button aria-expanded="false" aria-controls="faq1_desc">
      How is the number to guess generated?
    </button>
  </dt>
  <dd>
    <p id="faq1_desc" class="desc">
We harness the power of the HPB Hardware Random Number Generator (HRNG) to generate a random number for each game.
- Please see <b><a href="https://www.hpb.io/post-423" target="_blank">HPB RNG Q&A</a></b> for more information.

    </p>
  </dd>
  <dt>
    <button aria-expanded="false" aria-controls="faq2_desc">
      What do I need to be able to play?
    </button>
  </dt>
  <dd>
    <p id="faq2_desc" class="desc">
               <p>All that is required is a <b><a href="https://www.hpb.io/wallet" target="_blank">HPB Wallet</a></b>, 
                some <b><a href="https://www.gate.io/trade/HPB_USDT" target="_blank">HPB Coin</a></b>
                and <b><a href="https://metamask.io/" target="_blank">Metamask</a></b></p>
    </p>
  </dd>
  <dt>
    <button aria-expanded="false" aria-controls="faq3_desc">
      What if I make a guess at the same time as someone else?
    </button>
  </dt>
  <dd>
    <p id="faq3_desc" class="desc">
All transactions are timestamped, so whichever guess is written to the blockchain first will be the official guess, and the other
                    guess will be rejected. Please check your transaction hash or click on the game number header
                    on the home page, which will show you the game transactions. If you were unsuccessful, you will 
                    see the transaction will have been reverted. 
    </p>
  </dd>

    <dt>
    <button aria-expanded="false" aria-controls="faq5_desc">
      How do I setup Metamask to work with the HPB blockchain?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
When you open Metamask, you'll need to switch from the default "Ethereum Main-net" network option, to the "Custom RPC" option. At this point, you'll need to supply the
following information: "Network Name" = HPB Network | "New RPC URL" = https://hpbnode.com | "Chain ID" = 269 | "Currency Symbol" = HPB | "Block Explorer URL" = https://hpbscan.org/
             
    </p>
<img src="/static/images/ads/metamask.png" alt="Metamask" width="900" height="600"/> 
   <br />
	<br />
	
  </dd>
    <dt>
    <button aria-expanded="false" aria-controls="faq6_desc">
I'm receiving a Metamask error?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Occasionally there may be a delay with processing to the blockchain. In this instance, we'd recommend
                    completely cancelling/rejecting the transaction in Metamask, and try guessing again.
    </p>
  </dd>
    <dt>
    <button aria-expanded="false" aria-controls="faq7_desc">
Can I alter the gas to make a saving?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Of course! We have injected a default fee of 0.02, however you can increase or decrease this value
                    to your choosing. Increasing the value will cost more, however it will usually speed up the
                    time taken to write your guess to the smart contract.
    </p>
  </dd>
    <dt>
    <button aria-expanded="false" aria-controls="faq8_desc">
Can I interact with the smart contract game directly?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
YES! And that is the beauty of HPB and the decentralized blockchain! So for example, you could launch  
<b><a href="https://remix.hpb.io.io/" target="_blank">REMIX</a></b> and then copying the source code of the 
contract into the code window, then switch to the "Run" tab, and pasting in
the current game contract address into the "At Address" field, then clicking on the blue button, which will launch all of 
the public function calls for the contract. You can retrieve the source code from our gitHub repository, and the current 
game contract can be retrieved from HPBScan, by clicking on the "current" game heading on the main game page.
    </p>
  </dd>
      <dt>
    <button aria-expanded="false" aria-controls="faq9_desc">
Can I play the game from my mobile phone?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Sure! Simply install the Metamask app, then setup your network in settings to point to the HPB network using the following 
information - following information: "Network Name" = HPB Network | "New RPC URL" = https://hpbnode.com | "Chain ID" = 0x10D | "Currency Symbol" = HPB | "Block Explorer URL" = https://explorer.myhpbwallet.com/
 
 Once you have done this you can switch to browser mode in the app and navigate to the website.
    </p>
  </dd>
        <dt>
    <button aria-expanded="false" aria-controls="faq10_desc">
Can I use the Edge Browser on my PC?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Yes, althought you will still need to setup Metamask. You can install it by going into "Extensions" and then allowing other third party extensions.
    </p>
  </dd>
          <dt>
    <button aria-expanded="false" aria-controls="faq11_desc">
Do you have real-time support?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Visit the community on the <b><a href=" https://t.me/HPBglobal" target="_blank">HPB Global Telegram Chat</a></b> and stay in touch with a great community!
               
    </p>
  </dd>
	 
<dt>
    <button aria-expanded="false" aria-controls="faq11_desc">
How do I play from the telegram bot??
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Visit the HPB17 bot at: <b><a href=" https://t.me/PlayHPB17bot" target="_blank">HPB17 Telegram bot</a></b> and type in /help for more details.
               
    </p>
  </dd>
  
  
  
</dl>


                </div>
            </Page>
        )
    }
}


export default compose(
    withMetamaskAccount,
	withContracts,
    connect(Faq.mapStateToProps)
)(Faq);

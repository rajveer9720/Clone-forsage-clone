'use client';

import React from 'react';
import Image from 'next/image'; // Importing Image component from Next.js for better optimization
import Ronxvideo from '../../assets/video/Ronx.mp4'


// Import the image directly
import DecentralizationImage from 'src/assets/images/Instruction/decentralization.webp';

const Instruction: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-5 dark:bg-light-dark">
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="flex flex-col space-y-2.5">
            <h2>Decentralizationss</h2>
            <Image
              src={DecentralizationImage}
              alt="Decentralization"
              className="flex-shrink-0 mb-5 sm:mb-0 sm:mr-5 max-h-[350px] rounded-lg"
              // Next.js Image component requires width and height
              width={350} // Replace with actual image width
              height={350} // Replace with actual image height
            />

            <div className="text-white">
              What is <b className="font-medium">decentralization?</b> What are its benefits and advantages? Decentralized marketing is created on an automated contract that guarantees you maximum security and stability.
            </div>
            <div className="text-white">
              A <b className="font-medium">smart contract</b> is an algorithm with automatic execution. It exists inside the Smart Chain blockchain*, which is one of the top cryptocurrencies. Smart contracts, like cryptocurrencies themselves, are decentralized. They work strictly according to a certain program, and once they are launched, it is impossible to change their mode of operation. The code that determines the logic of a smart contract is written in a blockchain, and all calculations are performed by millions of computers around the world. This ensures that a smart contract cannot be hacked or stopped.
            </div>
            <div className="bg-gray-100 dark:bg-light-dark p-5 rounded-lg">
              <b className="text-white font-medium">Blockchain</b> is an immutable register of transactions and information, protected from any further manipulation by cryptographic methods. It is simultaneously maintained by thousands of independent computers around the world.
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark">
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">
            What is a BUSD token
          </span>
          <div className="flex">
            <div className="space-y-2.5">
              <div>
                <b className="inline text-white font-medium notranslate mr-1.5">BUSD</b> is a cryptocurrency with a fixed exchange rate that is equal to $1. It has a fully verified code and is approved by the New York State Department of Financial Services.
              </div>
              <div>
                5 benefits of <span className="notranslate mr-1.5">BUSD</span> for <span className="notranslate mx-1.5">RonX</span>:
              </div>
              <ul className="space-y-2.5">
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">1. Fixed Cost.</b> Your RonX performance is no longer affected by rate fluctuations and market corrections.
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">2. All the opportunities that cryptocurrency provides.</b> <span className="notranslate mx-1.5">BUSD</span> token can be exchanged for any cryptocurrency on DEX exchangers with negligible fees in a couple of clicks.
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">3. Simple calculations.</b> Registration fees, upgrades, and cycles are now specified in US Dollar equivalents.
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">4. Precise planning.</b> You can accurately track costs and estimate results without wasting time converting from one unit to another.
                  </span>
                </li>
                <li className="flex">
                  <span>
                    <b className="inline text-white font-medium">5. Protection of participants' interests.</b><span className="notranslate mx-1.5">BUSD</span> is fully backed by the US Dollar at a ratio of 1:1 and can always be exchanged for Dollars. It was created in a Paxos and Binance partnership.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded-lg bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">
            <span className="notranslate mr-1.5">RonX</span> marketing
          </span>
          <div className="flex">
            <div className="flex mt-5 items-center sm:items-start flex-col">

              <video controls
                className="bg-black w-full mb-7.5 h-300px sm:h-180px"
                src={Ronxvideo}
                autoPlay
                muted
                loop  
                title="RonX Marketing Video"
              ></video>
              <div className="mt-5 space-y-2.5">
                <span>
                  <b className="inline text-white font-medium">
                    <span className="notranslate mr-1.5">RonX</span> marketing
                  </b> is implemented on the Smart Chain blockchain smart contract technology. The marketing employs the BUSD token in the BEP-20 format with a stable exchange rate of 1 USD. To send
                  <span className="notranslate mx-1.5">BUSD</span> or any other token functioning in the Smart Chain blockchain, you will need a certain amount of
                  <span className="notranslate mx-1.5">BNB</span> to pay the fee.
                </span>
                <ul className="space-y-2.5">
                  <li className="flex">
                    <svg className="w-5 h-5 flex-shrink-0 inline-block mr-2.5" id="instruction_bnb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                      <defs>
                        <style>{'.cls-1{fill:#f0b90b}'}</style>
                      </defs>
                      <path className="cls-1" d="m60.24 100-16.37 16.31L27.5 100l16.37-16.31L60.24 100zM100 60.4l28.06 27.95 16.38-16.3L100 27.79 55.56 72.05l16.38 16.3L100 60.4zM156.13 83.69 139.76 100l16.37 16.31L172.5 100l-16.37-16.31zM100 139.6l-28.06-27.95-16.38 16.3L100 172.21l44.44-44.26-16.38-16.3L100 139.6z"></path>
                      <path className="cls-1" d="M100 116.31 116.37 100 100 83.69 83.63 100 100 116.31z"></path>
                      <circle cx="100" cy="100" r="91.21" style={{ fill: 'none', stroke: '#f0b90b', strokeMiterlimit: 10, strokeWidth: '12px' }}></circle>
                    </svg>
                    <span>
                      <b className="inline text-white font-medium notranslate mr-1.5">BNB</b> - This is the internal BEP-20 format coin of the Smart Chain blockchain, which is required to pay the transaction fee.
                    </span>
                  </li>
                  <li className="flex">
                    <svg className="w-5 h-5 flex-shrink-0 inline-block mr-2.5" id="instructions_busd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                      <defs>
                        <style>{'.cls-1{fill:#f0b90b}'}</style>
                      </defs>
                      <g id="Layer_2">
                        <g id="Layer_1-2">
                          <path className="cls-1" d="m100 27.28 18 18.4-45.27 45.23-18-18ZM127.27 54.55l18 18.4-72.5 72.5-18-18ZM45.46 81.82l18 18.4-18 18-18-18ZM154.54 81.82l18 18.4-72.54 72.5-18-18Z"></path>
                        </g>
                      </g>
                      <circle cx="100" cy="100" r="91.21" style={{ fill: 'none', stroke: '#f0b90b', strokeMiterlimit: 10, strokeWidth: '12px' }}></circle>
                    </svg>
                    <span>
                      <b className="inline text-white font-medium notranslate mr-1.5">BUSD</b> - This is the BEP-20 format Smart Chain blockchain coin with a stable rate of 1 USD.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>

        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">
            <span className="notranslate mr-1.5">RonX</span> marketing
          </span>
          <div className="flex">
            <div className="space-y-2.5">
              <span className="mb-2.5">
                <b className="inline text-white font-medium">
                  <span className="notranslate mr-1.5">RonX</span> marketing
                </b> is a matrix system based on decentralized smart contract technology. Profits come from inviting new partners to your team, who once registered stay with you forever since it is recorded in blockchain. The income is distributed automatically and instantly to the personal wallets of the participants.
              </span>
              <span>
                Participants have access to <b className="inline text-white font-medium">4 marketing programs,</b> different in terms of profitability and conditions of interaction between partners. The most efficient method is to use all of these programs in parallel.
              </span>
              <ul className="space-y-2.5">
                <li className="inline-block">
                  <svg className="float-left w-5 h-5 flex-shrink-0 inline-block mr-2.5 mt-1.5" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.78 34.79">
                    <defs>
                      <pattern id="a" width="43.63" height="39.78" patternTransform="translate(6.45 -29.1)" patternUnits="userSpaceOnUse">
                        <path fill="none" d="M0 0h43.63v39.78H0z"></path>
                        <path fill="#90c255" d="M0 0h43.63v39.78H0z"></path>
                      </pattern>
                    </defs>
                    <path d="M31.5 43.22a14 14 0 0 0 7.56-25.81 13.37 13.37 0 0 1-1.18-.78 1.64 1.64 0 0 1-.56-2.44c.5-.76 1.27-.9 2.3-.33a16.76 16.76 0 0 1 9 12.49A17.26 17.26 0 0 1 36.9 45.71c-11.74 4-24.12-5.93-22.67-18.22a24.73 24.73 0 0 1 .95-4.22c.48-1.59 1.23-2.07 2.26-1.69s1.41 1.31.87 2.8a13.67 13.67 0 0 0-.4 8.34 14 14 0 0 0 13.59 10.5Z" transform="translate(-14.11 -11.82)" fill="url(#a)"></path>
                    <path d="M18.84 16.34c.56.37 1.14.71 1.67 1.11Q26.8 22.22 33.05 27a2.64 2.64 0 0 1 .32 4 2.6 2.6 0 0 1-3.94-.22c-3.5-4.54-6.93-9.13-10.38-13.7a4.77 4.77 0 0 1-.34-.63ZM34.12 14.51a2.62 2.62 0 1 1-5.23-.15 2.62 2.62 0 0 1 5.23.15Z" transform="translate(-14.11 -11.82)" fill="url(#a)"></path>
                  </svg>
                  <span>
                    <b className="inline text-white font-medium">The validity of the levels is not limited.</b> By activating any level of the program once, it is assigned to you forever and does not require any additional rewards.
                  </span>
                </li>
                <li className="inline-block">
                  <svg className="float-left w-5 h-5 flex-shrink-0 inline-block mr-2.5 mt-1.5" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.4 64.63">
                    <path d="M20.09 6.61v-3.2A3.34 3.34 0 0 1 23.46 0a3.41 3.41 0 0 1 3.34 3.41v3.2h15.26a3.31 3.31 0 0 1 3.34 3.34 3.35 3.35 0 0 1-3.34 3.34H11.15a4.48 4.48 0 0 0-4.48 4.47v7a4.48 4.48 0 0 0 4.48 4.47h23.17a11.11 11.11 0 0 1 11.08 11.1v7a11.11 11.11 0 0 1-11.08 11.1h-7.48v2.87a3.39 3.39 0 0 1-3.38 3.34 3.32 3.32 0 0 1-3.41-3.34v-2.87H3.34A3.31 3.31 0 0 1 0 55.09a3.25 3.25 0 0 1 3.34-3.27h31a4.53 4.53 0 0 0 4.47-4.54v-7a4.47 4.47 0 0 0-4.49-4.46H11.15A11.17 11.17 0 0 1 0 24.71v-6.95A11.17 11.17 0 0 1 11.15 6.61Z" fill="#f0ba10"></path>
                  </svg>
                  <span>
                    <b className="inline text-white font-medium">Higher levels = more income.</b> Marketing income is generated from the value of the level in which your partner took a spot. Therefore, working at higher levels increases your results. Marketing is built in such a way that income from one cycle is enough to activate the next level.
                  </span>
                </li>
                <li className="inline-block">
                  <svg className="float-left w-5 h-5 flex-shrink-0 inline-block mr-2.5 mt-1.5" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.22 49.33">
                    <path d="M33.6 0a10.61 10.61 0 0 1 10.61 10.61v35.52a3.21 3.21 0 1 1-6.41 0V27.38H6.35v18.75a3.23 3.23 0 0 1-3.21 3.21A3.21 3.21 0 0 1 0 46.13V10.61A10.6 10.6 0 0 1 10.6 0ZM6.35 21.09H37.8V10.61a4.21 4.21 0 0 0-4.2-4.2h-23a4.22 4.22 0 0 0-4.25 4.2Z" fill="#d872aa"></path>
                  </svg>
                  <span>
                    <b className="inline text-white font-medium">Automatic cycles at all levels.</b> The levels of each program contain a fixed number of spots. As soon as all the spots in the level are filled, a new cycle automatically begins.
                  </span>
                </li>
                <li className="inline-block">
                  <svg className="float-left w-5 h-5 flex-shrink-0 inline-block mr-2.5 mt-1.5" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.42 43.29">
                    <path d="M10.61 18.47A18.78 18.78 0 1 1 28.55 37.23 18.6 18.6 0 0 1 10.61 18.47Zm26.4 3.22 3.55 1.82c.17-.28.35-.57.56-.87a7.21 7.21 0 0 1 .8-1l-3.5-1.67a.64.64 0 0 1-.33-.89 5.33 5.33 0 0 0 .55-3 5.73 5.73 0 0 0-1.88-3.3c-2.4-2-5.7-1.1-7.66 2-.17.28-.33.55-.48.84a.63.63 0 0 1-.84.26l-3.5-1.74a.61.61 0 0 1-.27-.83c.13-.25.26-.49.4-.72 3.16-4.55 8.41-6.06 11.77-3.36s3.83 7.74.67 12.3ZM13.89 26l-3.55-1.82c-.17.28-.35.57-.56.87a7.21 7.21 0 0 1-.8 1l3.5 1.67a.64.64 0 0 1 .33.89 5.33 5.33 0 0 0-.55 3 5.73 5.73 0 0 0 1.88 3.3c2.4 2 5.7 1.1 7.66-2 .17-.28.33-.55.48-.84a.63.63 0 0 1 .84-.26l3.5 1.74a.61.61 0 0 1 .27.83c-.13.25-.26.49-.4.72-3.16 4.55-8.41 6.06-11.77 3.36s-3.83-7.74-.67-12.3ZM28.19 9.89a.59.59 0 0 1-.26.82l-3.53 1.73c-.16.08-.56-.22-.7-.5a7.14 7.14 0 0 0-.68-1 9.42 9.42 0 0 0-2.12 1l3.52 1.66a.64.64 0 0 1 .33.89c-.08.12-.13.25-.2.38a.63.63 0 0 1-.83.25l-3.51-1.74c-.13.21-.26.41-.37.63-.29.57-.55 1.17-.8 1.76a.64.64 0 0 1-.89.33l-3.5-1.67c-.14.33-.29.67-.42 1a10.14 10.14 0 0 0-.73 1.71l3.52 1.73a.64.64 0 0 1-.33.89c-.12.07-.25.11-.38.16l-3.5-1.74a.64.64 0 0 1-.88.33l-3.53-1.73c-.14.31-.27.63-.4.94-.22.53-.4 1.07-.58 1.61a.64.64 0 0 1-.89.33L9 26.36a.64.64 0 0 1-.33.89c-.12.06-.24.1-.37.16l-3.5-1.74a.64.64 0 0 1-.89.33L1 26.34c.12.28.23.57.36.85a11.15 11.15 0 0 0 2.88 4.38l3.51 1.74a.63.63 0 0 1 .33.88c-.07.13-.14.26-.21.39a10.49 10.49 0 0 0-1.2 2.7l3.55 1.82c.17-.28.35-.57.56-.87a7.14 7.14 0 0 1 .8-1l-3.5-1.67a.64.64 0 0 1-.33-.89 5.33 5.33 0 0 0 .55-3 5.73 5.73 0 0 0-1.88-3.3c-2.4-2-5.7-1.1-7.66 2-.17.28-.33.55-.48.84a.63.63 0 0 1-.84.26l-3.5-1.74a.61.61 0 0 1-.27-.83c.13-.25.26-.49.4-.72 3.16-4.55 8.41-6.06 11.77-3.36s3.83 7.74.67 12.3Z" transform="translate(-13.89 -3.53)" fill="#84bb26"></path>
                  </svg>
                  <span>
                    <b className="inline text-white font-medium">Unlimited growth.</b> Participants can achieve the maximum results by activating all levels of all marketing programs. After that, you just need to start a new cycle.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col ml-auto">
              <div className="relative overflow-hidden pt-6/11 mb-5">
                <iframe
                  className="absolute w-full h-full top-0 left-0"
                  src="https://www.youtube.com/embed/E5hh7BzMtBI"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Registration</span>
          <div className="flex">
            <div className="flex items-center sm:items-start flex-col">
              <img src="https://busd.RonX.io/instructions/registrationPrev.png" className="flex-shrink-0 max-h-[350px] mb-2.5 item-center" alt="Registration Preview" />
              <div className="flex-col space-y-2.5 sm:order-2">
                <div>
                  <b className="inline text-white font-medium">Smart Contract.</b>
                  <span className="notranslate mr-1.5">RonX</span> platform is based on smart contract technology. RonX smart contracts are programmed in such a way, that they never store participants' funds, their balance is always zero. The purpose of the smart contract is to automatically redirect funds from incoming transactions to the wallets of other participants, according to marketing program rules.
                </div>
                <div>
                  <b className="inline text-white font-medium">Referral linking.</b>
                  Also, your referral linkage remains unchanged, you can't change your upline partner, as well as your downline partners are assigned to you in your structure forever.
                </div>
                <div>
                  <b className="inline text-white font-medium">Personal Wallet.</b>
                  To become a member, you need to create your personal wallet.
                </div>
                <div>
                  Only you have access to the funds. All rewards according to marketing are instantly credited to your personal wallet. All transactions are stored in the public domain in a blockchain. You can easily check each transaction and see where the funds have been transferred.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> */}

      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Registration</span>
          <div className="flex">
            <div className="flex items-center sm:items-start flex-col">
              <img src="https://busd.RonX.io/instructions/registrationPrev.png" className="flex-shrink-0 max-h-[350px] mb-2.5 item-center" alt="Registration Preview" />
              <div className="flex-col space-y-2.5 sm:order-2">
                <div>
                  <b className="inline text-white font-medium">Smart Contract.</b>
                  <span className="notranslate mr-1.5">RonX</span> platform is based on smart contract technology. RonX smart contracts are programmed in such a way, that they never store participants' funds, their balance is always zero. The purpose of the smart contract is to automatically redirect funds from incoming transactions to the wallets of other participants, according to marketing program rules.
                </div>
                <div>
                  <b className="inline text-white font-medium">Referral linking.</b>
                  Also, your referral linkage remains unchanged, you can't change your upline partner, as well as your downline partners are assigned to you in your structure forever.
                </div>
                <div>
                  <b className="inline text-white font-medium">Personal Wallet.</b>
                  To become a member, you need to create your personal wallet.
                </div>
                <div>
                  Only you have access to the funds. All rewards according to marketing are instantly credited to your personal wallet. All transactions are stored in the public domain in a blockchain. You can easily check each transaction and see where the funds have been transferred.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Registration</span>
          <div className="flex">
            <div className="flex items-center sm:items-start flex-col">
              <img src="https://busd.RonX.io/instructions/registrationPrev.png" className="flex-shrink-0 max-h-[350px] mb-2.5 item-center" alt="Registration Preview" />
              <div className="flex-col sm:order-2 space-y-2.5">
                <div>
                  <b className="inline text-white font-medium">Registration in <span className="notranslate ml-1.5">RonX BUSD</span></b> is the activation of first levels in <span className="notranslate mx-1.5">RonX x3</span> and <span className="notranslate mx-1.5">x4</span> programs, which cost 5 <span className="notranslate mx-1.5">BUSD</span> each. In total, registration costs 10 <span className="notranslate mx-1.5">BUSD</span>. The first levels in x3 and x4 programs are always activated together and cannot be accessed separately. All the following levels can be purchased one by one, in ascending order.
                </div>
                <div>
                  Registration transaction is credited to the smart contract. The smart contract records your wallet number into the structure and redirects the funds to the personal wallet of the person that invited you (your upline partner). You occupy a free spot in their first level of x3 program and the first level of x4 program. Level 1 of x3 and Level 1 of x4 are respectively opened for you, and now you can invite partners through your personal referral link.
                </div>
                <div>
                  After activation of the first levels of x3 and x4 programs, the xXx and xGold program activation becomes available. After you activate it, the activation of xGold program becomes available.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">How RonX x3 works
          </span>
          <div className="flex">
            <div className="flex items-center sm:items-start flex-col">
              <img src="https://busd.RonX.io/instructions/registrationPrev.png" className="flex-shrink-0 max-h-[350px] mb-2.5 item-center" alt="Registration Preview" />
              <div className="flex-col sm:order-2 space-y-2.5">
                <div>
                  <b className="inline text-white font-medium">Registration in <span className="notranslate ml-1.5">RonX BUSD</span></b> is the activation of first levels in <span className="notranslate mx-1.5">RonX x3</span> and <span className="notranslate mx-1.5">x4</span> programs, which cost 5 <span className="notranslate mx-1.5">BUSD</span> each. In total, registration costs 10 <span className="notranslate mx-1.5">BUSD</span>. The first levels in x3 and x4 programs are always activated together and cannot be accessed separately. All the following levels can be purchased one by one, in ascending order.
                </div>
                <div>
                  Registration transaction is credited to the smart contract. The smart contract records your wallet number into the structure and redirects the funds to the personal wallet of the person that invited you (your upline partner). You occupy a free spot in their first level of x3 program and the first level of x4 program. Level 1 of x3 and Level 1 of x4 are respectively opened for you, and now you can invite partners through your personal referral link.
                </div>
                <div>
                  After activation of the first levels of x3 and x4 programs, the xXx and xGold program activation becomes available. After you activate it, the activation of xGold program becomes available.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>
        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">How RonX x3 works</span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div className="mb-2.5">All partners in your <b className="inline text-white font-medium notranslate mx-1.5">RonX X3</b> program levels are the people whom you’ve personally invited. When partners register in the program using your referral link, they take spots below you.</div>
              <div>Distribution of rewards when filling each spot in a level of the program is as follows:</div>
            </div>
          </div>
          <ul className="space-y-2.5">
            <li className="flex sm:flex-col">

              <span>The first partner you invite is placed on the first spot below you. Reward of 100% goes to your personal wallet.</span>
            </li>
            <li className="flex sm:flex-col">

              <span>The second partner is placed on the second spot below you. You also get 100% reward to your personal wallet.</span>
            </li>
            <li className="flex sm:flex-col">

              <span>The third partner is placed on the third spot below you and completes the cycle. 100% of the income goes to your upline 100% partner's wallet, and a new cycle immediately begins for you, and you can fill up the spots again by inviting new partners.</span>
            </li>
          </ul>
          <div className="bg-white-100 rounded-mini p-5">
            <b className="inline text-white font-medium">Likewise with your partners.</b> Each time your partner completes the cycle of his level, you receive a payment to the wallet in 100% of the level cost, and the partner opens the new cycle again. At the same time, this partner takes a new place under you. Thus, the same partner can occupy several places in a row in your levels.
          </div>
        </div>

      </div>

      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>

        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">How RonX x4 works</span>
          <div className="flex">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div className="">
                In <b className="inline text-white font-medium notranslate mx-1.5">RonX x4</b> program you can invite personal partners, as well as receive spillovers from above and below.
              </div>
              <ul className="space-y-2.5">

                <li className="flex sm:flex-col">

                  <span>Rewards from partners who occupy these spots instantly go to your wallet in the amount of 100%.</span>
                </li>
                <li className="flex sm:flex-col">

                  <span>The partner completes the cycle of the level, the reward of 100% 100% goes to your upline, and the new cycle begins for you.</span>
                </li>
              </ul>
              <div className="bg-white-100 rounded-mini p-5">
                When a partner on the 2nd line joins your upline, they take a place in your 1st line — that is, you receive a <b className="inline text-white font-medium">spillover from above</b>. Similarly, <b className="inline text-white font-medium">a spillover can come from below</b>. When a partner comes to your downline on the 1st line, then they will take a place on your 2nd line. Thus, places in the x4 levels can be occupied by people invited only by you, or there can be none invited by you, or mixed.
              </div>
              <div>
                <ul>
                  <li className="flex items-center sm:items-start">

                    <span>Do not forget to activate the next level after the 1st cycle so as not to miss payments on the previous level.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">How levels work
          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              {/* <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div> */}
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">How to automatic cycles work

          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div>
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Upgrade

          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div>
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Level freeze


          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div>
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>



      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Lost profit and extra profit


          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div>
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Lost profit and extra profit


          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div>
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}



      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Spillovers



          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div>
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Profit





          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div>
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">How many levels should be activated at the start



          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div>
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className='flex mt-5 items-center rounded-lg  bg-gray-100  p-5  dark:bg-light-dark'>


        <div className="flex flex-col rounded bg-black-light text-base w-full p-7.5 sm:text-sm sm:p-5">
          <span className="text-2xl text-white font-medium mb-5 sm:text-xl">Definitions



          </span>
          <div className="flex ">
            <div className="space-y-2.5">
              <div className="flex justify-evenly items-center space-x-5 mb-5 sm:space-y-2.5 sm:space-x-0 sm:flex-col">

              </div>
              <div>
                The advantage of <b className="inline text-white font-medium">xGold</b> program is a larger number of partners
                and spillover opportunities, which generates an income of 1020% from one cycle of the level.
              </div>
              <ul className="space-y-2.5">
                <li>
                  <b className="inline text-white font-medium">First line (2 places):</b> rewards go to your{' '}
                  <b className="inline text-white font-medium">upline</b> partner.
                </li>
                <li>
                  <b className="inline text-white font-medium">Second line (4 places):</b> you get{' '}
                  <b className="inline text-white font-medium">20%.</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Third line (8 places):</b> you get{' '}
                  <b className="inline text-white font-medium">30%</b> from each spot
                </li>
                <li>
                  <b className="inline text-white font-medium">Fourth line (16 places):</b> you get{' '}
                  <b className="inline text-white font-medium">50%</b> from each participant (30% and 20% are distributed to
                  upline partners).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Instruction;

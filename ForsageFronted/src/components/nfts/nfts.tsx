'use client';

import Button from '@/components/ui/button';
import { useDrawer } from '@/components/drawer-views/context';

import React from 'react';

import opensea from '@/assets/images/nft/nft/open-sea.webp';
import openseascreen from '@/assets/images/nft/nft/open-sea-screen.webp'
import FileInput from '@/components/ui/file-input';
import Image from 'next/image';
export default function NFTS() {
  return (
    <>
         <div className="mx-auto w-full pt-8 sm:pt-12 lg:px-8 xl:px-10 2xl:px-0">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-900 dark:text-white">
            NFT Collection <span>ID 1757863</span>
          </h2>
          {/* <Preview /> */}
        </div>

        <div className="mb-8 mt-6 grid grid-cols-1 gap-12 sm:mt-10">
          <div className="relative">
            <div className="mb-8">
              {/* <InputLabel title="Upload file" important /> */}
              <FileInput multiple />
            </div>


          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-52">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-900 dark:text-white">
            Buy/Sell NFT
          </h2>
          {/* <Preview /> */}
        </div>


        <div className='flex top-20 justify-between rounded-2xl my-10 p-10' style={{ background: 'linear-gradient(94.48deg,#2bcde4 1.2%,#1868b7 111.59%)' }}>
          <div className='w-[40%] mx-10'>
            <Image src={opensea} alt="opensea" />
            <Button className='mt-7' style={{ background: 'linear-gradient(94.48deg,#2bcde4 1.2%,#1868b7 111.59%)' }}>OpenSea</Button>
          </div>
          <div className='w-[60%]'>
            <Image  className="rounded-lg" src={openseascreen} alt="Your NFT" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-900 dark:text-white">
            Your NFT
          </h2>

        </div>
      
        <div className="m-8 flex justify-center text-center flex-col align-middle">
          <h1 className='font-bold text-[20px]'>You don't have a MEO WORLD NFT yet.</h1>
          <Button shape="rounded" className='mt-2' style={{ background: 'linear-gradient(90.03deg,#e644f8 -8.27%,#9fa3ff 50.55%,#82d2ff 113.36%)' }}>Buy NFT</Button>
        </div>
      </div>
    </>
  );
}

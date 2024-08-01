'use client';

import { useRef, useState } from 'react';
import UploaderTwo from '@/components/ui/forms/uploader-two';
import Image from 'next/image';
import { Close } from '../icons/close';
import layoutbackground from './../../assets/images/nft/nft/section-1-desktop.webp';
import layoutbackground2 from './../../assets/images/nft/nft/section-2-desktop.webp';
import Button from './button';

export default function FileInput({
  className,
  label,
  multiple,
  accept,
}: {
  className?: string;
  label?: React.ReactNode;
  multiple?: boolean;
  accept?: any;
}) {
  const multiRef = useRef<HTMLInputElement>(null);
  const [multiImages, setMultiImages] = useState<Array<File>>([]);

  const handleMultiImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const uploadedFiles = (event.target as HTMLInputElement).files;
    const newFiles = Object.entries(uploadedFiles as object)
      .map((file) => {
        if (file[1].type.includes('image')) return file[1];
      })
      .filter((file) => file !== undefined);
    setMultiImages((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleMultiImageDelete = (index: number) => {
    const updatedFiles = multiImages.filter((_, i) => i !== index);
    setMultiImages(updatedFiles);
    (multiRef.current as HTMLInputElement).value = '';
  };

  return (
    <div className={`${className} relative bg-[#060e28] p-5`}>
      <div className="absolute top-10 left-5 right-5 md:flex md:justify-between md:items-center">
        <div className="w-full md:w-[40%] mx-2 md:mx-10 flex flex-col items-center md:items-start">
          <h1 className="text-white  font-bold text-center md:text-left">MEO WORLD NFT</h1>
          <p className="text-[#ffffff80] text-center te ">Meo world NFT Collection is a vibrant and offbeat selection of unique NFT.</p>
          <Button className="mt-4 md:mt-7 bg-pink-600">Meo world</Button>
        </div>
        <div className="w-full md:w-[60%] flex justify-center md:justify-end">
          <iframe className="rounded-xl w-full md:w-[500px] h-[200px] md:h-[300px]" src="https://www.youtube.com/embed/3MvDbnnBpkQ?controls=0" title="YouTube video player" />
        </div>
      </div>
      <Image className="rounded-2xl shadow-lg w-full" src={layoutbackground} alt="layoutbackground" />
      <div className="relative mt-5">
        <Image className="absolute rounded-2xl bg-[#060e28] w-full" src={layoutbackground2} alt="layoutbackground" />
        <div className="absolute text-2xl md:text-3xl lg:text-4xl flex justify-between pt-5 md:pt-14 w-[70%] mx-auto md:mx-10">
          <span>Total item</span>
          <span className="text-2xl font-bold">243 645 NFT</span>
        </div>
      </div>

      {multiImages.length > 0 && (
        <div className="mt-7 flex flex-row flex-wrap gap-5">
          {multiImages.map((file: File, index: number) => (
            <div className="relative flex items-center" key={file.name}>
              <figure className="relative mx-auto aspect-square w-16 md:w-20 overflow-hidden rounded-xl border border-gray-300">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw"
                />
              </figure>
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center bg-brand text-white">
                <Close
                  onClick={() => handleMultiImageDelete(index)}
                  className="h-2 w-2 cursor-pointer transition duration-75"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

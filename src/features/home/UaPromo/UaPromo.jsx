import Image from 'next/image';

export default function UaPromo() {
  return (
    <div
      className="relative w-full h-[200px] md:h-[670px] max-w-[375px] md:max-w-[1680px] mx-auto bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: 'url(/img/uabrands-promo.png)' }}
    >
      <div className="absolute inset-0 " />

      <div className="absolute top-[30%] right-[8%] -translate-y-1/2 z-10 flex flex-col gap-3 md:gap-5 font-zen text-right text-white px-4 md:px-0">
        <h2 className="text-[20px] md:text-[64px] leading-tight md:leading-[1.25] max-w-[250px] md:max-w-[399px]">
          Christmas Sale
        </h2>
        <p className="text-[20px] md:text-[64px]">Up to -33%</p>

        <Image
          className="absolute top-[-10px] left-1/2 -translate-x-[45%] translate-y-[139%] w-[200px] h-auto md:w-[328px]"
          src="/img/ua-bobo.png"
          alt="Bobo"
          width={328}
          height={130}
        />
      </div>
    </div>
  );
}

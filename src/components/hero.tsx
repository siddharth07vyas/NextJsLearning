import Image, { StaticImageData } from 'next/image';


interface HeroProps {
    title: string;
    imgAlt: string;
    imgData: StaticImageData
}

export default function Hero(props: HeroProps) {
    return (
        <div className=" h-sceen">
            < div className='absolute -z-10 inset-0'>
                <Image
                    src={props.imgData}
                    alt={props.imgAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
            </div>
            <div className="pt-48 flex items-center justify-center">
                <h1 className="text-6xl text-white">{props.title}</h1>
            </div>

        </div>
    );
}
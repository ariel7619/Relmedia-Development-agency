import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { works } from '@/data'


export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link, description }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx]} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1 mt-3">{title}</h3>
              <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2">{description}</p>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

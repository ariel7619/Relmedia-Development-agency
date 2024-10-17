import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="services">
      <BentoGrid>
      {gridItems.map(({id, title, description, className, img, imgclassName, titleclassName, spareImg}) => (
        <BentoGridItem 
        id={id}
        key={id}
        title={title}
        description={description}
        className={className}
        img={img}
        imgclassName={imgclassName}
        titleclassName={titleclassName}
        spareImg={spareImg}
        />
      ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
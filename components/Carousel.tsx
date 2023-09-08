import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback } from 'react'
import Image from 'next/image'

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const slideUrls = ['/carousel1.jpg', '/carousel2.jpg', '/carousel3.jpg']

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi?.on('select', () => console.log(`Current index is ${emblaApi.selectedScrollSnap()}`))
    console.log('Emble API:', emblaApi)
  }, [emblaApi])

  return (
    <div className="relative w-full h-80">
      <div className="absolute top-0 w-full h-full" ref={emblaRef}>
        <div className="flex space-x-4">
          {slideUrls.map((url, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <Image
                src={url}
                alt={`Slide ${index + 1}`}
                layout="responsive"
                width={1200}
                height={500}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
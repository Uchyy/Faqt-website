import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ReactNode, useCallback, useEffect, useState,} from "react";


type HorizontalCarouselProps = {
    children: ReactNode[];
    className?: string;
};

export default function HorizontalCarousel({ children, className = "",}: Readonly<HorizontalCarouselProps>) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        dragFree: true,
        loop: false
    });
    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    const [prevButtonDisabled, setPrevButtonDisabled] = useState(true)
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true)

    const updateButtons = useCallback(() => {
        setPrevButtonDisabled(!emblaApi?.canScrollPrev())
        setNextButtonDisabled(!emblaApi?.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return;

        // Give Embla a chance to calculate the slides
        emblaApi.reInit();

        updateButtons();

        emblaApi.on("select", updateButtons);
        emblaApi.on("reInit", updateButtons);

        return () => {
            emblaApi.off("select", updateButtons);
            emblaApi.off("reInit", updateButtons);
        };
    }, [emblaApi, updateButtons]);

    return (
        <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
            { children.map((styleChild, index) => {
                    return (
                        <div key={index} className="embla__slide"> 
                            {styleChild}
                        </div> 
                    );
                })
            }
            </div>
        </div>

        <button
            type="button"
            className="embla__prev"
            onClick={goToPrev}
            disabled={prevButtonDisabled} >
            <ChevronLeft/>
        </button>

        <button
            type="button"
            className="embla__next"
            onClick={goToNext}
            disabled={nextButtonDisabled}>
            <ChevronRight/>
        </button>
        </div>
    );
}
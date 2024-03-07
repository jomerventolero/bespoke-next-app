"use client";
export const useParallax = () => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = Number(element.dataset.speed);
        element.style.transform = `translateY(${scrollValue * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}



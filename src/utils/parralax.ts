"use client";
export const useParallax = () => {
    const handleScroll = () => {
      const scrollValue = typeof window !== 'undefined' ? window.pageYOffset : 0;
      const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = Number(element.dataset.speed);
        element.style.transform = `translateY(${scrollValue * speed}px)`;
      });
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
}



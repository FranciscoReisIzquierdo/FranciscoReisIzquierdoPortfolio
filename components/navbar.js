import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('intro');
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { href: '#introduction', label: 'Francisco Izquierdo', key: 'intro' },
    { href: '#projects', label: 'Projects', key: 'projects' },
    { href: '#tools', label: 'Tools', key: 'skillssphere' },
    { href: '#achievements_and_publications', label: 'Achievements & Publications', key: 'achievements' },
    { href: '#contact', label: 'Contact', key: 'contact' },
  ];

  // Mapping from href to key for easier lookup
  const hrefToKey = {
    '#introduction': 'intro',
    '#projects': 'projects',
    '#tools': 'skillssphere',
    '#achievements_and_publications': 'achievements',
    '#contact': 'contact',
  };

  // Handle navbar show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section tracking with Intersection Observer
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by their position on the page
        const sortedEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

        if (sortedEntries.length > 0) {
          // Get the scroll position relative to viewport
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          const scrollCenter = scrollY + viewportHeight / 2;

          // Find the section whose center is closest to the viewport center
          let bestSection = null;
          let minDistance = Infinity;

          sortedEntries.forEach(entry => {
            const section = entry.target;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionCenter = sectionTop + sectionHeight / 2;
            
            // Calculate distance from viewport center to section center
            const distance = Math.abs(scrollCenter - sectionCenter);
            
            // Prioritize sections that have significant visibility
            if (entry.intersectionRatio > 0.1 && distance < minDistance) {
              minDistance = distance;
              bestSection = section;
            }
          });

          // Fallback: if no section meets the criteria, use the first intersecting one
          if (!bestSection && sortedEntries.length > 0) {
            bestSection = sortedEntries[0].target;
          }

          if (bestSection) {
            const sectionId = '#' + bestSection.id;
            const correspondingKey = hrefToKey[sectionId];
            if (correspondingKey && correspondingKey !== activeLink) {
              setActiveLink(correspondingKey);
            }
          }
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
        rootMargin: '-10% 0px -10% 0px' // Smaller margin for more precise detection
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [activeLink]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveLink(item.key);
    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`
        bg-[#02001E]/5 backdrop-blur-lg fixed top-0 w-full z-50
        transition-all duration-500
        ${showNavbar ? 'opacity-100' : 'opacity-0 -translate-y-full'}
      `}
    >
      <div className="w-full max-w-screen overflow-hidden flex flex-wrap items-center justify-between px-6 md:px-[10vw] py-5">
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Navigation links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul
            className="
              flex flex-col
              md:flex-row
              flex-wrap
              gap-y-4
              md:gap-y-0
              md:gap-x-8
              items-start
              list-none p-0 m-0
            "
          >
            {navItems.map(item => (
              <li key={item.key}>
                <a
                  onClick={(e) => handleNavClick(e, item)}
                  href={item.href}
                  className={`
                    text-md font-semibold font-poppins transition-all duration-200 border-b-2
                    ${activeLink === item.key
                      ? 'text-white border-blue-200'
                      : 'text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-500'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const hamburgerRef = useRef(null);
  const menuItemsRef = useRef([]);
  const logoRef = useRef(null);
  const tl = useRef(null);

  // Initialize refs array for menu items
  useEffect(() => {
    menuItemsRef.current = [];
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);

      // Setup animations after DOM update
      setTimeout(() => {
        if (overlayRef.current && menuItemsRef.current.length > 0) {
          // Get responsive width for animation
          const getResponsiveWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) return "100%";
            if (screenWidth < 768) return "320px";
            if (screenWidth < 1024) return "384px";
            return "448px";
          };

          // Set initial states
          gsap.set(overlayRef.current, { x: getResponsiveWidth() });
          gsap.set(menuItemsRef.current, { opacity: 0, x: 50 });

          // Create and play animation
          const tl = gsap.timeline();
          tl.to(overlayRef.current, {
            x: "0%",
            duration: 0.6,
            ease: "power3.out",
          }).to(
            menuItemsRef.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.3"
          );
        }
      }, 10);

      // Setup hamburger animation
      if (hamburgerRef.current && hamburgerRef.current.children.length >= 3) {
        const lines = hamburgerRef.current.children;
        gsap.to(lines[0], {
          rotation: 45,
          y: 6,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(lines[1], { opacity: 0, duration: 0.2, ease: "power2.inOut" });
        gsap.to(lines[2], {
          rotation: -45,
          y: -6,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    } else {
      // Animate out
      if (overlayRef.current && menuItemsRef.current.length > 0) {
        const tl = gsap.timeline();
        tl.to(menuItemsRef.current, {
          opacity: 0,
          x: 50,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.in",
        }).to(
          overlayRef.current,
          {
            x: "100%",
            duration: 0.4,
            ease: "power3.in",
          },
          "-=0.2"
        );
      }

      // Reset hamburger animation
      if (hamburgerRef.current && hamburgerRef.current.children.length >= 3) {
        const lines = hamburgerRef.current.children;
        gsap.to(lines[0], {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(lines[1], { opacity: 1, duration: 0.2, ease: "power2.inOut" });
        gsap.to(lines[2], {
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }

      setTimeout(() => setIsOpen(false), 600);
    }
  };

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            ref={logoRef}
            className="text-white font-light text-base sm:text-lg tracking-wider"
          >
            Portfolio
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 sm:w-8 sm:h-8 flex flex-col justify-center items-center group touch-manipulation"
            aria-label="Toggle menu"
          >
            <div ref={hamburgerRef} className="flex flex-col space-y-1.5">
              <span className="w-6 h-px bg-white block transform transition-all duration-400 origin-center group-hover:bg-gray-300"></span>
              <span className="w-6 h-px bg-white block transform transition-all duration-400 group-hover:bg-gray-300"></span>
              <span className="w-6 h-px bg-white block transform transition-all duration-400 origin-center group-hover:bg-gray-300"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Slide-in Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={toggleMenu}
          />

          {/* Menu Panel */}
          <div
            ref={overlayRef}
            className="absolute top-0 right-0 h-full w-full sm:w-80 md:w-96 lg:max-w-md bg-white/95 backdrop-blur-xl shadow-2xl"
          >
            <div ref={menuRef} className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-200/50">
                <div className="text-gray-800 font-light text-base sm:text-lg tracking-wider">
                  Navigation
                </div>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
                <div className="space-y-6 sm:space-y-7 md:space-y-8">
                  {menuItems.map((item, index) => (
                    <div
                      key={item.name}
                      ref={(el) => (menuItemsRef.current[index] = el)}
                      className="overflow-hidden"
                    >
                      <a
                        href={item.href}
                        onClick={toggleMenu}
                        className="block text-xl sm:text-2xl font-light text-gray-800 hover:text-gray-600 transition-colors duration-300 py-2 sm:py-3 border-b border-transparent hover:border-gray-300 touch-manipulation"
                        style={{
                          fontFamily: "system-ui, -apple-system, sans-serif",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </nav>

              {/* Menu Footer */}
              <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-t border-gray-200/50">
                <div className="text-xs sm:text-sm text-gray-500 font-light">
                  © 2024 Portfolio
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

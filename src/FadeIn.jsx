import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children }) => {
  const sectionRef = useRef(null);
  const [visibleChildren, setVisibleChildren] = useState([]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const childrenElements = Array.from(sectionElement.children);

    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleChildren = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const childIndex = childrenElements.indexOf(entry.target);
            if (childIndex !== -1) {
              newVisibleChildren.push(childIndex);
            }
          }
        });
        setVisibleChildren(newVisibleChildren);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    childrenElements.forEach((child) => observer.observe(child));

    return () => {
      childrenElements.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          className: `${child.props.className || ''} transition-opacity duration-1500 ease-smooth ${visibleChildren.includes(index) ? 'opacity-100' : 'opacity-0'}`,
          style: { opacity: visibleChildren.includes(index) ? 1 : 0 }
        })
      )}
    </div>
  );
};

export default FadeInSection;

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedReactProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}

const TypedReact: React.FC<TypedReactProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  loop = true,
  className,
}) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
      });
    }
    return () => {
      typed.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={el} className={className}></span>;
};

export default TypedReact;

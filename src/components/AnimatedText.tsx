import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  letterDelay?: number;
}

const AnimatedText = ({ text, className = '', delay = 0, letterDelay = 0.05 }: AnimatedTextProps) => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleLetters((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, letterDelay * 1000);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [text, delay, letterDelay]);

  return (
    <span className={className}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block ${
            index < visibleLetters ? 'animate-letter-fade-in' : 'opacity-0'
          }`}
          style={{
            animationDelay: `${index * letterDelay}s`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText
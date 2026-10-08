import React, { useEffect, useState } from 'react';
import './typewriter.css';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Typewriter({ text, speed = 60, delay = 400 }) {
    const [count, setCount] = useState(() => (prefersReducedMotion() ? text.length : 0));
    const done = count >= text.length;

    useEffect(() => {
        if (done) return;
        const id = setTimeout(() => setCount(c => c + 1), count === 0 ? delay : speed);
        return () => clearTimeout(id);
    }, [count, done, speed, delay]);

    return (
        <span className="typewriter">
            <span className="typewriter-ghost" aria-hidden="true">{text}_</span>
            <span className="typewriter-text" aria-hidden="true">
                {text.slice(0, count)}
                <span className="typewriter-cursor">_</span>
            </span>
            <span className="sr-only">{text}</span>
        </span>
    );
}

export default Typewriter;

import { motion, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function Number({ mv, number, height }) {
    let y = useTransform(mv, latest => {
        let placeValue = latest % 10;
        let offset = (10 + number - placeValue) % 10;
        let memo = offset * height;
        if (offset > 5) {
            memo -= 10 * height;
        }
        return memo;
    });
    return (
        <motion.span className="counter-number" style={{ y }}>
            {number}
        </motion.span>
    );
}

function Digit({ place, value, height, digitStyle }) {
    let valueRoundedToPlace = Math.floor(value / place);
    let animatedValue = useSpring(0, {
        stiffness: 50,
        damping: 30
    });
    useEffect(() => {
        animatedValue.set(valueRoundedToPlace);
    }, [animatedValue, valueRoundedToPlace]);
    return (
        <div className="counter-digit" style={{ height, ...digitStyle }}>
            {Array.from({ length: 10 }, (_, i) => (
                <Number key={i} mv={animatedValue} number={i} height={height} />
            ))}
        </div>
    );
}

export default function Counter({
    value,
    fontSize = 100,
    padding = 0,
    places = [10, 1],
    gap = 8,
    borderRadius = 4,
    horizontalPadding = 8,
    textColor = 'white',
    fontWeight = 'bold',
    containerStyle,
    counterStyle,
    digitStyle,
    gradientHeight = 16,
    gradientFrom = 'transparent',
    gradientTo = 'transparent',
    topGradientStyle,
    bottomGradientStyle
}) {
    const [animatedValue, setAnimatedValue] = useState(0);
    const containerRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        // Check immediately if element is visible on page load
        const checkVisibility = () => {
            if (containerRef.current && !hasAnimated.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible) {
                    setAnimatedValue(value);
                    hasAnimated.current = true;
                    return true;
                }
            }
            return false;
        };

        // Check immediately on mount
        if (checkVisibility()) {
            return;
        }

        // Check if Intersection Observer is supported
        if (!('IntersectionObserver' in window)) {
            // Fallback: animate after a short delay if Intersection Observer is not supported
            const timeout = setTimeout(() => {
                if (!hasAnimated.current) {
                    setAnimatedValue(value);
                    hasAnimated.current = true;
                }
            }, 300);
            return () => clearTimeout(timeout);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        setAnimatedValue(value);
                        hasAnimated.current = true;
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: '50px' // Start animation slightly before element is fully visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Also check after a short delay in case the element becomes visible during initial render
        const timeout = setTimeout(() => {
            checkVisibility();
        }, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timeout);
        };
    }, [value]);

    const height = fontSize + padding;
    const defaultCounterStyle = {
        fontSize,
        gap: gap,
        borderRadius: borderRadius,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        color: textColor,
        fontWeight: fontWeight
    };
    const defaultTopGradientStyle = {
        height: gradientHeight,
        background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`
    };
    const defaultBottomGradientStyle = {
        height: gradientHeight,
        background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`
    };
    return (
        <div ref={containerRef} className="counter-container" style={containerStyle}>
            <div className="counter-counter" style={{ ...defaultCounterStyle, ...counterStyle }}>
                {places.map(place => (
                    <Digit key={place} place={place} value={animatedValue} height={height} digitStyle={digitStyle} />
                ))}
            </div>
            <div className="gradient-container">
                <div className="top-gradient" style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle}></div>
                <div
                    className="bottom-gradient"
                    style={bottomGradientStyle ? bottomGradientStyle : defaultBottomGradientStyle}
                ></div>
            </div>
        </div>
    );
}

import { useEffect, useRef } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

export const useScrollMilestones = () => {
    const milestonesReached = useRef<Set<number>>(new Set());

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const scrollPercentage = (scrollPosition / scrollHeight) * 100;

            [25, 50, 75, 100].forEach((milestone) => {
                if (scrollPercentage >= milestone && !milestonesReached.current.has(milestone)) {
                    milestonesReached.current.add(milestone);
                    sendGAEvent({ event: 'scroll_milestone', value: milestone });
                    console.log(`GA Event: scroll_milestone - ${milestone}%`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};

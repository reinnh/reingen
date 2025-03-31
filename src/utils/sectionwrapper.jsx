/* import { useEffect, useRef } from "react";
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'

//motion variant

const fadeIn = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2
    }
}

const SectionWrapper = ({ children, className }) => {
    const wrapperRef = useRef(null)
    //smooth scollling
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.2, smooth: true })
        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf)
        return lenis.destroy()
    }, [])
    //scrol trigger with gsap
    useEffect(() => {
        gsap.from(
            wrapperRef.current,
            {
                opacity: 0,
                y: 100,
                duration: 1.5,
                ease: 'power2.out',
                ScrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top:85%",
                    end: "top 50%",
                    scrub: true
                }
            }
        )
    }, [])

    return (
        <motion.section
            ref={wrapperRef}
            initial="hidden"
            whileInVIew="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className={`relative overflow-hidden py-16 sm:py-32 px-16 sm:px-12 md:px-20 lg:px-32 ${className}`}>
            {children}
        </motion.section>
    )
}

export default SectionWrapper; */
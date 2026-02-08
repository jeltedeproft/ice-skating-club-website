import { motion } from "framer-motion";
import { useEffect } from "react";

export default function IntroAnimation({ onFinish }) {
    useEffect(() => {
        // The animation will stay visible for 2.5 seconds before triggering the exit
        const timer = setTimeout(() => {
            onFinish();
        }, 2500);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <motion.div
            // Z-index 100 ensures it covers the Navbar (z-50)
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-cyan-50 to-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Smoothly fade out the entire screen
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <motion.div className="flex flex-col items-center">
                <motion.img
                    src={`${import.meta.env.BASE_URL}IDA logo Zwart 3.png`}
                    alt="Ice Diamonds Antwerp"
                    className="w-40 md:w-64 mb-8 drop-shadow-2xl"
                    initial={{ scale: 0.5, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 20, 
                        duration: 1 
                    }}
                />

                <motion.h1
                    className="text-2xl md:text-4xl font-bold text-blue-900 tracking-wider uppercase drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    Ice Diamonds Antwerp
                </motion.h1>
            </motion.div>
        </motion.div>
    );
}
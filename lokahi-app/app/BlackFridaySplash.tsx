"use client";

import { useEffect, useState } from "react";

export default function BlackFridaySplash() {
    const [visible, setVisible] = useState(true);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setClosing(true);
        }, 2400);

        const closeTimer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(closeTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black px-6 text-white transition-all duration-700 ${
                closing ? "scale-110 opacity-0" : "scale-100 opacity-100"
            }`}
        >
            <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.5em] md:text-xl">
                    LOKAHI presenta
                </p>

                <h2 className="mt-5 text-6xl font-black uppercase leading-none tracking-[-0.07em] sm:text-8xl md:text-[10rem]">
                    Black
                    <br />
                    Friday
                </h2>

                <div className="mx-auto mt-7 h-2 w-28 bg-white md:w-44" />

                <p className="mt-7 text-lg font-bold uppercase tracking-[0.3em] md:text-2xl">
                    Promo sui prossimi viaggi
                </p>
            </div>
        </div>
    );
}
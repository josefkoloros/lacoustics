// data.js - Databáze zpoždění a polarity (L-Acoustics Preset Guide v28.0)
// Formát klíče: "top-sub1-sub2-režim"

const presetDatabase = {
    // ==========================================
    // KARA II
    // ==========================================
    // Kara II + SB18
    "kara2-sb18-none-60": { topDelay: "2.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "kara2-sb18-none-60_c": { topDelay: "8.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb18-none-60_cx": { topDelay: "6.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb18-none-100": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "kara2-sb18-none-100_c": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb18-none-100_cx": { topDelay: "4.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    
    // Kara II + KS21
    "kara2-ks21-none-60": { topDelay: "0.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "kara2-ks21-none-60_c": { topDelay: "6.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks21-none-60_cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks21-none-100": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+" },
    "kara2-ks21-none-100_c": { topDelay: "5.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks21-none-100_cx": { topDelay: "4.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ==========================================
    // A15 & A10
    // ==========================================
    // A15 + KS21 (pouze 60Hz)
    "a15-ks21-none-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "2.3 ms", sub1Pol: "+" },
    "a15-ks21-none-60_c": { topDelay: "9.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "a15-ks21-none-60_cx": { topDelay: "8.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // A10 + KS21 (pouze 100Hz)
    "a10-ks21-none-100": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "a10-ks21-none-100_c": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "a10-ks21-none-100_cx": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ==========================================
    // X12
    // ==========================================
    // X12 + SB18 (pouze 100Hz)
    "x12-sb18-none-100": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "x12-sb18-none-100_c": { topDelay: "5.7 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "x12-sb18-none-100_cx": { topDelay: "4.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // X12 + KS21 (pouze 100Hz)
    "x12-ks21-none-100": { topDelay: "0 ms", topPol: "+", sub1Delay: "1.0 ms", sub1Pol: "+" },
    "x12-ks21-none-100_c": { topDelay: "4.8 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "x12-ks21-none-100_cx": { topDelay: "3.4 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ==========================================
    // ARCS RODINA
    // ==========================================
    // ARCS Wide/Focus + SB18 (pouze 60Hz)
    "arcs_wifo-sb18-none-60": { topDelay: "1.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "arcs_wifo-sb18-none-60_c": { topDelay: "7.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "arcs_wifo-sb18-none-60_cx": { topDelay: "6.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ARCS II + KS28 (pouze 60Hz)
    "arcs2-ks28-none-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "2.0 ms", sub1Pol: "+" },
    "arcs2-ks28-none-60_c": { topDelay: "3.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "arcs2-ks28-none-60_cx": { topDelay: "7.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ARCS (Legacy) + SB18
    "arcs-sb18-none-60": { topDelay: "0.4 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "arcs-sb18-none-60_c": { topDelay: "5.9 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "arcs-sb18-none-100": { topDelay: "1.1 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "arcs-sb18-none-100_c": { topDelay: "6.6 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ARCS (Legacy) + KS28
    "arcs-ks28-none-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.6 ms", sub1Pol: "+" },
    "arcs-ks28-none-60_c": { topDelay: "4.9 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "arcs-ks28-none-100": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+" },
    "arcs-ks28-none-100_c": { topDelay: "5.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },


    // ==========================================
    // 2 SUBWOOFERY (Pro jistotu tu nechávám Kara 2)
    // ==========================================
    // Kara II + SB18 + SB28
    "kara2-sb18-sb28-standard": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "+" },
    "kara2-sb18-sb28-c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-sb18-sb28-cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "5.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },

    // Kara II + KS21 + KS28
    "kara2-ks21-ks28-standard": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "+" },
    "kara2-ks21-ks28-c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-ks21-ks28-cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "6.0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" }
};

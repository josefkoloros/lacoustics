// data.js - Databáze zpoždění a polarity (L-Acoustics Preset Guide v28.0)
// Formát: "top-sub1-rezim1-sub2-rezim2" (pokud není 2. sub, použije se "none")

const presetDatabase = {
    // ==========================================
    // 1 SUBWOOFER (KARA II)
    // ==========================================
    "kara2-sb18-60-none-none": { topDelay: "2.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "kara2-sb18-60_c-none-none": { topDelay: "8.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb18-60_cx-none-none": { topDelay: "6.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb18-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "kara2-sb18-100_c-none-none": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb18-100_cx-none-none": { topDelay: "4.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    
    "kara2-ks21-60-none-none": { topDelay: "0.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "kara2-ks21-60_c-none-none": { topDelay: "6.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks21-60_cx-none-none": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks21-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+" },
    "kara2-ks21-100_c-none-none": { topDelay: "5.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks21-100_cx-none-none": { topDelay: "4.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    "kara2-ks28-60-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "5.0 ms", sub1Pol: "+" },
    "kara2-ks28-60_c-none-none": { topDelay: "0.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks28-60_cx-none-none": { topDelay: "4.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks28-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "1.0 ms", sub1Pol: "+" },
    "kara2-ks28-100_c-none-none": { topDelay: "4.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks28-100_cx-none-none": { topDelay: "7.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    "kara2-sb28-60-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "5.0 ms", sub1Pol: "+" },
    "kara2-sb28-60_c-none-none": { topDelay: "0.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb28-60_cx-none-none": { topDelay: "4.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb28-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "1.0 ms", sub1Pol: "+" },
    "kara2-sb28-100_c-none-none": { topDelay: "4.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb28-100_cx-none-none": { topDelay: "7.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ==========================================
    // 2 SUBWOOFERY (KARA II)
    // ==========================================
    // PŘESNĚ PODLE TVÉHO SCREENSHOTU!
    "kara2-ks21-100-sb28-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "-" },
    "kara2-ks21-100-sb28-60_c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-ks21-100-sb28-60_cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "6.0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "+" },

    "kara2-sb18-100-sb28-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "+" },
    "kara2-sb18-100-sb28-60_c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-sb18-100-sb28-60_cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "5.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },

    "kara2-sb18-100-ks28-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "+" },
    "kara2-sb18-100-ks28-60_c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-sb18-100-ks28-60_cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "5.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },

    "kara2-ks21-100-ks28-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "+" },
    "kara2-ks21-100-ks28-60_c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-ks21-100-ks28-60_cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "6.0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },

    // ==========================================
    // A15 & A10
    // ==========================================
    "a15-ks21-60-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "2.3 ms", sub1Pol: "+" },
    "a15-ks21-60_c-none-none": { topDelay: "9.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "a15-ks21-60_cx-none-none": { topDelay: "8.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    "a10-ks21-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "a10-ks21-100_c-none-none": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "a10-ks21-100_cx-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ==========================================
    // X12
    // ==========================================
    "x12-sb18-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "x12-sb18-100_c-none-none": { topDelay: "5.7 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "x12-sb18-100_cx-none-none": { topDelay: "4.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "x12-ks21-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "1.0 ms", sub1Pol: "+" },
    "x12-ks21-100_c-none-none": { topDelay: "4.8 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "x12-ks21-100_cx-none-none": { topDelay: "3.4 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ==========================================
    // ARCS RODINA
    // ==========================================
    "arcs_wifo-sb18-60-none-none": { topDelay: "1.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "arcs_wifo-sb18-60_c-none-none": { topDelay: "7.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "arcs_wifo-sb18-60_cx-none-none": { topDelay: "6.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    "arcs2-ks28-60-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "2.0 ms", sub1Pol: "+" },
    "arcs2-ks28-60_c-none-none": { topDelay: "3.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "arcs2-ks28-60_cx-none-none": { topDelay: "7.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    "arcs-sb18-60-none-none": { topDelay: "0.4 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "arcs-sb18-60_c-none-none": { topDelay: "5.9 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "arcs-sb18-100-none-none": { topDelay: "1.1 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "arcs-sb18-100_c-none-none": { topDelay: "6.6 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    "arcs-ks28-60-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.6 ms", sub1Pol: "+" },
    "arcs-ks28-60_c-none-none": { topDelay: "4.9 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "arcs-ks28-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+" },
    "arcs-ks28-100_c-none-none": { topDelay: "5.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" }
};

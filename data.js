// data.js - Databáze zpoždění a polarity (L-Acoustics Preset Guide v28.0)
// Formát: "top - sub1 - rezim1 - sub2 - rezim2" (pokud není 2. sub, použije se "none")
// PROSÍM ZKONTROLUJ ZNAMÉNKA POLARITY PODLE BAREVNÉHO MANUÁLU!

const presetDatabase = {
    // ==========================================
    // 1 SUBWOOFER (KARA II)
    // ==========================================
    // Kara II + SB18
    "kara2-sb18-60-none-none": { topDelay: "2.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "kara2-sb18-60_c-none-none": { topDelay: "8.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb18-60_cx-none-none": { topDelay: "6.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb18-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "kara2-sb18-100_c-none-none": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-sb18-100_cx-none-none": { topDelay: "4.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    
    // Kara II + KS21
    "kara2-ks21-60-none-none": { topDelay: "0.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+" },
    "kara2-ks21-60_c-none-none": { topDelay: "6.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks21-60_cx-none-none": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks21-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+" },
    "kara2-ks21-100_c-none-none": { topDelay: "5.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks21-100_cx-none-none": { topDelay: "4.0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // Kara II + KS28
    "kara2-ks28-60-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "5.0 ms", sub1Pol: "+" },
    "kara2-ks28-60_c-none-none": { topDelay: "0.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks28-60_cx-none-none": { topDelay: "4.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks28-100-none-none": { topDelay: "0 ms", topPol: "+", sub1Delay: "1.0 ms", sub1Pol: "+" },
    "kara2-ks28-100_c-none-none": { topDelay: "4.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },
    "kara2-ks28-100_cx-none-none": { topDelay: "7.5 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "-" },

    // ==========================================
    // 2 SUBWOOFERY (KARA II)
    // ==========================================
    // Kara II + KS21 + SB28 (OPRAVENO PODLE TVÉHO SCREENSHOTU)
    "kara2-ks21-100-sb28-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "-" },
    "kara2-ks21-100-sb28-60_c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-ks21-100-sb28-60_cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "6.0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "+" },

    // Kara II + SB18 + SB28 (TADY ZKONTROLUJ ZNAMÉNKA V MANUÁLU)
    "kara2-sb18-100-sb28-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "+" },
    "kara2-sb18-100-sb28-60_c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-sb18-100-sb28-60_cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "5.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },

    // Kara II + SB18 + KS28 (TADY ZKONTROLUJ ZNAMÉNKA V MANUÁLU)
    "kara2-sb18-100-ks28-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "+" },
    "kara2-sb18-100-ks28-60_c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-sb18-100-ks28-60_cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "5.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },

    // Kara II + KS21 + KS28 (TADY ZKONTROLUJ ZNAMÉNKA V MANUÁLU)
    "kara2-ks21-100-ks28-60": { topDelay: "0 ms", topPol: "+", sub1Delay: "0 ms", sub1Pol: "+", sub2Delay: "5.5 ms", sub2Pol: "+" },
    "kara2-ks21-100-ks28-60_c": { topDelay: "0 ms", topPol: "+", sub1Delay: "0.5 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" },
    "kara2-ks21-100-ks28-60_cx": { topDelay: "5.5 ms", topPol: "+", sub1Delay: "6.0 ms", sub1Pol: "+", sub2Delay: "0 ms", sub2Pol: "-" }
};

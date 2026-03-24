// data.js - Databáze zpoždění a polarity (L-Acoustics Preset Guide v28.0)

const presetDatabase = {
    // --- KARA II + SB18 ---
    "kara2-sb18-60": { topDelay: "2.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-sb18-60_c": { topDelay: "8.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-sb18-60_cx": { topDelay: "6.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-sb18-100": { topDelay: "0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-sb18-100_c": { topDelay: "5.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-sb18-100_cx": { topDelay: "4.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    
    // --- KARA II + KS21 ---
    "kara2-ks21-60": { topDelay: "0.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks21-60_c": { topDelay: "6.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks21-60_cx": { topDelay: "5.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks21-100": { topDelay: "0 ms", topPol: "+", subDelay: "0.5 ms", subPol: "+" },
    "kara2-ks21-100_c": { topDelay: "5.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks21-100_cx": { topDelay: "4.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },

    // --- KARA II + KS28 ---
    "kara2-ks28-60": { topDelay: "0 ms", topPol: "+", subDelay: "5.0 ms", subPol: "+" },
    "kara2-ks28-60_c": { topDelay: "0.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks28-60_cx": { topDelay: "4.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks28-100": { topDelay: "0 ms", topPol: "+", subDelay: "1.0 ms", subPol: "+" },
    "kara2-ks28-100_c": { topDelay: "4.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks28-100_cx": { topDelay: "7.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },

    // --- A15 + KS21 (pouze 60Hz v manuálu) ---
    "a15-ks21-60": { topDelay: "0 ms", topPol: "+", subDelay: "2.3 ms", subPol: "+" },
    "a15-ks21-60_c": { topDelay: "9.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "a15-ks21-60_cx": { topDelay: "8.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },

    // --- A10 + KS21 (pouze 100Hz v manuálu) ---
    "a10-ks21-100": { topDelay: "0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "a10-ks21-100_c": { topDelay: "5.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "a10-ks21-100_cx": { topDelay: "0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" }
};

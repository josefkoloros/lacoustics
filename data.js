// data.js - Databáze zpoždění a polarity podle L-Acoustics Preset Guide v28.0
// Klíče jsou tvořeny jako "top-sub-režim" (např. "kara2-sb18-standard")

const presetDatabase = {
    // --- Kara II + SB18 ---
    "kara2-sb18-standard": { topDelay: "2.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-sb18-c": { topDelay: "8.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-sb18-cx": { topDelay: "6.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    
    // --- Kara II + KS21 ---
    "kara2-ks21-standard": { topDelay: "0.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks21-c": { topDelay: "6.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks21-cx": { topDelay: "5.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },

    // --- Kara II + KS28 ---
    "kara2-ks28-standard": { topDelay: "0 ms", topPol: "+", subDelay: "5.0 ms", subPol: "+" },
    "kara2-ks28-c": { topDelay: "0.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "kara2-ks28-cx": { topDelay: "4.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },

    // --- A15 + KS21 ---
    "a15-ks21-standard": { topDelay: "0 ms", topPol: "+", subDelay: "2.3 ms", subPol: "+" },
    "a15-ks21-c": { topDelay: "9.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "a15-ks21-cx": { topDelay: "8.0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },

    // --- A10 + KS21 ---
    "a10-ks21-standard": { topDelay: "0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "a10-ks21-c": { topDelay: "5.5 ms", topPol: "+", subDelay: "0 ms", subPol: "+" },
    "a10-ks21-cx": { topDelay: "0 ms", topPol: "+", subDelay: "0 ms", subPol: "+" }
};

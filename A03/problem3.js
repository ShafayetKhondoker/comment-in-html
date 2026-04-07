function finalScore(omr) 
{

    if (typeof omr !== "object" || 
        omr === null || 
        Array.isArray(omr)) 
    {
        return "Invalid";
    }
   
    else if (
        typeof omr.right !== "number" ||
        typeof omr.wrong !== "number" ||
        typeof omr.skip !== "number"
    ) 
    {
        return "Invalid";
    }

    else if (omr.right + omr.wrong + omr.skip !== 100) 
    {
        return "Invalid";
    }
    
    else {
        let score = omr.right * 1 + omr.wrong * (-0.5);
        return Math.round(score);
    }
}  

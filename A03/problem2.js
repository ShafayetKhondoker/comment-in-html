function validOtp(otp) 
{

    if (typeof otp !== "string") 
    {
        return "Invalid";
    }
    else if (otp.length !== 8)
    {
        return false;
    }
    
    else if (otp.startsWith("ph-") === false) 
    {
        return false;
    }
    else {
        return true;
    }
}

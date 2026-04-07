function newPrice(currentPrice, discount) 
{
    if (typeof currentPrice !== "number" || typeof discount !== "number") 
    {
        return "Invalid";
    }

    if (discount < 0 || discount > 100) 
    {
        return "Invalid";
    }

    let discountAmount = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountAmount;

    return finalPrice.toFixed(3);
}

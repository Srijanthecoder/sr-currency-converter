import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_nRBNJ78C09O1Ja2ssJGZipsRg5bQziHDDe6Le8Jy');
convertCurrency("INR","USD",3);
export async function convertCurrency(fromCurrency,toCurrency,units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies:toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;
}

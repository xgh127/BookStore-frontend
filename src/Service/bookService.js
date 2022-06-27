
/*将后台传回的价格转化为含有两位小数的数字*/
export const PriceTrim=(data) =>
{
    let  actualPrice = 0;
        for (let i = 0; i < data.length; ++i) {
            actualPrice = parseInt(data[i].price) / 100;
            data[i].price = actualPrice.toFixed(2);
        }
    return data;
}

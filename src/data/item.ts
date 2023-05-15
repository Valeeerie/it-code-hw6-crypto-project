let item:{[key:string]:number|string|null} = {
"id":"bitcoin",
"symbol":"btc",
"name":"Bitcoin",
"image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
"current_price":26840,"market_cap":520297784856,
"market_cap_rank":1,"fully_diluted_valuation":563995891070,
"total_volume":8454383024,
"high_24h":26978,"low_24h":26704,
"price_change_24h":33.93,
"price_change_percentage_24h":0.12658,
"market_cap_change_24h":301227572,
"market_cap_change_percentage_24h":0.05793,
"circulating_supply":19372931.0,
"total_supply":21000000.0,
"max_supply":21000000.0,
"ath":69045,"ath_change_percentage":-61.10041,
"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,
"atl_change_percentage":39508.50307,
"atl_date":"2013-07-06T00:00:00.000Z",
"roi":null,"last_updated":"2023-05-14T10:07:46.654Z"}

for (let key in item){
    let newKey:string = key.replaceAll("_"," ")
    item[newKey]=item[key]
    delete item[key]}
export default item
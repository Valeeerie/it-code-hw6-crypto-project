import makeRequest from "../httpClient";

export const fetchAllCoins = () => {
    return makeRequest({                           
        url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, 
      })
}

export const fetchQueriedCoins = (query:string) => {
  return makeRequest({                            
  url: `https://api.coingecko.com/api/v3/search?query=${query}`, 
})
}

export const fetchCoinsCategories = () => {
  return makeRequest({                           
    url: `https://api.coingecko.com/api/v3/coins/categories/list`, 
  })
}

export const fetchCoinsByCategory = (query:string) => {
  return makeRequest({                           
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${query}`, 
  })
}

export const fetchCoinsByPage=(query:number)=>{
  return makeRequest({                           
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=${query}&sparkline=false&locale=en`, 
    })
}

export const fetchCoinInfo=(query:string)=>{
  return makeRequest({                           
    url: `https://api.coingecko.com/api/v3/coins/${query}`, 
  })
}
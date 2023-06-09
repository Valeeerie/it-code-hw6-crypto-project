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

export const fetchSearchedCoins = () =>{
  return makeRequest({                            
    url: `https://api.coingecko.com/api/v3/search/trending`, 
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
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${query}&sparkline=true&locale=en`, 
    })
}

export const fetchCoinInfo=(query:string)=>{
  return makeRequest({                           
    url: `https://api.coingecko.com/api/v3/coins/${query}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`, 
  })
}

export const fetchCoinMarketChart=(query:string)=>{
  return makeRequest({                           
    url: `https://api.coingecko.com/api/v3/coins/${query}/market_chart?vs_currency=usd&days=7&interval=daily`, 
  })
}

export const fetchCoinsByPageForInfinite=(query:number, perPage:number)=>{
  return makeRequest({                           
    url: `https://api.escuelajs.co/api/v1/products?offset=${query}&limit=${perPage}`, 
    })
}

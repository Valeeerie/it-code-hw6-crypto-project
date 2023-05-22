import { defineStore } from 'pinia'
import { allCoins } from '../services/api'
export const useCryptoStore = defineStore('crypto-store', {
  state: () => ({ 
    apiData: [],
    categories: [{value:"All", label: "All"}],
    cat:"",
    coins:[],
    page:1,
    requestData:{},
    img:{}
  }),
  getters: {
    
  },
  actions: {
    fetchAllCoins(){
      allCoins.fetchAllCoins()
      .then(({data}) => {                                
        this.apiData = data                                
      }).catch((error)=>{
        console.log(error.message)
    })
    },
    fetchQueriedCoins(query:string){
      allCoins.fetchQueriedCoins(query)
      .then(({data}) => {                                
        this.apiData = data.coins                                 
      }).catch((error)=>{
        console.log(error.message)
    })
  },
    fetchCoinsCategories(){
      allCoins.fetchCoinsCategories()
      .then(({data}) => {                             
        data.forEach((item)=>{
          this.categories.push({
              value:item.category_id,
              label:item.name,
          })
        })   
        this.cat=this.categories[0].value 
      })
    },
    fetchCoinsByCategory(query:string){
      allCoins.fetchCoinsByCategory(query)
      .then(({data}) => {                             
        this.apiData=data
      })
    }, 
    fetchCoinsByPage(query:number){
      allCoins.fetchCoinsByPage(query)
      .then(({data}) => {                             
        for (let i=0;i<data.length;i++){
          this.coins.push(data[i])
        }
        this.page++
      })
    },
    fetchCoinInfo(query:string){
      allCoins.fetchCoinInfo(query)
      .then(({data}) => {                                
        this.requestData= data    
        this.img = this.requestData.image.large  
      })
      
    }
  }
})
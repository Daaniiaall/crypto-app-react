import { useEffect, useState } from "react"

import {searchedCoin} from "../../Services/cryptoApi"

import { RotatingLines } from "react-loader-spinner"

import styles from "./Search.module.css"

function Search({currency , setCurrency}) {

  const [searchInput , setSearchInput] = useState("")
  const [coins , setCoins] = useState([])
  const [isLoading , setIsLoading] = useState(false)

  useEffect(function(){
    const controller = new AbortController();

    // if we delete searchInput => we want state=coins also deleted
    setCoins([])
    // if search input not filled => we dont want get any data from api => emptyString = falsy
    if(!searchInput ){ 
      setIsLoading(false)
      return ;
    }
    
    async function searchCoin(){
      try{
        const res = await fetch(searchedCoin(searchInput) , {signal: controller.signal})
        const json = await res.json()
        // after fetching data => loading = false
        setIsLoading(false)
        // console.log(json)

        // if we dont have error from api && fetched data(=json) has [coins] => MEANS: json.coins=true
        if(json.coins) {setCoins(json.coins)}
      } 
      
      catch(error){
        if(error.name !== "AbortError"){
          alert(error.message)
        }
      }
    }

    // before fetching data => loading = true
    setIsLoading(true)

    searchCoin();
   
    // cleanUp function
    return function(){controller.abort();}

  } , [searchInput])


  return (
    <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />

        <select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>

        {(coins.length >0 || isLoading) &&  (
                  <div className={styles.searchResult}>
                  {isLoading && <RotatingLines width="50px" height="50px" strokeWidth="2" strokeColor="#3874ff" />}
                  <ul>
                    {coins.map((coin)=>( <li key={coin.id}>
                      <img src={coin.thumb} alt={coin.name} />
                      <p>{coin.name}</p>
                    </li>))}
                  </ul>
                </div>
        )}
    </div>
  )
}

export default Search
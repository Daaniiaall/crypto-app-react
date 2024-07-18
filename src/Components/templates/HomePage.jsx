import { useState } from "react"
import { useEffect } from "react"

import {getCoinList} from "../../Services/cryptoApi.js"

import TableCoins from "../modules/TableCoins"
import Pagination from "../modules/Pagination.jsx"
import Search from "../modules/Search.jsx"
import Chart from "../modules/Chart.jsx"

function HomePage() {

    const [coins , setCoins] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [page , setPage] = useState(1)
    const [currency , setCurrency] = useState("usd")
    const [chart , setChart] = useState(null)

    useEffect(function(){ 
      setIsLoading(true)
      async function getData(){
        try{
          const res = await fetch( getCoinList(page , currency) )
          const json = await res.json()
          setCoins(json)
          setIsLoading(false)
        }
        catch(error){
          console.log(error)
        }
      }
      getData();
    } , [page , currency])
    

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoins coins={coins} isLoading={isLoading} currency={currency} setChart={setChart} />
      {!isLoading && <Pagination page={page} setPage={setPage} />}
      {!!chart && <Chart chart={chart} setChart={setChart}/>}
    </div>
  )
}

export default HomePage
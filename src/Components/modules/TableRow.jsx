import chartUpImage from "../../assets/chart-up.svg"
import chartDownImage from "../../assets/chart-down.svg"

import styles from "./TableRow.module.css"

import { marketChart } from "../../Services/cryptoApi"

function TableRow({coin , currency , setChart}) {

  const { id, image, name, symbol, current_price, total_volume, market_cap_change_percentage_24h} = coin

  async function showHandler(){
      try {
        const res = await fetch(marketChart(id))
        const json = await res.json()
        // console.log(json)
        setChart({...json , coin})
      }
      catch (error) {
        setChart(null)
      }
    }

  return (
    <tr>
        <td>
            <div className={styles.symbol} onClick={showHandler} >
                <img src={image} alt={name} />
                <span>{symbol.toUpperCase()}</span>
            </div>
        </td>
        <td>{name}</td>
        <td>
          <span>{currency === "usd" ? "$" : null}</span>
          <span>{currency === "eur" ? "€" : null}</span>
          <span>{currency === "jpy" ? "¥" : null}</span>
          {current_price.toLocaleString()}
        </td>
        <td className={market_cap_change_percentage_24h > 0 ? styles.success : styles.error}>
            {market_cap_change_percentage_24h.toFixed(2)}%
        </td>
        <td>{total_volume.toLocaleString()}</td>
        <td><img src={market_cap_change_percentage_24h > 0 ? chartUpImage : chartDownImage } alt={name} /></td>
    </tr>
  )
}

export default TableRow
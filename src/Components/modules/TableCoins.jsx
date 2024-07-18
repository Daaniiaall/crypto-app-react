import TableRow from "./TableRow"
// loading spinner
import { RotatingLines } from 'react-loader-spinner'

import styles from "./TableCoins.module.css"

function TableCoins({coins , isLoading , currency , setChart}) {

  return (
    <div className={styles.container}>
        {isLoading ? <RotatingLines strokeColor="#3874ff" strokeWidth="2" /> : 
            (<table className={styles.table}>
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Total Volume</th>
                        <th></th>
                    </tr>
                </thead>
    
                <tbody>
                    {coins.map(coin => <TableRow coin={coin} key={coin.id} currency={currency} setChart={setChart} />) }
                </tbody>
    
            </table>)
        }


    </div>
  )
}

export default TableCoins
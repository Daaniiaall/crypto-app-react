const baseUrl = "https://api.coingecko.com/api/v3"
const apiKey = "CG-mAT3hJUxjqW39acJ5dWj6a7g"


function getCoinList(page , currency){
    return `${baseUrl}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${apiKey}`
}

function searchedCoin(query){
    return `${baseUrl}/search?query=${query}&x_cg_demo_api_key=${apiKey}`
}

function marketChart(coinId){
    return `${baseUrl}/coins/${coinId}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${apiKey}`
}




export {getCoinList , searchedCoin , marketChart} ;
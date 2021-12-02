import React, {useState, useEffect} from "react"

function Stock (props){
    const [stocks, setStocks] = useState(null);
    const getData = async () => {
        const symbol = props.match.params.symbol
        const response = await fetch (`https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=747effdcc614609c78f380595d64df0e`)
        const data = await response.json()
        setStocks(data)
    };

    useEffect(() => {
        getData()
    }, [])

    const loaded = () => {
        return(
            <div>
                <h2>Name: {stocks[0].symbol}</h2>
                <h2>Price: ${stocks[0].price}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return stocks ? loaded() : loading()
}

export default Stock;
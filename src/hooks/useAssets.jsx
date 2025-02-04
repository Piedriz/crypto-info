import React from 'react'
import axios from 'axios';
import { ASSETS } from '../utils/AssetsList';

export const useAssets = () => {
    const [cryptoInfo, setCryptoInfo] = React.useState([]);
    const [cryptoLogos, setCryptoLogos] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true)
    const API_KEY = '8F2E5472-1F20-4314-9C9A-96E2B4FC073F'
    const API_KEY2 = '27F1DEA0-6317-40B1-AC4B-B6EF60BAD876'
    const API_KEY3 = 'C84038C9-0E51-4748-BC17-9A9F46E9EFEF'
    const API_KEY4 = 'A302ADB5-1636-4A1D-9D23-D476C645E69E'

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const responseInfo = await axios({
            method: 'get',
            url: `http://rest.coinapi.io/v1/assets?filter_asset_id=${ASSETS}`,
            headers: {
                'X-CoinAPI-Key': `${API_KEY3}`,
                'Accept': 'application/json'
            }
        });
        const responseLogos = await axios({
            method: 'get',
            url: 'http://rest.coinapi.io/v1/assets/icons/2',
            headers: {
                'X-CoinAPI-Key': `${API_KEY3}`,
                'Accept': 'application/json'
            }
        })
        setCryptoInfo(responseInfo.data);
        setCryptoLogos(responseLogos.data);
        setIsLoading(!isLoading);
    }
    return { cryptoInfo, cryptoLogos, isLoading }
}
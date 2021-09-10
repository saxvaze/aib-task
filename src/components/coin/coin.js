import { useParams } from "react-router-dom";
import CoinService from './coin.service';
import React from 'react';
import CoinDetails from './coin-details';

function Coin() {
    const { id } = useParams();
    var [coin, updateState] = React.useState({});

    function getCoinDetails() {
        CoinService.getCoinDetails(id)
            .then(response => updateState(response))
    }

    React.useEffect(() => {
        getCoinDetails();
    }, []);

    return (
        <CoinDetails details={coin} />
    );
}

export default Coin;
import React from 'react';
import MarketService from "./market.service";
import MarketList from './market-list';
import { useHistory } from 'react-router-dom';

function Market() {
    var [markets, updateState] = React.useState([]);
    const history = useHistory();

    function getCoins() {
        MarketService.getCoins()
            .then(response => updateState(response))
    }

    React.useEffect(() => {
        getCoins();
    }, []);

    function onRowSelect(id) {
        history.push('/coin/' + id)
    }

    return (
        <>
            <MarketList data={markets} onRowSelect={onRowSelect} />
        </>
    );
}

export default Market;
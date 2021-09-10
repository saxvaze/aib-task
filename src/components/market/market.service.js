import Http from '../../common/services/http';

const MarketService = {
    getCoins: async () => {
        return await Http.get("coins/markets?vs_currency=EUR");;
    }
};

export default MarketService;
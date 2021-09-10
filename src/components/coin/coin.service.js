import Http from '../../common/services/http';

const CoinService = {
    getCoinDetails: async (coinId) => {
        return await Http.get(`coins/${coinId}`);
    }
}

export default CoinService;
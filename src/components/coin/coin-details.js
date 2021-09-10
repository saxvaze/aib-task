import './coin-details.scss';
import Utils from '../../common/services/utils';

function CoinDetails(props) {
    function getFormattedDate(dateString) {
        const date = new Date(dateString);

        return `${date.getDate()} ${Utils.getMonthNameByIndex(date.getMonth())} ${date.getFullYear()}`;
    }

    return (
        <div className="coin-wrapper">
            <div>
                <img src={props.details.image?.large || props.details.image?.small || null}></img>

                <div className="d-inline-block align-top ms-5 mt-4">

                    <div className="key-value mb-2">
                        <div className="key d-inline-block me-2" title="Name">Name: </div>
                        <div className="value d-inline-block">{props.details.name}</div>
                    </div>
                    <div className="key-value mb-2">
                        <div className="key d-inline-block me-2" title="Symbol">Symbol: </div>
                        <div className="value d-inline-block">{props.details.symbol}</div>
                    </div>
                    <div className="key-value mb-2">
                        <div className="key d-inline-block me-2" title="Hashing Algorithm">Hashing Algorithm: </div>
                        <div className="value d-inline-block">{props.details.hashing_algorithm}</div>
                    </div>


                    <div className="key-value mb-2">
                        <div className="key d-inline-block me-2" title="Market cap">Market cap: </div>
                        <div className="value d-inline-block">€ {props.details.market_data?.market_cap?.eur}</div>
                    </div>

                    <div className="key-value mb-2">
                        <div className="key d-inline-block me-2">Links: </div>
                        <div className="value d-inline-block">
                            <a className="link" target="_blank" href={props.details.links?.homepage[0]}>Homepage</a>,
                            <a className="link" target="_blank" href={props.details.links?.subreddit_url}> Reddit</a>,
                            <a className="link" target="_blank" href={props.details.links?.blockchain_site[0]}> Blockchain</a>,
                        </div>
                    </div>

                    <div className="key-value mb-2">
                        <div className="key d-inline-block me-2" title="Market cap">Genesis date: </div>
                        <div className="value d-inline-block">{getFormattedDate(props.details.genesis_date)}</div>
                    </div>

                </div>

                <p className="mt-4">{props.details.description?.en}</p>
            </div>
        </div>
    );
}

export default CoinDetails;
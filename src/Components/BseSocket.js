import React from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {Line} from 'react-chartjs-2';
import {connect} from 'react-redux';
import {appendToGraphData} from '../actions';


// let example = {"C":"d-6D5A90F7-B,9B530|Ol2,0|Ol3,9","M":[{"H":"stockTickerMini","M":"updateStockPrice","A":[{"Symbol":"500570","ScripName":"<a class=\"scrpred\" target=\"_blank\" href=\"http://www.bseindia.com/stock-share-price/tata-motors-ltd/tatamotors/500570/\">TATAMOTORS</a>","ScripName_act":"TATAMOTORS","DayOpen":0.0,"DayLow":0.0,"DayHigh":0.0,"LastChange":0.1,"INDLastChange":0.0,"IndexChange":0.0,"LastChangeBuyPrice":0.05,"LastChangeSensexIndex":0.0,"LastChangeSellPrice":0.15,"LastChangeBuyQty":280,"LastChangeSellQty":1450,"LastChangeIndQty":0,"LastChangeLTQty":40,"SessionNumber":"3","PriceColor":"senwhitecss","PCColor":"senwhitecss","BPriceColor":"senredcss","SPriceColor":"senredcss","BQtyColor":"senredcss","SQtyColor":"senredcss","LTQColor":"senredcss","whiteColor":null,"ScripColor":"scrpred","BuyPrice":148.1,"SellPrice":148.25,"INDicatveQty":0,"LastTradeQty":50,"BuyQty":2103,"SellQty":1500,"PercentChange":-2.0826,"URL":"tata-motors-ltd/tatamotors/500570/","Price":148.1,"INDicativePrice":0.0,"SensexIndex":0.0}]},{"H":"stockTickerMini","M":"updateStockPrice","A":[{"Symbol":"532215","ScripName":"<a class=\"scrpgrn\" target=\"_blank\" href=\"http://www.bseindia.com/stock-share-price/axis-bank-ltd/axisbank/532215/\">AXISBANK</a>","ScripName_act":"AXISBANK","DayOpen":0.0,"DayLow":0.0,"DayHigh":0.0,"LastChange":0.5,"INDLastChange":0.0,"IndexChange":0.0,"LastChangeBuyPrice":0.35,"LastChangeSensexIndex":0.0,"LastChangeSellPrice":0.35,"LastChangeBuyQty":-85,"LastChangeSellQty":56,"LastChangeIndQty":0,"LastChangeLTQty":-33,"SessionNumber":"3","PriceColor":"senwhitecss","PCColor":"senwhitecss","BPriceColor":"senredcss","SPriceColor":"senredcss","BQtyColor":"sengreencss","SQtyColor":"senredcss","LTQColor":"senwhitecss","whiteColor":null,"ScripColor":"scrpgrn","BuyPrice":716.2,"SellPrice":716.65,"INDicatveQty":0,"LastTradeQty":25,"BuyQty":138,"SellQty":198,"PercentChange":0.7313,"URL":"axis-bank-ltd/axisbank/532215/","Price":716.3,"INDicativePrice":0.0,"SensexIndex":0.0}]},{"H":"stockTickerMini","M":"updateStockPrice","A":[{"Symbol":"500112","ScripName":"<a class=\"scrpred\" target=\"_blank\" href=\"http://www.bseindia.com/stock-share-price/state-bank-of-india/sbin/500112/\">SBIN</a>","ScripName_act":"SBIN","DayOpen":0.0,"DayLow":0.0,"DayHigh":0.0,"LastChange":-0.20,"INDLastChange":0.0,"IndexChange":0.0,"LastChangeBuyPrice":-0.05,"LastChangeSensexIndex":0.0,"LastChangeSellPrice":-0.05,"LastChangeBuyQty":1006,"LastChangeSellQty":-1303,"LastChangeIndQty":0,"LastChangeLTQty":-457,"SessionNumber":"3","PriceColor":"senwhitecss","PCColor":"senwhitecss","BPriceColor":"senwhitecss","SPriceColor":"sengreencss","BQtyColor":"senwhitecss","SQtyColor":"sengreencss","LTQColor":"senwhitecss","whiteColor":null,"ScripColor":"scrpred","BuyPrice":338.75,"SellPrice":338.95,"INDicatveQty":0,"LastTradeQty":10,"BuyQty":1411,"SellQty":44,"PercentChange":-0.2355,"URL":"state-bank-of-india/sbin/500112/","Price":338.85,"INDicativePrice":0.0,"SensexIndex":0.0}]},{"H":"stockTickerMini","M":"updateStockPrice","A":[{"Symbol":"532174","ScripName":"<a class=\"scrpred\" target=\"_blank\" href=\"http://www.bseindia.com/stock-share-price/icici-bank-ltd/icicibank/532174/\">ICICIBANK</a>","ScripName_act":"ICICIBANK","DayOpen":0.0,"DayLow":0.0,"DayHigh":0.0,"LastChange":0.05,"INDLastChange":0.0,"IndexChange":0.0,"LastChangeBuyPrice":-0.05,"LastChangeSensexIndex":0.0,"LastChangeSellPrice":-0.10,"LastChangeBuyQty":2400,"LastChangeSellQty":-157,"LastChangeIndQty":0,"LastChangeLTQty":-450,"SessionNumber":"3","PriceColor":"senwhitecss","PCColor":"senwhitecss","BPriceColor":"senwhitecss","SPriceColor":"senwhitecss","BQtyColor":"senwhitecss","SQtyColor":"senwhitecss","LTQColor":"senwhitecss","whiteColor":null,"ScripColor":"scrpred","BuyPrice":407.0,"SellPrice":407.05,"INDicatveQty":0,"LastTradeQty":21,"BuyQty":12268,"SellQty":2,"PercentChange":-0.3427,"URL":"icici-bank-ltd/icicibank/532174/","Price":407.15,"INDicativePrice":0.0,"SensexIndex":0.0}]},{"H":"stockTickerMini","M":"updateStockPrice","A":[{"Symbol":"500034","ScripName":"<a class=\"scrpgrn\" target=\"_blank\" href=\"http://www.bseindia.com/stock-share-price/bajaj-finance-limited/bajfinance/500034/\">BAJFINANCE</a>","ScripName_act":"BAJFINANCE","DayOpen":0.0,"DayLow":0.0,"DayHigh":0.0,"LastChange":-1.05,"INDLastChange":0.0,"IndexChange":0.0,"LastChangeBuyPrice":0.1,"LastChangeSensexIndex":0.0,"LastChangeSellPrice":0.5,"LastChangeBuyQty":31,"LastChangeSellQty":-18,"LastChangeIndQty":0,"LastChangeLTQty":-5,"SessionNumber":"3","PriceColor":"senwhitecss","PCColor":"senwhitecss","BPriceColor":"senwhitecss","SPriceColor":"senwhitecss","BQtyColor":"senredcss","SQtyColor":"sengreencss","LTQColor":"senwhitecss","whiteColor":null,"ScripColor":"scrpgrn","BuyPrice":3173.3,"SellPrice":3175.0,"INDicatveQty":0,"LastTradeQty":2,"BuyQty":76,"SellQty":50,"PercentChange":0.1308,"URL":"bajaj-finance-limited/bajfinance/500034/","Price":3175.75,"INDicativePrice":0.0,"SensexIndex":0.0}]},{"H":"stockTickerMini","M":"updateStockPrice","A":[{"Symbol":"500875","ScripName":"<a class=\"scrpred\" target=\"_blank\" href=\"http://www.bseindia.com/stock-share-price/itc-ltd/itc/500875/\">ITC</a>","ScripName_act":"ITC","DayOpen":0.0,"DayLow":0.0,"DayHigh":0.0,"LastChange":-0.4,"INDLastChange":0.0,"IndexChange":0.0,"LastChangeBuyPrice":-0.1,"LastChangeSensexIndex":0.0,"LastChangeSellPrice":-0.05,"LastChangeBuyQty":18,"LastChangeSellQty":88,"LastChangeIndQty":0,"LastChangeLTQty":-16,"SessionNumber":"3","PriceColor":"senwhitecss","PCColor":"senwhitecss","BPriceColor":"senwhitecss","SPriceColor":"sengreencss","BQtyColor":"senwhitecss","SQtyColor":"senredcss","LTQColor":"senwhitecss","whiteColor":null,"ScripColor":"scrpred","BuyPrice":270.1,"SellPrice":270.25,"INDicatveQty":0,"LastTradeQty":1,"BuyQty":204,"SellQty":343,"PercentChange":-0.2769,"URL":"itc-ltd/itc/500875/","Price":270.1,"INDicativePrice":0.0,"SensexIndex":0.0}]},{"H":"stockTickerMini","M":"updateStockPrice","A":[{"Symbol":"532898","ScripName":"<a class=\"scrpgrn\" target=\"_blank\" href=\"http://www.bseindia.com/stock-share-price/power-grid-corporation-of-india-ltd/powergrid/532898/\">POWERGRID</a>","ScripName_act":"POWERGRID","DayOpen":0.0,"DayLow":0.0,"DayHigh":0.0,"LastChange":-0.05,"INDLastChange":0.0,"IndexChange":0.0,"LastChangeBuyPrice":0.05,"LastChangeSensexIndex":0.0,"LastChangeSellPrice":0.05,"LastChangeBuyQty":100,"LastChangeSellQty":-283,"LastChangeIndQty":0,"LastChangeLTQty":22,"SessionNumber":"3","PriceColor":"senwhitecss","PCColor":"senwhitecss","BPriceColor":"senwhitecss","SPriceColor":"senwhitecss","BQtyColor":"senwhitecss","SQtyColor":"sengreencss","LTQColor":"senwhitecss","whiteColor":null,"ScripColor":"scrpgrn","BuyPrice":212.2,"SellPrice":212.3,"INDicatveQty":0,"LastTradeQty":50,"BuyQty":385,"SellQty":518,"PercentChange":1.1681,"URL":"power-grid-corporation-of-india-ltd/powergrid/532898/","Price":212.2,"INDicativePrice":0.0,"SensexIndex":0.0}]},{"H":"stockTickerMini","M":"updateStockPrice","A":[{"Symbol":"500010","ScripName":"<a class=\"scrpgrn\" target=\"_blank\" href=\"http://www.bseindia.com/stock-share-price/housing-development-finance-corpltd/hdfc/500010/\">HDFC</a>","ScripName_act":"HDFC","DayOpen":0.0,"DayLow":0.0,"DayHigh":0.0,"LastChange":-0.25,"INDLastChange":0.0,"IndexChange":0.0,"LastChangeBuyPrice":0.4,"LastChangeSensexIndex":0.0,"LastChangeSellPrice":0.95,"LastChangeBuyQty":-24,"LastChangeSellQty":-1,"LastChangeIndQty":0,"LastChangeLTQty":-13,"SessionNumber":"3","PriceColor":"senwhitecss","PCColor":"senwhitecss","BPriceColor":"senredcss","SPriceColor":"senredcss","BQtyColor":"sengreencss","SQtyColor":"sengreencss","LTQColor":"senwhitecss","whiteColor":null,"ScripColor":"scrpgrn","BuyPrice":2195.8,"SellPrice":2197.35,"INDicatveQty":0,"LastTradeQty":4,"BuyQty":15,"SellQty":14,"PercentChange":0.6278,"URL":"housing-development-finance-corpltd/hdfc/500010/","Price":2196.0,"INDicativePrice":0.0,"SensexIndex":0.0}]},{"H":"stockTickerMini","M":"updateStockPrice","A":[{"Symbol":"500470","ScripName":"<a class=\"scrpred\" target=\"_blank\" href=\"http://www.bseindia.com/stock-share-price/tata-steel-ltd/tatasteel/500470/\">TATASTEEL</a>","ScripName_act":"TATASTEEL","DayOpen":0.0,"DayLow":0.0,"DayHigh":0.0,"LastChange":0.1,"INDLastChange":0.0,"IndexChange":0.0,"LastChangeBuyPrice":0.05,"LastChangeSensexIndex":0.0,"LastChangeSellPrice":-0.05,"LastChangeBuyQty":-20,"LastChangeSellQty":-44,"LastChangeIndQty":0,"LastChangeLTQty":24,"SessionNumber":"3","PriceColor":"senwhitecss","PCColor":"senwhitecss","BPriceColor":"senredcss","SPriceColor":"sengreencss","BQtyColor":"sengreencss","SQtyColor":"sengreencss","LTQColor":"senwhitecss","whiteColor":null,"ScripColor":"scrpred","BuyPrice":442.3,"SellPrice":442.35,"INDicatveQty":0,"LastTradeQty":25,"BuyQty":5,"SellQty":83,"PercentChange":-0.8407,"URL":"tata-steel-ltd/tatasteel/500470/","Price":442.3,"INDicativePrice":0.0,"SensexIndex":0.0}]},{"H":"stockTickerMini","M":"updateStockPriceString","A":[{"Symbol":"Sensex","INDLastChange":0.0,"IndexChange":35.34,"_previousChange":37847.65,"LastChangeSensexIndex":0.0,"SensexIndex":37882.99}]}]}

const client = new W3CWebSocket('wss://search.bseindia.com/StreamersEQ/signalr/connect?transport=webSockets&clientProtocol=1.5&connectionToken=zG5o6CDfQjtGDLQAnrYPDQyvEvoHT1YEZwZw1r5at65nFg7PI8LP%2FQFKAWcz1nUNcFZOPkDizZZ2RXmQhG5B6Bnpcn%2FTDXwOip6gxfOaLF%2FYCoJD%2BeUBC3KXWH1S%2BO54&connectionData=%5B%7B%22name%22%3A%22stocktickermini%22%7D%5D&tid=10');
const mapStateToProps = state => { // This is some Rick and Morty level shit
    return {state}
  }


class BseSocket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result : [],

            graphData: {
                labels: [],

                datasets: [{
                    fill: false,
                    pointRadius : 3,
                    borderWidth : 3,
                    // steppedLine : true,
                    label: 'Sensex Live',

                    data: [],
                }]
            },

            graphOptions : {
                layout: {
                    padding: {
                        top: 100,
                        left: 15,
                        right: 15,
                        bottom: 15
                    }
                }
            }
        }
        // this.graphDataReducer = useSelector(state =>state.graphDataReducer);
        ////// IT's A FREAKING HOOK :?????????????
        // console.log(this.graphDataReducer);
        // this.dispatch = useDispatch();
        
        this.myFunction = this.myFunction.bind(this);
    }

    componentDidMount(){
        console.log("Props of BseSocket...")
        console.log(this.props)
        client.onopen = () => {
            console.log('WebSocket Client Connected');
          };
          client.onmessage = (message) => {
            let json = JSON.parse(message.data) // Life saver
            if (json.M !== undefined){
            json.M.forEach(obj => {
                if (obj.M === 'updateStockPriceString'){
                    if (obj.A[0].Symbol === 'Sensex'){
                        console.log(obj.A[0].SensexIndex)
                        this.props.appendToGraphData(obj.A[0].SensexIndex)
                        // this.dispatch.appendToGraphData(obj.A[0].SensexIndex)
                    }
                }
            })
            }
            else{
                console.log("Couldn't parse sensex data")
            }
          };

        // example.M.forEach(obj => {
        //     if (obj.M == 'updateStockPriceString'){
        //         if (obj.A[0].Symbol == 'Sensex'){
        //             console.log(obj.A[0].SensexIndex)
        //         }
                
        //     }
        // })
    }

    myFunction(){
        //
    }

    render(){
        return (
            <div>
                <h1>Sockets.. we call 'em!</h1>
                <div>
                    <Line
                    data={this.props.state.graphDataReducer}
                    width={100}
                    height={50}
                    options={this.state.graphOptions}
                    />
                </div>
            </div>
        );
    }   
}

export default connect(
    mapStateToProps, {appendToGraphData})(BseSocket)
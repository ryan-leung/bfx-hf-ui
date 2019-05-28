import { connect } from 'react-redux'
import TradingView from './Trading'
import DataActions from '../../redux/actions/data'

const mapStateToProps = (state = {}, ownProps = {}) => {
  const { dataHF = {} } = state
  const { bfx = {}, candles = {}, algoOrders = [] } = dataHF
  const { orders = [] } = bfx

  console.log(dataHF)

  return {
    allCandles: candles,
    algoOrders,
    orders,
  }
}

const mapDispatchToProps = dispatch => ({
  syncCandles: (symbol, tf, range) => {
    dispatch(DataActions.syncCandles(symbol, tf, range))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TradingView)
const mongoose = require('mongoose')

const password = 'Muuli33'
mongoose.connect(`mongodb+srv://jhalah:Muuli33@cluster0.ka30p.mongodb.net/Stocks?retryWrites=true&w=majority`)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const stockSchema = new mongoose.Schema({
Symbol: String,
AssetType: String,
Name: String,
Description: String,
CIK: String,
Exchange: String,
Currency: String,
Country: String,
Sector: String,
Industry: String,
Address: String,
FiscalYearEnd: String,
LatestQuarter: String,
MarketCapitalization: String,
EBITDA: String,
PERatio: String,
PEGRatio: String,
BookValue: String,
DividendPerShare: String,
DividendYield: String,
EPS: String,
RevenuePerShareTTM: String,
ProfitMargin: String,
OperatingMarginTTM: String,
ReturnOnAssetsTTM: String,
ReturnOnEquityTTM: String,
RevenueTTM: String,
GrossProfitTTM: String,
DilutedEPSTTM: String,
QuarterlyEarningsGrowthYOY: String,
QuarterlyRevenueGrowthYOY: String,
AnalystTargetPrice: String,
TrailingPE: String,
ForwardPE: String,
PriceToSalesRatioTTM: String,
PriceToBookRatio: String,
EVToRevenue: String,
EVToEBITDA: String,
Beta: String,
'52WeekHigh': String,
'52WeekLow': String,
'50DayMovingAverage': String,
'200DayMovingAverage': String,
SharesOutstanding: String,
DividendDate: String,
ExDividendDate: String,
})

module.exports =  mongoose.model("Stock", stockSchema)
const axios = require('axios')
const Symbol = require('./models/Symbols.js')
const Stocks = require('./models/Stocks.js')

//Koodi hakee osakkeiden tiedot APIsta ja tallentaa ne tietokantaan
const updateStocks = async () => {
    const currentStocks = await Stocks.find({})
    let set = 0
    const interval = setInterval(async () => {
        try {
            const currentStock = currentStocks[set]
            console.log(currentStock)
            console.log(currentStock.Symbol)
            const newData = (await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${currentStock.Symbol}&apikey=${process.env.AVKEY1}`)).data
            console.log(newData)
            const newStock = Stocks({
                Messages: currentStock.Messages,
                Symbol: currentStock.Symbol,
                _id: currentStock._id,
                AssetType: newData.AssetType,
                Name: newData.Name,
                Description: newData.Description,
                CIK: newData.CIK,
                Exchange: newData.Exchange,
                Currency: newData.Currency,
                Country: newData.Country,
                Sector: newData.Sector,
                Industry: newData.Industry,
                Address: newData.Address,
                FiscalYearEnd: newData.FiscalYearEnd,
                LatestQuarter: newData.LatestQuarter,
                MarketCapitalization: newData.MarketCapitalization,
                EBITDA: newData.EBITDA,
                PERatio: newData.PERatio,
                PEGRatio: newData.PEGRatio,
                BookValue: newData.BookValue,
                DividendPerShare: newData.DividendPerShare,
                DividendYield: newData.DividendYield,
                EPS: newData.EPS,
                RevenuePerShareTTM: newData.RevenuePerShareTTM,
                ProfitMargin: newData.ProfitMargin,
                OperatingMarginTTM: newData.OperatingMarginTTM,
                ReturnOnAssetsTTM: newData.ReturnOnAssetsTTM,
                ReturnOnEquityTTM: newData.ReturnOnEquityTTM,
                RevenueTTM: newData.RevenueTTM,
                GrossProfitTTM: newData.GrossProfitTTM,
                DilutedEPSTTM: newData.DilutedEPSTTM,
                QuarterlyEarningsGrowthYOY: newData.QuarterlyEarningsGrowthYOY,
                QuarterlyRevenueGrowthYOY: newData.QuarterlyRevenueGrowthYOY,
                AnalystTargetPrice: newData.AnalystTargetPrice,
                TrailingPE: newData.TrailingPE,
                ForwardPE: newData.ForwardPE,
                PriceToSalesRatioTTM: newData.PriceToSalesRatioTTM,
                PriceToBookRatio: newData.PriceToBookRatio,
                EVToRevenue: newData.EVToRevenue,
                EVToEBITDA: newData.EVToEBITDA,
                Beta: newData.Beta,
                '52WeekHigh': newData['52WeekHigh'],
                '52WeekLow': newData['52WeekLow'],
                '50DayMovingAverage': newData['50DayMovingAverage'],
                '200DayMovingAverage': newData['200DayMovingAverage'],
                SharesOutstanding: newData.SharesOutstanding,
                DividendDate: newData.DividendDate,
            })
            console.log(newStock)
            await Stocks.findByIdAndUpdate(currentStock._id, newStock, { new: true })
            set++
            if (set >= currentStocks.length) {
                clearInterval(interval)
            }
        }
        catch (error) {
            console.log(error)
        }
    }, 15000)
}

module.exports = updateStocks
//Käytettiin hakemaan osakesymbolit kaikista Nasdaq100 osakkeista. Myöhempi käyttö tuntematon
/*axios.get(`https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=c3c50021c87bd311865047fd306d3f07`)
      .then(response => {
             //console.log(response.data)
             Symbol.insertMany(response.data)
             .then(() => {console.log('Data added')})
             .catch(error => {console.log(error)})
          })*/
export const formatValue = (stock, parameter) => {
    switch(parameter){
        case('MarketCapitalization'): return (Math.round((Number(stock[parameter]) / 1000000000) * 1000)/1000)
        case('RevenueTTM'): return (Math.round((Number(stock[parameter]) / 1000000000) * 1000)/1000)
        case('ReturnOnAssetsTTM'): return (Math.round(Number(stock[parameter]) * 10000)/100 + '%')
        case('ReturnOnEquityTTM'): return (Math.round(Number(stock[parameter]) * 10000)/100 + '%')
        case('DividendYield'): return (Math.round(Number(stock[parameter]) * 10000)/100 + '%')
        case("GrossProfitTTM"): return (Math.round((Number(stock[parameter]) / 1000000000) * 1000)/1000)
        case("QuarterlyRevenueGrowthYOY"): return (Math.round(Number(stock[parameter]) * 10000)/100 + '%')
        case("QuarterlyEarningsGrowthYOY"): return (Math.round(Number(stock[parameter]) * 10000)/100 + '%')
        case('EBITDA'): return (Math.round((Number(stock[parameter]) / 1000000000) * 1000)/1000)
        default: return stock[parameter]
    }
}
export const formatParameter = (parameter) => {
    switch(parameter){
        case('MarketCapitalization'): return 'Market capitalization (billion USD)'
        case('RevenueTTM'): return ('Revenue (billion USD)')
        case('PERatio'): return 'P/E'
        case('PEGRatio'): return 'PEG Ratio'
        case('DividendPerShare'): return 'Dividend per share'
        case('ProfitMargin'): return 'Profit margin'
        case('ReturnOnAssetsTTM'): return 'ROA' 
        case('ReturnOnEquityTTM'): return 'ROE'
        case('TrailingPE'): return 'Trailing P/E'
        case('ForwardPE'): return 'Forward P/E'
        case('PriceToSalesRatioTTM'): return 'P/S'
        case('PriceToBookRatio'): return 'P/B'
        case('DividendYield'): return 'Divident yield'
        case("QuarterlyRevenueGrowthYOY"): return 'Quarterly revenue growth'
        case('RevenuePerShareTTM'): return "Revenue per share"
        case('GrossProfitTTM'): return "Gross profit (billion USD)"
        case('DilutedEPSTTM'): return "Diluted EPS"
        case('QuarterlyEarningsGrowthYOY'): return "Quarterly earnings growth"
        case('SharesOutstanding'): return "Shares outstanding"
        case('EVToRevenue'): return "EV to Revenue"
        case('EVToEBITDA'): return "EV To EBITDA"
        case('EBITDA'): return "EBITDA (billion USD)"
        default: return parameter
    }
}

export const formatDate = (date) => {
    const result = ("date:" + date).replaceAll('-','.').replace('T', ' time:')
    return result.substring(0, result.length-5)
}
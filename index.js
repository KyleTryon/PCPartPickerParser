const fetch = require("node-fetch")
const cheerio = require('cheerio')

async function fetchParts(url) {
    const response = await fetch(url)
    const data = await response.text()
    let $ = cheerio.load(data)
    let results = []
    $("table.manual-zebra > tbody")
        .children()
        .not(".part-list-totals")
        .not(".price-modifier")
        .each((i, item) => {
            let $ = cheerio.load(item)
            let component = {
                "type": $(".component-type > a").text(),
                "name": $(".component-name > div > a").text(),
                "price": $(".price > a").text(),
                "merchant": $(".merchant > a").text(),
                "link": $(".nowrap > .btn-mds").attr('href')
            }
            results.push(component)
        })

    return results
}

module.exports.fetchParts = fetchParts
import * as cheerio from 'cheerio'
import axios from 'axios'

import {Part} from './interfaces'

export async function getPartsList(listID: string): Promise<Array<Part>> {
  const response = await axios.get(`https://pcpartpicker.com/list/${listID}`)
  const $ = cheerio.load(response.data)
  let parts = []
  $("#partlist tbody > .tr__product").each((i, row) => {
    let $ = cheerio.load(row)
    let item = {
      "type": $("td.td__component > a").text().trim(),
      "image": $("img").attr("src"),
      "name": $("td.td__name > a").text(),
      "price": $("td.td__price > a").text()
    }
    parts.push(item)
  })
  return parts
}
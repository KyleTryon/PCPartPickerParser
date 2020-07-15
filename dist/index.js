"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartsList = void 0;
const cheerio = __importStar(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
function getPartsList(listID) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get(`https://pcpartpicker.com/list/${listID}`);
        const $ = cheerio.load(response.data);
        let parts = [];
        $("#partlist tbody > .tr__product").each((i, row) => {
            let $ = cheerio.load(row);
            let item = {
                "type": $("td.td__component > a").text().trim(),
                "image": $("img").attr("src"),
                "name": $("td.td__name > a").text(),
                "price": $("td.td__price > a").text()
            };
            parts.push(item);
        });
        return parts;
    });
}
exports.getPartsList = getPartsList;
//# sourceMappingURL=index.js.map
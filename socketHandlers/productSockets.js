const db = require("../models");
const Sequalize = require("sequelize");
const Op = Sequalize.Op;
// import { sql } from '@sequelize/core';


const Product = db.products;
const Keyword = db.keywords;
const KeywordMap = db.keywordsMap;
const Images = db.images;
const Brand = db.brand;


module.exports = (socket) => {
    const all_keywords = async (payload) => {
        let allKeywords = await Keyword.findAll({
            attributes: [
                'id',
                'keywords'
            ]
        });
        if(allKeywords) socket.emit('all_keywords_resp', allKeywords);
    };

    const product_by_keywords = async(payload) => {
        let product_data = [];
        let keywordId = payload;
        let mappedProducts = await KeywordMap.findAll({where:{keyword_id:keywordId},attributes:['product_id']});
        mappedProducts.forEach(async (element,index,arr) => {
            let product = await Product.findAll({
                where:{id:element.product_id},
                include:[{model:Images},{model:Brand}]
            })
            if(product) product_data.push(product[0]);
            if(index == arr.length - 1) socket.emit('product_by_keywords_resp',product_data); 
        });
    }


    return {
        all_keywords,
        product_by_keywords
    }

}
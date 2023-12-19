const db = require("../models");
const Sequalize = require("sequelize");
const Op = Sequalize.Op;
// create main MOdel

const Product = db.products;
const Keyword = db.keywords;
const KeywordMap = db.keywordsMap;
// main work

// 1. get all products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    // attributes : [
    //     'title',
    //     'price'
    // ]
  });
  res.status(200).send({ data: products });
};

// 2. get product details

const getSingleProduct = async (req, res) => {
  let id = req.body.id;
  let products = await Product.findOne({ where: { id: id } });
  res.status(200).send({ data: products });
};

//3. Filter product list

const getFilteredProducts = async (req, res) => {
  let param = req.body;
  let products = await Product.findAll({
    where: {
      [Op.or]: [
        {
          manual_description: {
            [Op.like]: "%" + param.manual_description + "%",
          },
        },
        {
          accounts_description: {
            [Op.like]: "%" + param.accounts_description + "%",
          },
        },
        {
          model_suitability: { [Op.like]: "%" + param.model_suitability + "%" },
        },
        { part_no: { [Op.like]: "%" + param.part_no + "%" } },
        { consumer_price: { [Op.lte]: param.consumer_price } },
        { weight: { [Op.lte]: param.weight } },
        { availability: { [Op.eq]: param.availability } },
        { discount: { [Op.gte]: param.discount } },
        { rating: { [Op.gte]: param.rating } },
      ],
    },
  });
  res.status(200).send({ data: products });
};

//4. Search by keyword

const globalSearch = async (req, res) => {
  let param = req.body;
  let products = await Product.findAll({
    where: {
      [Op.or]: [
        {
          keywords: {
            [Op.like]: "%" + param.keywords + "%",
          }
        },
      ],
    },
  });
  res.status(200).send({ data: products });
};

// 5. Search by keyword

const searchByKeyword = async (req,res) => {
  let param = req.body.keywords;
  let keyword = await Keyword.findAll({
    where: {
      [Op.or]: [
        {
          keywords: {
            [Op.like]: "%" + param + "%",
          }
        },
      ],
    }
  });

  let keywordId = []
  keyword.forEach((data)=>{
    keywordId.push(data.id)
  })
  let keyWordMap = await KeywordMap.findAll({
    where:{keyword_id:keywordId}
  })

  let productIdArr =[];
  keyWordMap.forEach((data)=>{
    productIdArr.push(data.product_id)
  })

  let productList = await Product.findAll({
    where:{id:productIdArr}
  })

  res.status(200).send({data:productList})

}

module.exports = {
  getAllProducts,
  getSingleProduct,
  getFilteredProducts,
  globalSearch,
  searchByKeyword
};

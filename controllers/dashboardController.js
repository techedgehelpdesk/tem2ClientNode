const db = require("../models");
const Sequalize = require("sequelize");
const Op = Sequalize.Op;
// create main MOdel

const Product = db.products;

// 1. get dashboardDetails

const dashboardDetails = async (req,res) => {
    let param = req.body;
    let ratedProducts = await Product.findAll({
      where: {
        [Op.or]: [
          { rating: { [Op.gte]: 3 } },
        ],
      },
    });
    let availabileProducts = await Product.findAll({
        where: {
          [Op.or]: [
            { availability: { [Op.eq]: param.availability } },
          ],
        },
      });
    res.status(200).send({ data: 
        {
            ratedProducts:ratedProducts,
            availabileProducts:availabileProducts,
            bannerImages:[],
            smallBannerImages:[]
        }
     });
}
module.exports = {
    dashboardDetails
}
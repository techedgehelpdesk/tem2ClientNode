const productController = require("../controllers/productController.js");


const router = require("express").Router();

router.get("/getAllProducts", productController.getAllProducts);
router.post("/getProductDetails", productController.getSingleProduct);
router.post("/getFilteredProducts", productController.getFilteredProducts);
router.post("/globalSearch", productController.globalSearch);
router.post("/searchByKeyword", productController.searchByKeyword);
module.exports = router;

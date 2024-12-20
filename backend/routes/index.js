const express = require("express");
const router = express.Router();

//Diğer route dosyaları içe aktarılır
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const couponRoute = require("./coupons.js");
const userRoute = require("./users.js");
const paymentRoute = require("./payment.js");

//Her route u ilgili patch altında kullanıyoruz
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/coupons", couponRoute);
router.use("/users", userRoute);
router.use("/payment", paymentRoute);

module.exports = router;

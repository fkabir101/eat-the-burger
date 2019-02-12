const router = require("express").Router();
const apiRoutes = require("./apiRoutes");


router.use("/burger", apiRoutes);


module.exports = router;
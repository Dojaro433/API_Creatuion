  const express = require("express");

  const router = express.Router();




  router.post("/", require("./../controllers/vairs").getPost);


  router.get("/", require("./../controllers/vairs").getData);


  router.get("/:vairsId", require("./../controllers/vairs").getAlldata);

  router.delete("/:vairsId", require("./../controllers/vairs").deleteUser);


  router.put("/:vairsId", require("./../controllers/vairs").Updateuser);















  module.exports = router;
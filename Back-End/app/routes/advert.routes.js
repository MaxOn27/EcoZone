module.exports = app => {
    const adverts = require("../controllers/advert.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", adverts.create);
  
    router.get("/", adverts.findAll);
  
    router.get("/published", adverts.findAllPublished);
  
    router.get("/:id", adverts.findOne);
  
    router.put("/:id", adverts.update);
  
    router.delete("/:id", adverts.delete);
  
    router.delete("/", adverts.deleteAll);
  
    app.use("/adverts", router);
  };
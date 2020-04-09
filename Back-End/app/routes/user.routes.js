const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");


module.exports = app => {
  const users = require('../controllers/user.controller');
  
    var router = require("express").Router();
  
    router.post("/", users.create);
  
    router.get("/", users.findAll);
  
    router.get("/published", users.findAllPublished);
  
    router.get("/:id", users.findOne);
  
    router.put("/:id", users.update);
  
    router.delete("/:id", users.delete);
  
    router.delete("/", users.deleteAll);
  
    app.use("/users", router);


    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/api/test/all", controller.allAccess);
  
    app.get(
      "/api/test/user",
      [authJwt.verifyToken],
      controller.userBoard
    );
  
    app.get(
      "/api/test/admin",
      [authJwt.verifyToken, authJwt.isAdmin],
      controller.adminBoard
    );
    
  };
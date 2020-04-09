module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Max271212!!",
    DB: "ads_db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
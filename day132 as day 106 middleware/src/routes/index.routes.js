const express = require("express");

const router = express.Router();

router.use((req,res,next)=>{
    console.log('this middleware is between router and api');
    // next()
})

router.get("/", (req, res) => {
  res.status(200).json({ 
    message: "welcome to the Cohort",
  });
});

module.exports = router;

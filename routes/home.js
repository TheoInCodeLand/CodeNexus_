const express = require('express');
const router = express();

router.get('/', (req, res)=>{
    res.render('Home')
})

module.exports = router;
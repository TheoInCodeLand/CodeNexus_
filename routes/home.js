const express = require('express');
const router = express();

router.get('/', (req, res)=>{
    res.send('Home page!')
})

module.exports = router;
const express=require('express')
const router=express.Router()
const { getHome } = require("../controllers/contact.controller")


router.get('/',getHome)
router.post('/identify',)


module.exports=router
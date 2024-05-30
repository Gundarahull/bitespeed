const express=express()
const router=express.Router()
const { getHome } = require("../controllers/contact.controller")


router.get('/',getHome)


module.exports=router
var express = require('express');
var router = express.Router();
const user = require('../models/user')
const course = require('../models/resource')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/signup',function(req,res,next) {
  res.render('user-signup')
})
router.get('/resource',function(req,res,next) {
  res.render('resource-upload')
})
router.post('/add-course',async (req,res)=>{
 await course.create(req.body)
 res.json(req.body)
})
router.post('/register',async function(req,res) {
  await user.create(req.body).then(user => res.redirect('/home'))
})

router.get('/home',async (req,res)=>{
  const courses = course.find({})
  res.render('homepage',{title : Python, description : 'python class'})
})
module.exports = router;
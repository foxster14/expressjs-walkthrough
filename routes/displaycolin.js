var express = require('express');
/* this brings in the data from our json file */
var data = require('../datastore/activity.json')
var router = express.Router();

/* How to access nested objects in your JSON file*/
var courseInfo = data.student_course_info;
/*var emptyArray = [];
for(var x = 0; x < courseInfo.length; x++){
    emptyArray[0] = courseInfo[x].course_name;
}*/

/* GET users listing. */
router.get('/', function(req, res, next) {    
  /*res.render('displaycolin', { name: 'Colin' });*/
  res.render('displaycolin', data);
});

module.exports = router;
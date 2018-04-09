const route = require('express').Router();

route.post('/',function(req,res){
  console.log(req.files.upfile);
  if(req.files.upfile){
    var file = req.files.upfile,
      name = file.name,
      type = file.mimetype;
    var uploadpath = __dirname + '/uploads/' + 'SR.pdf';
    file.mv(uploadpath,function(err){
      if(err){
        console.log("File Upload Failed",name,err);
        res.send("Error Occured!")
      }
      else {
        console.log("job uploaded");
        res.sendStatus(200);
      }
    });
  }
  else {
    res.send("No File selected !");
    res.end();
  }
});

module.exports.route = route;

exports.index = function(req, res){
  res.render('home/index', {
    title: 'Demo'
  });
}
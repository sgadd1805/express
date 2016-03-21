module.exports.index = function(req, res){
    res.render('index' , { title: "Stephen" });
    logger.logThis("23");
};

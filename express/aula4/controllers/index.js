function retornaView (req,res, next ){
    var resultado  = 100/50;
    res.render ('index',{title: 'express'});

}

module.exports = {
    retornaView
}
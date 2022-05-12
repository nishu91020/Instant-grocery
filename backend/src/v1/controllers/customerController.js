
exports.register = (req, res, next)=>{
    res.send("customer registered")


}


exports.getProfile = (req, res, next)=>{
    res.send({name:"tango", address:"nowhere"})
}

exports.getCart = (req, res, next)=>{
    res.send({data:[{item1:"item1", item2:"item2"}]})
}


exports.updateProfile = (req, res, next)=>{
    res.send("profile updated")
}

exports.createOrder = (req, res, next)=>{
    res.send("new order created")
}


exports.getOrders = (req, res, next)=>{
    // returns all order's of customer
    res.send({data:[{order1:"order1"}, {order2:"order2"}]})
}


exports.getOrder = (req, res, next)=>{
    // return single order by id
    res.send({order1:"order1"})
}

const catchAsync = require('../utils/catchAsync');

exports.getOrders = catchAsync(async (req, res, next) => {
   console.log(req.body)
});

exports.createOrder = catchAsync(async(req,res,next)=>{

});

const asyncHandler = require("express-async-handler");

//profile page
exports.index = asyncHandler(
    async(req, res, next) => {
        res.send('profile page')
    }
)

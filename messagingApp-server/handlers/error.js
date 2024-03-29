function errorHandler(err, req, res, next) {
    return res.status(err.status || 500).json({
        error: {
            message: err.message || 'Oops! Something went wrong. Please try again later.'
        }
    });
}

module.exports = errorHandler;
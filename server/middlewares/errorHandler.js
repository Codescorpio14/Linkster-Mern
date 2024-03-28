const errorHandler = (err, req, res, next) => {
  console.error(err.stack || err);

  let statusCode = res.statusCode || 500;

  if (err.name === "ValidationError") {
    statusCode = 400;
  } else if (err.name === "UnauthorizedError") {
    statusCode = 401;
  } else if (err.name === "NotFoundError") {
    statusCode = 404;
  } else if (err.name === "CastError") {
    statusCode = 404;
    err.message = "Object not found with matching id";
  }

  const errorResponse = {
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
  };

  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;

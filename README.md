# Blood-Doner Node.js API


### Solve Error: https://stackoverflow.com/questions/63862746/destructuring-of-the-orignal-error-to-return-invalid-data-of-mongodb-errors-with

else if (process.env.NODE_ENV === 'production') {
    //

    if (err.name === 'CastError') err = handleCastErrorDB(err);
    if (err.code === 11000) err = handleDuplicateFieldsDB(err);
    if (err.name === 'ValidationError')
      err = handleValidationErrorDB(err);

    sendErrorProd(err, res);
  }

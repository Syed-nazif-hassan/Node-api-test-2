exports.createValidation = (req, res, next) => {
  req.check("title", "Write a title.").notEmpty();
  req.check("title", "Title must be between 4 to 200 characters.").isLength({
    min: 4,
    max: 200,
  });
  req.check("body", "Write a body.").notEmpty();
  req.check("body", "Body must be between 4 to 2000 characters.").isLength({
    min: 4,
    max: 2000,
  });
  const Errors = req.validationErrors();
  if (Errors) {
    const firstError = Errors.map((err) => err.msg)[0];
    return res.status(400).json({
      error: firstError,
    });
  }
  next();
};

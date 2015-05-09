module.exports = function(req, res, next) {

  // User is allowed, proceed to controller
  //sails.log.warn(JSON.stringify(req.user));
  if (req.user.role === "admin")
    return next();

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};

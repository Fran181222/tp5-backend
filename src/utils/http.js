const sendError = (res, error) => {
  res.status(500).json({
    status: 1,
    msg: error.message
  });
};

module.exports = {
  sendError
};

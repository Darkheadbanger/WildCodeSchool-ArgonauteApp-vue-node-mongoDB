const errorHandler = (err, req, res, next) => {
  console.error(err);
  let errStatus, errMsg;
  switch (err.statusCode) {
    case 500:
      errStatus = 500;
      errMsg = err.message || "Erreur interne du serveur";
      break;
    case 502:
      errStatus = 502;
      errMsg = err.message || "Bad Gateway";
      break;
    case 503:
      errStatus = 503;
      errMsg = err.message || "Service indisponible";
      break;
    case 504:
      errStatus = 504;
      errMsg = err.message || "Temps d'attente écoulé";
      break;
    default:
      errStatus = 500;
      errMsg = err.message || "Erreur interne du serveur";
      break;
  }
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: err ? errMsg : "Le serveur ne réponds pas",
    stack: process.env.NODE_ENV === "development" ? err.stacj : {},
  });
};
module.exports = errorHandler;

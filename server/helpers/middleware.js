import morgan from 'morgan';

export const reqLogger = () => {
  morgan.token('jsonReq', (req) => JSON.stringify(req.body));
  return morgan(':method :url :status :res[content-length] - :response-time ms :jsonReq');
};
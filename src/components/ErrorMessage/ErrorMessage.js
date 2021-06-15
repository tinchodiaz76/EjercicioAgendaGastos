const ErrorMesage = ({ visible, descripcion }) => {
  return visible && <h4 className="error-message">{descripcion}</h4>;
};

export default ErrorMesage;

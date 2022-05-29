export const configBtns = (counter, stock, min, restar, sumar) => {
  const configRestar = {
    className: `btn ${
      counter === min ? "btn-outline-danger" : "btn-outline-primary"
    }`,
    disabled: counter === min,
    onClick: restar,
  };

  const configSumar = {
    onClick: sumar,
    className: `btn ${counter === stock ? "btn-danger" : "btn-primary"}`,
  };

  return { configRestar, configSumar };
};

const calculate = (data, btnName) => {
  const { total, next, operation } = data;
  switch (btnName) {
    case '+/-':
      return {
        total: (total * -1),
        next: (next * -1),
      };
    case '%':
      return {
        total: (total * -1),
        next: (next * -1),
      };

    default:
      text = "Looking forward to the Weekend";
  }
};

export default calculate;

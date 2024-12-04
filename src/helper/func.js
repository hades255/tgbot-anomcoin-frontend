export const fix2 = (param, pow = 2) =>
  Math.round(param * Math.pow(10, pow)) / Math.pow(10, pow);

export const formatNumber = (num, fixed = 0) => {
  const units = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
  const unit = Math.floor((num.toFixed(0).length - 1) / 3);
  const scaledNum = (num / Math.pow(1000, unit)).toFixed(fixed);
  return `${scaledNum}${units[unit]}`;
};

export const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params.entries()) {
    if (key === "user") {
      result[key] = JSON.parse(decodeURIComponent(value));
    } else {
      result[key] = decodeURIComponent(value);
    }
  }

  return result;
};

const randomId = function (length = 6) {
  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substring(2, length + 2)
  );
};

export const newCoin = (width = 360, height = 320, types = 8) => {
  const x = Math.round(Math.random() * (width - 80));
  const y = Math.round(Math.random() * (height - 60));
  const type = Math.round(Math.random() * types);
  return { key: randomId(), x, y, type };
};

export const boosterCoin = (level) => {
  switch (level) {
    case 0:
      return 200;
    case 1:
      return 500;
    case 2:
      return 1000;
    case 3:
      return 3000;
    case 4:
      return 8000;
    case 5:
      return 19000;
    case 6:
      return 47000;
    case 7:
      return 117000;
    case 8:
      return 292000;
    case 9:
      return 729000;
    default:
      return 1000000;
  }
};

export const yespacCoin = (level) => {
  switch (level) {
    case 0:
      return 500000;
    case 1:
      return 400000;
    case 2:
      return 800000;
    case 3:
      return 2000000;
    default:
      return 2000000;
  }
};

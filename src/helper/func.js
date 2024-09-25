export const fix2 = (param, pow = 2) =>
  Math.round(param * Math.pow(10, pow)) / Math.pow(10, pow);

export const formatNumber = (num) => {
  const cnt = Math.log10(num);
  const index = Math.floor(cnt / 3);
  const suffix = ["", "K", "M", "G", "T"][index];
  return num / Math.pow(1000, index) + suffix;
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

export const newCoin = (width = 360, height = 320, types = 8) => {
  const x = Math.round(Math.random() * (width - 80));
  const y = Math.round(Math.random() * (height - 60));
  const type = Math.round(Math.random() * types);
  return { key: x + "-" + y + "-" + type, x, y, type };
};

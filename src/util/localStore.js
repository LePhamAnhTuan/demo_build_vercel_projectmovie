export const luuLocal = (ten, data) => {
  const newData = JSON.stringify(data);
  localStorage.setItem(ten, newData);
};
export const layLocal = (ten) => {
  const value = localStorage.getItem(ten);
  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
};

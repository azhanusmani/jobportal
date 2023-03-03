export const setLocalStorage = (key, value) => {
  if (key && key.length && !value) {
    throw new Error('value not provided for key:', key);
  }
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

import { TIMEOUT_SEC } from './config';

const timeout = (sec) => {
  return new Promise((_, reject) => {
    return setTimeout(() => {
      return reject(
        `Request is taking too long to be executed. More than ${sec} seconds.`
      );
    }, sec * 1000);
  });
};

export const AJAX = async (url, uploadData = undefined) => {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([timeout(TIMEOUT_SEC), fetchPro]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const mappedArray = (arr, elem, index) => {
  if (!Array.isArray(arr)) throw new Error('Parameter must be an array');
  return arr.map((el) => {
    if (Array.isArray(el[elem])) {
      return el[elem][index];
    } else {
      return el[elem];
    }
  });
};

export const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Parameter must be an array');
  return arr.reduce((acc, el) => {
    if (!acc.includes(el)) {
      acc.push(el);
    }
    return acc;
  }, []);
};

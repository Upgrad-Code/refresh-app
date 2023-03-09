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

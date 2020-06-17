export function getData(url) {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url);
    if (res.status === 200) {
      res
        .json()
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    } else {
      reject("Error");
    }
  });
}

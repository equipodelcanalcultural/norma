export const getData = async (url, init, callback) => {
    const response = await fetch(url, init);
    const data = await response.json();
    const call = await callback(data);
  
    return call;
  };
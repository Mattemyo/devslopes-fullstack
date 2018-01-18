import "whatwg-fetch";

class HttpService {
  getProducts = () => {
    const promise = new Promise((resolve, reject) => {
      fetch("http://localhost:3004/product").then(res => {
        // last one
        resolve(res.json());
      });
    });
    return promise;
  };
}

export default HttpService;

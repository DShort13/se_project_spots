class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => res.json());
    // return fetch("https://around-api.en.tripleten-services.com/v1", {
    //   headers: {
    //     authorization: "58406471-2704-4b39-bb10-f7b7656fbc17",
    //   },
    // }).then((res) =>
    //   res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    // );
  }
}

export default Api;

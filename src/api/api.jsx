export const API_URL = "http://localhost:8000";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_POST(body, token) {
  return {
    url: API_URL + "/user/create",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + "/user/info",
    options: {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  };
}

export function ONU_GET(token) {
  return {
    url: API_URL + "/onu",
    options: {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  };
}
export function ONU_SN_GET(token) {
  return {
    url: API_URL + "/onu/sn",
    options: {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: token,
      },
    },
  };
}

export function READ_FILE_ONU(token) {
  return {
    url: API_URL + "/onu/read",
    options: {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  };
}

export function SAVE_ONUS_DATA(token) {
  return {
    url: API_URL + "/onu/save",
    options: {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  };
}

export function SEARCH_SN(body, token) {
  return {
    url: API_URL + "/onu/sn",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    },
  };
}

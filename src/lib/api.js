import axios from "axios"

const ngrokHeaders = {
  "ngrok-skip-browser-warning": "true",
}

const api = (() => {
  const baseUrl = import.meta.env.VITE_API_URL

  function putAccessToken(token) {
    return localStorage.setItem("accessToken", token)
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken")
  }

  function removeAccessToken() {
    return localStorage.removeItem("accessToken")
  }

  async function _fetchWithAuth(url, options = {}) {
    return axios(url, {
      ...options,
      headers: {
        ...options.headers,
        ...ngrokHeaders,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  }

  async function getMe() {
    const response = await _fetchWithAuth(`${baseUrl}/users/me`)

    const { status } = response.data

    if (status !== 200) {
      throw new Error("Get me failed")
    }

    return response.data
  }

  async function login({ username, password }) {
    const response = await axios.post(
      `${baseUrl}/login`,
      {
        username,
        password,
      },
      { headers: ngrokHeaders },
    )

    const { status } = response.data

    if (status !== 200) {
      throw new Error("Login failed")
    }

    putAccessToken(response.data.token)

    return response.data.token
  }

  async function getPolls() {
    const response = await axios.get(`${baseUrl}/polls`, {
      headers: ngrokHeaders,
    })

    const { status } = response.data

    if (status !== 200) {
      throw new Error("Get polls failed")
    }

    return response.data
  }

  async function choose(choice) {
    const response = await _fetchWithAuth(`${baseUrl}/choose`, {
      method: "POST",
      data: {
        choice,
      },
    })

    const { status } = response.data

    if (status !== 200) {
      throw new Error("Choose failed")
    }

    return response.data
  }

  return {
    removeAccessToken,
    getMe,
    login,
    getPolls,
    choose,
  }
})()

export default api

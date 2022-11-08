import axios from "axios"

export default async ({ method, url, headers, body, params }) => {
  try {
    const { status, data } = await axios({
      headers: {
        ...headers,
      },
      method,
      url,
      data: body,
      params,
    })

    return { status, data }
  } catch (error) {
    if (error.response?.status) {
      return { status: error.response.status }
    }
    console.error(`Axios error: ${error.message || error}`)
    throw error
  }
}

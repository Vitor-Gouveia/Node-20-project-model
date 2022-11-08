import minubizClient from "../clients/minubiz/index.js"

export const authenticateAPI = async ({ client_id, client_secret }) => {
  const { access_token, expires_in } = await minubizClient.authenticate({
    client_id,
    client_secret,
  })

  return {
    access_token,
    expires_in,
  }
}

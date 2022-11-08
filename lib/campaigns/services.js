import minubizClient from "../clients/minubiz/index.js"

export const createCampaign = async ({ access_token }) => {
  return await minubizClient.createCampaign({
    access_token,
  })
}

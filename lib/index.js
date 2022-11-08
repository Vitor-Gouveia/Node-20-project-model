import { authenticateAPI } from "./authentication/services.js"
import { getRequest, sendRequest } from "./requests/services.js"
import { createCampaign } from "./campaigns/services.js"

const client_id = "PyjKKC89i7wSSYhHAju2Hr0M98ZSuxZZ"
const client_secret =
  "qvx4ySEMgjSpt-y4MZHdd_Q7h9xf7HtYklCubVMG567r2gDC0vhPxBTjAAqFRTqV"
const experience =
  "minubiz-camil-alimentos-campanha-minu-biz-api-b6c0b548-c86e-4080-9da8-31f75bc3b961"

const main = async () => {
  const { access_token, expires_in } = await authenticateAPI({
    client_id,
    client_secret,
  })

  // criação de recompensa
  const { request_id } = await sendRequest({
    experience,
    mobile: "11940136716",
    access_token,
  })

  const requestData = await getRequest({
    experience,
    request_id,
    access_token,
  })

  console.log("autenticação \t", { access_token, expires_in })
  console.log("criação recompensa \t", { request_id })
  console.log("status da recompensa \t", requestData)

  // criação de campanha
  // const data = await createCampaign({
  //   access_token,
  // })
  // console.log(data)
}

main()

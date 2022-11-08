import minubizClient from "../clients/minubiz/index.js"
import { randomUUID } from "crypto"

export const sendRequest = async ({ experience, mobile, access_token }) => {
  const order_id = randomUUID()

  const { request_id } = await minubizClient.postRequest({
    experience,
    mobile,
    order_id,
    access_token,
  })

  return {
    request_id,
  }
}

export const getRequest = async ({ experience, request_id, access_token }) => {
  const {
    requestId,
    value,
    delivered,
    canceled,
    status,
    detail,
    createdAt,
    concludedAt,
  } = await minubizClient.getRequest({
    experience,
    request_id,
    access_token,
  })

  return {
    requestId,
    value,
    delivered,
    canceled,
    status,
    detail,
    createdAt,
    concludedAt,
  }
}

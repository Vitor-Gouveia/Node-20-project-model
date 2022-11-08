import axiosWrapper from "../../utils/axios-wrapper.js"

const minubizUrl = "https://api-dev.bonuz.com/business-api"

export default {
  async createCampaign({ access_token }) {
    const { data } = await axiosWrapper({
      url: `${minubizUrl}/campaigns`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      body: {
        type: "pre-qualified-bonus",
        startDate: new Date(2021, 10, 12),
        endDate: new Date(2023, 10, 12),
        description: "Descrição da campanha",
        goals: [
          "Aquisição de clientes",
          "Retenção e fidelização",
          "Relacionamento",
        ],
        expectedReach: 10,
        experience: {
          title: "R$10 em bônus a cada R$100 em compras",
          sponsor: "Conveniência Central",
        },
        settings: {
          rewardLimit: {
            quantity: 1,
            period: "once",
          },
        },
      },
    })
    console.log(status)
    return data
  },
  async getRequest({ experience, request_id, access_token }) {
    // const { data } = await axiosWrapper({
    //   url: `${minubizUrl}/experiences/${experience}/requests/${request_id}`,
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${access_token}`,
    //   },
    // })

    // return data
    return {
      requestId: "636a9b1794689d5ab0544293",
      value: undefined,
      delivered: {},
      canceled: {},
      status: "Processing",
      detail: undefined,
      createdAt: "2022-11-08T18:08:23.145Z",
      concludedAt: undefined,
    }
  },
  async postRequest({ experience, mobile, order_id, access_token }) {
    // const { data } = await axiosWrapper({
    //   url: `${minubizUrl}/requests`,
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${access_token}`,
    //   },
    //   body: {
    //     experience,
    //     data: {
    //       mobile,
    //       order_id,
    //     },
    //   },
    // })
    // return {
    //   request_id: data._id,
    // }

    return { request_id: "636a9b1794689d5ab0544293" }
  },
  async authenticate({ client_id, client_secret }) {
    // const { data } = await axiosWrapper({
    //   url: `${minubizUrl}/oauth/token`,
    //   method: "POST",
    //   body: {
    //     client_id,
    //     client_secret,
    //   },
    // })

    // return {
    //   access_token: data.access_token,
    //   expires_in: data.expires_in,
    // }
    return {
      access_token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1fa1VRTUMtclVBV1RfZnczYkZieSJ9.eyJodHRwczovL21pbnUuYml6L2NsaWVudE1ldGFkYXRhIjp7ImFjY291bnRVc2VySWQiOiI2MzU4NDI5MDRiYjNkMTBkMzM0NTU1YzIiLCJhY2NvdW50VXNlclRva2VuIjoiZG1sMGIzSXVaMjkxZG1WcFlVQnRhVzUxTG1Odk9tRlFjMHM0YjNWSyIsImJvbnV6QWNjb3VudElkIjoiNjM1ODQyOTA0YmIzZDEwZDMzNDU1NWJlIn0sImlzcyI6Imh0dHBzOi8vbWludS1iaXotZGV2LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJQeWpLS0M4OWk3d1NTWWhIQWp1MkhyME05OFpTdXhaWkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9taW51LmJpei9hcGkvIiwiaWF0IjoxNjY3OTMwNjcxLCJleHAiOjE2Njc5NDUwNzEsImF6cCI6IlB5aktLQzg5aTd3U1NZaEhBanUySHIwTTk4WlN1eFpaIiwic2NvcGUiOiJjcmVhdGU6Y2FtcGFpZ25zIGVkaXQ6Y2FtcGFpZ25zIHZpZXc6Y2FtcGFpZ25zIHVwbG9hZDpyZXdhcmRfZmlsZXMgdmlldzpkYXNoYm9hcmRzIG1hbmFnZTphY2NvdW50cyB2aWV3OmludmVzdG1lbnRfdmFsdWUgY3JlYXRlOnJlcXVlc3RzIGNyZWF0ZTp1bml0YXJ5X3Jld2FyZCByZWFkOnJlcXVlc3RzIHZpZXc6ZXhjbHVzaXZlX3ByaXplcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbImNyZWF0ZTpjYW1wYWlnbnMiLCJlZGl0OmNhbXBhaWducyIsInZpZXc6Y2FtcGFpZ25zIiwidXBsb2FkOnJld2FyZF9maWxlcyIsInZpZXc6ZGFzaGJvYXJkcyIsIm1hbmFnZTphY2NvdW50cyIsInZpZXc6aW52ZXN0bWVudF92YWx1ZSIsImNyZWF0ZTpyZXF1ZXN0cyIsImNyZWF0ZTp1bml0YXJ5X3Jld2FyZCIsInJlYWQ6cmVxdWVzdHMiLCJ2aWV3OmV4Y2x1c2l2ZV9wcml6ZXMiXX0.wnxe5tNgUmHbGntxQgjSqZvtZrctDiqQOk9OoHazMm1Byh81gzaVjwNPGRSN4r-IMyK7VW_qPhsph9beifJHyDAV_iGR23HN_EYMuHTFnENygj_3rYhroxAu2JaAOriLKW_T8Rkqr6UJ-F3fJo1aXcBLsuROzDIc9L3vCABdoRyPdjIF1tpQTF-PUnTu6llpy1eHqbfJEH3DfFnjtxPn1C9kJfGTCXoTr3--T9HGBhWBgyAnbCPOAzXgjE4QgRdOlf6aE1OWxT7-hPxZ5UA4EvAdT5lTn9jpWM6FB6bSozSlsSSln1-JnebjXoXbozfK20vXBRhr8CLBUfcIto2v5A",
      expires_in: 14170,
    }
  },
}

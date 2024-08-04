import ky from "ky"

export const datoClient = ky.create({
  prefixUrl: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
  },
})

import { DateTime } from "luxon"

export const formatTime = (date: DateTime) =>
  date.toLocaleString({ hour: "numeric", minute: "numeric" })

export const parseAuDate = (date: string) =>
  DateTime.fromJSDate(new Date(date), { zone: "Australia/Sydney" })
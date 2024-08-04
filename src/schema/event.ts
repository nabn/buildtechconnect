export type Event = {
  id: string
  title: string
  notes: string
  start: string
  end: string
  link: string
  fee: number
  isOnline: boolean
  mapLink: string
  eventType: string
  venueName: string
  organiser: Array<{ name: string }>
  _status: string
  _firstPublishedAt: string
}

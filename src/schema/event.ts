export type Event = {
  id: string
  title: string
  notes: string
  start: string
  end: string
  link: string
  fee: string
  isOnline: boolean
  mapLink: string
  eventType: string
  venueName: string
  organiser: {
    id: string
  }
  _status: string
  _firstPublishedAt: string
}

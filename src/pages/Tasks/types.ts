export type StatusColor = 'green' | 'yellow' | 'red'

export type StatusCounts = {
  green: number
  yellow: number
  red: number
}

export type Task = {
  title: string
  subtitle: string
  status: StatusColor
  initials: string
  estimate: string
}

export type Category = {
  name: string
  counts: StatusCounts
  color: string
}

export type StatusCounts = {
  green: number
  yellow: number
  red: number
}

export type Category = {
  name: string
  counts: StatusCounts
  color: string
}

export const categories: Category[] = [
  {
    name: 'Tickets',
    counts: { green: 2, yellow: 2, red: 2 },
    color: 'bg-violet-500',
  },
  {
    name: 'Helping',
    counts: { green: 3, yellow: 3, red: 0 },
    color: 'bg-cyan-500',
  },
  {
    name: 'Meetings',
    counts: { green: 2, yellow: 3, red: 1 },
    color: 'bg-pink-500',
  },
  {
    name: 'To-dos',
    counts: { green: 1, yellow: 3, red: 2 },
    color: 'bg-orange-500',
  },
  {
    name: 'PRs',
    counts: { green: 3, yellow: 1, red: 2 },
    color: 'bg-emerald-500',
  },
  {
    name: 'Checks',
    counts: { green: 4, yellow: 2, red: 0 },
    color: 'bg-blue-500',
  },
]

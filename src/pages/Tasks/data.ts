import type { Task, Category } from './types'

export const tasks: Task[] = [
  {
    title: 'Quick little summary of where you last left it',
    subtitle: 'Started 2h ago • 60% complete',
    status: 'green',
    initials: 'SM',
    estimate: '~30min',
  },
  {
    title: "You haven't picked this up yet but it's due tomorrow",
    subtitle: 'Due tomorrow 2pm • Not started',
    status: 'yellow',
    initials: 'MD',
    estimate: '~2hrs',
  },
  {
    title: 'Similar sort of example task',
    subtitle: 'Waiting on response • Blocked',
    status: 'red',
    initials: 'LG',
    estimate: '~4hrs',
  },
]

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

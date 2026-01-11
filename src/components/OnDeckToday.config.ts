export type Task = {
  title: string
  subtitle: string
  status: 'green' | 'yellow' | 'red'
  initials: string
  estimate: string
}

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

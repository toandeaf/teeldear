export const timeBetween = (dateString: string): string => {
  const date1 = new Date(dateString).toLocaleString()

  // Parse the date strings into Date objects
  const parseDate = (dateString: string) => {
    const [datePart, timePart] = dateString.split(', ')
    const [day, month, year] = datePart.split('/').map(Number)
    const [hours, minutes, seconds] = timePart.split(':').map(Number)
    return new Date(year, month - 1, day, hours, minutes, seconds)
  }

  const startDate = parseDate(date1)
  const endDate = new Date()

  // Calculate the difference in milliseconds
  // @ts-ignore
  const diffMs = Math.abs(endDate - startDate)

  // Calculate the difference in various units
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffHours =
    Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) % 24
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

  if (diffDays > 0) {
    return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`
  }

  if (diffHours > 0) {
    return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`
  }

  if (diffMinutes > 0) {
    return `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`
  }

  return 'Just now'
}

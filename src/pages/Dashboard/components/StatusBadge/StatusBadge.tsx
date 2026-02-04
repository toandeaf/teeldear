import type { FC } from 'react'
import type { ServiceStatus } from '../../types'

type StatusBadgeProps = {
  status: ServiceStatus
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    healthy: 'bg-emerald-400 border-emerald-600',
    warning: 'bg-yellow-400 border-yellow-600',
    degraded: 'bg-orange-400 border-orange-600',
    error: 'bg-red-400 border-red-600',
  }

  return (
    <span
      className={`h-3 w-3 shrink-0 rounded-full border-2 ${styles[status]}`}
    />
  )
}

import type { FC } from 'react'
import GitHubDashboard from './components/GitHubDashboard'
import AWSDashboard from './components/AWSDashboard'
import KubernetesDashboard from './components/KubernetesDashboard'
import DatadogDashboard from './components/DatadogDashboard'

export const Dashboard: FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
      <GitHubDashboard />
      <AWSDashboard />
      <KubernetesDashboard />
      <DatadogDashboard />
    </div>
  )
}

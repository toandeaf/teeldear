import type { FC } from 'react'
import { Server, AlertTriangle } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import StatusBadge from '../StatusBadge'
import { awsServices, awsAlerts } from '../../data'

export const AWSDashboard: FC = () => (
  <DashboardCard
    title="AWS"
    icon={<Server size={20} className="text-white" strokeWidth={3} />}
    headerColor="bg-orange-500"
  >
    <div className="space-y-3">
      {awsServices.map((service) => (
        <div
          key={service.name}
          className="flex items-center justify-between rounded-lg border-2 border-black bg-white p-3"
        >
          <div className="flex items-center gap-3">
            <StatusBadge status={service.status} />
            <div>
              <span className="font-bold text-sm">{service.name}</span>
              <div className="text-xs text-zinc-600">
                {'running' in service &&
                  'total' in service &&
                  `${service.running}/${service.total} running`}
                {'invocations' in service &&
                  `${service.invocations} invocations`}
                {'storage' in service && `${service.storage} stored`}
              </div>
            </div>
          </div>
          <div className="text-right text-xs">
            {'errors' in service && service.errors > 0 && (
              <span className="text-red-500 font-mono">
                {service.errors} errors
              </span>
            )}
            {'requests' in service && (
              <span className="text-zinc-600">{service.requests} req</span>
            )}
            {'desired' in service &&
              'running' in service &&
              service.running < service.desired && (
                <span className="text-orange-500 font-mono">
                  {service.desired - service.running} pending
                </span>
              )}
          </div>
        </div>
      ))}
    </div>
    {awsAlerts.length > 0 && (
      <div className="mt-4 border-t-2 border-zinc-200 pt-3">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle size={14} className="text-orange-500" />
          <span className="text-xs font-bold uppercase text-zinc-600">
            Active Alerts
          </span>
        </div>
        <div className="space-y-2">
          {awsAlerts.map((alert, i) => (
            <div
              key={i}
              className={`flex items-center justify-between rounded border-2 px-2 py-1.5 text-xs ${
                alert.severity === 'error'
                  ? 'border-red-300 bg-red-50'
                  : 'border-yellow-300 bg-yellow-50'
              }`}
            >
              <span>
                <span className="font-mono font-bold">[{alert.service}]</span>{' '}
                {alert.message}
              </span>
              <span className="text-zinc-600">{alert.time}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </DashboardCard>
)

import type { FC } from 'react'
import { BarChart3, HardDrive, Database, Zap, Bell } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import { datadogMetrics } from '../../data'

export const DatadogDashboard: FC = () => (
  <DashboardCard
    title="Datadog"
    icon={<BarChart3 size={20} className="text-white" strokeWidth={3} />}
    headerColor="bg-purple-600"
  >
    {/* APM Metrics */}
    <div className="grid grid-cols-4 gap-2 mb-4">
      <div className="rounded-lg border-2 border-black bg-white p-2 text-center">
        <div className="text-lg font-black text-zinc-800">
          {(datadogMetrics.apm.requestsPerSec / 1000).toFixed(1)}k
        </div>
        <div className="text-[10px] uppercase text-zinc-600 font-semibold">
          Req/sec
        </div>
      </div>
      <div className="rounded-lg border-2 border-black bg-white p-2 text-center">
        <div className="text-lg font-black text-emerald-600">
          {datadogMetrics.apm.avgLatency}ms
        </div>
        <div className="text-[10px] uppercase text-zinc-600 font-semibold">
          Avg Latency
        </div>
      </div>
      <div className="rounded-lg border-2 border-black bg-white p-2 text-center">
        <div className="text-lg font-black text-yellow-600">
          {datadogMetrics.apm.p99Latency}ms
        </div>
        <div className="text-[10px] uppercase text-zinc-600 font-semibold">
          P99
        </div>
      </div>
      <div className="rounded-lg border-2 border-black bg-white p-2 text-center">
        <div className="text-lg font-black text-red-600">
          {datadogMetrics.apm.errorRate}%
        </div>
        <div className="text-[10px] uppercase text-zinc-600 font-semibold">
          Error Rate
        </div>
      </div>
    </div>

    {/* Infrastructure */}
    <div className="flex items-center gap-4 rounded-lg border-2 border-black bg-white p-3 mb-4">
      <div className="flex items-center gap-2">
        <HardDrive size={14} className="text-zinc-600" />
        <span className="text-xs text-zinc-700">
          <span className="font-bold">
            {datadogMetrics.infrastructure.hosts}
          </span>{' '}
          hosts
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Database size={14} className="text-zinc-600" />
        <span className="text-xs text-zinc-700">
          <span className="font-bold">
            {datadogMetrics.infrastructure.containers}
          </span>{' '}
          containers
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Zap size={14} className="text-zinc-600" />
        <span className="text-xs text-zinc-700">
          <span className="font-bold">
            {datadogMetrics.infrastructure.processes}
          </span>{' '}
          processes
        </span>
      </div>
    </div>

    {/* Monitor Status */}
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xs font-bold uppercase text-zinc-600">
        Monitors:
      </span>
      <div className="flex gap-1">
        <span className="rounded bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-xs font-bold text-emerald-700">
          {datadogMetrics.monitors.ok} OK
        </span>
        <span className="rounded bg-yellow-100 border border-yellow-300 px-2 py-0.5 text-xs font-bold text-yellow-700">
          {datadogMetrics.monitors.warn} Warn
        </span>
        <span className="rounded bg-red-100 border border-red-300 px-2 py-0.5 text-xs font-bold text-red-700">
          {datadogMetrics.monitors.alert} Alert
        </span>
        <span className="rounded bg-zinc-100 border border-zinc-300 px-2 py-0.5 text-xs font-bold text-zinc-600">
          {datadogMetrics.monitors.noData} No Data
        </span>
      </div>
    </div>

    {/* Alerts */}
    <div className="border-t-2 border-zinc-200 pt-3">
      <div className="flex items-center gap-2 mb-2">
        <Bell size={14} className="text-purple-500" />
        <span className="text-xs font-bold uppercase text-zinc-600">
          Recent Alerts
        </span>
      </div>
      <div className="space-y-2">
        {datadogMetrics.alerts.map((alert, i) => (
          <div
            key={i}
            className={`flex items-center justify-between rounded border-2 px-2 py-1.5 text-xs ${
              alert.severity === 'critical'
                ? 'border-red-300 bg-red-50'
                : 'border-yellow-300 bg-yellow-50'
            }`}
          >
            <span className="truncate flex-1">{alert.title}</span>
            <span className="text-zinc-600 ml-2">{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  </DashboardCard>
)

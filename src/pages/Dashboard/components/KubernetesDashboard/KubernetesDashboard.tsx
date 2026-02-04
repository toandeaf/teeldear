import type { FC } from 'react'
import { Box, Cpu, MemoryStick } from 'lucide-react'
import DashboardCard from '../DashboardCard'
import StatusBadge from '../StatusBadge'
import ProgressBar from '../ProgressBar'
import { kubernetesClusters } from '../../data'

export const KubernetesDashboard: FC = () => (
  <DashboardCard
    title="Kubernetes"
    icon={<Box size={20} className="text-white" strokeWidth={3} />}
    headerColor="bg-blue-600"
  >
    <div className="space-y-4">
      {kubernetesClusters.map((cluster) => (
        <div
          key={cluster.name}
          className="rounded-lg border-2 border-black bg-white p-3"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <StatusBadge status={cluster.status} />
              <span className="font-bold text-sm text-zinc-600">
                {cluster.name}
              </span>
            </div>
            <span className="text-xs text-zinc-600">
              {cluster.nodes.ready}/{cluster.nodes.total} nodes
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center mb-3">
            <div className="rounded border border-zinc-300 bg-zinc-100 p-2">
              <div className="text-lg font-black text-emerald-600">
                {cluster.pods.running}
              </div>
              <div className="text-[10px] uppercase text-zinc-600 font-semibold">
                Running
              </div>
            </div>
            <div className="rounded border border-zinc-300 bg-zinc-100 p-2">
              <div className="text-lg font-black text-yellow-600">
                {cluster.pods.pending}
              </div>
              <div className="text-[10px] uppercase text-zinc-600 font-semibold">
                Pending
              </div>
            </div>
            <div className="rounded border border-zinc-300 bg-zinc-100 p-2">
              <div className="text-lg font-black text-red-600">
                {cluster.pods.failed}
              </div>
              <div className="text-[10px] uppercase text-zinc-600 font-semibold">
                Failed
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <Cpu size={12} className="text-zinc-600" />
              <span className="w-10 text-zinc-700">CPU</span>
              <div className="flex-1">
                <ProgressBar
                  value={cluster.cpu}
                  color={
                    cluster.cpu > 80
                      ? 'bg-red-500'
                      : cluster.cpu > 60
                        ? 'bg-yellow-500'
                        : 'bg-emerald-500'
                  }
                />
              </div>
              <span className="font-mono w-10 text-right">{cluster.cpu}%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <MemoryStick size={12} className="text-zinc-600" />
              <span className="w-10 text-zinc-700">Mem</span>
              <div className="flex-1">
                <ProgressBar
                  value={cluster.memory}
                  color={
                    cluster.memory > 80
                      ? 'bg-red-500'
                      : cluster.memory > 60
                        ? 'bg-yellow-500'
                        : 'bg-emerald-500'
                  }
                />
              </div>
              <span className="font-mono w-10 text-right">
                {cluster.memory}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </DashboardCard>
)

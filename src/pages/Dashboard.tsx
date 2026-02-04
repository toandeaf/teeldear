import type { FC } from 'react'
import {
  GitPullRequest,
  GitMerge,
  MessageSquare,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Server,
  Database,
  HardDrive,
  Activity,
  Box,
  Cpu,
  MemoryStick,
  BarChart3,
  Bell,
  Zap,
} from 'lucide-react'

// ============================================================================
// MOCK DATA
// ============================================================================

const githubPRs = [
  {
    id: 1,
    title: 'feat: Add user authentication flow',
    author: 'sarah-dev',
    status: 'approved' as const,
    comments: 12,
    reviewers: ['mike', 'jenny'],
    branch: 'feature/auth',
    updatedAt: '2h ago',
    checks: 'passing' as const,
  },
  {
    id: 2,
    title: 'fix: Resolve memory leak in worker pool',
    author: 'jake-eng',
    status: 'changes_requested' as const,
    comments: 5,
    reviewers: ['sarah-dev'],
    branch: 'fix/memory-leak',
    updatedAt: '4h ago',
    checks: 'failing' as const,
  },
  {
    id: 3,
    title: 'chore: Update dependencies to latest',
    author: 'dependabot',
    status: 'pending' as const,
    comments: 0,
    reviewers: [],
    branch: 'deps/update',
    updatedAt: '1d ago',
    checks: 'passing' as const,
  },
  {
    id: 4,
    title: 'feat: Implement rate limiting middleware',
    author: 'mike',
    status: 'pending' as const,
    comments: 3,
    reviewers: ['sarah-dev', 'jake-eng'],
    branch: 'feature/rate-limit',
    updatedAt: '30m ago',
    checks: 'running' as const,
  },
]

const awsServices = [
  { name: 'EC2 Instances', running: 12, total: 15, status: 'healthy' as const },
  { name: 'RDS Databases', running: 3, total: 3, status: 'healthy' as const },
  {
    name: 'Lambda Functions',
    invocations: '45.2k',
    errors: 12,
    status: 'warning' as const,
  },
  {
    name: 'S3 Buckets',
    storage: '2.4 TB',
    requests: '1.2M',
    status: 'healthy' as const,
  },
  { name: 'ECS Tasks', running: 8, desired: 10, status: 'degraded' as const },
]

const awsAlerts = [
  {
    service: 'EC2',
    message: 'High CPU on prod-api-3',
    severity: 'warning' as const,
    time: '15m ago',
  },
  {
    service: 'ECS',
    message: '2 tasks failed to start',
    severity: 'error' as const,
    time: '1h ago',
  },
]

const kubernetesClusters = [
  {
    name: 'prod-us-east',
    nodes: { ready: 8, total: 8 },
    pods: { running: 124, pending: 2, failed: 0 },
    cpu: 67,
    memory: 72,
    status: 'healthy' as const,
  },
  {
    name: 'prod-eu-west',
    nodes: { ready: 5, total: 6 },
    pods: { running: 89, pending: 0, failed: 3 },
    cpu: 45,
    memory: 58,
    status: 'warning' as const,
  },
  {
    name: 'staging',
    nodes: { ready: 3, total: 3 },
    pods: { running: 42, pending: 0, failed: 0 },
    cpu: 23,
    memory: 31,
    status: 'healthy' as const,
  },
]

const datadogMetrics = {
  apm: {
    requestsPerSec: 12453,
    avgLatency: 45,
    p99Latency: 234,
    errorRate: 0.12,
  },
  infrastructure: {
    hosts: 28,
    containers: 156,
    processes: 892,
  },
  alerts: [
    {
      title: 'High error rate on /api/checkout',
      severity: 'critical' as const,
      time: '5m ago',
    },
    {
      title: 'Latency spike in payment-service',
      severity: 'warning' as const,
      time: '23m ago',
    },
    {
      title: 'Memory usage > 85% on worker-pool',
      severity: 'warning' as const,
      time: '1h ago',
    },
  ],
  monitors: { ok: 42, warn: 3, alert: 1, noData: 2 },
}

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

const DashboardCard: FC<{
  title: string
  icon: React.ReactNode
  headerColor: string
  children: React.ReactNode
}> = ({ title, icon, headerColor, children }) => (
  <div className="flex flex-col border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <div
      className={`flex items-center gap-2 border-b-4 border-black ${headerColor} px-4 py-3 flex-shrink-0`}
    >
      {icon}
      <h3 className="text-base font-black uppercase tracking-wide text-white">
        {title}
      </h3>
    </div>
    <div className="bg-zinc-50 p-4">{children}</div>
  </div>
)

const StatusBadge: FC<{
  status: 'healthy' | 'warning' | 'degraded' | 'error'
}> = ({ status }) => {
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

const ProgressBar: FC<{ value: number; color?: string }> = ({
  value,
  color = 'bg-violet-500',
}) => (
  <div className="h-2 w-full rounded-full bg-zinc-200 border border-black">
    <div
      className={`h-full rounded-full ${color}`}
      style={{ width: `${Math.min(value, 100)}%` }}
    />
  </div>
)

// ============================================================================
// GITHUB PR DASHBOARD
// ============================================================================

const PRStatusIcon: FC<{
  status: 'approved' | 'changes_requested' | 'pending'
}> = ({ status }) => {
  if (status === 'approved')
    return (
      <CheckCircle2 size={16} className="text-emerald-600" strokeWidth={3} />
    )
  if (status === 'changes_requested')
    return <XCircle size={16} className="text-red-500" strokeWidth={3} />
  return <Clock size={16} className="text-yellow-600" strokeWidth={3} />
}

const ChecksIcon: FC<{ checks: 'passing' | 'failing' | 'running' }> = ({
  checks,
}) => {
  if (checks === 'passing')
    return <CheckCircle2 size={14} className="text-emerald-500" />
  if (checks === 'failing')
    return <XCircle size={14} className="text-red-500" />
  return <Activity size={14} className="text-yellow-500 animate-pulse" />
}

const GitHubDashboard: FC = () => (
  <DashboardCard
    title="GitHub PRs"
    icon={<GitPullRequest size={20} className="text-white" strokeWidth={3} />}
    headerColor="bg-zinc-800"
  >
    <div className="space-y-3">
      {githubPRs.map((pr) => (
        <div
          key={pr.id}
          className="flex items-start gap-3 rounded-lg border-2 border-black bg-white p-3 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="mt-1">
            {pr.status === 'approved' ? (
              <GitMerge
                size={18}
                className="text-violet-600"
                strokeWidth={2.5}
              />
            ) : (
              <GitPullRequest
                size={18}
                className="text-zinc-600"
                strokeWidth={2.5}
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-zinc-900 truncate">
                {pr.title}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-1 text-xs text-zinc-600">
              <span className="font-mono bg-zinc-200 px-1.5 py-0.5 rounded border border-zinc-400 text-zinc-700">
                {pr.branch}
              </span>
              <span>by {pr.author}</span>
              <span className="flex items-center gap-1">
                <MessageSquare size={12} /> {pr.comments}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <ChecksIcon checks={pr.checks} />
              <PRStatusIcon status={pr.status} />
            </div>
            <span className="text-xs text-zinc-600">{pr.updatedAt}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center justify-between border-t-2 border-zinc-200 pt-3">
      <div className="flex gap-4 text-xs">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> 1 Approved
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-yellow-400" /> 2 Pending
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-red-400" /> 1 Changes
        </span>
      </div>
    </div>
  </DashboardCard>
)

// ============================================================================
// AWS DASHBOARD
// ============================================================================

const AWSDashboard: FC = () => (
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
            {'desired' in service && service.running < service.desired && (
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

// ============================================================================
// KUBERNETES DASHBOARD
// ============================================================================

const KubernetesDashboard: FC = () => (
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
              <span className="font-bold text-sm">{cluster.name}</span>
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

// ============================================================================
// DATADOG DASHBOARD
// ============================================================================

const DatadogDashboard: FC = () => (
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

// ============================================================================
// MAIN DASHBOARD
// ============================================================================

export const Dashboard: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full items-start">
      <GitHubDashboard />
      <AWSDashboard />
      <KubernetesDashboard />
      <DatadogDashboard />
    </div>
  )
}

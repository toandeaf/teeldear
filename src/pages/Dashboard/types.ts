export type PRStatus = 'approved' | 'changes_requested' | 'pending'
export type CheckStatus = 'passing' | 'failing' | 'running'
export type ServiceStatus = 'healthy' | 'warning' | 'degraded' | 'error'
export type AlertSeverity = 'warning' | 'error' | 'critical'

export type GitHubPR = {
  id: number
  title: string
  author: string
  status: PRStatus
  comments: number
  reviewers: string[]
  branch: string
  updatedAt: string
  checks: CheckStatus
}

export type AWSServiceBase = {
  name: string
  status: ServiceStatus
}

export type AWSServiceEC2 = AWSServiceBase & {
  running: number
  total: number
}

export type AWSServiceRDS = AWSServiceBase & {
  running: number
  total: number
}

export type AWSServiceLambda = AWSServiceBase & {
  invocations: string
  errors: number
}

export type AWSServiceS3 = AWSServiceBase & {
  storage: string
  requests: string
}

export type AWSServiceECS = AWSServiceBase & {
  running: number
  desired: number
}

export type AWSService =
  | AWSServiceEC2
  | AWSServiceRDS
  | AWSServiceLambda
  | AWSServiceS3
  | AWSServiceECS

export type AWSAlert = {
  service: string
  message: string
  severity: 'warning' | 'error'
  time: string
}

export type KubernetesCluster = {
  name: string
  nodes: { ready: number; total: number }
  pods: { running: number; pending: number; failed: number }
  cpu: number
  memory: number
  status: ServiceStatus
}

export type DatadogAlert = {
  title: string
  severity: AlertSeverity
  time: string
}

export type DatadogMetrics = {
  apm: {
    requestsPerSec: number
    avgLatency: number
    p99Latency: number
    errorRate: number
  }
  infrastructure: {
    hosts: number
    containers: number
    processes: number
  }
  alerts: DatadogAlert[]
  monitors: { ok: number; warn: number; alert: number; noData: number }
}

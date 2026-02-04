import type {
  GitHubPR,
  AWSService,
  AWSAlert,
  KubernetesCluster,
  DatadogMetrics,
} from './types'

export const githubPRs: GitHubPR[] = [
  {
    id: 1,
    title: 'feat: Add user authentication flow',
    author: 'sarah-dev',
    status: 'approved',
    comments: 12,
    reviewers: ['mike', 'jenny'],
    branch: 'feature/auth',
    updatedAt: '2h ago',
    checks: 'passing',
  },
  {
    id: 2,
    title: 'fix: Resolve memory leak in worker pool',
    author: 'jake-eng',
    status: 'changes_requested',
    comments: 5,
    reviewers: ['sarah-dev'],
    branch: 'fix/memory-leak',
    updatedAt: '4h ago',
    checks: 'failing',
  },
  {
    id: 3,
    title: 'chore: Update dependencies to latest',
    author: 'dependabot',
    status: 'pending',
    comments: 0,
    reviewers: [],
    branch: 'deps/update',
    updatedAt: '1d ago',
    checks: 'passing',
  },
  {
    id: 4,
    title: 'feat: Implement rate limiting middleware',
    author: 'mike',
    status: 'pending',
    comments: 3,
    reviewers: ['sarah-dev', 'jake-eng'],
    branch: 'feature/rate-limit',
    updatedAt: '30m ago',
    checks: 'running',
  },
]

export const awsServices: AWSService[] = [
  { name: 'EC2 Instances', running: 12, total: 15, status: 'healthy' },
  { name: 'RDS Databases', running: 3, total: 3, status: 'healthy' },
  { name: 'Lambda Functions', invocations: '45.2k', errors: 12, status: 'warning' },
  { name: 'S3 Buckets', storage: '2.4 TB', requests: '1.2M', status: 'healthy' },
  { name: 'ECS Tasks', running: 8, desired: 10, status: 'degraded' },
]

export const awsAlerts: AWSAlert[] = [
  {
    service: 'EC2',
    message: 'High CPU on prod-api-3',
    severity: 'warning',
    time: '15m ago',
  },
  {
    service: 'ECS',
    message: '2 tasks failed to start',
    severity: 'error',
    time: '1h ago',
  },
]

export const kubernetesClusters: KubernetesCluster[] = [
  {
    name: 'prod-us-east',
    nodes: { ready: 8, total: 8 },
    pods: { running: 124, pending: 2, failed: 0 },
    cpu: 67,
    memory: 72,
    status: 'healthy',
  },
  {
    name: 'prod-eu-west',
    nodes: { ready: 5, total: 6 },
    pods: { running: 89, pending: 0, failed: 3 },
    cpu: 45,
    memory: 58,
    status: 'warning',
  },
  {
    name: 'staging',
    nodes: { ready: 3, total: 3 },
    pods: { running: 42, pending: 0, failed: 0 },
    cpu: 23,
    memory: 31,
    status: 'healthy',
  },
]

export const datadogMetrics: DatadogMetrics = {
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
      severity: 'critical',
      time: '5m ago',
    },
    {
      title: 'Latency spike in payment-service',
      severity: 'warning',
      time: '23m ago',
    },
    {
      title: 'Memory usage > 85% on worker-pool',
      severity: 'warning',
      time: '1h ago',
    },
  ],
  monitors: { ok: 42, warn: 3, alert: 1, noData: 2 },
}

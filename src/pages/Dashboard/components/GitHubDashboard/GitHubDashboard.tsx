import type { FC } from 'react'
import {
  GitPullRequest,
  GitMerge,
  MessageSquare,
  Clock,
  CheckCircle2,
  XCircle,
  Activity,
} from 'lucide-react'
import DashboardCard from '../DashboardCard'
import { githubPRs } from '../../data'
import type { PRStatus, CheckStatus } from '../../types'

const PRStatusIcon: FC<{ status: PRStatus }> = ({ status }) => {
  if (status === 'approved')
    return (
      <CheckCircle2 size={16} className="text-emerald-600" strokeWidth={3} />
    )
  if (status === 'changes_requested')
    return <XCircle size={16} className="text-red-500" strokeWidth={3} />
  return <Clock size={16} className="text-yellow-600" strokeWidth={3} />
}

const ChecksIcon: FC<{ checks: CheckStatus }> = ({ checks }) => {
  if (checks === 'passing')
    return <CheckCircle2 size={14} className="text-emerald-500" />
  if (checks === 'failing')
    return <XCircle size={14} className="text-red-500" />
  return <Activity size={14} className="text-yellow-500 animate-pulse" />
}

export const GitHubDashboard: FC = () => (
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
    <div className="mt-4 flex items-center justify-between border-t-2 border-zinc-200 pt-3 text-zinc-600">
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

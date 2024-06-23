import { PullRequest, ResponseData } from './types.ts'

export interface PRWithRepo extends PullRequest {
  repository: string
}

export const flattenAll = (data: ResponseData): Array<PRWithRepo> => {
  const repos = data.viewer.repositories.nodes

  return repos.flatMap((repo) =>
    repo.pullRequests.nodes.map((pr) => ({
      repository: repo.name,
      ...pr,
    }))
  )
}

// const groupByUser = (data: ResponseData) => {}
//
// const groupByRepo = (data: ResponseData) => {}

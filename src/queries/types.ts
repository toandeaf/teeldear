export interface GraphQLQuery {
  query: string
}

export interface PullRequest {
  title: string
  url: string
  createdAt: string
  updatedAt: string
  author: Author
  changedFiles: number
  additions: number
  deletions: number
  labels: LabelConnection
}

export interface LabelConnection {
  nodes: Label[]
}

export interface Label {
  name: string
  color: string
  description: string | null
}

export interface Author {
  login: string
}

export interface Repository {
  name: string
  pullRequests: PullRequestConnection
}

export interface PullRequestConnection {
  nodes: PullRequest[]
}

export interface Repositories {
  nodes: Repository[]
}

export interface Viewer {
  repositories: Repositories
}

export interface ResponseData {
  viewer: Viewer
}

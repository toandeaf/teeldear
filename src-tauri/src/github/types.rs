use serde::{Deserialize, Serialize};

#[derive(Serialize)]
pub struct GraphQLQuery {
    pub query: String,
}

#[derive(Deserialize, Serialize)]
pub struct PullRequest {
    pub title: String,
    pub url: String,
    pub createdAt: String,
    pub updatedAt: String,
    pub author: Author,
    pub changedFiles: u8,
    pub additions: u32,
    pub deletions: u32,
    pub labels: LabelConnection,
}

#[derive(Deserialize, Serialize)]
pub struct LabelConnection {
    pub nodes: Vec<Label>,
}

#[derive(Deserialize, Serialize)]
pub struct Label {
    pub name: String,
    pub color: String,
    pub description: Option<String>,
}

#[derive(Deserialize, Serialize)]
pub struct Author {
    pub login: String,
}

#[derive(Deserialize, Serialize)]
pub struct Repository {
    pub name: String,
    pub pullRequests: PullRequestConnection,
}

#[derive(Deserialize, Serialize)]
pub struct PullRequestConnection {
    pub nodes: Vec<PullRequest>,
}

#[derive(Deserialize, Serialize)]
pub struct Repositories {
    pub nodes: Vec<Repository>,
}

#[derive(Deserialize, Serialize)]
pub struct Viewer {
    pub repositories: Repositories,
}

#[derive(Deserialize, Serialize)]
pub struct ResponseData {
    pub viewer: Viewer,
}

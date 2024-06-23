use crate::github::types::{GraphQLQuery, Repositories, ResponseData, Viewer};
use lazy_static::lazy_static;
use reqwest::Client;
use std::{env, fs};

lazy_static! {
    static ref GRAPHQL_CLIENT: Client = Client::new();
}

const DEFAULT_RESPONSE: Viewer = Viewer {
    repositories: Repositories { nodes: vec![] },
};

#[tauri::command]
pub async fn prs_please() -> Result<String, String> {
    let query_string = fs::read_to_string("queries/github/repo.graphql").unwrap();

    let query = GraphQLQuery {
        query: query_string,
    };

    let github_token: String =
        env::var("GITHUB_ACCESS_TOKEN").expect("Need to specify a valid GITHUB_ACCESS_TOKEN");

    let response = GRAPHQL_CLIENT
        .post("https://api.github.com/graphql")
        .bearer_auth(github_token)
        .json(&query)
        .header("User-Agent", "rust-graphql-client")
        .send()
        .await
        .expect("Failed to fetch.")
        .json::<serde_json::Value>()
        .await
        .expect("Failed to deserialize");

    if let Some(data) = response.get("data") {
        return if let Ok(value) = serde_json::to_string(data) {
            Ok(value)
        } else {
            Ok(serde_json::to_string(&DEFAULT_RESPONSE).expect("Sheesh!"))
        };
    }

    Ok(String::from("Sure"))
}

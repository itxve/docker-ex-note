use anyhow::{anyhow, Result};
use reqwest::{
    self,
    header::{HeaderMap, HeaderValue},
    Client,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct RqParams {
    pub url: String,
}

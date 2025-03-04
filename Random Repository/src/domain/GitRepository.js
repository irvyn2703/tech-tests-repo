class GitRepository {
  constructor({
    name,
    full_name,
    description,
    language,
    stargazers_count,
    forks_count,
    open_issues_count,
    html_url,
    forks,
    open_issues,
    clone_url,
  }) {
    this.repositoryName = name || full_name || "Unknown";
    this.description = description || "No description available";
    this.language = language || "Unknown";
    this.stars = stargazers_count || 0;
    this.forks = forks_count || forks || 0;
    this.issues = open_issues_count || open_issues || 0;
    this.url = html_url || clone_url || "#";
  }

  static fromJSONArray(arrayGitRepositories) {
    return arrayGitRepositories.map(
      (repository) => new GitRepository(repository)
    );
  }
}

export default GitRepository;

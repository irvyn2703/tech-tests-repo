import GitRepositoryService from "../services/GitRepositoryService";
import GitRepository from "../domain/GitRepository";

async function getRepository({ language, numPage }) {
  const response = await GitRepositoryService.getRepository({
    language,
    numPage,
  });

  console.log(response);
  const { items = null } = response;

  if (items) {
    const repositories = GitRepository.fromJSONArray(items);
    if (repositories.length === 1) {
      return repositories[0];
    }
  }

  return response;
}

export default { getRepository };

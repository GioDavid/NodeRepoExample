require("isomorphic-fetch");

export const fetchRepos = async (name: string): Promise<any> => {
    try {
      const repoURL: string = `https://api.github.com/users/${name}/repos`;
      const response = await fetch(repoURL);
      return response.json();
    } catch (error) {
      console.log("error", error);
    }
  };
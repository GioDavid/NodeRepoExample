import { Repo, Result } from "../types";

export const countOccurrences = (arr: Array<Repo>, val: string) =>
  arr.reduce((a, v) => (v.language === val ? a + 1 : a), 0);

export const countLanguages = (languages: Array<Repo>, data: Array<Repo>, res: Array<Result>): void => {
  let value: number = 0;
  languages.forEach(({language, repo}) => {
    value = countOccurrences(data, language);
    res.push({ language, value, repo });
  });
};

export const groupLanguages = (data: Array<Repo>): Array<Repo> => {
  return [...new Set(data.map((element) => ({ language: element.language, repo: element.repo })))];
};

export const differentFromNull = (data: Array<Repo>): Array<Repo> => {
  return data.filter((el: Repo) => el.language !== null);
};

export const writeInFile = (res: Array<Result>): void => {
  res.forEach((result: Result) => {
    process.stdout.write(`${result.language}, ${result.value}, ${result.repo}`);
    process.stdout.write("\n\n");
  });
};

export const setData = (data: Array<Repo>): void => {
  const filteredData: Array<Repo> = differentFromNull(
    data.map((el: Repo) => ({ language: el.language, repo: el.name }))
  );
  const languages: Array<Repo> = groupLanguages(
    differentFromNull(
      data.map((el: Repo) => ({
        language: el.language,
        repo: el.name,
      }))
    )
  );
  let res: Array<Result> = [];
  countLanguages(languages, filteredData, res);
  writeInFile(res);
};
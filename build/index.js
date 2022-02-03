"use strict";
// import fetch from 'node-fetch';
// let retrievedData: Array<Repo> = [];
// type Repo = {
//   language: string;
// }
// type Result = {
//   language: string;
//   value: number;
// }
// let res: Array<Result> =[];
// const countOccurrences = (arr: Array<string>, val: string) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
// const countLanguages = (languages: Array<string>, data: Array<string>): void =>{
//   let value: number = 0;
//   languages.forEach((language: string) => {
//     value = countOccurrences(data,language);
//     res.push({language, value})
//   });
//   console.log('ls: ', res);
// }
// const groupLanguages = (data: Array<string>): Array<string> => {
//   return [... new Set(data)];
// }
// const differentFromNull = (data: Array<string>): Array<string> => {
//   return data.filter( (el: string) => el !== null);
// }
// const writeInFile = (): void => {
//   res.forEach((result: Result) => {
//   // stdout.write(`${result.language}, ${result.value}`);
//   // stdout.write('\n\n');
// });
// }
// const setData = (data:Array<Repo>): void => {
//   console.log(`retrieved`);
//   retrievedData = data;
//   const filteredData:Array<string> = differentFromNull(retrievedData.map((el: Repo) => el.language));
//   const languages:Array<string> = groupLanguages(differentFromNull(retrievedData.map((el: Repo) => el.language)));
//   countLanguages(languages, filteredData);
// }
// const noop = (): void => {}
// console.log(`Type a name`);
// process.stdin.on('data', data => {
//     const repoURL: string = `https://api.github.com/users/${data.toString()}/repos`;
//     console.log('url: ', repoURL);
//     fetch(repoURL).then((response: any) => response.json())
//     .then(setData).catch(noop);
//     process.exit();
//   });
fetch('https://httpbin.org/post', {
    method: 'POST',
    body: 'a=1'
})
    .then(res => res.json())
    .then(json => {
    // Do something...
})
    .catch(err => console.log(err));

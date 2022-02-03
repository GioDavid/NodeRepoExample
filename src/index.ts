import { fetchRepos } from "./api";
import { setData } from "./helpers";

console.log(`Type a name`);

process.stdin.on("data", async (data) => {
  try {
    const result = await fetchRepos(data.toString());
    if(Array.isArray(result)) setData(result);
    process.exit();
  } catch (error) {
    console.log("error", error);
  }
});

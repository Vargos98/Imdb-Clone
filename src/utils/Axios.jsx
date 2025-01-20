import axios from "axios";
const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDY2Y2E0Mzk5NjQ4NTU1Y2UwYzJkMTEyNTVlOTRjYiIsIm5iZiI6MTczNzM1MjQ1MC4yMDg5OTk5LCJzdWIiOiI2NzhkZTUwMjQyZjI3Yzc1NGM2NTNkYzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.A6kwkpDVFRMwWVfxybwggZXoCRnviZwWhc32LfLwejQ'
  }
});

export default instance;
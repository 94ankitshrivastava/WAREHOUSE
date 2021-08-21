import axios from "axios";

const base_url = axios.create({
  baseURL: "https://reqres.in/api/",
  headers: { accept: "text/plain" },
});

export { base_url };

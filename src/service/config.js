import axios from "axios";

const tokenCybersoft="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MCIsIkhldEhhblN0cmluZyI6IjE0LzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDY0OTYwMDAwMCIsIm5iZiI6MTY2NTY4MDQwMCwiZXhwIjoxNjk0Nzk3MjAwfQ.5RzSzvDq8qA8Kfw0NePg5o7H-ZEqh0_tqOWRhEUSct8"
const BASE_URL = "https://airbnbnew.cybersoft.edu.vn/";
const configHeader = () => {
  return {
    tokenCybersoft : tokenCybersoft,
  };
};
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeader(),
});
// config axios instance

const localhostUrl = "http://localhost:8000";
const BASE_URL = process.env.BASE_URL || localhostUrl;

export function getBaseUrl() {
  if (!BASE_URL) {
    console.log("BASE_URL is not set, returning localhost:8000");
    return localhostUrl;
  }
  return BASE_URL.trim();
}
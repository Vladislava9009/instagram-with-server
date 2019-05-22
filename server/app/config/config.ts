require("dotenv").config();

const CLIENT_ID = process.env.DATABASE_CLIENT_ID;
const CLIENT_SECRET = process.env.DATABASE_CLIENT_SECRET;
const REDIRECT_URI = process.env.DATABASE_REDIRECT_URI;
const BASE_URL = process.env.DATABASE_BASE_URL;
const AUTH_URL = `${BASE_URL}/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code;`;

export const config = {
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  auth_url: AUTH_URL
};

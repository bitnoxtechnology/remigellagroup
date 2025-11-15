import { getEnv } from "../lib/helpers";

const appConfig = () => ({
  PORT: getEnv("PORT", "3000"),
  HOST: getEnv("HOST"),
  API_BASE_PATH: getEnv("API_BASE_PATH", "/api/v1"),
  CLIENT_ORIGIN: getEnv("CLIENT_ORIGIN"),
  CLIENT_ORIGIN_2: getEnv("CLIENT_ORIGIN_2"),
  CLIENT_ORIGIN_3: getEnv("CLIENT_ORIGIN_3"),
  NODE_ENV: getEnv("NODE_ENV"),
  RESEND_API_KEY: getEnv("RESEND_API_KEY"),
  MONGO_URI: getEnv("MONGO_URI", "placeholder"),
  REDIS_USER: getEnv("REDIS_USER", "placeholder"),
  REDIS_PASSWORD: getEnv("REDIS_PASSWORD", "placeholder"),
  REDIS_HOST: getEnv("REDIS_HOST", "placeholder"),
  REDIS_PORT: getEnv("REDIS_PORT", "placeholder"),

  JWT: {
    ACCESS_SECRET: getEnv("JWT_ACCESS_SECRET", "placeholder"),
    ACCESS_EXPIRES_IN: getEnv("JWT_ACCESS_EXPIRES_IN", "1d"),
    REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET", "placeholder"),
    REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "7d"),
  },
});

export const config = appConfig();

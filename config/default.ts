interface Config {
  port: number;
  host?: string;
  dbUrl: string;
  jwt_secret: string;
}
const config: Config = {
  port: 8080,
  host: "localhost",
  dbUrl: "mongodb://localhost:27017",
  jwt_secret:
    "c4d763106d90ae4d704db14e1abdfa8b7af27e92bdca57b0ccfbccf8eb684cdf",
};

export default config;

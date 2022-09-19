interface Config {
  port: number;
  host?: string;
  dbUrl: string;
}
const config: Config = {
  port: 8080,
  host: "localhost",
  dbUrl: "mongodb://localhost:27017",
};

export default config;

export interface IConfiguration {
  port: number;
  database: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
}

// Creating PostgreSQL Client here
import pg from "pg";
const { Pool } = pg;

const connectingPool = new Pool({
  connectionString: "postgresql://admin:root@localhost:5432/practic-postgres",
});

export { connectingPool };

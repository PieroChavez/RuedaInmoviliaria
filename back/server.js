const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Configuración de la base de datos con autenticación de Windows
const dbConfig = {
    server: "PIERO-CHAVEZ\\SQLEXPRESS",
    database: "ruedaCompany",
    options: {
      encrypt: false,
      trustServerCertificate: true,
      port: 1433,
    },
    authentication: {
      type: "ntlm",
    },
    pool: {
      idleTimeoutMillis: 30000,
      max: 10,
    },
    connectionTimeout: 30000, // 30 segundos
    requestTimeout: 30000,    // 30 segundos
  };
  

// Ruta de prueba para verificar conexión
app.get("/api/test-connection", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    res.status(200).send("Conexión exitosa a la base de datos.");
    pool.close();
  } catch (error) {
    console.error("Error de conexión:", error);
    res.status(500).send("Error al conectar a la base de datos.");
  }
});

// Ruta para insertar registros
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const pool = await sql.connect(dbConfig);
    await pool
      .request()
      .input("name", sql.VarChar(255), name)
      .input("email", sql.VarChar(255), email)
      .input("phone", sql.VarChar(15), phone)
      .query(
        "INSERT INTO Registros (name, email, phone) VALUES (@name, @email, @phone)"
      );

    res.status(201).send("Registro guardado exitosamente.");
    pool.close();
  } catch (error) {
    console.error("Error al guardar el registro:", error);
    res.status(500).send("Error al guardar los datos.");
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


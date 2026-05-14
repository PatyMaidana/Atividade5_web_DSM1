const pool = require("../database/db");

async function last(req, res) {
  try {
    const result = await pool.query(
      "SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1",
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Nenhum concurso encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Erro Interno do Servidor" });
  }
}

async function getConcurso(req, res) {
  const { concurso } = req.params;

  if (/^\d+$/.test(concurso) === false) {
    return res
      .status(400)
      .json({ message: "Concurso deve ser um número inteiro" });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM megasena WHERE concurso = $1",
      [concurso],
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ messsage: "Nenhum concurso encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Erro Interno do Servidor" });
  }
}

module.exports = {
  last,
  getConcurso,
};

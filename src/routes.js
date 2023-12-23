import express from 'express';
import path from 'path';
import { URL, fileURLToPath } from 'url';
import { promises as fsPromises } from 'fs';

const currentFileURL = new URL(import.meta.url);

const { readFile } = fsPromises;

const currentDirectory = path.dirname(fileURLToPath(currentFileURL));

const router = express.Router();

router.get('/:page', async (req, res) => {
  const requestedPage = req.params.page;
  const publicDir = path.join(currentDirectory, './views');
  const filePath = path.join(publicDir, `${requestedPage}.html`);
  try {
    const data = await readFile(filePath, 'utf8');

    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao ler o arquivo HTML.');
  }
});

export default router;
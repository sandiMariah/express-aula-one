const express = require('express');
const mariah = express();
const nao = 3000;

mariah.get('/otracoisa', (req, res) => {
  res.send('mariah muy bunita');
});

mariah.listen(nao, () => {
  console.log(`Example app listening on port ${nao}`);
});


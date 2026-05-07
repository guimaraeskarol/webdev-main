const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.get('/', mainController.renderHome);
router.get('/catalogo', mainController.renderCatalogo);
router.get('/sobre', mainController.renderSobre);
router.get('/contato', mainController.renderContato);

router.post('/contato/enviar', mainController.handleContato);
router.post('/catalogo/frete', mainController.handleFrete);

module.exports = router;
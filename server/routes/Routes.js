const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

router.get('/',Controller.homepage);

router.post('/', Controller.create);
router.patch('/:id', Controller.update);
router.delete('/:id', Controller.destroy);



module.exports = router;
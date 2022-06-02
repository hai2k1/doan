const express = require('express');
const router = express.Router();
const {themtintuc,danhsachtintuc,detailtintuc,capnhaptintuc, xoatintuc, viewthemtintuc, listtintuc} = require('../controllers/TintucController')

router.post('/themtintuc', themtintuc);
router.get('/listtintuc', listtintuc);
router.get('/tintuc', danhsachtintuc);
router.get('/themtintuc',viewthemtintuc)
router.get('/tintuc/:id', detailtintuc);
router.put('/tintuc/:id', capnhaptintuc);
router.delete('/tintuc/:id', xoatintuc);
module.exports = {
    routes: router
}
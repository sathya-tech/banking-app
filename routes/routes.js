const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const bank = require('../controllers')

router.get('/', catchAsync(bank.getAllBanks))

router.get('/:id', catchAsync(bank.getBankById))

router.get('/branch/:branch',catchAsync(bank.getBanksByBranch))

router.get('/city/:city', catchAsync(bank.getBanksByCity))

router.get('/:city/:state/:district',catchAsync(bank.getBanksByDistrict))

module.exports=router

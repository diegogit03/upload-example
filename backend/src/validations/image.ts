import { body } from 'express-validator';

export default
    body('subtitle')
    .isString()
    .withMessage('Formato inválido')
    .notEmpty()
    .withMessage('Preencha a legenda');

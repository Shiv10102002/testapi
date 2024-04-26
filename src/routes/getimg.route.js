import express,{Router} from 'express';

import {getAllpic} from '../controllers/image.controller.js'
const router = express.Router();

router.post('/getImage',getAllpic);
export default router;


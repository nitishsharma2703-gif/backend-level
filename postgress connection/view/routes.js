import {Router} from 'express';
import {getAllEmp, addEmp, updateEmp, deleteEmp} from '../controllers/userController.js';

const router = Router();

router.get("/getAll", getAllEmp);

router.post("/addEmp", addEmp);

router.post("/emp/:empId", updateEmp);

router.delete("/emp/:empId", deleteEmp);


export default router;


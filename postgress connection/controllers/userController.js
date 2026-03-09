import { userModel } from "../postgres/postgres.js";

export const getAllEmp =async (req, res) => {
  try{
   const users =await userModel.findAll();
   if(users.length==0){
    return res.status(200).json({"error":"user not found"})
   }
   return res.status(200).json(users);
  }catch(err){
    console.log(err);
   return res.status(500).json({"error":err.message})
  
  }

};


export const addEmp = async (req, res) => {
         const {name, email, designation, empId}=req.body;
      try{
         const emp= await userModel.findOne({where:{empId:empId}});
         if(emp==null){
            await userModel.create(req.body);
            return res.status(201).json({message: "emp added successfully"});
         }
         return res.status(200).json({message:"emp already exist"});


    }catch(err){
        console.log(err);
   return res.status(500).json({"error":err.message})  
    };
};


export const updateEmp = async (req, res) => {

  let empId = req.params.empId;

  try {
    const emp = await UserModel.update(req.body, { where: { empId } });

    if (emp[0] === 0) {
      return res.status(404).json({ message: "not found" });
    }

    return res.status(200).json({ message: "updated successfully" });

  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Internal server error" });
  }

};

export const deleteEmp = async (req, res) => {
  const empId = req.params.empId;

  try {
    const emp = await userModel.findOne({ where: { empId: empId } });
    if (emp == null) {
      return res.status(404).json({ message: "emp not found" });
    }

    await userModel.destroy({ where: { empId: empId } });
    return res.status(200).json({ message: "emp deleted successfully" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};



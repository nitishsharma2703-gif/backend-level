import { Sequelize } from 'sequelize';
import { createUserModel } from '../models/userSchema.js';

const sequelize = new Sequelize('postgres', 'postgres', 'Blackpink@1122', {
  host: 'localhost',
  dialect: 'postgres' 
});

let userModel=null;
const connection=async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    userModel=await createUserModel(sequelize)
    await sequelize.sync();
    console.log('database synced successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


export { 
    connection,
    userModel
};
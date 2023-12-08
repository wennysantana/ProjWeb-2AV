import axios from "axios";
export default async function GetStudentByEmailAndPassword(id){
     const data = await axios.get(`http://localhost:8080/student/${id}`);
     console.log(data.data);
 }
 export  async function CreateNewStudent(jsonReturn){
     const {data} = await axios.post('http://localhost:8080/student',jsonReturn);
     console.log(data);
 } 
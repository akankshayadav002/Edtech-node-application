const express= require('express');
const mongoose=require('mongoose');
const userSchema=require('./models/usermodel')
const {MongoClient}=require('mongodb')
const url= 'mongodb://localhost:27017/EdTech'
const client=new MongoClient(url);

const app=express();
app.use(express.json());
const PORT=4000;

const connectDB = async () => { 
  try{
      // mongodb connection string
      const con = await mongoose.connect(url)

      console.log(`MongoDB connected`);
  }catch(err){
      console.log(err);
  }
}
connectDB()
// mongoose.connect('mongodb://localhost:27017/EdTech');
// const user=userSchema
// console.log(user)
// user.find(function(error, result) { console.log(result)})

// const getData=async ()=>{
//  try{
//   console.log('inside')
//   let result= client.connect()
//   console.log(result)
//   let db=result.db('EdTech')
//   let collection=db.collection('User')
//   let response=await collection.find({}).toArray()
//   console.log(response);

//  }catch(error){
//   console.log(error.message)
  
//  }
// }
// console.log("fetching dta")
// getData();
// console.log("data fetched")


app.post('/addUser',(req,res)=>{
    const data=req.body;
    const user=new userSchema({
        name:data.name,
        email:data.email,
        contact:data.contact


    })
    console.log(user)
    user
      .save(user)
      .then(result=>{
        res.render('/auth/login')
        console.log(result);
      })
      .catch((err)=>{
        console.log(err);
        res.json({
          error:err
        });
      })
})

app.get('/user',(req,res)=>{
    res.send(`<h1>Hello from home page</h1>`);
})

app.get('/addCourse',(req,res)=>{
  const courseData=req.body;
  const course=new courseSchema({
    title:courseData.title,
    description:courseData.description,
    startDate:courseData.startDate,
    endDate:courseData.endDate
  })
  console.log(course)
    user
      .save(course)
      .then(result=>{
        res.render('/auth/login')
        console.log(result);
      })
      .catch((err)=>{
        console.log(err);
        res.json({
          error:err
        });
      })
})
app.listen(PORT,()=>{
    console.log(`listening to port: ${PORT}`);
})

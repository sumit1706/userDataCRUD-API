# userDataCRUD-API
[Deployment link](https://hof60.sse.codesandbox.io/)

 This project is a REST API that performs CRUD operations on the users data stored in MongoDB.
 The project is build with Node.js , Express.js and MongoDB(Atlas).
 
 Endpoints :
 
 GET    : / 
 
 GET    : /user/type/:type
 
 GET    : /user/:_id
 
 POST   : /user/new
 
 PUT    : /user/update/:_id
 
 DELETE : /user/delete/:_id
 
 DELETE : /user/delete/type/:userType
 
 
 POST :
{
  "newUser" :
  {
  "name" : "YourData",
  "email" : "YourData",
  "phno" : "YourData",
  "userType" : "YourData"
  }
}
 
 **YourData : Substitute data according to your choice
 
 PUT :
{
   "userData" :
   {
   "name" : "YourData",
   "email" : "YourData",
   "phno" : "YourData",
   "userType" : "YourData"
   }
}
 

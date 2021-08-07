# userDataCRUD-API
[Deployment link](https://hof60.sse.codesandbox.io/)

 This project project is a REST API that performs CRUD operations on the users data stored in MongoDB.
 The project is build with Node.js , Express.js and MongoDB(Atlas).
 
 Endpoints :
 
 GET    : https://hof60.sse.codesandbox.io/ 
 
 GET    : https://hof60.sse.codesandbox.io/user/type/:type
 
 GET    : https://hof60.sse.codesandbox.io/user/:_id
 
 POST   : https://hof60.sse.codesandbox.io/user/new
 
 PUT    : https://hof60.sse.codesandbox.io/user/update/:_id
 
 DELETE : https://hof60.sse.codesandbox.io/user/delete/:_id
 
 DELETE : https://hof60.sse.codesandbox.io/user/delete/type/:userType
 
 
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
 

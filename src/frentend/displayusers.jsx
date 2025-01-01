import React, { useEffect, useState } from 'react';


const Displayusers = () => {
   // Initialize the state to hold the users
   const [users, setUsers] = useState([]);

   // Fetch all users from the backend
   const getall = async () => {
     try {
       const response = await fetch('http://localhost:3001/api/users');
       
       // Check if the response is OK
       if (!response.ok) {
         console.log('Error fetching users');
         return;
       }
       
       // Parse the response JSON
       const data = await response.json();
       
       // Update the users state with the fetched data
       setUsers(data);
     } catch (error) {
       console.log('Error:', error.message);
     }
   };
 
   // Use the useEffect hook to call getall when the component mounts
   useEffect(() => {
     getall();
   }, []); // Empty dependency array ensures this only runs once when the component mounts
 
   return (
     <div className="App">
       <h1>Users List</h1>
       <div>
         {users?.map((user, index) => (
           <div key={index}>
             <h3>{user.username}</h3>
             <p>{user.email}</p>
             <p>good</p>
           </div>
         ))}
       </div>
     </div>
   );
};

export default Displayusers;
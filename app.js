const registeredUsers=[]

const register=document.getElementById('register-form');

register.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name= document.getElementById("name").value;
    const email=document.getElementById("email").value;

    registeredUsers.push({name, email});
    document.getElementById("registered-users").innerHTML="";

    registeredUsers.map((user)=>{
        const listItem=document.createElement('li');
        listItem.textContent=`name:${user.name}, Email:${user.email}`;

        document.getElementById("registered-users").appendChild(listItem);
    })

    document.getElementById("name").value="";
    document.getElementById("email").value="";

})
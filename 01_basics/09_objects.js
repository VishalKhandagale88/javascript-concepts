// chai aur code 17

const user = new Object(); //--> this is a single ton object

const user1 ={} //  this is not a single ton object , it is a object literal

const user2 ={
    email : "vishal@gamil.com",
    fullName:{
        userFullName:{
            firsName:"Vishal",
            lastName:"Khandagale"
        }
    }
}
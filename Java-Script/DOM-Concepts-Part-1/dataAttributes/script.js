const userCard = document.getElementById("userCard");

console.log(userCard);

const user_id = userCard.getAttribute("data-user-id");
console.log(user_id);

const user_role = userCard.getAttribute("data-user-role");
console.log(user_role);

// setAttribute

setAttributeAdmin=userCard.setAttribute('data-user-role',"super-admin");
userCard.setAttribute("data-user-position","Engineer");
console.log(userCard);


// Select from DataSet

const userId2 = userCard.dataset.userRole;
console.log(userId2);

const userId = userCard.dataset.userId;
console.log(userId);



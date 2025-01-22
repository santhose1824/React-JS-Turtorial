// Setp 1 Slect the Target Element
const appContainer = document.getElementById('app');
const generatebtnElement = document.getElementById('generat-btn');
// Step 2 create new HTML element use(document.creatElement)
// Step 3 Add Content to the HTML using innerHMTL
// Step 4 add classes or id any attribute
function createProfileCard(){
    // Create the profile Card Container
    const profileCard = document.createElement('div');
    //  add class
    profileCard.className='profile-card';
    // Create an imgae element
    const profileImage = document.createElement('img');
    // add img
    profileImage.src="./profile-pic.jpg";

    // create the name

    const profileName = document.createElement('h3');
    profileName.textContent='Santhose H.M'

    // create a profileDescription
    const createADescription = document.createElement('p');
    createADescription.textContent ='A passinote full stack developer with experince in App and Web Development'

    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileName);
    profileCard.appendChild(createADescription);


    appContainer.appendChild(profileCard);
}
// Append the elemets to build the structure
// Appednt to DOM


generatebtnElement.addEventListener('click',function(){
    createProfileCard();
});


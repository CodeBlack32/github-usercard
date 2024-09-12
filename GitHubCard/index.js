
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
//start

const followersArray = [
  'https://api.github.com/users/tetondan',  
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell',
];


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const cards = document.querySelector('.cards');


function cardProfile ({avatar_url, name, login, location, html_url, followers, following, bio}) {
  const gitCard = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameEl = document.createElement('h3');
  const userName = document.createElement('p');
  const locationEl = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followersEl = document.createElement('p');
  const followingEl = document.createElement('p');
  const bioEl = document.createElement('p');

  userImage.src = avatar_url;
  nameEl.textContent = name;
  userName.textContent = login;
  locationEl.textContent = location;
  address.href = html_url;
  address.textContent = html_url;
  followersEl.textContent = followers;
  followingEl.textContent = following;
  bioEl.textContent = bio;

  //classlist
  gitCard.classList.add('card');
  cardInfo.classList.add('card-info');
  nameEl.classList.add('name');
  userName.classList.add('username');

  //appends
  gitCard.appendChild(userImage);
  gitCard.appendChild(cardInfo);
  cardInfo.appendChild(nameEl);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(locationEl);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followersEl);
  cardInfo.appendChild(followingEl);
  cardInfo.appendChild(bioEl);

  console.log(gitCard);
  
  return gitCard;
}


axios
  .get(`https://api.github.com/users/CodeBlack32`)
   .then((res) => {
    const data = res.data;
     const card = cardProfile({...data});
     cards.appendChild(card);
   });

 followersArray.forEach(function(followerUrl) {
  axios
  .get(followerUrl)
   .then((res) => {
    const data = res.data;
     const card = cardProfile({...data});
     cards.appendChild(card);
   });
 }) 

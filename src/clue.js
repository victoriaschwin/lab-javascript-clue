// ITERATION 1

// Suspects Array
class Suspect {
  constructor (firstName, lastName, occupation, age, description, image, color){
    this.firstName = firstName;
    this.lastName = lastName;
    this.occupation = occupation;
    this.age = age;
    this.description = description;
    this.image = image;
    this.color = color;
  }
}

let mrGreen = new Suspect("Jacob", "Green", "Entrepreneur", 45, "He has a lot of connections", " https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg","green");
let drOrchid = new Suspect ("Doctor", "Orchid", "Scientist", 26, "PhD in plant toxicology. Adopted daughter of Mr. Boddy","http://www.radiotimes.com/uploads/images/Original/111967.jpg", "white");
let profPlum = new Suspect("Victor", "Plum", "Designer", 22,"Billionaire video game designer","https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg","purple");
let missScarlet = new Suspect("Kasandra", "Scarlet","Actress", 31, "She is an A-list movie star with a dark past","https://www.radiotimes.com/uploads/images/Original/111967.jpg", "red");
let mrsPeacock = new Suspect("Eleanor", "Peacock","Socialite", 36, "She is from a wealthy family and uses her status and money to earn popularity", "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "blue");
let mrMustard = new Suspect ("Jack", "Mustard", "Retired Football Player", 62, "He is a former football player who tries to get by on his former glory", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", "yellow");

const suspectsArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms Array

class Room{
  constructor(name){
    this.name = name
  }
}

let diningRoom = new Room("Dining Room");
let conservatory = new Room("Conservatory");
let kitchen = new Room("Kitchen");
let study= new Room("Study");
let library= new Room("Library");
let billiardRoom= new Room("Billiard Room");
let lounge= new Room("Lounge");
let ballroom= new Room("Ballroom");
let hall = new Room("Hall");
let spa= new Room("Spa");
let livingRoom= new Room("Living Room");
let observatory= new Room("Observatory");
let theater= new Room("Theater");
let guestHouse= new Room("Guest House");
let patio = new Room("Patio");

const roomsArray = [diningRoom,conservatory,kitchen,study,library,billiardRoom,lounge,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio];

// Weapons Array

class Weapon{
  constructor(name, weight){
    this.name = name;
    this.weight = weight;
  }
}

let rope = new Weapon ("rope", 10)
let knife = new Weapon ("knife", 8)
let candlestick = new Weapon ("candlestick", 2)
let dumbbell = new Weapon ("dumbbell", 30)
let poison = new Weapon("poison", 2)
let axe = new Weapon("axe", 15)
let bat = new Weapon("bat", 13)
let trophy = new Weapon("trophy", 25)
let pistol = new Weapon("pistol", 20)

const weaponsArray = [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol];


// ITERATION 2

function selectRandom(arrayCard) {
  
  if(!arrayCard.length) return undefined;
  let randomCard = Math.floor(Math.random() * arrayCard.length)
  
  return arrayCard[randomCard];
}

selectRandom(weaponsArray);

function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let weapon = selectRandom(weaponsArray);
  let room = selectRandom(roomsArray);

  return {suspect,weapon,room}

}


// ITERATION 3

function revealMystery(envelope) {
  console.log(envelope)
  console.log(envelope.suspect.firstName)
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`
}

let mystery = pickMystery();
revealMystery(mystery)
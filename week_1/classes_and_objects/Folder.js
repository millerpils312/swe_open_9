class Folder {
  // defines initial state of object
  constructor(name, icon, address) {
    this.name = name;
    this.icon = icon;
    this.address = address;
  }
}

// myFolder = object of type Folder
const myFolder = new Folder(
  'Images',
  'Default folder',
  'C:/Daniel/My Documents/Pictures'
);

console.log(myFolder);

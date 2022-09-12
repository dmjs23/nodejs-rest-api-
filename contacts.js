// filesystem
const fs = require("fs");

const contactsPath = "./db/contacts.json";

// TODO: udokumentuj każdą funkcję
function listContacts() {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      // print all databases
      databases.forEach((db) => {
        console.log(`${db.id}: ${db.name}: ${db.email}: ${db.phone}`);
      });
      }
  });
    let databases = data;
    console.log(databases);
}

function getContactById(contactId) {
  // ...twój kod
}

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
  let id = 11;
  let user = {
    id: id,
    name: name,
    emai: email,
    phone: phone,
  };

  // convert JSON object to a string
  const data = JSON.stringify(user);

  // write file to disk
  fs.appendFile(contactsPath, data, "utf8", (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  });
}

module.exports = {
  listContacts: listContacts,
  getContactById: getContactById,
  removeContact: removeContact,
  addContact: addContact,
};

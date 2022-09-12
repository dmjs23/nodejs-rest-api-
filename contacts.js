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









// const addContact = async (body) => {}

const fs = require("fs").promises;
const path = require("node:path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContactsFile = async (writtenData) => {
  await fs.writeFile(contactsPath, JSON.stringify(writtenData));
};


const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const parseData = JSON.parse(data);
  return parseData;
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const selectedContact = data.find((el) => el.id === contactId);
  return selectedContact;
};


const addContact = async (name, email, phone) => {
  const data = await listContacts();
  const contactToAdd = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  data.push(contactToAdd);
  await updateContactsFile(data);
  return contactToAdd;
};


const removeContact = async (contactId) => {
  const data = await listContacts();
  const deletedContacts = data.find((el) => el.id === contactId);
  const updatedContacts = data.filter((el) => el.id !== contactId);
  await updateContactsFile(updatedContacts);

  return deletedContacts;
};


const updateContact = async (contactId, { name, email, phone }) => {
  const data = await listContacts();

const newContact = {
  id: `${contactId}`,
  name,
  email,
  phone,
};

  const updateContact = data.find((el) => el.id === contactId);
  const updateContactId = data.indexOf(updateContact);
  if (updateContactId === -1) {
    return null;
  } else {
    data.splice(updateContactId, 1, newContact);
    await updateContactsFile(data);
  }
  return newContact;
};


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}


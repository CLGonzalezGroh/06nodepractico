const bcrypt = require("bcrypt");
const auth = require("../../../auth");
const err = require("../../../utils/error");
const TABLE = "auth";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  async function login(username, password) {
    const data = await store.query(TABLE, { username: username });
    return bcrypt.compare(password, data.password).then((equal) => {
      if (equal) {
        return auth.sign(JSON.parse(JSON.stringify(data)));
      } else {
        throw err("Invalid data", 400);
      }
    });
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    };
    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }
    return store.upsert(TABLE, authData);
  }

  return {
    upsert,
    login,
  };
};

const db = {
  user: [
    {
      id: "1",
      name: "Cesar",
    },
    {
      id: "2",
      name: "Luis",
    },
  ],
};

async function list(tabla) {
  return db[tabla];
}

async function get(tabla, id) {
  let col = await list(tabla);
  return col.filter((item) => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
  db[tabla].push(data);
  return db[tabla];
}

async function remove(tabla, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};

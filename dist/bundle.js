(() => {
  // src/helpers/myLog.ts
  var myLog = (...content) => {
    console.log(...content);
  };
  var myLog_default = myLog;

  // src/my-lib/main.ts
  function saveUser(id2, newUser2) {
    myLog_default(newUser2);
  }
  function getUser(id2) {
  }
  function updateUser(id2, update) {
    const user = getUser(id2);
    const newUser2 = { ...user, ...update };
    saveUser(id2, newUser2);
  }

  // index.ts
  myLog_default("aaaaa");
  myLog_default("Inicializado");
  var id = 23;
  var number = 23;
  var newUser = {
    id: number,
    firstName: "string",
    lastName: "string",
    role: "string"
  };
  saveUser(id, newUser);
  getUser(number);
  updateUser(number, newUser);
})();

import axios from 'axios';

export const auth = {
  endpoint: process.env.REACT_APP_API, // 'http://localhost:5000/api', //Dev

  // TODO: não consegui buscar o erro do servidor. Se consologar a resposta do retorno sem resolver a promessa, eu vejo o erro... mas se tratar a promessa, não vejo mais o erro! tornei async e coloquei error handling pra conseguir detectar que o login falhou no componente login
  async login(username, password) {
    try {
      const response = await axios.post(
        `${this.endpoint}/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      const { data, status } = error.response;
      return { data, status };
    }
  },

  async signup(username, password) {
    try {
      const response = await axios.post(
        `${this.endpoint}/signup`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      const { data, status } = error.response;
      return { data, status };
    }
  },

  isAuth() {
    return axios.get(`${this.endpoint}/is-auth`, { withCredentials: true });
  },

  logout() {
    return axios.get(`${this.endpoint}/logout`, { withCredentials: true });
  },
};

export const groups = {
  endpoint: process.env.REACT_APP_API, // 'http://localhost:5000/api', //Dev

  //GROUPS
  /* Example:

      {
          "members": [
              "Batman",
              "Superman",
              "Aquaman"
          ],
          "expenses": [
              {
                  "split": {
                      "dividedBy": [
                          "WonderWoman",
                          "Batman",
                          "The Flash",
                          "Superman"
                      ],
                      "paidBy": "WonderWoman"
                  },
                  "_id": "5e39b2d2d92dfc45cc87130c",
                  "owner": "5e39a5dcd92dfc45cc871308",
                  "description": "picanha ouro",
                  "value": 20,
                  "__v": 0
              }
          ],
          "settles": [],
          "_id": "5e39a5dcd92dfc45cc871308",
          "owner": "5e31ed37505e1f56b4ef102b",
          "groupName": "grupo A",
          "description": "lala",
          "date": "2020-02-01T00:00:00.000Z",
          "__v": 0
      }
    */
  create(groupName, description, date) {
    // User must be logged in
    return axios.post(
      `${this.endpoint}/groups`,
      {
        groupName,
        description,
        date,
      },
      { withCredentials: true }
    );
  },

  getAll() {
    return axios.get(
      // User must be logged in
      `${this.endpoint}/grupos`,
      { withCredentials: true }
    );
  },

  getOne(groupId) {
    return axios.get(
      // User must be logged in
      `${this.endpoint}/grupos/${groupId}`,
      { withCredentials: true }
    );
  },

  put(groupID, groupDataObj) {
    // groupData é o objeto contendo as modificações nos atributos do grupo
    return axios.put(
      // User must be logged in
      `${this.endpoint}/grupos/${groupID}`,
      groupDataObj, // Verificar modo de passar dados do grupo que serão modificados
      { withCredentials: true }
    );
  },

  delete(groupId) {
    return axios.delete(
      // User must be logged in
      `${this.endpoint}/grupos/${groupId}`,
      { withCredentials: true }
    );
  },

  //EXPENSES
  /*Example:

      expenseData: {
       "description": "picanha",
        "value": 10,
        "split": {
          "paidBy": "WonderWoman",
          "dividedBy": ["WonderWoman","Batman", "Aquaman", "Superman"]
        }
      }
    
      */
  createExpense(groupID, expenseDataObj) {
    // User must be logged in
    return axios.post(
      `${this.endpoint}/groups/${groupID}/expenses`,
      expenseDataObj,
      { withCredentials: true }
    );
  },

  putExpense(groupID, expenseID, expenseDataObj) {
    // User must be logged in
    return axios.put(
      `${this.endpoint}/groups/${groupID}/expenses/${expenseID}`,
      expenseDataObj,
      { withCredentials: true }
    );
  },

  deleteExpense(groupID, expenseID) {
    // User must be logged in
    return axios.delete(
      `${this.endpoint}/groups/${groupID}/expenses/${expenseID}`,
      { withCredentials: true }
    );
  },

  //SETTLES
  /*Model:
      {
        owner: { type: Schema.Types.ObjectId, ref: 'Group', required: true },
        value: { type: Number, required: true },
        paidBy: String,
        paidTo: String,
      },

      Example: settleDataObj / JSON


      {
        "value": 40,
        "paidBy": "Superman",
        "paidTo": "WonderWoman"
      }
    
      */
  createSettle(groupID, settleDataObj) {
    // User must be logged in
    return axios.post(
      `${this.endpoint}/groups/${groupID}/settles`,
      settleDataObj,
      { withCredentials: true }
    );
  },

  putSettle(groupID, settleID, settleDataObj) {
    // User must be logged in
    return axios.put(
      `${this.endpoint}/groups/${groupID}/settles/${settleID}`,
      settleDataObj,
      { withCredentials: true }
    );
  },

  deleteSettle(groupID, settleID) {
    // User must be logged in
    return axios.delete(
      `${this.endpoint}/groups/${groupID}/settles/${settleID}`,
      { withCredentials: true }
    );
  },

  //REPORTS
  //API:
  //http://localhost:5000/api/groups/5e39a5dcd92dfc45cc871308/balance

  getBalance(groupId) {
    console.log('getBalance of a group', groupId);
    return axios.get(
      //
      `${this.endpoint}/groups/${groupId}/balance`,
      { withCredentials: true }
    );
  },
};

import axios from 'axios';

export const auth = {
    endpoint: process.env.REACT_APP_API, // 'http://localhost:5000/api', //Dev

    login(username, password) {
      console.log('Login chamando API:',username,password)
      return axios.post(
        `${this.endpoint}/login`,
        { 
          username, 
          password,
        },
        { withCredentials: true }
      );
    },

    signup(username,password) {
      console.log('SigUp chamando API:',username,password)
      return axios.post(
        `${this.endpoint}/signup`,
        {
          username,
          password,
        },
        {withCredentials:true}
      );
    },

    isAuth() {
      return axios.get(
        `${this.endpoint}/is-auth`,
        {withCredentials:true}
      );
    },

    logout() {
      return axios.get(
        `${this.endpoint}/logout`,
        {withCredentials:true}
      );
    },

  }

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
    create(groupName, description, date){   // User must be logged in
      return axios.post(
        `${this.endpoint}/groups`,
        {
          groupName,
          description,
          date
        },
        {withCredentials:true}
      );
    },

    getAll() {
      return axios.get(          // User must be logged in
        `${this.endpoint}/grupos`,
        {withCredentials:true}
      );
    },
    
    getOne(groupId) {
      return axios.get(        // User must be logged in
        `${this.endpoint}/grupos/${groupId}`,
        {withCredentials:true}
      );
    },

    put( groupID , groupDataObj ) {    // groupData é o objeto contendo as modificações nos atributos do grupo
      return axios.put(        // User must be logged in
        `${this.endpoint}/grupos/${groupID}`,
        groupDataObj,            // Verificar modo de passar dados do grupo que serão modificados 
        {withCredentials:true}
      );
    },

    delete(groupId) {
      return axios.delete(        // User must be logged in
        `${this.endpoint}/grupos/${groupId}`,
        {withCredentials:true}
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
    createExpense(groupID, expenseDataObj){   // User must be logged in
      return axios.post(
        `${this.endpoint}/groups/${groupID}/expenses`,
        expenseDataObj,
        {withCredentials:true}
      );
    },

    putExpense(groupID, expenseID, expenseDataObj){   // User must be logged in
      return axios.put(
        `${this.endpoint}/groups/${groupID}/expenses/${expenseID}`,
        expenseDataObj,
        {withCredentials:true}
      );
    },

    deleteExpense(groupID, expenseID){   // User must be logged in
      return axios.delete(
        `${this.endpoint}/groups/${groupID}/expenses/${expenseID}`,
        {withCredentials:true}
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
     createSettle(groupID, settleDataObj){   // User must be logged in
      return axios.post(
        `${this.endpoint}/groups/${groupID}/settles`,
        settleDataObj,
        {withCredentials:true}
      );
    },

    putSettle(groupID, settleID, settleDataObj){   // User must be logged in
      return axios.put(
        `${this.endpoint}/groups/${groupID}/settles/${settleID}`,
        settleDataObj,
        {withCredentials:true}
      );
    },

    deleteSettle(groupID, settleID){   // User must be logged in
      return axios.delete(
        `${this.endpoint}/groups/${groupID}/settles/${settleID}`,
        {withCredentials:true}
      );
    },

  }

  




import axios from 'axios';

export const Auth = {
    endpoint: 'http://localhost:5000/api',

    login(username, password) {
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
      return axios.post(
        `${this.endpoint}/signup`,
        {
          username,
          password,
        },
        {withCredentials:true}
      );
    }

  }





// export class AuthService {
//   constructor() {
//     let service = axios.create({
//       baseURL: 'http://localhost:5000/api',
//       withCredentials: true
//     });
//     this.service = service;
//   }

//   signup(username, password) {
//     return this.service.post('/signup', {username, password})
//     .then(response => response.data)
//   }

// }

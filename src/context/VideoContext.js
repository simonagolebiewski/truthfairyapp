// import AsyncStorage from '@react-native-async-storage/async-storage';
// //import createDataContext from './createDataContext';
// import authenticationAPI from '../api/authentication';
// import { navigate } from '../navigationRef';

// const videoReducer = (state, action) => {
//     switch(action.type) {
//         case 'add_video':
//             return { ...state };
//         default:
//             return state;
//     }
// };

// const addVideoRecording = dispatch =>  async ({ email, password }) => {
//     try {
//         const response = await authenticationAPI.post('/signup', { email, password });
//         await AsyncStorage.setItem('token', response.data.token);
//         dispatch({ 
//             type: 'signin', 
//             payload: response.data.token 
//         });
//         navigate('mainFlow');
//     } catch (err) {
//         dispatch({ 
//             type: 'add_error', 
//             payload: 'Something went wrong with sign up.' 
//         });
//     }
// };
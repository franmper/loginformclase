import 'dotenv/config';

export default {
  "extra": {
    "apiUrl": process.env.EXPO_API_URL,
  },
  "android": {
    "package": "com.movieapp.app"
  }
};
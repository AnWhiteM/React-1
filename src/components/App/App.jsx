import './App.css'
import { Profile } from '../Profile/Profile';
// import userData from '../../userData.json'

const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};



export const App = () => {
  return (
    
      <Profile
      profile={userData}
      />
    
  );
};
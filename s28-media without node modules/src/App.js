
import './App.css';
import devara from './images/devara src.jfif'
import devaraSong from './audios/devaraSrc.mp3'
import saaho from './video/saaho.mp4'
function App() {
  return (
    <div className="App">
      <h1>DEVARA POSTERS</h1>
      <p>Devara: Part 1 is an upcoming Indian Telugu-language action drama film written and directed by Koratala Siva.
         Produced by Yuvasudha Arts and NTR Arts,the film stars N. T. Rama Rao Jr. in a dual role alongside Saif Ali Khan and Janhvi Kapoor</p>
     <img src='https://newsroompost.com/wp-content/uploads/2023/05/devara-768x432.jpg' alt=''></img>   
     <img src='./images/devara public.jfif' alt=''></img>
     <img src={devara} alt=''></img>
     <hr></hr>
     <audio src='https://services.brninfotech.com/tws/media2/songs/JERSEY/01 - Adhento Gaani Vunnapaatuga.mp3' controls></audio>
     <audio src='./audios/devaraPublic.mp3' controls></audio>
     <audio src={devaraSong} controls></audio>
     <hr></hr>
     <video src='https://services.brninfotech.com/tws/media2/trailers/JERSEY.mp4'controls autoPlay muted></video>
     <video src='./video/Rakshasudu.mp4'controls autoPlay muted></video>
     <video src={saaho}controls autoPlay muted></video>
    </div>
  );
}

export default App;

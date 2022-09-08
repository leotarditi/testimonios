import './App.css';
import {Testimonio} from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='div-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
          name='Shawn Wang'
          country='Singapore'
          image='Shawn'
          imageName='Photo of Shawn'
          position='Software Engineer'
          company='Amazon'
          testimonio='It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' />

        <Testimonio 
          name='Sarah Chima'
          country='Nigeria'
          image='Sarah'
          imageName='Photo of Sarah'
          position='Software Engineer'
          company='ChatDesk'
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' />
        
        <Testimonio 
          name='Emma Bostian'
          country='Sweden'
          image='Emma'
          imageName='Photo of Emma'
          position='Software Engineer'
          company='Spotify'
          testimonio='I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamp of course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' />
      </div>
    </div>
  );
}

export default App


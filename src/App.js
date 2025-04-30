import './App.css';
import React, { useState, useEffect } from "react";
import products from './products.json';
import 'bootstrap/dist/css/bootstrap.css';
// import Button from 'react-bootstrap/Button';

function DelayedPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Delay of 3 seconds

    return () => clearTimeout(timeoutId); // Cleanup on unmount or state change
  }, []);

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjExIiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMjExIDQxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0zNC41NzcxIDAuODIyMDIxQzM1Ljk5NzQgMy4xNjczMyAzNi42Mzc3IDUuNTgzMDEgMzYuNjM3NyA4LjYzNDUxQzM2LjYzNzcgMTguMzY3MiAyOC4zMjc3IDMxLjAxMDcgMjEuNTgzMiAzOS44ODg4SDYuMTc4MjVMMCAyLjk1Mjk2TDEzLjQ4ODcgMS42NzI1OEwxNi43NTUyIDI3Ljk1NDhDMTkuODA3NCAyMi45ODM0IDIzLjU3MzggMTUuMTcxIDIzLjU3MzggOS44NDQ1M0MyMy41NzM4IDYuOTI5MDIgMjMuMDc0MyA0Ljk0MzE4IDIyLjI5MzUgMy4zMDgwNkwzNC41NzcxIDAuODIyMDIxWiIgZmlsbD0iIzAwOENGRiIvPgogIDxwYXRoIGQ9Ik01Mi4wNTk1IDE3LjA4ODdDNTQuNTQxNyAxNy4wODg3IDYwLjc5MDcgMTUuOTUzNCA2MC43OTA3IDEyLjQwMjRDNjAuNzkwNyAxMC42OTczIDU5LjU4NDggOS44NDY3NiA1OC4xNjM3IDkuODQ2NzZDNTUuNjc3NiA5Ljg0Njc2IDUyLjQxNSAxMi44Mjc1IDUyLjA1OTUgMTcuMDg4N1pNNTEuNzc1MSAyNC4xMjE0QzUxLjc3NTEgMjguNDU3MyA1NC4xODY1IDMwLjE1ODQgNTcuMzgzNCAzMC4xNTg0QzYwLjg2NDcgMzAuMTU4NCA2NC4xOTc5IDI5LjMwNzggNjguNTMwMyAyNy4xMDY1TDY2Ljg5ODUgMzguMTg1MkM2My44NDYgMzkuNjc2MyA1OS4wODg4IDQwLjY3MTMgNTQuNDcxMyA0MC42NzEzQzQyLjc1ODQgNDAuNjcxMyAzOC41NjY0IDMzLjU2OTMgMzguNTY2NCAyNC42OTA4QzM4LjU2NjQgMTMuMTgzNCA0NS4zODUzIDAuOTY0NiA1OS40NDM2IDAuOTY0NkM2Ny4xODM3IDAuOTY0NiA3MS41MTE3IDUuMzAwMTMgNzEuNTExNyAxMS4zMzcxQzcxLjUxMjQgMjEuMDY5NSA1OS4wMTg4IDI0LjA1MSA1MS43NzUxIDI0LjEyMTRaIiBmaWxsPSIjMDA4Q0ZGIi8+CiAgPHBhdGggZD0iTTExMC40MzkgOS4zNDgzNUMxMTAuNDM5IDEwLjc2ODcgMTEwLjIyNCAxMi44Mjg5IDExMC4wMDkgMTQuMTc1M0wxMDUuOTYyIDM5Ljc0NzRIOTIuODI3NUw5Ni41MTk2IDE2LjMwNTlDOTYuNTg5NiAxNS42NzAxIDk2LjgwNDggMTQuMzkwMSA5Ni44MDQ4IDEzLjY3OTlDOTYuODA0OCAxMS45NzQ3IDk1LjczOTMgMTEuNTQ5MyA5NC40NTgzIDExLjU0OTNDOTIuNzU2OCAxMS41NDkzIDkxLjA1MTMgMTIuMzI5OCA4OS45MTU1IDEyLjg5OTdMODUuNzI3OCAzOS43NDc3SDcyLjUxOTVMNzguNTUzNyAxLjQ2MTg1SDg5Ljk4NTVMOTAuMTMwMiA0LjUxNzczQzkyLjgyNzIgMi43NDIyNCA5Ni4zNzg1IDAuODIyMDIyIDEwMS40MTcgMC44MjIwMjJDMTA4LjA5MyAwLjgyMTI5MiAxMTAuNDM5IDQuMjMxOSAxMTAuNDM5IDkuMzQ4MzVaIiBmaWxsPSIjMDA4Q0ZGIi8+CiAgPHBhdGggZD0iTTE0OS40MzIgNS4xNTU3N0MxNTMuMTk0IDIuNDU5MzYgMTU2Ljc0NiAwLjk2NDYgMTYxLjY0MyAwLjk2NDZDMTY4LjM4NyAwLjk2NDYgMTcwLjczMyA0LjM3NTIxIDE3MC43MzMgOS40OTE2N0MxNzAuNzMzIDEwLjkxMjEgMTcwLjUxOCAxMi45NzIzIDE3MC4zMDQgMTQuMzE4N0wxNjYuMjYxIDM5Ljg5MDdIMTUzLjEyM0wxNTYuODg2IDE1Ljk1MzhDMTU2Ljk1NSAxNS4zMTM5IDE1Ny4xMDEgMTQuNTMzNCAxNTcuMTAxIDE0LjAzODNDMTU3LjEwMSAxMi4xMTg0IDE1Ni4wMzUgMTEuNjkyNiAxNTQuNzU0IDExLjY5MjZDMTUzLjEyMyAxMS42OTI2IDE1MS40OTIgMTIuNDAyOCAxNTAuMjgxIDEzLjA0M0wxNDYuMDk0IDM5Ljg5MTFIMTMyLjk2TDEzNi43MjIgMTUuOTU0MUMxMzYuNzkxIDE1LjMxNDMgMTM2LjkzMyAxNC41MzM4IDEzNi45MzMgMTQuMDM4N0MxMzYuOTMzIDEyLjExODggMTM1Ljg2NiAxMS42OTMgMTM0LjU5IDExLjY5M0MxMzIuODg1IDExLjY5MyAxMzEuMTgzIDEyLjQ3MzUgMTMwLjA0NyAxMy4wNDM0TDEyNS44NTYgMzkuODkxNUgxMTIuNjUyTDExOC42ODYgMS42MDU1MkgxMjkuOTc4TDEzMC4zMzMgNC44MDE3NkMxMzIuOTYgMi44ODYyOCAxMzYuNTA4IDAuOTY2MDU3IDE0MS4yNjUgMC45NjYwNTdDMTQ1LjM4NCAwLjk2NDU5OSAxNDguMDggMi43NDA0NSAxNDkuNDMyIDUuMTU1NzdaIiBmaWxsPSIjMDA4Q0ZGIi8+CiAgPHBhdGggZD0iTTE5Ni44NjkgMTYuMzA3NkMxOTYuODY5IDEzLjE4MjEgMTk2LjA4NyAxMS4wNTEyIDE5My43NDYgMTEuMDUxMkMxODguNTYzIDExLjA1MTIgMTg3LjQ5OCAyMC4yMTMzIDE4Ny40OTggMjQuOTAwM0MxODcuNDk4IDI4LjQ1NiAxODguNDkzIDMwLjY1NjYgMTkwLjgzNCAzMC42NTY2QzE5NS43MzMgMzAuNjU2NiAxOTYuODY5IDIwLjk5NDIgMTk2Ljg2OSAxNi4zMDc2Wk0xNzQuMTUgMjQuMzM0NUMxNzQuMTUgMTIuMjYwOCAxODAuNTM5IDAuOTYzMzc5IDE5NS4yMzggMC45NjMzNzlDMjA2LjMxNCAwLjk2MzM3OSAyMTAuMzYzIDcuNDk5ODUgMjEwLjM2MyAxNi41MjJDMjEwLjM2MyAyOC40NTU2IDIwNC4wNDMgNDAuODE0IDE4OC45ODkgNDAuODE0QzE3Ny44NDIgNDAuODE0IDE3NC4xNSAzMy40OTcgMTc0LjE1IDI0LjMzNDVaIiBmaWxsPSIjMDA4Q0ZGIi8+Cjwvc3ZnPg==" alt="venmo" />
          <h2> @letsheal</h2>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">

      <DelayedPopup />
      <header className="App-header">
      <h1> Manage Covid </h1>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Coronavirus._SARS-CoV-2.png/1920px-Coronavirus._SARS-CoV-2.png" className="App-logo" alt="SARS virus rotating" />
        <title>
          Avoid & manage Covid
        </title>

      <h3> 
      Learn to prevent Covid, and recover from SARS and SARS2
    </h3>
      </header>
      This is an low-risk, and researched ways to avoid the health issues that come from covid. 

      <p> 
     <h1> Preventing Covid: </h1>
  Half the Covid cases are asymptomatic.
  If you follow this protocol, you'll never get infected again. </p> 
  <p> Reminder: higher risk severe effects is EVERYONE, and especially the person who's Black or Brown, female, and immunocompromised. 
  You literally cannot tell when someone's contagious or not. 
  It's constantly mutating and evading immunity. 
  </p>
<div className='productz'>

  <div className='section1' id="section1">
    <div className="preventCov"> 
      {products.preventcov.map((preventcov) => ( //map has to be on ARRAY, not object 
   <div className='buddysys'> 
      <img src={preventcov.imgsrc} alt={preventcov.alttext} /> 
      <br />
      <button className variant="danger">{preventcov.buttonprice} <br></br>
      {preventcov.description}

      </button>
    
      </div> 
 
      ))}
    </div>
  </div>

    
    <div className='section2'>
    <h1> Managing an infection: </h1>
  <p> Sick? Here's a suggested schedule.  </p>
  
  <p> Main priorities:   <br /> 
  1. REST, 
  <br /> 2. medicate,  <br /> 3. be outside    <br />
  4. clean you nasal passages* 
  <br />*If you don't have time to find a neti pot, try using a clean gravy boat or tea pot. 
  <br />This will ultimately help protect your brain from viral damage: 
  <br />
  <a href='https://www.quora.com/Does-nasal-cavity-lead-to-the-brain'>https://www.quora.com/Does-nasal-cavity-lead-to-the-brain </a>
  </p>

  <div className="centeredBox">
  <ol> ☀️ Morning: </ol>
  <li> Paxlovid or other antiviral </li>
  <li> Moisten nostrils with shower or warm beverage, blow nose, and spray nostrils with nasal spray </li>
  <li> Outside sunlight as much as possible/ unmasked as much as possible to realease viral load. </li>
  <li> Drink and GARGLE tea to disrupt virus's replication in the back of the throat </li>
  <li> Metformin </li>
  <li> Baby aspirin or turmeric to prevent blood clotting </li>


  <ol> 🌤️ Midday: </ol>
  <li> Get outside in sunlight as much as possible, while unmasked as much as possible to kill and release viral load </li>
  <li> Outside sunlight as much as possible/ unmasked as much as possible to realease viral load. </li>

  <li> Gargle tea to disrupt virus's replication </li>
  <li> Any cannabis with THC is good to take before too late in the evening </li>


  <ol> 🌙 Evening: </ol>
  <li> Outside sunlight as much as possible/ unmasked as much as possible to realease viral load. </li>
  <li> Gargle herbal tea </li>
  <li> Melatonin </li>
  <li> Paxlovid or other antiviral </li>
  <li> Metformin </li>
  <li> What your favorite comedy or easy to digest show </li>
  <li> Take a night anti-histamine to help with common histamine  reactions and help sleep</li>
  </div>
</div>

Here's a playlist to help you stay calm: 
  <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1T2fEo0ROQ2?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
  </iframe>

  <div className='section3'>
  <div className="duringCov"> 
        {products.duringcovid.map(duringcovid =>
          <div className='buddysys'> <img src={duringcovid.imgsrc} alt={duringcovid.alttext} />
          <br />
          <button variant="danger">{duringcovid.buttonprice} <br />
          {duringcovid.description}
          </button>
        
          </div> 
          //https://colours.neilorangepeel.com/category/blue/
          
        )}
      </div>
        <h1> Post-Viral Care </h1>
    <p>  Congratulations! So you made out of the acute phase of the virus, usually the worst part. 
    <br />
    Let's start healing: </p>
        First, keep taking foods that can reduce blood clots daily: turmeric, garlic, cayenne pepper, ginger, cinnamon, primrose oil, aloe, etc.
        <br />
        <a href='https://www.medicalnewstoday.com/articles/322384'> https://www.medicalnewstoday.com/articles/322384 </a>
        <br />
        and avoid blood-clotting foods 
        <br /> 
        <a href='https://www.livestrong.com/article/323888-list-of-blood-thinning-foods/'> https://www.livestrong.com/article/323888-list-of-blood-thinning-foods/ </a>
    <div className="healCov"> 
      {products.healcovid.map(healcovid =>
        <div className='buddysys'> <img src={healcovid.imgsrc} alt={healcovid.alttext} />
        <br />
        <button variant="danger">{healcovid.buttonprice} <br></br>
        {healcovid.description}
        </button>
        </div>
      )}
    </div>
    If you're still having linger symptoms after 2-3 months, there are many resources to help you find ways to manage or heal from those symptoms: 
    <a href='https://www.facebook.com/search/groups/?q=long%20covid%20'> a quick search on social media </a>
    </div>
    </div>


    
    <footer className='Footer'>
      <h4> 
      Venmo: @letsheal
      </h4>
      <p>  
      Sources: 
      <br />
      LongCovidPharmD's Substack <a href="https://pharmd.substack.com/p/i-have-covid-what-should-my-kids"> https://pharmd.substack.com/p/i-have-covid-what-should-my-kids </a> 
      <br />
      People's CDC <a href="https://peoplescdc.org/2023/01/10/what-to-do-if-you-have-covid/"> https://peoplescdc.org/2023/01/10/what-to-do-if-you-have-covid/ </a> 

      </p> 
    </footer>
  </div>

  );
}


export default App;
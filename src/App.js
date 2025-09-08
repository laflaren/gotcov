import './App.css';
import React, { useState, useEffect } from "react";
import products from './products.json';
// import { Link } from 'react-router-dom';
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
          <h2> @preventable </h2>
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
         <title> Fight Covid </title>

    <meta property="og:site_name" content="example title" />

    <meta property="og:title" content="example title" />

      <h1> Fighting Covid 
      <br /> 
      is easy & affordable </h1>
          <h4> 
      Prevent & recover from SARS/2      
      <br /> using scientific studies, simple tools you have 
          </h4>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Coronavirus._SARS-CoV-2.png/1920px-Coronavirus._SARS-CoV-2.png" className="App-logo" alt="SARS virus rotating" />
     
         
  </header>
     


      These are low-risk, affordable, tested ways to avoid the health issues that may result from Covid infections. 
      <br /> 
      <br /> 
      <p> 
     <h2> Prevent Covid: </h2>
  This guide could save you hundreds of dollars in medical bills, and heartache. <br /> 
  If you follow this protocol, you may never get infected again. </p> 
    <br /> 
  <p> Reminder: "higher risk" can technically be EVERYONE, and especially person  <a href="https://nosscr.org/disability-recipients-nearly-7-times-more-likely-to-die-of-covid-19-according-to-ssa-data/"> who have disabilities</a>, <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC8586903/'> are Brown and/or Black</a>, <a href="https://www.them.us/story/long-covid-trans-and-bisexual-people-healthcare-disparities" > as well those who are trans and queer</a>. 
  <br />
 Almost <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9935239/"> half of Covid infections are asymptomatic. </a> 
 <br /> 
 You literally cannot tell when someone's contagious or not. 
<br />
  Finally, it's constantly mutating & evading immunity, thus you can be sick with multiple strains at once, or back-to-back. 
  </p>
<div className='productz'>

  <div className='section1' id="section1">
    <div className="preventCov"> 
      {products.preventcov.map((preventcov) => ( //map has to be on ARRAY, not object 
   <div className='buddysys'> 
      <a href={preventcov.imglink}> <img src={preventcov.imgsrc} 
      alt={preventcov.alttext} /> </a> 
      <br /> 

      <button className variant="danger"> 
       {preventcov.buttonprice}
      <br />
      <a href= {preventcov.buttonlink}>
      {preventcov.description} </a>
      </button>
 
      </div> 
 
      ))}
    </div>
  </div>

    
    <div className='section2'>
    <h2> Managing an active infection: </h2>
  <p> The key is to lower the viral load and discourage replication.  </p>
 
  <h5> Objectives: </h5>
  <p>
  1. Physically isolate. Even if you and others have the 'same virus,' you can swap the viral load and regress progress your body makes. Even if you share a space, ensure you use barriers like air purifiers and ventilation for the airborne SARS viruses. 
  <br /> 
  2. Rest - prioritize quality sleep, and psychological wellbeing 
   <br /> 
  3. Medicate 
  <br /> 
  4. During the day: Outside sun exposure with air flow or ventilation. 
  <br /> 
  During the night: moisturize passage way (with HOCl) 
  <br /> 
  5. <a href='https://youtu.be/SXUyqna4QZA'> Clean nasal passages</a>* 
  <br /> *If you don't have time to find a neti pot, try using a clean gravy boat or tea pot. <br /> The nasal passage cleaning <a href='https://www.quora.com/Does-nasal-cavity-lead-to-the-brain'> will help prevent brain damage.  </a>
  </p>

  <br />
  Calm music for relaxation: 


  <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1T2fEo0ROQ2?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
  </iframe>



  <h5> Schedule: </h5>
  <h6> Print ~10 copies & mark as you complete them daily. </h6>
  <div className="centeredBox">
  <ol> ☀️ Morning: </ol>
  <li>  Open windows and make sure the air purifiers are running: ventilation is key to push out or trap the airborne SARS viruses, while bringing in fresh, cleaner air. </li>
  <li> ASK FOR HELP. This is what friends and family are for. Ask for help with meals and medications. It can be hard, but do it first to get it out of the ways. </li>
  <li> Play calming music - playlist suggestion below </li>
  <li> Paxlovid or other antiviral </li>
  <li> Clean nasal passages with neti pot, OR moisten nostrils with shower or warm beverage, blow nose, and spray nostrils with nasal spray </li>
  <li> Outside sunlight as much as possible/ unmasked as much as possible to release viral load. </li>
  <li> Drink and GARGLE tea to disrupt virus's replication in the back of the throat </li>
  <li> Metformin </li>
  <li> With food, take the oregano oil </li>
  <li> Baby aspirin or turmeric to prevent blood clotting </li>


  <ol> 🌤️ Midday: </ol>
  <li> Outside sunlight as much as possible/ unmasked as much as possible to realease viral load. You may see a developing theme here. </li>
  <li> Gargle and consume herbal tea to disrupt virus's replication </li>
  <li> Probiotics or enzyme before midday meal/ food to make digestion easier. </li>


  <ol> 🌙 Evening: </ol>
  <li> Paxlovid or other antiviral </li>
  <li> Outside sunlight as much as possible/ unmasked as much as possible to realease viral load. </li>
  <li> Clean nasal passages with neti pot, OR moisten nostrils with shower or warm beverage, blow nose, and spray nostrils with nasal spray </li>
  <li> Gargle herbal tea </li>
  <li> Metformin </li>
  <li> Probiotics -- to balance gut health after the antivirals and antibiotic of the oregano oil, and assist with sleep.  </li>
  <li> Any cannabis with THC is good to take before too late in the evening </li>
  <li> What your favorite comedy or easy-to-digest show </li>
  <li> Take a night-friendly anti-histamine to help with <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC9903129/'> common histamine reactions</a> and help with deeper sleep </li>
  <li> Melatonin </li>
  <li> Set up HOCl in the humidifier to run overnight - <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC10227542/'> more powerful and safer than bleach </a> </li>

  </div>
</div>

  <div className='section3'>
  <div className="duringCov"> 
        {products.duringcovid.map(duringcovid =>
          <div className='buddysys'> 
          
          <a href= {duringcovid.imglink}> <img src={duringcovid.imgsrc} alt={duringcovid.alttext} /> </a>
          <br />
          <a href={duringcovid.buttonlink}><button variant="danger">{duringcovid.buttonprice} <br />
          {duringcovid.description}
          </button></a>
        
          </div> 
          //https://colours.neilorangepeel.com/category/blue/
          
        )}
      </div>
        <h2> Post-Viral Care </h2>
    <p>  Congratulations! You made out of the acute phase of the virus-- sometimes the worst part. 
    <br />
    Let's begin the healing: </p>
        First, keep taking foods that can thin the blood and reduce chances of blood clots daily: turmeric, garlic, cayenne pepper, ginger, cinnamon, primrose oil, aloe, etc. for about 2-3 months. 
        <br />
       
    <div className="healCov"> 
      {products.healcovid.map(healcovid =>
        <div className='buddysys'> 
        <a href={healcovid.imglink}> <img src={healcovid.imgsrc} alt={healcovid.alttext} /> </a>
        <br />
        <a href={healcovid.buttonlink}> <button variant="danger">{healcovid.buttonprice} <br></br>
        {healcovid.description}
        </button> </a> 
        </div>
      )}
    </div>
    If you still have lingering symptoms after 2-3 months, there are resources to help you find ways to manage or heal: 
    <a href='https://www.facebook.com/search/groups/?q=long%20covid%20'> a quick search on facebook shows you many communities. </a>
    <br /> <br />
    Note: Use condoms for about <a href="https://www.auajournals.org/doi/10.1097/01.JU.0001109764.27496.08.09">8 months after onset of the virus,</a> to avoid exchanging viral loads, even after testing negative on oral & nasal tests. 
    </div>
    </div>


    
    <footer className='Footer'>
      <h5> 
      <br />
      Thank you for your support! 
      <br/> Contact & feedback: <br /> Venmo $5 to @preventable to keep <link rel="icon" href="favicon.ico" /> this work going. 
      </h5>
      <br />   <br />   <br /> 

      <p>  
    
      Sources: 
      <br />
     1. LongCovidPharmD's Substack <a href="https://pharmd.substack.com/p/i-have-covid-what-should-my-kids"> pharmd.substack.com/p/i-have-covid-what-should-my-kids </a> 
     <br />
     2. People's CDC <a href="https://peoplescdc.org/what-to-do-if-you-have-covid/"> peoplescdc.org/what-to-do-if-you-have-covid </a>
     <br />
      3. Expert advice on how to avoid infection while caring for others <a href='https://substack.com/home/post/p-169629289'> substack.com/home/post/p-169629289 </a>
      <br />
      4. Collection of studies <a href='https://c19early.org/'> c19early.org </a>
    
      </p> 
    </footer>
  </div>

  );
}


export default App;
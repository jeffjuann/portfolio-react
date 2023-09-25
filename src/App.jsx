import { useState } from 'react'
import './App.css';
import './About.css';
import './Works.css'
import './Contact.css'

function App() {

  const [ active, setActive ] = useState({ left: 12 });

  const commonSkills = [
    'CRITICAL THINKING',
    'PROBLEM SOLVING',
    'PROJECT MANAGEMENT',
    'SOFTWARE ENGINEERING',
    'AGILE SOFTWARE ENGINEERING',
    'SCRUM PROJECT MANAGEMENT',
    'WEB DEVELOPMENT',
    'MOBILE DEVELOPMENT',

  ]

  const techSkills = [
    'C/C++',
    'JAVA',
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'REACT',
    'REACT NATIVE',
    'NEXT.JS',
  ]

  return (
    <div className="App">

      {/* NAVIGATION */}
      <div className='Header-navigation'>
        <div className='Header-navActive'>
          <li style={active} className='Header-itemActive'>

          </li>
        </div>
        <div className='Header-navList'>
          <li className='Header-navListItem' onClick={() =>
            {
              setActive({ left: 12 })
              window.location.replace("/#home")  
            }}>
            HOME
          </li>
          <li className='Header-navListItem' onClick={() =>
            {
              setActive({left: 114.6})
              window.location.replace("/#about")  
            }}> 
            ABOUT ME
          </li>
          <li className='Header-navListItem' onClick={() =>
            {
              setActive({ left: 217.2 })
              window.location.replace("/#works")  
            }}>  
            WORKS
          </li>
        </div>
        
      </div>

      <section id='home'>
        {/* HEADER */}
        <header className="Home-header">
          <h2>JEFFERSON JUAN</h2>
          <h2>JAKARTA, INDONESIA</h2>
        </header>
        
        <div className='Home-title'>
          <h1>" SOFTWARE
            ENGINEER "</h1>
            <div className='Home-btnContainer'>
              <button className='Home-btn' onClick={() =>
              {
                setActive({ left: 217.2 })
                window.location.replace("/#contact")  
              }}>
                CONTACT ME
              </button>
            </div>
        </div>
      </section>

      <section id="about">
        <div className="About-description">
          <h1>ABOUT ME</h1>
          <p>Motivated Computer Science Undergraduate Student at Bina Nusantara University. 
            Commited to learning, developing skills in Programming and team contribution. 
            Able to Develop Mobile and Web Services. Self-directed and energetic with superior 
            performance in both autonomous and collaborative environments working independently 
            and collaborationg with others on group projects.</p>


          <h3>SKILLS</h3>
          <div className='About-skills'>
            { commonSkills.map((skill) =>
            {
              return (
                <div className='About-skillItem'>{skill}</div>
              )
            })}
          </div>

          <h3>TECHNICAL SKILLS</h3>
          <div className='About-skills'>
            { techSkills.map((skill) =>
            {
              return (
                <div className='About-skillItem'>{skill}</div>
              )
            })}
          </div>

        </div>
      </section>

      <section id="works">
        <div className='Works-title'>
          <h1>RECENT WORKS</h1>
          <p>With two years of dedicated coding experience in college, 
            I have successfully crafted numerous impressive projects that 
            showcase my skills and passion for software development.</p>
        </div>
        <div className='Works-project Works-newest'>
          <div className="Works-top">
            <h2>PERSONAL</h2>
            <h2>2023</h2>
          </div>
          <h2>CASHFLOW</h2>
        </div>
        <div className='Works-latest'>
            <div className='Works-project Works-left'>
              <div className="Works-top">
                <h2>PANITIATEAM</h2>
                <h2>2022</h2>
              </div>
              <h2>STOCK N SHARE</h2>
            </div>
            <div className='Works-project Works-right Works-right-1'>
              <div className="Works-top">
                <h2>POTATOKENTANG</h2>
                <h2>2023</h2>
              </div>
              <h2>NUTRISENSE</h2>
            </div>
            <div className='Works-project Works-right Works-right-2'>
              <div className="Works-top">
                <h2>PERSONAL</h2>
                <h2>2023</h2>
              </div>
              <h2>SIMPLE-CRUD-NEXTJS</h2>
            </div>

        </div>
      </section>

      <section id='contact'>
        <h1>CONTACT ME</h1>
        <div className='Contact-container'>
          <div className='Contact-left'>
            <div className='Contact-item Contact-item-left'>
              <img src={require('./icons/icons8-linkedin-96.png')} className='Contact-icon' alt='mail'/>
              <a href="https://www.linkedin.com/in/jeffersonjuan/"><p>linkedin.com/in/jeffersonjuan</p></a>
            </div>
            <div className='Contact-item Contact-item-left'>
              <img src={require('./icons/icons8-github-96.png')} className='Contact-icon' alt='mail'/>
              <a href='https://github.com/jeffjuann'><p>github.com/jeffjuann</p></a>
            </div>
          </div>
          <div className='Contact-right'>
            <div className='Contact-item Contact-item-right'>
              <img src={require('./icons/icons8-mail-96.png')} className='Contact-icon' alt='mail'/>
              <p>jeffjuann@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

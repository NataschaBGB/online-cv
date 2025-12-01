import Header from './components/Header/Header.jsx'

import Profile from './components/Profile/Profile.jsx'
import Educations from './components/Educations/Educations.jsx'
import Experience from './components/Experience/Experience.jsx'

import Competencies from './components/Competencies/Competencies.jsx'
import Skills from './components/Skills/Skills.jsx'
import Interests from './components/Interests/Interests.jsx'
import Contact from './components/Contact/Contact.jsx'
import Credentials from './components/Credentials/Credentials.jsx'

export default function App() {

  return (
    <section id="app" className="portfolio">
        <Header />
        
        <section className='portfolio__content'>
          
          <main className='portfolio__main'>
            <Profile />
            <Educations />
            <Experience />
          </main>

          <aside className='portfolio__sidebar'>
            <Competencies />
            <Skills />
            <Interests />
            <Contact />
            <Credentials />
          </aside>

        </section>
    </section>
  )

}
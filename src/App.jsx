import Header from './components/Header/Header.jsx'

import Profile from './components/Profile/Profile.jsx'
import Educations from './components/Educations/Educations.jsx'
import Experience from './components/Experience/Experience.jsx'
// import Code from './components/Code/Code.jsx'

import Competencies from './components/Competencies/Competencies.jsx'
import Skills from './components/Skills/Skills.jsx'
import Interests from './components/Interests/Interests.jsx'
import Contact from './components/Contact/Contact.jsx'
import Credentials from './components/Credentials/Credentials.jsx'

export default function App() {

  return (
    <>
      <Header />

      <section className='cv'>
        
        <main className='cv__main'>
          <Profile />
          <Educations />
          <Experience />
          {/* <Code /> */}
        </main>

        <aside className='cv__sidebar'>
          <Competencies />
          <Skills />
          <Interests />
          <Contact />
          <Credentials />
        </aside>

      </section>
    </> 
  )
}
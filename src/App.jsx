import Header from './components/Header/Header.jsx'
import Competencies from './components/Competencies/Competencies.jsx'
import Profile from './components/Profile/Profile.jsx'

export default function App() {

  return (
    <>
        <Header />
        <main className='portfolio'>
            <Competencies />
            <Profile />
        </main>
    </>
  )

}
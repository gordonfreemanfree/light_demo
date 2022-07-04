import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Light from './components/Light'
import DemoWrapper from './UI/DemoWrapper'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <DemoWrapper>
          <Light />
        </DemoWrapper>
      </main>
      <Footer />
    </div>
  )
}

export default App

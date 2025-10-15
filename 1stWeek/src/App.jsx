import CloneElement from './studyParts/CloneElement'
import CreateElement from './studyParts/CreatElement'
import ShadowDom from './studyParts/ShadowDom'

function App() {
  return (
    <>
      <ShadowDom />
      <CreateElement />
      <CloneElement>
          <button>without clone Element</button>
          <p>this is clone Element of paragraph</p>
      </CloneElement>
    </>
  )
}

export default App

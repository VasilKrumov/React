import { useState } from 'react'
import Button from './components/UI/Button/Button'

import './App.css'
import DemoOutput from './components/Demo/DemoOutput'

function App() {
    const [showParagraph, setShowParagrah] = useState(false)
    const toggleParagraphHandler = () => {
        setShowParagrah((prevShowParagraph) => !prevShowParagraph)
    }

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
            {showParagraph && <DemoOutput show={showParagraph} />}
        </div>
    )
}

export default App

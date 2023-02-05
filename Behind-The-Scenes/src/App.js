import { useState } from 'react'
import Button from './components/UI/Button/Button'

import './App.css'

function App() {
    const [showParagraph, setShowParagrah] = useState(false)
    const toggleParagraphHandler = () => {
        setShowParagrah((prevShowParagraph) => !prevShowParagraph)
    }

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
            {showParagraph && <p>This is awesome</p>}
        </div>
    )
}

export default App

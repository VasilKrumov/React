import { useState, useCallback } from 'react'
import Button from './components/UI/Button/Button'

import './App.css'
import DemoOutput from './components/Demo/DemoOutput'

function App() {
    const [showParagraph, setShowParagrah] = useState(false)
    const [allowToggle, setAllowToggle] = useState(false)
    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagrah((prevShowParagraph) => !prevShowParagraph)
        }
    }, [allowToggle])

    const allowToggleHandler = () => {
        setAllowToggle(true)
    }
    console.log('app')

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <Button onClick={allowToggleHandler}>Allow Toggle</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
            {showParagraph && <DemoOutput show={showParagraph} />}
        </div>
    )
}

export default App

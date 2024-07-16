import React from 'react'
import RandomCharacterGenerator from './RandomCharacterGenerator'
import FallingObjectBackground from './FallingObjectBackground'

const TestApp = () => {
  return (
    <FallingObjectBackground image={'/images/ant.png'}>
      <RandomCharacterGenerator />
    </FallingObjectBackground>
  )
}

export default TestApp
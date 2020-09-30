import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import { singleBoxStyle, doubleBoxStyle, containerStyle } from './styles'
import SingleBox from './components/SingleBox'
import DoubleBox from './components/DoubleBox'

library.add(fab, faCheckSquare, faCoffee);

export default function App(props) {

  return (
    <div style={containerStyle}>
      <DoubleBox title="Thing" icon="coffee" style={doubleBoxStyle} />
      <SingleBox title="Thing" icon="coffee" style={singleBoxStyle} />
      <SingleBox title="Thing" icon="coffee" style={singleBoxStyle} />
      <SingleBox title="Thing" icon="coffee" style={singleBoxStyle} />
      <DoubleBox title="Thing" icon="coffee" style={doubleBoxStyle} />

      <DoubleBox title="Thing" icon="coffee" style={doubleBoxStyle} />
      <SingleBox title="Thing" icon="coffee" style={singleBoxStyle} />
      <SingleBox title="Thing" icon="coffee" style={singleBoxStyle} />
      <SingleBox title="Thing" icon="coffee" style={singleBoxStyle} />
      <DoubleBox title="Thing" icon="coffee" style={doubleBoxStyle} />

      <DoubleBox title="Thing" icon="coffee" style={doubleBoxStyle} />
      <SingleBox title="Thing" icon="coffee" style={singleBoxStyle} />
      <SingleBox title="Thing" icon="coffee" style={singleBoxStyle} />
      <SingleBox title="Thing" icon="coffee" style={singleBoxStyle} />
      <DoubleBox title="Thing" icon="coffee" style={doubleBoxStyle} />
    </div>
  );
}
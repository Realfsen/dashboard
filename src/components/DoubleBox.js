import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DoubleBox(props) {
	// let baseWidth = 15;
	let baseHeight = 12.5
	let backgroundColor = '#292929'
	let textColor = '#d6d6d6'

	const doubleBoxStyle = {
		backgroundColor: backgroundColor,
		color: textColor,
		// width: baseWidth*1.5+'rem',
		width: '100%',
		height: baseHeight + 'rem',
		position: 'relative',
		display: 'grid',
		gridTemplateRows: '20% 80%',
		textAlign: 'center',
		fontSize: '20pt',
		margin: 'auto',
	}

	let svg = {
		margin: 'auto',
		fontSize: '40pt',
	}

	return (
		<div style={doubleBoxStyle}>
			<p>{props.title}</p>
			<div style={svg}>
				<FontAwesomeIcon icon={props.icon} />
			</div>
		</div>
	)
}

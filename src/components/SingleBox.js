import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SingleBox(props) {
	// let baseWidth = 15;
	let baseHeight = 12.5
	let backgroundColor = '#292929'
	let textColor = '#d6d6d6'

	// For FontAwesome icons
	let svg = {
		margin: 'auto',
		fontSize: '40pt',
		color: props.color,
	}

	const singleBoxStyle = {
		backgroundColor: backgroundColor,
		color: textColor,
		width: '100%',
		//   width: baseWidth + "rem",
		height: baseHeight + 'rem',
		position: 'relative',
		display: 'grid',
		gridTemplateRows: '33% 67%',
		textAlign: 'center',
		fontSize: '20pt',
		margin: 'auto',
	}

	return (
		<div
			style={singleBoxStyle}
			onClick={() => {
				if (props.link !== undefined) {
					window.open(props.link)
				}
			}}
		>
			<p>{props.title}</p>
			<div style={svg}>
				<FontAwesomeIcon icon={props.icon} />
			</div>
		</div>
	)
}

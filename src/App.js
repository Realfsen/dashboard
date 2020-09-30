import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
	faCheckSquare,
	faCoffee,
	faSun,
	faCloud,
	faSnowflake,
	faCloudRain,
	faUserSecret,
	faClock,
	faSeedling,
	faAsterisk,
} from '@fortawesome/free-solid-svg-icons'

import { containerStyle } from './styles'
import SingleBox from './components/SingleBox'
import DoubleBox from './components/DoubleBox'

library.add(
	fab,
	faCheckSquare,
	faCoffee,
	faSun,
	faCloud,
	faSnowflake,
	faCloudRain,
	faUserSecret,
	faClock,
	faSeedling,
	faAsterisk
)

export default function App(props) {
	return (
		<div style={containerStyle}>
			{/* Top bar */}
			<DoubleBox title="Time" icon="clock" />
			<SingleBox
				title="PiHole"
				icon={['fab', 'raspberry-pi']}
				color="#e22d5d"
				link="http://192.168.38.102/admin/index.php"
			/>
			<SingleBox title="VPN" icon="user-secret" color="orange" />
			<SingleBox
				title="Portainer"
				icon={['fab', 'docker']}
				color="#05aefc"
				link="http://192.168.38.102:9000/#/home"
			/>
			<DoubleBox title="Placeholder" icon="asterisk" />

			{/* Middle bar */}
			<DoubleBox title="Weather now" icon="sun" />
			<SingleBox title="Flowers" icon="seedling" color="green" />
			<SingleBox title="Placeholder" icon="asterisk" />
			<SingleBox title="Placeholder" icon="asterisk" />
			<DoubleBox title="Placeholder" icon="asterisk" />

			{/* Bottom bar */}
			<DoubleBox title="Weather tomorrow" icon="cloud-rain" />
			<SingleBox title="Placeholder" icon="asterisk" />
			<SingleBox title="Placeholder" icon="asterisk" />
			<SingleBox title="Placeholder" icon="asterisk" />
			<DoubleBox title="Placeholder" icon="asterisk" />
		</div>
	)
}

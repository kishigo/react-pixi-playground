/**
 * Created by Kelvin Ishigo on 4/13/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React, { Component } from 'react';
import { Stage } from "react-pixi-fiber";
import Bunnymark from "../pixi_components/Bunnymark";

const OPTIONS = {
	backgroundColor: 0x1099bb,
};

class BunnymarkExample extends Component {
	render() {
		return (
			<Stage width={800} height={600} options={OPTIONS}>
				<Bunnymark />
			</Stage>
		);
	}
}

export default BunnymarkExample;
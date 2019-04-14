import React from "react";

export default class Traffic extends React.Component {
	constructor() {
		super();

		this.state = {
			ClickedLight: null
		};
	}

	render() {
		let lightOnRed = " ";
		if (this.state.ClickedLight == "circle-red")
			lightOnRed = "selected-red";

		let lightOnOrange = " ";
		if (this.state.ClickedLight == "circle-orange")
			lightOnOrange = "selected-orange";

		let lightOnGreen = " ";
		if (this.state.ClickedLight == "circle-green")
			lightOnGreen = "selected-green";

		return (
			<div>
				<div className="container d-flex justify-content-center">
					<div className="pole" />
					<div className="tl">
						<div className="lights mt-5">
							<div
								className={"circle-red " + lightOnRed}
								onClick={() =>
									this.setState({
										ClickedLight: "circle-red"
									})
								}
							/>
							<div
								className={"circle-orange " + lightOnOrange}
								onClick={() =>
									this.setState({
										ClickedLight: "circle-orange"
									})
								}
							/>
							<div
								className={"circle-green " + lightOnGreen}
								onClick={() =>
									this.setState({
										ClickedLight: "circle-green"
									})
								}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

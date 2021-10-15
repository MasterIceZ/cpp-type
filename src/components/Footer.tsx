import { Component } from "react";
import "../stylesheets/Footer.scss";

export default class Footer extends Component {
	render() {
		return (
			<div className="bottom-area">
				<span className="hint">
					<kbd>Tab</kbd> to restart test
				</span>
				<footer>
					<a href="https://github.com/MasterIceZ/typing-test">
						<span>&lt;/&gt;</span>
						github
					</a>
					<span>
						created by{" "}
						<a href="https://www.github.com/MasterIceZ">
							@MasterIceZ
						</a>
					</span>
				</footer>
			</div>
		);
	}
}

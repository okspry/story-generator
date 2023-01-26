import React from "react";
import { useState } from "react";
import "./styles.css";

function randomValueFromArray(array) {
	const random = Math.floor(Math.random() * array.length);
	return array[random];
}

const insertX = ["Willy the Goblin", "Higgins McBiggins", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
	"spontaneously combusted",
	"melted into a puddle on the sidewalk",
	"turned into a slug and crawled away"
];

function tempFtoC(t) {
	return ((t - 32) * 5) / 9;
}

const XItem = randomValueFromArray(insertX);
const YItem = randomValueFromArray(insertY);
const ZItem = randomValueFromArray(insertZ);
const OriginalTemp = "94 Fahrenheit";
const OriginalWeight = "300 pounds";

export default function App() {
	const [name, setName] = useState("Podrcik");
	const [temperature, setTemperature] = useState(OriginalTemp);
	const [weight, setWeight] = useState(OriginalWeight);
	const [newName, setNewName] = useState(name);
	const [storyVisible, setStoryVisible] = useState(false);
	const [country, setCountry] = useState();

	function ukus(value) {
		if (value === "uk") {
			let ukWeight = Math.round(parseInt(weight) / 14) + " stone";
			let ukTemperature = Math.round(tempFtoC(94)) + " Centigrade";
			setWeight(ukWeight);
			setTemperature(ukTemperature);
		} else {
			setWeight("300 pounds");
			setTemperature("94 Fahrenheit");
		}
	}

	return (
		<div className="App">
			<div>
				<label htmlFor="customname">Enter custom name:</label>
				<input
					type="text"
					id="customname"
					placeholder=""
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</div>
			<div>
				<label htmlFor="us">US</label>
				<input
					type="radio"
					name="ukus"
					value="us"
					defaultChecked
					onChange={async (e) => {
						await setCountry(e.target.value);
						ukus(country);
					}}
				/>
				<label htmlFor="uk">UK</label>
				<input
					type="radio"
					name="ukus"
					value="uk"
					onChange={async (e) => {
						await setCountry(e.target.value);
						ukus(country);
					}}
				/>
			</div>
			<div>
				<button
					className="randomize"
					onClick={async () => {
						setNewName(name);
						setStoryVisible(true);
					}}
				>
					Generate random story
				</button>
			</div>
			<p style={{ visibility: storyVisible }}>
				{`It was ${temperature} outside, so ${XItem} went for a walk. When
				they got to ${YItem}, they stared in horror for a few moments,
				then ${ZItem}. ${newName} saw the whole thing, but was not
				surprised — ${XItem} weighs ${weight}, and it was a hot day.`}
			</p>
		</div>
	);
}

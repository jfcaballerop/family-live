import React, { useEffect, useState } from 'react'

const NoteListBody = ({ items, onAddItems }) => {
	const [elements, setElements] = useState([])


	useEffect(() => {
		if (items.length === 0)
			setElements([])
	}, [items]);

	const addElements = () => {
		setElements([...elements, { item: '' }])
	}

	const handleChange = (i, e) => {
		let newElementsValues = [...elements];
		newElementsValues[i][e.target.name] = e.target.value
		setElements(newElementsValues)
		onAddItems(elements)
	}

	return (
		<>
			{elements.map((item, index) => {
				return (
					<div key={index}>
						<input key={index} type='text' name="item" onChange={e => handleChange(index, e)} />
					</div>
				)
			})}
			<div className="button-section">
				<button className="button add" type="button" onClick={() => addElements()}>Add</button>
				{/* <button className="button submit" type="submit">Submit</button> */}
			</div>
		</>
	)
}

export default NoteListBody

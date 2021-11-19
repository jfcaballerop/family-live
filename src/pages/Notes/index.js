import Button from 'components/Button'
import Modal from 'components/Modal';
import React, { useState } from 'react'

const Notes = () => {
	const [show, setshow] = useState(false);

	const showModal = () => {
		setshow(true);
	}

	const hideModal = () => {
		setshow(false);
	}
	return (
		<div>
			<Button handleClick={showModal}>
				Nueva nota
			</Button>
			<Modal show={show} handleClose={hideModal}>
				Modal text
			</Modal>
			<h1>Notas de la familia: </h1>
		</div>
	)
}

export default Notes

import Button from 'components/Button'
import Modal from 'components/Modal';
import React, { useState } from 'react'
import "assets/styles/notes.scss"

const Notes = () => {
	const [show, setshow] = useState(false);
	const [typeModal, settypeModal] = useState('');
	const [header, setheader] = useState('');

	const onSave = () => {
		console.log('Save NOTE');
		hideModal();
	}

	const showModalList = () => {
		settypeModal('list')
		setheader('Nueva')
		setshow(true);
	}

	const showModalRec = () => {
		settypeModal('rec')
		setheader('Nuevo')
		setshow(true);
	}

	const hideModal = () => {
		setshow(false);
	}
	return (
		<div>
			<Button handleClick={showModalList}>
				Nueva lista
			</Button>
			<Button handleClick={showModalRec}>
				Nuevo recordatorio
			</Button>
			<Modal customClass="noteBody" show={show} type={typeModal} header={header} handleClose={hideModal} handleSave={onSave}>
				<p>Prueba</p>
			</Modal>
			<h1>Notas de la familia: </h1>
		</div>
	)
}

export default Notes

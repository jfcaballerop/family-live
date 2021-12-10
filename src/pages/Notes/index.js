import Button from 'components/Button'
import Modal from 'components/Modal';
import React, { useState } from 'react'
import "assets/styles/notes.scss"
import NoteListBody from 'components/NoteListBody';
import { doFBCreateNote } from 'services/noteServices';

const Notes = () => {
	const [show, setshow] = useState(false);
	const [typeModal, settypeModal] = useState({});
	const [items, setItems] = useState([])

	const onSave = async () => {
		console.log('Save NOTE');
		await doFBCreateNote({ items, username: 'jfcaballero', title: 'nota1' })
		hideModal();
	}

	const showModalList = () => {
		settypeModal({ ...typeModal, type: 'list', header: 'Nueva' })
		setshow(true);
	}

	const showModalRec = () => {
		settypeModal({ ...typeModal, type: 'rec', header: 'Nuevo' })
		setshow(true);
	}

	const hideModal = () => {
		setshow(false);
	}

	const handleItems = (itemsSave) => {
		setItems(itemsSave)
	}
	return (
		<div>
			<Button handleClick={showModalList}>
				Nueva lista
			</Button>
			<Button handleClick={showModalRec}>
				Nuevo recordatorio
			</Button>
			<Modal customClass="noteBody" show={show} type={typeModal} handleClose={hideModal} handleSave={onSave} component={<NoteListBody onAddItems={handleItems} items={items} />}>
			</Modal>
			<h1>Notas de la familia: </h1>
		</div>
	)
}

export default Notes

import Button from 'components/Button';
import React from 'react'
import './modal.scss'
import { typeModal } from 'configuration/htmlElementConfig'

const Modal = ({ handleSave, handleClose, show, type, children, customClass, component }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
	const title = type.type ? typeModal[type.type].title : ''

	return (
		<div className={showHideClassName}>
			<div className="modal-content">
				<div className="modal-header">
					<span className="close" onClick={handleClose}>&times;</span>
					<h2>{type.header} {title}</h2>
				</div>
				<div className={`modal-body ${customClass}`}>
					{component}
				</div>
				<div className="modal-footer">
					<Button handleClick={handleSave}>Guardar</Button>
				</div>
			</div>
		</div>
	)
}

export default Modal

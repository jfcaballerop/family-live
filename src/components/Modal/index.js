import Button from 'components/Button';
import React from 'react'
import './modal.scss'
import { typeModal } from 'configuration/htmlElementConfig'

const Modal = ({ handleSave, handleClose, show, type, children, header, customClass }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
	console.log(type)
	const title = type ? typeModal[type].title : ''

	return (
		<div className={showHideClassName}>
			<div className="modal-content">
				<div className="modal-header">
					<span className="close" onClick={handleClose}>&times;</span>
					<h2>{header} {title}</h2>
				</div>
				<div className={`modal-body ${customClass}`}>
					{children}
				</div>
				<div className="modal-footer">
					<Button handleClick={handleSave}>Guardar</Button>
				</div>
			</div>
		</div>
	)
}

export default Modal

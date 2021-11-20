import React from 'react'
import './modal.scss'

const Modal = ({ handleClose, show, children, header }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<div className="modal-content">
				<div className="modal-header">
					<span className="close" onClick={handleClose}>&times;</span>
					<h2>{header}</h2>
				</div>
				{children}
				<div className="modal-footer">
					<button type="button" onClick={handleClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal

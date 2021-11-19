import React from 'react'
import './modal.scss'

const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showHideClassName}>
			<div className="modal-content">
				<div className="modal-header">
					<span className="close" onClick={handleClose}>&times;</span>
					<h2>Modal Header</h2>
				</div>
				<p>{children}</p>
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

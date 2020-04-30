import React, { useEffect, useRef } from 'react'
import {createPortal} from 'react-dom'

import './_Modal.scss'

const Modal = ({children}) => {
  const el = document.getElementById('modals-root')
  const modalRef = useRef(null)

  useEffect(() => {
    document.body.style.cssText = 'overflow-y: hidden; height: 100vh'
    modalRef.current.focus()

    return () => document.body.style.cssText = ''
  }, [])

  return createPortal(<div className="modal">
    <div className="container modal__container" ref={modalRef}>
      {children}
    </div>
  </div>, el)
}
export default Modal
import React, { useState } from 'react'
import { Modal, ModalBody, Table } from 'reactstrap'
import ModalCancelarTicketSupport from './modalTicketSupport/modalCancelarTicketSupport';

function TicketSuport({ closemodalAndOpenOtherModal }) {

  const [modalCancelTicketSupport, setModalCancelarTicket] = useState(false);

  const data = [
    {
      tema: 'Problema con el sitio web',
      fecha: '2023-02-09  9:30 PM',
      estatus: 'Pediente',
      tipo: '0'
    }
    // Agrega más objetos de datos según tus necesidades
  ];

  const closeModalCancelTicketSupport = () => {
    setModalCancelarTicket(false);
  }
  return (
    <>


      <div>
        <Table>
          <thead>
            <tr>
              <th>Tema</th>
              <th>Fecha de entrega</th>
              <th>Estatus</th>
              <th>Tipo</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ color: '#FC5241' }}>{item.tema}</td>
                <td>{item.fecha}</td>
                <td>{item.estatus}</td>
                <td>{item.tipo}</td>
                <td>
                  <div className="opcionesDetallePedido">
                    <a href="#" className=" btn btnVerDetallesPedido" onClick={() => closemodalAndOpenOtherModal()}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>
                      Ver
                    </a>
                    <a href="#" className=" btn btnCancelarPedido" onClick={() => setModalCancelarTicket(true)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                      </svg>
                      Cancelar
                    </a>
                  </div>

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* Modal de cancelar ticket de soporte */}
      <Modal
        className="modal-dialog-centered modal-sm"
        toggle={() => closeModalCancelTicketSupport()}
        isOpen={modalCancelTicketSupport}
      >
        <ModalBody>
          <ModalCancelarTicketSupport />
        </ModalBody>
      </Modal>
    </>
  )
}

export default TicketSuport

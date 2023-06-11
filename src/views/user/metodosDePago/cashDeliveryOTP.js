import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, FormGroup, Form, Input, InputGroupText, InputGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import VerificationInput from "react-verification-input";
import './cash_delivery.css';

function CashDeliveryOTP() {

  /* This code is selecting all input elements with the class "code-input" and adding event listeners
  for "keydown" and "input" events. */
  const inputElements = [...document.querySelectorAll("input.code-input")];

  inputElements.forEach((ele, index) => {
    ele.addEventListener("keydown", (e) => {
      // if the keycode is backspace & the current field is empty
      // focus the input before the current. Then the event happens
      // which will clear the "before" input box.
      if (e.keyCode === 8 && e.target.value === "")
        inputElements[Math.max(0, index - 1)].focus();
    });
    ele.addEventListener("input", (e) => {
      // take the first character of the input
      // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
      // but I'm willing to overlook insane security code practices.
      const [first, ...rest] = e.target.value;
      e.target.value = first ?? ""; // first will be undefined when backspace was entered, so set the input to ""
      const lastInputBox = index === inputElements.length - 1;
      const didInsertContent = first !== undefined;
      if (didInsertContent && !lastInputBox) {
        // continue to input the rest of the string
        inputElements[index + 1].focus();
        inputElements[index + 1].value = rest.join("");
        inputElements[index + 1].dispatchEvent(new Event("input"));
      }
    });
  });

  return (
    <>
      <Row>
        <Col>
          <div style={{ paddingLeft: "2%", paddingRight: "2%", marginBottom: '10px' }}>
            <div
              className='encabezadoOTP'
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection:'column'
              }}
            >
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.2002 11.9992C4.2002 7.6914 7.69237 4.19922 12.0002 4.19922C16.308 4.19922 19.8002 7.6914 19.8002 11.9992V17.1698C19.8002 17.5471 19.8002 17.8725 19.7744 18.1387C19.7471 18.4207 19.6864 18.6989 19.5243 18.9569C19.3804 19.1858 19.1868 19.3795 18.9579 19.5233C18.6999 19.6854 18.4217 19.7461 18.1397 19.7734C17.8734 19.7992 17.5481 19.7992 17.1708 19.7992H12.0002C7.69237 19.7992 4.2002 16.307 4.2002 11.9992ZM12.0002 5.39922C8.35512 5.39922 5.4002 8.35414 5.4002 11.9992C5.4002 15.6443 8.35512 18.5992 12.0002 18.5992H17.1431C17.5559 18.5992 17.8225 18.5986 18.0239 18.579C18.216 18.5604 18.2846 18.5291 18.3194 18.5073C18.3957 18.4593 18.4603 18.3948 18.5082 18.3184C18.5301 18.2837 18.5614 18.215 18.58 18.0229C18.5995 17.8215 18.6002 17.5549 18.6002 17.1421V11.9992C18.6002 8.35414 15.6453 5.39922 12.0002 5.39922ZM7.8002 10.7992C7.8002 10.4678 8.06882 10.1992 8.4002 10.1992H12.6002C12.9316 10.1992 13.2002 10.4678 13.2002 10.7992C13.2002 11.1306 12.9316 11.3992 12.6002 11.3992H8.4002C8.06882 11.3992 7.8002 11.1306 7.8002 10.7992ZM7.8002 13.1992C7.8002 12.8678 8.06882 12.5992 8.4002 12.5992H15.6002C15.9316 12.5992 16.2002 12.8678 16.2002 13.1992C16.2002 13.5306 15.9316 13.7992 15.6002 13.7992H8.4002C8.06882 13.7992 7.8002 13.5306 7.8002 13.1992Z" fill="#171523" />
              </svg>
              <p style={{ color: "#74737B", marginBottom: "20px" , textAlign:'center'}}>Por favor ingresa el código que te hemos enviado para confirmar tu pedido</p>

            </div>
            <div className="resendAndSubmitOTP" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', gap: '5px' }}>
              <fieldset class='number-code'>

                <div className="codigoOTP" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '5px' }}>
                  <input name='code' class='code-input' required />
                  <input name='code' class='code-input' required />
                  <input name='code' class='code-input' required />
                  <input name='code' class='code-input' required />
                  <input name='code' class='code-input' required />
                  <input name='code' class='code-input' required />
                </div>
              </fieldset>
              <p><a href='#'>Reenviar mensaje</a></p>
              <a href='#' className="verficationOTP" >Validar</a>
            </div>
          </div>
        </Col>
      </Row >
    </>

  )
}

export default CashDeliveryOTP

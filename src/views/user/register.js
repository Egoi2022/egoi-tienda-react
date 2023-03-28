/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Col, Row, Button, FormGroup, Form, Input, InputGroupText,InputGroup } from "reactstrap";
import { Eye, EyeSlash, X } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import { ReactComponent as UserIcon } from "../../assets/egoi_icons/user.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import es from "react-phone-input-2/lang/es.json";
import "../user/input-con-icono.css";
import { useForm } from 'react-hook-form';
import Registro from '../../services/registro';


const Register = () => {

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [cellphone, setCellphone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [vista, setVista] = useState('formulario');
  const [errorMostrar, setErrorMostrar] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    setLoading(true);
    Registro(data, window.location.origin.toString())
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'El registro ha sido completado exitosamente.',
        confirmButtonColor: '#0d6efd',
      });
      setLoading(false);
    })
    .catch((error) => {
      if (error.response.data === 'username already exists') {
        setErrorMostrar('El usuario ya existe');
      }
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Se ha producido un error durante el registro. Por favor, inténtelo de nuevo.',
        confirmButtonColor: '#dc3545',
      });
      setLoading(false);
    })
    reset();
  };

  const handleSubmitPersona = (event) => {
    console.log(event);
    event.preventDefault();  

    // Validar que el nombre y apellido solo contengan letras y espacios
    const nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(name) || !nameRegex.test(lastName)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, ingrese un nombre y apellido válido. Solo se permiten letras y espacios.",
        confirmButtonColor: "#0d6efd",
      });
      return;
    }

    // Validar que el correo electrónico tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, ingrese un correo electrónico válido. debe contener @ y .",
        confirmButtonColor: "#0d6efd",
      });
      return;
    }
  
    if (!name || !lastName || !email || !phoneNumber) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, complete todos los campos. ",
        confirmButtonColor: "#0d6efd",
      });
      return;
    }

    // Validar que la contraseña tenga al menos 8 caracteres
    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, ingrese una contraseña de al menos 8 caracteres.",
        confirmButtonColor: "#0d6efd",
      });
      return; 
    }

    // Validar que la contraseña y la confirmación de la contraseña sean iguales
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden.",
        confirmButtonColor: "#0d6efd",
      });
      return;
    }

    // Validar que el número de teléfono tenga un formato válido
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, ingrese un número de teléfono válido. Debe contener 10 dígitos.",
        confirmButtonColor: "#0d6efd",
      });
      return;
    }


    const data = {};

    data.f_name = name;
    data.l_name = lastName;
    data.email = email;
    data.password = password;
    data.phone = phoneNumber;

    onSubmit(data);
    limpiarCampos();
  };

 

  const limpiarCampos = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNumber("");
    // setCellphone("");
  };

  return (
    <>
      <Row>
        <Col>
          <div style={{ paddingLeft: "2%", paddingRight: "2%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h5 style={{ color: "#fc5241" }}>Registro</h5>
            </div>
            <Form onSubmit={handleSubmitPersona}>

              <FormGroup controlId="formBasicName">
                  <Input  addon={true}
                  name="name"
                   className="form-control"
                    style={{
                      borderRadius: "50px",
                    }}
                    placeholder="Nombre"
                    value={name} onChange={(event) => setName(event.target.value)}
                  />
              
              </FormGroup>

              <FormGroup controlId="formBasicLastName">
                  <Input
                    style={{
                      borderRadius: "50px",
                    }}
                    placeholder="Apellido"
                    value={lastName} onChange={(event) => setLastName(event.target.value)}
                  />
              </FormGroup>

              <FormGroup controlId="formBasicEmail">
                <InputGroup style={{ borderRadius: "50px" }}>
                  <Input
                    type="email"
                    style={{
                      borderRadius: "50px",
                    }}
                    placeholder="Email"
                    value={email} onChange={(event) => setEmail(event.target.value)}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup controlId="formBasicCellphone">
                <PhoneInput
                  localization={es}
                  country={"co"}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  inputStyle={{
                    width: "100%",
                    height: "10px",
                    borderRadius: "50px",
                    outline: "none",
                    ":focus": {
                      borderRadius: "50px",
                    },
                  }}
                />
              </FormGroup>

              <FormGroup controlId="formBasicPassword">
                <InputGroup style={{ borderRadius: "50px" }}>
                  <Input
                    style={{
                      
                      borderTopLeftRadius: "50px",
                      borderBottomLeftRadius: "50px",
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    value={password} onChange={(event) => setPassword(event.target.value)}
                  />
                  <InputGroupText
                    style={{
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",

                      width: "45px",
                      borderRight: "none !important",
                      backgroundColor: "white",
                    }}
                    onClick={toggleShowPassword}
                  >
                    {" "}
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </InputGroupText>
                </InputGroup>
              </FormGroup>

              <FormGroup controlId="formBasicConfirmPassword">
                <InputGroup style={{ borderRadius: "50px" }}>
                  <Input
                    style={{
                      borderTopLeftRadius: "50px",
                      borderBottomLeftRadius: "50px",
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirmar contraseña"
                    value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                  <InputGroupText
                    style={{
                      cursor: "pointer",
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",

                      width: "45px",
                      borderRight: "none !important",
                      backgroundColor: "white",
                    }}
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </InputGroupText>
                </InputGroup>
              </FormGroup>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <Button
                  style={{
                    backgroundColor: "#fc5241",
                    borderColor: "#fc5241",
                    borderRadius: "50px",
                  }}
                  type="submit"
                >
                 {loading ? 'Cargando...' : 'Registrarme'}
                </Button>
                <br />
                <Button
                  style={{
                    backgroundColor: "white",
                    borderColor: "#fc5241",
                    color: "#fc5241",
                    borderRadius: "50px",
                  }}
                  onClick={() => limpiarCampos()}
                >
                  Ya tengo cuenta
                </Button>
              </div>

            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Register;

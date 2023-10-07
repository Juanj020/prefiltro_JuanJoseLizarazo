import React, { useEffect, useState } from 'react';
import './Admi.css';
import { Table } from 'semantic-ui-react';
import axios from 'axios';
import UpdateModal from './UpdateAdmi'
import imagenEditar from './../../img/editar.png'
import imagenBorrar from './../../img/eliminarxd-removebg-preview.png'

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:4002/api/administrador`);
        setAPIData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:4002/api/administrador/${_id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getData = () => {
    axios.get(`http://localhost:4002/api/administrador`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const openUpdateModal = (data) => {
    setDataToUpdate(data);
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    setDataToUpdate(null);
  };

  const updateData = (_id, idPersonal, idRestaurante, correo, telefono) => {
    setAPIData((prevData) =>
      prevData.map((data) =>
        data._id === _id ? { ...data, idPersonal, idRestaurante, correo, telefono } : data
      )
    );
  };

  return (
    <div className='contenido-medio'>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre Personal</Table.HeaderCell>
            <Table.HeaderCell>Nombre Restaurante</Table.HeaderCell>
            <Table.HeaderCell>Correo</Table.HeaderCell>
            <Table.HeaderCell>Telefono</Table.HeaderCell>
            <Table.HeaderCell>Actualizar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell>{data.idPersonal}</Table.Cell>
              <Table.Cell>{data.idRestaurante}</Table.Cell>
              <Table.Cell>{data.correo}</Table.Cell>
              <Table.Cell>{data.telefono}</Table.Cell>
              <Table.Cell>
              <img src={imagenEditar} width={"30px"} alt='dasd' onClick={() => openUpdateModal(data)}></img>
              </Table.Cell>
              <Table.Cell>
                <img src={imagenBorrar} width={"30px"} alt='dasd' onClick={() => onDelete(data._id)}></img>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <UpdateModal
        isOpen={updateModalOpen}
        closeModal={closeUpdateModal}
        dataToUpdate={dataToUpdate}
        updateData={updateData}
      />
    </div>
  );
}

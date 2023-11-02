import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { Table } from "flowbite-react";
import { FaEdit } from "react-icons/fa";
import postAPI from "../../../server/post/index.js";
import ServiceModal from "../../../components/ServiceModal/ServiceModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

const Services = () => {
  const [services, setServices] = React.useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const FetchServices = async () => {
    try {
      const response = await postAPI.getServices();
      setServices(response.data.services);
      console.log(services);
    } catch (err) {
      console.error("error while fetching services", err);
    }
  };

 const createService = async (newService) => {
   try {
     const response = await postAPI.createService(newService);

     if (response.status === 201) {
       console.log("Service created successfully");
       toast.success("Service created successfully");
       FetchServices();
     } else {
       console.error("Error creating a service:", response.data);
       toast.error("Error creating a service");
     }

     console.log("Creating a new service:", newService);

     setOpenModal(false);
   } catch (error) {
     console.error("Error creating a service:", error);
     toast.error("Error creating a service");
   }
 };


  useEffect(() => {
    FetchServices();
  }, []);

  return (
    <>
      <div className="services_wrapper">
        <div className="service_header">
          <div className="">
            <h2>Xizmatlar</h2>
            <Breadcrumb
              aria-label="Default breadcrumb example"
              className="text-blue-500"
            >
              <Breadcrumb.Item href="/dashboard/main">
                <p>Bosh sahifa</p>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Xizmatlar</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="serviceAdd_btn">
            <button onClick={() => setOpenModal(true)}>+</button>
          </div>
        </div>

        <div className="s_table">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Kurs Id</Table.HeadCell>
              <Table.HeadCell>Kurs Nomi</Table.HeadCell>
              <Table.HeadCell>Buyurtmachilar soni</Table.HeadCell>
              <Table.HeadCell>Yaratilgan vaqti</Table.HeadCell>
              <Table.HeadCell>Tahrirlash</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {services.map((item, index) => (
                <Table.Row
                  key={item._id} // Provide a unique key
                  className="tr bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="td whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="td">{item._id}</Table.Cell>
                  <Table.Cell className="td">{item.title}</Table.Cell>
                  <Table.Cell className="td">{item.users.length}</Table.Cell>
                  <Table.Cell className="td">
                    {item.createdAt.slice(0, 10)}
                  </Table.Cell>

                  <Table.Cell>
                    <button className="edit_btn">
                      <FaEdit />
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>

        <ServiceModal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          onCreateService={createService}
        />
      </div>
    </>
  );
};

export default Services;

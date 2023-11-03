import React from "react";
import { Breadcrumb } from "flowbite-react";
import { Table } from "flowbite-react";

import postAPI from "../../../server/post/index.js";
import "./style.scss";

const Customers = () => {
  const [services, setServices] = React.useState([]);

  const FetchServices = async () => {
    try {
      const response = await postAPI.getServices();
      setServices(response.data.services);
    } catch (err) {
      console.error("error while fetching services", err);
    }
  };

  React.useEffect(() => {
    FetchServices();
  }, []);

  console.log(services);
  return (
    <>
      <div className="customers_wrapper">
        <div className="c_header">
          <h2>Buyurtmachilar</h2>

          <Breadcrumb
            aria-label="Default breadcrumb example"
            className="text-blue-500"
          >
            <Breadcrumb.Item href="/dashboard/main">
              <p>Bosh sahifa</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Buyurtmachilar</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="table_box">
          <Table className="table">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>F.I.SH</Table.HeadCell>
              <Table.HeadCell>Telefon</Table.HeadCell>
              <Table.HeadCell>Xizmat</Table.HeadCell>
              <Table.HeadCell>Ro'yxatdan o'tgan vaqti</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {services?.map((service, index) => (
                <Table.Row
                  className=" tr  dark:border-gray-700 dark:bg-gray-800"
                  key={service._id}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark-text-white">
                    {service.users.length > 0
                      ? service.users[0].fullName
                      : "N/A"}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark-text-white">
                    {service.users.length > 0
                      ? service.users[0].phoneNumber
                      : "N/A"}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark-text-white">
                    {service.title}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark-text-white">
                    {new Date(service.createdAt).toLocaleString()}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Customers;

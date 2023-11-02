import React from "react";
import { Breadcrumb } from "flowbite-react";
import "./style.scss";

const Customers = () => {
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
      </div>
    </>
  );
};

export default Customers;

import React, { useState, useEffect } from "react";
import { Breadcrumb } from "flowbite-react";
import { Table } from "flowbite-react";
import postAPI from "../../../server/post/index.js";
import { FaEdit, FaCheck } from "react-icons/fa";
import "./style.scss";

const Oquvchilar = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postAPI
      .getStudents()
      .then((response) => {
        if (response.status === 200) {
          setStudents(response.data.students);
          setLoading(false);
        } else {
          console.error("Error fetching students data.");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error during student data request:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="students_wrapper">
        <div className="s_header">
          <div className="">
            <h2>O'quvchilar</h2>
            <Breadcrumb
              aria-label="Default breadcrumb example"
              className="text-blue-500"
            >
              <Breadcrumb.Item href="/dashboard/main">
                <p>Bosh sahifa</p>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">O'quvchilar</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        
        </div>

        <div className="table_wrapper">
          <Table>
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>F.I.SH</Table.HeadCell>
              <Table.HeadCell>Telefon</Table.HeadCell>
              <Table.HeadCell>kurs</Table.HeadCell>
              <Table.HeadCell>Ro'yxatdan o'tgan vaqti</Table.HeadCell>
              <Table.HeadCell>Holat</Table.HeadCell>
              <Table.HeadCell>Taxrirlash</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {students.map((student, index) => (
                <Table.Row
                  key={index}
                  className="tr bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell>{student.fullName}</Table.Cell>
                  <Table.Cell>{student.phoneNumber}</Table.Cell>
                  <Table.Cell>{student.courseId.title}</Table.Cell>
                  <Table.Cell>{student.createdAt.slice(0, 10)}</Table.Cell>
                  <Table.Cell className="tds">
                    <button className="check">
                      <FaCheck />
                    </button>
                  </Table.Cell>
                  <Table.Cell className="td">
                    <button className="edit">
                      <FaEdit />
                    </button>
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

export default Oquvchilar;

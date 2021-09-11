import React, { useState, useEffect } from 'react';
import { fetchGetQuiitaData } from '../fetch/index';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const ComponentB = () => {
  const [data, setData] = useState([])
  const {slug} = useParams()
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetchGetQuiitaData()
    setData(res.data)
  }

  console.log("🚀 ~ file: ComponentB.js ~ line 5 ~ ComponentB ~ data ~ Level8~", data)
  
  return (
    <div>
      <h1>Level8</h1>
      <p>F12を参照</p>
      <h1>Level9</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <a href={d.url}>
                      {d.title}
                    </a>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
      <h1>Level10</h1>
      <p>Headerで実装</p>
      <h1>Level11</h1>
      <p>
        以下、文字列はparamsから取得
        <h3>{slug}</h3>
      </p>
    </div>
  );
}

export default ComponentB

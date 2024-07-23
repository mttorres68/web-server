/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import style from "./Home.module.css";
import { ONU_GET, READ_FILE_ONU, SAVE_ONUS_DATA, SEARCH_SN } from "../api/api";
import useForm from "../hooks/useForm";

export default function Home() {
  const [onu, setOnu] = useState([]);
  const [readOnu, setReadOnu] = useState(false);
  const token = localStorage.getItem("userToken");
  const sn = useForm();

  async function getOnus() {
    if (token) {
      const { url, options } = ONU_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setOnu(json);
    }
  }

  async function readFileOnu() {
    const { url, options } = READ_FILE_ONU(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    setReadOnu(true);
  }

  async function saveOnus() {
    const { url, options } = SAVE_ONUS_DATA(token);
    const response = await fetch(url, options);
    const json = await response.json();
    getOnus();
    console.log(json);
  }

  async function searchSn() {
    if (sn.value !== "") {
      if (token) {
        const body = {
          sn: sn.value,
        };
        const { url, options } = SEARCH_SN(body, token);
        const response = await fetch(url, options);
        const json = await response.json();
        setOnu(json);
      }
    }
  }

  async function handleClick(event) {
    console.log(event.currentTarget.value);
    getOnus();
  }

  useEffect(() => {
    getOnus();
  }, []);

  return (
    <div>
      {onu && onu.length === 0 && !readOnu ? (
        <div className={style.containerBtns}>
          {!readOnu ? (
            <button onClick={readFileOnu} className={style.readBtn}>
              Ler dados
            </button>
          ) : (
            <button onClick={saveOnus} className={style.saveBtn}>
              Salvar dados
            </button>
          )}
        </div>
      ) : null}
      <div className={style.containerSearch}>
        <input
          type="search"
          name="sn"
          id="sn"
          placeholder="Filtrar sn..."
          onClick={(event) => handleClick(event)}
          {...sn}
        />
        <button onClick={searchSn}>Buscar SN</button>
      </div>
      <div className={style.fixTableHead}>
        <table className={style}>
          <thead>
            <tr>
              <th></th>
              <th>ONT ID</th>
              <th>PORT </th>
              <th>SLOT</th>
              <th>SN</th>
              <th>STATE</th>
              <th>OLT</th>
            </tr>
          </thead>
          <tbody>
            {/* {filteredResult && filteredResult.length > 1
              ? filteredResult.map((item, index) => (
                  <tr key={item.sn}>
                    <td>{index + 1}</td>
                    <td>{item.ont_id}</td>
                    <td>{item.port}</td>
                    <td>{item.slot}</td>
                    <td>{item.sn}</td>
                    <td>{item.state}</td>
                    <td>{item.sn.startsWith("SN:") ? "ZTE" : "Huawei"}</td>
                  </tr>
                ))
                ))}
                :
                */}
            {onu &&
              onu.map((item, index) => (
                <tr key={item.sn}>
                  <td>{index + 1}</td>
                  <td>{item.ont_id}</td>
                  <td>{item.port}</td>
                  <td>{item.slot}</td>
                  <td>{item.sn}</td>
                  <td>{item.state}</td>
                  <td>{item.sn.startsWith("SN:") ? "ZTE" : "Huawei"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

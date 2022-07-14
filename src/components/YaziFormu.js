
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';

//history=usenavigatettir buttonlarla ılgılı yonlendırmeyı yapar 
function YaziFormu() {
  const [yazi, setYazi] = useState({ title: "", content: "" });
  const [hata, setHata] = useState("");
  const onInputChange = (event) => setYazi({ ...yazi, [event.target.name]: event.target.value });
  const navigate = useNavigate();
  const onFormSubmit = (event) => {
    event.preventDefault();
    setHata("");
    api()
    .post('/posts/', yazi)
      .then((response) => {

        navigate("/");
      })
      .catch((error) => {
        setHata("Başlık ve yazı içeriği alanları zorunlduur.")
      })
  };
  return (
    <>
    <div style={{ width: "500px", marginLeft: "40%", marginTop: "10%" }}>
      <h2>YaziEkle</h2>
      <div className="ui form error">
        {hata && (
           <div className="ui error message">
          <div className="header">Hata</div>
          <p>{hata} </p>
        </div>
        )}
       
       
      </div>
      <form >
        <div className="form-group">
          <label for="exampleFormControlInput1">Yazı Başlığı</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" name="title" onChange={onInputChange} />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1" classNameName="mr-3">Yazı İçeriği</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="content" onChange={onInputChange}  ></textarea>
          <button type="button" className="btn btn-primary mr-2 mt-3" onClick={onFormSubmit}>Gönder</button>
          <button type="button" className="btn btn-dark mt-3">İptal Et</button>

        </div>
      </form>
    </div>
    </>
  )
}

export default YaziFormu;
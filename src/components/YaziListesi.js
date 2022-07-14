import React, { useEffect, useState } from "react";
import { api } from "../api";
 import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const YaziListesi = () => {
  const navigate = useNavigate();
    const [yaziListesi, setYaziListesi] = useState([]);
    useEffect(() => {
      api()
      .get('/posts')
            .then((response) => {
                setYaziListesi(response.data);

            });
    }, []);

    return (
        <div className="ui relaxed divided list">
         
          {yaziListesi.map((yazi) => {
            return (
              <div className="item" key={yazi.id}>
                <i className="large github middle aligned icon"></i>
                <div className="content">
                  <Link to={`yazi/${yazi.id}`} >
                    {yazi.title}
                  </Link>
                  <div className="description">{yazi.created_at}</div>n
                </div>
              </div>
            );
          })}
                  <button type="button" className="btn btn-primary mr-2 mt-3" onClick={()=>{
              navigate('/YaziEkle')
            }}>Yazı ekle</button>
        </div>
        
    
      );
    };
    
    export default YaziListesi;
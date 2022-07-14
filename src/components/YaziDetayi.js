import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from '../api';

import YorumListesi from "./YorumListesi";


const YaziDetayi = () => {
  const { id } = useParams()
  const [yaziDetayi, setYaziDetayi] = useState({});

  // const [display_name, setDisplay_name] = useState('');
  // const [body, setBody] = useState('');




  useEffect(() => {

    api()
      .get(`/posts/${id}`)
      .then((response) => {
        setYaziDetayi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
 
  }, [id]);



  return (
    <React.Fragment>


      <div className="ui raised very padded text container segment">
        <h2 className="ui header">{yaziDetayi.title} </h2>
        <p className="header">{yaziDetayi.created_at} </p>
        <p className="header">{yaziDetayi.content} </p>
      </div>    

      <YorumListesi/>

  
    </React.Fragment>
  );
};
export default YaziDetayi
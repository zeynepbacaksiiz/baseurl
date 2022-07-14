
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { api } from "../api";


const YORUM_BASLANGIC = {
    display_name: "", body: "", //basta bos attık
};
function YorumListesi() {
    const { id } = useParams()
    const [yorumlar, setYorumlar] = useState([]);
    const [yorum, setyorum] = useState(YORUM_BASLANGIC); //basta bos olsunlar
    const handleCommentSubmit = () => {
        api()
            .post(
                `/posts/${id}/comments`, yorum) //kaydedıleceklerı yolladık gondeırlıcek yanı
            .then((response) => {
                setYorumlar([...yorumlar, response.data]);//oncekı yorumları state tuttuk bu kısmı murata sor gerke var mı
                setyorum(YORUM_BASLANGIC); //TEMİZLEDİK İNPUTLARI
            }).catch(error => {
                console.log(error)
            })
    };
    const handleOnChange = (event) => {
        setyorum({ ...yorum, [event.target.name]: event.target.value });
        //yorum kaydedılıcek daha oncekı degerler sılınmıcek hangı uı ıcınde cagırılırsa onun değeri alınır
    };
    useEffect(() => {
        api()
            .get(`/posts/${id}/comments`) //yorumları getırıdk
            .then((response) => {
                setYorumlar(response.data);
            });

    }, []);
    return (
        <div>YorumListesi

            <h3>Yorumlar</h3>
            {yorumlar.map(yorum => {
                return (
                    <div className="ui relaxed list" key={yorum.id}>
                        <div className="item">
                            <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" />
                            <div className="content">
                                <a className="header">
                                    {yorum.display_name}
                                </a>
                                <div className="description">{yorum.body} </div>
                            </div>
                        </div>

                    </div>
                )
            })}
         <h3>Yorum Yaz</h3>
           <form className="ui form " onSubmit={(e) => {
               e.preventDefault();
               handleCommentSubmit(); //gondeılıcek
           }}> <div className="ui mini icon input">
                   <input type="text" placeholder="Adınız" name="display_name" onChange={handleOnChange} value={yorum.display_name} />
                   {/* //yorum ıcındekı body */}
                   <i className="search icon"></i>
               </div>

               <textarea placeholder='Yorumumuz' rows="3" name="body" onChange={handleOnChange} value={yorum.body} ></textarea>
               <button className="ui blue button" type="submit">
                   Gönder
               </button>
           </form>
        </div>
  
    )
}

export default YorumListesi
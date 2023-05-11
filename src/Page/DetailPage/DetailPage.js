import React, { useEffect, useState } from 'react'
import { detailService } from '../../service/detailService'
import { useParams } from 'react-router-dom'
import Title from './Title/Title';
import BodyDetail from './BodyDetail/BodyDetail';
import Comment from './Comment/Comment';

export default function DetailPage() {
  let [detail, setDetail] = useState({})
  let { id } = useParams();


  useEffect(() => {
    detailService
      .getDetail(id)
      .then((res) => {

        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
      
      
  }, [])

  console.log(detail.maViTri);
  return (
    <div className='container mx-auto px-20'>

      <Title ten={detail.tenPhong} viTri={detail.maViTri}/>
      <img src={detail.hinhAnh} alt="" />
      <BodyDetail />
      <Comment  />
    </div>
  )
}

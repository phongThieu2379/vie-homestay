import React, { useEffect, useState } from 'react'
import { detailService } from '../../service/detailService'
import { useParams } from 'react-router-dom'
import Title from './Title/Title';
import BodyDetail from './BodyDetail/BodyDetail';
import Comment from './Comment/Comment';
import { useDispatch } from 'react-redux';
import { listRoomAction } from '../../redux-toolkit/detailSlice';

export default function DetailPage() {
  let [detail, setDetail] = useState([])
  let { id } = useParams();
  let dispatch =useDispatch()

  useEffect(() => {
    detailService
      .getDetail(id)
      .then((res) => {
        setDetail(res.data.content);
        dispatch(listRoomAction(res.data.content))
        console.log("detail")
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div className='container mx-auto px-20 my-10'>

      <Title key={detail.id} ten={detail.tenPhong} id={detail.maViTri} />
      <img src={detail.hinhAnh} alt="" />
      <BodyDetail key={detail.id} detail={detail} />
      <Comment key={detail.id} id={detail.id} />
    </div>
  )
}

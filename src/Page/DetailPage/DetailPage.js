import React, { useEffect, useState } from 'react'
import { detailService } from '../../service/detailService'
import { useParams } from 'react-router-dom'
import Title from './Title/Title';
import BodyDetail from './BodyDetail/BodyDetail';
import Comment from './Comment/Comment';
import { useDispatch } from 'react-redux';
import { listRoomAction } from '../../redux-toolkit/detailSlice';
import { setLoadingOffAction, setLoadingOnAction } from '../../redux-toolkit/spinnerSlice';

export default function DetailPage() {
  let [detail, setDetail] = useState([])
  let { id } = useParams();
  let dispatch =useDispatch()

  useEffect(() => {
    dispatch(setLoadingOnAction());
    detailService
      .getDetail(id)
      .then((res) => {
        setDetail(res.data.content);
        dispatch(listRoomAction(res.data.content))
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOffAction());
      });
  }, [])

  return (
    <div className='container mx-auto px-20 my-10'>

      <Title ten={detail.tenPhong} />
      <img style={{width:"60vw" , objectFit:"cover"}} src={detail.hinhAnh} alt="" />
      <BodyDetail  detail={detail} />
      <Comment  id={detail.id} />
    </div>
  )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak } from '../../redux/action/kontakAction';

const ListKontak = () => {

    const { getListKontakResult, getListKontakLoading, getListKontakError } = 
    useSelector ((state) => state.KontakReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        //get list kontak
        dispatch(getListKontak());

    }, [dispatch])


  return (
    <div>
        <h4>List Dosen</h4>
        {getListKontakResult ? (
            getListKontakResult.map((kontak) => {
                for(var i=1; i<=3; i++){
                return (
                        <p  key={kontak.id}>{kontak.nama}-{kontak.jurusan}</p>
                    
                )
                }
            })

        ) : getListKontakLoading? (
           <p>Loading...</p>
        ) : (
            <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
        )}
    </div>
  )
}

export default ListKontak

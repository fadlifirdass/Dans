import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../style/home.css'
import { Link } from 'react-router-dom'
import Mahasiswalist from "../mahasiswalist/mahasiswa.json"
import Infomhs from '../components/infomhs'
import pic from '../img/pp.webp'
import Judul2 from '../components/Judul2'



const Home = () => {
const location =  useLocation();
let {userId} = useParams();
const fullName = location.state?.data?.fullname;
const coba="Halo 👋";


const [value, setValue] = useState({
  id : 1,
  nim : '-',
  nama : '-',
  alamat : '-',
  sertifikat:'-',
  jurusan : '-' 
});

const [judulori, setJudul] = useState('Dashboard');


  return (
    <div>
      <div className='judul'>
        <Judul2 judul2={judulori}/>
        </div>
        <div class="sidebar">
          <img className='pic' src={pic} alt="" />
          <p className='fullname'>{fullName}</p>
          <a href="#"><Link to ='/home/:userId'>Home</Link></a>
          <a href="#"><Link to='/WillUnMount'>Sertifikat</Link></a>
          <a href="#"><Link to='/list'>Dosen</Link></a>
  
    </div>

      <div className='main'>
       <h3>, Selamat Siang {fullName} </h3>
       <Infomhs aw={coba}/>
        <h2 className='headerdaftarmhs'>Daftar Mahasiswa</h2>
        <div className='info2'>
          <table>
            <tr>
              <th colspan='2' className='informasi'>Informasi</th>
            </tr>
            <tr>
              <td>NIM</td>
              <td>{value.nim}</td>
            </tr>
            <tr>
              <td>Nama</td>
              <td>{value.nama}</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>{value.alamat}</td>
            </tr>
            <tr>
              <td>Sertifikat</td>
              <td>{value.sertifikat}</td>
            </tr>
            <tr>
              <td>Jurusan</td>
              <td>{value.jurusan}</td>
            </tr>
          </table>
        </div>
        
        {/* fetch data dr json */}
        {
          Mahasiswalist.map( mahasiswa => {
            return(
                <div>
                  <div className='info'>    
                      <h2>{mahasiswa.nama}</h2>
                      <p className='nim'>{mahasiswa.nim}</p>
                      <p>{mahasiswa.jurusan}</p>
                      <p><button>Edit</button><span/>
                      <button onClick={() => setValue({
                        nama : 'Joe',
                        alamat : 'Bandung', 
                        jurusan : 'Teknik Informatika',
                        sertifikat : 'Yes', 
                        nim : '10115075'
                        })}>Info</button></p>
                  </div>
                  </div>
            )
          })
        }
          <div>
           </div>
       </div>
    </div>
  )
}

export default Home

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({getimages}) {
    const notify = ()=>{
        getimages()
        toast.success('Images Fetched Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
    }
    
  return (
    <div>
      <button  onClick={notify} className='border-2 px-2 text-white py-1'>Fetch Images</button>
      <ToastContainer />
    </div>
  )
}

export default Toast

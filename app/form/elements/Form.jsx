"use client"
import React, {useState} from 'react'
import SignUpInfo from './SignUpInfo';
import Owner from './Owner';
import Display from './Display';
import DisplayFiles from './DisplayFiles';

const Form = () => {

  const [page, setPage] = useState(0);

  const FormTitles = [
    "Grant S3 Read Access",
    "Owners and Confirmations",
    "Review",
    "Something Something"
  ]

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />
    } else if (page === 1) {
      return <Owner />
    } else if (page === 2) {
      return <Display />
    } else {
      return <DisplayFiles />
    }
  }

  return (
    <div className='form'>
        <div className='progressBar'></div>
        <div className='form-container p-24 pt-4'>
            <div className="header text-black text-[30px] font-bold">
              <h1>{FormTitles[page]}</h1>
            </div>
            <div className="form-body flex">
              <PageDisplay />
            </div>
            <div className="footer">
            <button 
              disabled={page === 0}
              className='relative w-[100px] h-[34px] bg-gradient-to-l from-amber-300 to-orange-500 rounded-md flex items-center justify-center gap-2.5 overflow-hidden hover:border-2 hover:border-orange-500 transition-all duration-300'
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <span className="text-white font-semibold text-sm">Prev</span>
            </button>
            <button
                disabled={page === FormTitles.length-1} 
                className='relative w-[100px] h-[34px] bg-gradient-to-l from-amber-300 to-orange-500 rounded-md flex items-center justify-center gap-2.5 overflow-hidden hover:border-2 hover:border-orange-500 transition-all duration-300'
                onClick={() => {
                  setPage((currPage) => currPage+1)
                }}> <span className="text-white font-semibold text-sm">Next</span>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Form
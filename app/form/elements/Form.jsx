"use client"
import React, {useState} from 'react'
import SignUpInfo from './SignUpInfo';
import Owner from './Owner';
import Display from './Display';
import DisplayFiles from './DisplayFiles';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Form = () => {

  const [page, setPage] = useState(0);

  const FormTitles = [
    "",
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
              <h1 className='text-white'>{FormTitles[page]}</h1>
            </div>
            <div className="body">
              <PageDisplay />
            </div>
            <div className="footer flex gap-8 justify-center mt-8">
            <button 
              disabled={page === 0}
              className=' w-[89px] h-8 px-4 py-2.5 rounded border-2 border-[#12ff80] justify-center items-center gap-2.5 inline-flex'
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <span className="text-[#12ff80] text-base font-normal font-['Inter'] flex justify-center items-center gap-2"><FaArrowLeft/>Back</span>
            </button>
            <button
                disabled={page === FormTitles.length-1} 
                className=' w-[89px] h-8 px-4 py-2.5 rounded border-2 border-[#12ff80] bg-[#12ff80] justify-center items-center gap-2.5 inline-flex'
                onClick={() => {
                  setPage((currPage) => currPage+1)
                }}> <span className="text-white text-base font-normal font-['Inter'] flex justify-center items-center gap-2">Next </span>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Form
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonRead = ({id}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${id}`);
  };
  return (
    <>
     <button
              className="inline-flex items-center gap-2 rounded border hover:border-Green px-2 py-2 mt-4 hover:text-Green bg-Green text-white focus:outline-none focus:ring active:bg-GreenLight hover:bg-white"
              onClick={handleClick}
            >
              <span className="text-sm font-normal"> Read More </span>
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
    </>
  )
}

export default ButtonRead
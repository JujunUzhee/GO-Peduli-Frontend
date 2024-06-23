import React from "react";
import CardProgram from "./Cards/CardProgram";

const Program = ({publikasi, otherPublikasi}) => {
  return (
    <>
     <div className="flex flex-col  ml-12">
          <h2 className="my-4 text-3xl  font-bold ml-28 mb-8">{publikasi}</h2>
          <div className="grid grid-cols-3 gap-12 mx-auto">
            <CardProgram limit={3}/>
          </div>
          <h2 className="my-4 text-3xl  font-bold mt-20 mb-8 ml-28">{otherPublikasi}</h2>
          <div className="grid grid-cols-3 gap-12 mx-auto mb-16">
            <CardProgram limit={6}/>
          </div>
        </div>
    </>
  );
};

export default Program;

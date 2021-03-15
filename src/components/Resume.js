import React from "react";
// import resumePDF from "../Assets/Resume_AhmedHassan.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = (props) => {
  return (
    <main className=" bg-gray-900 bg-opacity-100 blur2 m-0 md:mx-auto min-h-screen">
      <div className="flex justify-center pt-20 ">
        <div className="relative shadow-2xl ">
          <div className="">
            <Document file="https://cdn.sanity.io/files/0rdpl6dw/production/8e709f5b42f4f5ec4bdf48e9a4f90b2e005b7bb4.pdf">
              <Page pageNumber={1} />
            </Document>
          </div>
          <div className="absolute  top-0 right-0 h-full w-full bg-green-100 opacity-0 hover:opacity-90">
            Hello
          </div>
        </div>
      </div>
    </main>
  );
};
export default Resume;

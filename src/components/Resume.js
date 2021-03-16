import React, { useState, useEffect } from "react";
// using ES6 modules
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// using CommonJS modules
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = (props) => {
  const size = useWindowSize();

  return (
    <main className=" bg-gray-900  m-0 md:mx-auto ">
      <div className="mx-auto  flex flex-col justify-center items-center min-h-screen">
        <div className="  flex justify-center">
          <Document
            file={props.resume}
            className="shadow-lg text-gray-200 pb-3"
            error="Failed to load PDF file. Please click on one of the buttons below 👇"
          >
            <Page
              pageNumber={1}
              width={size.width < size.height ? size.width * 0.95 : null}
              onLoadSuccess={removeTextLayerOffset}
            />
          </Document>
        </div>
        <div className="bg-gray-900 text-lg text-center">
          <a
            href={`${props.resume}?dl=`}
            title="Download Resume!"
            className="text-gray-200 bg-gray-900 hover:text-teal-500 transition-all p-2  duration-300"
          >
            <i class="fas fa-download"></i>
          </a>
          <a
            href={props.resume}
            title="Open in new tab."
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 bg-gray-900 hover:text-teal-500 transition-all p-2  duration-300"
          >
            <i class="fa fa-clone fa-flip-horizontal" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </main>
  );
};
export default Resume;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
  textLayers.forEach((layer) => {
    const { style } = layer;
    style.top = "0";
    style.left = "0";
    style.transform = "";
  });
}

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState } from "react";

const Blog = () => {
  const [loader, setLoader] = useState(false);

  const handlePdf = () => {
    const capture = document.querySelector(".capture");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const docs = new jsPDF("p", "mm", "a4");
      const width = docs.internal.pageSize.getWidth();
      const height = docs.internal.pageSize.getHeight();
      docs.addImage(imgData, "PNG", 0, 0, width, height);
      setLoader(false);
      docs.save("blog.pdf");
    });
  };

  return (
    <div className="flex w-full flex-col min-h-screen items-center justify-center">
      <div className="capture">
        <div className="bg-white my-2 w-[580px] p-6 text-black">
          <h1 className="text-xl font-bold mb-2">
            Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <p>
            Controlled components refer to components that have their state and
            behavior controlled by the parent component. These components rely
            on props passed down from the parent component to update their state
            and behavior.
          </p>
        </div>
        <div className="bg-white my-2 w-[580px] p-6 text-black">
          <h1 className="text-xl font-bold mb-2">
            How to validate React props using PropTypes
          </h1>
          <p>
            Props and PropTypes are important mechanisms for passing read-only
            attributes between React components.
          </p>
          <p>
            We can use React props, short for properties, to send data from one
            component to another. If a component receives the wrong type of
            props, it can cause bugs and unexpected errors in your app.
          </p>
        </div>
        <div className="bg-white my-2 w-[580px] p-6 text-black">
          <h1 className="text-xl font-bold mb-2">
            ell us the difference between nodejs and express js.
          </h1>
          <p>
            NodeJS is the package, which provides the JavaScript run-time
            environment, whereas Express is a framework that sits on top of
            NodeJS and helps us to handle requests and responses.
          </p>
        </div>
        <div className="bg-white my-2 w-[580px] p-6 text-black">
          <h1 className="text-xl font-bold mb-2">
            What is a custom hook, and why will you create a custom hook?
          </h1>
          <p>
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
      </div>
      <button
        onClick={handlePdf}
        disabled={!loader === false}
        className="btn bg-red-500 text-white border-none my-4"
      >
        {loader ? "Downloading PDF..." : "Download PDF"}
      </button>
    </div>
  );
};

export default Blog;

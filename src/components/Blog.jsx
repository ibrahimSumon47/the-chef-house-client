import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-10 border-t-4 pt-10">Q&A</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 text-3xl">
        <div className="border rounded-lg p-5 ">
          <p className="my-5">
            Q. Tell us the differences between uncontrolled and controlled
            components.
          </p>
          <p className="mb-5">
            Ans: Controlled Components are managed by react state. It's Easier
            to debug. It's faster and less state management. Less complex code.
            It's considered a best practice. <br />
            In other hand uncontrolled component managed by component's own
            internal state. Data flows within the component. It's difficult to
            debug. More complex code. It's not considered a best practice but
            considered an alternate approach.
          </p>
        </div>
        <div className="border rounded-lg p-5">
          <p className="my-5">Q. How to validate React props using PropTypes?</p>
          <p>
            Ans. First install prop-types package using npm. In component file
            import propTypes from the prop types package. Define the prop types
            for your component using the propTypes static property. If a prop of
            the wrong type is passed to the component a warning will be shown in
            the browser console.
          </p>
        </div>
        <div className="border rounded-lg p-5">
          <p className="my-5">Q. Tell us the difference between nodejs and express js.</p>
          <p className="mb-5">
            Ans: Node.js is a runtime environment that provides a platform for
            running JS code outside of a web application framework built on top
            of Node.js that a set of features for building web application.
          </p>
        </div>
        <div className="border rounded-lg p-5">
            <p className="my-5">Q. What is a custom hook, and why will you create a custom hook?</p>
            <p className="mb-5">Ans: Custom React JS hooks offer three major benefits over standard library hooks: Reusability, readability, and testability. Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and you can search for many open sources where you can get some custom hooks from the library already created by developers.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

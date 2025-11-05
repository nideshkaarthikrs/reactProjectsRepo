import React, { useState } from "react";

const FormComponent = () => {
  let [formData, setFormData] = useState({
    customerName: "",
    comments: "",
    course: "",
  });

  function handleNameChange(event) {
    setFormData({
      ...formData,
      customerName: event.target.value,
    });
  }
  function handleCommentChange(event) {
    setFormData({
      ...formData,
      comments: event.target.value,
    });
  }
  function handleCourseChange(event) {
    setFormData({
      ...formData,
      course: event.target.value,
    });
  }

  function handleSubmit(event) {
    if (!formData.course) {
      event.preventDefault(); // the page reload is prevented, as the default action for form submission is reloading the page
      alert("Please select a course before sumbission!!!");
      return
    }
    alert(formData.customerName);
    alert(formData.comments);
    alert(formData.course);
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        {/* Getting customer name through an input tag */}
        <div>
          <label htmlFor="customerNameInput">Enter your name:</label> &nbsp;
          <input
            type="text"
            id="customerNameInput"
            name="CustomerName"
            autoFocus="autoFocus"
            onChange={handleNameChange}
            required
          />
        </div>
        {/* Adding a text area to get comments */}
        <br />
        <br />
        <div>
          <label htmlFor="CustomerComments">Write your comments:</label>&nbsp;
          <textarea
            name="Comments"
            id="CustomerComments"
            onChange={handleCommentChange}
            required
          ></textarea>
        </div>
        {/* Adding a select tag for the user to choose courses from */}
        <br />
        <br />
        <div>
          <select name="SelectCourses" onChange={handleCourseChange}>
            <option selected disabled>
              Select a course
            </option>
            <option>React</option>
            <option>Vue</option>
            <option>Angular</option>
            <option>Next</option>
          </select>
        </div>
        {/* Adding a submit button */}
        <br />
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;

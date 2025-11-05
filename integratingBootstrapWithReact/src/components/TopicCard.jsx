import React from "react";

const TopicCard = () => {
  return (
    <div class="card d-inline-block" style={{ width: "18rem", margin: "2rem" }}>
      <h3 class="card-header text-center">Course</h3>
      <div class="card-body">
        <h5 className="card-title">React JS</h5>
        <p class="card-text">
          Learning React JS
        </p>
      </div>
      <div className="card-footer">
        <a href="https://www.google.com" class="card-link btn btn-info">
          more details...
        </a>
      </div>
    </div>
  );
};

export default TopicCard;

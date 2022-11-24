import React from "react";
import styledComponents from "styled-components";

const Section = styledComponents.div`
max-width:80%;
margin:0 auto;
margin-top:20px;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

.wrapper {
    max-width: 760px;
    padding: 40px 20px;
    margin:0 auto;
}

.wrapper .search {
    border: 1px solid #c8c8c8;
    overflow: hidden;
    border-radius: 25px;
    padding: 0 10px;
    margin: 15px 0 20px;
    transition: all 0.3s
}

.wrapper .search:hover,
.wrapper .search:focus-within {
    border: 1px solid transparent;
    box-shadow: 2px 5px 8px #1f1f1f10, 0px -4px 5px #1f1f1f10
}

.wrapper .search .form-control {
    box-shadow: none;
    outline: none;
    border: none
}

.wrapper .search .form-control:focus::placeholder {
    opacity: 0
}

.wrapper .accordion-button {
    font-size: 0.9rem;
    font-weight: 500
}

.wrapper .accordion-button:hover {
    background-color: #f8f8f8
}

.wrapper .accordion-button:focus {
    box-shadow: none
}

.wrapper .accordion-button::after {
    background-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #c8c8c8;
    background-position: center center;
    border-radius: 50%
}

.wrapper .accordion-button:not(.collapsed) {
    color: #000;
    background-color: #f7f7f7;
    font-weight: 600;
    border-bottom: 1px solid #ddd !important
}

.accordion-button:not(.collapsed)::after {
    border-color: #1E88E5
}

.wrapper .accordion-button.collapsed {
    border-bottom: 1px solid #ddd !important
}

.wrapper .accordion-collapse.show {
    border-bottom: 1px solid #ddd !important
}

.wrapper .accordion-collapse {
    background-color: #eaf3fa
}

.wrapper .accordion-collapse ul li {
    line-height: 2rem;
    width: 100%;
    padding: 0.5rem 1.3rem
}

.wrapper .accordion-collapse ul li:hover {
    background-color: #c9e7ff
}

.wrapper .accordion-collapse ul li a {
    text-decoration: none;
    color: #333;
    font-size: 0.85rem;
    font-weight: 400;
    display: block
}

.wrapper .accordion-collapse ul li:hover a {
    color: #222
}

@media   (max-width:777px){
    .wrapper {
        margin: 50px 20px
    }
}

@media   (max-width: 365px) {
    .wrapper {
        margin: 50px 10px
    }

    .w-75 {
        width: 90% !important
    }
}
`;

function FAQ() {
  return (
    <Section className="container">
      <div className="wrapper bg-white rounded shadow">
        <div className="h2 text-center fw-bold">FAQ</div>
        <div className="h3 text-primary text-center">How can we help you?</div>

        <div
          className="accordion accordion-flush border-top border-start border-end"
          id="myAccordion"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              {" "}
              <button
                className="accordion-button collapsed border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                {" "}
                Popular on BBBootstrap{" "}
              </button>{" "}
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse border-0"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#myAccordion"
            >
              <div className="accordion-body p-0">
                <ul className="list-unstyled m-0">
                  <li>
                    <a href="#">Adding Snippets</a>
                  </li>
                  <li>
                    <a href="#">Accessing Color Palette</a>
                  </li>
                  <li>
                    <a href="#">Searching Snippets</a>
                  </li>
                  <li>
                    <a href="#">How to use online editor tools</a>
                  </li>
                  <li>
                    <a href="#">Upgrading Pro</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              {" "}
              <button
                className="accordion-button collapsed border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                {" "}
                Know About Pro{" "}
              </button>{" "}
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse border-0"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#myAccordion"
            >
              <div className="accordion-body p-0">
                <ul className="list-unstyled m-0">
                  <li>
                    <a href="#">How to upgrade to pro</a>
                  </li>
                  <li>
                    <a href="#">Benifits of Pro</a>
                  </li>
                  <li>
                    <a href="#">Payment methods to get Pro</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              {" "}
              <button
                className="accordion-button collapsed border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                {" "}
                BBBootstrap Tools{" "}
              </button>{" "}
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse border-0"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#myAccordion"
            >
              <div className="accordion-body p-0">
                <ul className="list-unstyled m-0">
                  <li>
                    <a href="#">How to use Pro Online Editor</a>
                  </li>
                  <li>
                    <a href="#">Know Gradient generator</a>
                  </li>
                  <li>
                    <a href="#">Using Beautifier</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              {" "}
              <button
                className="accordion-button collapsed border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                {" "}
                Download Snippets{" "}
              </button>{" "}
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse border-0"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#myAccordion"
            >
              <div className="accordion-body p-0">
                <ul className="list-unstyled m-0">
                  <li>
                    <a href="#">How to download snippets</a>
                  </li>
                  <li>
                    <a href="#">Donate to Author</a>
                  </li>
                  <li>
                    <a href="#">Donation methods</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              {" "}
              <button
                className="accordion-button collapsed border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                {" "}
                BBBootstrap Icons{" "}
              </button>{" "}
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse border-0"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#myAccordion"
            >
              <div className="accordion-body p-0">
                <ul className="list-unstyled m-0">
                  <li>
                    <a href="#">Adding icons to snippets</a>
                  </li>
                  <li>
                    <a href="#">Fontawesome Icons</a>
                  </li>
                  <li>
                    <a href="#">Material Design</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              {" "}
              <button
                className="accordion-button collapsed border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                {" "}
                Policy & copyrights{" "}
              </button>{" "}
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse border-0"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#myAccordion"
            >
              <div className="accordion-body p-0">
                <ul className="list-unstyled m-0">
                  <li>
                    <a href="#">BBBootstrap Guidelines</a>
                  </li>
                  <li>
                    <a href="#">BBBootstrap Policies</a>
                  </li>
                  <li>
                    <a href="#">Copyright and right management</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FAQ;

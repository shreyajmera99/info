import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    // style={{position:'fixed',bottom:'0',left:'0',width:'100%'}}
    return (
      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://github.com/shreyajmera99"
              rel="noopener noreferrer"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/shrey-ajmera/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
        >
          © 2023 Copyright:
          <a class="text-white" href="https://github.com/shreyajmera99">
            ShreyAjmera
          </a>
        </div>
      </footer>
    );
  }
}

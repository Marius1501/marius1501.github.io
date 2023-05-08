document.addEventListener("DOMContentLoaded", function() {
    let http = new XMLHttpRequest();

    http.open('get', 'assets/json/courses.json', true);
    http.send();
    http.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            let courses = JSON.parse(this.responseText);
            let output = "";

            for (let item of courses) {
                output += `
                  <div class="box">
                      <div class="box-image">
                          <a href="${item.link}" title="${item.title}" target="_blank"><img src="${item.image}"></a>
                      </div>
                      <div class="box-content">
                          <h3 class="box-caption">${item.title}</h3>
                          <p class="box-text">${item.text}</p>
                      </div>
                  </div>
              `;
            }
            document.querySelector(".box-container").innerHTML = output;

            const boxes = document.querySelectorAll(".box");
            courses.forEach((course, index) => {
                course.element = boxes[index];
            });
        }
    }
});

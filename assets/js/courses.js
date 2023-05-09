let courses = [];

fetch('assets/json/courses.json')
    .then(response => response.json())
    .then(data => {
        courses = data;
        let output = "";

        for (let item of courses) {
            output += `
                <div class="box">
                  <div class="box-image">
                      <a href="${item.link}" title="${item.title}" target="_blank"><img src="${item.image}" alt="${item.title}"></a>
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
    })
    .catch(error => console.log(error));

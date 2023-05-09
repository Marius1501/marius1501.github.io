let pLs = [];

fetch('assets/json/programming_languages.json')
    .then(response => response.json())
    .then(data => {
        pLs = data;
        let output = "";

        for (let item of pLs) {
            output += `
                <li class="programming-language">
                    <div class="tooltip">
                        <div class="zoom">
                            <img src="${item.image}" alt="${item.name}" class="programming-language-icon">
                        </div>
                        <span class="tooltip-text">${item.name}</span>
                    </div>
                </li>
            `;
        }
        document.querySelector("#programming-languages").innerHTML = output;

        const lis = document.querySelectorAll(".programming-language");
        pLs.forEach((pL, index) => {
            pL.element = lis[index];
        });
    })
    .catch(error => console.log(error));

let http = new XMLHttpRequest();

http.open('get', 'assets/json/programming_languages.json', true);
http.send();
http.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
        let pLs = JSON.parse(this.responseText);
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
    }
}
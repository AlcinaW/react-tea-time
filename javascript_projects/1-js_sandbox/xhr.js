document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);

    // Optional - Used for spinners/loaders
    //Ready state 3
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function () {
        console.log('READYSTATE', xhr.readyState);
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.onerror = function () {
        console.log('Request error...');
    }

    xhr.send();

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}
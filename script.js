let texArea = document.querySelector('textarea');

document.getElementById("upper-case").addEventListener('click', function () {
    texArea.value = texArea.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener('click', function () {
    texArea.value = texArea.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener('click', function () {
    let value = texArea.value.toLowerCase();
    let values = value.split(" ");
    values.forEach((item, index, array) => {
        const firstChar =  item.charAt(0).toUpperCase();
        const otherPart = item.slice(1);
        array[index] = firstChar + otherPart;
    });
    texArea.value = values.join(" ");
});

document.getElementById("sentence-case").addEventListener('click', function () {
    let value = texArea.value.toLowerCase();
    let values = value.split(".");
    values.forEach((item, index, array) => {
        if(item.charAt(0)===" ")
        {
            const firstChar =  item.charAt(1).toUpperCase();
            const otherPart = item.slice(2);
            array[index] = " " + firstChar + otherPart;
        }
        else
        {
            const firstChar =  item.charAt(0).toUpperCase();
            const otherPart = item.slice(1);
            array[index] = firstChar + otherPart;
        }
    });
    texArea.value = values.join(".");
});

document.getElementById("save-text-file").addEventListener('click', function () {
    download("text.txt", texArea.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
loaded.innerHTML = (new Date()).toTimeString();

makeajax.addEventListener('click', function(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = fenction() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            ajaxresult.innerHTML = xhr.responseText;
        }
    }
})
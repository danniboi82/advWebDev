let XHR = new XMLHttpRequest();
XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
        console.log(XHR.responseText);
    } 
};
//type of request to make ("GET", "PUT", "POST", "DELETE")
//XHR (or XML HTTP request) recieves values kind of like 404 not found 
//Following are the values | states | descriptions
// Value    |  State    |  Description 
// (DEPRICATED PLEASE CHECK HTML FILE VISUAL TABLE!!!)

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
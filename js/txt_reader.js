function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function get_text(name) {
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET',name, false);
    xmlhttp.send(null);
    if (xmlhttp.status == 200) {
        var response = xmlhttp.responseText;
        return response;
    }
};

var arg1 = get_text('argues/arg1.txt');
var arg2 = get_text('argues/arg2.txt');
var arg3 = get_text('argues/arg3.txt');
var arg4 = get_text('argues/arg4.txt');
var arg5 = get_text('argues/arg5.txt');
console.log(arg1);


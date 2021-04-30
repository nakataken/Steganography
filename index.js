let imageData;

function readURL(input) {
    var reader = new FileReader();
    reader.onload = function(e) {
        imageData = e.target.result;
        document.querySelector('#image1').src = imageData;
    }
    reader.readAsDataURL(input.files[0]);
}

function hideText() {
    document.querySelector('#image2').src = steg.encode(document.querySelector("#text").value, imageData);
}

function decode(input) {
    try{
        var reader = new FileReader();
        reader.onload = function(e) {
            imageData = e.target.result;
            if(steg.decode(e.target.result) === ""){
                document.querySelector("#decoded").innerText = "No message";
            } else {
                document.querySelector("#decoded").innerText = steg.decode(e.target.result);
            }
            document.querySelector('#image3').src = imageData;
        }
        reader.readAsDataURL(input.files[0]);
    } catch(error) {
        console.log(error);
        window.alert(error);
    }
}
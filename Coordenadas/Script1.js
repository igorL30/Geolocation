const x = document.getElementById('demo');
function getlocation()
{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);

    }
    else{
        x.innerHTML="seu browser não suporta geolocalização";
    }

}
function showPosition(position){
x.innerHTML="Latitude:" + position.coords.latitude +"<br>Longitude:"
+ position.coords.longitude;
}
function showError(error){
switch(error.code){
    case error.PERMISSION_DANIED:
        x.innerHTML="Localização indisponivel"
        break;
        case error.TIMEOUT:
            x.innerHTML="o tempo de requisição expirou"
            break;
            case error.UNKNOWN_ERROR:
                x.innerHTML="Algum erro desconhecido aconteceu"
                break;
}
}
var zmienna1 = 'Uwielbiam JavaScript';
var zmienna2 = 'Jestem świetnym programistą';

function dluzszyString(zmienna1,zmienna2) {
    if(zmienna1.length > zmienna2.length){
        var result = zmienna1.length > zmienna2.length;
        console.log('String' + zmienna1 + ' jest dłuższy');
        return result;
    } else {
        var result = zmienna2.length> zmienna1.length;
        console.log('String' + ' ' + zmienna2 + ' jest dłuższy');
        return result;
    }
}
console.log(dluzszyString(zmienna1,zmienna2));
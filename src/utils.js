function checkEmail(username){
    let email=username;
    if(email.replace(/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,"")==''){
        return true;
    }
    else{
        return false;
    }
}
function checkPhone(username){
    let phoneNumber=username;
    if(phoneNumber.replace(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,"")==''){
        return true;
    }
    else{
        return false;
    }
}
export {checkEmail,checkPhone}
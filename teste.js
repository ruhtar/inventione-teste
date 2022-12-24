function check(str){
    return /^[^aeiou]$/.test(str);
      /* const specialCharPattern = /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]$/; */
}

console.log(check("opa"))

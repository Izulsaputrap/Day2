function submitData(){

    let name = document.getElementById("input-Name").value
    let email = document.getElementById("input-Email").value
    let phone = document.getElementById("input-Phone").value
    let subject = document.getElementById("input-Subject").value
    let message = document.getElementById("input-Massage").value

    if(email == ""){
        return alert("name wajib diisi")
     } else if(email == ""){
        return alert("email wajib diisi")
     } else if(phone == ""){
        return alert("phone wajib diisi")
     } else if(subject == ""){
        return alert("subject wajib diisi")
     } else if(message == ""){
        return alert("message wajib diisi")
     }

     console.log(name);
     console.log(email);
     console.log(phone);
     console.log(subject);
     console.log(message);

     let emailReceiver = "Izulsaputra183@gmail.com"

     let a = document.createElement('a')
     a.href=`mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak saya dengan email ${email}, telp ${phone}`
     a.click()
 
     let siswa = {
         name,
         email,
         phone,
         subject,
         message
     }
     console.log(siswa);   
 }

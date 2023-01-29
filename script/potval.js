try{
  function validatepd3(){
    let fn = document.forms.pd3.fn.value;
    let ln = document.forms.pd3.ln.value;
    let pfn = document.forms.pd3.pfn.value;
    let cae = document.forms.pd3.cae.value;
    let cp = document.forms.pd3.cp.value;
    let cop = document.forms.pd3.cop.value;

  if(!fn){
  document.getElementById('fnErr').innerHTML = "<br/>FIRSTNAME IS REQUIRED!";
  alert('FIRSTNAME IS REQUIRED!');
  document.forms.pd3.fn.focus();
  return false;
}
else{
  document.getElementById('fnErr').innerHTML = "";
}

if(!ln){
document.getElementById('lnErr').innerHTML = "<br/>LASTNAME IS REQUIRED!";
alert('LASTNAME IS REQUIRED!');
document.forms.pd3.ln.focus();
return false;
}
else{
document.getElementById('lnErr').innerHTML = "";
}

if(!cae){
document.getElementById('caeErr').innerHTML = "<br/>PLEASE CREATE AN EMAIL!";
alert('CREATE AN EMAIL!');
document.forms.pd3.cae.focus();
return false;
}
else{
document.getElementById('caeErr').innerHTML = "";
}

if(!cp){
document.getElementById('cpErr').innerHTML = "<br/>PLEASE CREATE A PASSWORD!";
alert('CREATE A PASSWORD!');
document.forms.pd3.cp.focus();
return false;
}
else{
document.getElementById('cpErr').innerHTML = "";
}

if(!pfn){
document.getElementById('pfnErr').innerHTML = "<br/>YOUR PETS FIRSTNAME IS REQUIRED!";
alert('YOUR PETS FIRSTNAME IS REQUIRED!');
document.forms.pd3.pfn.focus();
return false;
}
else{
document.getElementById('pfnErr').innerHTML = "";
}


}
}
  catch(err){
    window.alert(err.message);
  }

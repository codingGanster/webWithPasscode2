function checkValues(){
    if( document.userForm.firstName.value==='')
    {
      alert('please enter first name');
      document.userForm.firstName.focus();
      document.userForm.firstName.style.border='solid';
      document.userForm.firstName.style.borderColor='red';
        return false;
    }     
  
    if( document.userForm.surname.value===''){
        alert('please enter surname');
      document.userForm.surname.focus();
      document.userForm.surname.style.border='solid';
      document.userForm.surname.style.borderColor='red';
        return false;
    }

    if( document.userForm.mobile.value==='' || document.userForm.mobile.value.length !='10' ){
        alert('please your phone number is empty or not 10 digits');
      document.userForm.mobile.focus();
      document.userForm.mobile.style.border='solid';
      document.userForm.mobile.style.borderColor='red';
        return false;
    }
    if( document.userForm.Email.value===''){
        alert('please your email is empty');
      document.userForm.Email.focus();
      document.userForm.Email.style.border='solid';
      document.userForm.Email.style.borderColor='red';
        return false;
    }
    if( document.userForm.password.value===''){
        alert('please set a password');
      document.userForm.password.focus();
      document.userForm.password.style.border='solid';
      document.userForm.password.style.borderColor='red';
        return false;
    }
    if( document.userForm.gender.value ===''){
        alert('please select your gender');
        return false;
    } else{
        alert('success,thank you');
        return true;
    }
}
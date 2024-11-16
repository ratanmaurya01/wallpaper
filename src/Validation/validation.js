export const validateEmail = (email) => {

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };
  

  export const validatePassword =(password)=>{

    

  }
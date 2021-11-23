/*(async () => {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          'Yes': 'No, Im not',
          'No': 'Yes, Iam',

        })
      }, 1000)
    })
    
    const { value: edad } = await Swal.fire({
      title: 'Are you 16 years old or more?',
      input: 'radio',
      customClass: 'swal-wide',
      confirmButtonColor: "#CE4809",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to choose something!'
        }
      }
    })
    
    if (edad === 'No') {
      Swal.fire({ 
        customClass: 'swal-granted', 
        confirmButtonColor: "#CE4809", 
        html: `Welcome to Craft-Brew` })
    } else {
        Swal.fire({
        customClass: 'swal-denied',
        title: 'Age Restriction!',
        confirmButtonColor: "#CE4809",
        text: 'Craft-Brew acces is prohibited now.',
        icon: 'error'});
    }
})();


document.getElementById('send-button-contact').addEventListener("click",function(){
  Swal.fire({
    title: 'Email sent',
    icon: 'success',
    customClass: 'email-sent-successful'
  });
});
*/
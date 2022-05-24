import React from 'react';


function ContactUsScreen() {
  

  return (
    <>
        <section class="form-section">
            <form action="">
                <label for="Name">
                Full Name*
                <input type="text" name="" id="" placeholder="Name" required/>
                </label>
                <div class="input-double">
                <input type="text" name="" id="" placeholder="RG*" required/>
                <input type="text" name="" id="" placeholder="CPF*" required/>
                </div>
                <label for="Email"> 
                <input type="email" name="" id="" placeholder="Email*" required/>
                </label>
                <div class="input-double">
                <input type="text" name="" id="" placeholder="Telefone*" required/>
                <input type="text" name="" id="" placeholder="Celular" required/>
                </div>
                <label for="address"> 
                <input type="address" name="" id="" placeholder="Address*" required/>
                </label>
                <div class="input-triple">
                <input type="text" name="" id="" placeholder="CEP*" required/>
                <input type="text" name="" id="" placeholder="Número*" required/>
                <input type="text" name="" id="" placeholder="Bairro*" required/>
                </div>
                <div class="input-triple">
                <input type="text" name="" id="" placeholder="Complemento" />
                <input type="text" name="" id="" placeholder="UF*" required/>
                <input type="text" name="" id="" placeholder="Cidade*" required/>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    </>
  );
}
export default ContactUsScreen;


class LoginPage{

    //Login Page Elements

    getUsername (){ 
        return cy.get('#user-name');
    }
    getPassword (){
        return cy.get('#password');
    }
    getBtnLogin (){
        return cy.get('#login-button');
    }
    
    //Page Actions
    
    login(email: string, password:string){
        
        //Add email
        this.getUsername().type(email);
        //Add Password
        this.getPassword().type(password);
        //click Sign In Button
        this.getBtnLogin().click();
        return this;
    }

}

export default LoginPage;

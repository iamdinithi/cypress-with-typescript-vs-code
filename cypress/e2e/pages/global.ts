import LoginPage from './login-page';

class Global {

    login (url: string, email: string, password: string){
        this.visitUrl(url);
        const loginPage = new LoginPage();
        loginPage.login(email, password);
    }

    visitUrl (url:string){
        cy.visit(url);
    }
}
export default Global;
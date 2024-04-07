import Global from "../pages/global";
import LoginPage from "../pages/login-page";

describe('Test Suite : Login', () => {

    const global = new Global();
    const login = new LoginPage();

    it('TC-1 : Verify that user can log in with valid email and valid password',() => {

        //Get Data from Fixtures
        cy.fixture('data.json').then((data)=> {
    
          //Call Login Function  
          global.login(data.url,data.username,data.password);
                
        });
    
        //Verify login success to Landing Page
       // login.getLogo().should('be.visible');
        
      });
})
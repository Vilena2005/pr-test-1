describe('Модуль Вакансии',() => {
    it('Роль студента',() => {
        cy.visit('https://dev.profteam.su/login');

        //Ввод логина
        cy.get('input[class="form-input--text form-input"]').type('testerStudent');

        //Ввод пароля
        cy.get('input[class="form-input--password form-input"]').type('Password1');

        //Нажатие на кнопку "Войти"
        cy.contains('button', 'Войти').click();
    })
})
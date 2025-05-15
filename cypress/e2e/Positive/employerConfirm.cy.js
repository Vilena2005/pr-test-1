describe('Подтверждение отлика работодателем', () => {
    it('Успешный вход',() => {
        cy.fixture('EmployerLog').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit("https://dev.profteam.su/login")

            cy.log('Ввод логина работодателя')
            cy.get('.form-input--text')
                .type(data.login)

            cy.log('Ввод пароля работодателя')
            cy.get('.form-input--password')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()
            cy.wait(3000);

            cy.log('Клик по кнопке "Отклики"')
            cy.contains('p', 'Отклики').click();

            cy.log('Подтверждение отлика')

        })
    })
})
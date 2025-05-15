describe('Авторизация студента', () => {
    it('Неудачный вход',() => {
        cy.fixture('studentLog').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit("https://dev.profteam.su/login")

            cy.log('Ввод неправильного логина студента')
            cy.get('.form-input--text')
                .type(data.nonCorrectLogin)

            cy.log('Ввод неправильного пароля студента')
            cy.get('.form-input--password')
                .type(data.nonCorrectPassword)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()
            cy.wait(3000);

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span')
                .should('exist')
        })
    })
})
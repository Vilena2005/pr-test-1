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

            cy.log('Клик на кнопку "На рассмотрении"')
            cy.get('.responses-page__tabs > .navigation-workspace > .navigation-item').eq(1).click();

            cy.log('Подтверждение отлика')
            cy.get('.responses-list-item > .responses-list-item__actions > .responses-list-item__action').eq(0).click();

            cy.log('Клик по кнопке "Рабочее пространство" и переход на страницу с рабочим пространством')
            cy.get('.responses-list-item > .button').eq(0).click();

            cy.log('Написание комментария')
            cy.get('.form-area')
                .type(data.comment);

            cy.log('Отправка комментария')
            cy.get('.comment-textarea__buttons > .icon-button').eq(1).click();

            cy.log('Клик на кнопку "Принять на вакансию"')
            cy.get('.detailed-workspace-header > .detailed-workspace-status > .detailed-workspace-status__actions > .status-open > .status-open__buttons').eq(0)
                .click()
        })
    })
})
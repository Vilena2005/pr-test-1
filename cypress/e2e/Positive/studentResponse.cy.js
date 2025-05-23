describe('Отлик на вакансию студентом', () => {
    it('Успешный отлик',() => {
        cy.fixture('studentLog').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit("https://dev.profteam.su/login")

            cy.log('Ввод логина студента')
            cy.get('.form-input--text')
                .type(data.login)

            cy.log('Ввод пароля студента')
            cy.get('.form-input--password')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()
            cy.wait(3000);

            cy.log('Клик по кнопке "Вакансии"')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label')
                .click()

            cy.log('Отклик на вакансию')
            cy.get('.vacancy-item__info-wrapper > .vacancy-footer__button-wrapper').eq(1)
                .click()
        })
    })
})
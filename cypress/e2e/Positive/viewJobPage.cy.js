describe('Просмотр страницы с вакансиями', () => {
    it('Страница с вакансиями с фильтром',() => {
        cy.fixture('EmployerLog').then(data => {
            cy.log('Переход на страницу с вакансиями')
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

            cy.log('Переход на страницу вакансий')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label')
                .click()

            cy.log('Ввод названия')
            cy.get('.form-input--text')
                .type(data.searchVacancy)

            cy.log('Нажать "Поиск"')
            cy.get('div.search-input__field > .button')
                .click()

            cy.log('Выбор ЗП "По договорённости"')
            cy.get('.radio-list > :nth-child(2)').click()

            cy.log('Открыть выбор графика')
            cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()

            cy.log('Выбор "Полная занятость"')
            cy.get('.form-select__items > :nth-child(2)').click()

            cy.log('Открыть тип занятости')
            cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click()

            cy.log('Выбор "Очный"')
            cy.get('.form-select__items > :nth-child(2)').click()
            cy.wait(2000);

            cy.log('Сброс фильтра')
            cy.get('.custom-modal-mobile__buttons > .button').click()
        })
    })
})
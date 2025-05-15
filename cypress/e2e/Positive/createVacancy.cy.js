describe('Вакансия', () => {
    it('Успешное создание вакансии',() => {
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

            cy.log('Клик по кнопке "Вакансии"')
            cy.contains('p', 'Вакансии').click();

            cy.log('Клик по кнопке "Создать вакансию"')
            cy.contains('button', 'Создать вакансию').click();

            cy.log('Ввод названия вакансии')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
                .type(data.vacancyName, {force: true})

            cy.log('Выбор фиксированной ЗП')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(3)')
                .click()

            cy.log('Ввод ЗП')
            cy.get('.form-input--number').type(data.fixedSalary)

            cy.log('Открыть типы занятости')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected')
                .click()

            cy.log('Выбор тип занятости "Дистант"')
            cy.get('.form-select__items > :nth-child(2)').click()

            cy.log('Выбор своего графика')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(3)').click()

            cy.log('Ввод графика')
            cy.get('.form-control--responsive > .form-input--text').type(data.schedule)

            cy.log('Ввод требований')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
                .type(data.requirements)

            cy.log('Ввод обязанностей')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
                .type(data.responsibilities)

            cy.log('Клик по кнопке "Обновить вакансию"')
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({force: true})
            cy.wait(5000);

        })
    })
})
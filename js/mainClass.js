"use strict";

class HashStorageClass {
    constructor() {}
    addValue(key, value) {
        return this[key] = value
    }
    getKeys() {
        return Object.keys(this)
    }
    getValue(key) {
        return this[key]
    }
    deleteValue(key) {
        delete this[key]
    }
}
const drinkStorage = new HashStorageClass
const nameDrink = document.querySelector('#enterDrink');
nameDrink.addEventListener('click', () => {
    const keyDrink = prompt('Введите название напитка');
    let alcoholDrinkUser1 = '';
    const alcoholDrinkUser = confirm(' напиток алкогольный ок=ДА, отмена=НЕТ');
    (alcoholDrinkUser) ? alcoholDrinkUser1 = 'да': alcoholDrinkUser1 = 'нет';
    const valueDrinkUser = prompt('рецепт его приготовления')
    const drink = {
        recept: valueDrinkUser,
        alcohol: alcoholDrinkUser1
    }
    drinkStorage.addValue(keyDrink.toLowerCase(), drink);
});
const resultDrink = document.querySelector('#resultDrink');
resultDrink.addEventListener('click', () => {

    const allInfoDrink = prompt('«получение информации о напитке»');
    const g = (drinkStorage.getValue(allInfoDrink));
    (Object.keys(this).includes(allInfoDrink)) ?
    alert(`напиток ${allInfoDrink}
    алкогольный: ${g.alcohol}
    рецепт приготовления:
    ${g.recept}`): alert(`Извените у вас в списке нет данного напитка ${allInfoDrink}`);
});
const deleteDrink = document.querySelector('#deleteDrink');
deleteDrink.addEventListener('click', () => {
    const deleteNameDrink = prompt('«удаление информации о напитке»');
    (Object.keys(drinkStorage).includes(deleteNameDrink)) ?
    alert(`${deleteNameDrink} удаленно успешно `) & drinkStorage.deleteValue(deleteNameDrink): alert("Ошибка");
});
const allDrink = document.querySelector('#allDrink');
allDrink.addEventListener('click', () => {
    alert(`«перечень всех напитков» ${drinkStorage.getKeys()} `);
});




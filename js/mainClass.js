"use strict";

class HashStorageClass {
   constructor() {
   }
   addValue(key, value) { return this[key] = value }
   getKeys() { return Object.keys(this) }
   getValue(key) { return this[key] }
   deleteValue(key) {
      let result = '';
      for (let i in Object.keys(this)) {
         result = (Object.keys(this)[i] != key) ? false : delete this[key]
      } return result
   }
}
const drinkStorage = new HashStorageClass
console.log(drinkStorage.addValue(5, 6))
console.log(drinkStorage.deleteValue(59))
console.log(drinkStorage.deleteValue(5))
console.log(drinkStorage)




const nameDrink = document.querySelector('#enterDrink');
nameDrink.addEventListener('click', () => {
   const keyDrink = prompt('Введите название напитка')
   let alcoholDrinkUser1 = ' '
   const alcoholDrinkUser = confirm(' напиток алкогольный ок=ДА, отмена=НЕТ')
   if (alcoholDrinkUser) { alcoholDrinkUser1 = 'да' }
   else { alcoholDrinkUser1 = 'нет' }
   const valueDrinkUser = prompt('рецепт его приготовления')
   const drink = {
      recept: valueDrinkUser,
      alcohol: alcoholDrinkUser1
   }
   drinkStorage.addValue(keyDrink.toLowerCase(), drink);
});
console.log(drinkStorage);
const resultDrink = document.querySelector('#resultDrink');
resultDrink.addEventListener('click', () => {

   const allInfoDrink = prompt('«получение информации о напитке»');
   const g = (drinkStorage.getValue(allInfoDrink));
   for (let k in Object.keys(this)) {
      (Object.keys(drinkStorage)[k] == allInfoDrink) ? alert(`напиток ${allInfoDrink}
   алкогольный: ${g.alcohol}
   рецепт приготовления:
    ${g.recept}`) : alert(`Извените у вас в списке нет данного напитка ${allInfoDrink}`);
      break
   }


});
const deleteDrink = document.querySelector('#deleteDrink');
deleteDrink.addEventListener('click', () => {
   const deleteNameDrink = prompt('«удаление информации о напитке»');
   (drinkStorage.deleteValue(deleteNameDrink)) ? alert(`${deleteNameDrink} удаленно успешно `) : alert("Ошибка")
});
const allDrink = document.querySelector('#allDrink');
allDrink.addEventListener('click', () => { alert(`«перечень всех напитков» ${drinkStorage.getKeys()} `); });







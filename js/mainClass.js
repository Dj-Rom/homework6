"use strict";
class HashStorageClass {
    constructor (){
    }
    addValue(key, value) {return this[key] = value}
    getKeys () {return Object.keys(this)}
    getValue (key) {return this[key] }
    deleteValue (key) {let allKeys = Object.keys(this)
        let result = Boolean
        for (let i = 0; i < allKeys.length; i++) {
           result = (allKeys[i] == key) ? true : false
           if (result) { return delete this[key]; }
        } return result}
}
const drinkStorage  = new HashStorageClass
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
   const g = (drinkStorage.getValue(allInfoDrink))
   alert(`напиток ${allInfoDrink}
алкогольный: ${g.alcohol}
рецепт приготовления:
 ${g.recept}`)
});
const deleteDrink = document.querySelector('#deleteDrink');
deleteDrink.addEventListener('click', () => {
   const deleteNameDrink = prompt('«удаление информации о напитке»');
   drinkStorage.deleteValue(deleteNameDrink)
});
const allDrink = document.querySelector('#allDrink');
allDrink.addEventListener('click', () => { alert(`«перечень всех напитков» ${drinkStorage.getKeys()} `); });





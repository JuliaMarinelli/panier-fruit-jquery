const fruits = $("#liste_fruits")
const panier = $("#panier")
const addButton = $("#ajouter")
const delButton = $("#supprimer")

let fruit;
let fruitToDel;

$(window).on('load', function(){
    fruit = fruits.val();
    addButton.attr("disabled", fruit === null);

    fruitToDel = panier.val();
    delButton.attr("disabled", fruitToDel === null);
})

fruits.change(function() {
    fruit = fruits.val();
    
    addButton.attr("disabled", fruit === null);
})

panier.change(function() {
    fruitToDel = panier.val();
    delButton.attr("disabled", fruitToDel === null);
})

addButton.click(function(){
    if(fruit !== null){
        panier.append($("<option></option>").attr("value", fruit).text(fruit));
        fruits.children('[value="'+ fruit + '"]').remove()
        fruit = null;
        addButton.attr("disabled", fruit === null);
    }
})


delButton.click(function(){
    if(fruitToDel !== null){
        fruits.append($("<option></option>").attr("value", fruitToDel).text(fruitToDel));
        panier.children('[value="'+ fruitToDel + '"]').remove()
        fruitToDel = null;
        delButton.attr("disabled", fruitToDel === null);
    }
})
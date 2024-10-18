const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
} 
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function appendCat(name) {
    return [...cats, name]; 
}
function prependCat(name) {
    return [name, ...cats ]; 
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1);
    }
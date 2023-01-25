const categories = document.querySelectorAll('.item');
console.log(`Categories: ${categories.length}`);

categories.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
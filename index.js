const boutonAjouterPanier1 = document.getElementById('btn1');
const boutonAjouterPanier2 = document.getElementById('btn2');
const boutonAjouterPanier3 = document.getElementById('btn3');

const nomBottes1 = document.querySelector('.div1 .nombottes').textContent;
const nomBottes2 = document.querySelector('.div2 .nombottes').textContent;
const nomBottes3 = document.querySelector('.div3 .nombottes').textContent;

boutonAjouterPanier1.addEventListener('click', () => {
    alert(`Article "${nomBottes1}" ajouté au panier`);
});
boutonAjouterPanier2.addEventListener('click', () => {
    alert(`Article "${nomBottes2}" ajouté au panier`);
});
boutonAjouterPanier3.addEventListener('click', () => {
    alert(`Article "${nomBottes3}" ajouté au panier`);
});


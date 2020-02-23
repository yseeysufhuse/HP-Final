var character = document.getElementById('character');
console.log(character);
async function renderCharacter(){
    const api = await fetch('https://hp-api.herokuapp.com/api/characters/house/hufflepuff');
    const data = await api.json();
    
    for(let i = 0; i < data.length; i++){
        let temp = `<div class='char'>
                        <img src="${data[i].image}" alt="Error" style='width: 300px; height: 420px; object-fit: cover;'>
                        <p>${data[i].name}</p>
                    </div>`;
        character.insertAdjacentHTML('beforeend',temp);
        console.log(temp);
    }
    
}

renderCharacter();
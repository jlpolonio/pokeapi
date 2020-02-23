const pokeService = async(response, reject) => {
    try {
        const results = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");

        return results;
    } catch (error) {
        console.error(error);
    }
}

const addElement = () => {

    pokeService()
        .then(response => response.json())
        .then(response => {
            const pokemons = response.results;

            const newUl = document.createElement('ul');
            const currentDiv = document.getElementById('app');
            currentDiv.appendChild(newUl);

            for (let i = 0; i < pokemons.length; i++) {
                const newLi = document.createElement('li');
                const newContent = document.createTextNode(pokemons[i].name);
                newLi.appendChild(newContent);
                newUl.appendChild(newLi);
            }

        })
        .catch(err => console.error(err));

}

addElement();

const addTable = () => {

    pokeService()
        .then(response => response.json())
        .then(response => {
            const pokemons = response.results;

            const newDiv = document.createElement('div');
            newDiv.setAttribute('id', 'tableDiv');

            const newTable = document.createElement('table');
            const headerTable = document.createElement('tr');
            const headerRow = document.createElement('th');
            const headerContent = document.createTextNode('Name');
            const headerRow2 = document.createElement('th');
            const headerContent2 = document.createTextNode('URL');

            headerRow.appendChild(headerContent);
            headerTable.appendChild(headerRow);
            headerRow2.appendChild(headerContent2);
            headerTable.appendChild(headerRow2);
            newTable.appendChild(headerTable);

            for (let i = 0; i < pokemons.length; i++) {
                let newRow = document.createElement('tr');
                let newColumn = document.createElement('td');
                let newContent = document.createTextNode(pokemons[i].name);
                let newColumn2 = document.createElement('td');
                let newContent2 = document.createTextNode(pokemons[i].url);

                newColumn.appendChild(newContent);
                newRow.appendChild(newColumn);

                newColumn.style.border = '1px solid black';
                newColumn.style.width = '150px';
                newColumn.style.textAlign = 'center';

                newColumn2.appendChild(newContent2);
                newRow.appendChild(newColumn2);

                newColumn2.style.border = '1px solid black';
                newColumn2.style.width = '300px';
                newColumn2.style.textAlign = 'center';

                newTable.appendChild(newRow);
            }

            newTable.style.border = '2px solid black';

            newDiv.appendChild(newTable);
            document.getElementById("app2").appendChild(newDiv);

        })
        .catch(err => console.error(err));

}

addTable();
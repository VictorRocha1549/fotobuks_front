function showSection(section) {
    const sectionTitle = document.getElementById('section-title');
    const contentTable = document.getElementById('content-table');
    
    if (section === 'clientes') {
        sectionTitle.textContent = 'Clientes';
        contentTable.innerHTML = `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Teléfono</th>
                <th>Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Juan</td>
                <td>Pérez</td>
                <td>555-555-555</td>
                <td>Boda</td>
            </tr>
            <tr>
                <td>Ana</td>
                <td>García</td>
                <td>555-555-556</td>
                <td>Cumpleaños</td>
            </tr>
        </tbody>`;
    } else if (section === 'fotografias') {
        sectionTitle.textContent = 'Fotografías';
        contentTable.innerHTML = `
        <thead>
            <tr>
                <th>Foto ID</th>
                <th>Evento</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>F123</td>
                <td>Boda</td>
                <td>10/10/2023</td>
            </tr>
            <tr>
                <td>F124</td>
                <td>Cumpleaños</td>
                <td>15/10/2023</td>
            </tr>
        </tbody>`;
    } else if (section === 'albums') {
        sectionTitle.textContent = 'Álbums';
        contentTable.innerHTML = `
        <thead>
            <tr>
                <th>Álbum ID</th>
                <th>Nombre del Álbum</th>
                <th>Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>A123</td>
                <td>Boda de Juan y Ana</td>
                <td>Boda</td>
            </tr>
            <tr>
                <td>A124</td>
                <td>Cumpleaños de Luis</td>
                <td>Cumpleaños</td>
            </tr>
        </tbody>`;
    }
}

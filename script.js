function generateGroups() {
    const groupCount = parseInt(document.getElementById('groupCount').value);
    const totalStudents = 36;
    const students = Array.from({ length: totalStudents }, (_, i) => i + 1);
    
    // Shuffle the students array
    for (let i = students.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [students[i], students[j]] = [students[j], students[i]];
    }

    // Create groups
    const groups = [];
    for (let i = 0; i < groupCount; i++) {
        groups.push([]);
    }

    // Distribute students into groups
    students.forEach((student, index) => {
        groups[index % groupCount].push(student);
    });

    // Display groups
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    groups.forEach((group, index) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group';
        
        const groupTitle = document.createElement('h2');
        groupTitle.textContent = `Kelompok ${index + 1}`;
        groupDiv.appendChild(groupTitle);

        const groupList = document.createElement('ul');
        group.forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = `Nomor Absen: ${student}`;
            groupList.appendChild(listItem);
        });

        groupDiv.appendChild(groupList);
        resultDiv.appendChild(groupDiv);
    });

    // Show the back button
    document.getElementById('backButton').style.display = 'block';
}

function goBack() {
    // Clear the result div and hide the back button
    document.getElementById('result').innerHTML = '';
    document.getElementById('backButton').style.display = 'none';
}

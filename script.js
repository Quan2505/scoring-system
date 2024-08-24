const numberOfParticipants = 80;
const numberOfRounds = 10;

function createInputFields() {
    const container = document.getElementById('participants');
    for (let i = 1; i <= numberOfParticipants; i++) {
        let participantDiv = document.createElement('div');
        participantDiv.classList.add('participant');
        participantDiv.innerHTML = `
            <h3>Participant ${i}</h3>
            <input type="text" id="p${i}name" placeholder="Participant Name">
        `;
        
        for (let j = 1; j <= numberOfRounds; j++) {
            participantDiv.innerHTML += `<input type="number" id="p${i}r${j}" placeholder="Round ${j} Score"> `;
        }
        
        container.appendChild(participantDiv);
    }
}

function calculateScores() {
    let scores = [];
    
    for (let i = 1; i <= numberOfParticipants; i++) {
        let totalScore = 0;
        let participantName = document.getElementById(`p${i}name`).value || `Participant ${i}`;
        
        for (let j = 1; j <= numberOfRounds; j++) {
            totalScore += Number(document.getElementById(`p${i}r${j}`).value);
        }
        
        scores.push({ name: participantName, score: totalScore });
    }
    
    scores.sort((a, b) => b.score - a.score);
    
    displayResults(scores);
}

function displayResults(scores) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Results</h2>';
    
    scores.forEach((score, index) => {
        let medalClass = '';
        
        if (index === 0) medalClass = 'gold'; // Gold for 1st place
        else if (index === 1) medalClass = 'silver'; // Silver for 2nd place
        else if (index === 2) medalClass = 'bronze'; // Bronze for 3rd place
        
        resultsDiv.innerHTML += `<p class="${medalClass}">Rank ${index + 1}: ${score.name} - Total Score: ${score.score}</p>`;
    });
}

createInputFields();



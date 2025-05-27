function updateDateTime() {
    const now = new Date(); 

    const options = {
        weekday: 'long', 
        year: 'numeric',
        month: 'long',   
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true,    
        timeZoneName: 'short',
    };

    const formattedDateTime = now.toLocaleString('en-US', options); 

    document.getElementById('headerDateTime').textContent = formattedDateTime;
    document.getElementById('mainDateTime').textContent = formattedDateTime;
    document.getElementById('footerDateTime').textContent = formattedDateTime;
}

updateDateTime();

setInterval(updateDateTime, 1000);
const meetingsData = [
    { id: 1, name: 'Reunión 1', date: '2024-07-01', active: true, live: true },
    { id: 2, name: 'Reunión 2', date: '2024-07-02', active: true, live: false },
    { id: 3, name: 'Reunión 3', date: '2024-07-03', active: true, live: false },
    { id: 4, name: 'Reunión 4', date: '2024-07-04', active: true, live: false },
    { id: 5, name: 'Reunión 5', date: '2024-07-04', active: true, live: false },
];

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const meetingsList = document.getElementById('meetingsList');
const confirmationModal = document.getElementById('confirmationModal');
const closeButton = document.querySelector('.close-button');
const confirmButton = document.getElementById('confirmButton');
const cancelButton = document.getElementById('cancelButton');
let currentMeetingId = null;
let currentMeetingLive = false;

function showActiveMeetings(meetings) {
    meetingsList.innerHTML = '';

    meetings.forEach(meeting => {
        if (meeting.active) {
            const li = document.createElement('li');

            const meetingInfo = document.createElement('div');
            meetingInfo.classList.add('meeting-info');

            const meetingName = document.createElement('span');
            meetingName.classList.add('meeting-name');
            meetingName.textContent = meeting.name;

            meetingInfo.appendChild(meetingName);

            if (meeting.live) {
                const meetingTag = document.createElement('span');
                meetingTag.classList.add('meeting-tag', 'live');
                meetingTag.textContent = 'EN VIVO';
                meetingInfo.appendChild(meetingTag);
            }

            const meetingDate = document.createElement('span');
            meetingDate.classList.add('meeting-date');
            meetingDate.textContent = meeting.date;

            meetingInfo.appendChild(meetingDate);

            const scheduleButton = document.createElement('button');
            scheduleButton.classList.add('btn-agendar');
            scheduleButton.textContent = meeting.live ? 'Solicitar unirse' : 'Agendar';
            scheduleButton.addEventListener('click', () => {
                currentMeetingId = meeting.id;
                currentMeetingLive = meeting.live;
                showModal();
            });

            li.appendChild(meetingInfo);
            li.appendChild(scheduleButton);

            meetingsList.appendChild(li);
        }
    });
}

function showModal() {
    const modalText = currentMeetingLive ? '¿Está seguro de que desea solicitar unirse a esta reunión en vivo?' : '¿Está seguro de que desea agendar esta reunión?';
    document.querySelector('.modal-content p').textContent = modalText;
    confirmationModal.style.display = 'block';
}

function hideModal() {
    confirmationModal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    showActiveMeetings(meetingsData);
});


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = searchInput.value.toLowerCase();
    const filteredMeetings = meetingsData.filter(meeting =>
        meeting.name.toLowerCase().includes(searchTerm) && meeting.active
    );

    showActiveMeetings(filteredMeetings);
});

closeButton.addEventListener('click', hideModal);
cancelButton.addEventListener('click', hideModal);

confirmButton.addEventListener('click', () => {
    const action = currentMeetingLive ? 'solicitado unirse a' : 'agendado';
    alert(`Ha ${action} la reunión con ID ${currentMeetingId}.`);
    hideModal();
});

window.addEventListener('click', (event) => {
    if (event.target == confirmationModal) {
        hideModal();
    }
});

const data = [
    {
        name: 'Azuroth Deem',
        age: 32,
        job: 'dragoon',
        lookingfor: 'bard',
        location: 'South Kingdom',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name: 'Kerin Lightbringer',
        age: 26,
        job: 'dark knight',
        lookingfor: 'dragoon',
        location: 'The North',
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: 'Dertinger Reambith',
        age: 32,
        job: 'red mage',
        lookingfor: 'bard',
        location: 'Eastern Sands',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
        name: 'Yeali Isle',
        age: 33,
        job: 'bard',
        lookingfor: 'red mage',
        location: 'South Kingdom',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event 
document.getElementById('next').addEventListener('click', nextProfile);

// New Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.job} looking for ${currentProfile.lookingfor}</li>
        </ul>
    `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        window.location.reload();
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}
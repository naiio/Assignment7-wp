let resources = [
    { id: 1, title: 'Clean Code Architecture Guide', category: 'Development' },
    { id: 2, title: 'Advanced Statistical Models', category: 'Data Analysis' },
    { id: 3, title: 'User Centric Interface Principles', category: 'UI UX Design' },
    { id: 4, title: 'Cloud Infrastructure Basics', category: 'Cloud Computing' },
    { id: 5, title: 'Machine Learning Fundamentals', category: 'Artificial Intelligence' },
    { id: 6, title: 'Ethical Hacking 101', category: 'Cyber Security' }
];

const resourceList = document.getElementById('resourceList');
const addResourceForm = document.getElementById('addResourceForm');

function renderResources() {
    resourceList.innerHTML = '';
    resources.forEach(resource => {
        const item = document.createElement('div');
        item.className = 'resource-item';

        const info = document.createElement('div');
        info.className = 'resource-info';

        const title = document.createElement('h4');
        title.textContent = resource.title;

        const category = document.createElement('p');
        category.textContent = resource.category;

        info.appendChild(title);
        info.appendChild(category);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Remove';
        deleteBtn.onclick = function() {
            deleteResource(resource.id);
        };

        item.appendChild(info);
        item.appendChild(deleteBtn);

        resourceList.appendChild(item);
    });
}

function deleteResource(id) {
    resources = resources.filter(resource => resource.id !== id);
    renderResources();
}

addResourceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newTitle = document.getElementById('newTitle').value;
    const newCategory = document.getElementById('newCategory').value;
    
    const newResource = {
        id: Date.now(),
        title: newTitle,
        category: newCategory
    };
    
    resources.push(newResource);
    renderResources();
    
    addResourceForm.reset();
});

renderResources();

document.getElementById('borrowForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const fullName = document.getElementById('fullName');
    const nameErr = document.getElementById('nameErr');
    if (fullName.value.trim() === '') {
        nameErr.textContent = 'Full name cannot be empty';
        nameErr.style.display = 'block';
        fullName.classList.add('input-error');
        isValid = false;
    } else {
        nameErr.style.display = 'none';
        fullName.classList.remove('input-error');
    }

    const email = document.getElementById('email');
    const emailErr = document.getElementById('emailErr');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailErr.textContent = 'Academic email cannot be empty';
        emailErr.style.display = 'block';
        email.classList.add('input-error');
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailErr.textContent = 'Please enter a valid email address';
        emailErr.style.display = 'block';
        email.classList.add('input-error');
        isValid = false;
    } else {
        emailErr.style.display = 'none';
        email.classList.remove('input-error');
    }

    const resourceType = document.getElementById('resourceType');
    const resourceErr = document.getElementById('resourceErr');
    if (resourceType.value === '') {
        resourceErr.textContent = 'Please select a resource type';
        resourceErr.style.display = 'block';
        resourceType.classList.add('input-error');
        isValid = false;
    } else {
        resourceErr.style.display = 'none';
        resourceType.classList.remove('input-error');
    }

    const duration = document.getElementById('duration');
    const durationErr = document.getElementById('durationErr');
    if (duration.value.trim() === '') {
        durationErr.textContent = 'Duration cannot be empty';
        durationErr.style.display = 'block';
        duration.classList.add('input-error');
        isValid = false;
    } else if (parseInt(duration.value) <= 0) {
        durationErr.textContent = 'Duration must be a positive number';
        durationErr.style.display = 'block';
        duration.classList.add('input-error');
        isValid = false;
    } else {
        durationErr.style.display = 'none';
        duration.classList.remove('input-error');
    }

    const agreement = document.getElementById('agreement');
    const agreementErr = document.getElementById('agreementErr');
    if (!agreement.checked) {
        agreementErr.textContent = 'You must agree to the terms';
        agreementErr.style.display = 'block';
        isValid = false;
    } else {
        agreementErr.style.display = 'none';
    }

    if (isValid) {
        alert('Request submitted successfully!');
        this.reset();
    }
});
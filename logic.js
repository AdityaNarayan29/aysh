// Function to store data in local storage
function storeFormData(formData) {
  localStorage.setItem('formData', JSON.stringify(formData));
}

// Function to retrieve data from local storage
function getFormData() {
  return JSON.parse(localStorage.getItem('formData')) || {
    percentage: 0,
    totalTime: 0,
    name: ''
  };
}

// Function to update video data
function updateVideoData(percentage, totalTime) {
  const formData = getFormData();
  formData.percentage = percentage;
  formData.totalTime = totalTime;
  storeFormData(formData);
  console.log(formData);
}

// Function to update object data
function updateObject(event) {
  event.preventDefault();
  const name = document.getElementById('nameInput').value;
  const formData = getFormData();
  formData.name = name;
  storeFormData(formData);
  window.location.href = "About.html";
  console.log(formData);
}

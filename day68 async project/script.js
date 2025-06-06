let search = document.querySelector(".search");
let card = document.querySelector(".card");

search.addEventListener("click", () => {
  let username = document.querySelector("input").value.trim();
  if (username.length > 0) {
    getUserProfile(username).then((data) => {
      htmltemplate(data);
    });
    getUserRepo(username).then((repos) => {
      htmlRepoTemplate(repos);
    });
  } else {
    alert("Please enter a username");
    return;
  }
});

function htmltemplate(details) {
  let data = `<div class="bg-gray-50 rounded-xl shadow p-6">
          <div class="flex items-center gap-4">
            <div class="w-20 h-20 rounded-full bg-gray-200">
            <img src="${details.avatar_url}" alt="${details.name}" class="w-full h-full rounded-full object-cover">
            </div>
            <div>
              <h2 class="text-lg font-semibold text-gray-900">${details.name}</h2>
              <p class="text-sm text-gray-500">@${details.login}</p>
            </div>
          </div>
          <div class="mt-4 space-y-1 text-sm text-gray-700">
            <p><strong>Bio:</strong> <span class="text-gray-600">${details.bio ? details.bio : "No Bio Provided"}</span></p>
            <p><strong>Location:</strong> <span class="text-gray-600">${details.location ? details.location : "No Location Provided"}</span></p>
            <p><strong>Followers:</strong> <span class="text-gray-600">${details.followers}</span></p>
            <p><strong>Following:</strong> <span class="text-gray-600">${details.following}</span></p>
            <p><strong>Public Repos:</strong> <span class="text-gray-600">${details.public_repos}</span></p>
          </div>
        </div>
        `;
  card.innerHTML = data;
}

function htmlRepoTemplate(repos) {
  let repoData = `<!-- Repo Info Placeholder -->
        <div class="bg-gray-50 rounded-xl shadow p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Top Repositories</h3>
          <ul class="space-y-3 text-sm">`;
  repos.forEach((repo, index) => {
    repoData += `
          <li class='border-b pb-2'>
              <span class="font-medium text-blue-600">${repo.name}</span>
              <p class="text-gray-500">${
                repo.description ? repo.description : "No description provided"
              }</p>
            </li>
            `;
  });
  repoData += `
          </ul>
        </div>`;
  const existingContent = card.innerHTML;
  card.innerHTML = existingContent + repoData;
}

function getUserProfile(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    if (raw.ok === false) alert("User not found");
    return raw.json();
  });
}

function getUserRepo(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=3`
  ).then((raw) => {
    if (raw.ok === false) alert("failed to fetch repos...");
    return raw.json();
  });
}

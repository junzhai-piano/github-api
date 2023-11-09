console.log("test");
fetch("https://api.github.com/users/jaxcode-github/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    //variable for root div
    const root = document.getElementById("root");
    //slice the data
    const slicedData = data.slice(0, 4);
    //loop through the repos
    for (let i = 0; i < slicedData.length; i++) {
      console.log("hello");
      const currentRepo = slicedData[i];
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
      <h3>${currentRepo.name}</h3>
      <p>${currentRepo.description || " "}</p>
      <p>${currentRepo.language || " "}</p>
      <a href="${currentRepo.html_url}" target="_blank">View on GitHub</a>
      `;
      root.appendChild(newDiv);
    }
  })
  .catch((error) => {
    console.error(error);
  });
4133;

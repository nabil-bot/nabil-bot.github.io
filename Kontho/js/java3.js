
fetch('navbar.html')
           .then(response => response.text())
           .then(data => {
               document.getElementById('navbarContainer3').innerHTML = data;
           });




function loadFeatures(features) {
	let counter = 1;
    const container = document.getElementById('featureContainer');

    // Iterate over each feature in the JSON
    for (const [header, feature] of Object.entries(features)) {
        // Create the row div
        
		const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.id = `feature-row-${counter}`; // Set unique ID for each row

        // Create the video column
        const colVideoDiv = document.createElement('div');
        colVideoDiv.classList.add('col-lg-5');

        const embedDiv = document.createElement('div');
        embedDiv.classList.add('embed-responsive', 'embed-responsive-16by9');

        const iframe = document.createElement('iframe');
        iframe.classList.add('embed-responsive-item');
        iframe.setAttribute('src', feature.videoSrcLink);
        iframe.setAttribute('allowfullscreen', '');

        embedDiv.appendChild(iframe);
        colVideoDiv.appendChild(embedDiv);

        // Create the text column
        const colTextDiv = document.createElement('div');
        colTextDiv.classList.add('col-lg-7');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'col-md-4', 'col-lg-12');

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

		
		const headerContainar = document.createElement("div")
		headerContainar.classList.add('headerContainar')
		
		
		
		
        // Set the feature header
        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.innerHTML = header.replace(/([A-Z])/g, ' $1'); // Convert camelCase to spaced words

		
		
		
		
        // Set the feature description
        const p = document.createElement('p');
        p.classList.add('card-text');
        p.innerHTML = feature.description;

        // Copy Button
        const copyButton = document.createElement('button');
        copyButton.classList.add('btn', 'linkCopyBtn', 'mt-2');
        copyButton.innerHTML = '<i class="fa-regular fa-copy"></i>';
        
		
		
        // Copy link function
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(feature.videoSrcLink).then(() => {
                alert('Link copied to clipboard!');
            }).catch((err) => {
                console.error('Error copying link: ', err);
            });
        });

		
		headerContainar.appendChild(h5)
		headerContainar.appendChild(copyButton)
		
        // Append elements to card body
//        cardBodyDiv.appendChild(h5);
        cardBodyDiv.appendChild(headerContainar)
		cardBodyDiv.appendChild(p);
//        cardBodyDiv.appendChild(copyButton); // Append the copy button
        cardDiv.appendChild(cardBodyDiv);
        colTextDiv.appendChild(cardDiv);

        // Append video and text columns to the row
        rowDiv.appendChild(colVideoDiv);
        rowDiv.appendChild(colTextDiv);

        // Append the row to the container
        container.appendChild(rowDiv);

        counter++;  // Increment counter for unique IDs
		console.log(header)
		console.log(feature)
    }
}

// Call the function to load features

let features = [];

fetch('js/features.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        features = data; // Store the JSON data into the `features` variable
        loadFeatures(features); // Call the loadFeatures function with the loaded features
    })
    .catch(error => {
        console.log(error);
    });








function loadSolutions(solutions) {
    const container = document.getElementById('solutionContainars');
    let counter = 1;  // Unique counter for each rowDiv

    // Iterate over each feature in the JSON
    for (const [header, feature] of Object.entries(solutions)) {
        // Create the row div
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.id = `feature-row-${counter}`; // Set unique ID for each row

        // Create the video column
        const colVideoDiv = document.createElement('div');
        colVideoDiv.classList.add('col-lg-5');

        const embedDiv = document.createElement('div');
        embedDiv.classList.add('embed-responsive', 'embed-responsive-16by9');

        const iframe = document.createElement('iframe');
        iframe.classList.add('embed-responsive-item');
        iframe.setAttribute('src', feature.videoSrcLink);
        iframe.setAttribute('allowfullscreen', '');

        embedDiv.appendChild(iframe);
        colVideoDiv.appendChild(embedDiv);

        // Create the text column
        const colTextDiv = document.createElement('div');
        colTextDiv.classList.add('col-lg-7');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'col-md-4', 'col-lg-12');

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

		
		const headerContainar = document.createElement("div")
		headerContainar.classList.add('headerContainar')
		
		
		
		
        // Set the feature header
        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.innerHTML = header.replace(/([A-Z])/g, ' $1'); // Convert camelCase to spaced words

		
		
		
		
        // Set the feature description
        const p = document.createElement('p');
        p.classList.add('card-text');
        p.innerHTML = feature.description;

        // Copy Button
        const copyButton = document.createElement('button');
        copyButton.classList.add('btn', 'linkCopyBtn', 'mt-2');
        copyButton.innerHTML = '<i class="fa-regular fa-copy"></i>';
        
		
		
        // Copy link function
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(feature.videoSrcLink).then(() => {
                alert('Link copied to clipboard!');
            }).catch((err) => {
                console.error('Error copying link: ', err);
            });
        });

		
		headerContainar.appendChild(h5)
		headerContainar.appendChild(copyButton)
		
        // Append elements to card body
//        cardBodyDiv.appendChild(h5);
        cardBodyDiv.appendChild(headerContainar)
		cardBodyDiv.appendChild(p);
//        cardBodyDiv.appendChild(copyButton); // Append the copy button
        cardDiv.appendChild(cardBodyDiv);
        colTextDiv.appendChild(cardDiv);

        // Append video and text columns to the row
        rowDiv.appendChild(colVideoDiv);
        rowDiv.appendChild(colTextDiv);

        // Append the row to the container
        container.appendChild(rowDiv);

        counter++;  // Increment counter for unique IDs
    }
}



// Call the function to load solutions

let solutions = [];

fetch('js/solutions.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        solutions = data; // Store the JSON data into the `solutions` variable
        loadSolutions(solutions); // Call the loadsolutions function with the loaded solutions
    })

    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


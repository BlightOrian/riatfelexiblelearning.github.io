const pastPapers = {
            course1: [
                { name: "2021 Past Paper", link: "https://example.com/course1/2022_past_paper.pdf" },
                { name: "2021 Past Paper", link: "https://example.com/course1/2021_past_paper.pdf" },
                { name: "2020 Past Paper", link: "https://example.com/course1/2020_past_paper.pdf" },
                { name: "2019 Past Paper", link: "https://example.com/course1/2020_past_paper.pdf" }
            ],
            course2: [
                { name: "2022 Past Paper", link: "https://example.com/course2/2022_past_paper.pdf" },
                { name: "2021 Past Paper", link: "https://example.com/course2/2021_past_paper.pdf" },
                { name: "2020 Past Paper", link: "https://example.com/course2/2020_past_paper.pdf" },
                { name: "2019 Past Paper", link: "https://example.com/course1/2020_past_paper.pdf" }
            ]
            // Add more courses and their respective past papers as needed
        };

        // Function to populate the past papers list based on the selected course
        function populatePastPapers() {
            const courseSelect = document.getElementById("course-select");
            const selectedCourse = courseSelect.value;
            const pastPapersList = document.getElementById("past-papers-list");
            pastPapersList.innerHTML = ''; // Clear previous list

            // Add past papers for the selected course to the list
            pastPapers[selectedCourse].forEach(paper => {
                const listItem = document.createElement("li");
                const downloadLink = document.createElement("a");
                downloadLink.href = paper.link;
                downloadLink.textContent = paper.name;
                downloadLink.classList.add("download-link");
                listItem.appendChild(downloadLink);
                pastPapersList.appendChild(listItem);
            });
        }

        // Initial population of past papers based on the default selected course
        populatePastPapers();

        // Listen for changes in the course selection
        const courseSelect = document.getElementById("course-select");
        courseSelect.addEventListener("change", populatePastPapers);
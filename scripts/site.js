document.addEventListener("DOMContentLoaded", () => {
    const courseCardsContainer = document.querySelector(".website-sec");  // Ensure this is the correct section
    const totalCreditsContainer = document.getElementById("total-credits");
    const filterButtonsContainer = document.getElementById("filter-buttons");

    // Course data
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to programming...',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to web design...',
            technology: ['HTML', 'CSS'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course teaches how to write functions...',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces object-oriented programming...',
            technology: ['C#'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course teaches dynamic web pages using JavaScript...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course focuses on user experience and accessibility...',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        }
    ];

    // Function to display the courses
    const displayCourses = (filteredCourses) => {
        courseCardsContainer.innerHTML = ''; // Clear previous content

        let totalCredits = 0;
        filteredCourses.forEach(course => {
            const card = document.createElement("div");
            card.className = "course-card";

            // Add course details
            card.innerHTML = `
                <h3>${course.subject} ${course.number}: ${course.title}</h3>
                <p>${course.description}</p>
                <p>Credits: ${course.credits}</p>
                <p>Certificate: ${course.certificate}</p>
                <p>Technologies: ${course.technology.join(', ')}</p>
                <p>Completed: ${course.completed ? 'Yes' : 'No'}</p>
            `;

            // Change background color based on completion status
            if (course.completed) {
                card.style.backgroundColor = '#28a745'; // Green for completed
                card.style.color = 'white';
            } else {
                card.style.backgroundColor = '#dc3545'; // Red for not completed
                card.style.color = 'white';
            }

            // Add card to the container
            courseCardsContainer.appendChild(card);

            // Add to total credits
            totalCredits += course.credits;
        });

        // Display total credits
        totalCreditsContainer.textContent = `Total Credits: ${totalCredits}`;
    };

    // Filter buttons functionality
    document.getElementById("all-courses").addEventListener("click", () => {
        displayCourses(courses); // Display all courses
    });

    document.getElementById("wdd-courses").addEventListener("click", () => {
        const wddCourses = courses.filter(course => course.subject === 'WDD');
        displayCourses(wddCourses); // Display WDD courses
    });

    document.getElementById("cse-courses").addEventListener("click", () => {
        const cseCourses = courses.filter(course => course.subject === 'CSE');
        displayCourses(cseCourses); // Display CSE courses
    });

    // Initially display all courses
    displayCourses(courses);

    document.addEventListener("DOMContentLoaded", () => {
        const courseCardsContainer = document.querySelector(".website-sec");  // Ensure this is the correct section
        const totalCreditsContainer = document.getElementById("total-credits");
    
        // Course data
        const courses = [
            {
                subject: 'CSE',
                number: 110,
                title: 'Introduction to Programming',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'This course introduces students to programming...',
                technology: ['Python'],
                completed: true
            },
            {
                subject: 'WDD',
                number: 130,
                title: 'Web Fundamentals',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'This course introduces students to web design...',
                technology: ['HTML', 'CSS'],
                completed: false
            },
            {
                subject: 'CSE',
                number: 111,
                title: 'Programming with Functions',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'This course teaches how to write functions...',
                technology: ['Python'],
                completed: false
            },
            {
                subject: 'CSE',
                number: 210,
                title: 'Programming with Classes',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'This course introduces object-oriented programming...',
                technology: ['C#'],
                completed: true
            },
            {
                subject: 'WDD',
                number: 131,
                title: 'Dynamic Web Fundamentals',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'This course teaches dynamic web pages using JavaScript...',
                technology: ['HTML', 'CSS', 'JavaScript'],
                completed: true
            },
            {
                subject: 'WDD',
                number: 231,
                title: 'Frontend Web Development I',
                credits: 2,
                certificate: 'Web and Computer Programming',
                description: 'This course focuses on user experience and accessibility...',
                technology: ['HTML', 'CSS', 'JavaScript'],
                completed: false
            }
        ];
    
        // Function to display the courses
        const displayCourses = (filteredCourses) => {
            courseCardsContainer.innerHTML = ''; // Clear previous content
    
            // Using reduce to calculate total credits for displayed courses
            const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
            
            filteredCourses.forEach(course => {
                const card = document.createElement("div");
                card.className = "course-card";
    
                // Add course details
                card.innerHTML = `
                    <h3>${course.subject} ${course.number}: ${course.title}</h3>
                    <p>${course.description}</p>
                    <p>Credits: ${course.credits}</p>
                    <p>Certificate: ${course.certificate}</p>
                    <p>Technologies: ${course.technology.join(', ')}</p>
                    <p>Completed: ${course.completed ? 'Yes' : 'No'}</p>
                `;
    
                // Change background color based on completion status
                if (course.completed) {
                    card.style.backgroundColor = '#28a745'; // Green for completed
                    card.style.color = 'white';
                    card.classList.add('completed');
                } else {
                    card.style.backgroundColor = '#dc3545'; // Red for not completed
                    card.style.color = 'white';
                    card.classList.add('incomplete');
                }
    
                // Add card to the container
                courseCardsContainer.appendChild(card);
            });
    
            // Display total credits
            totalCreditsContainer.textContent = `Total Credits: ${totalCredits}`;
        };
    
        // Filter buttons functionality
        document.getElementById("all-courses").addEventListener("click", () => {
            displayCourses(courses); // Display all courses
        });
    
        document.getElementById("wdd-courses").addEventListener("click", () => {
            const wddCourses = courses.filter(course => course.subject === 'WDD');
            displayCourses(wddCourses); // Display WDD courses
        });
    
        document.getElementById("cse-courses").addEventListener("click", () => {
            const cseCourses = courses.filter(course => course.subject === 'CSE');
            displayCourses(cseCourses); // Display CSE courses
        });
    
        // Initially display all courses
        document.addEventListener("DOMContentLoaded", () => {
            const courseCardsContainer = document.querySelector(".website-sec"); // Ensure this is the correct section
            const totalCreditsContainer = document.getElementById("total-credits");
        
            // Course data
            const courses = [
                {
                    subject: 'CSE',
                    number: 110,
                    title: 'Introduction to Programming',
                    credits: 2,
                    certificate: 'Web and Computer Programming',
                    description: 'This course introduces students to programming...',
                    technology: ['Python'],
                    completed: true
                },
                {
                    subject: 'WDD',
                    number: 130,
                    title: 'Web Fundamentals',
                    credits: 2,
                    certificate: 'Web and Computer Programming',
                    description: 'This course introduces students to web design...',
                    technology: ['HTML', 'CSS'],
                    completed: true
                },
                {
                    subject: 'CSE',
                    number: 111,
                    title: 'Programming with Functions',
                    credits: 2,
                    certificate: 'Web and Computer Programming',
                    description: 'This course teaches how to write functions...',
                    technology: ['Python'],
                    completed: true
                },
                {
                    subject: 'CSE',
                    number: 210,
                    title: 'Programming with Classes',
                    credits: 2,
                    certificate: 'Web and Computer Programming',
                    description: 'This course introduces object-oriented programming...',
                    technology: ['C#'],
                    completed: false
                },
                {
                    subject: 'WDD',
                    number: 131,
                    title: 'Dynamic Web Fundamentals',
                    credits: 2,
                    certificate: 'Web and Computer Programming',
                    description: 'This course teaches dynamic web pages using JavaScript...',
                    technology: ['HTML', 'CSS', 'JavaScript'],
                    completed: true
                },
                {
                    subject: 'WDD',
                    number: 231,
                    title: 'Frontend Web Development I',
                    credits: 2,
                    certificate: 'Web and Computer Programming',
                    description: 'This course focuses on user experience and accessibility...',
                    technology: ['HTML', 'CSS', 'JavaScript'],
                    completed: false
                }
            ];
        
            // Function to display the courses
            const displayCourses = (filteredCourses) => {
                courseCardsContainer.innerHTML = ''; // Clear previous content
        
                // Calculate total credits using reduce
                const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        
                filteredCourses.forEach(course => {
                    const card = document.createElement("div");
                    card.className = "course-card";
        
                    // Add course details
                    card.innerHTML = `
                        <h3>${course.subject} ${course.number}: ${course.title}</h3>
                        <p>${course.description}</p>
                        <p>Credits: ${course.credits}</p>
                        <p>Certificate: ${course.certificate}</p>
                        <p>Technologies: ${course.technology.join(', ')}</p>
                        <p>Completed: ${course.completed ? 'Yes' : 'No'}</p>
                    `;
        
                    // Style the card based on completion status
                    if (course.completed) {
                        card.style.backgroundColor = '#28a745'; // Green for completed
                        card.style.color = 'white';
                    } else {
                        card.style.backgroundColor = '#dc3545'; // Red for not completed
                        card.style.color = 'white';
                    }
        
                    // Append card to the container
                    courseCardsContainer.appendChild(card);
                });
        
                // Display total credits
                totalCreditsContainer.textContent = `Total Credits: ${totalCredits}`;
            };
        
            // Filter button functionality
            document.getElementById("all-courses").addEventListener("click", () => {
                displayCourses(courses); // Display all courses
            });
        
            document.getElementById("wdd-courses").addEventListener("click", () => {
                const wddCourses = courses.filter(course => course.subject === 'WDD');
                displayCourses(wddCourses); // Display WDD courses
            });
        
            document.getElementById("cse-courses").addEventListener("click", () => {
                const cseCourses = courses.filter(course => course.subject === 'CSE');
                displayCourses(cseCourses); // Display CSE courses
            });
        
            // Initially display all courses
            displayCourses(courses);
        });
             displayCourses(courses);
    });
    
});

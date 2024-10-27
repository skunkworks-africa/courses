<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Training</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #0d1117;
            color: #c9d1d9;
        }
        .course-card {
            background: #161b22;
            border: 1px solid #30363d;
            border-radius: 6px;
            transition: all 0.2s ease;
        }
        .course-card:hover {
            border-color: #58a6ff;
            transform: translateY(-2px);
        }
        .level-badge {
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
        }
        .level-beginner { background: #238636; color: white; }
        .level-intermediate { background: #58a6ff; color: white; }
        .level-advanced { background: #8957e5; color: white; }
        .search-input {
            width: 100%;
            max-width: 300px;
            padding: 8px 16px;
            background: #161b22;
            border: 1px solid #30363d;
            border-radius: 6px;
            color: #c9d1d9;
            outline: none;
        }
        .search-input:focus {
            border-color: #58a6ff;
        }
        .tag {
            background: #21262d;
            color: #8b949e;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
        }
        .progress-bar {
            height: 4px;
            background: #21262d;
            border-radius: 2px;
            overflow: hidden;
        }
        .progress-fill {
            height: 100%;
            background: #238636;
            transition: width 0.3s ease;
        }
    </style>
</head>
<body>
    <div id="app" class="p-6">
        <!-- Header -->
        <header class="max-w-7xl mx-auto mb-8">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 class="text-2xl font-bold text-white">GitHub Training</h1>
                    <p class="text-gray-400">Master Version Control and Collaboration</p>
                </div>
                <button class="bg-[#238636] text-white px-4 py-2 rounded-md hover:bg-[#2ea043] transition-colors">
                    Start Learning
                </button>
            </div>
        </header>

        <!-- Learning Paths -->
        <div class="max-w-7xl mx-auto mb-8">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="bg-[#161b22] p-4 rounded-md border border-[#30363d]">
                    <h3 class="text-white font-semibold mb-2">Git Essentials</h3>
                    <p class="text-sm text-gray-400">Master the basics of version control</p>
                </div>
                <div class="bg-[#161b22] p-4 rounded-md border border-[#30363d]">
                    <h3 class="text-white font-semibold mb-2">GitHub Pro</h3>
                    <p class="text-sm text-gray-400">Advanced collaboration and workflows</p>
                </div>
                <div class="bg-[#161b22] p-4 rounded-md border border-[#30363d]">
                    <h3 class="text-white font-semibold mb-2">DevOps & Actions</h3>
                    <p class="text-sm text-gray-400">Automation and CI/CD pipelines</p>
                </div>
            </div>
        </div>

        <!-- Course Search -->
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <input 
                    type="text" 
                    id="searchInput"
                    placeholder="Search courses..." 
                    class="search-input"
                >
                <div class="flex gap-2">
                    <button class="px-4 py-2 rounded-md bg-[#21262d] text-gray-300 hover:bg-[#30363d]">Beginner</button>
                    <button class="px-4 py-2 rounded-md bg-[#21262d] text-gray-300 hover:bg-[#30363d]">Intermediate</button>
                    <button class="px-4 py-2 rounded-md bg-[#21262d] text-gray-300 hover:bg-[#30363d]">Advanced</button>
                </div>
            </div>

            <!-- Course Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="coursesContainer">
                <!-- Courses will be inserted here -->
            </div>
        </div>
    </div>

    <script>
        const courses = [
            {
                title: "Git & GitHub Fundamentals",
                level: "beginner",
                levelDisplay: "Beginner",
                description: "Learn the basics of version control and GitHub collaboration",
                duration: "2 hours",
                topics: ["Git Basics", "Repositories", "Commits", "Branches"],
                tools: ["Git CLI", "GitHub Desktop"],
                prerequisites: "None",
                progress: 0
            },
            {
                title: "GitHub Actions & Automation",
                level: "advanced",
                levelDisplay: "Advanced",
                description: "Build and deploy automated workflows with GitHub Actions",
                duration: "4 hours",
                topics: ["Workflows", "CI/CD", "Custom Actions", "Secrets"],
                tools: ["Actions", "YAML", "Docker"],
                prerequisites: "Git fundamentals",
                progress: 0
            },
            {
                title: "Pull Requests & Code Review",
                level: "intermediate",
                levelDisplay: "Intermediate",
                description: "Master collaborative development and code review practices",
                duration: "3 hours",
                topics: ["PR Workflow", "Code Review", "Merge Strategies", "Conflicts"],
                tools: ["GitHub PR", "Review Tools"],
                prerequisites: "Git basics",
                progress: 0
            },
            {
                title: "GitHub Pages & Static Sites",
                level: "intermediate",
                levelDisplay: "Intermediate",
                description: "Deploy and host static websites with GitHub Pages",
                duration: "2 hours",
                topics: ["Pages Setup", "Jekyll", "Custom Domains", "Themes"],
                tools: ["GitHub Pages", "Jekyll", "Markdown"],
                prerequisites: "HTML/CSS basics",
                progress: 0
            },
            {
                title: "GitHub Security & DevSecOps",
                level: "advanced",
                levelDisplay: "Advanced",
                description: "Implement security best practices in your GitHub workflow",
                duration: "4 hours",
                topics: ["Dependabot", "Code Scanning", "Secret Management", "Security Policies"],
                tools: ["CodeQL", "Dependabot", "Security Features"],
                prerequisites: "GitHub Actions",
                progress: 0
            }
        ];

        function createCourseCard(course) {
            return `
                <div class="course-card p-6">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                            </svg>
                        </div>
                        <span class="level-badge level-${course.level}">
                            ${course.levelDisplay}
                        </span>
                    </div>

                    <h3 class="text-lg font-semibold text-white mb-2">${course.title}</h3>
                    <p class="text-gray-400 text-sm mb-4">${course.description}</p>

                    <div class="space-y-4">
                        <div class="flex justify-between text-sm text-gray-400">
                            <span>${course.duration}</span>
                            <span>${course.prerequisites}</span>
                        </div>

                        <div>
                            <p class="text-sm font-medium text-gray-300 mb-2">Topics:</p>
                            <div class="flex flex-wrap gap-2">
                                ${course.topics.map(topic => `
                                    <span class="tag">${topic}</span>
                                `).join('')}
                            </div>
                        </div>

                        <div>
                            <p class="text-sm font-medium text-gray-300 mb-2">Tools:</p>
                            <div class="flex flex-wrap gap-2">
                                ${course.tools.map(tool => `
                                    <span class="tag">${tool}</span>
                                `).join('')}
                            </div>
                        </div>

                        <div class="pt-4 border-t border-[#30363d]">
                            <div class="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Progress</span>
                                <span>${course.progress}%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${course.progress}%"></div>
                            </div>
                        </div>

                        <button class="w-full text-center bg-[#238636] text-white py-2 rounded-md hover:bg-[#2ea043] transition-colors">
                            Start Course
                        </button>
                    </div>
                </div>
            `;
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('coursesContainer');
            if (container) {
                container.innerHTML = courses.map(createCourseCard).join('');
            }

            // Search functionality
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('input', function(e) {
                    const searchTerm = e.target.value.toLowerCase();
                    const filteredCourses = courses.filter(course => 
                        course.title.toLowerCase().includes(searchTerm) ||
                        course.description.toLowerCase().includes(searchTerm) ||
                        course.topics.some(topic => topic.toLowerCase().includes(searchTerm)) ||
                        course.tools.some(tool => tool.toLowerCase().includes(searchTerm))
                    );
                    container.innerHTML = filteredCourses.map(createCourseCard).join('');
                });
            }
        });
    </script>
</body>
</html>
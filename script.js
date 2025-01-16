import topics from './topics.js';

let currentTopicIndex = 0;
let expandedSubtopics = new Set();

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const searchBtn = document.getElementById('search-btn');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Initialize theme
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Theme toggle
themeToggle.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Search functionality
searchBtn.addEventListener('click', () => {
    searchModal.classList.remove('hidden');
    searchInput.focus();
});

searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.add('hidden');
    }
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const results = [];

    topics.forEach((topic, topicIndex) => {
        topic.subtopics.forEach((subtopic, subtopicIndex) => {
            if (subtopic.title.toLowerCase().includes(query)) {
                results.push({
                    title: subtopic.title,
                    topicTitle: topic.title,
                    topicIndex,
                    subtopicIndex
                });
            }
        });
    });

    searchResults.innerHTML = results.length ? results.map(result => `
        <button
            onclick="window.handleSearchResult(${result.topicIndex}, ${result.subtopicIndex})"
            class="w-full text-left p-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <p class="font-medium">${result.title}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">${result.topicTitle}</p>
        </button>
    `).join('') : '<p class="text-gray-500 dark:text-gray-400 p-4">No results found</p>';
});

// Handle search result selection
window.handleSearchResult = (topicIndex, subtopicIndex) => {
    searchModal.classList.add('hidden');
    loadContent(topicIndex);
    setTimeout(() => {
        const subtopicId = `${topicIndex}-${subtopicIndex}`;
        if (!expandedSubtopics.has(subtopicId)) {
            toggleSubtopic(subtopicId);
        }
        document.getElementById(`subtopic-${subtopicId}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
};

// Load topics into sidebar
function loadTopics() {
    const topicList = document.getElementById('topic-list');
    topics.forEach((topic, index) => {
        const button = document.createElement('button');
        button.className = `w-full text-left p-3 rounded-lg transition-colors duration-200 flex items-center justify-between ${
            index === currentTopicIndex ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
        }`;
        button.innerHTML = `
            <span class="font-medium truncate">${topic.title}</span>
            <svg class="h-4 w-4 flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
        `;
        button.addEventListener('click', () => loadContent(index));
        topicList.appendChild(button);
    });
}

// Toggle subtopic content
window.toggleSubtopic = function(subtopicId) {
    const content = document.getElementById(`content-${subtopicId}`);
    const chevron = document.getElementById(`chevron-${subtopicId}`);
    
    if (expandedSubtopics.has(subtopicId)) {
        expandedSubtopics.delete(subtopicId);
        content.classList.add('hidden');
        chevron.classList.remove('rotate-180');
    } else {
        expandedSubtopics.add(subtopicId);
        content.classList.remove('hidden');
        chevron.classList.add('rotate-180');
    }
};

// Load content for selected topic
function loadContent(index) {
    currentTopicIndex = index;
    const contentArea = document.getElementById('content-area');
    const topic = topics[index];
    
    // Update active state in sidebar
    document.querySelectorAll('#topic-list button').forEach((btn, i) => {
        btn.className = `w-full text-left p-3 rounded-lg transition-colors duration-200 flex items-center justify-between ${
            i === index ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
        }`;
    });

    // Generate content
    contentArea.innerHTML = topic.subtopics.map((subtopic, subtopicIndex) => {
        const subtopicId = `${index}-${subtopicIndex}`;
        const isExpanded = expandedSubtopics.has(subtopicId);
        
        return `
            <div id="subtopic-${subtopicId}" 
                 class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 animate-fade-in overflow-hidden" 
                 style="animation-delay: ${subtopicIndex * 100}ms">
                <button onclick="window.toggleSubtopic('${subtopicId}')"
                        class="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <div class="flex items-center space-x-3">
                        <div class="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold">${subtopic.title}</h3>
                    </div>
                    <svg id="chevron-${subtopicId}" 
                         class="h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}" 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div id="content-${subtopicId}" 
                     class="${isExpanded ? '' : 'hidden'} border-t border-gray-200 dark:border-gray-700">
                    <div class="p-6 space-y-6">
                        ${subtopic.content.map(item => renderContent(item)).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Render different types of content
function renderContent(item) {
    switch (item.type) {
        case 'data':
            return `
                <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                    <p class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">${item.data}</p>
                    ${item.links ? `
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${item.links.map(link => createLinkButton(link)).join('')}
                        </div>
                    ` : ''}
                    ${item.point ? `
                        <ul class="space-y-3">
                            ${item.point.map(point => `
                                <li class="flex items-start gap-3">
                                    <svg class="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="text-gray-700 dark:text-gray-300">${point}</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : ''}
                </div>
            `;
        case 'examples':
            return `
                <div class="space-y-4">
                    ${item.examples.map(example => `
                        <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                            <h4 class="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                                ${example.title}
                            </h4>
                            ${example.data ? `
                                <div class="space-y-3 mb-4">
                                    ${example.data.map(text => `
                                        <p class="text-gray-700 dark:text-gray-300">${text}</p>
                                    `).join('')}
                                </div>
                            ` : ''}
                            ${example.code ? `
                                <div class="space-y-3">
                                    ${example.code.map(code => createCodeBlock(code)).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        default:
            return '';
    }
}

// Create link button
function createLinkButton(link) {
    const isGithub = link.name.toLowerCase() === 'github';
    return `
        <a href="${link.url}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-colors gap-2">
            ${isGithub ? `
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
            ` : `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
            `}
            ${link.name}
        </a>
    `;
}

// Create code block
function createCodeBlock(code) {
    return `
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre class="text-gray-300 text-sm font-mono"><code>${code}</code></pre>
        </div>
    `;
}

// Initialize
loadTopics();
loadContent(0);
import topics from './topics.js';

let currentTopicIndex = null; // Changed to null to indicate no selection
let expandedSubtopics = new Set();

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const searchBtn = document.getElementById('search-btn');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const mobileNav = document.getElementById('mobile-nav');
const menuBtn = document.getElementById('menu-btn');
const closeNavBtn = document.getElementById('close-nav');

// Mobile Navigation
menuBtn.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeNavBtn.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    document.body.style.overflow = '';
});

mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
        mobileNav.classList.add('hidden');
        document.body.style.overflow = '';
    }
});

// Theme Management
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Search Functionality
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
        if (topic.title.toLowerCase().includes(query)) {
            results.push({
                title: topic.title,
                type: 'topic',
                topicIndex
            });
        }
        topic.subtopics.forEach((subtopic, subtopicIndex) => {
            if (subtopic.title.toLowerCase().includes(query)) {
                results.push({
                    title: subtopic.title,
                    topicTitle: topic.title,
                    type: 'subtopic',
                    topicIndex,
                    subtopicIndex
                });
            }
        });
    });

    searchResults.innerHTML = results.length ? results.map(result => `
        <button
            onclick="window.handleSearchResult(${result.topicIndex}${result.type === 'subtopic' ? `, ${result.subtopicIndex}` : ''})"
            class="w-full text-left p-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <p class="font-medium">${result.title}</p>
            ${result.type === 'subtopic' ? `
                <p class="text-sm text-gray-500 dark:text-gray-400">${result.topicTitle}</p>
            ` : ''}
        </button>
    `).join('') : '<p class="text-gray-500 dark:text-gray-400 p-4">No results found</p>';
});

// Handle search result selection
window.handleSearchResult = (topicIndex, subtopicIndex = null) => {
    searchModal.classList.add('hidden');
    mobileNav.classList.add('hidden');
    document.body.style.overflow = '';
    loadContent(topicIndex);
    
    if (subtopicIndex !== null) {
        setTimeout(() => {
            const subtopicId = `${topicIndex}-${subtopicIndex}`;
            if (!expandedSubtopics.has(subtopicId)) {
                toggleSubtopic(subtopicId);
            }
            document.getElementById(`subtopic-${subtopicId}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
};

// Load topics into navigation
function loadTopics() {
    const topicList = document.getElementById('topic-list');
    const mobileTopicList = document.getElementById('mobile-topic-list');
    const topicHTML = topics.map((topic, index) => `
        <button
            onclick="window.loadContent(${index})"
            class="w-full text-left p-3 rounded-lg transition-colors duration-200 flex items-center justify-between gap-2 ${
                index === currentTopicIndex ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }">
            <span class="font-medium whitespace-normal">${topic.title}</span>
            <svg class="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
        </button>
    `).join('');
    
    topicList.innerHTML = topicHTML;
    mobileTopicList.innerHTML = topicHTML;
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
window.loadContent = function(index) {
    currentTopicIndex = index;
    const contentArea = document.getElementById('content-area');
    const topic = topics[index];
    
    // Update active states
    document.querySelectorAll('#topic-list button, #mobile-topic-list button').forEach((btn, i) => {
        btn.className = `w-full text-left p-3 rounded-lg transition-colors duration-200 flex items-center justify-between gap-2 ${
            i === index ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
        }`;
    });

    // Close mobile nav
    mobileNav.classList.add('hidden');
    document.body.style.overflow = '';

    // Generate content
    contentArea.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">${topic.title}</h2>
            ${topic.description ? `
                <p class="mt-2 text-gray-600 dark:text-gray-400">${topic.description}</p>
            ` : ''}
        </div>
        ${topic.subtopics.map((subtopic, subtopicIndex) => {
            const subtopicId = `${index}-${subtopicIndex}`;
            const isExpanded = expandedSubtopics.has(subtopicId);
            
            return `
                <div id="subtopic-${subtopicId}" 
                     class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 animate-fade-in overflow-hidden" 
                     style="animation-delay: ${subtopicIndex * 100}ms">
                    <button onclick="window.toggleSubtopic('${subtopicId}')"
                            class="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <div class="flex items-center space-x-3">
                            <div class="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                                <svg class="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-lg sm:text-xl font-bold">${subtopic.title}</h3>
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
                        <div class="p-4 sm:p-6 space-y-6">
                            ${renderContent(subtopic.content)}
                        </div>
                    </div>
                </div>
            `;
        }).join('')}
    `;
};

// Show welcome message when no topic is selected
function showWelcomeMessage() {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center animate-fade-in">
            <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Welcome to VAPT Checklist</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-6">Please select a topic from the sidebar to get started.</p>
            <div class="flex justify-center gap-4">
                <button onclick="document.getElementById('search-btn').click()" 
                        class="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/70 transition-colors gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Topics
                </button>
            </div>
        </div>
    `;
}

// Render different types of content
function renderContent(content) {
    return content.map(item => {
        switch (item.type) {
            case 'data':
                return `
                    <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 sm:p-6">
                        <p class="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">${item.data}</p>
                        ${item.links ? `
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${item.links.map(createLinkButton).join('')}
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
                            <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 sm:p-6">
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
                                        ${example.code.map(createCodeBlock).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
            default:
                return '';
        }
    }).join('');
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
showWelcomeMessage(); // Show welcome message initially instead of loading first topic
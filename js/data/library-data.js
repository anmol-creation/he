// js/data/library-data.js
// This file acts as the local "Source of Truth" for original scriptures and texts.
// It is intended to hold the exact Hindi text (and Sanskrit shlokas if provided)
// to serve as a reliable reference for the historical database.

const libraryData = {
    "valmiki-ramayan": {
        id: "valmiki-ramayan",
        title: "वाल्मीकि रामायण",
        author: "महर्षि वाल्मीकि",
        description: "मूल वाल्मीकि रामायण का प्रामाणिक हिंदी अनुवाद एवं पाठ।",
        chapters: [
            // Example structure:
            { id: 'balkand', title: 'बालकाण्ड', sargas: [
                { id: 'sarga-1', title: 'सर्ग 1: नारद जी से वाल्मीकि का प्रश्न', content: '॥ ॐ श्री परमात्मने नमः ॥\n\nतपस्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ॥\n\nतपस्या और स्वाध्याय में निरत, वाग्मियों में श्रेष्ठ, मुनिश्रेष्ठ वाल्मीकि जी ने नारद जी से पूछा:\n"हे मुने! इस समय इस संसार में ऐसा कौन सा पुरुष है, जो गुणवान्, वीर्यवान्, धर्मज्ञ, कृतज्ञ, सत्यवादी और दृढव्रत हो?"' }
            ] }
        ]
    }
};

// Global export for use in the UI
if (typeof window !== 'undefined') {
    window.LibraryDB = {
        getAllBooks: () => Object.values(libraryData),
        getBook: (id) => libraryData[id],
        addSarga: (bookId, chapterId, sargaId, sargaTitle, content) => {
            const book = libraryData[bookId];
            if (!book) return false;

            let chapter = book.chapters.find(c => c.id === chapterId);
            if (!chapter) {
                // Determine chapter title based on ID if not exists
                const titles = {
                    'balkand': 'बालकाण्ड',
                    'ayodhyakand': 'अयोध्याकाण्ड',
                    'aranyakand': 'अरण्यकाण्ड',
                    'kishkindhakand': 'किष्किन्धाकाण्ड',
                    'sundarkand': 'सुन्दरकाण्ड',
                    'yuddhakand': 'युद्धकाण्ड',
                    'uttarkand': 'उत्तरकाण्ड'
                };
                chapter = { id: chapterId, title: titles[chapterId] || chapterId, sargas: [] };
                book.chapters.push(chapter);
            }

            chapter.sargas.push({
                id: sargaId,
                title: sargaTitle,
                content: content
            });
            return true;
        }
    };
}

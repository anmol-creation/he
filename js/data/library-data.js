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
                { id: 'sarga-1', title: 'पहला सर्ग', content: '॥ श्रीसीतारामचन्द्राभ्यां नमः ॥\n\nश्रीमद्वाल्मीकीय रामायण\n\nबालकाण्ड\n\nपहला सर्ग\n\nनारदजीका वाल्मीकि मुनिको संक्षेपसे श्रीरामचरित्र सुनाना\n\nतपस्वी वाल्मीकिजीने तपस्या और स्वाध्यायमें लगे हुए विद्वानोंमें श्रेष्ठ मुनिवर नारदजीसे पूछा—॥ १ ॥\n\n\'[मुने!] इस समय इस संसारमें गुणवान्, वीर्यवान्, धर्मज्ञ, उपकार माननेवाला, सत्यवक्ता और दृढप्रतिज्ञ कौन है?॥ २ ॥\n\n\'सदाचारसे युक्त, समस्त प्राणियोंका हितसाधक, विद्वान्, सामर्थ्यशाली और एकमात्र प्रियदर्शन (सुन्दर) पुरुष कौन है?॥ ३ ॥\n\n\'मनपर अधिकार रखनेवाला, क्रोधको जीतनेवाला, कान्तिमान् और किसीकी भी निन्दा नहीं करनेवाला कौन है? तथा संग्राममें कुपित होनेपर किससे देवता भी डरते हैं?॥ ४ ॥\n\n\'महर्षे! मैं यह सुनना चाहता हूँ, इसके लिये मुझे बड़ी उत्सुकता है और आप ऐसे पुरुषको जाननेमें समर्थ हैं\'॥ ५ ॥\n\nमहर्षि वाल्मीकिके इस वचनको सुनकर तीनों लोकोंका ज्ञान रखनेवाले नारदजीने उन्हें सम्बोधित करके कहा, अच्छा सुनिये और फिर प्रसन्नतापूर्वक बोले—॥ ६ ॥\n\n\'मुने! आपने जिन बहुत-से दुर्लभ गुणोंका वर्णन किया है, उनसे युक्त पुरुषको मैं विचार करके कहता हूँ, आप सुनें॥ ७ ॥\n\n\'इक्ष्वाकुके वंशमें उत्पन्न हुए एक ऐसे पुरुष हैं, जो लोगोंमें राम-नामसे विख्यात हैं, वे ही मनको वशमें रखनेवाले, महाबलवान्, कान्तिमान्, धैर्यवान् और जितेन्द्रिय हैं॥ ८ ॥' }
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

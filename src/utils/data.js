export const HOST = 'http://localhost:8080';
export const ENDPOINTS = {
    "GET-USER": `${HOST}/user`,
    "GET-education": `${HOST}/education`,
    "GET-education-id": `${HOST}/education/`,
    "PUT-education-id": `${HOST}/education/`,
    "POST-educationCreate": `${HOST}/education`,
    "DELETE-education-id": `${HOST}/education/`,
    "GET-economy": `${HOST}/economy`,
    "GET-economy-id": `${HOST}/economy/`,
    "PUT-economy-id": `${HOST}/economy/`,
    "POST-economyCreate": `${HOST}/economy`,
    "DELETE-economyDelete": `${HOST}/economy/`,
    "GET-psychology": `${HOST}/psychology`,
    "GET-psychology-id": `${HOST}/psychology/`,
    "PUT-psychology-id": `${HOST}/psychology/`,
    "POST-psychologyCreate": `${HOST}/psychology`,
    "DELETE-psychologyDelete": `${HOST}/psychology/`,
}

export const surveyQuestions = [
    // Economics
    { 
        questionId: 1,
        questionInternalId: "firstAnswer",
        questionLabel: "Have you recently experienced financial difficulties that have affected your ability to continue with your studies?",
        questionAnswer: 0,
        category: 1
    },
    { 
        questionId: 2,
        questionInternalId: "secondAnswer",
        questionLabel: "Have you had to work while studying to cover your educational expenses?",
        questionAnswer: 0,
        category: 1
    },
    { 
        questionId: 3,
        questionInternalId: "thirdAnswer",
        questionLabel: "How concerned are you about your financial situation while pursuing your studies?",
        questionAnswer: 0,
        category: 1
    },
    // Psychology
    { 
        questionId: 4,
        questionInternalId: "firstAnswer",
        questionLabel: "Have you felt emotionally overwhelmed or experienced emotional difficulties that impact your academic performance?",
        questionAnswer: 0,
        category: 2
    },
    { 
        questionId: 5,
        questionInternalId: "secondAnswer",
        questionLabel: "How helpful do you consider the emotional support resources provided by your educational institution?",
        questionAnswer: 0,
        category: 2
    },
    { 
        questionId: 6,
        questionInternalId: "thirdAnswer",
        questionLabel: "How would you rate your level of self-confidence in relation to your academic abilities?",
        questionAnswer: 0,
        category: 2
    },
    // Educational
    { 
        questionId: 7,
        questionInternalId: "firstAnswer",
        questionLabel: "How do you assess the quality of the teaching you receive at your educational institution? How does your relationship with teachers and the school environment affect your decision to stay in school?",
        questionAnswer: 0,
        category: 3
    },
    { 
        questionId: 8,
        questionInternalId: "secondAnswer",
        questionLabel: "To what extent do you feel that your relationship with your teachers influences your motivation to attend classes and complete your assignments?",
        questionAnswer: 0,
        category: 3
    },
    { 
        questionId: 9,
        questionInternalId: "thirdAnswer",
        questionLabel: "How are you doing academically?",
        questionAnswer: 0,
        category: 3
    },
]
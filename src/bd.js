const data = {
    users: [
        {
            id: 1,
            username: "1",
            password: "1"
        }
    ],
    quizzes: [
        {
            id: 1,
            title: "General Knowledge",
            questions: [
                {
                    questionId: 1,
                    questionText: "What is the capital of France?",
                    options: ["Paris", "London", "Rome", "Berlin"],
                    answer: "Paris"
                },
                {
                    questionId: 2,
                    questionText: "Which planet is known as the Red Planet?",
                    options: ["Earth", "Mars", "Jupiter", "Venus"],
                    answer: "Mars"
                },
                {
                    questionId: 3,
                    questionText: "Who teaches Web Technologies and Web Design at the UZHNU?",
                    options: ["Buchuk", "Sergiyko", "Vapnichniy", "Petsko"],
                    answer: "Buchuk"
                },
                {
                    questionId: 4,
                    questionText: "AI - ...",
                    options: ["Artificial intelligence", "Ancient Index", "Air Invasion"],
                    answer: "Artificial intelligence"
                }
            ]
        }
    ]
};

export default data;

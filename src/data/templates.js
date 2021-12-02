const templates = [
    {
        story: ["Once there was a ", " that liked to ", " and was very ", ". The end."],
        words: [{d: "Noun", t: "noun"}, {d: "Verb", t: "verb"}, {d: "Adjective", t: "adj"}]
    },
    {
        story: ["one ", " two ", " three ", " four ", " five ", " six"],
        words: [{d: "Plural Noun", t: "plural"}, {d: "Verb", t: "verb"}, {d: "Adjective", t: "adj"},
        {d: "Noun 1", t: "noun"}, {d: "Noun (body part)", t: "noun"}]
    },
    {
        story: ["one ",  " two ", " three ", " four ", " five ", " six"],
        words: [{d: "Plural Noun", t: "plural"}, {d: "Verb", t: "verb"}, {d: "Adjective", t: "adj"},
        {d: "Noun 1", t: "noun"}, {d: "Noun 1", t: "noun"}]
    },
    {
        story: ["Once upon a time, there was a family of ",  ". The ", " liked to ", 
        " with their neighbors. But one day, a(n) ", " ", " attacked one of the ", " and injured their ",
        ", and they couldn't ", " anymore. The end."],
        words: [{d: "Plural Noun", t: "plural"}, {d: "Plural Noun", t: "plural"}, {d: "Verb", t: "verb"}, 
        {d: "Adjective", t: "adj"}, {d: "Noun", t: "noun"}, {d: "Plural Noun", t: "plural"}, 
        {d: "Noun (body part)", t: "noun"}, {d: "Verb", t: "verb"}]
    },
];

export default templates;
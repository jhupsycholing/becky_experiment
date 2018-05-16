var shuffleSequence = seq("setcounter","intro","beginning_of_practice", sepWith("practice_sep", "practice"), "practice_sep", "end_of_practice", 
                          sepWith("sep", rshuffle(anyOf('simple_npi_anim--past','simple_npi_anim--future','simple_npi_inanim--past','simple_npi_inanim--future'))
                                       ), 'sr', "end_of_experiment");
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        normalMessage: "Correct!",
        errorMessage: "Incorrect."
    },
    "AcceptabilityJudgment", {
        s: '',
	    q: 'Which of these two sentences is more acceptable than the other?',
        showNumbers: true,
        hasCorrect: true,
        leftComment: "", rightComment: ""
    },
    "DashedAcceptabilityJudgment", {
        showNumbers: true,
        hasCorrect: true,
        leftComment: "", rightComment: ""
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var qcond = "AcceptabilityJudgment";

var manualSendResults = true;

var items = [

    ["practice_sep", "Separator", { transfer: 1000 }],    
    
    ["sep", "Separator", { transfer: 1000 }],

    ['sr','__SendResults__',[]],

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

    ["beginning_of_practice", "Message", {html: "<p>Let's start with a few practice sentences.</p>"}],
        
    ["practice", qcond, { as: ["The key to the cabinets are on the table", "The key to the cabinets is on the table"],
                                           hasCorrect: 1}],

    ["practice", qcond, {as: ["The bear that I'm watching  is very interesting", "The bear that I'm watching are very interesting"],
                                           hasCorrect: 0}],

    ["practice", qcond, {as: ["Our hopes of winning is going down the toilet", "Our hopes of winning are going down the toilet"],
                                           hasCorrect: 1}],
    
    ["practice", qcond, {as: ["The leaders of our humble town are faultless and wise", "The leaders of our humble town is faultless and wise"],
                                           hasCorrect: 0}],

    
    ["end_of_practice", "Message", {html: "<p>End of practice. On to the real experiment!</p>"}],
    ["setcounter", "__SetCounter__", { }],
    [["simple_npi_anim--past", 1], qcond, {as: ["few customers have ever been popular.","many customers have ever been popular."], hasCorrect: 0}],
[["simple_npi_anim--past", 1], qcond, {as: ["no consultants have ever had children.","most consultants have ever had children."], hasCorrect: 0}],
[["simple_npi_anim--past", 1], qcond, {as: ["few officers have ever been famous.","many officers have ever been famous."], hasCorrect: 0}],
[["simple_npi_anim--past", 1], qcond, {as: ["no pilots have ever been famous.","most pilots have ever been famous."], hasCorrect: 0}],
[["simple_npi_anim--past", 1], qcond, {as: ["no customers have ever been popular.","most customers have ever been popular."], hasCorrect: 0}],
[["simple_npi_anim--past", 1], qcond, {as: ["no surgeons have ever had children.","most surgeons have ever had children."], hasCorrect: 0}],
[["simple_npi_anim--past", 1], qcond, {as: ["few managers have ever had children.","many managers have ever had children."], hasCorrect: 0}],
[["simple_npi_anim--past", 1], qcond, {as: ["no managers have ever been popular.","most managers have ever been popular."], hasCorrect: 0}],
[["simple_npi_anim--past", 1], qcond, {as: ["no consultants have ever been famous.","most consultants have ever been famous."], hasCorrect: 0}],
[["simple_npi_anim--past", 1], qcond, {as: ["few teachers have ever had children.","many teachers have ever had children."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["no senators will ever have children.","most senators will ever have children."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["few authors will ever have children.","many authors will ever have children."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["no customers will ever have children.","most customers will ever have children."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["no senators will ever be famous.","most senators will ever be famous."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["few managers will ever be popular.","many managers will ever be popular."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["no teachers will ever have children.","most teachers will ever have children."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["no surgeons will ever have children.","most surgeons will ever have children."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["few customers will ever have children.","many customers will ever have children."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["no surgeons will ever be popular.","most surgeons will ever be popular."], hasCorrect: 0}],
[["simple_npi_anim--future", [2, 1]], qcond, {as: ["no surgeons will ever be popular.","most surgeons will ever be popular."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["few paintings have ever been ignored.","many paintings have ever been ignored."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["few pictures have ever been ignored.","many pictures have ever been ignored."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["few movies have ever been ignored.","many movies have ever been ignored."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["no novels have ever gotten old.","most novels have ever gotten old."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["no movies have ever been ignored.","most movies have ever been ignored."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["no movies have ever been seen.","most movies have ever been seen."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["no poems have ever been ignored.","most poems have ever been ignored."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["few songs have ever been seen.","many songs have ever been seen."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["no paintings have ever been seen.","most paintings have ever been seen."], hasCorrect: 0}],
[["simple_npi_inanim--past", [3, 1]], qcond, {as: ["no poems have ever gotten old.","most poems have ever gotten old."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["no books will ever get old.","most books will ever get old."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["few pictures will ever be ignored.","many pictures will ever be ignored."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["few movies will ever get old.","many movies will ever get old."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["few pictures will ever be appreciated.","many pictures will ever be appreciated."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["no poems will ever be ignored.","most poems will ever be ignored."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["few paintings will ever be seen.","many paintings will ever be seen."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["few movies will ever be appreciated.","many movies will ever be appreciated."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["no songs will ever be ignored.","most songs will ever be ignored."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["no poems will ever get old.","most poems will ever get old."], hasCorrect: 0}],
[["simple_npi_inanim--future", [4, 1]], qcond, {as: ["few games will ever be ignored.","many games will ever be ignored."], hasCorrect: 0}],
    ["end_of_experiment", "Message", {transfer: null, html: '<p>End of experiment. Please submit this code to Mechanical Turk to confirm completion: ABGDGVZGG. Feel free to close this window.</p>'}]
                           
];

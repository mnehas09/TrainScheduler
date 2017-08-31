var config = {
    apiKey: "AIzaSyD7e36agtdTpLXOwvMEHZ-OdInSHBW02tc",
    authDomain: "train-scheduler-9929a.firebaseapp.com",
    databaseURL: "https://train-scheduler-9929a.firebaseio.com",
    projectId: "train-scheduler-9929a",
    storageBucket: "train-scheduler-9929a.appspot.com",
    messagingSenderId: "754618644947"
};
firebase.initializeApp(config);

var database = firebase.database();
var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = 0;


$("#submit").on('click', function() {
    event.preventDefault();
    trainName = $('#name-input').val().trim();
    destination = $('#destination-input').val().trim();
    firstTrainTime = $('#firsttrain-input').val().trim();
    frequency = $('#frequency-input').val().trim();


    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    })


})


database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {


    var sv = snapshot.val();

    console.log(sv);

    $("#name").html(sv.trainName);
    $("#destination").html(sv.destination);
    $("#arrival").html(sv.firstTrainTime);
    $("#frequency").html(sv.frequency);


}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
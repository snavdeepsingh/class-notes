// original code

// $("#name-submit").on("click", function(){
//     // $("input [type='text']").on("click", function(){
//     event.preventDefault();

//     let database = firebase.database();

//     // var userName = $("#name-input").val().trim()
//     // console.log(userName);

//     let valName = $("#name-input").val().trim();
//     console.log(valName);


//     database.ref("name").set(valName);

//     // ref is either a single value, or holder, holds place, when reference later, use ref to get it, kinda like id, key and object, think of ref as key that will get values out of later
//     // setting that key equivalent to 
//     // firebase giant JSON, that can be used as database


//     let valRole = $("#role-input").val().trim();
//     database.ref("role").set(valRole);

//     let valDate = $("#date-input").val().trim();
//     database.ref("hire date").set(valDate);


//     database.ref("name").on("value", function(snapshot) {
        

//         let data = snapshot.val()

//         $("#name-output").text(data)


//     // END OF: database.ref("name").on("value", function(snapshot) {
//     });

//     database.ref("role").on("value", function(snapshot){

//         let data = snapshot.val()

//         $("#role-output").text(data);

    
//     // END OF: database.ref("role").on("value", function(snapshot){
//     });

//     database.ref("hire date").on("value", function(snapshot){

//         let data = snapshot.val()

//         $("#date-output").text(data);

//     // END OF: database.ref("role").on("value", function(snapshot){
//     });

//   // END OF: $("#name-submit").on("click", function(){
//   });





  // test: array

//   $("#name-submit").on("click", function(){
//     event.preventDefault();

//     let database = firebase.database();


//     let userInfo = [];

//     let valName = $("#name-input").val().trim();
//     console.log(valName);

//     userInfo.push(valName);



//     let valRole = $("#role-input").val().trim();
//     userInfo.push(valRole);

//     let valDate = $("#date-input").val().trim();
//     userInfo.push(valDate);

//     database.ref("userInfo/").set(userInfo);

//     database.ref("userInfo").on("value", function(snapshot) {
        

//         let data = snapshot.val()

//         $("#name-output").text(data[0]);
//         $("#role-output").text(data[1]);
//         $("#date-output").text(data[2]);


//     // END OF: database.ref("name").on("value", function(snapshot) {
//     });

//   // END OF: $("#name-submit").on("click", function(){
//   });


// test object

$("#name-submit").on("click", function(){
    event.preventDefault();

    let database = firebase.database();

    let valName = $("#name-input").val().trim(),
        valRole = $("#role-input").val().trim(),
        valDate = $("#date-input").val().trim();

    // let userInfo = {
    //     "name": valName,
    //     "role": valRole,
    //     "hireDate": valDate
    // };

    // console.log(userInfo);

    // database.ref("userInfo/").set(userInfo);

    //test: set() userInfo all in one go, instead of variables first, then set
    // database.ref("userInfo/").set({

    //     "name": valName,
    //     "role": valRole,
    //     "hireDate": valDate

    // })

    // test: push(), ie adding one set of userInfo after another, instead of overwriting the previous entry
    
    database.ref("userInfo/").push({

        "name": valName,
        "role": valRole,
        "hireDate": valDate,
        "dateAdded": firebase.database.ServerValue.TIMESTAMP

    });

    // database.ref("userInfo/").on("value", function(snapshot) {
        

    //     let data = snapshot.val()
    //     console.log(data);

    //     // $("#name-output").text(data.name);
    //     // $("#role-output").text(data.role);
    //     // $("#date-output").text(data.hireDate);

        


    // // END OF: database.ref("name").on("value", function(snapshot) {
    // });

// END OF: $("#name-submit").on("click", function(){
});

$("#pull-firebase").on("click", function(){
    event.preventDefault();

    let database = firebase.database();

    // database.ref("userInfo/").on("child_added", function(snapshot) {
    database.ref("userInfo/").on("value", function(snapshot) {
        
        
        let data = snapshot.val()
        //log the entire data from userInfo object
        // console.log(data)

        //interate through the userInfo object, log the name of each item
        for (let i in data){
            console.log(data[i].name);
            var userElement = $("<p>")
            userElement.text(data[i].name)
            userElement.prependTo("#firebase-data");
        // $("#firebase-data").prepend(data[i].name);
            
        }

        // $("#name-output").text(data.name);
        // $("#role-output").text(data.role);
        // $("#date-output").text(data.hireDate);

        // $("#firebase-data").text(data.L7V2pPiQ9tfQ6qlQDV_);

        // $("#firebase-data").text(data.role);
        // $("#firebase-data").text(data.date);
        
        


    // END OF: database.ref("name").on("value", function(snapshot) {
    });


// END OF: $("#pull-firebase").on("click", function(){
});

$("#clear-firebase").on("click", function() {
    event.preventDefault();

    let database = firebase.database();

    database.ref("userInfo/").remove();

    // database.ref("userInfo/").set(null);

    // database.ref("userInfo/name").set(null);

    // database.ref("userInfo/name").remove();

// END OF: $("#clear-firebase").on("click", function() {
});

firebase.database().ref("userInfo/").orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
    // console.log(snapshot.key, snapshot.val();
    var lastKey = snapshot.key;

    $("#update-firebase").on("click", function(){
        event.preventDefault();

        // firebase.database().ref("userInfo/users").orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
        //     // console.log(snapshot.key, snapshot.val();
        //     var lastKey = snapshot.key;
        // })
        console.log("lastKey:",lastKey);

        let nameUpdate  = $("#name-input").val().trim(),
            database    = firebase.database(),
            counter     = 0;

        // var key = database.ref("userInfo/").push().key;
        // console.log("key:", key);

        // for (let i in data){

        // }
        
        // database.ref("userInfo/").orderByKey().limitToLast(1).update({
        // database.ref("userInfo").orderByChild("dateAdded").limitToLast(1).update({
        // database.ref("userInfo/users/" + key).update({
        // database.ref("userInfo/users/" + lastKey).update({
        database.ref("userInfo/" + lastKey).update({
            
            
        // database.ref("userInfo/").orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){

            // let snap = snapshot.val();
            // console.log("snap:", snap);

        //     console.log(snap.name)

        //     snap.name.update({
                    name: nameUpdate
        //     });
        
        
            // snap.update({
            // // database.ref().update({
            //     "name": nameUpdate
            // });

                // "name": nameUpdate

            
            
            
        });







    // END OF: #update-firebase").on("click", function(){
    });

// END OF: firebase.database().ref("userInfo/users").orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
});

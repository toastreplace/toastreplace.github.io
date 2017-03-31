jQuery(document).ready(function($) {
    firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    var databaseRef = firebase.database().ref('/');
    databaseRef.on('value', function(snapshot) {
        run = snapshot.val().run;
        console.log(run)
        block = snapshot.val().block;
        $('#loader').hide();
        if (run) {
            console.log('im going to change state')
            $('#toast').prop('checked', true);
        } else {
            $('#toast').prop('checked', false);
        }
        if (block) {
            $('#block').prop('checked', true);
        } else {
            $('#block').prop('checked', false);
        }
        $('#update').click(function(event) {

            if ($('#toast').is(':checked')) {
                var toast = true
            } else {
                var toast = false
            }
            if ($('#block').is(':checked')) {
                var block = true
            } else {
                var block = false
            }
            databaseRef.set({
                run: toast,
                block: block,

            });

        });
    });
});

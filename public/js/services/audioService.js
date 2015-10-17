audioVK.factory('audioService', function ($http, $q) {

    // data
    //var tracks;

    function GetTracks(owner_id) {
        return $http.get('/api/method/audio.get?owner_id=43337446');
    }

    //function getTracksResolver(owner_id){
    //    return GetTracks(owner_id).then(function(data){
    //        // faceplate
    //        console.log(data);
    //        return tracks;
    //    });
    //}

    return {
        get: GetTracks
    }
});
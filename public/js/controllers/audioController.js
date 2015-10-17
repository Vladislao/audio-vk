'use strict';

audioVK.controller('AudioController',
    function AudioController($scope, audioService) {
        var self = this;

        //self.add = add;
        //self.click = click;
        //self.groupClick = groupClick;
        //
        //$scope.groups = {};
        //$scope.frame = null;
        //
        //var link = null;
        //var timer = null;
        //var open = {};
        //var commentMap = {};
        //
        $scope.tracks = [];
        $scope.getTracks = getTracks;
        function init(){
            $scope.tracks = [{
                title: 'BLABLABLA',
                artist:'lalala'
            }, {
                title: 'BLABLABLA1',
                artist:'lalala1'
            }];

            getTracks();
        }

        init();

        function getTracks() {
            audioService.get().then(function(data){
                $scope.tracks = data.data.response
                console.log(data);
            });
        }
        //
        //$scope.$on("$destroy", function() {
        //    if (timer) {
        //        $interval.cancel(timer);
        //    }
        //});
        //
        //// add comment
        //function add(e, group, text){
        //    e.stopPropagation();
        //    commentService.add(link, group.coord, text).then(function(data){
        //        var id = data.data;
        //        commentMap[id] = null;
        //        group.comments.push({
        //            Id: id,
        //            Text: text,
        //            Date: new Date()
        //        });
        //    });
        //}


    });
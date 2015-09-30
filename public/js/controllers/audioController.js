'use strict';

audioVK.controller('AudioController',
    function AudioController($scope) {
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
        function init(){
            $scope.tracks = [{
                title: 'BLABLABLA',
                performer:'lalala'
            }, {
                title: 'BLABLABLA1',
                performer:'lalala1'
            }];
        };

        init();
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
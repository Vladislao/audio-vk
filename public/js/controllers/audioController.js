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
        $scope.test = {};
        function init(){
            $scope.test = {'test1': 'test1', test2:'test2'};
        }
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


describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});
describe('AudioController', function() {
    beforeEach(module('audioVK'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.getTracks', function() {
        it('return 2', function() {
            var $scope = {};
            var controller = $controller('AudioController', { $scope: $scope });
            var test = $scope.getTracks();
            expect(test).toEqual(2);
        });
    });
});
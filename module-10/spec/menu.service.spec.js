// var $httpBackend;
// var ApiPath;
// var MenuService;
//
// describe('service', function() {
//   beforeEach(module('common'));
//   beforeEach(inject(function(_$httpBackend_, _ApiPath_, _MenuService_){
//     $httpBackend = _$httpBackend_;
//     ApiPath = _ApiPath_;
//     MenuService = _MenuService_;
//   }));
//
//   it('A1 should resolve', function(){
//     $httpBackend.whenGET(ApiPath + '/menu_items/A1.json').respond({"id":1,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2019-05-01T02:08:28.109Z","updated_at":"2019-05-01T02:08:28.109Z","category_short_name":"A","image_present":true});
//     var result = MenuService.getMenuItem('A1');
//     alert(JSON.stringify(result));
//     expect(result.short_name).toEqual('A1');
//     $httpBackend.flush();
//   });
// });

describe('Test Module', function() {

  var $httpBackend, ApiPath, MenuService;

  beforeEach(module('common'));

  beforeEach(inject(function(_$httpBackend_, _ApiPath_, _MenuService_) {
    $httpBackend = _$httpBackend_;
    ApiPath = _ApiPath_;
    MenuService = _MenuService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('success test', function() {
    var mockResponse = {
      data: { short_name: 'A1' }
    };

    $httpBackend.expectGET(ApiPath + '/menu_items/A1.json')
        .respond(mockResponse);

    MenuService.getMenuItem('A1').then(function(data) {
      expect(data).toEqual(mockResponse);
    });

    $httpBackend.flush();
  });

  it('failure test', function() {

    $httpBackend.expectGET(ApiPath + '/menu_items/AA.json')
        .respond(500, {});

    MenuService.getMenuItem('AA').then(function(data) {
      expect(data).toBeNull();
    }, function (error) {
      expect(error.status).toEqual(500);
    });

    $httpBackend.flush();
  });

});
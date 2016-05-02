;(function(angular) {
    'use strict';

    angular
        .module('controllers.Main', ['ngFileUpload'])
        .controller('MainCtrl', MainCtrl);

    function MainCtrl () {
        var vm = this;

        var slidesImages = [
            'assets/img/024.jpg',
            'assets/img/025.jpg',
            'assets/img/027.jpg',
            'assets/img/029.jpg',
            'assets/img/038.jpg'
        ];

        var Categories = [{
            id: 1,
            name: 'Category 1',
            subcategories: [{
                id: 1,
                name: 'Subcategory 1',
                types: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5','Type 6', 'Type 7', 'Type 8', 'Type 9', 'Type 10']
            }, {
                id: 2,
                name: 'Subcategory 2',
                types: ['Type 11', 'Type 12', 'Type 13']
            }]
        }, {
            id: 2,
            name: 'Category 2',
            subcategories: [{
                id: 3,
                name: 'Subcategory 3',
                types: ['Type 21', 'Type 22', 'Type 23']
            }]
        }];

        var Subcategories = {
            findBy: function (params) {
                if (params.category === '1') {
                    return Categories[0].subcategories;
                }
                return Categories[1].subcategories;
            },

            getTypes: function (subcategory) {
                if (subcategory === '1') {
                    return Categories[0].subcategories[0].types;
                }

                if (subcategory === '2') {
                    return Categories[0].subcategories[1].types;
                }
                return Categories[1].subcategories[0].types;
            }
        };

		vm.filename = 'test';
        vm.slides = [];
        vm.categories = Categories;
		vm.servicesAvailable = ['Travel to Customer (10 miles)', 'Customer Comes to Me', 'Service 3'];
		vm.hours = _getNumbersByInterval(0, 24);
		vm.minutes = _getNumbersByInterval(0, 60);
		vm.services = [{
			desc: vm.servicesAvailable[0],
			cost: '$ 10',
			time: '2h 30min'
		}];

        vm.getSecondIndex = getSecondIndex;
        vm.loadSubcategoriesFor = loadSubcategoriesFor;
        vm.loadTypesFor = loadTypesFor;
		vm.upload = upload;
		vm.hasService = hasService;
		vm.addService = addService;
		vm.removeService = removeService;

        var currIndex = 0;
        function addSlides (image) {
            var newWidth = 600 + slidesImages.length + 1;
            vm.slides.push({
                image: image,
                id: currIndex++
            });
        }

        for (var i = 0; i < slidesImages.length; i++) {
            addSlides(slidesImages[i]);
        }

        function loadSubcategoriesFor (category, scope) {
            scope.subcategories = Subcategories.findBy({category: category});
        }

        function loadTypesFor (subcategory, scope) {
            scope.types = Subcategories.getTypes(subcategory);
        }

        function getSecondIndex (index) {
            if (index - vm.slides.length >= 0) {
                return index - vm.slides.length;
            }
            else {
                return index;
            }
        }

		function upload ($files) {
			vm.filename = $files[0].name;
		}

		function _getNumbersByInterval (start, end) {
			var list = [];
		    for (var i = start; i < end; i++) {
				list.push(i);
			}
			return list;
		}

		function hasService (scope) {
			return scope.service && scope.hour && scope.minute;
		}

		function addService (scope) {
			vm.services.push({
				desc: scope.service,
				cost: scope.cost ? '$ ' + scope.cost : '$ 0',
				time: scope.hour + ' ' + scope.minute
			});
		}

		function removeService (index) {
		    vm.services.splice(index, 1);
		}
    }

})(angular);

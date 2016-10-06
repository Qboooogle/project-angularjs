/*
* @Author: Qboooogle
* @Date:   2016-10-06 11:54:44
* @Last Modified by:   Qboooogle
* @Last Modified time: 2016-10-06 12:04:45
*/

'use strict';

angular.module("exampleApp.Directives", [])
    .directive("highlight", function ($filter) {

        var dayFilter = $filter("dayName");

        return function (scope, element, attrs) {
            if (dayFilter(scope.day) == attrs["highlight"]) {
                element.css("color", "red");
            }
        }
    });
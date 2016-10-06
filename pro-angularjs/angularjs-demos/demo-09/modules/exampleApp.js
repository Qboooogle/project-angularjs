/*
* @Author: Qboooogle
* @Date:   2016-10-06 12:06:37
* @Last Modified by:   Qboooogle
* @Last Modified time: 2016-10-06 12:07:32
*/

'use strict';

var myApp = angular.module("exampleApp",
        ["exampleApp.Controllers", "exampleApp.Filters",
         "exampleApp.Services", "exampleApp.Directives"]);

    var now = new Date();
    myApp.value("nowValue", now);
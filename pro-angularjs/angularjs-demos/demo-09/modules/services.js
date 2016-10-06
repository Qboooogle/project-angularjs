/*
* @Author: Qboooogle
* @Date:   2016-10-06 11:53:53
* @Last Modified by:   Qboooogle
* @Last Modified time: 2016-10-06 12:04:41
*/

'use strict';

angular.module("exampleApp.Services", ["exampleApp"])
    .service("days", function (nowValue) {
        this.today = nowValue.getDay();
        this.tomorrow = this.today + 1;
    });

"use strict";
var InMemoryUserService = (function () {
    function InMemoryUserService() {
    }
    InMemoryUserService.prototype.createDb = function () {
        var users = [
            {
                id: 102030,
                name: "Reinaldo Portocarrero",
                address: "calle 45 # 63-39",
                phone: 3120005252
            },
            {
                id: 204060,
                name: "Jhon Portocarrero",
                address: "cra 60 # 63-50",
                phone: 3160005241
            },
            {
                id: 306090,
                name: "Javier Hernandez",
                address: "av 30 # 52-23",
                phone: 320444544
            }
        ];
        return { users: users };
    };
    return InMemoryUserService;
}());
exports.InMemoryUserService = InMemoryUserService;
//# sourceMappingURL=in-memory-user.service.js.map
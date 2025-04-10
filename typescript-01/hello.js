"use strict";
function add(x, y) {
    return x + y;
}
function createUser(user) {
    var _a;
    if (!user.lastname)
        return;
    const trimmedLastName = (_a = user.lastname) === null || _a === void 0 ? void 0 : _a.trim();
}
function updateUser(user) {
    user;
}
const payload = {
    firstname: '',
    email: ''
};
updateUser(payload);
let x = add(4, 3);
createUser({
    firstname: 'jeetu',
    lastname: 'pal',
});
function doSomething(x) {
}
doSomething(4);
let num = 10;
doSomething(num);

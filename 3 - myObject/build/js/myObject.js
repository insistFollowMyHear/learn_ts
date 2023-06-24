"use strict";
const User = {
    name: 'hero',
    email: 'hero@gamil.com',
    isActive: false
};
function createUser(obj) {
    console.log(obj);
}
createUser({ name: 'hero', isPaid: false });
function createCourse() {
    return { name: 'hero', price: 99.89 };
}

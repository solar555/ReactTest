var myObj = {
    specialFunction: function() {
        console.log("specialFunction");
    },

    anotherSpecialFunction: function() {
        console.log("anotherSpecialFunction");
    },

    getAsyncData: function(cb) {
        cb();
    },

    render: function() {
        console.log('typeof render this:',typeof this);
        var that = this;
        this.getAsyncData(function() {
            console.log('typeof getAsyncData callback this:',typeof this);
            that.specialFunction();
            that.anotherSpecialFunction();
        })
    }

    // render: function() {

    //     this.getAsyncData(function() {
    //         this.specialFunction();
    //         this.anotherSpecialFunction();
    //     }.bind(this));
    // }
}

// myObj.render();

// Function.prototype.bind = function(scope) {
//     var fn = this;
//     return function() {
//         return fn.apply(scope);
//     }
// }

// var foo = {
//     x: 3
// }

// var bar = function() {
//     console.log(this.x);
// }

// bar();
// var boundFunc = bar.bind(foo);

// boundFunc();



var logger = {
    x: 0,
    updateCount: function() {
        this.x++;
        console.log(this.x);
    }
}
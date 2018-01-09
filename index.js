"use strict";

function Proms(fn){

    var _self = this;
    var _resolveFnStack = function() { return true };
    var _rejectFnStack  = function() { return false };
    var _finallyFnStack = function() { return null };

    _self.then = function(cb){

        var tmpFn = _resolveFnStack;

        _resolveFnStack = function(){

            var args = arguments;

            tmpFn.apply(this, args);

            setTimeout(function() {
                cb.apply(this, args);
            });

        };
        return _self;

    };

    _self.catch = function(cb){

        var tmpFn = _rejectFnStack;

        _rejectFnStack = function(){

            var args = arguments;

            tmpFn.apply(this, args);

            setTimeout(function() {
                cb.apply(this, args);
            });

        };
        return _self;

    };

    _self.finally = function(cb){

        var tmpFn = _finallyFnStack;

        _finallyFnStack = function(){

            var args = arguments;

            tmpFn.apply(this, args);

            setTimeout(function() {
                cb.apply(this, args);
            });

        };
        return _self;

    };

    setTimeout(function() {

        // Attach Finally to Resolve Functions
        _self.then(_finallyFnStack);

        // Attach Finally to Reject Functions
        _self.catch(_finallyFnStack);

        // Execute The Main Function
        setTimeout(function() {

            fn(_resolveFnStack, _rejectFnStack);

        });

    });

    return _self;

}

try {

    module.exports = Proms;

} catch(err) {}
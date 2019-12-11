/**
 * Created by samhwang1990@gmail.com.
 */

describe('AsyncSeriesBailHook', () => {
    test(
        closureName(
            ['`unTap = tapAsync((...args, cb) => void)` to listen'],
            [
                'args is the invoked arguments',
                'last argument of tapAsync callback must be function type',
                'fail with `cb(error, undefined)`',
                'complete with `cb(undefined, value)`',
                '`unTap` can remove listener from hook'
            ]
        ),
        closureToDo
    );

    test(
        closureName(
            ['`unTap = tapPromise(cb)` to listen'],
            [
                '`cb` was called with invoked arguments',
                '`cb` can return value in any type which will be wrapped as promise',
                'fail with throw error or rejected promise',
                'complete with resolved promise',
                '`unTap` can remove listener from hook'
            ]
        ),
        closureToDo
    );

    test(
        closureName(
            ['`callAsync(...args, cb)` to invoke'],
            [
                'invocation calling return nothing',
                'all listener was called in queue with args',
                'if listener failed, invocation immediately bailed by calling `cb(error)`',
                'if listener bailed, invocation immediately bailed by calling `cb(undefined, value)`',
                'if no listener was bailed, invocation bailed with args[0] by calling `cb(undefined, args[0])`',
            ],
        ),
        closureToDo
    );

    test(
        closureName(
            ['`callPromise(...args, cb)` to invoke'],
            [
                'invocation return a promise',
                'all listener was called in queue with args',
                'if listener failed, invocation immediately bailed by rejecting promise with error',
                'if listener bailed, invocation immediately bailed by resolving promise',
                'if no listener was bailed, invocation completed by resolving promise with `args[0]`',
            ],
        ),
        closureToDo
    );

    test(
        closureName(
            ['clean all listeners'],
            [
                '`callPromise(...args)` invoke nothing, promise resolved with `args[0]` immediately',
                '`callAsync(...args, cb)` invoke nothing, `cb` called with `args[0]` immediately',
            ]
        ),
        closureToDo
    );
});

describe('AsyncSeriesBailHook with hashcode', () => {
    test(
        closureName(
            ['create AsyncSeriesBailHook with hashcode function', 'invoke hook with args'],
            ['hashcode function was called once with args which invoked the hook'],
        ),
        closureToDo
    );

    test(
        closureName(
            [
                'listen with `cb`s and specified `hashcode`',
                'invoke hook with args'
            ],
            [
                'invocation return `undefined`',
                'args which hits the `hashcode`, `cb` was called',
                'args which did\'t hit the `hashcode`, `cb` won\'t be called',
            ]
        ),
        closureToDo
    );

    test(
        closureName(
            [
                'listen with `cb` which no hashcode was specified',
                'invoke hook with args'
            ],
            [
                '`cb` was called regardless of the hashcode of args'
            ],
        ),
        closureToDo
    )
});
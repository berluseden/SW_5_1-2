var ReactComponents =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"engine": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~ICCrossword":"vendors~ICCrossword","ICCrossword":"ICCrossword"}[chunkId]||chunkId) + "-react-lib.bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpReactComponents"] = window["webpackJsonpReactComponents"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./react-app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*******************************************************************************************************!*\
  !*** delegated ./node_modules/@babel/runtime/helpers/esm/extends.js from dll-reference PlayerVendors ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference PlayerVendors */ "dll-reference PlayerVendors"))("./node_modules/@babel/runtime/helpers/esm/extends.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!****************************************************************************************************************************!*\
  !*** delegated ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js from dll-reference PlayerVendors ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference PlayerVendors */ "dll-reference PlayerVendors"))("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/io-6de156f3.js":
/*!***********************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/io-6de156f3.js ***!
  \***********************************************************/
/*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a0, a1, a2, a3, a4, a5, a6, a7, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return FORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return GET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return buffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return sliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return RACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return effectTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return takeMaybe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return putResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return expanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMetaInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createAllStyleChildCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return assignWithSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return shouldComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return asyncIteratorSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return shouldCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return shouldTerminate; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");





var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue =
/*#__PURE__*/
konst(true);

var noop = function noop() {};

if ( true && typeof Proxy !== 'undefined') {
  noop =
  /*#__PURE__*/
  new Proxy(noop, {
    set: function set() {
      throw internalErr('There was an attempt to assign a property to internal `noop` function.');
    }
  });
}
var identity = function identity(v) {
  return v;
};
var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols(target, source) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(target, source);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap(mapper, arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    fn();
  };
}

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }

  if (name === void 0) {
    name = 'iterator';
  }

  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;

  /*eslint-disable no-console*/
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n"; // creates empty, but not-holey array

var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    if (true) {
      check(action, function (ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }

    return dispatch(Object.defineProperty(action, _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"], {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"];
};
var shouldCancel = function shouldCancel(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"];
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;

  if (true) {
    check(totalCount, function (c) {
      return c > 0;
    }, 'createAllStyleChildCallbacks: get an empty array or object');
  }

  var completedCount = 0;
  var completed;
  var results = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};

  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }

  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };

    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });

  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };

  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]];
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};

function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var none = function none() {
  return zeroBuffer;
};
var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});

var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var effectTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});

var TEST_HINT = '\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)';

var makeEffect = function makeEffect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};

var isForkEffect = function isForkEffect(eff) {
  return Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(eff) && eff.type === FORK;
};

var detach = function detach(eff) {
  if (true) {
    check(eff, isForkEffect, 'detach(eff): argument must be a fork effect');
  }

  return makeEffect(FORK, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["multicast"])(patternOrChannel) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(multicastPattern) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }

  if (true) {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel$1, action) {
  if (true) {
    if (arguments.length > 1) {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument channel is undefined');
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument action is undefined');
    } else {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(action): argument action is undefined');
    }
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["undef"])(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }

  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}
var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
} // this match getFnCallDescriptor logic

var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument fn is undefined or null");

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    return;
  }

  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"])(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": argument fn is not function");
    return;
  }

  if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn)) {
    check(context[fn], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }

  check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};

function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }

    if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(context[fn])) {
      fn = context[fn];
    }
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};

function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var arg0 = typeof args[0] === 'number' ? args[0] : 'ms';
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor('call', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  var fnDescriptor = [context, fn];

  if (true) {
    validateFnDescriptor('apply', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  if (true) {
    validateFnDescriptor('cps', fnDescriptor);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  if (true) {
    validateFnDescriptor('fork', fnDescriptor);
    check(fnDescriptor, function (arg) {
      return !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["effect"])(arg);
    }, 'fork: argument must not be an effect');
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  if (true) {
    validateFnDescriptor('spawn', fnDescriptor);
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  if (true) {
    if (arguments.length > 1) {
      throw new Error('join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"];
  }

  if (true) {
    if (arguments.length > 1) {
      throw new Error('cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"] && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(taskOrTasks)) {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(CANCEL, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'select(selector, [...]): argument selector is undefined');
    check(selector, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], "select(selector, [...]): argument " + selector + " is not a function");
  }

  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/

function actionChannel(pattern$1, buffer$1) {
  if (true) {
    check(pattern$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"], 'actionChannel(pattern,...): argument pattern is not valid');

    if (arguments.length > 1) {
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'actionChannel(pattern, buffer): argument buffer is undefined');
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["buffer"], "actionChannel(pattern, buffer): argument " + buffer$1 + " is not a valid buffer");
    }
  }

  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel$1) {
  if (true) {
    check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "flush(channel): argument " + channel$1 + " is not valid channel");
  }

  return makeEffect(FLUSH, channel$1);
}
function getContext(prop) {
  if (true) {
    check(prop, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"], "getContext(prop): argument " + prop + " is not a string");
  }

  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    check(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"], createSetContextWarning(null, props));
  }

  return makeEffect(SET_CONTEXT, props);
}
var delay =
/*#__PURE__*/
call.bind(null, _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__["default"]);




/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js ***!
  \*******************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, default, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return multicastChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return runSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return stdChannel; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./io-6de156f3.js */ "./node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["I"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux-saga/deferred */ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");











var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/

var semaphore = 0;
/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/

function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}
/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/


function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}
/**
 * Puts the scheduler in a `suspended` state and executes a task immediately.
 */

function immediately(task) {
  try {
    suspend();
    return task();
  } finally {
    flush();
  }
}
/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/

function suspend() {
  semaphore++;
}
/**
  Puts the scheduler in a `released` state.
**/


function release() {
  semaphore--;
}
/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/


function flush() {
  release();
  var task;

  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

var array = function array(patterns) {
  return function (input) {
    return patterns.some(function (p) {
      return matcher(p)(input);
    });
  };
};
var predicate = function predicate(_predicate) {
  return function (input) {
    return _predicate(input);
  };
};
var string = function string(pattern) {
  return function (input) {
    return input.type === String(pattern);
  };
};
var symbol = function symbol(pattern) {
  return function (input) {
    return input.type === pattern;
  };
};
var wildcard = function wildcard() {
  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["k"];
};
function matcher(pattern) {
  // prettier-ignore
  var matcherCreator = pattern === '*' ? wildcard : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["string"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(pattern) ? array : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["stringableFunc"])(pattern) ? string : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(pattern) ? predicate : Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["symbol"])(pattern) ? symbol : null;

  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern);
  }

  return matcherCreator(pattern);
}

var END = {
  type: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"]
};
var isEnd = function isEnd(a) {
  return a && a.type === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_END_TYPE"];
};
var CLOSED_CHANNEL_WITH_TAKERS = 'Cannot have a closed channel with pending takers';
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
function channel(buffer$1) {
  if (buffer$1 === void 0) {
    buffer$1 = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["e"])();
  }

  var closed = false;
  var takers = [];

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["buffer"], INVALID_BUFFER);
  }

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }

    if (takers.length && !buffer$1.isEmpty()) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (takers.length === 0) {
      return buffer$1.put(input);
    }

    var cb = takers.shift();
    cb(input);
  }

  function take(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.take's callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
    } else if (!buffer$1.isEmpty()) {
      cb(buffer$1.take());
    } else {
      takers.push(cb);

      cb.cancel = function () {
        Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(cb, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], "channel.flush' callback must be a function");
    }

    if (closed && buffer$1.isEmpty()) {
      cb(END);
      return;
    }

    cb(buffer$1.flush());
  }

  function close() {
    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      return;
    }

    closed = true;
    var arr = takers;
    takers = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      var taker = arr[i];
      taker(END);
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close
  };
}
function eventChannel(subscribe, buffer) {
  if (buffer === void 0) {
    buffer = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["n"])();
  }

  var closed = false;
  var unsubscribe;
  var chan = channel(buffer);

  var close = function close() {
    if (closed) {
      return;
    }

    closed = true;

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(unsubscribe)) {
      unsubscribe();
    }

    chan.close();
  };

  unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }

    chan.put(input);
  });

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(unsubscribe, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'in eventChannel: subscribe should return a function to unsubscribe');
  }

  unsubscribe = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(unsubscribe);

  if (closed) {
    unsubscribe();
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}
function multicastChannel() {
  var _ref;

  var closed = false;
  var currentTakers = [];
  var nextTakers = currentTakers;

  function checkForbiddenStates() {
    if (closed && nextTakers.length) {
      throw Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(CLOSED_CHANNEL_WITH_TAKERS);
    }
  }

  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
    if (nextTakers !== currentTakers) {
      return;
    }

    nextTakers = currentTakers.slice();
  };

  var close = function close() {
    if (true) {
      checkForbiddenStates();
    }

    closed = true;
    var takers = currentTakers = nextTakers;
    nextTakers = [];
    takers.forEach(function (taker) {
      taker(END);
    });
  };

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]] = true, _ref.put = function put(input) {
    if (true) {
      checkForbiddenStates();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(input, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"], UNDEFINED_INPUT_ERROR);
    }

    if (closed) {
      return;
    }

    if (isEnd(input)) {
      close();
      return;
    }

    var takers = currentTakers = nextTakers;

    for (var i = 0, len = takers.length; i < len; i++) {
      var taker = takers[i];

      if (taker[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher) {
    if (matcher === void 0) {
      matcher = wildcard;
    }

    if (true) {
      checkForbiddenStates();
    }

    if (closed) {
      cb(END);
      return;
    }

    cb[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MATCH"]] = matcher;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(function () {
      ensureCanMutateNextTakers();
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}
function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;

  chan.put = function (input) {
    if (input[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]) {
      put(input);
      return;
    }

    asap(function () {
      put(input);
    });
  };

  return chan;
}

var RUNNING = 0;
var CANCELLED = 1;
var ABORTED = 2;
var DONE = 3;

function resolvePromise(promise, cb) {
  var cancelPromise = promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]];

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(cancelPromise)) {
    cb.cancel = cancelPromise;
  }

  promise.then(cb, function (error) {
    cb(error, true);
  });
}

var current = 0;
var nextSagaId = (function () {
  return ++current;
});

var _effectRunnerMap;

function getIteratorMetaInfo(iterator, fn) {
  if (iterator.isSagaIterator) {
    return {
      name: iterator.meta.name
    };
  }

  return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn);
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  // catch synchronous failures; see #152 and #441
  try {
    var result = fn.apply(context, args); // i.e. a generator function returns an iterator

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      return result;
    }

    var resolved = false;

    var next = function next(arg) {
      if (!resolved) {
        resolved = true; // Only promises returned from fork will be interpreted. See #1573

        return {
          value: result,
          done: !Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)
        };
      } else {
        return {
          value: arg,
          done: true
        };
      }
    };

    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(next);
  } catch (err) {
    // do not bubble up synchronous failures for detached forks
    // instead create a failed task. See #152 and #441
    return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(function () {
      throw err;
    });
  }
}

function runPutEffect(env, _ref2, cb) {
  var channel = _ref2.channel,
      action = _ref2.action,
      resolve = _ref2.resolve;

  /**
   Schedule the put in case another saga is holding a lock.
   The put will be executed atomically. ie nested puts will execute after
   this put has terminated.
   **/
  asap(function () {
    var result;

    try {
      result = (channel ? channel.put : env.dispatch)(action);
    } catch (error) {
      cb(error, true);
      return;
    }

    if (resolve && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
    } else {
      cb(result);
    }
  }); // Put effects are non cancellables
}

function runTakeEffect(env, _ref3, cb) {
  var _ref3$channel = _ref3.channel,
      channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
      pattern = _ref3.pattern,
      maybe = _ref3.maybe;

  var takeCb = function takeCb(input) {
    if (input instanceof Error) {
      cb(input, true);
      return;
    }

    if (isEnd(input) && !maybe) {
      cb(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"]);
      return;
    }

    cb(input);
  };

  try {
    channel.take(takeCb, Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(pattern) ? matcher(pattern) : null);
  } catch (err) {
    cb(err, true);
    return;
  }

  cb.cancel = takeCb.cancel;
}

function runCallEffect(env, _ref4, cb, _ref5) {
  var context = _ref4.context,
      fn = _ref4.fn,
      args = _ref4.args;
  var task = _ref5.task;

  // catch synchronous failures; see #152
  try {
    var result = fn.apply(context, args);

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(result)) {
      resolvePromise(result, cb);
      return;
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(result)) {
      // resolve iterator
      proc(env, result, task.context, current, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(fn),
      /* isRoot */
      false, cb);
      return;
    }

    cb(result);
  } catch (error) {
    cb(error, true);
  }
}

function runCPSEffect(env, _ref6, cb) {
  var context = _ref6.context,
      fn = _ref6.fn,
      args = _ref6.args;

  // CPS (ie node style functions) can define their own cancellation logic
  // by setting cancel field on the cb
  // catch synchronous failures; see #152
  try {
    var cpsCb = function cpsCb(err, res) {
      if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["undef"])(err)) {
        cb(res);
      } else {
        cb(err, true);
      }
    };

    fn.apply(context, args.concat(cpsCb));

    if (cpsCb.cancel) {
      cb.cancel = cpsCb.cancel;
    }
  } catch (error) {
    cb(error, true);
  }
}

function runForkEffect(env, _ref7, cb, _ref8) {
  var context = _ref7.context,
      fn = _ref7.fn,
      args = _ref7.args,
      detached = _ref7.detached;
  var parent = _ref8.task;
  var taskIterator = createTaskIterator({
    context: context,
    fn: fn,
    args: args
  });
  var meta = getIteratorMetaInfo(taskIterator, fn);
  immediately(function () {
    var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);

    if (detached) {
      cb(child);
    } else {
      if (child.isRunning()) {
        parent.queue.addTask(child);
        cb(child);
      } else if (child.isAborted()) {
        parent.queue.abort(child.error());
      } else {
        cb(child);
      }
    }
  }); // Fork effects are non cancellables
}

function runJoinEffect(env, taskOrTasks, cb, _ref9) {
  var task = _ref9.task;

  var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
    if (taskToJoin.isRunning()) {
      var joiner = {
        task: task,
        cb: cb
      };

      cb.cancel = function () {
        if (taskToJoin.isRunning()) Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(taskToJoin.joiners, joiner);
      };

      taskToJoin.joiners.push(joiner);
    } else {
      if (taskToJoin.isAborted()) {
        cb(taskToJoin.error(), true);
      } else {
        cb(taskToJoin.result());
      }
    }
  };

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    if (taskOrTasks.length === 0) {
      cb([]);
      return;
    }

    var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(taskOrTasks, cb);
    taskOrTasks.forEach(function (t, i) {
      joinSingleTask(t, childCallbacks[i]);
    });
  } else {
    joinSingleTask(taskOrTasks, cb);
  }
}

function cancelSingleTask(taskToCancel) {
  if (taskToCancel.isRunning()) {
    taskToCancel.cancel();
  }
}

function runCancelEffect(env, taskOrTasks, cb, _ref10) {
  var task = _ref10.task;

  if (taskOrTasks === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"]) {
    cancelSingleTask(task);
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(taskOrTasks)) {
    taskOrTasks.forEach(cancelSingleTask);
  } else {
    cancelSingleTask(taskOrTasks);
  }

  cb(); // cancel effects are non cancellables
}

function runAllEffect(env, effects, cb, _ref11) {
  var digestEffect = _ref11.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);

  if (keys.length === 0) {
    cb(Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? [] : {});
    return;
  }

  var childCallbacks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(effects, cb);
  keys.forEach(function (key) {
    digestEffect(effects[key], effectId, childCallbacks[key], key);
  });
}

function runRaceEffect(env, effects, cb, _ref12) {
  var digestEffect = _ref12.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  var response = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"])(effects) ? Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(keys.length) : {};
  var childCbs = {};
  var completed = false;
  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(res)) {
        // Race Auto cancellation
        cb.cancel();
        cb(res, isErr);
      } else {
        cb.cancel();
        completed = true;
        response[key] = res;
        cb(response);
      }
    };

    chCbAtKey.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    childCbs[key] = chCbAtKey;
  });

  cb.cancel = function () {
    // prevents unnecessary cancellation
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCbs[key].cancel();
      });
    }
  };

  keys.forEach(function (key) {
    if (completed) {
      return;
    }

    digestEffect(effects[key], effectId, childCbs[key], key);
  });
}

function runSelectEffect(env, _ref13, cb) {
  var selector = _ref13.selector,
      args = _ref13.args;

  try {
    var state = selector.apply(void 0, [env.getState()].concat(args));
    cb(state);
  } catch (error) {
    cb(error, true);
  }
}

function runChannelEffect(env, _ref14, cb) {
  var pattern = _ref14.pattern,
      buffer = _ref14.buffer;
  var chan = channel(buffer);
  var match = matcher(pattern);

  var taker = function taker(action) {
    if (!isEnd(action)) {
      env.channel.take(taker, match);
    }

    chan.put(action);
  };

  var close = chan.close;

  chan.close = function () {
    taker.cancel();
    close();
  };

  env.channel.take(taker, match);
  cb(chan);
}

function runCancelledEffect(env, data, cb, _ref15) {
  var task = _ref15.task;
  cb(task.isCancelled());
}

function runFlushEffect(env, channel, cb) {
  channel.flush(cb);
}

function runGetContextEffect(env, prop, cb, _ref16) {
  var task = _ref16.task;
  cb(task.context[prop]);
}

function runSetContextEffect(env, props, cb, _ref17) {
  var task = _ref17.task;
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(task.context, props);
  cb();
}

var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["T"]] = runTakeEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["P"]] = runPutEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["A"]] = runAllEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["R"]] = runRaceEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["C"]] = runCallEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["a"]] = runCPSEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["F"]] = runForkEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["J"]] = runJoinEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["b"]] = runCancelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["S"]] = runSelectEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["d"]] = runChannelEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["f"]] = runCancelledEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["g"]] = runFlushEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["G"]] = runGetContextEffect, _effectRunnerMap[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["h"]] = runSetContextEffect, _effectRunnerMap);

/**
 Used to track a parent task and its forks
 In the fork model, forked tasks are attached by default to their parent
 We model this using the concept of Parent task && main Task
 main task is the main flow of the current Generator, the parent tasks is the
 aggregation of the main tasks + all its forked tasks.
 Thus the whole model represents an execution tree with multiple branches (vs the
 linear execution tree in sequential (non parallel) programming)

 A parent tasks has the following semantics
 - It completes if all its forks either complete or all cancelled
 - If it's cancelled, all forks are cancelled as well
 - It aborts if any uncaught error bubbles up from forks
 - If it completes, the return value is the one returned by the main task
 **/

function forkQueue(mainTask, onAbort, cont) {
  var tasks = [];
  var result;
  var completed = false;
  addTask(mainTask);

  var getTasks = function getTasks() {
    return tasks;
  };

  function abort(err) {
    onAbort();
    cancelAll();
    cont(err, true);
  }

  function addTask(task) {
    tasks.push(task);

    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(tasks, task);
      task.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];

      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }

        if (!tasks.length) {
          completed = true;
          cont(result);
        }
      }
    };
  }

  function cancelAll() {
    if (completed) {
      return;
    }

    completed = true;
    tasks.forEach(function (t) {
      t.cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: getTasks
  };
}

// there can be only a single saga error created at any given moment

function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}

function effectLocationAsString(effect) {
  var location = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["v"])(effect);

  if (location) {
    var code = location.code,
        fileName = location.fileName,
        lineNumber = location.lineNumber;
    var source = code + "  " + formatLocation(fileName, lineNumber);
    return source;
  }

  return '';
}

function sagaLocationAsString(sagaMeta) {
  var name = sagaMeta.name,
      location = sagaMeta.location;

  if (location) {
    return name + "  " + formatLocation(location.fileName, location.lineNumber);
  }

  return name;
}

function cancelledTasksAsString(sagaStack) {
  var cancelledTasks = Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["u"])(function (i) {
    return i.cancelledTasks;
  }, sagaStack);

  if (!cancelledTasks.length) {
    return '';
  }

  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
}

var crashedEffect = null;
var sagaStack = [];
var addSagaFrame = function addSagaFrame(frame) {
  frame.crashedEffect = crashedEffect;
  sagaStack.push(frame);
};
var clear = function clear() {
  crashedEffect = null;
  sagaStack.length = 0;
}; // this sets crashed effect for the soon-to-be-reported saga frame
// this slightly streatches the singleton nature of this module into wrong direction
// as it's even less obvious what's the data flow here, but it is what it is for now

var setCrashedEffect = function setCrashedEffect(effect) {
  crashedEffect = effect;
};
/**
  @returns {string}

  @example
  The above error occurred in task errorInPutSaga {pathToFile}
  when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
      created by fetchSaga {pathToFile}
      created by rootSaga {pathToFile}
*/

var toString = function toString() {
  var firstSaga = sagaStack[0],
      otherSagas = sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
  return [errorMessage].concat(otherSagas.map(function (s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(sagaStack)]).join('\n');
};

function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
  var _task;

  if (cont === void 0) {
    cont = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  }

  var status = RUNNING;
  var taskResult;
  var taskError;
  var deferredEnd = null;
  var cancelledDueToErrorTasks = [];
  var context = Object.create(parentContext);
  var queue = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue.getTasks().map(function (t) {
      return t.meta.name;
    }));
  }, end);
  /**
   This may be called by a parent generator to trigger/propagate cancellation
   cancel all pending tasks (including the main task), then end the current task.
    Cancellation propagates down to the whole execution tree held by this Parent task
   It's also propagated to all joiners of this task and their execution tree/joiners
    Cancellation is noop for terminated/Cancelled tasks tasks
   **/

  function cancel() {
    if (status === RUNNING) {
      // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
      // effects in the iterator's finally block will still be executed
      status = CANCELLED;
      queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

      end(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"], false);
    }
  }

  function end(result, isErr) {
    if (!isErr) {
      // The status here may be RUNNING or CANCELLED
      // If the status is CANCELLED, then we do not need to change it here
      if (result === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) {
        status = CANCELLED;
      } else if (status !== CANCELLED) {
        status = DONE;
      }

      taskResult = result;
      deferredEnd && deferredEnd.resolve(result);
    } else {
      status = ABORTED;
      addSagaFrame({
        meta: meta,
        cancelledTasks: cancelledDueToErrorTasks
      });

      if (task.isRoot) {
        var sagaStack = toString(); // we've dumped the saga stack to string and are passing it to user's code
        // we know that it won't be needed anymore and we need to clear it

        clear();
        env.onError(result, {
          sagaStack: sagaStack
        });
      }

      taskError = result;
      deferredEnd && deferredEnd.reject(result);
    }

    task.cont(result, isErr);
    task.joiners.forEach(function (joiner) {
      joiner.cb(result, isErr);
    });
    task.joiners = null;
  }

  function setContext(props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('task', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  }

  function toPromise() {
    if (deferredEnd) {
      return deferredEnd.promise;
    }

    deferredEnd = Object(_redux_saga_deferred__WEBPACK_IMPORTED_MODULE_6__["default"])();

    if (status === ABORTED) {
      deferredEnd.reject(taskError);
    } else if (status !== RUNNING) {
      deferredEnd.resolve(taskResult);
    }

    return deferredEnd.promise;
  }

  var task = (_task = {}, _task[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
    return status === RUNNING;
  }, _task.isCancelled = function isCancelled() {
    return status === CANCELLED || status === RUNNING && mainTask.status === CANCELLED;
  }, _task.isAborted = function isAborted() {
    return status === ABORTED;
  }, _task.result = function result() {
    return taskResult;
  }, _task.error = function error() {
    return taskError;
  }, _task);
  return task;
}

function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
  if ( true && iterator$1[_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["x"]]) {
    throw new Error("redux-saga doesn't support async generators, please use only regular ones");
  }

  var finalRunEffect = env.finalizeRunEffect(runEffect);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/

  next.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
  /** Creates a main task to track the main flow */

  var mainTask = {
    meta: meta,
    cancel: cancelMain,
    status: RUNNING
  };
  /**
   Creates a new task descriptor for this generator.
   A task is the aggregation of it's mainTask and all it's forked tasks.
   **/

  var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
  var executingContext = {
    task: task,
    digestEffect: digestEffect
  };
  /**
    cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
  **/

  function cancelMain() {
    if (mainTask.status === RUNNING) {
      mainTask.status = CANCELLED;
      next(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/


  if (cont) {
    cont.cancel = task.cancel;
  } // kicks up the generator


  next(); // then return the task descriptor to the caller

  return task;
  /**
   * This is the generator driver
   * It's a recursive async/continuation function which calls itself
   * until the generator terminates or throws
   * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
   * @param {boolean} isErr - the flag shows if effect finished with an error
   *
   * receives either (command | effect result, false) or (any thrown thing, true)
   */

  function next(arg, isErr) {
    try {
      var result;

      if (isErr) {
        result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

        clear();
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["y"])(arg)) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.status = CANCELLED;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/

        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/

        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return(_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]) : {
          done: true,
          value: _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"]
        };
      } else if (Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["z"])(arg)) {
        // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"])(iterator$1.return) ? iterator$1.return() : {
          done: true
        };
      } else {
        result = iterator$1.next(arg);
      }

      if (!result.done) {
        digestEffect(result.value, parentEffectId, next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        if (mainTask.status !== CANCELLED) {
          mainTask.status = DONE;
        }

        mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.status === CANCELLED) {
        throw error;
      }

      mainTask.status = ABORTED;
      mainTask.cont(error, true);
    }
  }

  function runEffect(effect, effectId, currCb) {
    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      of completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["promise"])(effect)) {
      resolvePromise(effect, currCb);
    } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"])(effect)) {
      // resolve iterator
      proc(env, effect, task.context, effectId, meta,
      /* isRoot */
      false, currCb);
    } else if (effect && effect[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]]) {
      var effectRunner = effectRunnerMap[effect.type];
      effectRunner(env, effect.payload, currCb, executingContext);
    } else {
      // anything else returned as is
      currCb(effect);
    }
  }

  function digestEffect(effect, parentEffectId, cb, label) {
    if (label === void 0) {
      label = '';
    }

    var effectId = nextSagaId();
    env.sagaMonitor && env.sagaMonitor.effectTriggered({
      effectId: effectId,
      parentEffectId: parentEffectId,
      label: label,
      effect: effect
    });
    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/

    var effectSettled; // Completion callback passed to the appropriate effect runner

    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res);
        } else {
          env.sagaMonitor.effectResolved(effectId, res);
        }
      }

      if (isErr) {
        setCrashedEffect(effect);
      }

      cb(res, isErr);
    } // tracks down the current cancel


    currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // setup cancellation logic on the parent cb

    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      currCb.cancel(); // propagates cancel downward

      currCb.cancel = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"]; // defensive measure

      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
    };

    finalRunEffect(effect, effectId, currCb);
  }
}

var RUN_SAGA_SIGNATURE = 'runSaga(options, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
function runSaga(_ref, saga) {
  var _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      sagaMonitor = _ref.sagaMonitor,
      effectMiddlewares = _ref.effectMiddlewares,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["B"] : _ref$onError;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(saga, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], NON_GENERATOR_ERR);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator$1 = saga.apply(void 0, args);

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(iterator$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["iterator"], NON_GENERATOR_ERR);
  }

  var effectId = nextSagaId();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["t"];
    sagaMonitor.rootSagaStarted({
      effectId: effectId,
      saga: saga,
      args: args
    });
  }

  if (true) {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(dispatch)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(dispatch, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'dispatch must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(getState)) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(getState, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'getState must be a function');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["notUndef"])(effectMiddlewares)) {
      var MIDDLEWARE_TYPE_ERROR = 'effectMiddlewares must be an array of functions';
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddlewares, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["array"], MIDDLEWARE_TYPE_ERROR);
      effectMiddlewares.forEach(function (effectMiddleware) {
        return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(effectMiddleware, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], MIDDLEWARE_TYPE_ERROR);
      });
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(onError, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["func"], 'onError passed to the redux-saga is not a function!');
  }

  var finalizeRunEffect;

  if (effectMiddlewares) {
    var middleware = redux__WEBPACK_IMPORTED_MODULE_5__["compose"].apply(void 0, effectMiddlewares);

    finalizeRunEffect = function finalizeRunEffect(runEffect) {
      return function (effect, effectId, currCb) {
        var plainRunEffect = function plainRunEffect(eff) {
          return runEffect(eff, effectId, currCb);
        };

        return middleware(plainRunEffect)(effect);
      };
    };
  } else {
    finalizeRunEffect = _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["E"];
  }

  var env = {
    channel: channel,
    dispatch: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["D"])(dispatch),
    getState: getState,
    sagaMonitor: sagaMonitor,
    onError: onError,
    finalizeRunEffect: finalizeRunEffect
  };
  return immediately(function () {
    var task = proc(env, iterator$1, context, effectId, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["j"])(saga),
    /* isRoot */
    true, undefined);

    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task);
    }

    return task;
  });
}

function sagaMiddlewareFactory(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      sagaMonitor = _ref.sagaMonitor,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["context", "channel", "sagaMonitor"]);

  var boundRunSaga;

  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(channel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["channel"], 'options.channel passed to the Saga middleware is not a channel');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
    boundRunSaga = runSaga.bind(null, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options, {
      context: context,
      channel: channel,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor
    }));
    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }

        var result = next(action); // hit reducers

        channel.put(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    if ( true && !boundRunSaga) {
      throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
    }

    return boundRunSaga.apply(void 0, arguments);
  };

  sagaMiddleware.setContext = function (props) {
    if (true) {
      Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_3__["object"], Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["w"])('sagaMiddleware', props));
    }

    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_4__["p"])(context, props);
  };

  return sagaMiddleware;
}

/* harmony default export */ __webpack_exports__["default"] = (sagaMiddlewareFactory);



/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js ***!
  \**********************************************************************/
/*! exports provided: actionChannel, all, apply, call, cancel, cancelled, cps, delay, effectTypes, flush, fork, getContext, join, put, putResolve, race, select, setContext, spawn, take, takeMaybe, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return takeLeading$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle$1; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./io-6de156f3.js */ "./node_modules/@redux-saga/core/dist/io-6de156f3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["a1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["X"]; });

/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");







var done = function done(value) {
  return {
    done: true,
    value: value
  };
};

var qEnd = {};
function safeName(patternOrChannel) {
  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return 'channel';
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["stringableFunc"])(patternOrChannel)) {
    return String(patternOrChannel);
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(patternOrChannel)) {
    return patternOrChannel.name;
  }

  return String(patternOrChannel);
}
function fsmIterator(fsm, startState, name) {
  var stateUpdater,
      errorState,
      effect,
      nextState = startState;

  function next(arg, error) {
    if (nextState === qEnd) {
      return done(arg);
    }

    if (error && !errorState) {
      nextState = qEnd;
      throw error;
    } else {
      stateUpdater && stateUpdater(arg);
      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
      nextState = currentState.nextState;
      effect = currentState.effect;
      stateUpdater = currentState.stateUpdater;
      errorState = currentState.errorState;
      return nextState === qEnd ? done(arg) : effect;
    }
  }

  return Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["q"])(next, function (error) {
    return next(null, error);
  }, name);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yFork(action)
      };
    }
  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["M"])(task)
    };
  };

  var task, action;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return task ? {
        nextState: 'q3',
        effect: yCancel(task)
      } : {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    },
    q3: function q3() {
      return {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    }
  }, 'q1', "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLeading(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };

  var yCall = function yCall(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action;

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yCall(action)
      };
    }
  }, 'q1', "takeLeading(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, channel;
  var yActionChannel = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["O"])(pattern, Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yActionChannel,
        stateUpdater: setChannel
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yTake(),
        stateUpdater: setAction
      };
    },
    q3: function q3() {
      return {
        nextState: 'q4',
        effect: yFork(action)
      };
    },
    q4: function q4() {
      return {
        nextState: 'q2',
        effect: yDelay
      };
    }
  }, 'q1', "throttle(" + safeName(pattern) + ", " + worker.name + ")");
}

function retry(maxTries, delayLength, fn) {
  var counter = maxTries;

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var yCall = {
    done: false,
    value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [fn].concat(args))
  };
  var yDelay = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yCall,
        errorState: 'q10'
      };
    },
    q2: function q2() {
      return {
        nextState: qEnd
      };
    },
    q10: function q10(error) {
      counter -= 1;

      if (counter <= 0) {
        throw error;
      }

      return {
        nextState: 'q1',
        effect: yDelay
      };
    }
  }, 'q1', "retry(" + fn.name + ")");
}

function debounceHelper(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, raceOutput;
  var yTake = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel)
  };
  var yRace = {
    done: false,
    value: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["V"])({
      action: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["K"])(patternOrChannel),
      debounce: Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["U"])(delayLength)
    })
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yNoop = function yNoop(value) {
    return {
      done: false,
      value: value
    };
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setRaceOutput = function setRaceOutput(ro) {
    return raceOutput = ro;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yRace,
        stateUpdater: setRaceOutput
      };
    },
    q3: function q3() {
      return raceOutput.debounce ? {
        nextState: 'q1',
        effect: yFork(action)
      } : {
        nextState: 'q2',
        effect: yNoop(raceOutput.action),
        stateUpdater: setAction
      };
    }
  }, 'q1', "debounce(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

var validateTakeEffect = function validateTakeEffect(fn, patternOrChannel, worker) {
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(patternOrChannel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a pattern or channel");
  Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a saga parameter");
};

function takeEvery$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeEvery$1, patternOrChannel, worker);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeEvery, patternOrChannel, worker].concat(args));
}
function takeLatest$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLatest$1, patternOrChannel, worker);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLatest, patternOrChannel, worker].concat(args));
}
function takeLeading$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLeading$1, patternOrChannel, worker);
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [takeLeading, patternOrChannel, worker].concat(args));
}
function throttle$1(ms, pattern, worker) {
  if (true) {
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(pattern, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a pattern');
    Object(_io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a saga parameter');
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [throttle, ms, pattern, worker].concat(args));
}
function retry$1(maxTries, delayLength, worker) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [retry, maxTries, delayLength, worker].concat(args));
}
function debounce(delayLength, pattern, worker) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  return _io_6de156f3_js__WEBPACK_IMPORTED_MODULE_3__["L"].apply(void 0, [debounceHelper, delayLength, pattern, worker].concat(args));
}




/***/ }),

/***/ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js ***!
  \***************************************************************************/
/*! exports provided: default, arrayOfDeferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfDeferred", function() { return arrayOfDeferred; });
function deferred() {
  var def = {};
  def.promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
function arrayOfDeferred(length) {
  var arr = [];

  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }

  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (deferred);



/***/ }),

/***/ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }

  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, ms, val);
  });

  promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]] = function () {
    clearTimeout(timeoutId);
  };

  return promise;
}

/* harmony default export */ __webpack_exports__["default"] = (delayP);


/***/ }),

/***/ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js ***!
  \***************************************************************/
/*! exports provided: array, buffer, channel, effect, func, iterable, iterator, multicast, notUndef, number, object, observable, pattern, promise, sagaAction, string, stringableFunc, symbol, task, undef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "func", function() { return func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterable", function() { return iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notUndef", function() { return notUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaAction", function() { return sagaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringableFunc", function() { return stringableFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "task", function() { return task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undef", function() { return undef; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var number = function number(n) {
  return typeof n === 'number';
};
var string = function string(s) {
  return typeof s === 'string';
};
var array = Array.isArray;
var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};
var promise = function promise(p) {
  return p && func(p.then);
};
var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};
var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};
var task = function task(t) {
  return t && t[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]];
};
var sagaAction = function sagaAction(a) {
  return Boolean(a && a[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]);
};
var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};
var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern));
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};
var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast(ch) {
  return channel(ch) && ch[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]];
};
var effect = function effect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]];
};




/***/ }),

/***/ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js ***!
  \*************************************************************************/
/*! exports provided: CANCEL, CHANNEL_END_TYPE, IO, MATCH, MULTICAST, SAGA_ACTION, SAGA_LOCATION, SELF_CANCELLATION, TASK, TASK_CANCEL, TERMINATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_END_TYPE", function() { return CHANNEL_END_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTICAST", function() { return MULTICAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return SAGA_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_CANCEL", function() { return TASK_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMINATE", function() { return TERMINATE; });
var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};

var CANCEL =
/*#__PURE__*/
createSymbol('CANCEL_PROMISE');
var CHANNEL_END_TYPE =
/*#__PURE__*/
createSymbol('CHANNEL_END');
var IO =
/*#__PURE__*/
createSymbol('IO');
var MATCH =
/*#__PURE__*/
createSymbol('MATCH');
var MULTICAST =
/*#__PURE__*/
createSymbol('MULTICAST');
var SAGA_ACTION =
/*#__PURE__*/
createSymbol('SAGA_ACTION');
var SELF_CANCELLATION =
/*#__PURE__*/
createSymbol('SELF_CANCELLATION');
var TASK =
/*#__PURE__*/
createSymbol('TASK');
var TASK_CANCEL =
/*#__PURE__*/
createSymbol('TASK_CANCEL');
var TERMINATE =
/*#__PURE__*/
createSymbol('TERMINATE');
var SAGA_LOCATION =
/*#__PURE__*/
createSymbol('LOCATION');




/***/ }),

/***/ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js ***!
  \*****************************************************************/
/*! exports provided: createNextState, current, freeze, isDraft, original, __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore, createSelector, MiddlewareArray, configureStore, createAction, createAsyncThunk, createDraftSafeSelector, createEntityAdapter, createImmutableStateInvariantMiddleware, createReducer, createSerializableStateInvariantMiddleware, createSlice, findNonSerializableValue, getDefaultMiddleware, getType, isAllOf, isAnyOf, isAsyncThunkAction, isFulfilled, isImmutableDefault, isPending, isPlain, isPlainObject, isRejected, isRejectedWithValue, nanoid, unwrapResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlewareArray", function() { return MiddlewareArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncThunk", function() { return createAsyncThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraftSafeSelector", function() { return createDraftSafeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImmutableStateInvariantMiddleware", function() { return createImmutableStateInvariantMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSerializableStateInvariantMiddleware", function() { return createSerializableStateInvariantMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSlice", function() { return createSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNonSerializableValue", function() { return findNonSerializableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultMiddleware", function() { return getDefaultMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllOf", function() { return isAllOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyOf", function() { return isAnyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncThunkAction", function() { return isAsyncThunkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFulfilled", function() { return isFulfilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutableDefault", function() { return isImmutableDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPending", function() { return isPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlain", function() { return isPlain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRejected", function() { return isRejected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRejectedWithValue", function() { return isRejectedWithValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapResult", function() { return unwrapResult; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNextState", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "current", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["current"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["freeze"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "original", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["original"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["__DO_NOT_USE__ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["createStore"]; });

/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"]; });

/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");








/**
 * "Draft-Safe" version of `reselect`'s `createSelector`:
 * If an `immer`-drafted object is passed into the resulting selector's first argument,
 * the selector will act on the current draft value, instead of returning a cached value
 * that might be possibly outdated if the draft has been modified since.
 * @public
 */

var createDraftSafeSelector = function createDraftSafeSelector() {
  var selector = reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"].apply(void 0, arguments);

  var wrappedSelector = function wrappedSelector(value) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return selector.apply(void 0, [Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(value) ? Object(immer__WEBPACK_IMPORTED_MODULE_0__["current"])(value) : value].concat(rest));
  };

  return wrappedSelector;
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/**
 * @public
 */

var composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
  if (arguments.length === 0) return undefined;
  if (typeof arguments[0] === 'object') return redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
  return redux__WEBPACK_IMPORTED_MODULE_1__["compose"].apply(null, arguments);
};

/**
 * Returns true if the passed value is "plain" object, i.e. an object whose
 * prototype is the root `Object.prototype`. This includes objects created
 * using object literals, but not for instance for class instances.
 *
 * @param {any} value The value to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 *
 * @public
 */
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

function getTimeMeasureUtils(maxDelay, fnName) {
  var elapsed = 0;
  return {
    measureTime: function measureTime(fn) {
      var started = Date.now();

      try {
        return fn();
      } finally {
        var finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded: function warnIfExceeded() {
      if (elapsed > maxDelay) {
        console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
      }
    }
  };
}
/**
 * @public
 */

var MiddlewareArray =
/*#__PURE__*/
function (_Array) {
  _inheritsLoose(MiddlewareArray, _Array);

  function MiddlewareArray() {
    return _Array.apply(this, arguments) || this;
  }

  var _proto = MiddlewareArray.prototype;

  _proto.concat = function concat() {
    var _Array$prototype$conc;

    for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    return _construct(MiddlewareArray, (_Array$prototype$conc = _Array.prototype.concat).call.apply(_Array$prototype$conc, [this].concat(arr)));
  };

  _proto.prepend = function prepend() {
    for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (arr.length === 1 && Array.isArray(arr[0])) {
      return _construct(MiddlewareArray, arr[0].concat(this));
    }

    return _construct(MiddlewareArray, arr.concat(this));
  };

  return MiddlewareArray;
}(
/*#__PURE__*/
_wrapNativeSuper(Array));

var isProduction = "development" === 'production';
var prefix = 'Invariant failed'; // Throw an error if the condition fails
// Strip out error messages for production
// > Not providing an inline default argument for message as the result is smaller

function invariant(condition, message) {
  if (condition) {
    return;
  } // Condition not passed
  // In production we strip the message but still throw


  if (isProduction) {
    throw new Error(prefix);
  } // When not in production we allow the message to pass through
  // *This block will be removed in production builds*


  throw new Error(prefix + ": " + (message || ''));
}

function stringify(obj, serializer, indent, decycler) {
  return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}

function getSerialize(serializer, decycler) {
  var stack = [],
      keys = [];
  if (!decycler) decycler = function decycler(_, value) {
    if (stack[0] === value) return '[Circular ~]';
    return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
  };
  return function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = decycler.call(this, key, value);
    } else stack.push(value);

    return serializer == null ? value : serializer.call(this, key, value);
  };
}
/**
 * The default `isImmutable` function.
 *
 * @public
 */


function isImmutableDefault(value) {
  return typeof value !== 'object' || value === null || typeof value === 'undefined' || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
  var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations: function detectMutations() {
      return _detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}

function trackProperties(isImmutable, ignorePaths, obj, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (path === void 0) {
    path = '';
  }

  var tracked = {
    value: obj
  };

  if (!isImmutable(obj)) {
    tracked.children = {};

    for (var key in obj) {
      var childPath = path ? path + '.' + key : key;

      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }

      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }

  return tracked;
}

function _detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (sameParentRef === void 0) {
    sameParentRef = false;
  }

  if (path === void 0) {
    path = '';
  }

  var prevObj = trackedProperty ? trackedProperty.value : undefined;
  var sameRef = prevObj === obj;

  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return {
      wasMutated: true,
      path: path
    };
  }

  if (isImmutable(prevObj) || isImmutable(obj)) {
    return {
      wasMutated: false
    };
  } // Gather all keys from prev (tracked) and after objs


  var keysToDetect = {};

  for (var key in trackedProperty.children) {
    keysToDetect[key] = true;
  }

  for (var _key in obj) {
    keysToDetect[_key] = true;
  }

  for (var _key2 in keysToDetect) {
    var childPath = path ? path + '.' + _key2 : _key2;

    if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
      continue;
    }

    var result = _detectMutations(isImmutable, ignorePaths, trackedProperty.children[_key2], obj[_key2], sameRef, childPath);

    if (result.wasMutated) {
      return result;
    }
  }

  return {
    wasMutated: false
  };
}
/**
 * Creates a middleware that checks whether any state was mutated in between
 * dispatches or during a dispatch. If any mutations are detected, an error is
 * thrown.
 *
 * @param options Middleware options.
 *
 * @public
 */


function createImmutableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if (false) {}

  var _options = options,
      _options$isImmutable = _options.isImmutable,
      isImmutable = _options$isImmutable === void 0 ? isImmutableDefault : _options$isImmutable,
      ignoredPaths = _options.ignoredPaths,
      _options$warnAfter = _options.warnAfter,
      warnAfter = _options$warnAfter === void 0 ? 32 : _options$warnAfter,
      ignore = _options.ignore; // Alias ignore->ignoredPaths, but prefer ignoredPaths if present

  ignoredPaths = ignoredPaths || ignore;
  var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
  return function (_ref) {
    var getState = _ref.getState;
    var state = getState();
    var tracker = track(state);
    var result;
    return function (next) {
      return function (action) {
        var measureUtils = getTimeMeasureUtils(warnAfter, 'ImmutableStateInvariantMiddleware');
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations(); // Track before potentially not meeting the invariant

          tracker = track(state);
          !!result.wasMutated ?  true ? invariant(false, "A state mutation was detected between dispatches, in the path '" + (result.path || '') + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)") : undefined : void 0;
        });
        var dispatchedAction = next(action);
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations(); // Track before potentially not meeting the invariant

          tracker = track(state);
          result.wasMutated && (!!result.wasMutated ?  true ? invariant(false, "A state mutation was detected inside a dispatch, in the path: " + (result.path || '') + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)") : undefined : void 0);
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  };
}

/**
 * Returns true if the passed value is "plain", i.e. a value that is either
 * directly JSON-serializable (boolean, number, string, array, plain object)
 * or `undefined`.
 *
 * @param val The value to check.
 *
 * @public
 */

function isPlain(val) {
  var type = typeof val;
  return type === 'undefined' || val === null || type === 'string' || type === 'boolean' || type === 'number' || Array.isArray(val) || isPlainObject(val);
}
/**
 * @public
 */

function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
  if (path === void 0) {
    path = '';
  }

  if (isSerializable === void 0) {
    isSerializable = isPlain;
  }

  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }

  var foundNestedSerializable;

  if (!isSerializable(value)) {
    return {
      keyPath: path || '<root>',
      value: value
    };
  }

  if (typeof value !== 'object' || value === null) {
    return false;
  }

  var entries = getEntries != null ? getEntries(value) : Object.entries(value);
  var hasIgnoredPaths = ignoredPaths.length > 0;

  for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _ref2 = _ref,
        key = _ref2[0],
        nestedValue = _ref2[1];
    var nestedPath = path ? path + '.' + key : key; // path.concat(property)

    if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
      continue;
    }

    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath,
        value: nestedValue
      };
    }

    if (typeof nestedValue === 'object') {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);

      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }

  return false;
}
/**
 * Creates a middleware that, after every state change, checks if the new
 * state is serializable. If a non-serializable value is found within the
 * state, an error is printed to the console.
 *
 * @param options Middleware options.
 *
 * @public
 */

function createSerializableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if (false) {}

  var _options = options,
      _options$isSerializab = _options.isSerializable,
      isSerializable = _options$isSerializab === void 0 ? isPlain : _options$isSerializab,
      getEntries = _options.getEntries,
      _options$ignoredActio = _options.ignoredActions,
      ignoredActions = _options$ignoredActio === void 0 ? [] : _options$ignoredActio,
      _options$ignoredActio2 = _options.ignoredActionPaths,
      ignoredActionPaths = _options$ignoredActio2 === void 0 ? ['meta.arg'] : _options$ignoredActio2,
      _options$ignoredPaths = _options.ignoredPaths,
      ignoredPaths = _options$ignoredPaths === void 0 ? [] : _options$ignoredPaths,
      _options$warnAfter = _options.warnAfter,
      warnAfter = _options$warnAfter === void 0 ? 32 : _options$warnAfter,
      _options$ignoreState = _options.ignoreState,
      ignoreState = _options$ignoreState === void 0 ? false : _options$ignoreState;
  return function (storeAPI) {
    return function (next) {
      return function (action) {
        if (ignoredActions.length && ignoredActions.indexOf(action.type) !== -1) {
          return next(action);
        }

        var measureUtils = getTimeMeasureUtils(warnAfter, 'SerializableStateInvariantMiddleware');
        measureUtils.measureTime(function () {
          var foundActionNonSerializableValue = findNonSerializableValue(action, '', isSerializable, getEntries, ignoredActionPaths);

          if (foundActionNonSerializableValue) {
            var keyPath = foundActionNonSerializableValue.keyPath,
                value = foundActionNonSerializableValue.value;
            console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, '\nTake a look at the logic that dispatched this action: ', action, '\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)', '\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)');
          }
        });
        var result = next(action);

        if (!ignoreState) {
          measureUtils.measureTime(function () {
            var state = storeAPI.getState();
            var foundStateNonSerializableValue = findNonSerializableValue(state, '', isSerializable, getEntries, ignoredPaths);

            if (foundStateNonSerializableValue) {
              var keyPath = foundStateNonSerializableValue.keyPath,
                  value = foundStateNonSerializableValue.value;
              console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
            }
          });
          measureUtils.warnIfExceeded();
        }

        return result;
      };
    };
  };
}

function isBoolean(x) {
  return typeof x === 'boolean';
}

function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
/**
 * Returns any array containing the default middleware installed by
 * `configureStore()`. Useful if you want to configure your store with a custom
 * `middleware` array but still keep the default set.
 *
 * @return The default middleware used by `configureStore()`.
 *
 * @public
 */

function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$thunk = _options.thunk,
      thunk = _options$thunk === void 0 ? true : _options$thunk,
      _options$immutableChe = _options.immutableCheck,
      immutableCheck = _options$immutableChe === void 0 ? true : _options$immutableChe,
      _options$serializable = _options.serializableCheck,
      serializableCheck = _options$serializable === void 0 ? true : _options$serializable;
  var middlewareArray = new MiddlewareArray();

  if (thunk) {
    if (isBoolean(thunk)) {
      middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]);
    } else {
      middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"].withExtraArgument(thunk.extraArgument));
    }
  }

  if (true) {
    if (immutableCheck) {
      /* PROD_START_REMOVE_UMD */
      var immutableOptions = {};

      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }

      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
      /* PROD_STOP_REMOVE_UMD */
    }

    if (serializableCheck) {
      var serializableOptions = {};

      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }

      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
  }

  return middlewareArray;
}

var IS_PRODUCTION = "development" === 'production';
/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param config The store configuration.
 * @returns A configured Redux store.
 *
 * @public
 */

function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

  var _ref = options || {},
      _ref$reducer = _ref.reducer,
      reducer = _ref$reducer === void 0 ? undefined : _ref$reducer,
      _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === void 0 ? curriedGetDefaultMiddleware() : _ref$middleware,
      _ref$devTools = _ref.devTools,
      devTools = _ref$devTools === void 0 ? true : _ref$devTools,
      _ref$preloadedState = _ref.preloadedState,
      preloadedState = _ref$preloadedState === void 0 ? undefined : _ref$preloadedState,
      _ref$enhancers = _ref.enhancers,
      enhancers = _ref$enhancers === void 0 ? undefined : _ref$enhancers;

  var rootReducer;

  if (typeof reducer === 'function') {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }

  var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, typeof middleware === 'function' ? middleware(curriedGetDefaultMiddleware) : middleware);
  var finalCompose = redux__WEBPACK_IMPORTED_MODULE_1__["compose"];

  if (devTools) {
    finalCompose = composeWithDevTools(_extends({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION
    }, typeof devTools === 'object' && devTools));
  }

  var storeEnhancers = [middlewareEnhancer];

  if (Array.isArray(enhancers)) {
    storeEnhancers = [middlewareEnhancer].concat(enhancers);
  } else if (typeof enhancers === 'function') {
    storeEnhancers = enhancers(storeEnhancers);
  }

  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, preloadedState, composedEnhancer);
}

function createAction(type, prepareAction) {
  function actionCreator() {
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, arguments);

      if (!prepared) {
        throw new Error('prepareAction did not return an object');
      }

      return _extends({
        type: type,
        payload: prepared.payload
      }, 'meta' in prepared && {
        meta: prepared.meta
      }, {}, 'error' in prepared && {
        error: prepared.error
      });
    }

    return {
      type: type,
      payload: arguments.length <= 0 ? undefined : arguments[0]
    };
  }

  actionCreator.toString = function () {
    return "" + type;
  };

  actionCreator.type = type;

  actionCreator.match = function (action) {
    return action.type === type;
  };

  return actionCreator;
}
function isFSA(action) {
  return isPlainObject(action) && typeof action.type === 'string' && Object.keys(action).every(isValidKey);
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}
/**
 * Returns the action type of the actions created by the passed
 * `createAction()`-generated action creator (arbitrary action creators
 * are not supported).
 *
 * @param action The action creator whose action type to get.
 * @returns The action type used by the action creator.
 *
 * @public
 */


function getType(actionCreator) {
  return "" + actionCreator;
}

function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function addCase(typeOrActionCreator, reducer) {
      if (true) {
        /*
         to keep the definition by the user in line with actual behavior,
         we enforce `addCase` to always be called before calling `addMatcher`
         as matching cases take precedence over matchers
         */
        if (actionMatchers.length > 0) {
          throw new Error('`builder.addCase` should only be called before calling `builder.addMatcher`');
        }

        if (defaultCaseReducer) {
          throw new Error('`builder.addCase` should only be called before calling `builder.addDefaultCase`');
        }
      }

      var type = typeof typeOrActionCreator === 'string' ? typeOrActionCreator : typeOrActionCreator.type;

      if (type in actionsMap) {
        throw new Error('addCase cannot be called with two reducers for the same action type');
      }

      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function addMatcher(matcher, reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error('`builder.addMatcher` should only be called before calling `builder.addDefaultCase`');
        }
      }

      actionMatchers.push({
        matcher: matcher,
        reducer: reducer
      });
      return builder;
    },
    addDefaultCase: function addDefaultCase(reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error('`builder.addDefaultCase` can only be called once');
        }
      }

      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}

function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }

  var _ref = typeof mapOrBuilderCallback === 'function' ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
      actionsMap = _ref[0],
      finalActionMatchers = _ref[1],
      finalDefaultCaseReducer = _ref[2];

  var frozenInitialState = Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState, function () {});
  return function (state, action) {
    if (state === void 0) {
      state = frozenInitialState;
    }

    var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
      var matcher = _ref2.matcher;
      return matcher(action);
    }).map(function (_ref3) {
      var reducer = _ref3.reducer;
      return reducer;
    }));

    if (caseReducers.filter(function (cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }

    return caseReducers.reduce(function (previousState, caseReducer) {
      if (caseReducer) {
        if (Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(previousState)) {
          // If it's already a draft, we must already be inside a `createNextState` call,
          // likely because this is being wrapped in `createReducer`, `createSlice`, or nested
          // inside an existing draft. It's safe to just pass the draft to the mutator.
          var draft = previousState; // We can assume this is already a draft

          var result = caseReducer(draft, action);

          if (typeof result === 'undefined') {
            return previousState;
          }

          return result;
        } else if (!Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraftable"])(previousState)) {
          // If state is not draftable (ex: a primitive, such as 0), we want to directly
          // return the caseReducer func and not wrap it with produce.
          var _result = caseReducer(previousState, action);

          if (typeof _result === 'undefined') {
            if (previousState === null) {
              return previousState;
            }

            throw Error('A case reducer on a non-draftable value must not return undefined');
          }

          return _result;
        } else {
          // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
          // than an Immutable<S>, and TypeScript cannot find out how to reconcile
          // these two types.
          return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(previousState, function (draft) {
            return caseReducer(draft, action);
          });
        }
      }

      return previousState;
    }, state);
  };
}

function getType$1(slice, actionKey) {
  return slice + "/" + actionKey;
}
/**
 * A function that accepts an initial state, an object full of reducer
 * functions, and a "slice name", and automatically generates
 * action creators and action types that correspond to the
 * reducers and state.
 *
 * The `reducer` argument is passed to `createReducer()`.
 *
 * @public
 */


function createSlice(options) {
  var name = options.name,
      initialState = options.initialState;

  if (!name) {
    throw new Error('`name` is a required option for createSlice');
  }

  var reducers = options.reducers || {};

  var _ref = typeof options.extraReducers === 'undefined' ? [] : typeof options.extraReducers === 'function' ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
      _ref$ = _ref[0],
      extraReducers = _ref$ === void 0 ? {} : _ref$,
      _ref$2 = _ref[1],
      actionMatchers = _ref$2 === void 0 ? [] : _ref$2,
      _ref$3 = _ref[2],
      defaultCaseReducer = _ref$3 === void 0 ? undefined : _ref$3;

  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function (reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType$1(name, reducerName);
    var caseReducer;
    var prepareCallback;

    if ('reducer' in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }

    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });

  var finalCaseReducers = _extends({}, extraReducers, {}, sliceCaseReducersByType);

  var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
  return {
    name: name,
    reducer: reducer,
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName
  };
}

function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}
function createInitialStateFactory() {
  function getInitialState(additionalState) {
    if (additionalState === void 0) {
      additionalState = {};
    }

    return Object.assign(getInitialEntityState(), additionalState);
  }

  return {
    getInitialState: getInitialState
  };
}

function createSelectorsFactory() {
  function getSelectors(selectState) {
    var selectIds = function selectIds(state) {
      return state.ids;
    };

    var selectEntities = function selectEntities(state) {
      return state.entities;
    };

    var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) {
      return ids.map(function (id) {
        return entities[id];
      });
    });

    var selectId = function selectId(_, id) {
      return id;
    };

    var selectById = function selectById(entities, id) {
      return entities[id];
    };

    var selectTotal = createDraftSafeSelector(selectIds, function (ids) {
      return ids.length;
    });

    if (!selectState) {
      return {
        selectIds: selectIds,
        selectEntities: selectEntities,
        selectAll: selectAll,
        selectTotal: selectTotal,
        selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
      };
    }

    var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
    return {
      selectIds: createDraftSafeSelector(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: createDraftSafeSelector(selectState, selectAll),
      selectTotal: createDraftSafeSelector(selectState, selectTotal),
      selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
    };
  }

  return {
    getSelectors: getSelectors
  };
}

function createSingleArgumentStateOperator(mutator) {
  var operator = createStateOperator(function (_, state) {
    return mutator(state);
  });
  return function operation(state) {
    return operator(state, undefined);
  };
}
function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg) {
      return isFSA(arg);
    }

    var runMutator = function runMutator(draft) {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };

    if (Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(state)) {
      // we must already be inside a `createNextState` call, likely because
      // this is being wrapped in `createReducer` or `createSlice`.
      // It's safe to just pass the draft to the mutator.
      runMutator(state); // since it's a draft, we'll just return it

      return state;
    } else {
      // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
      // than an Immutable<S>, and TypeScript cannot find out how to reconcile
      // these two types.
      return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, runMutator);
    }
  };
}

function selectIdValue(entity, selectId) {
  var key = selectId(entity);

  if ( true && key === undefined) {
    console.warn('The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
  }

  return key;
}

function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);

    if (key in state.entities) {
      return;
    }

    state.ids.push(key);
    state.entities[key] = entity;
  }

  function addManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    for (var _iterator = entities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entity = _ref;
      addOneMutably(entity, state);
    }
  }

  function setAllMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    state.ids = [];
    state.entities = {};
    addManyMutably(entities, state);
  }

  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }

  function removeManyMutably(keys, state) {
    var didMutate = false;
    keys.forEach(function (key) {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });

    if (didMutate) {
      state.ids = state.ids.filter(function (id) {
        return id in state.entities;
      });
    }
  }

  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }

  function takeNewKey(keys, update, state) {
    var original = state.entities[update.id];
    var updated = Object.assign({}, original, update.changes);
    var newKey = selectIdValue(updated, selectId);
    var hasNewKey = newKey !== update.id;

    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }

    state.entities[newKey] = updated;
    return hasNewKey;
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function updateManyMutably(updates, state) {
    var newKeys = {};
    var updatesPerEntity = {};
    updates.forEach(function (update) {
      // Only apply updates to entities that currently exist
      if (update.id in state.entities) {
        // If there are multiple updates to one entity, merge them together
        updatesPerEntity[update.id] = {
          id: update.id,
          // Spreads ignore falsy values, so this works even if there isn't
          // an existing update already at this key
          changes: _extends({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null, {}, update.changes)
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    var didMutateEntities = updates.length > 0;

    if (didMutateEntities) {
      var didMutateIds = updates.filter(function (update) {
        return takeNewKey(newKeys, update, state);
      }).length > 0;

      if (didMutateIds) {
        state.ids = state.ids.map(function (id) {
          return newKeys[id] || id;
        });
      }
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    var added = [];
    var updated = [];

    for (var _iterator2 = entities, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var entity = _ref2;
      var id = selectIdValue(entity, selectId);

      if (id in state.entities) {
        updated.push({
          id: id,
          changes: entity
        });
      } else {
        added.push(entity);
      }
    }

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
}

function createSortedStateAdapter(selectId, sort) {
  var _createUnsortedStateA = createUnsortedStateAdapter(selectId),
      removeOne = _createUnsortedStateA.removeOne,
      removeMany = _createUnsortedStateA.removeMany,
      removeAll = _createUnsortedStateA.removeAll;

  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }

  function addManyMutably(newModels, state) {
    if (!Array.isArray(newModels)) {
      newModels = Object.values(newModels);
    }

    var models = newModels.filter(function (model) {
      return !(selectIdValue(model, selectId) in state.entities);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function setAllMutably(models, state) {
    if (!Array.isArray(models)) {
      models = Object.values(models);
    }

    state.entities = {};
    state.ids = [];
    addManyMutably(models, state);
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function takeUpdatedModel(models, update, state) {
    if (!(update.id in state.entities)) {
      return false;
    }

    var original = state.entities[update.id];
    var updated = Object.assign({}, original, update.changes);
    var newKey = selectIdValue(updated, selectId);
    delete state.entities[update.id];
    models.push(updated);
    return newKey !== update.id;
  }

  function updateManyMutably(updates, state) {
    var models = [];
    updates.forEach(function (update) {
      return takeUpdatedModel(models, update, state);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    var added = [];
    var updated = [];

    for (var _iterator = entities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entity = _ref;
      var id = selectIdValue(entity, selectId);

      if (id in state.entities) {
        updated.push({
          id: id,
          changes: entity
        });
      } else {
        added.push(entity);
      }
    }

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length && i < b.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }

      return false;
    }

    return true;
  }

  function merge(models, state) {
    models.sort(sort); // Insert/overwrite all new/updated

    models.forEach(function (model) {
      state.entities[selectId(model)] = model;
    });
    var allEntities = Object.values(state.entities);
    allEntities.sort(sort);
    var newSortedIds = allEntities.map(selectId);
    var ids = state.ids;

    if (!areArraysEqual(ids, newSortedIds)) {
      state.ids = newSortedIds;
    }
  }

  return {
    removeOne: removeOne,
    removeMany: removeMany,
    removeAll: removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
}

/**
 *
 * @param options
 *
 * @public
 */

function createEntityAdapter(options) {
  if (options === void 0) {
    options = {};
  }

  var _sortComparer$selectI = _extends({
    sortComparer: false,
    selectId: function selectId(instance) {
      return instance.id;
    }
  }, options),
      selectId = _sortComparer$selectI.selectId,
      sortComparer = _sortComparer$selectI.sortComparer;

  var stateFactory = createInitialStateFactory();
  var selectorsFactory = createSelectorsFactory();
  var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  return _extends({
    selectId: selectId,
    sortComparer: sortComparer
  }, stateFactory, {}, selectorsFactory, {}, stateAdapter);
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

// Borrowed from https://github.com/ai/nanoid/blob/3.0.2/non-secure/index.js
// This alphabet uses `A-Za-z0-9_-` symbols. A genetic algorithm helped
// optimize the gzip compression for this alphabet.
var urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';
/**
 *
 * @public
 */

var nanoid = function nanoid(size) {
  if (size === void 0) {
    size = 21;
  }

  var id = ''; // A compact alternative for `for (var i = 0; i < step; i++)`.

  var i = size;

  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
};

var commonProperties = ['name', 'message', 'stack', 'code'];

var RejectWithValue = function RejectWithValue(payload) {
  this.payload = payload;
  this.name = 'RejectWithValue';
  this.message = 'Rejected';
}; // Reworked from https://github.com/sindresorhus/serialize-error


var miniSerializeError = function miniSerializeError(value) {
  if (typeof value === 'object' && value !== null) {
    var simpleError = {};

    for (var _iterator = commonProperties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var property = _ref;

      if (typeof value[property] === 'string') {
        simpleError[property] = value[property];
      }
    }

    return simpleError;
  }

  return {
    message: String(value)
  };
};
/**
 *
 * @param typePrefix
 * @param payloadCreator
 * @param options
 *
 * @public
 */

function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + '/fulfilled', function (result, requestId, arg) {
    return {
      payload: result,
      meta: {
        arg: arg,
        requestId: requestId,
        requestStatus: 'fulfilled'
      }
    };
  });
  var pending = createAction(typePrefix + '/pending', function (requestId, arg) {
    return {
      payload: undefined,
      meta: {
        arg: arg,
        requestId: requestId,
        requestStatus: 'pending'
      }
    };
  });
  var rejected = createAction(typePrefix + '/rejected', function (error, requestId, arg) {
    var rejectedWithValue = error instanceof RejectWithValue;
    var aborted = !!error && error.name === 'AbortError';
    var condition = !!error && error.name === 'ConditionError';
    return {
      payload: error instanceof RejectWithValue ? error.payload : undefined,
      error: (options && options.serializeError || miniSerializeError)(error || 'Rejected'),
      meta: {
        arg: arg,
        requestId: requestId,
        rejectedWithValue: rejectedWithValue,
        requestStatus: 'rejected',
        aborted: aborted,
        condition: condition
      }
    };
  });
  var displayedWarning = false;
  var AC = typeof AbortController !== 'undefined' ? AbortController :
  /*#__PURE__*/
  function () {
    function _class() {
      this.signal = {
        aborted: false,
        addEventListener: function addEventListener() {},
        dispatchEvent: function dispatchEvent() {
          return false;
        },
        onabort: function onabort() {},
        removeEventListener: function removeEventListener() {}
      };
    }

    var _proto = _class.prototype;

    _proto.abort = function abort() {
      if (true) {
        if (!displayedWarning) {
          displayedWarning = true;
          console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
        }
      }
    };

    return _class;
  }();

  function actionCreator(arg) {
    return function (dispatch, getState, extra) {
      var requestId = nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function (_, reject) {
        return abortController.signal.addEventListener('abort', function () {
          return reject({
            name: 'AbortError',
            message: abortReason || 'Aborted'
          });
        });
      });
      var started = false;

      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }

      var promise = function () {
        try {
          var _temp3 = function _temp3(_result) {
            if (_exit2) return _result;
            // We dispatch the result action _after_ the catch, to avoid having any errors
            // here get swallowed by the try/catch block,
            // per https://twitter.com/dan_abramov/status/770914221638942720
            // and https://redux-toolkit.js.org/tutorials/advanced-tutorial#async-error-handling-logic-in-thunks
            var skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;

            if (!skipDispatch) {
              dispatch(finalAction);
            }

            return finalAction;
          };

          var _exit2 = false;
          var finalAction;

          var _temp4 = _catch(function () {
            if (options && options.condition && options.condition(arg, {
              getState: getState,
              extra: extra
            }) === false) {
              // eslint-disable-next-line no-throw-literal
              throw {
                name: 'ConditionError',
                message: 'Aborted due to condition callback returning false.'
              };
            }

            started = true;
            dispatch(pending(requestId, arg));
            return Promise.resolve(Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch: dispatch,
              getState: getState,
              extra: extra,
              requestId: requestId,
              signal: abortController.signal,
              rejectWithValue: function rejectWithValue(value) {
                return new RejectWithValue(value);
              }
            })).then(function (result) {
              if (result instanceof RejectWithValue) {
                return rejected(result, requestId, arg);
              }

              return fulfilled(result, requestId, arg);
            })])).then(function (_Promise$race) {
              finalAction = _Promise$race;
            });
          }, function (err) {
            finalAction = rejected(err, requestId, arg);
          });

          return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
        } catch (e) {
          return Promise.reject(e);
        }
      }();

      return Object.assign(promise, {
        abort: abort,
        requestId: requestId,
        arg: arg
      });
    };
  }

  return Object.assign(actionCreator, {
    pending: pending,
    rejected: rejected,
    fulfilled: fulfilled,
    typePrefix: typePrefix
  });
}
/**
 * @public
 */

function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }

  if (action.error) {
    throw action.error;
  }

  return action.payload;
}

var hasMatchFunction = function hasMatchFunction(v) {
  return v && typeof v.match === 'function';
};

var matches = function matches(matcher, action) {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches any one of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */


function isAnyOf() {
  for (var _len = arguments.length, matchers = new Array(_len), _key = 0; _key < _len; _key++) {
    matchers[_key] = arguments[_key];
  }

  return function (action) {
    return matchers.some(function (matcher) {
      return matches(matcher, action);
    });
  };
}
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches all of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */

function isAllOf() {
  for (var _len2 = arguments.length, matchers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    matchers[_key2] = arguments[_key2];
  }

  return function (action) {
    return matchers.every(function (matcher) {
      return matches(matcher, action);
    });
  };
}
/**
 * @param action A redux action
 * @param validStatus An array of valid meta.requestStatus values
 *
 * @internal
 */

function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta) return false;
  var hasValidRequestId = typeof action.meta.requestId === 'string';
  var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}

function isAsyncThunkArray(a) {
  return typeof a[0] === 'function' && 'pending' in a[0] && 'fulfilled' in a[0] && 'rejected' in a[0];
}

function isPending() {
  for (var _len3 = arguments.length, asyncThunks = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    asyncThunks[_key3] = arguments[_key3];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['pending']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.pending;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejected() {
  for (var _len4 = arguments.length, asyncThunks = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    asyncThunks[_key4] = arguments[_key4];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['rejected']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.rejected;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejectedWithValue() {
  for (var _len5 = arguments.length, asyncThunks = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    asyncThunks[_key5] = arguments[_key5];
  }

  var hasFlag = function hasFlag(action) {
    return action && action.meta && action.meta.rejectedWithValue;
  };

  if (asyncThunks.length === 0) {
    return function (action) {
      var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
      return combinedMatcher(action);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }

  return function (action) {
    var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
    return combinedMatcher(action);
  };
}
function isFulfilled() {
  for (var _len6 = arguments.length, asyncThunks = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    asyncThunks[_key6] = arguments[_key6];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['fulfilled']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.fulfilled;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isAsyncThunkAction() {
  for (var _len7 = arguments.length, asyncThunks = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    asyncThunks[_key7] = arguments[_key7];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['pending', 'fulfilled', 'rejected']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = [];

    for (var _iterator = asyncThunks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var asyncThunk = _ref;
      matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
    }

    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}

// we assume RTK will be used with React Native and other Proxy-less
// environments.  In addition, that's how Immer 4 behaved, and since
// we want to ship this in an RTK minor, we should keep the same behavior.

Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();


//# sourceMappingURL=redux-toolkit.esm.js.map


/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, freeze, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return dn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return vn; });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.g=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b("ES5").S(e,r,o),o?(i[Q].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q],r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);return!(!t||t.get)}function f(r){r.g&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.g&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,g:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.D.set(n,!1),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),en.deleteProperty.call(this,r[0],t)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?g(c):O(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if((f=i(r))===H)return;return void 0===f&&(f=r),e.F&&d(f,!0),f}n(21,r)},this.produceWithPatches=function(n,r){return"function"==typeof n?function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))}:[e.produce(n,r,(function(n,r){t=n,i=r})),t,i];var t,i},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.O=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t.slice(e+1))}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ __webpack_exports__["default"] = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseOrderBy.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseOrderBy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    baseSortBy = __webpack_require__(/*! ./_baseSortBy */ "./node_modules/lodash/_baseSortBy.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    compareMultiple = __webpack_require__(/*! ./_compareMultiple */ "./node_modules/lodash/_compareMultiple.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseSortBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseSortBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_compareAscending.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_compareAscending.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ "./node_modules/lodash/_compareMultiple.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_compareMultiple.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(/*! ./_compareAscending */ "./node_modules/lodash/_compareAscending.js");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/lodash/camelCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/camelCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(/*! ./capitalize */ "./node_modules/lodash/capitalize.js"),
    createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),

/***/ "./node_modules/lodash/capitalize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/capitalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    upperFirst = __webpack_require__(/*! ./upperFirst */ "./node_modules/lodash/upperFirst.js");

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/lowerCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/lowerCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.lowerCase('--Foo-Bar--');
 * // => 'foo bar'
 *
 * _.lowerCase('fooBar');
 * // => 'foo bar'
 *
 * _.lowerCase('__FOO_BAR__');
 * // => 'foo bar'
 */
var lowerCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + word.toLowerCase();
});

module.exports = lowerCase;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/snakeCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/snakeCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

module.exports = snakeCase;


/***/ }),

/***/ "./node_modules/lodash/sortBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/sortBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseOrderBy = __webpack_require__(/*! ./_baseOrderBy */ "./node_modules/lodash/_baseOrderBy.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ "./node_modules/lodash/_createCaseFirst.js");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "./node_modules/normalizr/dist/normalizr.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/normalizr/dist/normalizr.es.js ***!
  \*****************************************************/
/*! exports provided: denormalize, normalize, schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "denormalize", function() { return denormalize$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schema", function() { return schema; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * Helpers to enable Immutable compatibility *without* bringing in
 * the 'immutable' package as a dependency.
 */

/**
 * Check if an object is immutable by checking if it has a key specific
 * to the immutable library.
 *
 * @param  {any} object
 * @return {bool}
 */
function isImmutable(object) {
  return !!(object && typeof object.hasOwnProperty === 'function' && (object.hasOwnProperty('__ownerID') || // Immutable.Map
  object._map && object._map.hasOwnProperty('__ownerID'))); // Immutable.Record
}
/**
 * Denormalize an immutable entity.
 *
 * @param  {Schema} schema
 * @param  {Immutable.Map|Immutable.Record} input
 * @param  {function} unvisit
 * @param  {function} getDenormalizedEntity
 * @return {Immutable.Map|Immutable.Record}
 */

function denormalizeImmutable(schema, input, unvisit) {
  return Object.keys(schema).reduce(function (object, key) {
    // Immutable maps cast keys to strings on write so we need to ensure
    // we're accessing them using string keys.
    var stringKey = "" + key;

    if (object.has(stringKey)) {
      return object.set(stringKey, unvisit(object.get(stringKey), schema[stringKey]));
    } else {
      return object;
    }
  }, input);
}

var getDefaultGetId = function getDefaultGetId(idAttribute) {
  return function (input) {
    return isImmutable(input) ? input.get(idAttribute) : input[idAttribute];
  };
};

var EntitySchema = /*#__PURE__*/function () {
  function EntitySchema(key, definition, options) {
    if (definition === void 0) {
      definition = {};
    }

    if (options === void 0) {
      options = {};
    }

    if (!key || typeof key !== 'string') {
      throw new Error("Expected a string key for Entity, but found " + key + ".");
    }

    var _options = options,
        _options$idAttribute = _options.idAttribute,
        idAttribute = _options$idAttribute === void 0 ? 'id' : _options$idAttribute,
        _options$mergeStrateg = _options.mergeStrategy,
        mergeStrategy = _options$mergeStrateg === void 0 ? function (entityA, entityB) {
      return _extends({}, entityA, entityB);
    } : _options$mergeStrateg,
        _options$processStrat = _options.processStrategy,
        processStrategy = _options$processStrat === void 0 ? function (input) {
      return _extends({}, input);
    } : _options$processStrat,
        _options$fallbackStra = _options.fallbackStrategy,
        fallbackStrategy = _options$fallbackStra === void 0 ? function (key, schema) {
      return undefined;
    } : _options$fallbackStra;
    this._key = key;
    this._getId = typeof idAttribute === 'function' ? idAttribute : getDefaultGetId(idAttribute);
    this._idAttribute = idAttribute;
    this._mergeStrategy = mergeStrategy;
    this._processStrategy = processStrategy;
    this._fallbackStrategy = fallbackStrategy;
    this.define(definition);
  }

  var _proto = EntitySchema.prototype;

  _proto.define = function define(definition) {
    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
      var _extends2;

      var schema = definition[key];
      return _extends({}, entitySchema, (_extends2 = {}, _extends2[key] = schema, _extends2));
    }, this.schema || {});
  };

  _proto.getId = function getId(input, parent, key) {
    return this._getId(input, parent, key);
  };

  _proto.merge = function merge(entityA, entityB) {
    return this._mergeStrategy(entityA, entityB);
  };

  _proto.fallback = function fallback(id, schema) {
    return this._fallbackStrategy(id, schema);
  };

  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {
    var _this = this;

    var id = this.getId(input, parent, key);
    var entityType = this.key;

    if (!(entityType in visitedEntities)) {
      visitedEntities[entityType] = {};
    }

    if (!(id in visitedEntities[entityType])) {
      visitedEntities[entityType][id] = [];
    }

    if (visitedEntities[entityType][id].some(function (entity) {
      return entity === input;
    })) {
      return id;
    }

    visitedEntities[entityType][id].push(input);

    var processedEntity = this._processStrategy(input, parent, key);

    Object.keys(this.schema).forEach(function (key) {
      if (processedEntity.hasOwnProperty(key) && typeof processedEntity[key] === 'object') {
        var schema = _this.schema[key];
        var resolvedSchema = typeof schema === 'function' ? schema(input) : schema;
        processedEntity[key] = visit(processedEntity[key], processedEntity, key, resolvedSchema, addEntity, visitedEntities);
      }
    });
    addEntity(this, processedEntity, input, parent, key);
    return id;
  };

  _proto.denormalize = function denormalize(entity, unvisit) {
    var _this2 = this;

    if (isImmutable(entity)) {
      return denormalizeImmutable(this.schema, entity, unvisit);
    }

    Object.keys(this.schema).forEach(function (key) {
      if (entity.hasOwnProperty(key)) {
        var schema = _this2.schema[key];
        entity[key] = unvisit(entity[key], schema);
      }
    });
    return entity;
  };

  _createClass(EntitySchema, [{
    key: "key",
    get: function get() {
      return this._key;
    }
  }, {
    key: "idAttribute",
    get: function get() {
      return this._idAttribute;
    }
  }]);

  return EntitySchema;
}();

var PolymorphicSchema = /*#__PURE__*/function () {
  function PolymorphicSchema(definition, schemaAttribute) {
    if (schemaAttribute) {
      this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {
        return input[schemaAttribute];
      } : schemaAttribute;
    }

    this.define(definition);
  }

  var _proto = PolymorphicSchema.prototype;

  _proto.define = function define(definition) {
    this.schema = definition;
  };

  _proto.getSchemaAttribute = function getSchemaAttribute(input, parent, key) {
    return !this.isSingleSchema && this._schemaAttribute(input, parent, key);
  };

  _proto.inferSchema = function inferSchema(input, parent, key) {
    if (this.isSingleSchema) {
      return this.schema;
    }

    var attr = this.getSchemaAttribute(input, parent, key);
    return this.schema[attr];
  };

  _proto.normalizeValue = function normalizeValue(value, parent, key, visit, addEntity, visitedEntities) {
    var schema = this.inferSchema(value, parent, key);

    if (!schema) {
      return value;
    }

    var normalizedValue = visit(value, parent, key, schema, addEntity, visitedEntities);
    return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : {
      id: normalizedValue,
      schema: this.getSchemaAttribute(value, parent, key)
    };
  };

  _proto.denormalizeValue = function denormalizeValue(value, unvisit) {
    var schemaKey = isImmutable(value) ? value.get('schema') : value.schema;

    if (!this.isSingleSchema && !schemaKey) {
      return value;
    }

    var id = this.isSingleSchema ? undefined : isImmutable(value) ? value.get('id') : value.id;
    var schema = this.isSingleSchema ? this.schema : this.schema[schemaKey];
    return unvisit(id || value, schema);
  };

  _createClass(PolymorphicSchema, [{
    key: "isSingleSchema",
    get: function get() {
      return !this._schemaAttribute;
    }
  }]);

  return PolymorphicSchema;
}();

var UnionSchema = /*#__PURE__*/function (_PolymorphicSchema) {
  _inheritsLoose(UnionSchema, _PolymorphicSchema);

  function UnionSchema(definition, schemaAttribute) {
    if (!schemaAttribute) {
      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
    }

    return _PolymorphicSchema.call(this, definition, schemaAttribute) || this;
  }

  var _proto = UnionSchema.prototype;

  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {
    return this.normalizeValue(input, parent, key, visit, addEntity, visitedEntities);
  };

  _proto.denormalize = function denormalize(input, unvisit) {
    return this.denormalizeValue(input, unvisit);
  };

  return UnionSchema;
}(PolymorphicSchema);

var ValuesSchema = /*#__PURE__*/function (_PolymorphicSchema) {
  _inheritsLoose(ValuesSchema, _PolymorphicSchema);

  function ValuesSchema() {
    return _PolymorphicSchema.apply(this, arguments) || this;
  }

  var _proto = ValuesSchema.prototype;

  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {
    var _this = this;

    return Object.keys(input).reduce(function (output, key, index) {
      var _extends2;

      var value = input[key];
      return value !== undefined && value !== null ? _extends({}, output, (_extends2 = {}, _extends2[key] = _this.normalizeValue(value, input, key, visit, addEntity, visitedEntities), _extends2)) : output;
    }, {});
  };

  _proto.denormalize = function denormalize(input, unvisit) {
    var _this2 = this;

    return Object.keys(input).reduce(function (output, key) {
      var _extends3;

      var entityOrId = input[key];
      return _extends({}, output, (_extends3 = {}, _extends3[key] = _this2.denormalizeValue(entityOrId, unvisit), _extends3));
    }, {});
  };

  return ValuesSchema;
}(PolymorphicSchema);

var validateSchema = function validateSchema(definition) {
  var isArray = Array.isArray(definition);

  if (isArray && definition.length > 1) {
    throw new Error("Expected schema definition to be a single schema, but found " + definition.length + ".");
  }

  return definition[0];
};

var getValues = function getValues(input) {
  return Array.isArray(input) ? input : Object.keys(input).map(function (key) {
    return input[key];
  });
};

var normalize = function normalize(schema, input, parent, key, visit, addEntity, visitedEntities) {
  schema = validateSchema(schema);
  var values = getValues(input); // Special case: Arrays pass *their* parent on to their children, since there
  // is not any special information that can be gathered from themselves directly

  return values.map(function (value, index) {
    return visit(value, parent, key, schema, addEntity, visitedEntities);
  });
};
var denormalize = function denormalize(schema, input, unvisit) {
  schema = validateSchema(schema);
  return input && input.map ? input.map(function (entityOrId) {
    return unvisit(entityOrId, schema);
  }) : input;
};

var ArraySchema = /*#__PURE__*/function (_PolymorphicSchema) {
  _inheritsLoose(ArraySchema, _PolymorphicSchema);

  function ArraySchema() {
    return _PolymorphicSchema.apply(this, arguments) || this;
  }

  var _proto = ArraySchema.prototype;

  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {
    var _this = this;

    var values = getValues(input);
    return values.map(function (value, index) {
      return _this.normalizeValue(value, parent, key, visit, addEntity, visitedEntities);
    }).filter(function (value) {
      return value !== undefined && value !== null;
    });
  };

  _proto.denormalize = function denormalize(input, unvisit) {
    var _this2 = this;

    return input && input.map ? input.map(function (value) {
      return _this2.denormalizeValue(value, unvisit);
    }) : input;
  };

  return ArraySchema;
}(PolymorphicSchema);

var _normalize = function normalize(schema, input, parent, key, visit, addEntity, visitedEntities) {
  var object = _extends({}, input);

  Object.keys(schema).forEach(function (key) {
    var localSchema = schema[key];
    var resolvedLocalSchema = typeof localSchema === 'function' ? localSchema(input) : localSchema;
    var value = visit(input[key], input, key, resolvedLocalSchema, addEntity, visitedEntities);

    if (value === undefined || value === null) {
      delete object[key];
    } else {
      object[key] = value;
    }
  });
  return object;
};

var _denormalize = function denormalize(schema, input, unvisit) {
  if (isImmutable(input)) {
    return denormalizeImmutable(schema, input, unvisit);
  }

  var object = _extends({}, input);

  Object.keys(schema).forEach(function (key) {
    if (object[key] != null) {
      object[key] = unvisit(object[key], schema[key]);
    }
  });
  return object;
};

var ObjectSchema = /*#__PURE__*/function () {
  function ObjectSchema(definition) {
    this.define(definition);
  }

  var _proto = ObjectSchema.prototype;

  _proto.define = function define(definition) {
    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
      var _extends2;

      var schema = definition[key];
      return _extends({}, entitySchema, (_extends2 = {}, _extends2[key] = schema, _extends2));
    }, this.schema || {});
  };

  _proto.normalize = function normalize() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _normalize.apply(void 0, [this.schema].concat(args));
  };

  _proto.denormalize = function denormalize() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _denormalize.apply(void 0, [this.schema].concat(args));
  };

  return ObjectSchema;
}();

var visit = function visit(value, parent, key, schema, addEntity, visitedEntities) {
  if (typeof value !== 'object' || !value) {
    return value;
  }

  if (typeof schema === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
    var method = Array.isArray(schema) ? normalize : _normalize;
    return method(schema, value, parent, key, visit, addEntity, visitedEntities);
  }

  return schema.normalize(value, parent, key, visit, addEntity, visitedEntities);
};

var addEntities = function addEntities(entities) {
  return function (schema, processedEntity, value, parent, key) {
    var schemaKey = schema.key;
    var id = schema.getId(value, parent, key);

    if (!(schemaKey in entities)) {
      entities[schemaKey] = {};
    }

    var existingEntity = entities[schemaKey][id];

    if (existingEntity) {
      entities[schemaKey][id] = schema.merge(existingEntity, processedEntity);
    } else {
      entities[schemaKey][id] = processedEntity;
    }
  };
};

var schema = {
  Array: ArraySchema,
  Entity: EntitySchema,
  Object: ObjectSchema,
  Union: UnionSchema,
  Values: ValuesSchema
};
var normalize$1 = function normalize(input, schema) {
  if (!input || typeof input !== 'object') {
    throw new Error("Unexpected input given to normalize. Expected type to be \"object\", found \"" + (input === null ? 'null' : typeof input) + "\".");
  }

  var entities = {};
  var addEntity = addEntities(entities);
  var visitedEntities = {};
  var result = visit(input, input, null, schema, addEntity, visitedEntities);
  return {
    entities: entities,
    result: result
  };
};

var unvisitEntity = function unvisitEntity(id, schema, unvisit, getEntity, cache) {
  var entity = getEntity(id, schema);

  if (entity === undefined && schema instanceof EntitySchema) {
    entity = schema.fallback(id, schema);
  }

  if (typeof entity !== 'object' || entity === null) {
    return entity;
  }

  if (!cache[schema.key]) {
    cache[schema.key] = {};
  }

  if (!cache[schema.key][id]) {
    // Ensure we don't mutate it non-immutable objects
    var entityCopy = isImmutable(entity) ? entity : _extends({}, entity); // Need to set this first so that if it is referenced further within the
    // denormalization the reference will already exist.

    cache[schema.key][id] = entityCopy;
    cache[schema.key][id] = schema.denormalize(entityCopy, unvisit);
  }

  return cache[schema.key][id];
};

var getUnvisit = function getUnvisit(entities) {
  var cache = {};
  var getEntity = getEntities(entities);
  return function unvisit(input, schema) {
    if (typeof schema === 'object' && (!schema.denormalize || typeof schema.denormalize !== 'function')) {
      var method = Array.isArray(schema) ? denormalize : _denormalize;
      return method(schema, input, unvisit);
    }

    if (input === undefined || input === null) {
      return input;
    }

    if (schema instanceof EntitySchema) {
      return unvisitEntity(input, schema, unvisit, getEntity, cache);
    }

    return schema.denormalize(input, unvisit);
  };
};

var getEntities = function getEntities(entities) {
  var isImmutable$1 = isImmutable(entities);
  return function (entityOrId, schema) {
    var schemaKey = schema.key;

    if (typeof entityOrId === 'object') {
      return entityOrId;
    }

    if (isImmutable$1) {
      return entities.getIn([schemaKey, entityOrId.toString()]);
    }

    return entities[schemaKey] && entities[schemaKey][entityOrId];
  };
};

var denormalize$1 = function denormalize(input, schema, entities) {
  if (typeof input !== 'undefined') {
    return getUnvisit(entities)(input, schema);
  }
};




/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference PlayerVendors ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference PlayerVendors */ "dll-reference PlayerVendors"))("./node_modules/prop-types/index.js");

/***/ }),

/***/ "./node_modules/re-reselect/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/re-reselect/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js")) :
  undefined;
}(this, function (exports, reselect) { 'use strict';

  function isStringOrNumber(value) {
    return typeof value === 'string' || typeof value === 'number';
  }

  var FlatObjectCache =
  /*#__PURE__*/
  function () {
    function FlatObjectCache() {
      this._cache = {};
    }

    var _proto = FlatObjectCache.prototype;

    _proto.set = function set(key, selectorFn) {
      this._cache[key] = selectorFn;
    };

    _proto.get = function get(key) {
      return this._cache[key];
    };

    _proto.remove = function remove(key) {
      delete this._cache[key];
    };

    _proto.clear = function clear() {
      this._cache = {};
    };

    _proto.isValidCacheKey = function isValidCacheKey(cacheKey) {
      return isStringOrNumber(cacheKey);
    };

    return FlatObjectCache;
  }();

  var defaultCacheCreator = FlatObjectCache;

  var defaultCacheKeyValidator = function defaultCacheKeyValidator() {
    return true;
  };

  function createCachedSelector() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    return function (polymorphicOptions, legacyOptions) {
      // @NOTE Versions 0.x/1.x accepted "options" as a function
      if (typeof legacyOptions === 'function') {
        throw new Error('[re-reselect] Second argument "options" must be an object. Please use "options.selectorCreator" to provide a custom selectorCreator.');
      }

      var options = {};

      if (typeof polymorphicOptions === 'function') {
        Object.assign(options, legacyOptions, {
          keySelector: polymorphicOptions
        }); // @TODO add legacyOptions deprecation notice in next major release
      } else {
        Object.assign(options, polymorphicOptions);
      } // https://github.com/reduxjs/reselect/blob/v4.0.0/src/index.js#L54


      var recomputations = 0;
      var resultFunc = funcs.pop();
      var dependencies = Array.isArray(funcs[0]) ? funcs[0] : [].concat(funcs);

      var resultFuncWithRecomputations = function resultFuncWithRecomputations() {
        recomputations++;
        return resultFunc.apply(void 0, arguments);
      };

      funcs.push(resultFuncWithRecomputations);
      var cache = options.cacheObject || new defaultCacheCreator();
      var selectorCreator = options.selectorCreator || reselect.createSelector;
      var isValidCacheKey = cache.isValidCacheKey || defaultCacheKeyValidator;

      if (options.keySelectorCreator) {
        options.keySelector = options.keySelectorCreator({
          keySelector: options.keySelector,
          inputSelectors: dependencies,
          resultFunc: resultFunc
        });
      } // Application receives this function


      var selector = function selector() {
        var cacheKey = options.keySelector.apply(options, arguments);

        if (isValidCacheKey(cacheKey)) {
          var cacheResponse = cache.get(cacheKey);

          if (cacheResponse === undefined) {
            cacheResponse = selectorCreator.apply(void 0, funcs);
            cache.set(cacheKey, cacheResponse);
          }

          return cacheResponse.apply(void 0, arguments);
        }

        console.warn("[re-reselect] Invalid cache key \"" + cacheKey + "\" has been returned by keySelector function.");
        return undefined;
      }; // Further selector methods


      selector.getMatchingSelector = function () {
        var cacheKey = options.keySelector.apply(options, arguments); // @NOTE It might update cache hit count in LRU-like caches

        return cache.get(cacheKey);
      };

      selector.removeMatchingSelector = function () {
        var cacheKey = options.keySelector.apply(options, arguments);
        cache.remove(cacheKey);
      };

      selector.clearCache = function () {
        cache.clear();
      };

      selector.resultFunc = resultFunc;
      selector.dependencies = dependencies;
      selector.cache = cache;

      selector.recomputations = function () {
        return recomputations;
      };

      selector.resetRecomputations = function () {
        return recomputations = 0;
      };

      selector.keySelector = options.keySelector;
      return selector;
    };
  }

  function createStructuredCachedSelector(selectors) {
    return reselect.createStructuredSelector(selectors, createCachedSelector);
  }

  function validateCacheSize(cacheSize) {
    if (cacheSize === undefined) {
      throw new Error('Missing the required property "cacheSize".');
    }

    if (!Number.isInteger(cacheSize) || cacheSize <= 0) {
      throw new Error('The "cacheSize" property must be a positive integer value.');
    }
  }

  var FifoObjectCache =
  /*#__PURE__*/
  function () {
    function FifoObjectCache(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          cacheSize = _ref.cacheSize;

      validateCacheSize(cacheSize);
      this._cache = {};
      this._cacheOrdering = [];
      this._cacheSize = cacheSize;
    }

    var _proto = FifoObjectCache.prototype;

    _proto.set = function set(key, selectorFn) {
      this._cache[key] = selectorFn;

      this._cacheOrdering.push(key);

      if (this._cacheOrdering.length > this._cacheSize) {
        var earliest = this._cacheOrdering[0];
        this.remove(earliest);
      }
    };

    _proto.get = function get(key) {
      return this._cache[key];
    };

    _proto.remove = function remove(key) {
      var index = this._cacheOrdering.indexOf(key);

      if (index > -1) {
        this._cacheOrdering.splice(index, 1);
      }

      delete this._cache[key];
    };

    _proto.clear = function clear() {
      this._cache = {};
      this._cacheOrdering = [];
    };

    _proto.isValidCacheKey = function isValidCacheKey(cacheKey) {
      return isStringOrNumber(cacheKey);
    };

    return FifoObjectCache;
  }();

  var LruObjectCache =
  /*#__PURE__*/
  function () {
    function LruObjectCache(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          cacheSize = _ref.cacheSize;

      validateCacheSize(cacheSize);
      this._cache = {};
      this._cacheOrdering = [];
      this._cacheSize = cacheSize;
    }

    var _proto = LruObjectCache.prototype;

    _proto.set = function set(key, selectorFn) {
      this._cache[key] = selectorFn;

      this._registerCacheHit(key);

      if (this._cacheOrdering.length > this._cacheSize) {
        var earliest = this._cacheOrdering[0];
        this.remove(earliest);
      }
    };

    _proto.get = function get(key) {
      this._registerCacheHit(key);

      return this._cache[key];
    };

    _proto.remove = function remove(key) {
      this._deleteCacheHit(key);

      delete this._cache[key];
    };

    _proto.clear = function clear() {
      this._cache = {};
      this._cacheOrdering = [];
    };

    _proto._registerCacheHit = function _registerCacheHit(key) {
      this._deleteCacheHit(key);

      this._cacheOrdering.push(key);
    };

    _proto._deleteCacheHit = function _deleteCacheHit(key) {
      var index = this._cacheOrdering.indexOf(key);

      if (index > -1) {
        this._cacheOrdering.splice(index, 1);
      }
    };

    _proto.isValidCacheKey = function isValidCacheKey(cacheKey) {
      return isStringOrNumber(cacheKey);
    };

    return LruObjectCache;
  }();

  var FlatMapCache =
  /*#__PURE__*/
  function () {
    function FlatMapCache() {
      this._cache = new Map();
    }

    var _proto = FlatMapCache.prototype;

    _proto.set = function set(key, selectorFn) {
      this._cache.set(key, selectorFn);
    };

    _proto.get = function get(key) {
      return this._cache.get(key);
    };

    _proto.remove = function remove(key) {
      this._cache["delete"](key);
    };

    _proto.clear = function clear() {
      this._cache.clear();
    };

    return FlatMapCache;
  }();

  var FifoMapCache =
  /*#__PURE__*/
  function () {
    function FifoMapCache(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          cacheSize = _ref.cacheSize;

      validateCacheSize(cacheSize);
      this._cache = new Map();
      this._cacheSize = cacheSize;
    }

    var _proto = FifoMapCache.prototype;

    _proto.set = function set(key, selectorFn) {
      this._cache.set(key, selectorFn);

      if (this._cache.size > this._cacheSize) {
        var earliest = this._cache.keys().next().value;

        this.remove(earliest);
      }
    };

    _proto.get = function get(key) {
      return this._cache.get(key);
    };

    _proto.remove = function remove(key) {
      this._cache["delete"](key);
    };

    _proto.clear = function clear() {
      this._cache.clear();
    };

    return FifoMapCache;
  }();

  var LruMapCache =
  /*#__PURE__*/
  function () {
    function LruMapCache(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          cacheSize = _ref.cacheSize;

      validateCacheSize(cacheSize);
      this._cache = new Map();
      this._cacheSize = cacheSize;
    }

    var _proto = LruMapCache.prototype;

    _proto.set = function set(key, selectorFn) {
      this._cache.set(key, selectorFn);

      if (this._cache.size > this._cacheSize) {
        var earliest = this._cache.keys().next().value;

        this.remove(earliest);
      }
    };

    _proto.get = function get(key) {
      var value = this._cache.get(key); // Register cache hit


      if (this._cache.has(key)) {
        this.remove(key);

        this._cache.set(key, value);
      }

      return value;
    };

    _proto.remove = function remove(key) {
      this._cache["delete"](key);
    };

    _proto.clear = function clear() {
      this._cache.clear();
    };

    return LruMapCache;
  }();

  exports.FifoCacheObject = FifoObjectCache;
  exports.FifoMapCache = FifoMapCache;
  exports.FifoObjectCache = FifoObjectCache;
  exports.FlatCacheObject = FlatObjectCache;
  exports.FlatMapCache = FlatMapCache;
  exports.FlatObjectCache = FlatObjectCache;
  exports.LruCacheObject = LruMapCache;
  exports.LruMapCache = LruMapCache;
  exports.LruObjectCache = LruObjectCache;
  exports.createStructuredCachedSelector = createStructuredCachedSelector;
  exports.default = createCachedSelector;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference PlayerVendors ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference PlayerVendors */ "dll-reference PlayerVendors"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-redux/es/index.js from dll-reference PlayerVendors ***!
  \*****************************************************************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference PlayerVendors */ "dll-reference PlayerVendors"))("./node_modules/react-redux/es/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference PlayerVendors ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference PlayerVendors */ "dll-reference PlayerVendors"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js ***!
  \***********************************************************************/
/*! exports provided: CANCEL, SAGA_LOCATION, buffers, detach, END, channel, eventChannel, isEnd, multicastChannel, runSaga, stdChannel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core */ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffers", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["buffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["detach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "END", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["channel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["eventChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["isEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multicastChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["multicastChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runSaga", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["runSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stdChannel", function() { return _redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["stdChannel"]; });






/* harmony default export */ __webpack_exports__["default"] = (_redux_saga_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js ***!
  \**************************************************************************/
/*! exports provided: actionChannel, all, apply, call, cancel, cancelled, cps, delay, effectTypes, flush, fork, getContext, join, put, putResolve, race, select, setContext, spawn, take, takeMaybe, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["actionChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["effectTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["putResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["race"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["spawn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeMaybe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["retry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLeading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"]; });




/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/redux/es/redux.js from dll-reference PlayerVendors ***!
  \***********************************************************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference PlayerVendors */ "dll-reference PlayerVendors"))("./node_modules/redux/es/redux.js");

/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/*! exports provided: defaultMemoize, createSelectorCreator, createSelector, createStructuredSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return defaultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorCreator", function() { return createSelectorCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStructuredSelector", function() { return createStructuredSelector; });
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference PlayerVendors ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference PlayerVendors */ "dll-reference PlayerVendors"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./react-app/actions/constants.js":
/*!****************************************!*\
  !*** ./react-app/actions/constants.js ***!
  \****************************************/
/*! exports provided: default, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
const actions = window.a5.service.React.actions;
/* harmony default export */ __webpack_exports__["default"] = (actions);
const events = window.a5.service.React.events;

/***/ }),

/***/ "./react-app/actions/interface.js":
/*!****************************************!*\
  !*** ./react-app/actions/interface.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_options_features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/options/features */ "./react-app/modules/options/features/index.js");
/* harmony import */ var _modules_lo_features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/lo/features */ "./react-app/modules/lo/features/index.js");
/* harmony import */ var _modules_screens_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/screens/features */ "./react-app/modules/screens/features/index.js");
/* harmony import */ var _modules_activities_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/activities/saga */ "./react-app/modules/activities/saga/index.js");
/* harmony import */ var _modules_uiData_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/uiData/saga */ "./react-app/modules/uiData/saga/index.js");
/* harmony import */ var _modules_userData_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/userData/saga */ "./react-app/modules/userData/saga/index.js");
/* harmony import */ var _modules_validationData_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/validationData/saga */ "./react-app/modules/validationData/saga/index.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  options: _modules_options_features__WEBPACK_IMPORTED_MODULE_0__["actions"],
  lo: _modules_lo_features__WEBPACK_IMPORTED_MODULE_1__["actions"],
  screens: _modules_screens_features__WEBPACK_IMPORTED_MODULE_2__["actions"],
  activities: { ..._modules_activities_saga__WEBPACK_IMPORTED_MODULE_3__["actions"],
    ..._modules_validationData_saga__WEBPACK_IMPORTED_MODULE_6__["actions"],
    setEnabled: _modules_uiData_saga__WEBPACK_IMPORTED_MODULE_4__["actions"].setEnabled,
    setDatatype: _modules_uiData_saga__WEBPACK_IMPORTED_MODULE_4__["actions"].setDataType,
    setValidationtype: _modules_uiData_saga__WEBPACK_IMPORTED_MODULE_4__["actions"].setValidationType,
    setExtraui: _modules_uiData_saga__WEBPACK_IMPORTED_MODULE_4__["actions"].setExtraUI,
    setBatchui: _modules_uiData_saga__WEBPACK_IMPORTED_MODULE_4__["actions"].setBatchUI,
    setUserdata: _modules_userData_saga__WEBPACK_IMPORTED_MODULE_5__["actions"].setUserData,
    clearUserdata: _modules_userData_saga__WEBPACK_IMPORTED_MODULE_5__["actions"].clearUserData
  }
});

/***/ }),

/***/ "./react-app/index.js":
/*!****************************!*\
  !*** ./react-app/index.js ***!
  \****************************/
/*! exports provided: renderElement, updateState, getState, registerEventsCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateState", function() { return updateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEventsCallback", function() { return registerEventsCallback; });
/* harmony import */ var _utils_actions_actionIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/actions/actionIn */ "./react-app/utils/actions/actionIn.js");
/* harmony import */ var _utils_selectorFetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/selectorFetcher */ "./react-app/utils/selectorFetcher.js");
/* harmony import */ var _utils_actions_eventManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/actions/eventManager */ "./react-app/utils/actions/eventManager.js");
/* harmony import */ var _utils_elementRenderer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/elementRenderer.jsx */ "./react-app/utils/elementRenderer.jsx");
/* harmony import */ var _modules_options_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/options/utils */ "./react-app/modules/options/utils/index.js");
__webpack_require__.p = window.A5.REACT_BUNDLE_FOLDER_PATH;





Object(_modules_options_utils__WEBPACK_IMPORTED_MODULE_4__["loadOptionsList"])();

const updateState = ({
  action,
  data
}) => {
  return Object(_utils_actions_actionIn__WEBPACK_IMPORTED_MODULE_0__["default"])(action, data);
};

const renderElement = ({
  componentName,
  props,
  destination
}) => {
  Object(_utils_elementRenderer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(componentName, props, destination);
};

const getState = ({
  method,
  data
}) => {
  return Object(_utils_selectorFetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(method, data);
};

const registerEventsCallback = (callback, context) => {
  Object(_utils_actions_eventManager__WEBPACK_IMPORTED_MODULE_2__["addEventsCallback"])(callback, context);
};



/***/ }),

/***/ "./react-app/modules/activities/action.js":
/*!************************************************!*\
  !*** ./react-app/modules/activities/action.js ***!
  \************************************************/
/*! exports provided: eventConstants, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventConstants", function() { return eventConstants; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/constants */ "./react-app/actions/constants.js");

const actionsConstants = _actions_constants__WEBPACK_IMPORTED_MODULE_0__["default"].activities.getAllActivityActionsNames();
const eventConstants = _actions_constants__WEBPACK_IMPORTED_MODULE_0__["events"].activities.getAllActivityEventsNames();
/* harmony default export */ __webpack_exports__["default"] = (actionsConstants);

/***/ }),

/***/ "./react-app/modules/activities/components/index.jsx":
/*!***********************************************************!*\
  !*** ./react-app/modules/activities/components/index.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const ICCrosswrod = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | ICCrossword */[__webpack_require__.e("vendors~ICCrossword"), __webpack_require__.e("ICCrossword")]).then(__webpack_require__.bind(null, /*! ../../activityTypes/ICCrossword/components/ICCrossword.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ICCrossword.jsx")));

const ActivityComponentMapper = props => {
  const {
    activityType
  } = props;
  let Component;

  switch (activityType) {
    case 'iccrossword':
      Component = ICCrosswrod;
      break;

    default:
      Component = null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Component && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props)));
};

ActivityComponentMapper.propTypes = {
  activityType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ActivityComponentMapper);

/***/ }),

/***/ "./react-app/modules/activities/reducer/index.js":
/*!*******************************************************!*\
  !*** ./react-app/modules/activities/reducer/index.js ***!
  \*******************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processor */ "./react-app/modules/activities/reducer/processor.js");


const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'activities',
  initialState: {},
  reducers: {
    addActivities: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('addActivities', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    },
    clearActivities: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('clearActivities', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    },
    beginAction: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('beginAction', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    },
    endAction: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('endAction', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    },
    setVisible: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('setVisible', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    }
  }
}); //EXPORTS

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/activities/reducer/processor.js":
/*!***********************************************************!*\
  !*** ./react-app/modules/activities/reducer/processor.js ***!
  \***********************************************************/
/*! exports provided: register, process, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");

const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'reducers',
  name: 'activities',
  processors: {
    addActivities: (state, {
      data
    }) => {
      return { ...state,
        ...data
      };
    },
    clearActivities: (state, {
      data
    }) => {
      return Object.keys(state).reduce((acc, id) => {
        if (!data.includes(id)) {
          acc[id] = state[id];
        }

        return acc;
      }, {});
    },
    beginAction: (state, {
      data
    }) => {
      try {
        data.forEach(({
          id,
          transaction
        }) => {
          if (state[id]) {
            state[id].transactions = state[id].transactions || [];
            state[id].transactions.push(transaction);
          }
        });
      } catch (e) {
        throw new Error(e.message);
      }
    },
    endAction: (state, {
      data
    }) => {
      try {
        data.forEach(({
          id,
          transaction
        }) => {
          if (state[id] && state[id].transactions) {
            const transactionIndex = state[id].transactions.findIndex(tr => tr === transaction);

            if (transactionIndex >= 0) {
              state[id].transactions.splice(transactionIndex, 1);
            }
          }
        });
      } catch (e) {
        throw new Error(e.message);
      }
    },
    setVisible: (state, {
      data
    }) => {
      try {
        data.forEach(({
          id,
          visible
        }) => {
          if (state[id]) {
            state[id].visible = visible;
          }
        });
      } catch (e) {
        throw new Error(e.message);
      }
    }
  }
});
const register = processorManager.register;
const process = processorManager.process;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/activities/saga/index.js":
/*!****************************************************!*\
  !*** ./react-app/modules/activities/saga/index.js ***!
  \****************************************************/
/*! exports provided: actions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action */ "./react-app/modules/activities/action.js");
/* harmony import */ var _utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/actions/actionOut */ "./react-app/utils/actions/actionOut.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processor */ "./react-app/modules/activities/saga/processor.js");





const addActivity = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_ACTIVITY);
const removeActivity = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action__WEBPACK_IMPORTED_MODULE_2__["default"].REMOVE_ACTIVITY);
const beginAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action__WEBPACK_IMPORTED_MODULE_2__["default"].BEGIN_ACTION);
const endAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action__WEBPACK_IMPORTED_MODULE_2__["default"].END_ACTION);
const setVisible = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_action__WEBPACK_IMPORTED_MODULE_2__["default"].SET_VISIBLE);

function* watchAddActivityExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(addActivity.type, addActivityExternal);
}

function* watchRemoveActivityExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(removeActivity.type, removeActivityExternal);
}

function* watchBeginActionExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(beginAction.type, beginActionExternal);
}

function* watchEndActionExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(endAction.type, endActionExternal);
}

function* watchSetVisibleExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(setVisible.type, setVisibleExternal);
}

function* addActivityExternal(action) {
  try {
    const {
      id,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('addActivities', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      id
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
    throw Error(e);
  }
}

function* removeActivityExternal(action) {
  try {
    const {
      id,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('removeActivities', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      id
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
    throw new Error(e.message);
  }
}

function* beginActionExternal(action) {
  try {
    const {
      id,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('beginAction', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      id
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
    throw new Error(e.message);
  }
}

function* endActionExternal(action) {
  try {
    const {
      id,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('endAction', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      id
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
    throw new Error(e.message);
  }
}

function* setVisibleExternal(action) {
  try {
    const {
      id,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('setVisible', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      id
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
    throw new Error(e.message);
  }
}

const actions = {
  addActivity,
  removeActivity,
  beginAction,
  endAction,
  setVisible
};
/* harmony default export */ __webpack_exports__["default"] = ({
  watchAddActivityExternal,
  watchRemoveActivityExternal,
  watchBeginActionExternal,
  watchEndActionExternal,
  watchSetVisibleExternal
});

/***/ }),

/***/ "./react-app/modules/activities/saga/processor.js":
/*!********************************************************!*\
  !*** ./react-app/modules/activities/saga/processor.js ***!
  \********************************************************/
/*! exports provided: register, process, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducer */ "./react-app/modules/activities/reducer/index.js");
/* harmony import */ var _itemData_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../itemData/reducer */ "./react-app/modules/itemData/reducer/index.js");
/* harmony import */ var _solutionData_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../solutionData/reducer */ "./react-app/modules/solutionData/reducer/index.js");
/* harmony import */ var _uiData_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../uiData/reducer */ "./react-app/modules/uiData/reducer/index.js");
/* harmony import */ var _userData_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../userData/reducer */ "./react-app/modules/userData/reducer/index.js");
/* harmony import */ var _validationData_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validationData/reducer */ "./react-app/modules/validationData/reducer/index.js");
/* harmony import */ var _schema_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schema/index */ "./react-app/modules/activities/schema/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selector */ "./react-app/modules/activities/selector/index.js");
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");










const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_8__["createProcessorManager"])({
  path: 'sagas',
  name: 'activities',
  processors: {
    addActivities: payload => {
      const {
        id,
        items,
        solutions,
        activityType,
        visible = true
      } = payload;

      const addId = (list, activityId) => {
        if (!list) {
          return;
        }

        return list.map((el, key) => ({ ...el,
          id: `${activityId}_${el.index || key}`,
          activityId
        }));
      };

      const mappedItemData = addId(items, id);
      const mappedSolutionData = addId(solutions, id);
      const baseActivity = { ...payload,
        itemData: mappedItemData,
        solutionData: mappedSolutionData,
        validationType: Boolean(mappedSolutionData && mappedSolutionData.length),
        transactions: [],
        visible
      };
      delete baseActivity['items'];
      delete baseActivity['solutions'];
      const normalized = Object(_schema_index__WEBPACK_IMPORTED_MODULE_6__["normalizeActivitiesList"])([baseActivity]);
      const {
        activities,
        itemData,
        solutionData
      } = normalized.entities;
      const returnValue = [];

      if (activities) {
        returnValue.push(_reducer__WEBPACK_IMPORTED_MODULE_0__["actions"].addActivities({
          activityType,
          data: activities
        }));
      }

      if (itemData) {
        returnValue.push(_itemData_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].addItemData({
          activityType,
          data: itemData
        }));
      }

      if (solutionData) {
        returnValue.push(_solutionData_reducer__WEBPACK_IMPORTED_MODULE_2__["actions"].addSolutionData({
          activityType,
          data: solutionData
        }));
      }

      return returnValue;
    },
    removeActivities: function* ({
      id,
      activityType
    }) {
      const activity = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_9__["select"])(_selector__WEBPACK_IMPORTED_MODULE_7__["getActivityByActivityId"], {
        activityId: id,
        activityType
      });
      const ret = [_reducer__WEBPACK_IMPORTED_MODULE_0__["actions"].clearActivities({
        activityType,
        data: [activity.id]
      }), _itemData_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].clearItemData({
        activityType,
        data: activity.itemData
      }), _solutionData_reducer__WEBPACK_IMPORTED_MODULE_2__["actions"].clearSolutionData({
        activityType,
        data: activity.itemData
      }), _uiData_reducer__WEBPACK_IMPORTED_MODULE_3__["actions"].clearUIData({
        activityType,
        data: activity.itemData
      }), _userData_reducer__WEBPACK_IMPORTED_MODULE_4__["actions"].clearUserData({
        activityType,
        data: activity.itemData
      }), _validationData_reducer__WEBPACK_IMPORTED_MODULE_5__["actions"].clearValidation({
        activityType,
        data: activity.itemData
      })];
      return ret;
    },
    beginAction: ({
      id,
      activityType,
      transaction
    }) => {
      const returnValue = [_reducer__WEBPACK_IMPORTED_MODULE_0__["actions"].beginAction({
        activityType,
        data: [{
          id,
          transaction
        }]
      })];
      return returnValue;
    },
    endAction: ({
      id,
      activityType,
      transaction
    }) => {
      const returnValue = [_reducer__WEBPACK_IMPORTED_MODULE_0__["actions"].endAction({
        activityType,
        data: [{
          id,
          transaction
        }]
      })];
      return returnValue;
    },
    setVisible: ({
      id,
      activityType,
      visible
    }) => {
      const returnValue = [_reducer__WEBPACK_IMPORTED_MODULE_0__["actions"].setVisible({
        activityType,
        data: [{
          id,
          visible
        }]
      })];
      return returnValue;
    }
  }
});
const register = processorManager.register;
const process = processorManager.process;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/activities/schema/index.js":
/*!******************************************************!*\
  !*** ./react-app/modules/activities/schema/index.js ***!
  \******************************************************/
/*! exports provided: normalizeActivity, normalizeActivitiesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeActivity", function() { return normalizeActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeActivitiesList", function() { return normalizeActivitiesList; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var _screens_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../screens/schema */ "./react-app/modules/screens/schema/index.js");
/* harmony import */ var _validationData_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validationData/schema */ "./react-app/modules/validationData/schema/index.js");
/* harmony import */ var _uiData_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../uiData/schema */ "./react-app/modules/uiData/schema/index.js");
/* harmony import */ var _solutionData_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../solutionData/schema */ "./react-app/modules/solutionData/schema/index.js");
/* harmony import */ var _userData_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../userData/schema */ "./react-app/modules/userData/schema/index.js");
/* harmony import */ var _itemData_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../itemData/schema */ "./react-app/modules/itemData/schema/index.js");







const activity = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('activities', {
  screen: _screens_schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  validationData: _validationData_schema__WEBPACK_IMPORTED_MODULE_2__["default"],
  uiData: _uiData_schema__WEBPACK_IMPORTED_MODULE_3__["default"],
  solutionData: _solutionData_schema__WEBPACK_IMPORTED_MODULE_4__["default"],
  userData: _userData_schema__WEBPACK_IMPORTED_MODULE_5__["default"],
  itemData: _itemData_schema__WEBPACK_IMPORTED_MODULE_6__["default"]
});
const activities = [activity];
const normalizeActivity = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, activity);
};
const normalizeActivitiesList = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, activities);
};

/***/ }),

/***/ "./react-app/modules/activities/selector/index.js":
/*!********************************************************!*\
  !*** ./react-app/modules/activities/selector/index.js ***!
  \********************************************************/
/*! exports provided: getActivitiesAsList, getActivityByActivityId, getActivityScreenIdByActivityId, getActivityTransactionByActivityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivitiesAsList", function() { return getActivitiesAsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityByActivityId", function() { return getActivityByActivityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityScreenIdByActivityId", function() { return getActivityScreenIdByActivityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityTransactionByActivityId", function() { return getActivityTransactionByActivityId; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");



const getState = state => state.activities;

const getActivityId = (state, props) => props.activityId;

const getActivitiesAsList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createDraftSafeSelector"])([getState], activities => {
  return activities.valueSeq();
});
const getActivityByActivityId = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getState, getActivityId], (activities, id) => {
  if (!activities || !id) {
    return;
  }

  return activities[id];
})(getActivityId);
const getActivityScreenIdByActivityId = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getState, getActivityId], (activities, id) => {
  if (!activities || !id) {
    return;
  }

  return activities[id].screenId;
})(getActivityId);
const getActivityTransactionByActivityId = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getState, getActivityId], (activities, id) => {
  if (!activities || !id) {
    return;
  }

  return activities[id].transactions;
})(getActivityId);

/***/ }),

/***/ "./react-app/modules/activities/utils/return.js":
/*!******************************************************!*\
  !*** ./react-app/modules/activities/utils/return.js ***!
  \******************************************************/
/*! exports provided: organizeReturn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organizeReturn", function() { return organizeReturn; });
const organizeReturn = items => {
  return items.map(item => item.id).sort();
};

/***/ }),

/***/ "./react-app/modules/itemData/getter/index.js":
/*!****************************************************!*\
  !*** ./react-app/modules/itemData/getter/index.js ***!
  \****************************************************/
/*! exports provided: getAllItems, getMaximumScore, getItemsToValidate, getScorableItems, hasScorableItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllItems", function() { return getAllItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaximumScore", function() { return getMaximumScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsToValidate", function() { return getItemsToValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScorableItems", function() { return getScorableItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasScorableItems", function() { return hasScorableItems; });
/* harmony import */ var _activities_utils_return__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../activities/utils/return */ "./react-app/modules/activities/utils/return.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./react-app/modules/itemData/selector/index.js");
/* harmony import */ var _selector_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selector/filter */ "./react-app/modules/itemData/selector/filter.js");



const getAllItems = (state, props) => {
  const {
    activityType
  } = props;
  const items = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["select"])('getActivityItemData', activityType, [state, props]);
  return Object(_activities_utils_return__WEBPACK_IMPORTED_MODULE_0__["organizeReturn"])(items);
};
const getMaximumScore = async (state, props) => {
  const {
    activityType
  } = props;
  const items = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["select"])('getActivityItemDataScorable', activityType, [state, props]);
  return items === null || items === void 0 ? void 0 : items.length;
};
const getItemsToValidate = async (state, props) => {
  const {
    activityType
  } = props;
  let items = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["select"])('getActivityItemDataToValidate', activityType, [state, props]);
  items = Object(_selector_filter__WEBPACK_IMPORTED_MODULE_2__["filterElements"])(items, state, props);
  return Object(_activities_utils_return__WEBPACK_IMPORTED_MODULE_0__["organizeReturn"])(items);
};
const getScorableItems = async (state, props) => {
  const {
    activityType
  } = props;
  let items = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["select"])('getActivityItemDataScorable', activityType, [state, props]);
  items = Object(_selector_filter__WEBPACK_IMPORTED_MODULE_2__["filterElements"])(items, state, props);
  return Object(_activities_utils_return__WEBPACK_IMPORTED_MODULE_0__["organizeReturn"])(items);
};
const hasScorableItems = async (state, props) => {
  let items = await getScorableItems(state, props);
  return items.length > 0;
};

/***/ }),

/***/ "./react-app/modules/itemData/reducer/index.js":
/*!*****************************************************!*\
  !*** ./react-app/modules/itemData/reducer/index.js ***!
  \*****************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processor */ "./react-app/modules/itemData/reducer/processor.js");


const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'itemData',
  initialState: {},
  reducers: {
    addItemData: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('addItemData', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    },
    clearItemData: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('clearItemData', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    }
  }
}); //EXPORTS

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/itemData/reducer/processor.js":
/*!*********************************************************!*\
  !*** ./react-app/modules/itemData/reducer/processor.js ***!
  \*********************************************************/
/*! exports provided: process, register, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");

const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'reducers',
  name: 'itemData',
  processors: {
    addItemData: (state, {
      data
    }) => {
      return { ...state,
        ...data
      };
    },
    clearItemData: (state, {
      data
    }) => {
      return Object.keys(state).reduce((acc, id) => {
        if (!data.includes(id)) {
          acc[id] = state[id];
        }

        return acc;
      }, {});
    }
  }
});
const process = processorManager.process;
const register = processorManager.register;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/itemData/schema/index.js":
/*!****************************************************!*\
  !*** ./react-app/modules/itemData/schema/index.js ***!
  \****************************************************/
/*! exports provided: default, normalizeItem, normalizeItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeItem", function() { return normalizeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeItems", function() { return normalizeItems; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");

const item = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('itemData', {});
const items = [item];
/* harmony default export */ __webpack_exports__["default"] = (items);
const normalizeItem = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, item);
};
const normalizeItems = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, items);
};

/***/ }),

/***/ "./react-app/modules/itemData/selector/filter.js":
/*!*******************************************************!*\
  !*** ./react-app/modules/itemData/selector/filter.js ***!
  \*******************************************************/
/*! exports provided: filterElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterElements", function() { return filterElements; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./react-app/modules/itemData/selector/index.js");

const QUERY_FIELDS = {
  ID: 'id',
  FILLED: 'filled',
  VALIDATION: 'validation',
  ENABLED: 'enabled',
  DATATYPE: 'dataType',
  VALIDATIONTYPE: 'validationType'
};
const filterElements = (list, state, props) => {
  var _props$filter, _props$filter2;

  let retValue = list;
  let filter = props === null || props === void 0 ? void 0 : (_props$filter = props.filter) === null || _props$filter === void 0 ? void 0 : _props$filter.where;

  if (filter) {
    let elements = Object.entries(filter).map(([type, filterList]) => {
      let eles = filterList.map(filt => {
        if (filt.and || filt.or || filt.none) {
          return filterElements(list, state, { ...props,
            filter: {
              where: filt
            }
          });
        } else {
          return _filterByField(state, props, filt);
        }
      });
      let ret = eles;

      if (type === 'and') {
        ret = eles.reduce((acc, cur) => {
          return acc.filter(el => cur.includes(el));
        });
      } else if (type === 'or') {
        ret = concatUniqueValues(eles);
      }

      return ret;
    });
    elements = concatUniqueValues(elements);
    retValue = list.filter(item => elements.find(el => el.id === item.id));
  }

  if (props !== null && props !== void 0 && (_props$filter2 = props.filter) !== null && _props$filter2 !== void 0 && _props$filter2._limit) {
    var _props$filter3;

    retValue = retValue.slice(0, props === null || props === void 0 ? void 0 : (_props$filter3 = props.filter) === null || _props$filter3 === void 0 ? void 0 : _props$filter3._limit);
  }

  return retValue;
};

const _filterByField = (state, props, filter) => {
  const {
    activityType
  } = props;
  let filtered = Object.entries(filter).map(([key, value]) => {
    let method;

    switch (key) {
      case QUERY_FIELDS.ID:
        method = 'getActivityItemDataFilteredById';
        break;

      case QUERY_FIELDS.FILLED:
        method = 'getActivityItemDataFilteredByFilled';
        break;

      case QUERY_FIELDS.VALIDATION:
        method = 'getActivityItemDataFilteredByValidationData';
        break;

      case QUERY_FIELDS.ENABLED:
      case QUERY_FIELDS.VALIDATIONTYPE:
      case QUERY_FIELDS.DATATYPE:
        method = 'getActivityItemDataFilteredByUiData';
        break;

      default:
        method = null;
    }

    if (method) {
      return Object(_index__WEBPACK_IMPORTED_MODULE_0__["select"])(method, activityType, [state, { ...props,
        filter: formatFilterToSelect(key, value)
      }]);
    }
  });
  return concatUniqueValues(filtered.filter(Boolean));
};

const concatUniqueValues = list => {
  const reduced = list.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
  return [...new Set(reduced)];
};

const formatFilterToSelect = (name, filter) => {
  let type = null;
  let value = filter;

  if (filter.hasOwnProperty('_ne')) {
    type = '_ne';
    value = filter._ne;
  } else if (filter.hasOwnProperty('_nin')) {
    type = '_nin';
    value = filter._nin;
  }

  return {
    name,
    type,
    value
  };
};

/***/ }),

/***/ "./react-app/modules/itemData/selector/general.js":
/*!********************************************************!*\
  !*** ./react-app/modules/itemData/selector/general.js ***!
  \********************************************************/
/*! exports provided: getItemDataListByIds, getActivityItemData, getActivityItemDataScorable, getActivityItemDataToValidate, getActivityItemDataFilteredById, getActivityItemDataFilteredByValidationData, getActivityItemDataFilteredByUiData, getActivityItemDataFilteredByFilled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemDataListByIds", function() { return getItemDataListByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityItemData", function() { return getActivityItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityItemDataScorable", function() { return getActivityItemDataScorable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityItemDataToValidate", function() { return getActivityItemDataToValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityItemDataFilteredById", function() { return getActivityItemDataFilteredById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityItemDataFilteredByValidationData", function() { return getActivityItemDataFilteredByValidationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityItemDataFilteredByUiData", function() { return getActivityItemDataFilteredByUiData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityItemDataFilteredByFilled", function() { return getActivityItemDataFilteredByFilled; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../selector/utils */ "./react-app/selector/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./react-app/modules/itemData/selector/utils.js");
/* harmony import */ var _validationData_selector_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validationData/selector/general */ "./react-app/modules/validationData/selector/general.js");
/* harmony import */ var _userData_selector_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../userData/selector/general */ "./react-app/modules/userData/selector/general.js");
/* harmony import */ var _uiData_selector_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../uiData/selector/general */ "./react-app/modules/uiData/selector/general.js");







const getState = state => state.itemData;

const getActivityId = (state, props) => props.activityId;

const getIds = (state, props) => props.ids;

const getIdsToJson = (state, props) => JSON.stringify(props.ids.sort((a, b) => a - b));

const getFilterValue = (state, props) => {
  var _props$filter;

  return props === null || props === void 0 ? void 0 : (_props$filter = props.filter) === null || _props$filter === void 0 ? void 0 : _props$filter.value;
};

const getFilterType = (state, props) => {
  var _props$filter2;

  return props === null || props === void 0 ? void 0 : (_props$filter2 = props.filter) === null || _props$filter2 === void 0 ? void 0 : _props$filter2.type;
};

const getFilterName = (state, props) => {
  var _props$filter3;

  return props === null || props === void 0 ? void 0 : (_props$filter3 = props.filter) === null || _props$filter3 === void 0 ? void 0 : _props$filter3.name;
};

const getItemDataAsList = Object(_selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"])([getState], items => {
  if (!items) {
    return;
  }

  return Object.values(items);
});
const getItemDataListByIds = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getState, getIds], (items, ids) => {
  if (!items) {
    return;
  }

  let idsToFetch = ids || [];
  return idsToFetch.map(id => items[id]).filter(Boolean);
})(getIdsToJson, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityItemData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getItemDataAsList, getActivityId], (items, activityId) => {
  if (!items || !activityId) {
    return;
  }

  return items.filter(el => el.activityId === activityId);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityItemDataScorable = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityItemData], items => {
  if (!items) {
    return;
  }

  return items.filter(item => !item.isDistractor);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityItemDataToValidate = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityItemData, _validationData_selector_general__WEBPACK_IMPORTED_MODULE_3__["getActivityValidationData"], _userData_selector_general__WEBPACK_IMPORTED_MODULE_4__["getActivityUserData"]], (items, validationData, userData) => {
  if (!items || !validationData || !userData) {
    return;
  }

  return items.filter(item => {
    const itemUserData = userData.find(({
      id
    }) => id === item.id);
    const itemValidationData = validationData.find(el => el.id === item.id);
    return !itemValidationData || itemUserData && itemValidationData.time < itemUserData.time;
  });
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityItemDataFilteredById = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityItemData, getFilterValue, getFilterType], (items, filterValue, filterType) => {
  if (!items) {
    return;
  }

  let elements = items;

  if (filterValue) {
    const allowedIds = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mapFilterToAcceptedValues"])({
      type: filterType,
      value: filterValue
    }, elements.map(el => el.id));
    elements = elements.filter(el => allowedIds.includes(el.id));
  }

  return elements;
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityItemDataFilteredByValidationData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityItemData, _validationData_selector_general__WEBPACK_IMPORTED_MODULE_3__["getActivityValidationData"], getFilterValue, getFilterType], (items, validationData, filterValue, filterType) => {
  if (!items || !validationData) {
    return;
  }

  let elements = items;

  if (filterValue) {
    const filterTo = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mapFilterToAcceptedValues"])({
      type: filterType,
      value: filterValue
    }, ['correct', 'incorrect', null]);
    elements = items.filter(item => {
      let itemValData = validationData.find(el => el.id === item.id);
      return !itemValData && filterTo.includes(null) || itemValData && itemValData.correct && filterTo.includes('correct') || itemValData && !itemValData.correct && filterTo.includes('incorrect');
    });
  }

  return elements;
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityItemDataFilteredByUiData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityItemData, _uiData_selector_general__WEBPACK_IMPORTED_MODULE_5__["getActivityUIData"], getFilterValue, getFilterType, getFilterName], (items, uiData, filterValue, filterType, filterName) => {
  if (!items || !uiData) {
    return;
  }

  let elements = items;

  if (filterValue && filterName) {
    const validValues = {
      'validationType': ['correct_incorrect', 'correct_incorrect_empty', null],
      'dataType': ['user', 'solution', null],
      'enabled': [true, false]
    };
    const filterTo = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mapFilterToAcceptedValues"])({
      type: filterType,
      value: filterValue
    }, validValues[filterName]);
    elements = items.filter(item => {
      let itemUiData = uiData.find(el => el.id === item.id);
      return itemUiData && filterTo.includes(itemUiData[filterName]);
    });
  }

  return elements;
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityItemDataFilteredByFilled = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityItemData, _userData_selector_general__WEBPACK_IMPORTED_MODULE_4__["getActivityUserData"], getFilterType, getFilterValue], (items, userData, filterType, filterValue) => {
  if (!items || !userData) {
    return;
  }

  let elements = items;

  if (filterType && filterValue) {
    const filterTo = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mapFilterToAcceptedValues"])({
      type: filterType,
      value: filterValue
    }, [true, false]);
    elements = items.filter(item => {
      let itemUserData = userData.find(el => el.id === item.id);
      return (!itemUserData || !item.userData.value) && filterTo.includes(false) || itemUserData && itemUserData.value && filterTo.includes(true);
    });
  }

  return elements;
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});

/***/ }),

/***/ "./react-app/modules/itemData/selector/index.js":
/*!******************************************************!*\
  !*** ./react-app/modules/itemData/selector/index.js ***!
  \******************************************************/
/*! exports provided: select, register, selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return selectors; });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "./react-app/modules/itemData/selector/general.js");
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");


const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_1__["createProcessorManager"])({
  path: 'selectors',
  name: 'itemData',
  processors: { ..._general__WEBPACK_IMPORTED_MODULE_0__
  }
});
const select = processorManager.process;
const register = processorManager.register;
const selectors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/itemData/selector/utils.js":
/*!******************************************************!*\
  !*** ./react-app/modules/itemData/selector/utils.js ***!
  \******************************************************/
/*! exports provided: mapFilterToAcceptedValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFilterToAcceptedValues", function() { return mapFilterToAcceptedValues; });
const mapFilterToAcceptedValues = ({
  type,
  value
}, validValues) => {
  let filteredValues = [];

  if (!type) {
    if (Array.isArray(value)) {
      filteredValues = value;
    } else if (validValues.includes(value)) {
      filteredValues.push(value);
    }
  } else {
    if (type === '_ne') {
      filteredValues = validValues.filter(k => k !== value);
    } else if (type === '_nin') {
      filteredValues = validValues.filter(k => !value.includes(k));
    }
  }

  return filteredValues;
};

/***/ }),

/***/ "./react-app/modules/lo/actions/index.js":
/*!***********************************************!*\
  !*** ./react-app/modules/lo/actions/index.js ***!
  \***********************************************/
/*! exports provided: actionsConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionsConstants", function() { return actionsConstants; });
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../actions/constants */ "./react-app/actions/constants.js");

const actionsConstants = _actions_constants__WEBPACK_IMPORTED_MODULE_0__["default"].lo;

/***/ }),

/***/ "./react-app/modules/lo/features/index.js":
/*!************************************************!*\
  !*** ./react-app/modules/lo/features/index.js ***!
  \************************************************/
/*! exports provided: default, actions, sagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return sagas; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _options_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options/reducer */ "./react-app/modules/lo/features/options/reducer.js");
/* harmony import */ var _options_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options/saga */ "./react-app/modules/lo/features/options/saga.js");
/* harmony import */ var _screens_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/reducer */ "./react-app/modules/lo/features/screens/reducer.js");




const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  options: _options_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  screens: _screens_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);
const actions = { ..._options_saga__WEBPACK_IMPORTED_MODULE_2__["actions"]
};
const sagas = { ..._options_saga__WEBPACK_IMPORTED_MODULE_2__["sagas"]
};

/***/ }),

/***/ "./react-app/modules/lo/features/options/reducer.js":
/*!**********************************************************!*\
  !*** ./react-app/modules/lo/features/options/reducer.js ***!
  \**********************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
 //INTERNAL ACTIONS

const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'options',
  initialState: {},
  reducers: {
    setLoOptions: (state, action) => {
      const options = action.payload;
      return { ...state,
        ...options
      };
    }
  }
}); //EXPORTS

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/lo/features/options/saga.js":
/*!*******************************************************!*\
  !*** ./react-app/modules/lo/features/options/saga.js ***!
  \*******************************************************/
/*! exports provided: watchSetLoOptionsExternal, actions, sagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchSetLoOptionsExternal", function() { return watchSetLoOptionsExternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return sagas; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./react-app/modules/lo/actions/index.js");
/* harmony import */ var _options_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../options/selector */ "./react-app/modules/options/selector/index.js");
/* harmony import */ var _utils_optionsValidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/optionsValidate */ "./react-app/utils/optionsValidate.js");
/* harmony import */ var _utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/actions/actionOut */ "./react-app/utils/actions/actionOut.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer */ "./react-app/modules/lo/features/options/reducer.js");







const setLoOptions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createAction"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actionsConstants"].SET_LO_OPTIONS);
function* watchSetLoOptionsExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(setLoOptions.type, setLoOptionsExternal);
}

function* setLoOptionsExternal(action) {
  try {
    const ids = Object.keys(action.payload);
    const optionsValues = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_options_selector__WEBPACK_IMPORTED_MODULE_3__["getOptionsById"], {
      ids
    });
    const validatedOptions = Object(_utils_optionsValidate__WEBPACK_IMPORTED_MODULE_4__["optionsValidate"])(action.payload, optionsValues, 'lo');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_reducer__WEBPACK_IMPORTED_MODULE_6__["actions"].setLoOptions(validatedOptions));
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_5__["actionSuccess"])(action);
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_5__["actionError"])(action, e);
  }
}

const actions = {
  setLoOptions
};
const sagas = {
  watchSetLoOptionsExternal
};

/***/ }),

/***/ "./react-app/modules/lo/features/screens/reducer.js":
/*!**********************************************************!*\
  !*** ./react-app/modules/lo/features/screens/reducer.js ***!
  \**********************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _screens_features_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../screens/features/reducer */ "./react-app/modules/screens/features/reducer.js");

 //INTERNAL ACTIONS

const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'options',
  initialState: [],
  extraReducers: {
    [_screens_features_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].addScreens.type]: (state, action) => {
      const screens = action.payload;
      const newScreens = [];
      Object.values(screens).forEach(({
        id
      }) => {
        if (!state.find(el => el === id)) {
          newScreens.push(id);
        }
      });
      return state.concat(newScreens);
    }
  }
}); //EXPORTS

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/options/features/index.js":
/*!*****************************************************!*\
  !*** ./react-app/modules/options/features/index.js ***!
  \*****************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _optionsList_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optionsList/reducer */ "./react-app/modules/options/features/optionsList/reducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  optionList: _optionsList_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);
const actions = { ..._optionsList_reducer__WEBPACK_IMPORTED_MODULE_0__["actions"]
};

/***/ }),

/***/ "./react-app/modules/options/features/optionsList/reducer.js":
/*!*******************************************************************!*\
  !*** ./react-app/modules/options/features/optionsList/reducer.js ***!
  \*******************************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'optionList',
  initialState: {},
  reducers: {
    setOptionsList(state, action) {
      const {
        optionsList
      } = action.payload;
      state = optionsList;
      return state;
    }

  }
});
/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/options/selector/index.js":
/*!*****************************************************!*\
  !*** ./react-app/modules/options/selector/index.js ***!
  \*****************************************************/
/*! exports provided: getOptionName, getOptionList, getOptionListAsList, getOptionById, getOptionsById, getOptionByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _optionsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optionsList */ "./react-app/modules/options/selector/optionsList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionName", function() { return _optionsList__WEBPACK_IMPORTED_MODULE_0__["getOptionName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionList", function() { return _optionsList__WEBPACK_IMPORTED_MODULE_0__["getOptionList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionListAsList", function() { return _optionsList__WEBPACK_IMPORTED_MODULE_0__["getOptionListAsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionById", function() { return _optionsList__WEBPACK_IMPORTED_MODULE_0__["getOptionById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionsById", function() { return _optionsList__WEBPACK_IMPORTED_MODULE_0__["getOptionsById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionByName", function() { return _optionsList__WEBPACK_IMPORTED_MODULE_0__["getOptionByName"]; });



/***/ }),

/***/ "./react-app/modules/options/selector/optionsList.js":
/*!***********************************************************!*\
  !*** ./react-app/modules/options/selector/optionsList.js ***!
  \***********************************************************/
/*! exports provided: getOptionName, getOptionList, getOptionListAsList, getOptionById, getOptionsById, getOptionByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionName", function() { return getOptionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionList", function() { return getOptionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionListAsList", function() { return getOptionListAsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionById", function() { return getOptionById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionsById", function() { return getOptionsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionByName", function() { return getOptionByName; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/snakeCase */ "./node_modules/lodash/snakeCase.js");
/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_snakeCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_optionsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/optionsList */ "./react-app/modules/options/utils/optionsList.js");





const getState = state => state.options;

const getOptionId = (state, props) => props.id;

const getOptionsIds = (state, props) => props.ids;

const getOptionName = (state, props, optionName) => optionName;
const getOptionList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createDraftSafeSelector"])(getState, options => options.optionList);
const getOptionListAsList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createDraftSafeSelector"])(getOptionList, optionList => {
  if (!optionList) {
    return;
  }

  return Object.values(optionList);
});
const getOptionById = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createDraftSafeSelector"])([getOptionList, getOptionId], (optionList, id) => {
  if (!id || !optionList) {
    return;
  }

  return optionList[id];
});
const getOptionsById = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createDraftSafeSelector"])([getOptionList, getOptionsIds], (optionList, ids) => {
  if (!ids || !_utils_optionsList__WEBPACK_IMPORTED_MODULE_3__["default"]) {
    return;
  }

  return ids.reduce((acc, id) => {
    const v = optionList[id];

    if (v) {
      acc[id] = v;
    }

    return acc;
  }, {});
});
const getOptionByName = re_reselect__WEBPACK_IMPORTED_MODULE_1___default()([getOptionListAsList, getOptionName], (optionlist, name) => {
  if (!name || !optionlist) {
    return;
  }

  return optionlist.find(el => lodash_snakeCase__WEBPACK_IMPORTED_MODULE_2___default()(el.name) === lodash_snakeCase__WEBPACK_IMPORTED_MODULE_2___default()(name));
})(getOptionName);

/***/ }),

/***/ "./react-app/modules/options/utils/index.js":
/*!**************************************************!*\
  !*** ./react-app/modules/options/utils/index.js ***!
  \**************************************************/
/*! exports provided: loadOptionsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOptionsList", function() { return loadOptionsList; });
/* harmony import */ var _features___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/ */ "./react-app/modules/options/features/index.js");
/* harmony import */ var _optionsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionsList */ "./react-app/modules/options/utils/optionsList.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./react-app/store/index.js");



const loadOptionsList = () => {
  Object(_store__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(_features___WEBPACK_IMPORTED_MODULE_0__["actions"].setOptionsList({
    optionsList: _optionsList__WEBPACK_IMPORTED_MODULE_1__["default"]
  }));
};

/***/ }),

/***/ "./react-app/modules/options/utils/optionsList.js":
/*!********************************************************!*\
  !*** ./react-app/modules/options/utils/optionsList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* this is generated from options.xml, don't edit */
/* harmony default export */ __webpack_exports__["default"] = ({
  "1": {
    "id": 1,
    "name": "Dictionary",
    "description": "Enables user access to a dictionary",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "6": {
    "id": 6,
    "name": "Notes area",
    "description": "Enables the Notes area in the user interface With text formatting functions",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "9": {
    "id": 9,
    "name": "Interactive Phonemic Chart",
    "description": "Enables access to a Interactive phonemic chart",
    "scope": "global",
    "type": "Function",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "21": {
    "id": 21,
    "name": "Reveal Object",
    "description": "Enables a Reveal button for presentation of text / image",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "all",
      "label": "All"
    }, {
      "key": "progressive",
      "label": "Progressive"
    }, {
      "key": "progressiveplushide",
      "label": "Progressive plus Hide"
    }]
  },
  "23": {
    "id": 23,
    "name": "Pin object",
    "description": "Enables the display of a single media object across a configurable number of screens. For one object only. 2-level option:\\nActivity Global Options: Off / On\\nSupplements - Asset properties: Not Pinned / All / Pinned n",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "25": {
    "id": 25,
    "name": "Previous",
    "description": "Enables a Previous button",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "true",
      "label": "On"
    }, {
      "key": "false",
      "label": "Off"
    }, {
      "key": "afterSubmitted",
      "label": "After submitted"
    }]
  },
  "26": {
    "id": 26,
    "name": "Forward Button",
    "description": "Enables editing of Forward button to set parameters and paths for progression",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "next",
      "label": "Next"
    }, {
      "key": "adaptive",
      "label": "Adaptive",
      "suboption": {
        "description": "",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "27": {
    "id": 27,
    "name": "Enumeration",
    "description": "Enables enumeration to the displayed and parameters set.",
    "scope": "Global",
    "type": "Controls",
    "granularity": "Project, LO, Screen",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "No enumeration"
    }, {
      "key": "number",
      "label": "1."
    }, {
      "key": "number_no_dot",
      "label": "1"
    }, {
      "key": "letter",
      "label": "a)"
    }, {
      "key": "capitalletter",
      "label": "A."
    }, {
      "key": "bullet",
      "label": "Bullet points"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "A custom enumeration in the format Label1|Label2|Label3...",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "28": {
    "id": 28,
    "name": "Enumeration Answers",
    "description": "Enables enumeration of the answer options to be displayed and parameters set.",
    "scope": "Global",
    "type": "Controls",
    "granularity": "Project, LO, Screen",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "False"
    }, {
      "key": "number",
      "label": "1."
    }, {
      "key": "number_no_dot",
      "label": "1"
    }, {
      "key": "letter",
      "label": "a)"
    }, {
      "key": "capitalletter",
      "label": "A."
    }, {
      "key": "bullet",
      "label": "Bullet points"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "A custom enumeration in the format Label1|Label2|Label3...",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "29": {
    "id": 29,
    "name": "Prefill",
    "description": "Enables initial answer item(s) to be displayed  ",
    "scope": "Global",
    "type": "Controls",
    "granularity": "Project, LO, Screen",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "No prefill"
    }, {
      "key": "firstitem",
      "label": "First gap"
    }, {
      "key": "firstblock",
      "label": "First paragraph"
    }]
  },
  "34": {
    "id": 34,
    "name": "Gaptext audio",
    "description": "Disables the TTS for gaps",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "38": {
    "id": 38,
    "name": "Speak learner input",
    "description": "Enables learner input to be spoken by TTS",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "40": {
    "id": 40,
    "name": "Feedback",
    "description": "Defines the timing and nature of feedback",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "normal",
      "label": "Normal"
    }, {
      "key": "instant",
      "label": "Instant"
    }]
  },
  "43": {
    "id": 43,
    "name": "Feedback Sound Effects",
    "description": "Defines feedback sound effects and parameters",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "custom value",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "44": {
    "id": 44,
    "name": "Sound Effects",
    "description": "Enables sound effects for the activity actions [excluding Feedback]",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "none",
      "label": "None"
    }, {
      "key": "sound_effects",
      "label": "Sound effects"
    }]
  },
  "45": {
    "id": 45,
    "name": "Try Again",
    "description": "Defines the behaviour of the Try again button",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "lock",
      "label": "Keep correct answers",
      "suboption": {
        "description": "Hide at 100%",
        "valueType": "secondMultiselect",
        "valueFormat": "string"
      }
    }, {
      "key": "frozen",
      "label": "Freeze correct answers",
      "suboption": {
        "description": "Hide at 100%",
        "valueType": "secondMultiselect",
        "valueFormat": "string"
      }
    }, {
      "key": "clear",
      "label": "Clear all",
      "suboption": {
        "description": "Hide at 100%",
        "valueType": "secondMultiselect",
        "valueFormat": "string"
      }
    }, {
      "key": "keepall",
      "label": "Keep all",
      "suboption": {
        "description": "Hide at 100%",
        "valueType": "secondMultiselect",
        "valueFormat": "string"
      }
    }]
  },
  "46": {
    "id": 46,
    "name": "Score Values",
    "description": "Defines how much each question, or group of questions, is worth",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "Project, LO, Screen",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "1_point_action",
      "label": "1 point per action"
    }, {
      "key": "1_point_question",
      "label": "1 point per question"
    }]
  },
  "47": {
    "id": 47,
    "name": "End Result Screen",
    "description": "Enables the End result screen and sets the parameters",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On",
      "suboption": {
        "description": "Name of button (back to exercises|endresults)",
        "valueType": "textarea",
        "valueFormat": "string"
      }
    }, {
      "key": "buttonAfterScore",
      "label": "After score",
      "suboption": {
        "description": "Name of button (back to exercises|endresults)",
        "valueType": "textarea",
        "valueFormat": "string"
      }
    }]
  },
  "50": {
    "id": 50,
    "name": "Progress Bar",
    "description": "Enables display of a progress bar for LO",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "true",
      "label": "On"
    }, {
      "key": "false",
      "label": "Off"
    }, {
      "key": "auto",
      "label": "Auto"
    }, {
      "key": "screenSelection",
      "label": "Screen Selection"
    }]
  },
  "51": {
    "id": 51,
    "name": "Automatic Next",
    "description": "Enables automatic passage from screen to screen and sets the parameters",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "questions",
      "label": "Questions"
    }, {
      "key": "timer",
      "label": "Timer",
      "suboption": {
        "description": "Time in seconds",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "52": {
    "id": 52,
    "name": "Audio support",
    "description": "Enables audio support for text items",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "54": {
    "id": 54,
    "name": "Printable",
    "description": "Enables Print button and Editor/writer to add objects to Print list",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "56": {
    "id": 56,
    "name": "Image As Trigger",
    "description": "Enables clicking on the image to initiate defined behaviour",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "72": {
    "id": 72,
    "name": "Conserve-answers",
    "description": "Enables the conservation of the user's responses within the LO for the entire session",
    "scope": "Global",
    "type": "Function",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "true",
      "label": "On"
    }, {
      "key": "false",
      "label": "Off"
    }]
  },
  "107": {
    "id": 107,
    "name": "Add Text Object",
    "description": "Always available on Actions:rubric, Actions:Content & Actions:Supplementary panes",
    "scope": "Global",
    "type": "Editorial",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "No"
    }, {
      "key": "normal",
      "label": "Yes"
    }]
  },
  "109": {
    "id": 109,
    "name": "Use Click Click",
    "description": "Enables a drag and drop activity to use 'click and click' functionality instead of 'drag and drop'",
    "scope": "Order:Match;Order:Sort;Order:Sequence",
    "type": "Function",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "111": {
    "id": 111,
    "name": "Pool Alignment",
    "description": "Defines where the pool will be displayed.",
    "scope": "Order:Match:Pairs;Order:Match:Text gap;Order:Match:Text gap (Label an object);Order:Match:Number pyramid (Drag);Order:Sort:Sorting;Order:Sort:Box drop;Order:Sort:Number stacks;Input:Completion:Text gap;Input:Completion:Text gap (Label an object);Input:Completion:Number pyramid;Order:Match:Number pyramid;Identify:Mark:Colouring",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "none",
      "label": "No pool"
    }, {
      "key": "top",
      "label": "Top"
    }, {
      "key": "bottom",
      "label": "Bottom"
    }, {
      "key": "left",
      "label": "Left"
    }, {
      "key": "right",
      "label": "Right"
    }, {
      "key": "free",
      "label": "Free"
    }]
  },
  "112": {
    "id": 112,
    "name": "Pair alignment",
    "description": "Defines whether pairs are side-by-side, above-below or one on top of the other. Note: if on top, which means that the drag item is the same size as the desination, then the screen must be divided into 2 equally-sized spaces.",
    "scope": "Order:Match:Pairs",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "ontop",
      "label": "On top"
    }, {
      "key": "horizontal",
      "label": "Horizontal"
    }, {
      "key": "vertical",
      "label": "Vertical"
    }]
  },
  "113": {
    "id": 113,
    "name": "Gaps",
    "description": "Defines the size of the answer gaps, or if displayed or not",
    "scope": "Order:Match:Text gap;Order:Match:Text gap (Label an object);Input:Completion:Text gap;Input:Completion:Text gap (Label an object);Input:Completion:Number pyramid;Order:Match:Number pyramid;Input:Completion:Maths;Input:Completion:Number wall",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "variable",
      "label": "Variable"
    }, {
      "key": "samelongest",
      "label": "Same (longest answer)"
    }, {
      "key": "invisible",
      "label": "Invisible"
    }, {
      "key": "fixed",
      "label": "Fixed"
    }]
  },
  "114": {
    "id": 114,
    "name": "Save",
    "description": "Enables the display of the Save button on the user's screen to save entered text either for subsequent screen or session.",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "skinbutton",
      "label": "Skin Button"
    }, {
      "key": "button_only",
      "label": "Button only"
    }]
  },
  "118": {
    "id": 118,
    "name": "Error Correction",
    "description": "Enables the writer to select words to replace and/or highlight and the user to replace or type in the answer",
    "scope": "Input:Completion:Text correction",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "replace",
      "label": "Replace the word"
    }, {
      "key": "line",
      "label": "End of line"
    }, {
      "key": "sentence",
      "label": "Sentence"
    }]
  },
  "119": {
    "id": 119,
    "name": "Signal Error",
    "description": "Enables method of signalling error to the user in text",
    "scope": "Input:Completion:Text correction",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "highlight",
      "label": "Highlight"
    }, {
      "key": "buttonAfterAttempts",
      "label": "Button after attempts"
    }, {
      "key": "button",
      "label": "Button always on"
    }]
  },
  "120": {
    "id": 120,
    "name": "Max Length",
    "description": "Define the maximum length of entered text & displays word counter",
    "scope": "Input:Creative:Extended writing",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "words",
      "label": "Words",
      "suboption": {
        "description": "A maximum length of entered words",
        "valueType": "input",
        "valueFormat": "string"
      }
    }, {
      "key": "chars",
      "label": " Characters",
      "suboption": {
        "description": "A maximum length of entered characters",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "122": {
    "id": 122,
    "name": "Multiple Destinations",
    "description": "Enables multiple destinations for the same drag item or linking line",
    "scope": "Order:Match:Text gap;Order:Match:Text gap (Label an object);Order:Sort:Sorting;Order:Sort:Number stacks",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "one",
      "label": "No"
    }, {
      "key": "unlimited",
      "label": "Unlimited"
    }, {
      "key": "restricted",
      "label": "Restricted"
    }]
  },
  "128": {
    "id": 128,
    "name": "Drop Indicator",
    "description": "Enables display of symbol when drag item is approaching destination",
    "scope": "Order:Match:Pairs;Order:Match:Text gap;Order:Match:Text gap (Label an object);Order:Match:Number pyramid (Drag);Order:Sequence:Sequence;Order:Sort:Sorting;Order:Sort:Box drop;Order:Sort:Number stacks",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "true",
      "label": "On"
    }, {
      "key": "false",
      "label": "Off"
    }]
  },
  "148": {
    "id": 148,
    "name": "Card Back",
    "description": "Defines the design of the Pelmanism/Flashcard card backs",
    "scope": "Identify:Select:Pelmanism",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "default",
      "label": "Default"
    }, {
      "key": "defaultsets",
      "label": "Default sets"
    }, {
      "key": "image",
      "label": "Image"
    }, {
      "key": "imagesets",
      "label": "Image sets"
    }]
  },
  "149": {
    "id": 149,
    "name": "Card Layout",
    "description": "Defines how the Pelmanism cards are laid out on opening",
    "scope": "Identify:Select:Pelmanism",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "default",
      "label": "Default"
    }, {
      "key": "sets",
      "label": "Sets"
    }]
  },
  "150": {
    "id": 150,
    "name": "Card Format",
    "description": "Defines the format of the Pelmanism card fronts",
    "scope": "Identify:Select:Pelmanism;Present:Present:Flashcards",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "portrait",
      "label": "Portrait"
    }, {
      "key": "landscape",
      "label": "Landscape"
    }, {
      "key": "square",
      "label": "Square"
    }]
  },
  "154": {
    "id": 154,
    "name": "Linking Lines Sets",
    "description": "Defines wheter sets make pairs or triplets",
    "scope": "Identify:Select:Linking lines",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "pairs",
      "label": "Pairs"
    }, {
      "key": "triplets",
      "label": "Triplets"
    }, {
      "key": "quadruples",
      "label": "Quadruples"
    }, {
      "key": "quintuples",
      "label": "Quintuples"
    }]
  },
  "158": {
    "id": 158,
    "name": "Size",
    "description": "Defines the number of cells in Wordsearch.",
    "scope": "Identify:Mark:Wordsearch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "input",
    "valueFormat": "string",
    "values": [{
      "key": "dummy",
      "label": "dummy"
    }]
  },
  "160": {
    "id": 160,
    "name": "Case",
    "description": "Defines display of letters",
    "scope": "Identify:Mark:Wordsearch;Input:Completion:Crossword",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "upper",
      "label": "Upper"
    }, {
      "key": "lower",
      "label": "Lower"
    }]
  },
  "162": {
    "id": 162,
    "name": "Stay in view",
    "description": "It fixes an object in place so that it doesn't scroll with the rest of the page",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "300": {
    "id": 300,
    "name": "Drag Alignment",
    "description": "If the drags are sorted horizontally or vertically.",
    "scope": "Order:Sequence:Sequence",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "vertical",
      "label": "Vertical"
    }, {
      "key": "horizontal",
      "label": "Horizontal"
    }, {
      "key": "horizontal_single_word",
      "label": "Horizontal (single word)"
    }]
  },
  "302": {
    "id": 302,
    "name": "Hide Radiobuttons",
    "description": "Switching off the radiobuttons (clicking the answer replaces checking the radiobutton)",
    "scope": "Identify:Select:Radiobutton;Identify:Select:Radiobutton columns",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Don't hide"
    }, {
      "key": "true",
      "label": "Hide"
    }, {
      "key": "custom",
      "label": "Custom"
    }]
  },
  "305": {
    "id": 305,
    "name": "Clue position",
    "description": "Clues are listed next to the grid, or inside (In grid, outside of grid)",
    "scope": "Input:Completion:Crossword",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "inside",
      "label": "Inside with mouseover"
    }, {
      "key": "outside",
      "label": "Outside the grid"
    }]
  },
  "306": {
    "id": 306,
    "name": "Choice Alignment",
    "description": "Horizontal or vertical display",
    "scope": "Identify:Select:Radiobutton;Identify:Select:Checkbox;Identify:Select:Dropdown",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "vertical",
      "label": "Vertical"
    }, {
      "key": "horizontal",
      "label": "Horizontal"
    }, {
      "key": "inline",
      "label": "Inline"
    }]
  },
  "311": {
    "id": 311,
    "name": "Check Answers",
    "description": "Checks the learner's answers",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "always",
      "label": "Always"
    }, {
      "key": "false",
      "label": "Off"
    }, {
      "key": "afterOne",
      "label": "After one answer"
    }, {
      "key": "afterAll",
      "label": "After all answers"
    }, {
      "key": "beforeSubmitted",
      "label": "Before submitted"
    }]
  },
  "312": {
    "id": 312,
    "name": "See Answers",
    "description": "Enables/Disables the see answers button",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "on",
      "label": "On"
    }, {
      "key": "off",
      "label": "Off"
    }, {
      "key": "beforeInteraction",
      "label": "Before Interaction"
    }]
  },
  "313": {
    "id": 313,
    "name": "Reset",
    "description": "Enables/Disables the reset button",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "on",
      "label": "On"
    }, {
      "key": "off",
      "label": "Off"
    }, {
      "key": "beforeSubmitted",
      "label": "Before submitted"
    }]
  },
  "315": {
    "id": 315,
    "name": "Submissions",
    "description": "Sends the score to the gradebook, which cannot be changed.",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "1",
      "label": "1"
    }, {
      "key": "2",
      "label": "2"
    }, {
      "key": "3",
      "label": "3"
    }, {
      "key": "4",
      "label": "4"
    }, {
      "key": "5",
      "label": "5"
    }, {
      "key": "6",
      "label": "6"
    }, {
      "key": "7",
      "label": "7"
    }, {
      "key": "8",
      "label": "8"
    }, {
      "key": "9",
      "label": "9"
    }, {
      "key": "10",
      "label": "10"
    }, {
      "key": "11",
      "label": "11"
    }, {
      "key": "12",
      "label": "12"
    }, {
      "key": "13",
      "label": "13"
    }, {
      "key": "14",
      "label": "14"
    }, {
      "key": "15",
      "label": "15"
    }, {
      "key": "16",
      "label": "16"
    }, {
      "key": "17",
      "label": "17"
    }, {
      "key": "18",
      "label": "18"
    }, {
      "key": "19",
      "label": "19"
    }, {
      "key": "20",
      "label": "20"
    }, {
      "key": "unlimited",
      "label": "Unlimited"
    }]
  },
  "317": {
    "id": 317,
    "name": "Running score",
    "description": "Updates the score with each answer. The score is then displayed permanently in the skin",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "318": {
    "id": 318,
    "name": "Show hints",
    "description": "Controls when the Hints button appears, either always or depending on the score of the use",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "always",
      "label": "Always"
    }, {
      "key": "checkScore",
      "label": "Check Score",
      "suboption": {
        "description": "",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "319": {
    "id": 319,
    "name": "Hints",
    "description": "Enables a hint button, with a set number of hints",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "json",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Hint list",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "322": {
    "id": 322,
    "name": "Delayed Feedback",
    "description": "Delays feedback for a number of screens, at which point the feedback will be cumulative",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "custom value",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "323": {
    "id": 323,
    "name": "Case Insensitive",
    "description": "If selected by the writer, the scoring ignores case",
    "scope": "Input:Completion:Text correction;Input:Completion:Text gap;Input:Completion:Text gap (Label an object);Input:Creative:Extended writing",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "324": {
    "id": 324,
    "name": "Ignore Punctuation",
    "description": "If selected by the writer, the scoring ignores punctuation",
    "scope": "Input:Completion:Text correction;Input:Completion:Text gap;Input:Completion:Text gap (Label an object);Input:Creative:Extended writing",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "326": {
    "id": 326,
    "name": "Randomise answers",
    "description": "If turned off, the writer can decide how the answer options are displayed",
    "scope": "Identify:Mark:Marking;Identify:Select:Radiobutton;Identify:Select:Checkbox;Identify:Select:Dropdown;Order:Match:Text gap;Identify:Select:Linking multiple lines;Present:Present:Slideshow;Identify:Select:Catch;Identify:Select:Linking lines;Input:Completion:Text gap;Input:Completion:Text gap (Label an object);Identify:Select:Radiobutton voice",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "true",
      "label": "On"
    }, {
      "key": "false",
      "label": "Off"
    }]
  },
  "327": {
    "id": 327,
    "name": "Card Per Row",
    "description": "Set the number of cards in a row",
    "scope": "Identify:Select:Pelmanism",
    "type": "Design",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "cards",
      "label": "Cards",
      "suboption": {
        "description": "Set the number of cards in a row",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "330": {
    "id": 330,
    "name": "Hide Checkboxes",
    "description": "Switching off the checkboxes (clicking the answer replaces checking the checkboxes)",
    "scope": "Identify:Select:Checkbox",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Don't hide"
    }, {
      "key": "true",
      "label": "Hide"
    }]
  },
  "334": {
    "id": 334,
    "name": "Show Submit",
    "description": "What has to be solved to activate submit button.",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "always",
      "label": "Always",
      "suboption": {
        "description": "subvalues",
        "valueType": "input",
        "valueFormat": "json"
      }
    }, {
      "key": "off",
      "label": "Off"
    }, {
      "key": "afterOne",
      "label": "After one answer",
      "suboption": {
        "description": "subvalues",
        "valueType": "input",
        "valueFormat": "json"
      }
    }, {
      "key": "afterAll",
      "label": "After all answers",
      "suboption": {
        "description": "subvalues",
        "valueType": "input",
        "valueFormat": "json"
      }
    }, {
      "key": "eachScreen",
      "label": "Displayed on each screen",
      "suboption": {
        "description": "subvalues",
        "valueType": "input",
        "valueFormat": "json"
      }
    }]
  },
  "335": {
    "id": 335,
    "name": "Finish Submit",
    "description": "Finish.",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "336": {
    "id": 336,
    "name": "Show Forward",
    "description": "If and when to display/enable the next button.",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "always",
      "label": "Always"
    }, {
      "key": "off",
      "label": "Off"
    }, {
      "key": "afterOne",
      "label": "After one answer"
    }, {
      "key": "afterSubmitted",
      "label": "After submitted"
    }, {
      "key": "afterAll",
      "label": "After all answers"
    }, {
      "key": "afterCheckAnswers",
      "label": "After Check Answers",
      "suboption": {
        "description": "",
        "valueType": "input",
        "valueFormat": "string"
      }
    }, {
      "key": "afterSeeAnswers",
      "label": "After see answers",
      "suboption": {
        "description": "",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "337": {
    "id": 337,
    "name": "Target zones",
    "description": "Enables individually displayed target zones",
    "scope": "Order:Sort:Sorting",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "Off"
    }, {
      "key": "true",
      "label": "On"
    }]
  },
  "340": {
    "id": 340,
    "name": "Validation message",
    "description": "Define validation message displayed when activity is completed",
    "scope": "Identify:Select:Checkbox;Identify:Mark:Marking;Identify:Mark:Wordsnake;Identify:Mark:Wordsearch;Input:Completion:Text correction",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "341": {
    "id": 341,
    "name": "Autosave",
    "description": "Saves when user leaves page and periodically every minute and when navigating.",
    "scope": "Global",
    "type": "Editorial",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "on",
      "label": "On"
    }, {
      "key": "off",
      "label": "Off"
    }]
  },
  "342": {
    "id": 342,
    "name": "Intro Screen",
    "description": "Enables the Intro screen and sets the parameters",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "345": {
    "id": 345,
    "name": "Manual Marking",
    "description": "If on, exercise needs to be manually marked.",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "346": {
    "id": 346,
    "name": "Feedback Band 1",
    "description": "Define high band feedback message displayed when activity is completed",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "347": {
    "id": 347,
    "name": "Feedback Band 2",
    "description": "Define upper middle band feedback message displayed when activity is completed",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "348": {
    "id": 348,
    "name": "Feedback Band 3",
    "description": "Define lower middle band feedback message displayed when activity is completed",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "349": {
    "id": 349,
    "name": "Feedback Band 4",
    "description": "Define low band feedback message displayed when activity is completed",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "352": {
    "id": 352,
    "name": "Special characters - Student",
    "description": "Enables special character sets in the player for the student.",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "multiselect",
    "valueFormat": "json",
    "values": [{
      "key": "Scientific_Characters",
      "label": "Scientific Characters"
    }, {
      "key": "Ancient_Greek",
      "label": "Ancient Greek"
    }, {
      "key": "Danish",
      "label": "Danish"
    }, {
      "key": "French",
      "label": "French"
    }, {
      "key": "German",
      "label": "German"
    }, {
      "key": "Polish",
      "label": "Polish"
    }, {
      "key": "Spanish",
      "label": "Spanish"
    }, {
      "key": "Swedish",
      "label": "Swedish"
    }, {
      "key": "Turkish",
      "label": "Turkish"
    }, {
      "key": "Arithmetic_Operators",
      "label": "Arithmetic Operators"
    }]
  },
  "353": {
    "id": 353,
    "name": "Activity Feedback Band 1",
    "description": "Define high band feedback message displayed when activity is completed",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "354": {
    "id": 354,
    "name": "Activity Feedback Band 2",
    "description": "Define upper middle band feedback message displayed when activity is completed",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "355": {
    "id": 355,
    "name": "Activity Feedback Band 3",
    "description": "Define lower middle band feedback message displayed when activity is completed",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "356": {
    "id": 356,
    "name": "Activity Feedback Band 4",
    "description": "Define low band feedback message displayed when activity is completed",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "None"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "357": {
    "id": 357,
    "name": "Activity Feedback Thresholds",
    "description": "Define band feedback thresholds in %",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "max 3 numbers, seperated with ,. \"33,66\" gives bands 0%-33%, 33%-66%, 66%-100%",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "361": {
    "id": 361,
    "name": "Spellcheck",
    "description": "Enables spellchecking in the text areas.",
    "scope": "Input:Completion:Text gap;Input:Creative:Free writing 2 col;Input:Creative:Free writing;Input:Creative:Extended writing;Input:Completion:Text correction",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Don't spellcheck"
    }, {
      "key": "on",
      "label": "Enable spellcheck"
    }]
  },
  "362": {
    "id": 362,
    "name": "Show In Columns",
    "description": "Display buttons in columns",
    "scope": "Identify:Select:Checkbox;Identify:Select:Radiobutton",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "false",
      "label": "No"
    }, {
      "key": "true",
      "label": "Yes"
    }]
  },
  "364": {
    "id": 364,
    "name": "Ignore Accents",
    "description": "Users can enter, eg è or e and it will be validated in the same way",
    "scope": "Input:Completion:Crossword;Input:Completion:Text gap;Input:Completion:Text correction;Input:Completion:Text gap (Label an object)",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Don't ignore accents"
    }, {
      "key": "on",
      "label": "Ignore accents"
    }]
  },
  "367": {
    "id": 367,
    "name": "Eraser",
    "description": "Displays eraser",
    "scope": "Identify:Mark:Marking;Identify:Select:Radiobutton;Identify:Select:Checkbox;Identify:Select:Dropdown;Order:Match:Text gap;Identify:Select:Linking multiple lines;Present:Present:Slideshow;Identify:Select:Catch;Identify:Select:Linking lines;Input:Completion:Text gap;Input:Completion:Text gap (Label an object)",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Don't display eraser"
    }, {
      "key": "on",
      "label": "Display eraser"
    }]
  },
  "368": {
    "id": 368,
    "name": "Annotation Tools",
    "description": "Enables annotation toolbar.",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }, {
      "key": "only_for_teachers",
      "label": "Only for Teachers"
    }, {
      "key": "only_supplements",
      "label": "Only Supplements"
    }]
  },
  "371": {
    "id": 371,
    "name": "Show info text",
    "description": "Enables display of extra text with the syntax:\n    #infotext*info*Text to display#\n    or\n    #infotext*/icon.png*Text to display#",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "tooltip",
      "label": "Tooltip"
    }, {
      "key": "dialog",
      "label": "Dialog"
    }]
  },
  "372": {
    "id": 372,
    "name": "Question pool",
    "description": "Enables the writer to select how many questions/text boxes should be displayed to the user. They are selected at random.",
    "scope": "Identify:Select:Dropdown;Identify:Select:Radiobutton;Identify:Select:Checkbox",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "no",
      "label": "No"
    }, {
      "key": "yes",
      "label": "Yes",
      "suboption": {
        "description": "Question pool size",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "373": {
    "id": 373,
    "name": "Continuous Enumeration",
    "description": "This option, makes enumeration continuous throughout the LO, shows the nav panel and links the nav panel to the enumerated items.",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "375": {
    "id": 375,
    "name": "LO sections",
    "description": "Groups pages within an LO into sections and names them",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "loparts",
    "valueFormat": "json",
    "values": [{
      "key": "off",
      "label": "OFF"
    }, {
      "key": "custom",
      "label": "om",
      "suboption": {
        "description": "Message",
        "valueType": "lopartsitems",
        "valueFormat": "string"
      }
    }]
  },
  "376": {
    "id": 376,
    "name": "Question display",
    "description": "Enables collapsible/expandable questions to save space.",
    "scope": "Identify:Select:Radiobutton;Identify:Select:Checkbox",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "all",
      "label": "Show all"
    }, {
      "key": "active",
      "label": "Show active only"
    }, {
      "key": "show_next",
      "label": "Show next"
    }, {
      "key": "show_next_and_hide_previous",
      "label": "Show next and hide current one on click"
    }]
  },
  "378": {
    "id": 378,
    "name": "End Result Always",
    "description": "Enables the End result screen and sets the parameters",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Name of button (back to exercises|endresults)",
        "valueType": "textarea",
        "valueFormat": "string"
      }
    }, {
      "key": "buttonAfterScore",
      "label": "Button after score",
      "suboption": {
        "description": "Name of button (back to exercises|endresults)",
        "valueType": "textarea",
        "valueFormat": "string"
      }
    }]
  },
  "379": {
    "id": 379,
    "name": "Exams Timer",
    "description": "Enables the LO timer and warning notices",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Text",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "382": {
    "id": 382,
    "name": "Enumeration internal",
    "description": "Special enumeration for is_radiobuttons / Show in columns and for is_checkboxes, where     it enumerates according to the number of correct answer selections.",
    "scope": "Identify:Select:Checkbox",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "all",
      "label": "Show all"
    }, {
      "key": "correct",
      "label": "Only Correct"
    }]
  },
  "383": {
    "id": 383,
    "name": "Activity pool",
    "description": "To enable random selection of activity pages in an LO.\n    With 'Randomise All' the user will be presented with all screens in the LO, in a random order",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }, {
      "key": "randomiseAll",
      "label": "Randomise All"
    }]
  },
  "384": {
    "id": 384,
    "name": "Check max attempts",
    "description": "[1-4] or Off (allows unlimited Check Answers)",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "json",
    "values": [{
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "388": {
    "id": 388,
    "name": "Send scores",
    "description": "Sends a total of the scores validated with Check answers to the LMS\n     (and triggers End results screen if present)",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "unlimited",
      "label": "Unlimited"
    }, {
      "key": "1_submission",
      "label": "1 submission"
    }, {
      "key": "final_check_answers",
      "label": "Final Check answers"
    }]
  },
  "390": {
    "id": 390,
    "name": "Design Pack Substyle",
    "description": "Enables substyles selection",
    "scope": "Global",
    "type": "Editorial",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "391": {
    "id": 391,
    "name": "End results return",
    "description": "Project-wide option to determine if which page is opened when returning from the End results screen. Option available only in Project settings.",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "last",
      "label": "Last activity"
    }, {
      "key": "first",
      "label": "First activity"
    }]
  },
  "394": {
    "id": 394,
    "name": "Score-Values-Per-Block",
    "description": "Picks up the score values assigned per content block and overwrites any derived from Option 40 Score values. Scores assigned here are used in the LO score total",
    "scope": "global",
    "type": "Function",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "Custom",
      "label": "Custom"
    }]
  },
  "395": {
    "id": 395,
    "name": "Export File",
    "description": "Option to export the current activity as a file (RTF or PDF)",
    "scope": "Input:Creative:Free writing;Input:Creative:Extended writing;Input:Creative:Free writing 2 col",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "396": {
    "id": 396,
    "name": "Textbox Autogrow",
    "description": "Specifies if rich textboxes in the LO will use CKEditor autogrow feature",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "397": {
    "id": 397,
    "name": "Checkbox Selections",
    "description": "Enables the writer to specify how many selections the user can make in a checkbox activity",
    "scope": "Identify:Select:Checkbox",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "total_correct",
      "label": "Total Correct"
    }, {
      "key": "all",
      "label": "All"
    }]
  },
  "398": {
    "id": 398,
    "name": "Repeat Answers",
    "description": "Enables the writer to specify if repeat answers are allowed within the same question",
    "scope": "Input:Completion:Text gap;Order:Match:Text gap;Identify:Select:Dropdown",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "allow",
      "label": "Allow"
    }, {
      "key": "prevent",
      "label": "Prevent"
    }]
  },
  "399": {
    "id": 399,
    "name": "Free Drag Location",
    "description": "Enables the writer to drag items anywhere in the text block",
    "scope": "Order:Match:Text gap",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "between_words",
      "label": "Between Words"
    }, {
      "key": "between_letters",
      "label": "Between Letters"
    }]
  },
  "400": {
    "id": 400,
    "name": "Pool Stacks",
    "description": "Enables the writer to specify if drag items should be grouped into stacks within the pool, and set the number of stacks",
    "scope": "Order:Sort:Sorting;Order:Match:Text gap;Order:Match:Text gap (Label an object)",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "1",
      "label": "1"
    }, {
      "key": "2",
      "label": "2"
    }, {
      "key": "3",
      "label": "3"
    }, {
      "key": "4",
      "label": "4"
    }]
  },
  "401": {
    "id": 401,
    "name": "Audio in gap",
    "description": "Wraps an answer gap with the audio file next to it",
    "scope": "Input:Completion:Text gap;Identify:Select:Dropdown",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "402": {
    "id": 402,
    "name": "Order Dependency",
    "description": "Specifies if there is a dependency between the answer options",
    "scope": "Input:Completion:Text gap;Order:Match:Text gap;Identify:Select:Dropdown;Identify:Select:Radiobutton",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "first_answer",
      "label": "From first answer"
    }, {
      "key": "on",
      "label": "Longest combination"
    }]
  },
  "403": {
    "id": 403,
    "name": "Gap Resize",
    "description": "Enables text input gaps to adapt to their content",
    "scope": "Input:Completion:Text gap;Order:Match:Text gap;Identify:Select:Dropdown;Identify:Select:Radiobutton",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "404": {
    "id": 404,
    "name": "Score calculation",
    "description": "In Sorting, allows incorrect placements to count in the score.\n     Total incorrect answers are subtracted from total correct answers (minimum total: 0)",
    "scope": "Order:Sort:Sorting;Order:Match:Text gap;Identify:Mark:Marking;Identify:Select:Catch;Identify:Mark:Autocorrect;Identify:Mark:Colouring",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "onlyCorrect",
      "label": "Only correct"
    }, {
      "key": "subtractIncorrect",
      "label": "Subtract incorrect"
    }]
  },
  "406": {
    "id": 406,
    "name": "Pool order",
    "description": "Defines the order that items are displayed in the wordpool",
    "scope": "Order:Match:Text gap;Input:Completion:Text gap;Order:Match:Text gap (Label an object);Input:Completion:Text gap (Label an object)",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "alphabetical",
      "label": "Alphabetical"
    }, {
      "key": "natural",
      "label": "Natural"
    }]
  },
  "407": {
    "id": 407,
    "name": "Automatic capitalisation",
    "description": "On = a word, or the first in a single drag with several words, dragged to the start of a paragraph or after a full stop will be automatically capitalised",
    "scope": "Order:Match:Text gap;Order:Sequence:Sequence",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "408": {
    "id": 408,
    "name": "Marking style",
    "description": "Defines how the selected word is displayed when chosen by the user",
    "scope": "Identify:Mark:Marking",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "highlight",
      "label": "Highlight"
    }, {
      "key": "circle",
      "label": "Circle"
    }, {
      "key": "underline",
      "label": "Underline"
    }]
  },
  "412": {
    "id": 412,
    "name": "Container Style",
    "description": "Create custom containers for sorting using images",
    "scope": "Order:Sort:Sorting;Order:Sort:Number stacks",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "normal",
      "label": "Normal"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "416": {
    "id": 416,
    "name": "Answer display",
    "description": "Setting determines whether the linking lines options display in rows or columns",
    "scope": "Identify:Select:Linking lines;Identify:Select:Linking multiple lines",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "columns",
      "label": "Columns"
    }, {
      "key": "rows",
      "label": "Rows"
    }]
  },
  "417": {
    "id": 417,
    "name": "Link behaviour",
    "description": "To set the user linking behaviour, whether by dragging or with 2 touches",
    "scope": "Identify:Select:Linking lines;Identify:Select:Linking multiple lines",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "drag",
      "label": "Drag"
    }, {
      "key": "touch",
      "label": "Touch"
    }]
  },
  "419": {
    "id": 419,
    "name": "Restore LO State",
    "description": "Configures whether the LO restores the saved state or not",
    "scope": "Global",
    "type": "Editorial",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "on",
      "label": "On"
    }, {
      "key": "off",
      "label": "Off"
    }]
  },
  "421": {
    "id": 421,
    "name": "Wiki Tool",
    "description": "Inserts a button to launch the standalone WIki Tool",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "422": {
    "id": 422,
    "name": "Operator",
    "description": "Sets addition or multiplication in Number triangle",
    "scope": "Input:Completion:Number triangle;Input:Completion:Number wall;Input:Completion:Number layers",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "addition",
      "label": "Addition"
    }, {
      "key": "multiplication",
      "label": "Multiplication"
    }]
  },
  "425": {
    "id": 425,
    "name": "Gap characters",
    "description": "Displays a visual indication of the number of letters that the gap contains so that the student knows how many letters are required",
    "scope": "Input:Completion:Text gap;Input:Completion:Text gap (Label an object)",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "dontshow",
      "label": "Don't show"
    }, {
      "key": "show",
      "label": "Show"
    }]
  },
  "426": {
    "id": 426,
    "name": "Layers",
    "description": "Sets the number of rows.",
    "scope": "Input:Completion:Number wall;Input:Completion:Number layers",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "2",
      "label": "2"
    }, {
      "key": "3",
      "label": "3"
    }, {
      "key": "4",
      "label": "4"
    }, {
      "key": "5",
      "label": "5"
    }, {
      "key": "6",
      "label": "6"
    }]
  },
  "427": {
    "id": 427,
    "name": "Team scoring",
    "description": "Enables real time scoring for 2 teams in the same activity screen",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Teams",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "428": {
    "id": 428,
    "name": "Reference Content",
    "description": "Provides a reference to a separate LO.",
    "scope": "Global",
    "type": "Editorial",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off",
      "suboption": {
        "description": "",
        "valueType": "input",
        "valueFormat": "json"
      }
    }, {
      "key": "1",
      "label": "1",
      "suboption": {
        "description": "",
        "valueType": "input",
        "valueFormat": "json"
      }
    }, {
      "key": "2",
      "label": "2",
      "suboption": {
        "description": "",
        "valueType": "input",
        "valueFormat": "json"
      }
    }]
  },
  "430": {
    "id": 430,
    "name": "Alternative Text",
    "description": "Enables display of alternative passages of text using the syntax #alttext#, of which there is a choice of three by the writer",
    "scope": "Global",
    "type": "Editorial",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "alt1",
      "label": "Alt1"
    }, {
      "key": "alt2",
      "label": "Alt2"
    }, {
      "key": "alt3",
      "label": "Alt3"
    }]
  },
  "431": {
    "id": 431,
    "name": "Audio Playback",
    "description": "In Flashcards and Pelmanism, the option determines whether the audios play on flipping or must be activated by clicking the Play button",
    "scope": "Present:Present:Flashcards;Identify:Select:Pelmanism",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "auto",
      "label": "Auto"
    }, {
      "key": "manual",
      "label": "Manual"
    }, {
      "key": "before_card_flip",
      "label": "Before Card Flip"
    }]
  },
  "432": {
    "id": 432,
    "name": "LO title display",
    "description": "Determines whether the LO displays the LO title (fetched from LO Options)",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "on",
      "label": "On"
    }, {
      "key": "off",
      "label": "Off"
    }]
  },
  "433": {
    "id": 433,
    "name": "Activity title display",
    "description": "Determines whether the LO displays the Activity title (fetched from the Activity Options tab / Name)",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "on",
      "label": "On"
    }, {
      "key": "off",
      "label": "Off"
    }]
  },
  "435": {
    "id": 435,
    "name": "Number columns",
    "description": "Determines the columns in a number layers unit",
    "scope": "Input:Completion:Number triangle;Input:Completion:Number pyramid;Input:Completion:Number wall;Input:Completion:Number layers",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "3",
      "label": "3"
    }, {
      "key": "4",
      "label": "4"
    }, {
      "key": "5",
      "label": "5"
    }]
  },
  "437": {
    "id": 437,
    "name": "Automatic play",
    "description": "Displays and enables a button that initiates and controls a slideshow as well as buttons to control the intervals between images",
    "scope": "Present:Present:Slideshow",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }, {
      "key": "on_magnify",
      "label": "On and magnify"
    }]
  },
  "438": {
    "id": 438,
    "name": "Shuffle control",
    "description": "Randomises the display of images in the slideshow enabling 2 buttons: Shuffle; Default",
    "scope": "Present:Present:Slideshow",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "439": {
    "id": 439,
    "name": "Additional image control",
    "description": "Enables a buttons to control the appearance of a second background image",
    "scope": "Present:Present:Slideshow",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "441": {
    "id": 441,
    "name": "Audio icon behaviour",
    "description": "Determines whether the audio icon stops or pauses",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "stop",
      "label": "Stop"
    }, {
      "key": "pause",
      "label": "Pause"
    }]
  },
  "442": {
    "id": 442,
    "name": "User selection",
    "description": "Determines whether the user checkboxes display, and whether they signal a sentence to change or one not to change",
    "scope": "Input:Completion:Text correction",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "select_for_correct",
      "label": "Select for correct"
    }, {
      "key": "select_for_error",
      "label": "Select for error"
    }]
  },
  "443": {
    "id": 443,
    "name": "LO fullscreen button",
    "description": "Determines whether to display the fullscreen button",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "445": {
    "id": 445,
    "name": "User Visibility",
    "description": "Determines by role who can see an LO screen on the LMS",
    "scope": "Global",
    "type": "Editorial",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "all",
      "label": "All"
    }, {
      "key": "teacher",
      "label": "Teacher"
    }, {
      "key": "student",
      "label": "Student"
    }]
  },
  "446": {
    "id": 446,
    "name": "Clues in columns",
    "description": "Determines the display of clues in crosswords, whether as 2 columns in the same row or one under the other",
    "scope": "Input:Completion:Crossword",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "448": {
    "id": 448,
    "name": "Try Again Behaviour",
    "description": "Determines what action initiates Try Again",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "button",
      "label": "Button"
    }, {
      "key": "automatic",
      "label": "Automatic On Click"
    }, {
      "key": "automatic_after_time",
      "label": "Automatic After Time"
    }]
  },
  "449": {
    "id": 449,
    "name": "See all answers",
    "description": "Enables a button which, when pressed, displays all answers",
    "scope": "Input:Completion:Text gap;Identify:Select:Dropdown;Identify:Select:Checkbox;Identify:Select:Radiobutton;Identify:Select:Linking multiple lines;Input:Completion:Text gap (Label an object);Input:Completion:Crossword;Input:Completion:Text correction;Identify:Mark:Colouring;Identify:Mark:Marking;Identify:Mark:Syllabify;Identify:Mark:Wordsearch;Identify:Mark:Wordsnake;Order:Match:Pairs;Order:Match:Text gap;Order:Match:Text gap (Label an object);Order:Sequence:Sequence;Order:Sort:Sorting;Identify:Select:Radiobutton columns;Identify:Select:Linking lines;Identify:Select:Pelmanism;Identify:Select:Radiobutton voice;Input:Completion:Number pyramid;Input:Completion:Number layers;Input:Completion:Number triangle;Input:Completion:Number wall;Order:Match:Number pyramid",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "450": {
    "id": 450,
    "name": "See next answer",
    "description": "Enables a button which, when pressed, displays the next answer",
    "scope": "Input:Completion:Text gap;Identify:Select:Dropdown;Identify:Select:Checkbox;Identify:Select:Radiobutton;Identify:Select:Linking multiple lines;Identify:Mark:Marking;Identify:Mark:Wordsnake;Order:Match:Text gap;Order:Sequence:Sequence;Order:Sort:Sorting;Identify:Select:Linking lines;Input:Completion:Crossword;Identify:Mark:Wordsearch;Input:Completion:Text correction;Identify:Mark:Wordsnake;Identify:Select:Pelmanism;Input:Completion:Text correction;Input:Completion:Text gap (Label an object);Identify:Select:Radiobutton voice;Input:Completion:Number pyramid;Input:Completion:Number layers;Input:Completion:Number triangle;Input:Completion:Number wall;Order:Match:Number pyramid",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "452": {
    "id": 452,
    "name": "Navigation Menu",
    "description": "Enables a menu for navigating the LO",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "auto",
      "label": "Auto"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "textarea",
        "valueFormat": "string"
      }
    }]
  },
  "453": {
    "id": 453,
    "name": "Display Settings",
    "description": "Enables a button for configuring LO-wide display settings",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "454": {
    "id": 454,
    "name": "Resource Banks",
    "description": "Configures the available resource banks for use within the LO and activity",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "subvalues",
        "valueType": "multiselect",
        "valueFormat": "json"
      }
    }]
  },
  "455": {
    "id": 455,
    "name": "TTS General Rules",
    "description": "TTS overrides set at project level. Text field added with ON. Displays only in the Project settings",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Text",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "456": {
    "id": 456,
    "name": "TTS LO Rules",
    "description": "TTS overrides set at LO Options level. Text field added with ON. Displays in LO Options",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Text",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "457": {
    "id": 457,
    "name": "TTS Activity Rules",
    "description": "TTS overrides set at activity level. Text field added with ON. Displays in Activity Global options",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Text",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "459": {
    "id": 459,
    "name": "Activity help",
    "description": "Using the text box available inside each Master AT and its Project children for Help text to be added, the project-level option makes this text available to be displayed on a launched LO.",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "462": {
    "id": 462,
    "name": "Feedback Correct",
    "description": "Default feedback for a question answered correctly.",
    "scope": "Input:Completion:Text gap;Identify:Select:Dropdown;Identify:Select:Radiobutton;Identify:Select:Checkbox;Order:Match:Text gap",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "no",
      "label": "No"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Custom value",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "463": {
    "id": 463,
    "name": "Feedback Incorrect",
    "description": "Default feedback for a question answered incorrectly.",
    "scope": "Input:Completion:Text gap;Identify:Select:Dropdown;Identify:Select:Radiobutton;Identify:Select:Checkbox;Order:Match:Text gap",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "no",
      "label": "No"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Custom value",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "465": {
    "id": 465,
    "name": "Target image",
    "description": "Enables display of a button allowing the user to upload an image to represent a target.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "image",
        "valueFormat": "string"
      }
    }]
  },
  "466": {
    "id": 466,
    "name": "Target Generator image",
    "description": "Enables display of a button allowing the user to upload an image to represent the target generator (source of targets).",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "image",
        "valueFormat": "string"
      }
    }]
  },
  "467": {
    "id": 467,
    "name": "Target Generator location",
    "description": "Defines the position of the target generator.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "bottom_right",
      "label": "Bottom Right"
    }, {
      "key": "bottom_left",
      "label": "Bottom Left"
    }, {
      "key": "top_right",
      "label": "Top Right"
    }, {
      "key": "top_left",
      "label": "Top Left"
    }]
  },
  "469": {
    "id": 469,
    "name": "Selected Target image",
    "description": "Enables display of a button allowing the user to upload an image to represent a selected target.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "image",
        "valueFormat": "string"
      }
    }]
  },
  "470": {
    "id": 470,
    "name": "Background image",
    "description": "Enables display of a button allowing the user to upload an image to represent the activity background.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "image",
        "valueFormat": "string"
      }
    }]
  },
  "471": {
    "id": 471,
    "name": "Scoreboard",
    "description": "Display a scoreboard during the activity.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "472": {
    "id": 472,
    "name": "Countdown timer",
    "description": "Display time remaining for the activity; works in conjunction with Maximum duration option.",
    "scope": "Identify:Select:Catch;Present:Present:Quiz",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Audio",
        "valueType": "audio",
        "valueFormat": "string"
      }
    }]
  },
  "473": {
    "id": 473,
    "name": "Maximum duration",
    "description": "Defines maximum duration for the activity.",
    "scope": "Identify:Select:Catch;Present:Present:Quiz",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "inputNumeric",
        "valueFormat": "string"
      }
    }]
  },
  "474": {
    "id": 474,
    "name": "Maximum items",
    "description": "Determines the maximum number of items visible at any one time.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "inputNumeric",
        "valueFormat": "string"
      }
    }]
  },
  "475": {
    "id": 475,
    "name": "Movement speed",
    "description": "Defines the speed at which items move around.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "slow",
      "label": "Slow"
    }, {
      "key": "medium",
      "label": "Medium"
    }, {
      "key": "fast",
      "label": "Fast"
    }]
  },
  "476": {
    "id": 476,
    "name": "Generation speed",
    "description": "Defines the speed at which new items are generated.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "slow",
      "label": "Slow"
    }, {
      "key": "medium",
      "label": "Medium"
    }, {
      "key": "fast",
      "label": "Fast"
    }]
  },
  "477": {
    "id": 477,
    "name": "Game Over message",
    "description": "Defines the message to display to the user when the activity ends.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "479": {
    "id": 479,
    "name": "Solution Hint",
    "description": "Enables a button to offer a solution to the user.",
    "scope": "Input:Completion:Text gap;Identify:Select:Dropdown;Identify:Select:Checkbox;Identify:Select:Radiobutton;Identify:Select:Linking multiple lines;Input:Completion:Crossword;Order:Sort:Sorting;Input:Completion:Text gap (Label an object);Order:Match:Text gap;Order:Sequence:Sequence;Identify:Mark:Marking;Identify:Select:Linking lines;Identify:Mark:Wordsnake;Input:Completion:Text correction;Order:Match:Text gap (Label an object);Identify:Mark:Syllabify;Identify:Select:Pelmanism",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "480": {
    "id": 480,
    "name": "Ignore Spaces",
    "description": "If selected by the writer, the scoring ignores spaces entered into text gaps.",
    "scope": "Input:Completion:Text gap",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "483": {
    "id": 483,
    "name": "Number Input",
    "description": "Sets restrictions on the type of number the user can input.",
    "scope": "Input:Completion:Maths",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "any",
      "label": "Any"
    }, {
      "key": "natural",
      "label": "Natural"
    }, {
      "key": "integer",
      "label": "Integer"
    }]
  },
  "484": {
    "id": 484,
    "name": "Copyright Information",
    "description": "Determines whether copyright information displays with assets on preview",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "485": {
    "id": 485,
    "name": "Target onscreen duration",
    "description": "Determines duration of time (in seconds) that a \"target\" remains onscreen.",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Message",
        "valueType": "inputNumeric",
        "valueFormat": "string"
      }
    }]
  },
  "487": {
    "id": 487,
    "name": "Online Check",
    "description": "Ensures the user is online before submitting the LO",
    "scope": "Global",
    "type": "Editorial",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "492": {
    "id": 492,
    "name": "Signal targets",
    "description": "In im_proofing, enables a button which identifies the target text in random order",
    "scope": "Identify:Mark:Proofing",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "493": {
    "id": 493,
    "name": "Check answers instant",
    "description": "Check answers functionality, but only on attempted questions and enabling after the first attempt. Can be pressed unlimited times.",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "Button"
    }, {
      "key": "automatic",
      "label": "Automatic"
    }]
  },
  "495": {
    "id": 495,
    "name": "Validate dependent gaps",
    "description": "Enforces validation that both the base and dependent gap must be correct for either to be marked correct",
    "scope": "Input:Completion:Maths",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "497": {
    "id": 497,
    "name": "Play all",
    "description": "Adds the Play all button, which stitches together the user's recordings with the pre-recorded audio",
    "scope": "Input:Creative:Dialogue recording",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "498": {
    "id": 498,
    "name": "Download audio",
    "description": "Adds the Download button by which the user can download the file created by Play all",
    "scope": "Input:Creative:Dialogue recording",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "499": {
    "id": 499,
    "name": "Hide lines",
    "description": "Adds the Hide my lines and Hide all lines buttons with which the user can hide/reveal the dialogue script",
    "scope": "Input:Creative:Dialogue recording",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "501": {
    "id": 501,
    "name": "Gapfill behaviour",
    "description": "Determines the method by which om-text gap and os-sorting gaps are filled",
    "scope": "Input:Completion:Text gap;Identify:Select:Dropdown;Identify:Select:Checkbox;Identify:Select:Radiobutton;Identify:Select:Linking multiple lines;Input:Completion:Text gap (Label an object);Input:Completion:Crossword;Input:Completion:Text correction;Identify:Mark:Colouring;Identify:Mark:Marking;Identify:Mark:Syllabify;Identify:Mark:Wordsearch;Identify:Mark:Wordsnake;Order:Match:Pairs;Order:Match:Text gap;Order:Match:Text gap (Label an object);Order:Sequence:Sequence;Order:Sort:Sorting;Identify:Select:Radiobutton columns;Identify:Select:Linking lines;Identify:Select:Pelmanism",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "drag",
      "label": "Drag"
    }, {
      "key": "tap_item",
      "label": "Tap item"
    }, {
      "key": "tap_target",
      "label": "Tap target"
    }, {
      "key": "tap_swap",
      "label": "Tap swap"
    }]
  },
  "502": {
    "id": 502,
    "name": "Group headings",
    "description": "To add headings to the columns/rows in Linking lines. Syntax: First header*Second header",
    "scope": "Identify:Select:Linking lines",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "custom value",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "503": {
    "id": 503,
    "name": "Display as completed",
    "description": "Allows the DP to style the completed text (all gaps filled) differently",
    "scope": "Order:Match:Text gap",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "504": {
    "id": 504,
    "name": "Origin of targets",
    "description": "Allows more specific setting of where the bubbles start from. When Custom is selected, a text field allows entering pixel coordinates: pixel-x, pixel-y",
    "scope": "Identify:Select:Catch",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "default",
      "label": "Default"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Coordinates in pixels",
        "valueType": "textarea",
        "valueFormat": "string"
      }
    }]
  },
  "505": {
    "id": 505,
    "name": "Translation Block",
    "description": "Allows the writer to select the default language when Languange switch syntax is used",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Default language",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "508": {
    "id": 508,
    "name": "Flash first answer",
    "description": "Briefly display the first answer on loading",
    "scope": "Input:Completion:Text gap;Order:Match:Text gap;Identify:Select:Radiobutton;Identify:Select:Dropdown",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Time in milliseconds",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "509": {
    "id": 509,
    "name": "Set User Role",
    "description": "In Dialogue Recording, allow the user to select the speaking role, or force the selection.",
    "scope": "Input:Creative:Dialogue recording",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "Free",
      "label": "Free"
    }, {
      "key": "role_1",
      "label": "Role 1"
    }, {
      "key": "role_2",
      "label": "Role 2"
    }]
  },
  "510": {
    "id": 510,
    "name": "Score Rounding",
    "description": "It rounds the scoring",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "float",
      "label": "Float"
    }, {
      "key": "roundup",
      "label": "Round up"
    }, {
      "key": "round",
      "label": "Round"
    }, {
      "key": "rounddown",
      "label": "Round down"
    }]
  },
  "511": {
    "id": 511,
    "name": "Next button text",
    "description": "It allows editor to change button text for the 'Next' button on an introduction screen",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "default",
      "label": "Default"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Button text",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "512": {
    "id": 512,
    "name": "Check Answers Display",
    "description": "Control the behaviour of the feedback dialog",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "marking_and_feedback",
      "label": "Marking and Feedback"
    }, {
      "key": "marking_only",
      "label": "Marking only"
    }]
  },
  "513": {
    "id": 513,
    "name": "Original Audio Playback",
    "description": "Allow the visible audio playback only for the non-user role",
    "scope": "Input:Creative:Dialogue recording",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "both_roles",
      "label": "Both roles"
    }, {
      "key": "non_selected_role_only",
      "label": "Non-selected Role Only"
    }]
  },
  "516": {
    "id": 516,
    "name": "Number of chances",
    "description": "A numerical selection from 1 - 5 to determine the number of attempts permitted to the user",
    "scope": "Identify:Select:Hangman",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "1",
      "label": "1"
    }, {
      "key": "2",
      "label": "2"
    }, {
      "key": "3",
      "label": "3"
    }, {
      "key": "4",
      "label": "4"
    }, {
      "key": "5",
      "label": "5"
    }]
  },
  "517": {
    "id": 517,
    "name": "Keyboard display",
    "description": "Controls if the keyboard appears as alphabetical, or QWERT layout, or to include special chars.",
    "scope": "Identify:Select:Hangman",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "518": {
    "id": 518,
    "name": "Reveal Solution",
    "description": "Determines whether the solution is revealed automatically or relies on the user pressing a button to display it",
    "scope": "Identify:Select:Hangman",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "after_final_chance",
      "label": "After final chance"
    }, {
      "key": "with_button",
      "label": "With button"
    }]
  },
  "519": {
    "id": 519,
    "name": "Hangman Timer",
    "description": "Displays a timer during the activity, with an input to set a limit in seconds. After the time iss reached, the solution is shown",
    "scope": "Identify:Select:Hangman",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "custom",
      "label": "Custom",
      "suboption": {
        "description": "Hangman timer",
        "valueType": "inputNumeric",
        "valueFormat": "string"
      }
    }]
  },
  "520": {
    "id": 520,
    "name": "Instruction PopUp",
    "description": "Disables-enables the instruction pop up window in design packs that support this option",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "521": {
    "id": 521,
    "name": "Reset Whole LO",
    "description": "Refreshes every screen in the LO with one click",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "522": {
    "id": 522,
    "name": "Show Next LO",
    "description": "Enables button to move in the next LO. Available for Los supported by the vertical DP function",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "523": {
    "id": 523,
    "name": "Show Previous LO",
    "description": "Enables button to move in the previous LO. Available for Los supported by the vertical DP function",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "524": {
    "id": 524,
    "name": "LO Notes Area",
    "description": "Enables a Notes area to appear on every screen of the LO",
    "scope": "Global",
    "type": "Controls",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "525": {
    "id": 525,
    "name": "Audio speed",
    "description": "Determines the display of the audio speed controller (slow turtle)",
    "scope": "Global",
    "type": "Media",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "527": {
    "id": 527,
    "name": "SCORM2004 Absolute Values",
    "description": "Enables a version of the exporter that reports absolute score values",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "529": {
    "id": 529,
    "name": "Highlight selection",
    "description": "In im marking, enables switch of target between words and letters without new syntax",
    "scope": "Identify:Mark:Marking",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "words",
      "label": "Words"
    }, {
      "key": "letters",
      "label": "Letters"
    }]
  },
  "531": {
    "id": 531,
    "name": "Display Recording Test",
    "description": "Displays an optional Test Recording dialog for the student",
    "scope": "Input:Match:Voice;Identify:Select:Radiobutton voice",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "532": {
    "id": 532,
    "name": "End Results Button",
    "description": "Determines whether the Results screen button appears on every activity screen or only on the last",
    "scope": "Global",
    "type": "Scoring",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "every",
      "label": "Every activity"
    }, {
      "key": "last",
      "label": "Last activity"
    }]
  },
  "533": {
    "id": 533,
    "name": "Time Spent in Sections",
    "description": "Enables a button on the End Results Screen that displays the LO sections with recommended and actual timings. Works in conjunction with the LO Sections option.",
    "scope": "Global",
    "type": "Feedback",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "535": {
    "id": 535,
    "name": "Number Of Teams",
    "description": "Determines that number of teams playing. Additional checkbox, User Choice, If selected, the number selected in the dropdown field determines the maximum number of teams the end user can choose from. If unselected, the number selected in the dropdown field determines the number of teams for the quiz in Author and the end user cannot change it.",
    "scope": "Present:Present:Quiz",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "1",
      "label": "1"
    }, {
      "key": "2",
      "label": "2",
      "suboption": {
        "description": "User choice",
        "valueType": "secondMultiselect",
        "valueFormat": "string"
      }
    }, {
      "key": "3",
      "label": "3",
      "suboption": {
        "description": "User choice",
        "valueType": "secondMultiselect",
        "valueFormat": "string"
      }
    }, {
      "key": "4",
      "label": "4",
      "suboption": {
        "description": "User choice",
        "valueType": "secondMultiselect",
        "valueFormat": "string"
      }
    }]
  },
  "536": {
    "id": 536,
    "name": "Number Of Categories",
    "description": "Determines the number of categories displayed on the Home screen. If value chosen in the single-digit text box is less than categories available, Author randomly selects the categories used. If value is equal to categories available then they are all shown. If value if greater than categories available, then Author shows all that are available.",
    "scope": "Present:Present:Quiz",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "1",
      "label": "1"
    }, {
      "key": "2",
      "label": "2"
    }, {
      "key": "3",
      "label": "3"
    }, {
      "key": "4",
      "label": "4"
    }, {
      "key": "5",
      "label": "5"
    }, {
      "key": "6",
      "label": "6"
    }, {
      "key": "7",
      "label": "7"
    }, {
      "key": "8",
      "label": "8"
    }, {
      "key": "9",
      "label": "9"
    }]
  },
  "537": {
    "id": 537,
    "name": "Number Of Questions",
    "description": "This determines how many questions are displayed on the game board for each available score value. If value chosen in the single-digit text box is less than questions available, Author randomly selects the questions used. If value is equal to questions available then they are all shown. If value if greater than questions available, then Author shows all that are available. Off = One question is displayed per score value available.",
    "scope": "Present:Present:Quiz",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "1",
      "label": "1"
    }, {
      "key": "2",
      "label": "2"
    }, {
      "key": "3",
      "label": "3"
    }, {
      "key": "4",
      "label": "4"
    }, {
      "key": "5",
      "label": "5"
    }, {
      "key": "6",
      "label": "6"
    }, {
      "key": "7",
      "label": "7"
    }, {
      "key": "8",
      "label": "8"
    }, {
      "key": "9",
      "label": "9"
    }]
  },
  "538": {
    "id": 538,
    "name": "Skip",
    "description": "Enables a button to allow a team to skip a question and end their turn.",
    "scope": "Present:Present:Quiz",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "539": {
    "id": 539,
    "name": "Restart Game",
    "description": "Enables a button on game board that will reset the quiz but keep the same questions at each position on the board.",
    "scope": "Present:Present:Quiz",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "540": {
    "id": 540,
    "name": "New Game",
    "description": "Enables a button on game board that resets the quiz and all the questions.",
    "scope": "Present:Present:Quiz",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "543": {
    "id": 543,
    "name": "Close After Submit",
    "description": "Automatically closes the LO after submission.",
    "scope": "Global",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "544": {
    "id": 544,
    "name": "Practice Screen",
    "description": "Excludes an activity that is validated and scored from the LO total score.",
    "scope": "Global",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  },
  "545": {
    "id": 545,
    "name": "Media Playback Limit",
    "description": "Stops audio/video playback after the configured limit",
    "scope": "Global",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "1",
      "label": "1"
    }, {
      "key": "2",
      "label": "2"
    }, {
      "key": "3",
      "label": "3"
    }, {
      "key": "4",
      "label": "4"
    }, {
      "key": "5",
      "label": "5"
    }]
  },
  "546": {
    "id": 546,
    "name": "TTS Language",
    "description": "Selects the Speaker language of the Text-to-Speech service [text box] (note important for documentation purposes: this expects language codes in the format xx-XX e.g. en-GB or de-DE)",
    "scope": "Global",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "Language code",
        "valueType": "input",
        "valueFormat": "string"
      }
    }]
  },
  "547": {
    "id": 547,
    "name": "Themes",
    "description": "Allows styles loaded from the DP to be made available to the LO Options and applied to the whole LO.",
    "scope": "Global",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On",
      "suboption": {
        "description": "subvalues",
        "valueType": "multiselect",
        "valueFormat": "json"
      }
    }]
  },
  "548": {
    "id": 548,
    "name": "SCORM12 Absolute Values",
    "description": "Enables a version of the exporter that reports absolute score values",
    "scope": "Global",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "on",
      "label": "On"
    }, {
      "key": "off",
      "label": "Off"
    }]
  },
  "549": {
    "id": 549,
    "name": "Regressive Scoring",
    "description": "Adjusts the score reported to the LMS (after submit) of the Learning Object taking into account the number of submissions the user has had.",
    "scope": "Global",
    "type": "Activity Type Option",
    "granularity": "object",
    "valueType": "select",
    "valueFormat": "string",
    "values": [{
      "key": "off",
      "label": "Off"
    }, {
      "key": "on",
      "label": "On"
    }]
  }
});

/***/ }),

/***/ "./react-app/modules/screens/actions/index.js":
/*!****************************************************!*\
  !*** ./react-app/modules/screens/actions/index.js ***!
  \****************************************************/
/*! exports provided: actionsConstants, addScreens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionsConstants", function() { return actionsConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScreens", function() { return addScreens; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../schema */ "./react-app/modules/screens/schema/index.js");
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/constants */ "./react-app/actions/constants.js");


const actionsConstants = _actions_constants__WEBPACK_IMPORTED_MODULE_1__["default"].screens;
const addScreens = screens => ({
  type: actionsConstants.ADD_SCREENS,
  payload: Object(_schema__WEBPACK_IMPORTED_MODULE_0__["normalizeScreensList"])(screens)
});

/***/ }),

/***/ "./react-app/modules/screens/features/index.js":
/*!*****************************************************!*\
  !*** ./react-app/modules/screens/features/index.js ***!
  \*****************************************************/
/*! exports provided: default, sagas, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return sagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./react-app/modules/screens/features/reducer.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saga */ "./react-app/modules/screens/features/saga.js");


/* harmony default export */ __webpack_exports__["default"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]);
const sagas = _saga__WEBPACK_IMPORTED_MODULE_1__["sagas"];
const actions = _saga__WEBPACK_IMPORTED_MODULE_1__["actions"];

/***/ }),

/***/ "./react-app/modules/screens/features/reducer.js":
/*!*******************************************************!*\
  !*** ./react-app/modules/screens/features/reducer.js ***!
  \*******************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _activities_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../activities/reducer */ "./react-app/modules/activities/reducer/index.js");

 //INTERNAL ACTIONS

const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'options',
  initialState: {},
  reducers: {
    addScreens: (state, action) => {
      const screens = action.payload;
      return { ...state,
        ...screens
      };
    }
  },
  extraReducers: {
    [_activities_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].addActivities.type]: (state, action) => {
      const {
        data
      } = action.payload;
      Object.values(data).forEach(({
        screenId,
        id
      }) => {
        state[screenId].activities.push(id);
      });
    }
  }
}); //EXPORTS

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/screens/features/saga.js":
/*!****************************************************!*\
  !*** ./react-app/modules/screens/features/saga.js ***!
  \****************************************************/
/*! exports provided: actions, sagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagas", function() { return sagas; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schema */ "./react-app/modules/screens/schema/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./react-app/modules/screens/actions/index.js");
/* harmony import */ var _options_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../options/selector */ "./react-app/modules/options/selector/index.js");
/* harmony import */ var _utils_optionsValidate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/optionsValidate */ "./react-app/utils/optionsValidate.js");
/* harmony import */ var _utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/actions/actionOut */ "./react-app/utils/actions/actionOut.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducer */ "./react-app/modules/screens/features/reducer.js");







 //SAGA

const addScreens = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actions__WEBPACK_IMPORTED_MODULE_3__["actionsConstants"].ADD_SCREENS);

function* watchAddScreensExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(addScreens.type, addScreensExternal);
}

function* addScreensExternal(action) {
  try {
    const mapedOptions = {};

    const mapMethod = function* (el) {
      const ids = Object.keys(el.options);
      const optionsValues = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(_options_selector__WEBPACK_IMPORTED_MODULE_4__["getOptionsById"], {
        ids
      });
      yield mapedOptions[el.id] = optionsValues;
    };

    yield* action.payload.map(mapMethod);
    const mapped = action.payload.map(entry => {
      const {
        id
      } = entry;
      return { ...entry,
        options: Object(_utils_optionsValidate__WEBPACK_IMPORTED_MODULE_5__["optionsValidate"])(entry.options, mapedOptions[id], 'screen')
      };
    });
    const normalized = Object(_schema__WEBPACK_IMPORTED_MODULE_1__["normalizeScreensList"])(mapped);
    const {
      screens
    } = normalized.entities;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_reducer__WEBPACK_IMPORTED_MODULE_7__["actions"].addScreens(screens));
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_6__["actionSuccess"])(action, {
      ids: mapped.map(m => m.id)
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_6__["actionError"])(action, e);
  }
}

const actions = {
  addScreens
};
const sagas = {
  watchAddScreensExternal
};

/***/ }),

/***/ "./react-app/modules/screens/schema/index.js":
/*!***************************************************!*\
  !*** ./react-app/modules/screens/schema/index.js ***!
  \***************************************************/
/*! exports provided: default, normalizeScreen, normalizeScreensList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeScreen", function() { return normalizeScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeScreensList", function() { return normalizeScreensList; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
 // import iccrossword from '../../activities/ICCrossword/schema'

const screen = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('screens', {// activities: new schema.Array(
  //   {
  //     iccrosswords: iccrossword
  //   },
  //   (input) => `${input.type}s`
  // )
});
const screensList = [screen];
/* harmony default export */ __webpack_exports__["default"] = (screen);
const normalizeScreen = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, screen);
};
const normalizeScreensList = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, screensList);
};

/***/ }),

/***/ "./react-app/modules/solutionData/reducer/index.js":
/*!*********************************************************!*\
  !*** ./react-app/modules/solutionData/reducer/index.js ***!
  \*********************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processor */ "./react-app/modules/solutionData/reducer/processor.js");


const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'solutionData',
  initialState: {},
  reducers: {
    addSolutionData: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('addSolutionData', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    },
    clearSolutionData: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('clearSolutionData', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    }
  }
}); //EXPORTS

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/solutionData/reducer/processor.js":
/*!*************************************************************!*\
  !*** ./react-app/modules/solutionData/reducer/processor.js ***!
  \*************************************************************/
/*! exports provided: register, process, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");

const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'reducers',
  name: 'solutionData',
  processors: {
    addSolutionData: (state, {
      data
    }) => {
      return { ...state,
        ...data
      };
    },
    clearSolutionData: (state, {
      data
    }) => {
      return Object.keys(state).reduce((acc, id) => {
        if (!data.includes(id)) {
          acc[id] = state[id];
        }

        return acc;
      }, {});
    }
  }
});
const register = processorManager.register;
const process = processorManager.process;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/solutionData/schema/index.js":
/*!********************************************************!*\
  !*** ./react-app/modules/solutionData/schema/index.js ***!
  \********************************************************/
/*! exports provided: default, normalizeSolutionDataEntry, normalizeSolutionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSolutionDataEntry", function() { return normalizeSolutionDataEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSolutionData", function() { return normalizeSolutionData; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");

const solutionDataEntry = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('solutionData', {});
const solutionData = [solutionDataEntry];
/* harmony default export */ __webpack_exports__["default"] = (solutionData);
const normalizeSolutionDataEntry = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, solutionDataEntry);
};
const normalizeSolutionData = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, solutionData);
};

/***/ }),

/***/ "./react-app/modules/solutionData/selector/general.js":
/*!************************************************************!*\
  !*** ./react-app/modules/solutionData/selector/general.js ***!
  \************************************************************/
/*! exports provided: getSolutionDataListByIds, getActivitySolutionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSolutionDataListByIds", function() { return getSolutionDataListByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivitySolutionData", function() { return getActivitySolutionData; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../selector/utils */ "./react-app/selector/utils.js");



const getState = state => state.solutionData;

const getIds = (state, props) => props.ids;

const getIdsToJson = (state, props) => JSON.stringify(props.ids.sort((a, b) => a - b));

const getActivityId = (state, props) => props.activityId;

const getSolutionDataAsList = Object(_selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"])([getState], items => {
  if (!items) {
    return;
  }

  return Object.values(items);
});
const getSolutionDataListByIds = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getState, getIds], (items, ids) => {
  if (!items) {
    return;
  }

  let idsToFetch = ids || [];
  return idsToFetch.map(id => items[id]).filter(Boolean);
})(getIdsToJson, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivitySolutionData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getSolutionDataAsList, getActivityId], (items, activityId) => {
  if (!items || !activityId) {
    return;
  }

  return items.filter(el => el.activityId === activityId);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});

/***/ }),

/***/ "./react-app/modules/uiData/getter/index.js":
/*!**************************************************!*\
  !*** ./react-app/modules/uiData/getter/index.js ***!
  \**************************************************/
/*! exports provided: getItemsByEnabled, getItemsByDataType, getItemsByValidationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsByEnabled", function() { return getItemsByEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsByDataType", function() { return getItemsByDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsByValidationType", function() { return getItemsByValidationType; });
/* harmony import */ var _activities_utils_return__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../activities/utils/return */ "./react-app/modules/activities/utils/return.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./react-app/modules/uiData/selector/index.js");



const getItemsByFilter = (state, props) => {
  const {
    activityType
  } = props;
  const items = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["select"])('getActivityUIDataByFilter', activityType, [state, props]);
  return Object(_activities_utils_return__WEBPACK_IMPORTED_MODULE_0__["organizeReturn"])(items);
};

const getItemsByEnabled = (state, props) => {
  return getItemsByFilter(state, { ...props,
    filters: {
      enabled: props.enabled
    }
  });
};
const getItemsByDataType = (state, props) => {
  return getItemsByFilter(state, { ...props,
    filters: {
      dataType: props.dataType
    }
  });
};
const getItemsByValidationType = (state, props) => {
  return getItemsByFilter(state, { ...props,
    filters: {
      validationType: props.validationType
    }
  });
};

/***/ }),

/***/ "./react-app/modules/uiData/reducer/index.js":
/*!***************************************************!*\
  !*** ./react-app/modules/uiData/reducer/index.js ***!
  \***************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _itemData_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../itemData/reducer */ "./react-app/modules/itemData/reducer/index.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processor */ "./react-app/modules/uiData/reducer/processor.js");



const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'uiData',
  initialState: {},
  reducers: {
    setUIData: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_2__["process"])('setUIData', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    },
    clearUIData: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_2__["process"])('clearUIData', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    }
  },
  extraReducers: {
    [_itemData_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].addItemData.type]: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_2__["process"])('addItemData', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    }
  }
}); //EXPORTS

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/uiData/reducer/processor.js":
/*!*******************************************************!*\
  !*** ./react-app/modules/uiData/reducer/processor.js ***!
  \*******************************************************/
/*! exports provided: model, register, process, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "model", function() { return model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");

const model = {
  dataType: 'user',
  validationType: null,
  enabled: true,
  extra: []
};
const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'reducers',
  name: 'uiData',
  processors: {
    setUIData: (state, {
      data
    }) => {
      data.forEach(el => {
        state[el.id] = { ...state[el.id],
          ...el
        };
      });
    },
    addItemData: (state, {
      data
    }) => {
      const els = Object.values(data).reduce((acc, val) => {
        acc[val.id] = {
          id: val.id,
          activityId: val.activityId,
          ...model
        };
        return acc;
      }, {});
      return { ...state,
        ...els
      };
    },
    clearUIData: (state, {
      data
    }) => {
      return Object.keys(state).reduce((acc, id) => {
        if (!data.includes(id)) {
          acc[id] = state[id];
        }

        return acc;
      }, {});
    }
  }
});
const register = processorManager.register;
const process = processorManager.process;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/uiData/saga/index.js":
/*!************************************************!*\
  !*** ./react-app/modules/uiData/saga/index.js ***!
  \************************************************/
/*! exports provided: actions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _activities_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../activities/action */ "./react-app/modules/activities/action.js");
/* harmony import */ var _utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/actions/actionOut */ "./react-app/utils/actions/actionOut.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processor */ "./react-app/modules/uiData/saga/processor.js");





const setEnabled = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["default"].SET_ENABLED);
const setDataType = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["default"].SET_DATATYPE);
const setValidationType = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["default"].SET_VALIDATIONTYPE);
const setExtraUI = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["default"].SET_EXTRAUI);
const setBatchUI = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["default"].SET_BATCHUI);

function* watchSetEnabledExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(setEnabled.type, setEnabledExternal);
}

function* watchSetDataTypeExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(setDataType.type, setDataTypeExternal);
}

function* watchSetValidationTypeExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(setValidationType.type, setValidationTypeExternal);
}

function* watchSetExtraUiExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(setExtraUI.type, setExtraUIExternal);
}

function* watchSetBatchUiExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(setBatchUI.type, setBatchUIExternal);
}

function* setEnabledExternal(action) {
  try {
    const {
      activityId,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('setEnabled', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      activityId
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
  }
}

function* setDataTypeExternal(action) {
  try {
    const {
      activityId,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('setDataType', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      activityId
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
  }
}

function* setValidationTypeExternal(action) {
  try {
    const {
      activityId,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('setValidationType', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      activityId
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
  }
}

function* setExtraUIExternal(action) {
  try {
    const {
      activityId,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('setExtraUI', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      id: activityId
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
  }
}

function* setBatchUIExternal(action) {
  try {
    const {
      activityId,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('setBatchUI', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      id: activityId
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
  }
}

const actions = {
  setEnabled,
  setDataType,
  setValidationType,
  setExtraUI,
  setBatchUI
};
/* harmony default export */ __webpack_exports__["default"] = ({
  watchSetEnabledExternal,
  watchSetDataTypeExternal,
  watchSetValidationTypeExternal,
  watchSetExtraUiExternal,
  watchSetBatchUiExternal
});

/***/ }),

/***/ "./react-app/modules/uiData/saga/processor.js":
/*!****************************************************!*\
  !*** ./react-app/modules/uiData/saga/processor.js ***!
  \****************************************************/
/*! exports provided: createAction, register, process, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./react-app/modules/uiData/reducer/index.js");


const createAction = (payload, key) => {
  const {
    ids,
    activityType
  } = payload;
  return _reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setUIData({
    activityType,
    data: ids.map(id => ({
      id,
      [key]: payload[key]
    }))
  });
};
const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'sagas',
  name: 'uiData',
  processors: {
    setEnabled: payload => [createAction(payload, 'enabled')],
    setDataType: payload => [createAction(payload, 'dataType')],
    setValidationType: payload => [createAction(payload, 'validationType')],
    setExtraUI: payload => [createAction(payload, 'extra')],
    setBatchUI: payload => {
      const {
        ids,
        activityType,
        data
      } = payload;
      const acceptedKeys = ['extraUI', 'enabled', 'validationType', 'dataType'];
      const validHash = Object.entries(data).reduce((acc, [key, val]) => {
        if (acceptedKeys.includes(key)) {
          acc[key] = val;
        }

        return acc;
      }, {});
      return [_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setUIData({
        activityType,
        data: ids.map(id => ({
          id,
          ...validHash
        }))
      })];
    }
  }
});
const register = processorManager.register;
const process = processorManager.process;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/uiData/schema/index.js":
/*!**************************************************!*\
  !*** ./react-app/modules/uiData/schema/index.js ***!
  \**************************************************/
/*! exports provided: default, normalizeUiDataEntry, normalizeUiData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUiDataEntry", function() { return normalizeUiDataEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUiData", function() { return normalizeUiData; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");

const uiDataEntry = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('uiData', {});
const uiData = [uiDataEntry];
/* harmony default export */ __webpack_exports__["default"] = (uiData);
const normalizeUiDataEntry = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, uiDataEntry);
};
const normalizeUiData = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, uiData);
};

/***/ }),

/***/ "./react-app/modules/uiData/selector/general.js":
/*!******************************************************!*\
  !*** ./react-app/modules/uiData/selector/general.js ***!
  \******************************************************/
/*! exports provided: getState, getItemsState, getGlobalState, getUIDataListByIds, getActivityUIData, getActivityUIDataByFilter, getActivityUIDataEnabled, getActivityUIDataDisabled, getActivityUIDataDataTypeUser, getActivityUIDataDataTypeSolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsState", function() { return getItemsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUIDataListByIds", function() { return getUIDataListByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityUIData", function() { return getActivityUIData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityUIDataByFilter", function() { return getActivityUIDataByFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityUIDataEnabled", function() { return getActivityUIDataEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityUIDataDisabled", function() { return getActivityUIDataDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityUIDataDataTypeUser", function() { return getActivityUIDataDataTypeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityUIDataDataTypeSolution", function() { return getActivityUIDataDataTypeSolution; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selector/utils */ "./react-app/selector/utils.js");



const getState = state => state.uiData;

const getIds = (state, props) => props.ids;

const getIdsToJson = (state, props) => JSON.stringify(props.ids.sort((a, b) => a - b));

const getActivityId = (state, props) => props.activityId;

const getFilters = (state, props) => props === null || props === void 0 ? void 0 : props.filters;

const getFiltersJSON = (state, props) => JSON.stringify(props === null || props === void 0 ? void 0 : props.filters);

const getItemsState = state => state.uiData.get('items');
const getGlobalState = state => state.uiData.get('global');
const getUIDataAsList = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createDraftSafeSelector"])([getState], items => {
  if (!items) {
    return;
  }

  return Object.values(items);
});
const getUIDataListByIds = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getState, getIds], (items, ids) => {
  if (!items) {
    return;
  }

  let idsToFetch = ids || [];
  return idsToFetch.map(id => items[id]).filter(Boolean);
})(getIdsToJson);
const getActivityUIData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getUIDataAsList, getActivityId], (items, activityId) => {
  if (!items || !activityId) {
    return;
  }

  return items.filter(el => el.activityId === activityId);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_2__["createArraySelector"]
});
const getActivityUIDataByFilter = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityUIData, getFilters], (items, filter) => {
  if (!items || !items.length || !filter) {
    return;
  }

  return items.filter(item => {
    const entries = Object.entries(filter);
    return entries.every(([key, value]) => {
      return item[key] === value;
    });
  });
})(() => `${getActivityId}${getFiltersJSON}`);
const getActivityUIDataEnabled = (state, props) => {
  return getActivityUIDataByFilter(state, { ...props,
    filters: {
      enabled: true
    }
  });
};
const getActivityUIDataDisabled = (state, props) => {
  return getActivityUIDataByFilter(state, { ...props,
    filters: {
      enabled: false
    }
  });
};
const getActivityUIDataDataTypeUser = (state, props) => {
  return getActivityUIDataByFilter(state, { ...props,
    filters: {
      dataType: 'user'
    }
  });
};
const getActivityUIDataDataTypeSolution = (state, props) => {
  return getActivityUIDataByFilter(state, { ...props,
    filters: {
      dataType: 'solution'
    }
  });
};

/***/ }),

/***/ "./react-app/modules/uiData/selector/index.js":
/*!****************************************************!*\
  !*** ./react-app/modules/uiData/selector/index.js ***!
  \****************************************************/
/*! exports provided: select, register, selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return selectors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ "./react-app/modules/uiData/selector/general.js");


const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'selectors',
  name: 'itemData',
  processors: { ..._general__WEBPACK_IMPORTED_MODULE_1__
  }
});
const select = processorManager.process;
const register = processorManager.register;
const selectors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/userData/getter/index.js":
/*!****************************************************!*\
  !*** ./react-app/modules/userData/getter/index.js ***!
  \****************************************************/
/*! exports provided: getFilled, getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilled", function() { return getFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony import */ var _activities_utils_return__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../activities/utils/return */ "./react-app/modules/activities/utils/return.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./react-app/modules/userData/selector/index.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_2__);



const getFilled = (state, params) => {
  const {
    activityType
  } = params;
  const items = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["select"])('getActivityUserDataFilled', activityType, [state, params]);
  return Object(_activities_utils_return__WEBPACK_IMPORTED_MODULE_0__["organizeReturn"])(items);
};
const getUserData = (state, params) => {
  const {
    activityType
  } = params;
  const items = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["select"])('getActivityUserData', activityType, [state, params]);
  return lodash_sortBy__WEBPACK_IMPORTED_MODULE_2___default()(items, 'id');
};

/***/ }),

/***/ "./react-app/modules/userData/reducer/index.js":
/*!*****************************************************!*\
  !*** ./react-app/modules/userData/reducer/index.js ***!
  \*****************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processor */ "./react-app/modules/userData/reducer/processor.js");


const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'userData',
  initialState: {},
  reducers: {
    setUserData: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('setUserData', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    },
    clearUserData: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('clearUserData', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    }
  }
}); //EXPORTS

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/userData/reducer/processor.js":
/*!*********************************************************!*\
  !*** ./react-app/modules/userData/reducer/processor.js ***!
  \*********************************************************/
/*! exports provided: register, process, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");

const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'reducers',
  name: 'userData',
  processors: {
    setUserData: (state, {
      data
    }) => {
      return { ...state,
        ...Object.entries(data).reduce((acc, [key, value]) => {
          acc[key] = { ...value,
            time: performance.now()
          };
          return acc;
        }, {})
      };
    },
    clearUserData: (state, {
      data
    }) => {
      return Object.keys(state).reduce((acc, id) => {
        if (!data.includes(id)) {
          acc[id] = state[id];
        }

        return acc;
      }, {});
    }
  }
});
const register = processorManager.register;
const process = processorManager.process;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/userData/saga/index.js":
/*!**************************************************!*\
  !*** ./react-app/modules/userData/saga/index.js ***!
  \**************************************************/
/*! exports provided: actions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _activities_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../activities/action */ "./react-app/modules/activities/action.js");
/* harmony import */ var _utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/actions/actionOut */ "./react-app/utils/actions/actionOut.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processor */ "./react-app/modules/userData/saga/processor.js");





const setUserData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["default"].SET_USERDATA);
const clearUserData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["default"].CLEAR_USERDATA);

function* watchSetUserdataExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(setUserData.type, setUserDataExternal);
}

function* watchClearUserdataExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(clearUserData.type, clearUserDataExternal);
}

function* setUserDataExternal(action) {
  try {
    const {
      activityId,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('setUserData', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      activityId
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
  }
}

function* clearUserDataExternal(action) {
  try {
    const {
      activityId,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('clearUserData', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      activityId
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
  }
}

const actions = {
  setUserData,
  clearUserData
};
/* harmony default export */ __webpack_exports__["default"] = ({
  watchSetUserdataExternal,
  watchClearUserdataExternal
});

/***/ }),

/***/ "./react-app/modules/userData/saga/processor.js":
/*!******************************************************!*\
  !*** ./react-app/modules/userData/saga/processor.js ***!
  \******************************************************/
/*! exports provided: register, process, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer */ "./react-app/modules/userData/reducer/index.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schema */ "./react-app/modules/userData/schema/index.js");



const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'sagas',
  name: 'userData',
  processors: {
    setUserData: ({
      data,
      activityType
    }) => {
      const ret = [];

      if (data && data.length) {
        ret.push(_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setUserData({
          activityType,
          data: Object(_schema__WEBPACK_IMPORTED_MODULE_2__["normalizeUserData"])(data).entities.userData
        }));
      }

      return ret;
    },
    clearUserData: ({
      ids,
      activityType
    }) => {
      const ret = [];

      if (ids && ids.length) {
        ret.push(_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].clearUserData({
          activityType,
          data: ids
        }));
      }

      return ret;
    }
  }
});
const register = processorManager.register;
const process = processorManager.process;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/userData/schema/index.js":
/*!****************************************************!*\
  !*** ./react-app/modules/userData/schema/index.js ***!
  \****************************************************/
/*! exports provided: default, normalizeUserDataEntry, normalizeUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUserDataEntry", function() { return normalizeUserDataEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUserData", function() { return normalizeUserData; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");

const userDataEntry = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('userData', {});
const userData = [userDataEntry];
/* harmony default export */ __webpack_exports__["default"] = (userData);
const normalizeUserDataEntry = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, userDataEntry);
};
const normalizeUserData = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, userData);
};

/***/ }),

/***/ "./react-app/modules/userData/selector/general.js":
/*!********************************************************!*\
  !*** ./react-app/modules/userData/selector/general.js ***!
  \********************************************************/
/*! exports provided: getUserDataListByIds, getActivityUserData, getActivityUserDataFilled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserDataListByIds", function() { return getUserDataListByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityUserData", function() { return getActivityUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityUserDataFilled", function() { return getActivityUserDataFilled; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../selector/utils */ "./react-app/selector/utils.js");



const getState = state => state.userData;

const getIds = (state, props) => props.ids;

const getIdsToJson = (state, props) => JSON.stringify([...props.ids].sort());

const getActivityId = (state, props) => props.activityId;

const getUserDataAsList = Object(_selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"])([getState], items => {
  if (!items) {
    return;
  }

  return Object.values(items);
});
const getUserDataListByIds = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getState, getIds], (items, ids) => {
  if (!items) {
    return;
  }

  let idsToFetch = ids || [];
  return idsToFetch.map(id => items[id]).filter(Boolean);
})(getIdsToJson, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityUserData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getUserDataAsList, getActivityId], (items, activityId) => {
  if (!items || !activityId) {
    return;
  }

  return items.filter(el => el.activityId === activityId);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityUserDataFilled = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityUserData], activityUserData => {
  if (!activityUserData) {
    return;
  }

  return activityUserData.filter(el => el.value !== null && el.value !== undefined);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});

/***/ }),

/***/ "./react-app/modules/userData/selector/index.js":
/*!******************************************************!*\
  !*** ./react-app/modules/userData/selector/index.js ***!
  \******************************************************/
/*! exports provided: select, register, selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return selectors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ "./react-app/modules/userData/selector/general.js");


const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'selectors',
  name: 'userData',
  processors: { ..._general__WEBPACK_IMPORTED_MODULE_1__
  }
});
const select = processorManager.process;
const register = processorManager.register;
const selectors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/validationData/getter/index.js":
/*!**********************************************************!*\
  !*** ./react-app/modules/validationData/getter/index.js ***!
  \**********************************************************/
/*! exports provided: getCorrect, getIncorrect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrect", function() { return getCorrect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncorrect", function() { return getIncorrect; });
/* harmony import */ var _activities_utils_return__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../activities/utils/return */ "./react-app/modules/activities/utils/return.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./react-app/modules/validationData/selector/index.js");


const getCorrect = async (state, props) => {
  const {
    activityType
  } = props;
  const items = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["select"])('getActivityValidationDataByCorrect', activityType, [state, { ...props,
    correct: true
  }]);
  return Object(_activities_utils_return__WEBPACK_IMPORTED_MODULE_0__["organizeReturn"])(items);
};
const getIncorrect = async (state, props) => {
  const {
    activityType
  } = props;
  const items = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["select"])('getActivityValidationDataByCorrect', activityType, [state, { ...props,
    correct: false
  }]);
  return Object(_activities_utils_return__WEBPACK_IMPORTED_MODULE_0__["organizeReturn"])(items);
};

/***/ }),

/***/ "./react-app/modules/validationData/reducer/index.js":
/*!***********************************************************!*\
  !*** ./react-app/modules/validationData/reducer/index.js ***!
  \***********************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processor */ "./react-app/modules/validationData/reducer/processor.js");


const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'validationData',
  initialState: {},
  reducers: {
    addValidation: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('addValidation', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    },
    clearValidation: (state, action) => {
      const {
        activityType
      } = action.payload;
      const processedState = Object(_processor__WEBPACK_IMPORTED_MODULE_1__["process"])('clearValidation', activityType, [state, action.payload]);

      if (processedState) {
        return processedState;
      }
    }
  }
}); //EXPORTS

/* harmony default export */ __webpack_exports__["default"] = (slice.reducer);
const actions = { ...slice.actions
};

/***/ }),

/***/ "./react-app/modules/validationData/reducer/processor.js":
/*!***************************************************************!*\
  !*** ./react-app/modules/validationData/reducer/processor.js ***!
  \***************************************************************/
/*! exports provided: register, process, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");

const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'reducers',
  name: 'validationData',
  processors: {
    addValidation: (state, {
      data
    }) => {
      return { ...state,
        ...Object.entries(data).reduce((acc, [key, value]) => {
          acc[key] = { ...value,
            time: performance.now()
          };
          return acc;
        }, {})
      };
    },
    clearValidation: (state, {
      data
    }) => {
      return Object.keys(state).reduce((acc, id) => {
        if (!data.includes(id)) {
          acc[id] = state[id];
        }

        return acc;
      }, {});
    }
  }
});
const register = processorManager.register;
const process = processorManager.process;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/validationData/saga/index.js":
/*!********************************************************!*\
  !*** ./react-app/modules/validationData/saga/index.js ***!
  \********************************************************/
/*! exports provided: actions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _activities_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../activities/action */ "./react-app/modules/activities/action.js");
/* harmony import */ var _utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/actions/actionOut */ "./react-app/utils/actions/actionOut.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processor */ "./react-app/modules/validationData/saga/processor.js");





const validate = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["default"].VALIDATE);
const clearValidation = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["default"].CLEAR_VALIDATION);

function* watchValidateExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(validate.type, validateExternal);
}

function* watchClearValidationExternal() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(clearValidation.type, clearValidationExternal);
}

function* validateExternal(action) {
  try {
    const {
      activityId,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('validate', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      activityId
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
    throw new Error(e.message);
  }
}

function* clearValidationExternal(action) {
  try {
    const {
      activityId,
      activityType
    } = action.payload;
    const actions = yield Object(_processor__WEBPACK_IMPORTED_MODULE_4__["process"])('clearValidation', activityType, action.payload);
    yield* actions.map(function* (act) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(act);
    });
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionSuccess"])(action, {
      activityId
    });
  } catch (e) {
    yield Object(_utils_actions_actionOut__WEBPACK_IMPORTED_MODULE_3__["actionError"])(action, e);
  }
}

const actions = {
  validate,
  clearValidation
};
/* harmony default export */ __webpack_exports__["default"] = ({
  watchValidateExternal,
  watchClearValidationExternal
});

/***/ }),

/***/ "./react-app/modules/validationData/saga/processor.js":
/*!************************************************************!*\
  !*** ./react-app/modules/validationData/saga/processor.js ***!
  \************************************************************/
/*! exports provided: register, process, processors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processors", function() { return processors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");
/* harmony import */ var _solutionData_selector_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../solutionData/selector/general */ "./react-app/modules/solutionData/selector/general.js");
/* harmony import */ var _userData_selector_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../userData/selector/general */ "./react-app/modules/userData/selector/general.js");
/* harmony import */ var _itemData_selector_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../itemData/selector/general */ "./react-app/modules/itemData/selector/general.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schema */ "./react-app/modules/validationData/schema/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducer */ "./react-app/modules/validationData/reducer/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");







const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'sagas',
  name: 'validationData',
  processors: {
    validate: function* (payload) {
      const {
        activityType,
        activityId
      } = payload;
      const solutionData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_6__["select"])(_solutionData_selector_general__WEBPACK_IMPORTED_MODULE_1__["getSolutionDataListByIds"], payload);
      const itemData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_6__["select"])(_itemData_selector_general__WEBPACK_IMPORTED_MODULE_3__["getItemDataListByIds"], payload);
      const userData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_6__["select"])(_userData_selector_general__WEBPACK_IMPORTED_MODULE_2__["getUserDataListByIds"], payload);
      const validationData = itemData.map(item => {
        let retValue;
        let itemUserData = userData.find(el => el.id === item.id);
        let itemSolData = solutionData.find(el => el.id === item.id);
        let correct = false;

        if (!itemSolData && !itemUserData) {
          correct = true;
        } else if (itemSolData && itemUserData && itemUserData.value === itemUserData.value) {
          correct = true;
        }

        if (!item.isDistractor) {
          retValue = {
            id: item.id,
            activityId,
            correct,
            filled: itemUserData !== undefined && itemUserData !== null
          };
          return retValue;
        }
      }).filter(Boolean);
      return [_reducer__WEBPACK_IMPORTED_MODULE_5__["actions"].addValidation({
        activityType,
        data: Object(_schema__WEBPACK_IMPORTED_MODULE_4__["normalizeValidationData"])(validationData).entities.validationData
      })];
    },
    clearValidation: ({
      ids,
      activityType
    }) => {
      const ret = [];

      if (ids && ids.length) {
        ret.push(_reducer__WEBPACK_IMPORTED_MODULE_5__["actions"].clearValidation({
          activityType,
          data: ids
        }));
      }

      return ret;
    }
  }
});
const register = processorManager.register;
const process = processorManager.process;
const processors = processorManager.processors;

/***/ }),

/***/ "./react-app/modules/validationData/schema/index.js":
/*!**********************************************************!*\
  !*** ./react-app/modules/validationData/schema/index.js ***!
  \**********************************************************/
/*! exports provided: default, normalizeValidationDataEntry, normalizeValidationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeValidationDataEntry", function() { return normalizeValidationDataEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeValidationData", function() { return normalizeValidationData; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");

const validationDataEntry = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('validationData', {});
const validationData = [validationDataEntry];
/* harmony default export */ __webpack_exports__["default"] = (validationData);
const normalizeValidationDataEntry = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, validationDataEntry);
};
const normalizeValidationData = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, validationData);
};

/***/ }),

/***/ "./react-app/modules/validationData/selector/general.js":
/*!**************************************************************!*\
  !*** ./react-app/modules/validationData/selector/general.js ***!
  \**************************************************************/
/*! exports provided: getValidationDataListByIds, getActivityValidationData, getActivityValidationDataByCorrect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationDataListByIds", function() { return getValidationDataListByIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityValidationData", function() { return getActivityValidationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityValidationDataByCorrect", function() { return getActivityValidationDataByCorrect; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../selector/utils */ "./react-app/selector/utils.js");



const getState = state => state.validationData;

const getIds = (state, props) => props.ids;

const getIdsToJson = (state, props) => JSON.stringify(props.ids.sort((a, b) => a - b));

const getActivityId = (state, props) => props.activityId;

const getCorrect = (state, props) => props === null || props === void 0 ? void 0 : props.correct;

const getValidationDataAsList = Object(_selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"])([getState], items => {
  if (!items) {
    return;
  }

  return Object.values(items);
});
const getValidationDataListByIds = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getState, getIds], (items, ids) => {
  if (!items) {
    return;
  }

  let idsToFetch = ids || [];
  return idsToFetch.map(id => items[id]).filter(Boolean);
})(getIdsToJson, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityValidationData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getValidationDataAsList, getActivityId], (items, activityId) => {
  if (!items || !activityId) {
    return;
  }

  return items.filter(el => el.activityId === activityId);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityValidationDataByCorrect = Object(_selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"])([getActivityValidationData, getCorrect], (items, correct) => {
  if (!items || correct === null || correct === undefined) {
    return;
  }

  return items.filter(item => item['correct'] === correct);
});

/***/ }),

/***/ "./react-app/modules/validationData/selector/index.js":
/*!************************************************************!*\
  !*** ./react-app/modules/validationData/selector/index.js ***!
  \************************************************************/
/*! exports provided: select, register, selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return selectors; });
/* harmony import */ var _store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/methodStore/internal */ "./react-app/store/methodStore/internal.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ "./react-app/modules/validationData/selector/general.js");


const processorManager = Object(_store_methodStore_internal__WEBPACK_IMPORTED_MODULE_0__["createProcessorManager"])({
  path: 'selectors',
  name: 'validationData',
  processors: { ..._general__WEBPACK_IMPORTED_MODULE_1__
  }
});
const select = processorManager.process;
const register = processorManager.register;
const selectors = processorManager.processors;

/***/ }),

/***/ "./react-app/reducers/index.js":
/*!*************************************!*\
  !*** ./react-app/reducers/index.js ***!
  \*************************************/
/*! exports provided: getRootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRootReducer", function() { return getRootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _modules_options_features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/options/features */ "./react-app/modules/options/features/index.js");
/* harmony import */ var _modules_lo_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/lo/features */ "./react-app/modules/lo/features/index.js");
/* harmony import */ var _modules_screens_features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/screens/features */ "./react-app/modules/screens/features/index.js");
/* harmony import */ var _modules_activities_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/activities/reducer */ "./react-app/modules/activities/reducer/index.js");
/* harmony import */ var _modules_itemData_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/itemData/reducer */ "./react-app/modules/itemData/reducer/index.js");
/* harmony import */ var _modules_solutionData_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/solutionData/reducer */ "./react-app/modules/solutionData/reducer/index.js");
/* harmony import */ var _modules_uiData_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/uiData/reducer */ "./react-app/modules/uiData/reducer/index.js");
/* harmony import */ var _modules_userData_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/userData/reducer */ "./react-app/modules/userData/reducer/index.js");
/* harmony import */ var _modules_validationData_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/validationData/reducer */ "./react-app/modules/validationData/reducer/index.js");










let reducer = {
  options: _modules_options_features__WEBPACK_IMPORTED_MODULE_1__["default"],
  lo: _modules_lo_features__WEBPACK_IMPORTED_MODULE_2__["default"],
  screens: _modules_screens_features__WEBPACK_IMPORTED_MODULE_3__["default"],
  activities: _modules_activities_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  itemData: _modules_itemData_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  solutionData: _modules_solutionData_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  uiData: _modules_uiData_reducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  userData: _modules_userData_reducer__WEBPACK_IMPORTED_MODULE_8__["default"],
  validationData: _modules_validationData_reducer__WEBPACK_IMPORTED_MODULE_9__["default"]
};
const getRootReducer = (newReducer = {}) => {
  Object.entries(newReducer).forEach(([key, value]) => {
    if (reducer[key]) {
      if (reducer[key] !== value) {
        throw Error(`overwriting reducer ${key}`);
      }
    } else {
      reducer[key] = value;
    }
  });
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({ ...reducer
  });
};

/***/ }),

/***/ "./react-app/sagas.js":
/*!****************************!*\
  !*** ./react-app/sagas.js ***!
  \****************************/
/*! exports provided: default, root, registerSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSagas", function() { return registerSagas; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _modules_lo_features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/lo/features */ "./react-app/modules/lo/features/index.js");
/* harmony import */ var _modules_screens_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/screens/features */ "./react-app/modules/screens/features/index.js");
/* harmony import */ var _modules_activities_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/activities/saga */ "./react-app/modules/activities/saga/index.js");
/* harmony import */ var _modules_uiData_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/uiData/saga */ "./react-app/modules/uiData/saga/index.js");
/* harmony import */ var _modules_userData_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/userData/saga */ "./react-app/modules/userData/saga/index.js");
/* harmony import */ var _modules_validationData_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validationData/saga */ "./react-app/modules/validationData/saga/index.js");







function* rootSaga() {
  const watchers = Object.values({ ..._modules_lo_features__WEBPACK_IMPORTED_MODULE_1__["sagas"],
    ..._modules_screens_features__WEBPACK_IMPORTED_MODULE_2__["sagas"],
    ..._modules_activities_saga__WEBPACK_IMPORTED_MODULE_3__["default"],
    ..._modules_uiData_saga__WEBPACK_IMPORTED_MODULE_4__["default"],
    ..._modules_userData_saga__WEBPACK_IMPORTED_MODULE_5__["default"],
    ..._modules_validationData_saga__WEBPACK_IMPORTED_MODULE_6__["default"]
  }).map(watcher => watcher.apply());
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])(watchers);
}
const root = { ..._modules_lo_features__WEBPACK_IMPORTED_MODULE_1__["sagas"],
  ..._modules_screens_features__WEBPACK_IMPORTED_MODULE_2__["sagas"],
  ..._modules_activities_saga__WEBPACK_IMPORTED_MODULE_3__["default"],
  ..._modules_uiData_saga__WEBPACK_IMPORTED_MODULE_4__["default"],
  ..._modules_userData_saga__WEBPACK_IMPORTED_MODULE_5__["default"],
  ..._modules_validationData_saga__WEBPACK_IMPORTED_MODULE_6__["default"]
};
const extendedSagas = {};
const registerSagas = (sagas = root, middleware) => {
  const newSagas = [];
  Object.entries(sagas).forEach(([key, value]) => {
    if (extendedSagas[key]) {
      if (extendedSagas[key] !== value) {
        throw Error(`overwriting saga ${key}`);
      }
    } else {
      extendedSagas[key] = value;
      newSagas.push(value);
    }
  });

  function* newSagasWatchers() {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])(newSagas.map(saga => saga.apply()));
  }

  middleware.run(newSagasWatchers);
};

/***/ }),

/***/ "./react-app/selector/interface.js":
/*!*****************************************!*\
  !*** ./react-app/selector/interface.js ***!
  \*****************************************/
/*! exports provided: default, getLO, getOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLO", function() { return getLO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
/* harmony import */ var _modules_itemData_getter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/itemData/getter */ "./react-app/modules/itemData/getter/index.js");
/* harmony import */ var _modules_uiData_getter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/uiData/getter */ "./react-app/modules/uiData/getter/index.js");
/* harmony import */ var _modules_userData_getter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/userData/getter */ "./react-app/modules/userData/getter/index.js");
/* harmony import */ var _modules_validationData_getter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/validationData/getter */ "./react-app/modules/validationData/getter/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  activities: { ..._modules_itemData_getter__WEBPACK_IMPORTED_MODULE_0__,
    ..._modules_validationData_getter__WEBPACK_IMPORTED_MODULE_3__,
    getItemsByEnabled: _modules_uiData_getter__WEBPACK_IMPORTED_MODULE_1__["getItemsByEnabled"],
    getItemsByDatatype: _modules_uiData_getter__WEBPACK_IMPORTED_MODULE_1__["getItemsByDataType"],
    getItemsByValidationtype: _modules_uiData_getter__WEBPACK_IMPORTED_MODULE_1__["getItemsByValidationType"],
    getFilled: _modules_userData_getter__WEBPACK_IMPORTED_MODULE_2__["getFilled"],
    getUserdata: _modules_userData_getter__WEBPACK_IMPORTED_MODULE_2__["getUserData"]
  }
});
const getLO = state => state.lo;
const getOptions = state => state.options;

/***/ }),

/***/ "./react-app/selector/utils.js":
/*!*************************************!*\
  !*** ./react-app/selector/utils.js ***!
  \*************************************/
/*! exports provided: createArraySelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArraySelector", function() { return createArraySelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_1__);



function defaultEqualityCheck(currentVal, previousVal) {
  return currentVal === previousVal;
}

function resultCheckMemoize(func, resultCheck = defaultEqualityCheck, argsCheck = defaultEqualityCheck) {
  let lastArgs = null;
  let lastResult = null;
  return (...args) => {
    if (lastArgs !== null && lastArgs.length === args.length && args.every((value, index) => argsCheck(value, lastArgs[index]))) {
      return lastResult;
    }

    lastArgs = args;
    const result = func(...args);
    const sameResult = resultCheck(lastResult, result);
    return sameResult ? lastResult : lastResult = result;
  };
}

const createArraySelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelectorCreator"])(resultCheckMemoize, shallowequal__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./react-app/store/index.js":
/*!**********************************!*\
  !*** ./react-app/store/index.js ***!
  \**********************************/
/*! exports provided: injectReducer, injectSagas, default, getState, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectReducer", function() { return injectReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectSagas", function() { return injectSagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./react-app/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sagas */ "./react-app/sagas.js");
/*eslint-env node, browser */




const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();

if (false) {}

const injectReducer = newReducer => {
  const rootReducer = Object(_reducers__WEBPACK_IMPORTED_MODULE_2__["getRootReducer"])(newReducer);
  store.replaceReducer(rootReducer);
};
const injectSagas = newSaga => {
  Object(_sagas__WEBPACK_IMPORTED_MODULE_3__["registerSagas"])(newSaga, sagaMiddleware);
};
const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: Object(_reducers__WEBPACK_IMPORTED_MODULE_2__["getRootReducer"])(),
  middleware: [sagaMiddleware]
});
injectSagas();
/* harmony default export */ __webpack_exports__["default"] = (store);
const getState = store.getState;
const dispatch = store.dispatch;

/***/ }),

/***/ "./react-app/store/methodStore/internal.js":
/*!*************************************************!*\
  !*** ./react-app/store/methodStore/internal.js ***!
  \*************************************************/
/*! exports provided: process, register, createProcessorManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProcessorManager", function() { return createProcessorManager; });
/* harmony import */ var _methodsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methodsStore */ "./react-app/store/methodStore/methodsStore.js");

let hash = {};
const process = (path, data, fallback) => {
  return Object(_methodsStore__WEBPACK_IMPORTED_MODULE_0__["process"])(hash, path, data, fallback);
};
const register = (path, method) => {
  hash = Object(_methodsStore__WEBPACK_IMPORTED_MODULE_0__["register"])(hash, path, method);
};
const createProcessorManager = ({
  path,
  name,
  processors
}) => {
  const suffix = 'general';
  const prefix = `${path}.${name}`;
  Object.entries(processors).forEach(([methodName, method]) => {
    register(`${prefix}.${methodName}.${suffix}`, method);
  });

  const processOnScope = (methodName, extension, data) => {
    return process(`${prefix}.${methodName}.${extension}`, data, `${prefix}.${methodName}.${suffix}`);
  };

  const registerOnScope = (methodName, extension, method) => {
    register(`${prefix}.${methodName}.${extension}`, method);
  };

  return {
    register: registerOnScope,
    process: processOnScope,
    processors
  };
};

/***/ }),

/***/ "./react-app/store/methodStore/methodsStore.js":
/*!*****************************************************!*\
  !*** ./react-app/store/methodStore/methodsStore.js ***!
  \*****************************************************/
/*! exports provided: register, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony import */ var _utils_pathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pathUtils */ "./react-app/utils/pathUtils.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);


const register = (hash, path, method) => {
  const steps = path.split('.');
  const ref = {};
  steps.reduce((acc, val, k) => {
    if (k < steps.length - 1) {
      acc[val] = acc[val] || {};
    } else {
      acc[val] = method;
    }

    return acc[val];
  }, ref);

  if (Object(_utils_pathUtils__WEBPACK_IMPORTED_MODULE_0__["getNestedMethodByPath"])(hash, path)) {
    logger.warn(`overwriting processor in path ${path}`);
  }

  return lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()(hash, ref);
};
const process = (hash, path, data, fallback) => {
  let method = Object(_utils_pathUtils__WEBPACK_IMPORTED_MODULE_0__["getNestedMethodByPath"])(hash, path);
  let fallbackPath = fallback;

  if (!method) {
    if (!fallback) {
      let steps = path.split('.');
      steps = steps.splice(steps.length - 1, 1, 'general');
      fallbackPath = steps.join('.');
    }

    method = Object(_utils_pathUtils__WEBPACK_IMPORTED_MODULE_0__["getNestedMethodByPath"])(hash, fallbackPath);
  }

  if (method) {
    return method.apply(null, [...[data].flat()]);
  } else {
    throw Error(`no methods ${path} nor ${fallbackPath} found in processors`);
  }
};

/***/ }),

/***/ "./react-app/utils/actions/actionIn.js":
/*!*********************************************!*\
  !*** ./react-app/utils/actions/actionIn.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/interface */ "./react-app/actions/interface.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./react-app/store/index.js");
/* harmony import */ var _pathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pathUtils */ "./react-app/utils/pathUtils.js");
/* harmony import */ var _actionOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionOut */ "./react-app/utils/actions/actionOut.js");
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventManager */ "./react-app/utils/actions/eventManager.js");






const actionIn = (action, data) => {
  const methodPath = Object(_pathUtils__WEBPACK_IMPORTED_MODULE_2__["normalizeObjectPath"])(action, {
    all: 'lower',
    last: 'camel'
  });
  const method = Object(_pathUtils__WEBPACK_IMPORTED_MODULE_2__["getNestedMethodByPath"])(_actions_interface__WEBPACK_IMPORTED_MODULE_0__["default"], methodPath);
  const successAction = `${action}${_actionOut__WEBPACK_IMPORTED_MODULE_3__["successSufix"]}`;
  const errorAction = `${action}${_actionOut__WEBPACK_IMPORTED_MODULE_3__["errorSufix"]}`;
  const promise = new Promise((resolve, reject) => {
    const onEvent = ({
      event,
      data
    }) => {
      Object(_eventManager__WEBPACK_IMPORTED_MODULE_4__["removeListener"])(successAction, onEvent);
      Object(_eventManager__WEBPACK_IMPORTED_MODULE_4__["removeListener"])(errorAction, onEvent);

      if (event === successAction) {
        resolve(data || true);
      } else {
        reject(event);
      }
    };

    if (method) {
      Object(_eventManager__WEBPACK_IMPORTED_MODULE_4__["addListener"])(successAction, onEvent);
      Object(_eventManager__WEBPACK_IMPORTED_MODULE_4__["addListener"])(errorAction, onEvent);
      Object(_store__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(method.call(null, data));
    } else {
      reject(`no action found for ${action}`);
    }
  });
  return promise;
};

/* harmony default export */ __webpack_exports__["default"] = (actionIn);

/***/ }),

/***/ "./react-app/utils/actions/actionOut.js":
/*!**********************************************!*\
  !*** ./react-app/utils/actions/actionOut.js ***!
  \**********************************************/
/*! exports provided: successSufix, errorSufix, actionSuccess, actionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successSufix", function() { return successSufix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSufix", function() { return errorSufix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSuccess", function() { return actionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionError", function() { return actionError; });
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventManager */ "./react-app/utils/actions/eventManager.js");

const successSufix = '_SUCCESS';
const errorSufix = '_ERROR';
const actionSuccess = (action, payload) => {
  Object(_eventManager__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"])(`${action.type}${successSufix}`, payload);
};
const actionError = (action, message) => {
  window.logger.error(`ReactError: failed to complete setState for ${action.type}`, message);
  Object(_eventManager__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"])(`${action.type}${errorSufix}`, message);
};

/***/ }),

/***/ "./react-app/utils/actions/eventManager.js":
/*!*************************************************!*\
  !*** ./react-app/utils/actions/eventManager.js ***!
  \*************************************************/
/*! exports provided: addListener, removeListener, dispatchEvent, addEventsCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeListener", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchEvent", function() { return dispatchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventsCallback", function() { return addEventsCallback; });
const listeners = {};

const defaultCallback = (event, data) => {
  logger.log(`firing event out of react => ${event}: `, data);
};

let callback;
let context;
const addListener = (event, callback, context) => {
  listeners[event] = listeners[event] || [];
  listeners[event].push({
    callback,
    context
  });
};
const removeListener = (event, callback) => {
  if (listeners[event]) {
    listeners[event] = listeners[event].filter(el => el.callback !== callback);

    if (!listeners[event].length) {
      delete listeners[event];
    }
  }
};
const dispatchEvent = (event, data) => {
  if (listeners[event]) {
    listeners[event].forEach(el => el.callback.apply(el.context || null, [{
      event,
      data
    }]));
  }

  let cbk = callback || defaultCallback;
  cbk.apply(context || null, [event, data]);
};
const addEventsCallback = (cbk, ctx) => {
  callback = cbk;
  context = ctx;
};

/***/ }),

/***/ "./react-app/utils/elementRenderer.jsx":
/*!*********************************************!*\
  !*** ./react-app/utils/elementRenderer.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./react-app/store/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_activities_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/activities/components */ "./react-app/modules/activities/components/index.jsx");





/* harmony default export */ __webpack_exports__["default"] = ((props, destination) => {
  Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_activities_components__WEBPACK_IMPORTED_MODULE_4__["default"], props)), destination);
});

/***/ }),

/***/ "./react-app/utils/optionsValidate.js":
/*!********************************************!*\
  !*** ./react-app/utils/optionsValidate.js ***!
  \********************************************/
/*! exports provided: optionsValidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsValidate", function() { return optionsValidate; });
const optionsValidate = (optionValues, options, optionsType) => {
  let keys = Object.keys(optionValues);
  let key;

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    let option = options[key];

    if (option) {
      let scope = option.scope.toLowerCase();

      if (optionsType === 'lo') {
        if (scope !== 'global' && scope !== 'lo') {
          delete optionValues[key];
        }
      } else if (optionsType === 'screen') {
        if (scope === 'lo') {
          delete optionValues[key];
        }
      }
    } else {
      delete optionValues[key];
    }
  }

  return optionValues;
};

/***/ }),

/***/ "./react-app/utils/pathUtils.js":
/*!**************************************!*\
  !*** ./react-app/utils/pathUtils.js ***!
  \**************************************/
/*! exports provided: getNestedMethodByPath, normalizeObjectPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNestedMethodByPath", function() { return getNestedMethodByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeObjectPath", function() { return normalizeObjectPath; });
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_lowerCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/lowerCase */ "./node_modules/lodash/lowerCase.js");
/* harmony import */ var lodash_lowerCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_lowerCase__WEBPACK_IMPORTED_MODULE_1__);


const getNestedMethodByPath = (object, path) => {
  let pathList = path.split('.');
  let method = object;
  pathList.forEach(str => {
    if (method && method.hasOwnProperty(str)) {
      method = method[str];
    } else {
      method = null;
    }
  });
  return method;
};
const normalizeObjectPath = (path, options = {
  all: 'lower'
}) => {
  let methodPath = path.split('.');
  return methodPath.map((str, index) => {
    if (index === methodPath.length - 1 && options.hasOwnProperty('last')) {
      if (options.last === 'camel') {
        return lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default()(str);
      }

      return str;
    } else if (options.hasOwnProperty('all')) {
      if (options.all === 'lower') {
        return lodash_lowerCase__WEBPACK_IMPORTED_MODULE_1___default()(str);
      }

      return str;
    }
  }).join('.');
};

/***/ }),

/***/ "./react-app/utils/selectorFetcher.js":
/*!********************************************!*\
  !*** ./react-app/utils/selectorFetcher.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selector_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selector/interface */ "./react-app/selector/interface.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./react-app/store/index.js");
/* harmony import */ var _pathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pathUtils */ "./react-app/utils/pathUtils.js");




const selectorFetcher = (methodName, data) => {
  const methodPath = Object(_pathUtils__WEBPACK_IMPORTED_MODULE_2__["normalizeObjectPath"])(methodName, {
    all: 'lower',
    last: 'camel'
  });
  const method = Object(_pathUtils__WEBPACK_IMPORTED_MODULE_2__["getNestedMethodByPath"])(_selector_interface__WEBPACK_IMPORTED_MODULE_0__["default"], methodPath);

  if (method) {
    return method.apply(null, [Object(_store__WEBPACK_IMPORTED_MODULE_1__["getState"])(), data, _store__WEBPACK_IMPORTED_MODULE_1__["dispatch"]]);
  } else {
    logger.warn(`couldnt find getter ${methodName}`);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (selectorFetcher);

/***/ }),

/***/ "dll-reference PlayerVendors":
/*!********************************!*\
  !*** external "PlayerVendors" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PlayerVendors;

/***/ })

/******/ });
//# sourceMappingURL=engine-react-lib.bundle.js.map
(window["webpackJsonpReactComponents"] = window["webpackJsonpReactComponents"] || []).push([["ICCrossword"],{

/***/ "./react-app/modules/activities/components/HOC/WithNestedActivityData.jsx":
/*!********************************************************************************!*\
  !*** ./react-app/modules/activities/components/HOC/WithNestedActivityData.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _selector_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selector/index */ "./react-app/modules/activities/selector/index.js");






const WithNestedActivityData = (WrappedComponent, registerActivity) => {
  const WithNestedActivityDataComp = props => {
    const copy = { ...props
    };
    const {
      wrappedActivityData,
      activityType,
      activityId
    } = props;
    delete copy['wrappedActivityData'];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
      registerActivity({
        activityType,
        activityId
      });
    }, []);
    let mapProps = wrappedActivityData || {};

    if (wrappedActivityData) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, copy, mapProps));
    } else {
      return null;
    }
  };

  WithNestedActivityDataComp.propTypes = {
    wrappedActivityData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      screenId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
      activityId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
      activityType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
    })
  };

  const mapStateToProps = (state, ownProps) => ({
    wrappedActivityData: Object(_selector_index__WEBPACK_IMPORTED_MODULE_4__["getActivityByActivityId"])(state, ownProps)
  });

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, null)(WithNestedActivityDataComp);
};

/* harmony default export */ __webpack_exports__["default"] = (WithNestedActivityData);

/***/ }),

/***/ "./react-app/modules/activities/utils/charCodeUtils.js":
/*!*************************************************************!*\
  !*** ./react-app/modules/activities/utils/charCodeUtils.js ***!
  \*************************************************************/
/*! exports provided: keyCodes, isArrowCode, isBackspace, isTab, isText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyCodes", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrowCode", function() { return isArrowCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBackspace", function() { return isBackspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTab", function() { return isTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isText", function() { return isText; });
const keyCodes = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DASH: 45,
  DELETE: 46,
  COMMA: 188,
  PERIOD: 190,
  NUMERIC: [...Array(10).keys()].map(n => n + 48),
  CAPITAL_LETTERS: [...Array(23).keys()].map(n => n + 65),
  LETTERS: [...Array(23).keys()].map(n => n + 97),
  NON_ENGLISH_RANGE: {
    low: 128,
    high: 1273
  }
};
const isArrowCode = code => {
  const codes = [keyCodes.LEFT, keyCodes.UP, keyCodes.RIGHT, keyCodes.DOWN];
  return codes.includes(code);
};
const isBackspace = code => {
  return code === keyCodes.BACKSPACE;
};
const isTab = code => {
  return code === keyCodes.TAB;
};
const isText = code => {
  return code === keyCodes.DASH || keyCodes.NUMERIC.includes(code) || keyCodes.CAPITAL_LETTERS.includes(code) || keyCodes.LETTERS.includes(code) || code >= keyCodes.NON_ENGLISH_RANGE.low && code <= keyCodes.NON_ENGLISH_RANGE.high;
};

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/Cells/ICCrosswordCellClue.jsx":
/*!**********************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/Cells/ICCrosswordCellClue.jsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ui.jsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./react-app/modules/activityTypes/ICCrossword/context.js");
/* harmony import */ var _selector_cellsItemData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selector/cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js");







const ICCrosswordCellClue = ({
  itemData
}) => {
  const getWordByAlign = align => itemData.find(w => w.align === align);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["ICCrosswordHighlightContext"].Consumer, null, highlightContext => {
    var _getWordByAlign, _getWordByAlign2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_3__["ICCrosswordCellClue"], {
      horizontalId: (_getWordByAlign = getWordByAlign('h')) === null || _getWordByAlign === void 0 ? void 0 : _getWordByAlign.id,
      verticalId: (_getWordByAlign2 = getWordByAlign('v')) === null || _getWordByAlign2 === void 0 ? void 0 : _getWordByAlign2.id,
      onMouseOver: () => {
        highlightContext.mouseOverEvent(itemData.map(({
          id
        }) => id));
      },
      onMouseOut: () => {
        highlightContext.mouseOutEvent();
      }
    }, itemData.map((w, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_3__["ICCrosswordClueInCell"], {
      key: i,
      clue: w.clue,
      active: false,
      orientation: w.align === 'h' ? 'horizontal' : 'vertical'
    })));
  });
};

ICCrosswordCellClue.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  itemData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    cells: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
    align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};

const mapStateToProps = (state, ownProps) => ({
  itemData: Object(_selector_cellsItemData__WEBPACK_IMPORTED_MODULE_5__["getCellWords"])(state, ownProps)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ICCrosswordCellClue));

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/Cells/ICCrosswordCellInput.jsx":
/*!***********************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/Cells/ICCrosswordCellInput.jsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ui.jsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./react-app/modules/activityTypes/ICCrossword/context.js");
/* harmony import */ var _screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../screens/selector/optionValues */ "./react-app/modules/screens/selector/optionValues.js");
/* harmony import */ var _selector_cellsValidationData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selector/cellsValidationData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsValidationData.js");
/* harmony import */ var _selector_cellsSolutionData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../selector/cellsSolutionData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsSolutionData.js");
/* harmony import */ var _selector_cellsUIData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../selector/cellsUIData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsUIData.js");
/* harmony import */ var _selector_cellsUserData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../selector/cellsUserData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsUserData.js");
/* harmony import */ var _selector_cellsItemData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../selector/cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js");












const ICCrossworCellInput = props => {
  const {
    id,
    lowercase,
    words,
    solutionData,
    uiData,
    wordsUIData = [],
    wordsValidationData = [],
    userData
  } = props;
  const [orientations, setOrientations] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [label, setLabel] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const letter = uiData.dataType === 'solution' ? solutionData : userData;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let cellLabel;
    words.forEach(w => {
      if (w.cells.indexOf(id) === 0) {
        cellLabel = w.label;
      }
    });
    setLabel(cellLabel);
  }, [words, id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const orient = words.map(word => {
      const {
        cells,
        label,
        align
      } = word;
      const wordId = word.id;
      let relativePosition = 'middle';

      if (cells.indexOf(id) === 0) {
        relativePosition = 'first';
      } else if (cells.indexOf(id) === cells.length - 1) {
        relativePosition = 'last';
      }

      const wValidation = wordsValidationData.find(vd => vd.id === wordId);
      const wUIData = wordsUIData.find(uid => uid.id === wordId);
      const retValue = {
        relativePosition,
        orientation: align === 'v' ? 'vertical' : 'horizontal',
        wordLabel: label,
        length: cells.length,
        position: cells.indexOf(id),
        classes: (wUIData === null || wUIData === void 0 ? void 0 : wUIData.extra) || []
      };

      if (wUIData !== null && wUIData !== void 0 && wUIData.validationType && wValidation !== null && wValidation !== void 0 && wValidation.hasOwnProperty('correct')) {
        retValue.isCorrect = wValidation.correct;
      }

      if ((wUIData === null || wUIData === void 0 ? void 0 : wUIData.validationType) === 'correct_incorrect_empty' && wValidation !== null && wValidation !== void 0 && wValidation.hasOwnProperty('filled')) {
        retValue.isFilled = wValidation.filled;
      }

      return retValue;
    });
    setOrientations(orient);
  }, [words, wordsValidationData, uiData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["ICCrosswordUserDataContext"].Consumer, null, userContext => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["ICCrosswordFocusContext"].Consumer, null, focusContext => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["ICCrosswordHighlightContext"].Consumer, null, highlightContext => {
    var _highlightContext$hig;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_3__["ICCrosswordCellInput"], {
      letter: letter,
      enabled: uiData.enabled,
      label: label,
      lowerCase: lowercase,
      focused: focusContext.focused === id,
      highlighted: (_highlightContext$hig = highlightContext.highlighted) === null || _highlightContext$hig === void 0 ? void 0 : _highlightContext$hig.includes(id),
      orientations: orientations,
      onKey: evt => {
        userContext.cellKeyEvt(id, evt.type, evt.keyCode);
        focusContext.keyboardEvent(id, evt.type, evt.keyCode, evt.shiftKey);
      },
      onClick: () => {
        focusContext.clickEvent(id);
      },
      customEvents: [{
        name: 'specialchars:inserted',
        callback: evt => {
          userContext.cellChange(id, evt.value);
          focusContext.changeEvent(id);
        }
      }]
    });
  })));
};

ICCrossworCellInput.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  lowercase: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  words: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })),
  uiData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    enabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    dataType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  wordsUIData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    validationType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    extra: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })),
  wordsValidationData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    correct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    filled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  })),
  solutionData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  userData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

const mapStateToProps = (state, ownProps) => ({
  words: Object(_selector_cellsItemData__WEBPACK_IMPORTED_MODULE_10__["getCellWords"])(state, ownProps),
  uiData: Object(_selector_cellsUIData__WEBPACK_IMPORTED_MODULE_8__["getCellUIDataById"])(state, ownProps),
  userData: Object(_selector_cellsUserData__WEBPACK_IMPORTED_MODULE_9__["getCellUserData"])(state, ownProps),
  wordsValidationData: Object(_selector_cellsValidationData__WEBPACK_IMPORTED_MODULE_6__["getCellWordsValidationData"])(state, ownProps),
  wordsUIData: Object(_selector_cellsUIData__WEBPACK_IMPORTED_MODULE_8__["getCellWordsUIData"])(state, ownProps),
  solutionData: Object(_selector_cellsSolutionData__WEBPACK_IMPORTED_MODULE_7__["getCellSolutionData"])(state, ownProps),
  lowercase: Object(_screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_5__["caseIsLower"])(state, ownProps)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ICCrossworCellInput));

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/Clues/ICCrosswordClue.jsx":
/*!******************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/Clues/ICCrosswordClue.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ "./react-app/modules/activityTypes/ICCrossword/context.js");
/* harmony import */ var _ui_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ui.jsx");





const ICCrossworClue = ({
  label,
  clue,
  id
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_2__["ICCrosswordHighlightContext"].Consumer, null, highlightContext => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_3__["ICCrosswordClue"], {
    label: label,
    clue: clue,
    onMouseOver: () => highlightContext.mouseOverEvent([id]),
    onMouseOut: () => highlightContext.mouseOutEvent()
  }));
};

ICCrossworClue.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  clue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ICCrossworClue);

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/Clues/ICCrosswordClueList.jsx":
/*!**********************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/Clues/ICCrosswordClueList.jsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _selector_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selector/general */ "./react-app/modules/activityTypes/ICCrossword/selector/general.js");
/* harmony import */ var _ui_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ui.jsx");
/* harmony import */ var _ICCrosswordClue_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ICCrosswordClue.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/Clues/ICCrosswordClue.jsx");








const ICCrosswordClueList = ({
  align,
  clues
}) => {
  const getClueComp = (clue, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ICCrosswordClue_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    key: idx
  }, clue));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_5__["ICCrosswordClueList"], {
    orientation: align === 'v' ? 'vertical' : 'horizontal'
  }, clues.map(getClueComp));
};

ICCrosswordClueList.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  clues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

const mapStateToProps = (state, ownProps) => ({
  clues: Object(_selector_general__WEBPACK_IMPORTED_MODULE_4__["getItemsByAlign"])(state, ownProps)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ICCrosswordClueList));

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/Clues/ICCrosswordClues.jsx":
/*!*******************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/Clues/ICCrosswordClues.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ICCrosswordClueList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ICCrosswordClueList.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/Clues/ICCrosswordClueList.jsx");
/* harmony import */ var _ui_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ui.jsx");





const ICCrosswordClues = ({
  activityId,
  screenId,
  cluesInColumns
}) => {
  const getClueListByDirection = (direction, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ICCrosswordClueList_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    align: direction,
    activityId: activityId,
    screenId: screenId
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_3__["ICCrosswordClues"], {
    cluesInColumn: cluesInColumns
  }, ['h', 'v'].map(getClueListByDirection));
};

ICCrosswordClues.propTypes = {
  activityId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  screenId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  cluesInColumns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (ICCrosswordClues);

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/ICCrossword.jsx":
/*!********************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/ICCrossword.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _activities_components_HOC_WithNestedActivityData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../activities/components/HOC/WithNestedActivityData */ "./react-app/modules/activities/components/HOC/WithNestedActivityData.jsx");
/* harmony import */ var _registerActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registerActivity */ "./react-app/modules/activityTypes/ICCrossword/registerActivity.js");
/* harmony import */ var _screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../screens/selector/optionValues */ "./react-app/modules/screens/selector/optionValues.js");
/* harmony import */ var _selector_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selector/general */ "./react-app/modules/activityTypes/ICCrossword/selector/general.js");
/* harmony import */ var _activities_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../activities/selector */ "./react-app/modules/activities/selector/index.js");
/* harmony import */ var _ICCrosswordGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ICCrosswordGrid */ "./react-app/modules/activityTypes/ICCrossword/components/ICCrosswordGrid.jsx");
/* harmony import */ var _ui_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ui.jsx");
/* harmony import */ var _Clues_ICCrosswordClues_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Clues/ICCrosswordClues.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/Clues/ICCrosswordClues.jsx");
/* harmony import */ var _managers_ICCrosswordHighlightManager_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./managers/ICCrosswordHighlightManager.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/managers/ICCrosswordHighlightManager.jsx");
/* harmony import */ var _managers_ICCrosswordUserDataManager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./managers/ICCrosswordUserDataManager */ "./react-app/modules/activityTypes/ICCrossword/components/managers/ICCrosswordUserDataManager.jsx");
/* harmony import */ var _managers_ICCrosswordFocusManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./managers/ICCrosswordFocusManager */ "./react-app/modules/activityTypes/ICCrossword/components/managers/ICCrosswordFocusManager.jsx");















const ICCrossword = ({
  activityId,
  visible,
  cluesAreInside,
  cluesInColumns,
  screenId,
  colSize,
  rowSize,
  transactions
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !transactions.length && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_managers_ICCrosswordFocusManager__WEBPACK_IMPORTED_MODULE_13__["default"], {
    activityId: activityId,
    screenId: screenId,
    rowSize: rowSize,
    colSize: colSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_managers_ICCrosswordUserDataManager__WEBPACK_IMPORTED_MODULE_12__["default"], {
    activityId: activityId,
    screenId: screenId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_managers_ICCrosswordHighlightManager_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
    activityId: activityId,
    screenId: screenId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_9__["ICCrossword"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ICCrosswordGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activityId: activityId,
    screenId: screenId,
    cols: colSize,
    rows: rowSize
  }), !cluesAreInside && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Clues_ICCrosswordClues_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activityId: activityId,
    screenId: screenId,
    cluesInColumns: cluesInColumns
  }))))));
};

ICCrossword.propTypes = {
  activityId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cluesAreInside: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  cluesInColumns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  screenId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  colSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  rowSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  transactions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

const mapStatetoProps = (state, ownProps) => ({
  cluesAreInside: Object(_screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_5__["cluePositionIsInside"])(state, ownProps),
  cluesInColumns: Object(_screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_5__["cluesInColumnsIsOn"])(state, ownProps),
  colSize: Object(_selector_general__WEBPACK_IMPORTED_MODULE_6__["getICCrosswordColSize"])(state, ownProps),
  rowSize: Object(_selector_general__WEBPACK_IMPORTED_MODULE_6__["getICCrosswordRowSize"])(state, ownProps),
  transactions: Object(_activities_selector__WEBPACK_IMPORTED_MODULE_7__["getActivityTransactionByActivityId"])(state, ownProps)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_activities_components_HOC_WithNestedActivityData__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStatetoProps, null)(ICCrossword), _registerActivity__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/ICCrosswordGrid.jsx":
/*!************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/ICCrosswordGrid.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ICCrosswordRow_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ICCrosswordRow.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ICCrosswordRow.jsx");
/* harmony import */ var _ui_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ui.jsx");





const ICCrosswordGrid = ({
  rows,
  cols,
  activityId,
  screenId
}) => {
  let rowComps = [];

  for (let i = 0; i < rows; i++) {
    rowComps.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ICCrosswordRow_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      index: i,
      cols: cols,
      activityId: activityId,
      screenId: screenId
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_3__["ICCrosswordGrid"], null, rowComps);
};

ICCrosswordGrid.propTypes = {
  rows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cols: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  activityId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  screenId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ICCrosswordGrid);

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/ICCrosswordRow.jsx":
/*!***********************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/ICCrosswordRow.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Cells_ICCrosswordCellInput_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cells/ICCrosswordCellInput.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/Cells/ICCrosswordCellInput.jsx");
/* harmony import */ var _Cells_ICCrosswordCellClue_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cells/ICCrosswordCellClue.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/Cells/ICCrosswordCellClue.jsx");
/* harmony import */ var _ui_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui.jsx */ "./react-app/modules/activityTypes/ICCrossword/components/ui.jsx");
/* harmony import */ var _selector_cellsItemData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selector/cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js");
/* harmony import */ var _screens_selector_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../screens/selector/index.js */ "./react-app/modules/screens/selector/index.js");










const ICCrosswordRow = ({
  cells,
  activityId,
  screenId
}) => {
  const cellComps = cells.map((cell, i) => {
    if (!cell) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_6__["ICCrosswordCellInvisible"], {
        key: i
      });
    } else if (cell.id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cells_ICCrosswordCellInput_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        key: i
      }, cell, {
        screenId: screenId,
        activityId: activityId
      }));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cells_ICCrosswordCellClue_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        key: i
      }, cell, {
        screenId: screenId,
        activityId: activityId
      }));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_jsx__WEBPACK_IMPORTED_MODULE_6__["ICCrosswordRow"], null, cellComps);
};

ICCrosswordRow.propTypes = {
  cells: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  activityId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  screenId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

const mapStateToProps = (state, props) => ({
  cells: Object(_selector_cellsItemData__WEBPACK_IMPORTED_MODULE_7__["getActivityCellsByRow"])(state, props),
  cluesAreInside: Object(_screens_selector_index_js__WEBPACK_IMPORTED_MODULE_8__["getCluePosition"])(state, props)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ICCrosswordRow));

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/managers/ICCrosswordFocusManager.jsx":
/*!*****************************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/managers/ICCrosswordFocusManager.jsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _selector_cellsUIData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selector/cellsUIData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsUIData.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context */ "./react-app/modules/activityTypes/ICCrossword/context.js");
/* harmony import */ var _activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../activities/utils/charCodeUtils */ "./react-app/modules/activities/utils/charCodeUtils.js");










const ICCrosswordFocusManager = ({
  editableCells,
  editableWords,
  rowSize,
  colSize,
  children
}) => {
  const [focusedWord, setFocusedWord] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [focusedCell, setFocusedCell] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const getCellByPosition = ({
    x,
    y
  }) => {
    return editableCells.find(cell => cell.x === x && cell.y === y);
  };

  const getEditableCellsInWord = word => {
    return word.cells.map(id => editableCells.find(c => c.id === id)).filter(Boolean);
  };

  const getCellWordsOrderedByAlign = cell => {
    return lodash_sortBy__WEBPACK_IMPORTED_MODULE_3___default()(cell.words.map(id => editableWords.find(w => w.id === id)).filter(Boolean), 'align');
  };

  const orderedWords = lodash_sortBy__WEBPACK_IMPORTED_MODULE_3___default()(editableWords, 'align');

  const findNextEditableCellByArrow = ({
    xStep,
    yStep
  }, cell) => {
    let xpos = cell.x;
    let ypos = cell.y;
    let nextCell;

    do {
      xpos += xStep;
      ypos += yStep;
      nextCell = getCellByPosition({
        x: xpos,
        y: ypos
      });

      if (nextCell) {
        cell = nextCell;
        break;
      }
    } while (xpos >= 0 && xpos <= rowSize && ypos >= 0 && ypos <= colSize);

    return cell;
  };

  const findNextEditableCellInWord = (word, cell, direction) => {
    if (word.cells.includes(cell.id)) {
      const wordEditCells = getEditableCellsInWord(word);
      const idxCellWord = lodash_findIndex__WEBPACK_IMPORTED_MODULE_4___default()(wordEditCells, c => c.id === cell.id);
      let newidxCellWord = idxCellWord + direction;

      if (newidxCellWord < 0 || newidxCellWord >= wordEditCells.length) {
        return null;
      } else {
        return wordEditCells[newidxCellWord];
      }
    }
  };

  const findNextEditableWordAndCell = (word, cell, direction) => {
    let nextWord = word;
    let nextCell = findNextEditableCellInWord(word, cell, direction);

    if (!nextCell) {
      const idxWord = lodash_findIndex__WEBPACK_IMPORTED_MODULE_4___default()(orderedWords, w => w.id === word.id);
      nextWord = orderedWords[(idxWord + orderedWords.length + direction) % orderedWords.length];
      const wordEditCells = getEditableCellsInWord(nextWord);
      const idxCellWord = direction === 1 ? 0 : wordEditCells.length - 1;
      nextCell = wordEditCells[idxCellWord];
    }

    return [nextCell, nextWord];
  };

  const checkForArrowKeyEvt = (id, keyCode) => {
    let nextCell, nextWord;

    if (Object(_activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_7__["isArrowCode"])(keyCode)) {
      let xStep = 0;
      let yStep = 0;

      switch (keyCode) {
        case _activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_7__["keyCodes"].UP:
          yStep = -1;
          break;

        case _activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_7__["keyCodes"].DOWN:
          yStep = 1;
          break;

        case _activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_7__["keyCodes"].LEFT:
          xStep = -1;
          break;

        case _activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_7__["keyCodes"].RIGHT:
          xStep = 1;
          break;
      }

      nextCell = findNextEditableCellByArrow({
        xStep,
        yStep
      }, id);

      if (nextCell) {
        nextWord = getCellWordsOrderedByAlign(nextCell)[0];
      }
    }

    return [nextCell, nextWord];
  };

  const checkForKeyEvent = (cell, word, keyCode, shift) => {
    let nextCell, nextWord;
    const back = Object(_activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_7__["isBackspace"])(keyCode);
    const text = Object(_activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_7__["isText"])(keyCode);
    const tab = Object(_activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_7__["isTab"])(keyCode);

    if (back || text || tab) {
      let direction = back || tab && shift ? -1 : 1;
      [nextCell, nextWord] = findNextEditableWordAndCell(word, cell, direction);
    }

    return [nextCell, nextWord];
  };

  const keyboardEvent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((id, evtType, keyCode, shift) => {
    let [cell, word] = getFocusedCellAndWord(id);
    let nextCell, nextWord;

    if (evtType === 'keyup') {
      [nextCell, nextWord] = checkForArrowKeyEvt(cell, keyCode);
    } else if (evtType === 'keydown') {
      [nextCell, nextWord] = checkForKeyEvent(cell, word, keyCode, shift);
    }

    if (nextCell && nextWord) {
      updateFocusedCellAndWord(nextCell, nextWord);
    }
  });
  const changeEvent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    let [cell, word] = getFocusedCellAndWord(id);
    let [nextCell, nextWord] = findNextEditableWordAndCell(word, cell, 1);

    if (nextCell && nextWord) {
      updateFocusedCellAndWord(nextCell, nextWord);
    }
  });
  const clickEvent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    const cell = editableCells.find(c => c.id === id);
    updateFocusedCellAndWord(cell, getCellWordsOrderedByAlign(cell)[0]);
  });

  const getFocusedCellAndWord = id => {
    let word;
    let cell;

    if (id === focusedCell) {
      cell = editableCells.find(c => c.id === focusedCell);
      word = editableWords.find(w => w.id === focusedWord);
      word = word || getCellWordsOrderedByAlign(cell)[0];
    } else {
      cell = editableCells.find(c => c.id === id);
      word = getCellWordsOrderedByAlign(cell)[0];
    }

    return [cell, word];
  };

  const updateFocusedCellAndWord = (cell, word) => {
    setFocusedCell(cell.id);
    setFocusedWord(word.id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (editableCells.length && !editableCells.find(({
      id
    }) => id === focusedCell)) {
      const _1EditCell = editableCells[0];
      const _1EditWord = getCellWordsOrderedByAlign(_1EditCell)[0];
      setFocusedWord(_1EditWord === null || _1EditWord === void 0 ? void 0 : _1EditWord.id);
      setFocusedCell(_1EditCell === null || _1EditCell === void 0 ? void 0 : _1EditCell.id);
    }
  }, [editableCells, focusedCell]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_6__["ICCrosswordFocusContext"].Provider, {
    value: {
      focused: focusedCell,
      keyboardEvent,
      clickEvent,
      changeEvent
    }
  }, children);
};

ICCrosswordFocusManager.propTypes = {
  rowSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  colSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  editableCells: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  editableWords: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

const mapStateToProps = (state, ownProps) => ({
  editableCells: Object(_selector_cellsUIData__WEBPACK_IMPORTED_MODULE_5__["getEnabledCells"])(state, ownProps),
  editableWords: Object(_selector_cellsUIData__WEBPACK_IMPORTED_MODULE_5__["getEnabledCellsWords"])(state, ownProps)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ICCrosswordFocusManager));

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/managers/ICCrosswordHighlightManager.jsx":
/*!*********************************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/managers/ICCrosswordHighlightManager.jsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./react-app/modules/activityTypes/ICCrossword/context.js");
/* harmony import */ var _itemData_selector_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../itemData/selector/general */ "./react-app/modules/itemData/selector/general.js");






const ICCrosswordHighlightManager = ({
  words,
  children
}) => {
  const [highlightedCells, setHighlightedCells] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [highlightedWords, setHighlightedWords] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const mouseOverEvent = ids => {
    setHighlightedCells(words.filter(({
      id
    }) => ids.includes(id)).map(({
      cells
    }) => cells).flat());
    setHighlightedWords(ids);
  };

  const mouseOutEvent = () => {
    setHighlightedCells([]);
    setHighlightedWords([]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_3__["ICCrosswordHighlightContext"].Provider, {
    value: {
      highlighted: highlightedCells,
      highlightedWords: highlightedWords,
      mouseOverEvent,
      mouseOutEvent
    }
  }, children);
};

ICCrosswordHighlightManager.propTypes = {
  words: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

const mapStateToProps = (state, ownProps) => ({
  words: Object(_itemData_selector_general__WEBPACK_IMPORTED_MODULE_4__["getActivityItemData"])(state, ownProps)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ICCrosswordHighlightManager));

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/managers/ICCrosswordUserDataManager.jsx":
/*!********************************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/managers/ICCrosswordUserDataManager.jsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../saga */ "./react-app/modules/activityTypes/ICCrossword/saga/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./react-app/modules/activityTypes/ICCrossword/context.js");
/* harmony import */ var _activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../activities/utils/charCodeUtils */ "./react-app/modules/activities/utils/charCodeUtils.js");







const ICCrosswordUserDataManager = ({
  setUserData,
  removeUserData,
  children
}) => {
  const cellKeyEvt = (id, evtType, keyCode) => {
    if (evtType === 'keydown') {
      let value;

      if (Object(_activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_5__["isText"])(keyCode)) {
        value = String.fromCharCode(keyCode);
      } else if (Object(_activities_utils_charCodeUtils__WEBPACK_IMPORTED_MODULE_5__["isBackspace"])(keyCode)) {
        value = '';
      }

      if (value !== undefined) {
        if (value) {
          setUserData({
            id,
            value
          });
        } else {
          removeUserData({
            id
          });
        }
      }
    }
  };

  const cellChange = (id, value) => {
    if (value) {
      setUserData({
        id,
        value
      });
    } else {
      removeUserData({
        id
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["ICCrosswordUserDataContext"].Provider, {
    value: {
      cellKeyEvt,
      cellChange
    }
  }, children);
};

ICCrosswordUserDataManager.propTypes = {
  setUserData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  removeUserData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setUserData: cell => dispatch(_saga__WEBPACK_IMPORTED_MODULE_3__["actions"].setCellUserData({ ...cell,
    activityId: ownProps.activityId
  })),
  removeUserData: cell => dispatch(_saga__WEBPACK_IMPORTED_MODULE_3__["actions"].clearCellUserData({ ...cell,
    data: [cell.id]
  }))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(ICCrosswordUserDataManager));

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/components/ui.jsx":
/*!***********************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/components/ui.jsx ***!
  \***********************************************************************/
/*! exports provided: ICCrossword, ICCrosswordGrid, ICCrosswordRow, ICCrosswordCellInput, ICCrosswordCellClue, ICCrosswordCellInvisible, ICCrosswordClues, ICCrosswordClueList, ICCrosswordClue, ICCrosswordClueInCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrossword", function() { return ICCrossword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordGrid", function() { return ICCrosswordGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordRow", function() { return ICCrosswordRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordCellInput", function() { return ICCrosswordCellInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordCellClue", function() { return ICCrosswordCellClue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordCellInvisible", function() { return ICCrosswordCellInvisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordClues", function() { return ICCrosswordClues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordClueList", function() { return ICCrosswordClueList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordClue", function() { return ICCrosswordClue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordClueInCell", function() { return ICCrosswordClueInCell; });
const ICCrossword = DPReactComponents.components.activities.ICCrossword.ICCrossword;
const ICCrosswordGrid = DPReactComponents.components.activities.ICCrossword.ICCrosswordGrid;
const ICCrosswordRow = DPReactComponents.components.activities.ICCrossword.ICCrosswordRow;
const ICCrosswordCellInput = DPReactComponents.components.activities.ICCrossword.ICCrosswordCellInput;
const ICCrosswordCellClue = DPReactComponents.components.activities.ICCrossword.ICCrosswordCellClue;
const ICCrosswordCellInvisible = DPReactComponents.components.activities.ICCrossword.ICCrosswordCellInvisible;
const ICCrosswordClue = DPReactComponents.components.activities.ICCrossword.ICCrosswordClue;
const ICCrosswordClueList = DPReactComponents.components.activities.ICCrossword.ICCrosswordClueList;
const ICCrosswordClues = DPReactComponents.components.activities.ICCrossword.ICCrosswordClues;
const ICCrosswordClueInCell = DPReactComponents.components.activities.ICCrossword.ICCrosswordClueInCell;


/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/context.js":
/*!****************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/context.js ***!
  \****************************************************************/
/*! exports provided: ICCrosswordUserDataContext, ICCrosswordFocusContext, ICCrosswordHighlightContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordUserDataContext", function() { return ICCrosswordUserDataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordFocusContext", function() { return ICCrosswordFocusContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICCrosswordHighlightContext", function() { return ICCrosswordHighlightContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ICCrosswordUserDataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  focusedIndex: 0
});
ICCrosswordUserDataContext.displayName = 'ICCrosswordUserDataContext';
const ICCrosswordFocusContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
ICCrosswordFocusContext.displayName = 'ICCrosswordFocusContext';
const ICCrosswordHighlightContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
ICCrosswordHighlightContext.displayName = 'ICCrosswordHighlightContext';

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/reducer/cellsItemData.js":
/*!******************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/reducer/cellsItemData.js ***!
  \******************************************************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'iccrossword_cell_itemData',
  initialState: {},
  reducers: {
    addCellsItemData: (state, action) => {
      const cells = action.payload.data;
      return { ...state,
        ...cells
      };
    },
    clearCellsItemData: (state, {
      payload: {
        data
      }
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
const reducer = slice.reducer;
const actions = slice.actions;

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/reducer/cellsSolutionData.js":
/*!**********************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/reducer/cellsSolutionData.js ***!
  \**********************************************************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'iccrossword_cell_solutionData',
  initialState: {},
  reducers: {
    addCellsSolutionData: (state, action) => {
      const cells = action.payload.data;
      return { ...state,
        ...cells
      };
    },
    clearCellsSolutionData: (state, {
      payload: {
        data
      }
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
const reducer = slice.reducer;
const actions = slice.actions;

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/reducer/cellsUIData.js":
/*!****************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/reducer/cellsUIData.js ***!
  \****************************************************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _cellsItemData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/reducer/cellsItemData.js");
/* harmony import */ var _uiData_reducer_processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../uiData/reducer/processor */ "./react-app/modules/uiData/reducer/processor.js");



const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'iccrossword_cell_uiData',
  initialState: {},
  reducers: {
    setCellUIData: (state, action) => {
      const cells = action.payload.data;
      cells.forEach(el => {
        state[el.id] = { ...state[el.id],
          ...el
        };
      });
    },
    clearCellUIData: (state, action) => {
      const cells = action.payload.data;
      const newState = Object.keys(state).reduce((acc, id) => {
        if (!cells.includes(id)) {
          acc[id] = state[id];
        }

        return acc;
      }, {});
      return newState;
    }
  },
  extraReducers: {
    [_cellsItemData__WEBPACK_IMPORTED_MODULE_1__["actions"].addCellsItemData.type]: (state, {
      payload: {
        data
      }
    }) => {
      const els = Object.values(data).reduce((acc, val) => {
        acc[val.id] = {
          id: val.id,
          activityId: val.activityId,
          enabled: _uiData_reducer_processor__WEBPACK_IMPORTED_MODULE_2__["model"].enabled,
          dataType: _uiData_reducer_processor__WEBPACK_IMPORTED_MODULE_2__["model"].dataType
        };
        return acc;
      }, {});
      return { ...state,
        ...els
      };
    }
  }
});
const reducer = slice.reducer;
const actions = slice.actions;

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/reducer/cellsUserData.js":
/*!******************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/reducer/cellsUserData.js ***!
  \******************************************************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const slice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'iccrossword_cell_userData',
  initialState: {},
  reducers: {
    setCellsUserData: (state, action) => {
      const cells = action.payload.data;
      return { ...state,
        ...cells
      };
    },
    clearCellsUserData: (state, action) => {
      const cells = action.payload.data;
      const newState = Object.keys(state).reduce((acc, id) => {
        if (!cells.includes(id)) {
          acc[id] = state[id];
        }

        return acc;
      }, {});
      return newState;
    }
  }
});
const reducer = slice.reducer;
const actions = slice.actions;

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/reducer/index.js":
/*!**********************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/reducer/index.js ***!
  \**********************************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _cellsItemData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/reducer/cellsItemData.js");
/* harmony import */ var _cellsUserData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cellsUserData */ "./react-app/modules/activityTypes/ICCrossword/reducer/cellsUserData.js");
/* harmony import */ var _cellsSolutionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cellsSolutionData */ "./react-app/modules/activityTypes/ICCrossword/reducer/cellsSolutionData.js");
/* harmony import */ var _cellsUIData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cellsUIData */ "./react-app/modules/activityTypes/ICCrossword/reducer/cellsUIData.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  iccrossword_cells_itemData: _cellsItemData__WEBPACK_IMPORTED_MODULE_0__["reducer"],
  iccrossword_cells_userData: _cellsUserData__WEBPACK_IMPORTED_MODULE_1__["reducer"],
  iccrossword_cells_solutionData: _cellsSolutionData__WEBPACK_IMPORTED_MODULE_2__["reducer"],
  iccrossword_cells_uiData: _cellsUIData__WEBPACK_IMPORTED_MODULE_3__["reducer"]
});
const actions = { ..._cellsItemData__WEBPACK_IMPORTED_MODULE_0__["actions"],
  ..._cellsUserData__WEBPACK_IMPORTED_MODULE_1__["actions"],
  ..._cellsSolutionData__WEBPACK_IMPORTED_MODULE_2__["actions"],
  ..._cellsUIData__WEBPACK_IMPORTED_MODULE_3__["actions"]
};

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/registerActivity.js":
/*!*************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/registerActivity.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_actions_eventManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/actions/eventManager */ "./react-app/utils/actions/eventManager.js");
/* harmony import */ var _activities_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../activities/action */ "./react-app/modules/activities/action.js");
/* harmony import */ var _utils_registerActivityType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/registerActivityType */ "./react-app/utils/registerActivityType.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saga */ "./react-app/modules/activityTypes/ICCrossword/saga/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./react-app/modules/activityTypes/ICCrossword/reducer/index.js");
/* harmony import */ var _saga_processor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saga/processor */ "./react-app/modules/activityTypes/ICCrossword/saga/processor/index.js");
/* harmony import */ var _selector_processor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selector/processor */ "./react-app/modules/activityTypes/ICCrossword/selector/processor.js");








const RegisterActivity = ({
  activityType,
  activityId
}) => {
  if (!Object(_utils_registerActivityType__WEBPACK_IMPORTED_MODULE_2__["getActivityTypeIsRegistered"])(activityType)) {
    Object(_saga_processor__WEBPACK_IMPORTED_MODULE_5__["registerProcessors"])();
    Object(_selector_processor__WEBPACK_IMPORTED_MODULE_6__["registerProcessors"])();
    Object(_utils_registerActivityType__WEBPACK_IMPORTED_MODULE_2__["registerActivityType"])({
      activityType,
      saga: _saga__WEBPACK_IMPORTED_MODULE_3__["default"],
      reducer: _reducer__WEBPACK_IMPORTED_MODULE_4__["default"]
    });
  }

  Object(_utils_actions_eventManager__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"])(_activities_action__WEBPACK_IMPORTED_MODULE_1__["eventConstants"].READY, {
    type: activityType,
    id: activityId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterActivity);

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/saga/index.js":
/*!*******************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/saga/index.js ***!
  \*******************************************************************/
/*! exports provided: default, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _utils_actions_eventManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/actions/eventManager */ "./react-app/utils/actions/eventManager.js");
/* harmony import */ var _activities_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../activities/action */ "./react-app/modules/activities/action.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _userData_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../userData/schema */ "./react-app/modules/userData/schema/index.js");
/* harmony import */ var _selector_cellsItemData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selector/cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js");
/* harmony import */ var _userData_selector_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../userData/selector/general */ "./react-app/modules/userData/selector/general.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducer */ "./react-app/modules/activityTypes/ICCrossword/reducer/index.js");
/* harmony import */ var _userData_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../userData/reducer */ "./react-app/modules/userData/reducer/index.js");









const setCellUserDataAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('iccrosswordSetCellData');
const clearCellUserDataAction = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('iccrosswordClearCellData');

function* watchSetCellUserData() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(setCellUserDataAction.type, setCellUserData);
}

function* watchClearCellUserData() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeEvery"])(clearCellUserDataAction.type, clearCellUserData);
}

function* setCellUserData(action) {
  try {
    const {
      cell,
      words,
      userData
    } = yield* selectData(action.payload);
    const userDataToFire = words.map(word => {
      const wUserData = userData.find(u => u.id === word.id);
      let cellIndex = word.cells.indexOf(cell.id);
      let value = cellUserValueToWordUserValue(action.payload.value, wUserData === null || wUserData === void 0 ? void 0 : wUserData.value, cellIndex, word.cells.length);
      return {
        id: word.id,
        activityId: cell.activityId,
        value
      };
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(_reducer__WEBPACK_IMPORTED_MODULE_7__["actions"].setCellsUserData({
      data: Object(_userData_schema__WEBPACK_IMPORTED_MODULE_4__["normalizeUserData"])([action.payload]).entities.userData
    }));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(_userData_reducer__WEBPACK_IMPORTED_MODULE_8__["actions"].setUserData({
      activityType: 'iccrossword',
      data: Object(_userData_schema__WEBPACK_IMPORTED_MODULE_4__["normalizeUserData"])(userDataToFire).entities.userData
    }));
    Object(_utils_actions_eventManager__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["eventConstants"].VALUE_CHANGE, {
      type: 'iccrossword',
      id: action.payload.activityId
    });
  } catch (e) {
    throw Error(e.message);
  }
}

function* clearCellUserData(action) {
  try {
    const {
      cell,
      words,
      userData
    } = yield* selectData(action.payload);
    const wordsToChange = [];
    const wordsToDelete = [];
    words.forEach(word => {
      const wUserData = userData.find(u => u.id === word.id);
      let value;
      let cellIndex = word.cells.indexOf(cell.id);
      value = cellUserValueToWordUserValue(' ', wUserData === null || wUserData === void 0 ? void 0 : wUserData.value, cellIndex, word.cells.length);

      if (value.trim()) {
        wordsToChange.push({
          id: word.id,
          value
        });
      } else {
        wordsToDelete.push(word.id);
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(_reducer__WEBPACK_IMPORTED_MODULE_7__["actions"].clearCellsUserData({
      data: [cell.id]
    }));

    if (wordsToChange.length) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(_userData_reducer__WEBPACK_IMPORTED_MODULE_8__["actions"].setUserData({
        activityId: cell.activityId,
        activityType: 'iccrossword',
        data: Object(_userData_schema__WEBPACK_IMPORTED_MODULE_4__["normalizeUserData"])(wordsToChange).entities.userData
      }));
    }

    if (wordsToDelete.length) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])(_userData_reducer__WEBPACK_IMPORTED_MODULE_8__["actions"].clearUserData({
        activityId: cell.activityId,
        activityType: 'iccrossword',
        data: wordsToDelete
      }));
    }

    Object(_utils_actions_eventManager__WEBPACK_IMPORTED_MODULE_1__["dispatchEvent"])(_activities_action__WEBPACK_IMPORTED_MODULE_2__["eventConstants"].VALUE_CHANGE, {
      type: 'iccrossword',
      id: action.payload.activityId
    });
  } catch (e) {
    throw Error(e.message);
  }
}

function* selectData(payload) {
  const cell = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["select"])(_selector_cellsItemData__WEBPACK_IMPORTED_MODULE_5__["getActivityCellById"], payload);
  const words = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["select"])(_selector_cellsItemData__WEBPACK_IMPORTED_MODULE_5__["getCellWords"], cell);
  const userData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["select"])(_userData_selector_general__WEBPACK_IMPORTED_MODULE_6__["getUserDataListByIds"], {
    activityId: cell.activityId,
    ids: cell.words
  });
  return {
    cell,
    words,
    userData
  };
}

const cellUserValueToWordUserValue = (cellValue, wordValue, index, length) => {
  if (wordValue) {
    return `${wordValue.substr(0, index)}${cellValue}${wordValue.substr(index + 1, length - index)}`;
  } else {
    let wChars = new Array(length).fill(' ');
    wChars[index] = cellValue;
    return wChars.join('');
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  watchSetCellUserData,
  watchClearCellUserData
});
const actions = {
  setCellUserData: setCellUserDataAction,
  clearCellUserData: clearCellUserDataAction
};

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/saga/processor/activity.js":
/*!********************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/saga/processor/activity.js ***!
  \********************************************************************************/
/*! exports provided: addActivities, removeActivities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addActivities", function() { return addActivities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeActivities", function() { return removeActivities; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schema */ "./react-app/modules/activityTypes/ICCrossword/schema/index.js");
/* harmony import */ var _solutionData_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../solutionData/schema */ "./react-app/modules/solutionData/schema/index.js");
/* harmony import */ var _activities_saga_processor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../activities/saga/processor */ "./react-app/modules/activities/saga/processor.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducer */ "./react-app/modules/activityTypes/ICCrossword/reducer/index.js");
/* harmony import */ var _selector_cellsItemData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selector/cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js");
/* harmony import */ var _selector_cellsUserData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selector/cellsUserData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsUserData.js");







function* addActivities(payload) {
  const {
    id,
    metadata,
    solutions,
    items
  } = payload;
  const {
    cells
  } = metadata;
  const mappedItemCells = cells.map(cell => ({
    id: `${id}_${cell.x}_${cell.y}`,
    activityId: id,
    ...cell,
    words: cell.words.map(w => `${id}_${w}`)
  }));
  let changedItems = items.map(word => ({ ...word,
    cells: word.cells.map(cell => mappedItemCells[cell].id)
  }));
  let changedMetadata = { ...metadata
  };
  delete changedMetadata['cells'];
  const list = yield _activities_saga_processor__WEBPACK_IMPORTED_MODULE_3__["processors"].addActivities({ ...payload,
    items: changedItems,
    metadata: changedMetadata
  });
  list.push(_reducer__WEBPACK_IMPORTED_MODULE_4__["actions"].addCellsItemData({
    data: Object(_schema__WEBPACK_IMPORTED_MODULE_1__["normalizeCells"])(mappedItemCells).entities.cellsItemData
  }));

  if (solutions) {
    const mappedSolutionCells = cells.map(cell => {
      const refWord = items[cell.words[0]];
      const cellIndexInWord = refWord.cells.indexOf(cell.index);
      return {
        id: `${id}_${cell.x}_${cell.y}`,
        activityId: id,
        value: solutions[refWord.index].value.charAt(cellIndexInWord)
      };
    });
    list.push(_reducer__WEBPACK_IMPORTED_MODULE_4__["actions"].addCellsSolutionData({
      data: Object(_solutionData_schema__WEBPACK_IMPORTED_MODULE_2__["normalizeSolutionData"])(mappedSolutionCells).entities.solutionData
    }));
  }

  return list;
}
function* removeActivities(payload) {
  const {
    id,
    activityType
  } = payload;
  const cells = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_selector_cellsItemData__WEBPACK_IMPORTED_MODULE_5__["getActivityCells"], {
    activityType,
    activityId: id
  });
  const cellsIds = cells.map(({
    id
  }) => id);
  const userDataCells = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_selector_cellsUserData__WEBPACK_IMPORTED_MODULE_6__["getActivityCellsUserData"], {
    activityType,
    activityId: id
  });
  const userDataCellsIDs = userDataCells.map(({
    id
  }) => id);
  const ret = yield _activities_saga_processor__WEBPACK_IMPORTED_MODULE_3__["processors"].removeActivities(payload);
  ret.push(_reducer__WEBPACK_IMPORTED_MODULE_4__["actions"].clearCellsItemData({
    data: cellsIds
  }));
  ret.push(_reducer__WEBPACK_IMPORTED_MODULE_4__["actions"].clearCellsSolutionData({
    data: cellsIds
  }));
  ret.push(_reducer__WEBPACK_IMPORTED_MODULE_4__["actions"].clearCellsUserData({
    data: userDataCellsIDs
  }));
  ret.push(_reducer__WEBPACK_IMPORTED_MODULE_4__["actions"].clearCellUIData({
    data: cellsIds
  }));
  return ret;
}

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/saga/processor/index.js":
/*!*****************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/saga/processor/index.js ***!
  \*****************************************************************************/
/*! exports provided: registerProcessors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerProcessors", function() { return registerProcessors; });
/* harmony import */ var _activities_saga_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../activities/saga/processor */ "./react-app/modules/activities/saga/processor.js");
/* harmony import */ var _validationData_saga_processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../validationData/saga/processor */ "./react-app/modules/validationData/saga/processor.js");
/* harmony import */ var _userData_saga_processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../userData/saga/processor */ "./react-app/modules/userData/saga/processor.js");
/* harmony import */ var _uiData_saga_processor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../uiData/saga/processor */ "./react-app/modules/uiData/saga/processor.js");
/* harmony import */ var _activity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity */ "./react-app/modules/activityTypes/ICCrossword/saga/processor/activity.js");
/* harmony import */ var _validationData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validationData */ "./react-app/modules/activityTypes/ICCrossword/saga/processor/validationData.js");
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userData */ "./react-app/modules/activityTypes/ICCrossword/saga/processor/userData.js");
/* harmony import */ var _uiData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uiData */ "./react-app/modules/activityTypes/ICCrossword/saga/processor/uiData.js");








const at = 'iccrossword';
const registerProcessors = () => {
  Object(_activities_saga_processor__WEBPACK_IMPORTED_MODULE_0__["register"])('addActivities', at, _activity__WEBPACK_IMPORTED_MODULE_4__["addActivities"]);
  Object(_activities_saga_processor__WEBPACK_IMPORTED_MODULE_0__["register"])('removeActivities', at, _activity__WEBPACK_IMPORTED_MODULE_4__["removeActivities"]);
  Object(_validationData_saga_processor__WEBPACK_IMPORTED_MODULE_1__["register"])('validate', at, _validationData__WEBPACK_IMPORTED_MODULE_5__["validate"]), Object(_userData_saga_processor__WEBPACK_IMPORTED_MODULE_2__["register"])('setUserData', at, _userData__WEBPACK_IMPORTED_MODULE_6__["setUserData"]);
  Object(_userData_saga_processor__WEBPACK_IMPORTED_MODULE_2__["register"])('clearUserData', at, _userData__WEBPACK_IMPORTED_MODULE_6__["clearUserData"]);
  Object(_uiData_saga_processor__WEBPACK_IMPORTED_MODULE_3__["register"])('setEnabled', at, _uiData__WEBPACK_IMPORTED_MODULE_7__["setEnabled"]);
  Object(_uiData_saga_processor__WEBPACK_IMPORTED_MODULE_3__["register"])('setDataType', at, _uiData__WEBPACK_IMPORTED_MODULE_7__["setDataType"]);
  Object(_uiData_saga_processor__WEBPACK_IMPORTED_MODULE_3__["register"])('setBatchUI', at, _uiData__WEBPACK_IMPORTED_MODULE_7__["setBatchUI"]);
};

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/saga/processor/uiData.js":
/*!******************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/saga/processor/uiData.js ***!
  \******************************************************************************/
/*! exports provided: setEnabled, setDataType, setBatchUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnabled", function() { return setEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataType", function() { return setDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatchUI", function() { return setBatchUI; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducer */ "./react-app/modules/activityTypes/ICCrossword/reducer/index.js");
/* harmony import */ var _uiData_saga_processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../uiData/saga/processor */ "./react-app/modules/uiData/saga/processor.js");
/* harmony import */ var _uiData_selector_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../uiData/selector/general */ "./react-app/modules/uiData/selector/general.js");
/* harmony import */ var _itemData_selector_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../itemData/selector/general */ "./react-app/modules/itemData/selector/general.js");
/* harmony import */ var _selector_cellsItemData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selector/cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js");






function* setEnabled(payload) {
  const ret = yield _uiData_saga_processor__WEBPACK_IMPORTED_MODULE_2__["processors"].setEnabled(payload);
  const cellsActionData = yield _getCellActions(payload);
  return ret.concat(cellsActionData);
}
function* setDataType(payload) {
  const ret = yield _uiData_saga_processor__WEBPACK_IMPORTED_MODULE_2__["processors"].setDataType(payload);
  const cellsActionData = yield _getCellActions(payload);
  return ret.concat(cellsActionData);
}
function* setBatchUI(payload) {
  const ret = yield _uiData_saga_processor__WEBPACK_IMPORTED_MODULE_2__["processors"].setBatchUI(payload);
  const cellsActionData = yield _getCellActions(payload);
  return ret.concat(cellsActionData);
}

function* _getCellsAffectedByPayload(payload) {
  const words = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_itemData_selector_general__WEBPACK_IMPORTED_MODULE_4__["getItemDataListByIds"], {
    ids: payload.ids
  });
  return words.map(({
    cells
  }) => cells).flat();
}

const _allWordsInPayload = (cell, ids) => {
  return cell.words.every(({
    id
  }) => ids.includes(id));
};

const _getWordsUINotInPayload = (cell, ids, uiData) => {
  return cell.words.filter(({
    id
  }) => !ids.includes(id)).map(id => uiData.find(el => el.id === id));
};

const _enabledHash = (enabled, cell, ids, uiData) => {
  const ret = {};

  const wordsNotInPayloadUI = _getWordsUINotInPayload(cell, ids, uiData);

  if (!enabled || _allWordsInPayload(cell, ids) || wordsNotInPayloadUI.every(wordUI => wordUI.enabled === enabled)) {
    ret.enabled = enabled;
  }

  return ret;
};

const _dataTypeHash = (dataType, cell, ids, uiData) => {
  const ret = {};

  const wordsNotInPayloadUI = _getWordsUINotInPayload(cell, ids, uiData);

  if (dataType === 'solution' || _allWordsInPayload(cell, ids) || wordsNotInPayloadUI.every(wordUI => wordUI.dataType === dataType)) {
    ret.dataType = dataType;
  }

  return ret;
};

function* _getCellActions(payload) {
  let {
    activityId,
    ids,
    data,
    enabled,
    validationType,
    dataType,
    extra
  } = payload;
  data = data || {
    enabled,
    validationType,
    dataType,
    extra
  };
  const cells = yield _getCellsAffectedByPayload(payload);
  const uiData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_uiData_selector_general__WEBPACK_IMPORTED_MODULE_3__["getActivityUIData"], {
    activityId
  });
  const cellsMappedToPayload = [];
  yield* cells.map(function* (id) {
    const cell = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_selector_cellsItemData__WEBPACK_IMPORTED_MODULE_5__["getActivityCellById"], {
      id
    });
    let hash = {};

    if (data.enabled !== undefined) {
      hash = Object.assign(hash, _enabledHash(data.enabled, cell, ids, uiData));
    }

    if (data.dataType !== undefined) {
      hash = Object.assign(hash, _dataTypeHash(data.dataType, cell, ids, uiData));
    }

    cellsMappedToPayload.push({ ...hash,
      id,
      activityId
    });
  });
  return [_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setCellUIData({
    data: cellsMappedToPayload
  })];
}

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/saga/processor/userData.js":
/*!********************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/saga/processor/userData.js ***!
  \********************************************************************************/
/*! exports provided: setUserData, clearUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserData", function() { return setUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearUserData", function() { return clearUserData; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducer */ "./react-app/modules/activityTypes/ICCrossword/reducer/index.js");
/* harmony import */ var _userData_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../userData/reducer */ "./react-app/modules/userData/reducer/index.js");
/* harmony import */ var _itemData_selector_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../itemData/selector/general */ "./react-app/modules/itemData/selector/general.js");
/* harmony import */ var _userData_selector_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../userData/selector/general */ "./react-app/modules/userData/selector/general.js");
/* harmony import */ var _userData_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../userData/schema */ "./react-app/modules/userData/schema/index.js");
/* harmony import */ var _userData_saga_processor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../userData/saga/processor */ "./react-app/modules/userData/saga/processor.js");
/* harmony import */ var _selector_cellsItemData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../selector/cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js");








const at = 'iccrossword';
function* setUserData(payload) {
  const words = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_itemData_selector_general__WEBPACK_IMPORTED_MODULE_3__["getItemDataListByIds"], {
    ids: payload.data.map(d => d.id)
  });
  const ret = _userData_saga_processor__WEBPACK_IMPORTED_MODULE_6__["processors"].setUserData(payload);
  const cells = [];
  payload.data.forEach(({
    id,
    value
  }) => {
    const word = words.find(w => w.id === id);
    const cellVals = value.split('');
    word.cells.forEach((cell, idx) => {
      if (cellVals[idx].trim() && !cells.find(({
        id
      }) => id === cell)) {
        cells.push({
          id: cell,
          activityId: payload.activityId,
          value: cellVals[idx]
        });
      }
    });
  });

  if (cells.length) {
    ret.push(_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].setCellsUserData({
      data: Object(_userData_schema__WEBPACK_IMPORTED_MODULE_5__["normalizeUserData"])(cells).entities.userData
    }));
  }

  return ret;
}
function* clearUserData(payload) {
  try {
    const words = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_itemData_selector_general__WEBPACK_IMPORTED_MODULE_3__["getItemDataListByIds"], payload);
    const wordsUserData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_userData_selector_general__WEBPACK_IMPORTED_MODULE_4__["getUserDataListByIds"], payload);
    const wordsIds = words.map(({
      id
    }) => id);
    const ret = [];
    let cells = [];
    const wordIdsToDelete = [];
    const wordsToChange = [];
    yield* words.map(function* (word) {
      var _wordsUserData$find;

      const wordCells = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_selector_cellsItemData__WEBPACK_IMPORTED_MODULE_7__["getWordCells"], word);
      let userData = (_wordsUserData$find = wordsUserData.find(({
        id
      }) => id === word.id)) === null || _wordsUserData$find === void 0 ? void 0 : _wordsUserData$find.value.split('');
      const crossedWords = wordCells.map(c => c.words).flat();

      if (crossedWords.every(w => wordsIds.includes(w))) {
        wordIdsToDelete.push(word.id);
      } else {
        var _userData;

        const cellsToClear = wordCells.filter(c => c.words.every(w => wordsIds.includes(w)));
        cells = cells.concat(cellsToClear.map(({
          id
        }) => id));

        if ((_userData = userData) !== null && _userData !== void 0 && _userData.length) {
          userData = userData.map((char, idx) => cellsToClear.includes(wordCells[idx]) && ' ' || char).join('');

          if (userData.trim()) {
            wordsToChange.push({
              id: word.id,
              activityId: word.activityId,
              value: userData
            });
          } else {
            wordIdsToDelete.push(word.id);
          }
        }
      }
    });

    if (wordIdsToDelete.length) {
      ret.push(_userData_reducer__WEBPACK_IMPORTED_MODULE_2__["actions"].clearUserData({
        activityType: at,
        data: wordIdsToDelete
      }));
    }

    if (wordsToChange.length) {
      ret.push(_userData_reducer__WEBPACK_IMPORTED_MODULE_2__["actions"].setUserData({
        activityType: at,
        data: Object(_userData_schema__WEBPACK_IMPORTED_MODULE_5__["normalizeUserData"])(wordsToChange).entities.userData
      }));
    }

    if (cells.length) {
      ret.push(_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].clearCellsUserData({
        data: [...new Set(cells)]
      }));
    }

    return ret;
  } catch (e) {
    throw new Error(e.message);
  }
}

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/saga/processor/validationData.js":
/*!**************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/saga/processor/validationData.js ***!
  \**************************************************************************************/
/*! exports provided: validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _validationData_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../validationData/reducer */ "./react-app/modules/validationData/reducer/index.js");
/* harmony import */ var _validationData_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../validationData/schema */ "./react-app/modules/validationData/schema/index.js");
/* harmony import */ var _itemData_selector_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../itemData/selector/general */ "./react-app/modules/itemData/selector/general.js");
/* harmony import */ var _solutionData_selector_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../solutionData/selector/general */ "./react-app/modules/solutionData/selector/general.js");
/* harmony import */ var _userData_selector_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../userData/selector/general */ "./react-app/modules/userData/selector/general.js");
/* harmony import */ var _selector_cellsUIData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selector/cellsUIData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsUIData.js");







function* validate(payload) {
  const {
    activityId
  } = payload;
  const itemData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_itemData_selector_general__WEBPACK_IMPORTED_MODULE_3__["getItemDataListByIds"], payload);
  const solutionData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_solutionData_selector_general__WEBPACK_IMPORTED_MODULE_4__["getSolutionDataListByIds"], payload);
  const userData = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_userData_selector_general__WEBPACK_IMPORTED_MODULE_5__["getUserDataListByIds"], payload);
  let solutionDataTypeCells = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_selector_cellsUIData__WEBPACK_IMPORTED_MODULE_6__["getSolutionDataTypeCells"], payload);
  solutionDataTypeCells = solutionDataTypeCells.map(c => c.id);

  if (itemData.length) {
    const validationData = itemData.map(item => {
      var _userData$find, _solutionData$find;

      const wUserDataStored = (_userData$find = userData.find(us => us.id === item.id)) === null || _userData$find === void 0 ? void 0 : _userData$find.value;
      const wSolData = (_solutionData$find = solutionData.find(sol => sol.id === item.id)) === null || _solutionData$find === void 0 ? void 0 : _solutionData$find.value;
      let wUserData = wUserDataStored || new Array(wSolData.length).fill(' ').join('');
      item.cells.forEach((c, idx) => {
        if (solutionDataTypeCells.includes(c)) {
          wUserData = `${wUserData.slice(0, idx)}${wSolData.charAt(idx)}${wUserData.slice(idx + 1, wUserData.length)}`;
        }
      });
      return {
        id: item.id,
        activityId,
        correct: Boolean(wUserDataStored && wUserData.toLowerCase() === wSolData.toLowerCase()),
        filled: Boolean(wUserDataStored && wUserData.indexOf(' ') === -1)
      };
    });
    return [_validationData_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].addValidation({
      activityType: 'iccrossword',
      data: Object(_validationData_schema__WEBPACK_IMPORTED_MODULE_2__["normalizeValidationData"])(validationData).entities.validationData
    })];
  } else {
    return [];
  }
}

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/schema/index.js":
/*!*********************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/schema/index.js ***!
  \*********************************************************************/
/*! exports provided: default, normalizeCell, normalizeCells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeCell", function() { return normalizeCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeCells", function() { return normalizeCells; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");

const cellItemData = new normalizr__WEBPACK_IMPORTED_MODULE_0__["schema"].Entity('cellsItemData', {});
const cellItems = [cellItemData];
/* harmony default export */ __webpack_exports__["default"] = (cellItems);
const normalizeCell = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, cellItemData);
};
const normalizeCells = data => {
  return Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["normalize"])(data, cellItems);
};

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js":
/*!*******************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js ***!
  \*******************************************************************************/
/*! exports provided: getActivityCells, getActivityCellById, getActivityCellsByRow, getCellWords, getWordCells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityCells", function() { return getActivityCells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityCellById", function() { return getActivityCellById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityCellsByRow", function() { return getActivityCellsByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellWords", function() { return getCellWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWordCells", function() { return getWordCells; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../selector/utils */ "./react-app/selector/utils.js");
/* harmony import */ var _screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../screens/selector/optionValues */ "./react-app/modules/screens/selector/optionValues.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general */ "./react-app/modules/activityTypes/ICCrossword/selector/general.js");
/* harmony import */ var _itemData_selector_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../itemData/selector/general */ "./react-app/modules/itemData/selector/general.js");







const getCells = state => state.iccrossword_cells_itemData;

const getActivityId = (state, props) => props.activityId;

const getId = (state, props) => props.id;

const getRowIndex = (state, props) => props.index;

const getWords = (state, props) => props.words;

const getX = (state, props) => props.x;

const getY = (state, props) => props.y;

const getCellsIds = (state, props) => props.cells;

const getCellsIdsJSON = (state, props) => JSON.stringify([...(props.cells || [])].sort());

const getCellsAsList = Object(_selector_utils__WEBPACK_IMPORTED_MODULE_2__["createArraySelector"])([getCells], cells => {
  if (!cells) {
    return;
  }

  return Object.values(cells);
});
const getActivityCells = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getCellsAsList, getActivityId], (cells, activityId) => {
  if (!cells || !activityId) {
    return;
  }

  return cells.filter(cell => cell.activityId === activityId);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_2__["createArraySelector"]
});
const getActivityCellById = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getCells, getId], (cells, id) => {
  if (!cells || !id) {
    return;
  }

  return cells[id];
})(getId);
const getWordsClueCells = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([_itemData_selector_general__WEBPACK_IMPORTED_MODULE_5__["getActivityItemData"], _screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_3__["cluePositionIsInside"]], (items, cluesAreInside) => {
  if (!items) {
    return;
  } else if (!cluesAreInside) {
    return [];
  } else {
    const clues = [];
    items.forEach(item => {
      const clue = {
        x: item.x,
        y: item.y,
        type: 'clue',
        words: [item.id]
      };

      if (item.align === 'v') {
        clue.y--;
      } else {
        clue.x--;
      }

      const storedClue = clues.find(c => c.x === clue.x - 1 && c.y === clue.y);

      if (storedClue) {
        storedClue.push(item.id);
      } else {
        clues.push(clue);
      }
    });
    return clues;
  }
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_2__["createArraySelector"]
});
const getActivityCellsByRow = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityCells, getWordsClueCells, getRowIndex, _general__WEBPACK_IMPORTED_MODULE_4__["getICCrosswordColSize"], getActivityId], (cells, cellClues, index, cols) => {
  if (!cells || index === undefined || !cellClues || !cols) {
    return;
  }

  let xAdd = 0;
  let yAdd = 0;

  if (cellClues.length) {
    xAdd = lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()(cellClues, 'x')[0].x >= 0 ? 0 : 1;
    yAdd = lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()(cellClues, 'y')[0].y >= 0 ? 0 : 1;
  }

  const findByY = ({
    y
  }) => y === index - yAdd;

  let rowCells = cells.filter(findByY);
  rowCells = rowCells.concat(cellClues.filter(findByY));
  rowCells = lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()(rowCells, 'x');
  const values = new Array(cols + xAdd).fill(null);
  rowCells.forEach(cell => {
    values[cell.x + xAdd] = cell;
  });
  return values;
})((state, {
  activityId,
  index
}) => {
  return `${activityId}${index}`;
});
const getCellWords = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getWords, _itemData_selector_general__WEBPACK_IMPORTED_MODULE_5__["getActivityItemData"]], (cellWords, words) => {
  if (!(cellWords !== null && cellWords !== void 0 && cellWords.length) || !words) {
    return;
  }

  return words.filter(w => cellWords.includes(w.id));
})((state, props) => {
  return JSON.stringify([getActivityId(state, props), getX(state, props), getY(state, props)]);
}, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_2__["createArraySelector"]
});
const getWordCells = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getCells, getCellsIds], (cells, ids) => {
  if (!cells || !ids) {
    return;
  }

  return ids.map(id => cells[id]);
})(getCellsIdsJSON, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_2__["createArraySelector"]
});

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/selector/cellsSolutionData.js":
/*!***********************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/selector/cellsSolutionData.js ***!
  \***********************************************************************************/
/*! exports provided: getActivityCellsSolutionData, getCellSolutionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityCellsSolutionData", function() { return getActivityCellsSolutionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellSolutionData", function() { return getCellSolutionData; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../selector/utils */ "./react-app/selector/utils.js");
/* harmony import */ var _cellsUIData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cellsUIData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsUIData.js");




const getId = (state, props) => props.id;

const getActivityId = (state, props) => props.activityId;

const getCellsSolutionData = state => state.iccrossword_cells_solutionData;

const getCellsSolutionDataAsList = Object(_selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"])([getCellsSolutionData], cells => {
  if (!cells) {
    return;
  }

  return Object.values(cells);
});
const getActivityCellsSolutionData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getCellsSolutionDataAsList, getActivityId], (cells, activityId) => {
  if (!cells || !activityId) {
    return;
  }

  return cells.filter(cell => cell.activityId === activityId);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getCellSolutionData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getId, getCellsSolutionData, _cellsUIData__WEBPACK_IMPORTED_MODULE_2__["getCellUIDataById"]], (id, solutionDataCells, uiData) => {
  var _solutionDataCells$id;

  if (!id || !uiData || uiData.dataType === 'user') {
    return;
  }

  return (_solutionDataCells$id = solutionDataCells[id]) === null || _solutionDataCells$id === void 0 ? void 0 : _solutionDataCells$id.value;
})(getId);

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/selector/cellsUIData.js":
/*!*****************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/selector/cellsUIData.js ***!
  \*****************************************************************************/
/*! exports provided: getActivityCellsUIData, getCellUIDataById, getSolutionDataTypeCells, getEnabledCells, getEnabledCellsWords, getCellWordsUIData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityCellsUIData", function() { return getActivityCellsUIData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellUIDataById", function() { return getCellUIDataById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSolutionDataTypeCells", function() { return getSolutionDataTypeCells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnabledCells", function() { return getEnabledCells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnabledCellsWords", function() { return getEnabledCellsWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellWordsUIData", function() { return getCellWordsUIData; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../selector/utils */ "./react-app/selector/utils.js");
/* harmony import */ var _cellsItemData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cellsItemData */ "./react-app/modules/activityTypes/ICCrossword/selector/cellsItemData.js");
/* harmony import */ var _itemData_selector_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../itemData/selector/general */ "./react-app/modules/itemData/selector/general.js");
/* harmony import */ var _uiData_selector_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../uiData/selector/general */ "./react-app/modules/uiData/selector/general.js");






const getState = state => state.iccrossword_cells_uiData;

const getId = (state, props) => props.id;

const getActivityId = (state, props) => props.activityId;

const getWords = (state, props) => props.words;

const getCellsUIDataAsList = Object(_selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"])([getState], cells => {
  if (!cells) {
    return;
  }

  return Object.values(cells);
});
const getActivityCellsUIData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getCellsUIDataAsList, getActivityId], (cellsUIData, activityId) => {
  if (!cellsUIData || !activityId) {
    return;
  }

  return cellsUIData.filter(cell => cell.activityId === activityId);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getCellUIDataById = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getState, getId], (uiData, id) => {
  if (!id || !uiData) {
    return;
  }

  return uiData[id];
})(getId);
const getSolutionDataTypeCells = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityCellsUIData, _cellsItemData__WEBPACK_IMPORTED_MODULE_2__["getActivityCells"]], (cellsUIData, cells) => {
  if (!cellsUIData || !cellsUIData.length || !cells || !cells.length) {
    return;
  }

  const solutionDataCellsIds = cellsUIData.filter(({
    dataType
  }) => dataType === 'solution').map(({
    id
  }) => id);
  return cells.filter(cell => solutionDataCellsIds.includes(cell.id));
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getEnabledCells = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getActivityCellsUIData, _cellsItemData__WEBPACK_IMPORTED_MODULE_2__["getActivityCells"]], (cellsUIData, cells) => {
  if (!cellsUIData || !cellsUIData.length || !cells || !cells.length) {
    return;
  }

  const enabledCells = cellsUIData.filter(({
    enabled
  }) => enabled).map(({
    id
  }) => id);
  return cells.filter(cell => enabledCells.includes(cell.id));
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getEnabledCellsWords = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getEnabledCells, _itemData_selector_general__WEBPACK_IMPORTED_MODULE_3__["getActivityItemData"]], (cells, words) => {
  if (!cells || !words || !words.length) {
    return;
  }

  const cellWordsIds = [...new Set(cells.map(({
    words
  }) => words).flat())];
  return words.filter(({
    id
  }) => cellWordsIds.includes(id));
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getCellWordsUIData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getWords, _uiData_selector_general__WEBPACK_IMPORTED_MODULE_4__["getActivityUIData"]], (cellWords, uiData) => {
  if (!(cellWords !== null && cellWords !== void 0 && cellWords.length) || !uiData) {
    return;
  }

  return uiData.filter(v => cellWords.includes(v.id));
})(getId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/selector/cellsUserData.js":
/*!*******************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/selector/cellsUserData.js ***!
  \*******************************************************************************/
/*! exports provided: getActivityCellsUserData, getCellUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityCellsUserData", function() { return getActivityCellsUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellUserData", function() { return getCellUserData; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../selector/utils */ "./react-app/selector/utils.js");



const getCellsUserData = state => state.iccrossword_cells_userData;

const getActivityId = (state, props) => props.activityId;

const getId = (state, props) => props.id;

const getCellsUserDataAsList = Object(_selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"])([getCellsUserData], cells => {
  if (!cells) {
    return;
  }

  return Object.values(cells);
});
const getActivityCellsUserData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getCellsUserDataAsList, getActivityId], (cells, activityId) => {
  if (!cells || !activityId) {
    return;
  }

  return cells.filter(cell => cell.activityId === activityId);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getCellUserData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getId, getCellsUserData], (id, userDataCells) => {
  var _userDataCells$id;

  if (!id) {
    return;
  }

  return (_userDataCells$id = userDataCells[id]) === null || _userDataCells$id === void 0 ? void 0 : _userDataCells$id.value;
})(getId);

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/selector/cellsValidationData.js":
/*!*************************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/selector/cellsValidationData.js ***!
  \*************************************************************************************/
/*! exports provided: getCellWordsValidationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellWordsValidationData", function() { return getCellWordsValidationData; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../selector/utils */ "./react-app/selector/utils.js");
/* harmony import */ var _validationData_selector_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../validationData/selector/general */ "./react-app/modules/validationData/selector/general.js");




const getId = (state, props) => props.id;

const getWords = (state, props) => props.words;

const getCellWordsValidationData = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getWords, _validationData_selector_general__WEBPACK_IMPORTED_MODULE_2__["getActivityValidationData"]], (cellWords, validationData) => {
  if (!(cellWords !== null && cellWords !== void 0 && cellWords.length) || !validationData) {
    return;
  }

  return validationData.filter(v => cellWords.includes(v.id));
})(getId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/selector/general.js":
/*!*************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/selector/general.js ***!
  \*************************************************************************/
/*! exports provided: getICCrosswordColSize, getICCrosswordRowSize, getItemsByAlign, getActivityItemDataFilteredByFilled, getActivityUserDataFilled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getICCrosswordColSize", function() { return getICCrosswordColSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getICCrosswordRowSize", function() { return getICCrosswordRowSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsByAlign", function() { return getItemsByAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityItemDataFilteredByFilled", function() { return getActivityItemDataFilteredByFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityUserDataFilled", function() { return getActivityUserDataFilled; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selector_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../selector/utils */ "./react-app/selector/utils.js");
/* harmony import */ var _screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../screens/selector/optionValues */ "./react-app/modules/screens/selector/optionValues.js");
/* harmony import */ var _activities_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../activities/selector */ "./react-app/modules/activities/selector/index.js");
/* harmony import */ var _itemData_selector_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../itemData/selector/general */ "./react-app/modules/itemData/selector/general.js");
/* harmony import */ var _uiData_selector_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../uiData/selector/general */ "./react-app/modules/uiData/selector/general.js");
/* harmony import */ var _userData_selector_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../userData/selector/general */ "./react-app/modules/userData/selector/general.js");








const getActivityId = (state, props) => props.activityId;

const getAlign = (state, props) => props.align;

const getICCrosswordColSize = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([_activities_selector__WEBPACK_IMPORTED_MODULE_3__["getActivityByActivityId"], _screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_2__["cluePositionIsInside"]], (activity, cluesAreInside) => {
  if (!activity) {
    return;
  }

  return activity.metadata.colSize + (cluesAreInside ? 1 : 0);
})(getActivityId);
const getICCrosswordRowSize = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([_activities_selector__WEBPACK_IMPORTED_MODULE_3__["getActivityByActivityId"], _screens_selector_optionValues__WEBPACK_IMPORTED_MODULE_2__["cluePositionIsInside"]], (activity, cluesAreInside) => {
  if (!activity) {
    return;
  }

  return activity.metadata.rowSize + (cluesAreInside ? 1 : 0);
})(getActivityId);
const getItemsByAlign = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([_itemData_selector_general__WEBPACK_IMPORTED_MODULE_4__["getActivityItemData"], getAlign], (items, align) => {
  if (!align || !items) {
    return;
  }

  return items.filter(it => it.align === align);
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityItemDataFilteredByFilled = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([_itemData_selector_general__WEBPACK_IMPORTED_MODULE_4__["getActivityItemData"], _uiData_selector_general__WEBPACK_IMPORTED_MODULE_5__["getActivityUIDataDataTypeSolution"], _userData_selector_general__WEBPACK_IMPORTED_MODULE_6__["getActivityUserData"]], (words, solutionTypeWordUIdata, userData) => {
  if (!words || !userData) {
    return;
  }

  const solutionTypeWordIds = solutionTypeWordUIdata.map(({
    id
  }) => id);
  const solutionTypeWords = words.filter(({
    id
  }) => solutionTypeWordIds.includes(id));
  const solutionTypeCells = [...new Set(solutionTypeWords.map(({
    cells
  }) => cells).flat())];
  const filledWords = words.filter(word => {
    var _wUserData$value;

    const wUserData = userData.find(w => w.id === word.id);

    if (!wUserData || !((_wUserData$value = wUserData.value) !== null && _wUserData$value !== void 0 && _wUserData$value.trim())) {
      return;
    }

    const isFilled = wUserData.value.split('').filter((char, idx) => {
      return solutionTypeCells.includes(word.cells[idx]) || char.trim();
    }).length === word.cells.length;
    return isFilled && wUserData.value.trim();
  });
  return filledWords;
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});
const getActivityUserDataFilled = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([_userData_selector_general__WEBPACK_IMPORTED_MODULE_6__["getActivityUserData"], getActivityItemDataFilteredByFilled], (activityUserData, activityItemsFiltered) => {
  if (!activityItemsFiltered) {
    return;
  }

  return activityItemsFiltered.map(({
    id
  }) => activityUserData.find(ud => ud.id === id));
})(getActivityId, {
  selectorCreator: _selector_utils__WEBPACK_IMPORTED_MODULE_1__["createArraySelector"]
});

/***/ }),

/***/ "./react-app/modules/activityTypes/ICCrossword/selector/processor.js":
/*!***************************************************************************!*\
  !*** ./react-app/modules/activityTypes/ICCrossword/selector/processor.js ***!
  \***************************************************************************/
/*! exports provided: registerProcessors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerProcessors", function() { return registerProcessors; });
/* harmony import */ var _itemData_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../itemData/selector */ "./react-app/modules/itemData/selector/index.js");
/* harmony import */ var _userData_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../userData/selector */ "./react-app/modules/userData/selector/index.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general */ "./react-app/modules/activityTypes/ICCrossword/selector/general.js");



const at = 'iccrossword';
const registerProcessors = () => {
  Object(_itemData_selector__WEBPACK_IMPORTED_MODULE_0__["register"])('getActivityItemDataFilteredByFilled', at, _general__WEBPACK_IMPORTED_MODULE_2__["getActivityItemDataFilteredByFilled"]);
  Object(_userData_selector__WEBPACK_IMPORTED_MODULE_1__["register"])('getActivityUserDataFilled', at, _general__WEBPACK_IMPORTED_MODULE_2__["getActivityUserDataFilled"]);
};

/***/ }),

/***/ "./react-app/modules/lo/selector/index.js":
/*!************************************************!*\
  !*** ./react-app/modules/lo/selector/index.js ***!
  \************************************************/
/*! exports provided: getLoOptions, getLoOptionValueByName, getLoOptionKeyByName, getDictionary, dictionaryIsFalse, dictionaryIsTrue, getNotesArea, notesAreaIsFalse, notesAreaIsTrue, getInteractivePhonemicChart, interactivePhonemicChartIsFalse, interactivePhonemicChartIsTrue, getRevealObject, revealObjectIsFalse, revealObjectIsAll, revealObjectIsProgressive, revealObjectIsProgressiveplushide, getPinObject, pinObjectIsFalse, pinObjectIsTrue, getPrevious, previousIsTrue, previousIsFalse, previousIsAfterSubmitted, getForwardButton, forwardButtonIsNext, forwardButtonIsAdaptive, getEnumeration, enumerationIsFalse, enumerationIsNumber, enumerationIsNumberNoDot, enumerationIsLetter, enumerationIsCapitalletter, enumerationIsBullet, enumerationIsCustom, getEnumerationAnswers, enumerationAnswersIsFalse, enumerationAnswersIsNumber, enumerationAnswersIsNumberNoDot, enumerationAnswersIsLetter, enumerationAnswersIsCapitalletter, enumerationAnswersIsBullet, enumerationAnswersIsCustom, getPrefill, prefillIsFalse, prefillIsFirstitem, prefillIsFirstblock, getGaptextAudio, gaptextAudioIsFalse, gaptextAudioIsTrue, getSpeakLearnerInput, speakLearnerInputIsFalse, speakLearnerInputIsTrue, getFeedback, feedbackIsNormal, feedbackIsInstant, getFeedbackSoundEffects, feedbackSoundEffectsIsOff, feedbackSoundEffectsIsCustom, getSoundEffects, soundEffectsIsNone, soundEffectsIsSoundEffects, getTryAgain, tryAgainIsFalse, tryAgainIsLock, tryAgainIsFrozen, tryAgainIsClear, tryAgainIsKeepall, getScoreValues, scoreValuesIs1PointAction, scoreValuesIs1PointQuestion, getEndResultScreen, endResultScreenIsFalse, endResultScreenIsTrue, endResultScreenIsButtonAfterScore, getProgressBar, progressBarIsTrue, progressBarIsFalse, progressBarIsAuto, progressBarIsScreenSelection, getAutomaticNext, automaticNextIsFalse, automaticNextIsQuestions, automaticNextIsTimer, getAudioSupport, audioSupportIsFalse, audioSupportIsTrue, getPrintable, printableIsFalse, printableIsTrue, getImageAsTrigger, imageAsTriggerIsFalse, imageAsTriggerIsTrue, getConserveAnswers, conserveAnswersIsTrue, conserveAnswersIsFalse, getAddTextObject, addTextObjectIsFalse, addTextObjectIsNormal, getSave, saveIsOff, saveIsSkinbutton, saveIsButtonOnly, getStayInView, stayInViewIsFalse, stayInViewIsTrue, getCheckAnswers, checkAnswersIsAlways, checkAnswersIsFalse, checkAnswersIsAfterOne, checkAnswersIsAfterAll, checkAnswersIsBeforeSubmitted, getSeeAnswers, seeAnswersIsOn, seeAnswersIsOff, seeAnswersIsBeforeInteraction, getReset, resetIsOn, resetIsOff, resetIsBeforeSubmitted, getSubmissions, submissionsIs1, submissionsIs2, submissionsIs3, submissionsIs4, submissionsIs5, submissionsIs6, submissionsIs7, submissionsIs8, submissionsIs9, submissionsIs10, submissionsIs11, submissionsIs12, submissionsIs13, submissionsIs14, submissionsIs15, submissionsIs16, submissionsIs17, submissionsIs18, submissionsIs19, submissionsIs20, submissionsIsUnlimited, getRunningScore, runningScoreIsFalse, runningScoreIsTrue, getShowHints, showHintsIsOff, showHintsIsAlways, showHintsIsCheckScore, getHints, getDelayedFeedback, delayedFeedbackIsFalse, delayedFeedbackIsTrue, delayedFeedbackIsCustom, getShowSubmit, showSubmitIsAlways, showSubmitIsOff, showSubmitIsAfterOne, showSubmitIsAfterAll, showSubmitIsEachScreen, getFinishSubmit, finishSubmitIsOff, finishSubmitIsOn, getShowForward, showForwardIsAlways, showForwardIsOff, showForwardIsAfterOne, showForwardIsAfterSubmitted, showForwardIsAfterAll, showForwardIsAfterCheckAnswers, showForwardIsAfterSeeAnswers, getAutosave, autosaveIsOn, autosaveIsOff, getIntroScreen, introScreenIsOff, introScreenIsOn, getManualMarking, manualMarkingIsOff, manualMarkingIsOn, getFeedbackBand1, feedbackBand1IsFalse, feedbackBand1IsCustom, getFeedbackBand2, feedbackBand2IsFalse, feedbackBand2IsCustom, getFeedbackBand3, feedbackBand3IsFalse, feedbackBand3IsCustom, getFeedbackBand4, feedbackBand4IsFalse, feedbackBand4IsCustom, getSpecialCharactersStudent, getActivityFeedbackBand1, activityFeedbackBand1IsFalse, activityFeedbackBand1IsCustom, getActivityFeedbackBand2, activityFeedbackBand2IsFalse, activityFeedbackBand2IsCustom, getActivityFeedbackBand3, activityFeedbackBand3IsFalse, activityFeedbackBand3IsCustom, getActivityFeedbackBand4, activityFeedbackBand4IsFalse, activityFeedbackBand4IsCustom, getActivityFeedbackThresholds, activityFeedbackThresholdsIsCustom, getAnnotationTools, annotationToolsIsOff, annotationToolsIsOn, annotationToolsIsOnlyForTeachers, annotationToolsIsOnlySupplements, getShowInfoText, showInfoTextIsOff, showInfoTextIsTooltip, showInfoTextIsDialog, getContinuousEnumeration, continuousEnumerationIsOff, continuousEnumerationIsOn, getLoSections, getEndResultAlways, endResultAlwaysIsOff, endResultAlwaysIsOn, endResultAlwaysIsButtonAfterScore, getExamsTimer, examsTimerIsOff, examsTimerIsOn, getActivityPool, activityPoolIsOff, activityPoolIsOn, activityPoolIsRandomiseAll, getCheckMaxAttempts, getSendScores, sendScoresIsOff, sendScoresIsUnlimited, sendScoresIs1Submission, sendScoresIsFinalCheckAnswers, getDesignPackSubstyle, designPackSubstyleIsOff, designPackSubstyleIsOn, getEndResultsReturn, endResultsReturnIsLast, endResultsReturnIsFirst, getScoreValuesPerBlock, scoreValuesPerBlockIsOff, scoreValuesPerBlockIsCustom, getTextboxAutogrow, textboxAutogrowIsOff, textboxAutogrowIsOn, getRestoreLoState, restoreLoStateIsOn, restoreLoStateIsOff, getWikiTool, wikiToolIsOff, wikiToolIsOn, getTeamScoring, teamScoringIsOff, teamScoringIsOn, getReferenceContent, referenceContentIsOff, referenceContentIs1, referenceContentIs2, getAlternativeText, alternativeTextIsOff, alternativeTextIsAlt1, alternativeTextIsAlt2, alternativeTextIsAlt3, getLoTitleDisplay, loTitleDisplayIsOn, loTitleDisplayIsOff, getActivityTitleDisplay, activityTitleDisplayIsOn, activityTitleDisplayIsOff, getAudioIconBehaviour, audioIconBehaviourIsStop, audioIconBehaviourIsPause, getLoFullscreenButton, loFullscreenButtonIsOff, loFullscreenButtonIsOn, getUserVisibility, userVisibilityIsAll, userVisibilityIsTeacher, userVisibilityIsStudent, getTryAgainBehaviour, tryAgainBehaviourIsButton, tryAgainBehaviourIsAutomatic, tryAgainBehaviourIsAutomaticAfterTime, getNavigationMenu, navigationMenuIsOff, navigationMenuIsAuto, navigationMenuIsCustom, getDisplaySettings, displaySettingsIsOff, displaySettingsIsOn, getResourceBanks, resourceBanksIsOff, resourceBanksIsOn, getTtsGeneralRules, ttsGeneralRulesIsOff, ttsGeneralRulesIsOn, getTtsLoRules, ttsLoRulesIsOff, ttsLoRulesIsOn, getTtsActivityRules, ttsActivityRulesIsOff, ttsActivityRulesIsOn, getActivityHelp, activityHelpIsOff, activityHelpIsOn, getCopyrightInformation, copyrightInformationIsOff, copyrightInformationIsOn, getOnlineCheck, onlineCheckIsOff, onlineCheckIsOn, getCheckAnswersInstant, checkAnswersInstantIsOff, checkAnswersInstantIsOn, checkAnswersInstantIsAutomatic, getTranslationBlock, translationBlockIsOff, translationBlockIsOn, getScoreRounding, scoreRoundingIsFloat, scoreRoundingIsRoundup, scoreRoundingIsRound, scoreRoundingIsRounddown, getNextButtonText, nextButtonTextIsDefault, nextButtonTextIsCustom, getCheckAnswersDisplay, checkAnswersDisplayIsMarkingAndFeedback, checkAnswersDisplayIsMarkingOnly, getInstructionPopUp, instructionPopUpIsOff, instructionPopUpIsOn, getResetWholeLo, resetWholeLoIsOff, resetWholeLoIsOn, getShowNextLo, showNextLoIsOff, showNextLoIsOn, getShowPreviousLo, showPreviousLoIsOff, showPreviousLoIsOn, getLoNotesArea, loNotesAreaIsOff, loNotesAreaIsOn, getAudioSpeed, audioSpeedIsOff, audioSpeedIsOn, getScorm2004AbsoluteValues, scorm2004AbsoluteValuesIsOff, scorm2004AbsoluteValuesIsOn, getEndResultsButton, endResultsButtonIsEvery, endResultsButtonIsLast, getTimeSpentInSections, timeSpentInSectionsIsOff, timeSpentInSectionsIsOn, getCloseAfterSubmit, closeAfterSubmitIsOff, closeAfterSubmitIsOn, getPracticeScreen, practiceScreenIsOff, practiceScreenIsOn, getMediaPlaybackLimit, mediaPlaybackLimitIsOff, mediaPlaybackLimitIs1, mediaPlaybackLimitIs2, mediaPlaybackLimitIs3, mediaPlaybackLimitIs4, mediaPlaybackLimitIs5, getTtsLanguage, ttsLanguageIsOff, ttsLanguageIsOn, getScorm12AbsoluteValues, scorm12AbsoluteValuesIsOn, scorm12AbsoluteValuesIsOff, getRegressiveScoring, regressiveScoringIsOff, regressiveScoringIsOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./react-app/modules/lo/selector/options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoOptions", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["getLoOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoOptionValueByName", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoOptionKeyByName", function() { return _options__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"]; });

/* harmony import */ var _optionValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionValues */ "./react-app/modules/lo/selector/optionValues.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDictionary", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getDictionary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dictionaryIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["dictionaryIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dictionaryIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["dictionaryIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNotesArea", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getNotesArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notesAreaIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["notesAreaIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notesAreaIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["notesAreaIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInteractivePhonemicChart", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getInteractivePhonemicChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interactivePhonemicChartIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["interactivePhonemicChartIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interactivePhonemicChartIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["interactivePhonemicChartIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRevealObject", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getRevealObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["revealObjectIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["revealObjectIsAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsProgressive", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["revealObjectIsProgressive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsProgressiveplushide", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["revealObjectIsProgressiveplushide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPinObject", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getPinObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pinObjectIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["pinObjectIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pinObjectIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["pinObjectIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrevious", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getPrevious"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previousIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["previousIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previousIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["previousIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previousIsAfterSubmitted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["previousIsAfterSubmitted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getForwardButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getForwardButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardButtonIsNext", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["forwardButtonIsNext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardButtonIsAdaptive", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["forwardButtonIsAdaptive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnumeration", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getEnumeration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsNumber", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationIsNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsNumberNoDot", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationIsNumberNoDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsLetter", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationIsLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsCapitalletter", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationIsCapitalletter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsBullet", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationIsBullet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnumerationAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getEnumerationAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationAnswersIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsNumber", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationAnswersIsNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsNumberNoDot", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationAnswersIsNumberNoDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsLetter", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationAnswersIsLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsCapitalletter", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationAnswersIsCapitalletter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsBullet", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationAnswersIsBullet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["enumerationAnswersIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrefill", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getPrefill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prefillIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["prefillIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prefillIsFirstitem", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["prefillIsFirstitem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prefillIsFirstblock", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["prefillIsFirstblock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGaptextAudio", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getGaptextAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gaptextAudioIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["gaptextAudioIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gaptextAudioIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["gaptextAudioIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpeakLearnerInput", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getSpeakLearnerInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "speakLearnerInputIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["speakLearnerInputIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "speakLearnerInputIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["speakLearnerInputIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedback", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackIsNormal", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackIsNormal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackIsInstant", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackIsInstant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackSoundEffects", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getFeedbackSoundEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackSoundEffectsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackSoundEffectsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackSoundEffectsIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackSoundEffectsIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSoundEffects", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getSoundEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "soundEffectsIsNone", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["soundEffectsIsNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "soundEffectsIsSoundEffects", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["soundEffectsIsSoundEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTryAgain", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTryAgain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["tryAgainIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsLock", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["tryAgainIsLock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsFrozen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["tryAgainIsFrozen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsClear", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["tryAgainIsClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsKeepall", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["tryAgainIsKeepall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScoreValues", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getScoreValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreValuesIs1PointAction", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scoreValuesIs1PointAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreValuesIs1PointQuestion", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scoreValuesIs1PointQuestion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndResultScreen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getEndResultScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultScreenIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultScreenIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsButtonAfterScore", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultScreenIsButtonAfterScore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProgressBar", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progressBarIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["progressBarIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progressBarIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["progressBarIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progressBarIsAuto", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["progressBarIsAuto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progressBarIsScreenSelection", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["progressBarIsScreenSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAutomaticNext", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getAutomaticNext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["automaticNextIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsQuestions", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["automaticNextIsQuestions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsTimer", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["automaticNextIsTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudioSupport", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getAudioSupport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioSupportIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["audioSupportIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioSupportIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["audioSupportIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrintable", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getPrintable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printableIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["printableIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printableIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["printableIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageAsTrigger", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getImageAsTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageAsTriggerIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["imageAsTriggerIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageAsTriggerIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["imageAsTriggerIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConserveAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getConserveAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "conserveAnswersIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["conserveAnswersIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "conserveAnswersIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["conserveAnswersIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAddTextObject", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getAddTextObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTextObjectIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["addTextObjectIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTextObjectIsNormal", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["addTextObjectIsNormal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSave", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getSave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["saveIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveIsSkinbutton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["saveIsSkinbutton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveIsButtonOnly", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["saveIsButtonOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStayInView", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getStayInView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stayInViewIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["stayInViewIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stayInViewIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["stayInViewIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getCheckAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersIsAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAfterOne", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersIsAfterOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAfterAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersIsAfterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsBeforeSubmitted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersIsBeforeSubmitted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSeeAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getSeeAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["seeAnswersIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["seeAnswersIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsBeforeInteraction", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["seeAnswersIsBeforeInteraction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReset", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["resetIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["resetIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIsBeforeSubmitted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["resetIsBeforeSubmitted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSubmissions", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getSubmissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs5", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs6", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs7", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs8", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs9", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs10", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs11", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs11"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs12", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs12"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs13", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs13"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs14", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs14"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs15", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs15"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs16", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs16"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs17", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs17"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs18", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs18"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs19", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs19"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs20", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIs20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIsUnlimited", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["submissionsIsUnlimited"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunningScore", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getRunningScore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runningScoreIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["runningScoreIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runningScoreIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["runningScoreIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowHints", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getShowHints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showHintsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showHintsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showHintsIsAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showHintsIsAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showHintsIsCheckScore", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showHintsIsCheckScore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHints", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getHints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDelayedFeedback", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getDelayedFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["delayedFeedbackIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["delayedFeedbackIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["delayedFeedbackIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowSubmit", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getShowSubmit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showSubmitIsAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showSubmitIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAfterOne", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showSubmitIsAfterOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAfterAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showSubmitIsAfterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsEachScreen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showSubmitIsEachScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFinishSubmit", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getFinishSubmit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "finishSubmitIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["finishSubmitIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "finishSubmitIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["finishSubmitIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowForward", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getShowForward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showForwardIsAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showForwardIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterOne", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showForwardIsAfterOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterSubmitted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showForwardIsAfterSubmitted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showForwardIsAfterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterCheckAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showForwardIsAfterCheckAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterSeeAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showForwardIsAfterSeeAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAutosave", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getAutosave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autosaveIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["autosaveIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autosaveIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["autosaveIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntroScreen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getIntroScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introScreenIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["introScreenIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introScreenIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["introScreenIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getManualMarking", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getManualMarking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manualMarkingIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["manualMarkingIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manualMarkingIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["manualMarkingIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getFeedbackBand1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand1IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackBand1IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand1IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackBand1IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getFeedbackBand2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand2IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackBand2IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand2IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackBand2IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getFeedbackBand3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand3IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackBand3IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand3IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackBand3IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getFeedbackBand4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand4IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackBand4IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand4IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["feedbackBand4IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpecialCharactersStudent", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getSpecialCharactersStudent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getActivityFeedbackBand1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand1IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityFeedbackBand1IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand1IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityFeedbackBand1IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getActivityFeedbackBand2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand2IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityFeedbackBand2IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand2IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityFeedbackBand2IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getActivityFeedbackBand3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand3IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityFeedbackBand3IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand3IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityFeedbackBand3IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getActivityFeedbackBand4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand4IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityFeedbackBand4IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand4IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityFeedbackBand4IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackThresholds", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getActivityFeedbackThresholds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackThresholdsIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityFeedbackThresholdsIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAnnotationTools", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getAnnotationTools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["annotationToolsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["annotationToolsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOnlyForTeachers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["annotationToolsIsOnlyForTeachers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOnlySupplements", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["annotationToolsIsOnlySupplements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowInfoText", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getShowInfoText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showInfoTextIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsTooltip", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showInfoTextIsTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsDialog", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showInfoTextIsDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContinuousEnumeration", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getContinuousEnumeration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "continuousEnumerationIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["continuousEnumerationIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "continuousEnumerationIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["continuousEnumerationIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoSections", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getLoSections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndResultAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getEndResultAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultAlwaysIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultAlwaysIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsButtonAfterScore", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultAlwaysIsButtonAfterScore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExamsTimer", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getExamsTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "examsTimerIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["examsTimerIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "examsTimerIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["examsTimerIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityPool", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getActivityPool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityPoolIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityPoolIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsRandomiseAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityPoolIsRandomiseAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheckMaxAttempts", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getCheckMaxAttempts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSendScores", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getSendScores"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["sendScoresIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsUnlimited", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["sendScoresIsUnlimited"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendScoresIs1Submission", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["sendScoresIs1Submission"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsFinalCheckAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["sendScoresIsFinalCheckAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDesignPackSubstyle", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getDesignPackSubstyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "designPackSubstyleIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["designPackSubstyleIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "designPackSubstyleIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["designPackSubstyleIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndResultsReturn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getEndResultsReturn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultsReturnIsLast", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultsReturnIsLast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultsReturnIsFirst", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultsReturnIsFirst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScoreValuesPerBlock", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getScoreValuesPerBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreValuesPerBlockIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scoreValuesPerBlockIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreValuesPerBlockIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scoreValuesPerBlockIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextboxAutogrow", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTextboxAutogrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textboxAutogrowIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["textboxAutogrowIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textboxAutogrowIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["textboxAutogrowIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRestoreLoState", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getRestoreLoState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restoreLoStateIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["restoreLoStateIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restoreLoStateIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["restoreLoStateIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWikiTool", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getWikiTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wikiToolIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["wikiToolIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wikiToolIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["wikiToolIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTeamScoring", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTeamScoring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teamScoringIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["teamScoringIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teamScoringIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["teamScoringIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReferenceContent", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getReferenceContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "referenceContentIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["referenceContentIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "referenceContentIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["referenceContentIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "referenceContentIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["referenceContentIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlternativeText", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getAlternativeText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["alternativeTextIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["alternativeTextIsAlt1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["alternativeTextIsAlt2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["alternativeTextIsAlt3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoTitleDisplay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getLoTitleDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loTitleDisplayIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["loTitleDisplayIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loTitleDisplayIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["loTitleDisplayIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityTitleDisplay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getActivityTitleDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityTitleDisplayIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityTitleDisplayIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityTitleDisplayIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityTitleDisplayIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudioIconBehaviour", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getAudioIconBehaviour"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioIconBehaviourIsStop", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["audioIconBehaviourIsStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioIconBehaviourIsPause", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["audioIconBehaviourIsPause"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoFullscreenButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getLoFullscreenButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loFullscreenButtonIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["loFullscreenButtonIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loFullscreenButtonIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["loFullscreenButtonIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserVisibility", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getUserVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["userVisibilityIsAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsTeacher", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["userVisibilityIsTeacher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsStudent", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["userVisibilityIsStudent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTryAgainBehaviour", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTryAgainBehaviour"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["tryAgainBehaviourIsButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsAutomatic", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["tryAgainBehaviourIsAutomatic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsAutomaticAfterTime", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["tryAgainBehaviourIsAutomaticAfterTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNavigationMenu", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getNavigationMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["navigationMenuIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsAuto", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["navigationMenuIsAuto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["navigationMenuIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplaySettings", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getDisplaySettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displaySettingsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["displaySettingsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displaySettingsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["displaySettingsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResourceBanks", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getResourceBanks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resourceBanksIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["resourceBanksIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resourceBanksIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["resourceBanksIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTtsGeneralRules", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTtsGeneralRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsGeneralRulesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["ttsGeneralRulesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsGeneralRulesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["ttsGeneralRulesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTtsLoRules", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTtsLoRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsLoRulesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["ttsLoRulesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsLoRulesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["ttsLoRulesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTtsActivityRules", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTtsActivityRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsActivityRulesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["ttsActivityRulesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsActivityRulesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["ttsActivityRulesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityHelp", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getActivityHelp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityHelpIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityHelpIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityHelpIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["activityHelpIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCopyrightInformation", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getCopyrightInformation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyrightInformationIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["copyrightInformationIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyrightInformationIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["copyrightInformationIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOnlineCheck", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getOnlineCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlineCheckIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["onlineCheckIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlineCheckIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["onlineCheckIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswersInstant", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getCheckAnswersInstant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersInstantIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersInstantIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsAutomatic", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersInstantIsAutomatic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTranslationBlock", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTranslationBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translationBlockIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["translationBlockIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translationBlockIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["translationBlockIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScoreRounding", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getScoreRounding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsFloat", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scoreRoundingIsFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRoundup", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scoreRoundingIsRoundup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRound", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scoreRoundingIsRound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRounddown", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scoreRoundingIsRounddown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextButtonText", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getNextButtonText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextButtonTextIsDefault", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["nextButtonTextIsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextButtonTextIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["nextButtonTextIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswersDisplay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getCheckAnswersDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersDisplayIsMarkingAndFeedback", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersDisplayIsMarkingAndFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersDisplayIsMarkingOnly", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["checkAnswersDisplayIsMarkingOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstructionPopUp", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getInstructionPopUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instructionPopUpIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["instructionPopUpIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instructionPopUpIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["instructionPopUpIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResetWholeLo", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getResetWholeLo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetWholeLoIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["resetWholeLoIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetWholeLoIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["resetWholeLoIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowNextLo", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getShowNextLo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNextLoIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showNextLoIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNextLoIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showNextLoIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowPreviousLo", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getShowPreviousLo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showPreviousLoIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showPreviousLoIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showPreviousLoIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["showPreviousLoIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoNotesArea", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getLoNotesArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loNotesAreaIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["loNotesAreaIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loNotesAreaIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["loNotesAreaIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudioSpeed", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getAudioSpeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioSpeedIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["audioSpeedIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioSpeedIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["audioSpeedIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScorm2004AbsoluteValues", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getScorm2004AbsoluteValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scorm2004AbsoluteValuesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scorm2004AbsoluteValuesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scorm2004AbsoluteValuesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scorm2004AbsoluteValuesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndResultsButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getEndResultsButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultsButtonIsEvery", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultsButtonIsEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultsButtonIsLast", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["endResultsButtonIsLast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimeSpentInSections", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTimeSpentInSections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSpentInSectionsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["timeSpentInSectionsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSpentInSectionsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["timeSpentInSectionsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCloseAfterSubmit", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getCloseAfterSubmit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeAfterSubmitIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["closeAfterSubmitIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeAfterSubmitIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["closeAfterSubmitIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPracticeScreen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getPracticeScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "practiceScreenIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["practiceScreenIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "practiceScreenIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["practiceScreenIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMediaPlaybackLimit", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getMediaPlaybackLimit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["mediaPlaybackLimitIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["mediaPlaybackLimitIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["mediaPlaybackLimitIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["mediaPlaybackLimitIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["mediaPlaybackLimitIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs5", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["mediaPlaybackLimitIs5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTtsLanguage", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getTtsLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsLanguageIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["ttsLanguageIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsLanguageIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["ttsLanguageIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScorm12AbsoluteValues", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getScorm12AbsoluteValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scorm12AbsoluteValuesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scorm12AbsoluteValuesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scorm12AbsoluteValuesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["scorm12AbsoluteValuesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRegressiveScoring", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["getRegressiveScoring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regressiveScoringIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["regressiveScoringIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regressiveScoringIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_1__["regressiveScoringIsOn"]; });




/***/ }),

/***/ "./react-app/modules/lo/selector/optionValues.js":
/*!*******************************************************!*\
  !*** ./react-app/modules/lo/selector/optionValues.js ***!
  \*******************************************************/
/*! exports provided: getDictionary, dictionaryIsFalse, dictionaryIsTrue, getNotesArea, notesAreaIsFalse, notesAreaIsTrue, getInteractivePhonemicChart, interactivePhonemicChartIsFalse, interactivePhonemicChartIsTrue, getRevealObject, revealObjectIsFalse, revealObjectIsAll, revealObjectIsProgressive, revealObjectIsProgressiveplushide, getPinObject, pinObjectIsFalse, pinObjectIsTrue, getPrevious, previousIsTrue, previousIsFalse, previousIsAfterSubmitted, getForwardButton, forwardButtonIsNext, forwardButtonIsAdaptive, getEnumeration, enumerationIsFalse, enumerationIsNumber, enumerationIsNumberNoDot, enumerationIsLetter, enumerationIsCapitalletter, enumerationIsBullet, enumerationIsCustom, getEnumerationAnswers, enumerationAnswersIsFalse, enumerationAnswersIsNumber, enumerationAnswersIsNumberNoDot, enumerationAnswersIsLetter, enumerationAnswersIsCapitalletter, enumerationAnswersIsBullet, enumerationAnswersIsCustom, getPrefill, prefillIsFalse, prefillIsFirstitem, prefillIsFirstblock, getGaptextAudio, gaptextAudioIsFalse, gaptextAudioIsTrue, getSpeakLearnerInput, speakLearnerInputIsFalse, speakLearnerInputIsTrue, getFeedback, feedbackIsNormal, feedbackIsInstant, getFeedbackSoundEffects, feedbackSoundEffectsIsOff, feedbackSoundEffectsIsCustom, getSoundEffects, soundEffectsIsNone, soundEffectsIsSoundEffects, getTryAgain, tryAgainIsFalse, tryAgainIsLock, tryAgainIsFrozen, tryAgainIsClear, tryAgainIsKeepall, getScoreValues, scoreValuesIs1PointAction, scoreValuesIs1PointQuestion, getEndResultScreen, endResultScreenIsFalse, endResultScreenIsTrue, endResultScreenIsButtonAfterScore, getProgressBar, progressBarIsTrue, progressBarIsFalse, progressBarIsAuto, progressBarIsScreenSelection, getAutomaticNext, automaticNextIsFalse, automaticNextIsQuestions, automaticNextIsTimer, getAudioSupport, audioSupportIsFalse, audioSupportIsTrue, getPrintable, printableIsFalse, printableIsTrue, getImageAsTrigger, imageAsTriggerIsFalse, imageAsTriggerIsTrue, getConserveAnswers, conserveAnswersIsTrue, conserveAnswersIsFalse, getAddTextObject, addTextObjectIsFalse, addTextObjectIsNormal, getSave, saveIsOff, saveIsSkinbutton, saveIsButtonOnly, getStayInView, stayInViewIsFalse, stayInViewIsTrue, getCheckAnswers, checkAnswersIsAlways, checkAnswersIsFalse, checkAnswersIsAfterOne, checkAnswersIsAfterAll, checkAnswersIsBeforeSubmitted, getSeeAnswers, seeAnswersIsOn, seeAnswersIsOff, seeAnswersIsBeforeInteraction, getReset, resetIsOn, resetIsOff, resetIsBeforeSubmitted, getSubmissions, submissionsIs1, submissionsIs2, submissionsIs3, submissionsIs4, submissionsIs5, submissionsIs6, submissionsIs7, submissionsIs8, submissionsIs9, submissionsIs10, submissionsIs11, submissionsIs12, submissionsIs13, submissionsIs14, submissionsIs15, submissionsIs16, submissionsIs17, submissionsIs18, submissionsIs19, submissionsIs20, submissionsIsUnlimited, getRunningScore, runningScoreIsFalse, runningScoreIsTrue, getShowHints, showHintsIsOff, showHintsIsAlways, showHintsIsCheckScore, getHints, getDelayedFeedback, delayedFeedbackIsFalse, delayedFeedbackIsTrue, delayedFeedbackIsCustom, getShowSubmit, showSubmitIsAlways, showSubmitIsOff, showSubmitIsAfterOne, showSubmitIsAfterAll, showSubmitIsEachScreen, getFinishSubmit, finishSubmitIsOff, finishSubmitIsOn, getShowForward, showForwardIsAlways, showForwardIsOff, showForwardIsAfterOne, showForwardIsAfterSubmitted, showForwardIsAfterAll, showForwardIsAfterCheckAnswers, showForwardIsAfterSeeAnswers, getAutosave, autosaveIsOn, autosaveIsOff, getIntroScreen, introScreenIsOff, introScreenIsOn, getManualMarking, manualMarkingIsOff, manualMarkingIsOn, getFeedbackBand1, feedbackBand1IsFalse, feedbackBand1IsCustom, getFeedbackBand2, feedbackBand2IsFalse, feedbackBand2IsCustom, getFeedbackBand3, feedbackBand3IsFalse, feedbackBand3IsCustom, getFeedbackBand4, feedbackBand4IsFalse, feedbackBand4IsCustom, getSpecialCharactersStudent, getActivityFeedbackBand1, activityFeedbackBand1IsFalse, activityFeedbackBand1IsCustom, getActivityFeedbackBand2, activityFeedbackBand2IsFalse, activityFeedbackBand2IsCustom, getActivityFeedbackBand3, activityFeedbackBand3IsFalse, activityFeedbackBand3IsCustom, getActivityFeedbackBand4, activityFeedbackBand4IsFalse, activityFeedbackBand4IsCustom, getActivityFeedbackThresholds, activityFeedbackThresholdsIsCustom, getAnnotationTools, annotationToolsIsOff, annotationToolsIsOn, annotationToolsIsOnlyForTeachers, annotationToolsIsOnlySupplements, getShowInfoText, showInfoTextIsOff, showInfoTextIsTooltip, showInfoTextIsDialog, getContinuousEnumeration, continuousEnumerationIsOff, continuousEnumerationIsOn, getLoSections, getEndResultAlways, endResultAlwaysIsOff, endResultAlwaysIsOn, endResultAlwaysIsButtonAfterScore, getExamsTimer, examsTimerIsOff, examsTimerIsOn, getActivityPool, activityPoolIsOff, activityPoolIsOn, activityPoolIsRandomiseAll, getCheckMaxAttempts, getSendScores, sendScoresIsOff, sendScoresIsUnlimited, sendScoresIs1Submission, sendScoresIsFinalCheckAnswers, getDesignPackSubstyle, designPackSubstyleIsOff, designPackSubstyleIsOn, getEndResultsReturn, endResultsReturnIsLast, endResultsReturnIsFirst, getScoreValuesPerBlock, scoreValuesPerBlockIsOff, scoreValuesPerBlockIsCustom, getTextboxAutogrow, textboxAutogrowIsOff, textboxAutogrowIsOn, getRestoreLoState, restoreLoStateIsOn, restoreLoStateIsOff, getWikiTool, wikiToolIsOff, wikiToolIsOn, getTeamScoring, teamScoringIsOff, teamScoringIsOn, getReferenceContent, referenceContentIsOff, referenceContentIs1, referenceContentIs2, getAlternativeText, alternativeTextIsOff, alternativeTextIsAlt1, alternativeTextIsAlt2, alternativeTextIsAlt3, getLoTitleDisplay, loTitleDisplayIsOn, loTitleDisplayIsOff, getActivityTitleDisplay, activityTitleDisplayIsOn, activityTitleDisplayIsOff, getAudioIconBehaviour, audioIconBehaviourIsStop, audioIconBehaviourIsPause, getLoFullscreenButton, loFullscreenButtonIsOff, loFullscreenButtonIsOn, getUserVisibility, userVisibilityIsAll, userVisibilityIsTeacher, userVisibilityIsStudent, getTryAgainBehaviour, tryAgainBehaviourIsButton, tryAgainBehaviourIsAutomatic, tryAgainBehaviourIsAutomaticAfterTime, getNavigationMenu, navigationMenuIsOff, navigationMenuIsAuto, navigationMenuIsCustom, getDisplaySettings, displaySettingsIsOff, displaySettingsIsOn, getResourceBanks, resourceBanksIsOff, resourceBanksIsOn, getTtsGeneralRules, ttsGeneralRulesIsOff, ttsGeneralRulesIsOn, getTtsLoRules, ttsLoRulesIsOff, ttsLoRulesIsOn, getTtsActivityRules, ttsActivityRulesIsOff, ttsActivityRulesIsOn, getActivityHelp, activityHelpIsOff, activityHelpIsOn, getCopyrightInformation, copyrightInformationIsOff, copyrightInformationIsOn, getOnlineCheck, onlineCheckIsOff, onlineCheckIsOn, getCheckAnswersInstant, checkAnswersInstantIsOff, checkAnswersInstantIsOn, checkAnswersInstantIsAutomatic, getTranslationBlock, translationBlockIsOff, translationBlockIsOn, getScoreRounding, scoreRoundingIsFloat, scoreRoundingIsRoundup, scoreRoundingIsRound, scoreRoundingIsRounddown, getNextButtonText, nextButtonTextIsDefault, nextButtonTextIsCustom, getCheckAnswersDisplay, checkAnswersDisplayIsMarkingAndFeedback, checkAnswersDisplayIsMarkingOnly, getInstructionPopUp, instructionPopUpIsOff, instructionPopUpIsOn, getResetWholeLo, resetWholeLoIsOff, resetWholeLoIsOn, getShowNextLo, showNextLoIsOff, showNextLoIsOn, getShowPreviousLo, showPreviousLoIsOff, showPreviousLoIsOn, getLoNotesArea, loNotesAreaIsOff, loNotesAreaIsOn, getAudioSpeed, audioSpeedIsOff, audioSpeedIsOn, getScorm2004AbsoluteValues, scorm2004AbsoluteValuesIsOff, scorm2004AbsoluteValuesIsOn, getEndResultsButton, endResultsButtonIsEvery, endResultsButtonIsLast, getTimeSpentInSections, timeSpentInSectionsIsOff, timeSpentInSectionsIsOn, getCloseAfterSubmit, closeAfterSubmitIsOff, closeAfterSubmitIsOn, getPracticeScreen, practiceScreenIsOff, practiceScreenIsOn, getMediaPlaybackLimit, mediaPlaybackLimitIsOff, mediaPlaybackLimitIs1, mediaPlaybackLimitIs2, mediaPlaybackLimitIs3, mediaPlaybackLimitIs4, mediaPlaybackLimitIs5, getTtsLanguage, ttsLanguageIsOff, ttsLanguageIsOn, getScorm12AbsoluteValues, scorm12AbsoluteValuesIsOn, scorm12AbsoluteValuesIsOff, getRegressiveScoring, regressiveScoringIsOff, regressiveScoringIsOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDictionary", function() { return getDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaryIsFalse", function() { return dictionaryIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaryIsTrue", function() { return dictionaryIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotesArea", function() { return getNotesArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notesAreaIsFalse", function() { return notesAreaIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notesAreaIsTrue", function() { return notesAreaIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInteractivePhonemicChart", function() { return getInteractivePhonemicChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactivePhonemicChartIsFalse", function() { return interactivePhonemicChartIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactivePhonemicChartIsTrue", function() { return interactivePhonemicChartIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevealObject", function() { return getRevealObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsFalse", function() { return revealObjectIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsAll", function() { return revealObjectIsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsProgressive", function() { return revealObjectIsProgressive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsProgressiveplushide", function() { return revealObjectIsProgressiveplushide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPinObject", function() { return getPinObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinObjectIsFalse", function() { return pinObjectIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinObjectIsTrue", function() { return pinObjectIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrevious", function() { return getPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousIsTrue", function() { return previousIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousIsFalse", function() { return previousIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousIsAfterSubmitted", function() { return previousIsAfterSubmitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForwardButton", function() { return getForwardButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardButtonIsNext", function() { return forwardButtonIsNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardButtonIsAdaptive", function() { return forwardButtonIsAdaptive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumeration", function() { return getEnumeration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsFalse", function() { return enumerationIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsNumber", function() { return enumerationIsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsNumberNoDot", function() { return enumerationIsNumberNoDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsLetter", function() { return enumerationIsLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsCapitalletter", function() { return enumerationIsCapitalletter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsBullet", function() { return enumerationIsBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsCustom", function() { return enumerationIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumerationAnswers", function() { return getEnumerationAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsFalse", function() { return enumerationAnswersIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsNumber", function() { return enumerationAnswersIsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsNumberNoDot", function() { return enumerationAnswersIsNumberNoDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsLetter", function() { return enumerationAnswersIsLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsCapitalletter", function() { return enumerationAnswersIsCapitalletter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsBullet", function() { return enumerationAnswersIsBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsCustom", function() { return enumerationAnswersIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefill", function() { return getPrefill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefillIsFalse", function() { return prefillIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefillIsFirstitem", function() { return prefillIsFirstitem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefillIsFirstblock", function() { return prefillIsFirstblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaptextAudio", function() { return getGaptextAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaptextAudioIsFalse", function() { return gaptextAudioIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaptextAudioIsTrue", function() { return gaptextAudioIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpeakLearnerInput", function() { return getSpeakLearnerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speakLearnerInputIsFalse", function() { return speakLearnerInputIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speakLearnerInputIsTrue", function() { return speakLearnerInputIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedback", function() { return getFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackIsNormal", function() { return feedbackIsNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackIsInstant", function() { return feedbackIsInstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackSoundEffects", function() { return getFeedbackSoundEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackSoundEffectsIsOff", function() { return feedbackSoundEffectsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackSoundEffectsIsCustom", function() { return feedbackSoundEffectsIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSoundEffects", function() { return getSoundEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soundEffectsIsNone", function() { return soundEffectsIsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soundEffectsIsSoundEffects", function() { return soundEffectsIsSoundEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTryAgain", function() { return getTryAgain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsFalse", function() { return tryAgainIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsLock", function() { return tryAgainIsLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsFrozen", function() { return tryAgainIsFrozen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsClear", function() { return tryAgainIsClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsKeepall", function() { return tryAgainIsKeepall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreValues", function() { return getScoreValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreValuesIs1PointAction", function() { return scoreValuesIs1PointAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreValuesIs1PointQuestion", function() { return scoreValuesIs1PointQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndResultScreen", function() { return getEndResultScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsFalse", function() { return endResultScreenIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsTrue", function() { return endResultScreenIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsButtonAfterScore", function() { return endResultScreenIsButtonAfterScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressBar", function() { return getProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarIsTrue", function() { return progressBarIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarIsFalse", function() { return progressBarIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarIsAuto", function() { return progressBarIsAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarIsScreenSelection", function() { return progressBarIsScreenSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutomaticNext", function() { return getAutomaticNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsFalse", function() { return automaticNextIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsQuestions", function() { return automaticNextIsQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsTimer", function() { return automaticNextIsTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudioSupport", function() { return getAudioSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioSupportIsFalse", function() { return audioSupportIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioSupportIsTrue", function() { return audioSupportIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrintable", function() { return getPrintable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printableIsFalse", function() { return printableIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printableIsTrue", function() { return printableIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageAsTrigger", function() { return getImageAsTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageAsTriggerIsFalse", function() { return imageAsTriggerIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageAsTriggerIsTrue", function() { return imageAsTriggerIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConserveAnswers", function() { return getConserveAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conserveAnswersIsTrue", function() { return conserveAnswersIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conserveAnswersIsFalse", function() { return conserveAnswersIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddTextObject", function() { return getAddTextObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTextObjectIsFalse", function() { return addTextObjectIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTextObjectIsNormal", function() { return addTextObjectIsNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSave", function() { return getSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIsOff", function() { return saveIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIsSkinbutton", function() { return saveIsSkinbutton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIsButtonOnly", function() { return saveIsButtonOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStayInView", function() { return getStayInView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stayInViewIsFalse", function() { return stayInViewIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stayInViewIsTrue", function() { return stayInViewIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswers", function() { return getCheckAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAlways", function() { return checkAnswersIsAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsFalse", function() { return checkAnswersIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAfterOne", function() { return checkAnswersIsAfterOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAfterAll", function() { return checkAnswersIsAfterAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsBeforeSubmitted", function() { return checkAnswersIsBeforeSubmitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeeAnswers", function() { return getSeeAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsOn", function() { return seeAnswersIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsOff", function() { return seeAnswersIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsBeforeInteraction", function() { return seeAnswersIsBeforeInteraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReset", function() { return getReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIsOn", function() { return resetIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIsOff", function() { return resetIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIsBeforeSubmitted", function() { return resetIsBeforeSubmitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubmissions", function() { return getSubmissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs1", function() { return submissionsIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs2", function() { return submissionsIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs3", function() { return submissionsIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs4", function() { return submissionsIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs5", function() { return submissionsIs5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs6", function() { return submissionsIs6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs7", function() { return submissionsIs7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs8", function() { return submissionsIs8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs9", function() { return submissionsIs9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs10", function() { return submissionsIs10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs11", function() { return submissionsIs11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs12", function() { return submissionsIs12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs13", function() { return submissionsIs13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs14", function() { return submissionsIs14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs15", function() { return submissionsIs15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs16", function() { return submissionsIs16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs17", function() { return submissionsIs17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs18", function() { return submissionsIs18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs19", function() { return submissionsIs19; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs20", function() { return submissionsIs20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIsUnlimited", function() { return submissionsIsUnlimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunningScore", function() { return getRunningScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runningScoreIsFalse", function() { return runningScoreIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runningScoreIsTrue", function() { return runningScoreIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowHints", function() { return getShowHints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHintsIsOff", function() { return showHintsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHintsIsAlways", function() { return showHintsIsAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHintsIsCheckScore", function() { return showHintsIsCheckScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHints", function() { return getHints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelayedFeedback", function() { return getDelayedFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsFalse", function() { return delayedFeedbackIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsTrue", function() { return delayedFeedbackIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsCustom", function() { return delayedFeedbackIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowSubmit", function() { return getShowSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAlways", function() { return showSubmitIsAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsOff", function() { return showSubmitIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAfterOne", function() { return showSubmitIsAfterOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAfterAll", function() { return showSubmitIsAfterAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsEachScreen", function() { return showSubmitIsEachScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFinishSubmit", function() { return getFinishSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishSubmitIsOff", function() { return finishSubmitIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishSubmitIsOn", function() { return finishSubmitIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowForward", function() { return getShowForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAlways", function() { return showForwardIsAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsOff", function() { return showForwardIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterOne", function() { return showForwardIsAfterOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterSubmitted", function() { return showForwardIsAfterSubmitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterAll", function() { return showForwardIsAfterAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterCheckAnswers", function() { return showForwardIsAfterCheckAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterSeeAnswers", function() { return showForwardIsAfterSeeAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutosave", function() { return getAutosave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autosaveIsOn", function() { return autosaveIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autosaveIsOff", function() { return autosaveIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntroScreen", function() { return getIntroScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introScreenIsOff", function() { return introScreenIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introScreenIsOn", function() { return introScreenIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManualMarking", function() { return getManualMarking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manualMarkingIsOff", function() { return manualMarkingIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manualMarkingIsOn", function() { return manualMarkingIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand1", function() { return getFeedbackBand1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand1IsFalse", function() { return feedbackBand1IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand1IsCustom", function() { return feedbackBand1IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand2", function() { return getFeedbackBand2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand2IsFalse", function() { return feedbackBand2IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand2IsCustom", function() { return feedbackBand2IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand3", function() { return getFeedbackBand3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand3IsFalse", function() { return feedbackBand3IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand3IsCustom", function() { return feedbackBand3IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand4", function() { return getFeedbackBand4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand4IsFalse", function() { return feedbackBand4IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand4IsCustom", function() { return feedbackBand4IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialCharactersStudent", function() { return getSpecialCharactersStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand1", function() { return getActivityFeedbackBand1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand1IsFalse", function() { return activityFeedbackBand1IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand1IsCustom", function() { return activityFeedbackBand1IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand2", function() { return getActivityFeedbackBand2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand2IsFalse", function() { return activityFeedbackBand2IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand2IsCustom", function() { return activityFeedbackBand2IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand3", function() { return getActivityFeedbackBand3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand3IsFalse", function() { return activityFeedbackBand3IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand3IsCustom", function() { return activityFeedbackBand3IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand4", function() { return getActivityFeedbackBand4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand4IsFalse", function() { return activityFeedbackBand4IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand4IsCustom", function() { return activityFeedbackBand4IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackThresholds", function() { return getActivityFeedbackThresholds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackThresholdsIsCustom", function() { return activityFeedbackThresholdsIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnotationTools", function() { return getAnnotationTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOff", function() { return annotationToolsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOn", function() { return annotationToolsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOnlyForTeachers", function() { return annotationToolsIsOnlyForTeachers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOnlySupplements", function() { return annotationToolsIsOnlySupplements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowInfoText", function() { return getShowInfoText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsOff", function() { return showInfoTextIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsTooltip", function() { return showInfoTextIsTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsDialog", function() { return showInfoTextIsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContinuousEnumeration", function() { return getContinuousEnumeration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousEnumerationIsOff", function() { return continuousEnumerationIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousEnumerationIsOn", function() { return continuousEnumerationIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoSections", function() { return getLoSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndResultAlways", function() { return getEndResultAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsOff", function() { return endResultAlwaysIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsOn", function() { return endResultAlwaysIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsButtonAfterScore", function() { return endResultAlwaysIsButtonAfterScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExamsTimer", function() { return getExamsTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examsTimerIsOff", function() { return examsTimerIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examsTimerIsOn", function() { return examsTimerIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityPool", function() { return getActivityPool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsOff", function() { return activityPoolIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsOn", function() { return activityPoolIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsRandomiseAll", function() { return activityPoolIsRandomiseAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckMaxAttempts", function() { return getCheckMaxAttempts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSendScores", function() { return getSendScores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsOff", function() { return sendScoresIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsUnlimited", function() { return sendScoresIsUnlimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendScoresIs1Submission", function() { return sendScoresIs1Submission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsFinalCheckAnswers", function() { return sendScoresIsFinalCheckAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesignPackSubstyle", function() { return getDesignPackSubstyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designPackSubstyleIsOff", function() { return designPackSubstyleIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designPackSubstyleIsOn", function() { return designPackSubstyleIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndResultsReturn", function() { return getEndResultsReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultsReturnIsLast", function() { return endResultsReturnIsLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultsReturnIsFirst", function() { return endResultsReturnIsFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreValuesPerBlock", function() { return getScoreValuesPerBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreValuesPerBlockIsOff", function() { return scoreValuesPerBlockIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreValuesPerBlockIsCustom", function() { return scoreValuesPerBlockIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextboxAutogrow", function() { return getTextboxAutogrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textboxAutogrowIsOff", function() { return textboxAutogrowIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textboxAutogrowIsOn", function() { return textboxAutogrowIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRestoreLoState", function() { return getRestoreLoState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreLoStateIsOn", function() { return restoreLoStateIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreLoStateIsOff", function() { return restoreLoStateIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWikiTool", function() { return getWikiTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wikiToolIsOff", function() { return wikiToolIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wikiToolIsOn", function() { return wikiToolIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamScoring", function() { return getTeamScoring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamScoringIsOff", function() { return teamScoringIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamScoringIsOn", function() { return teamScoringIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReferenceContent", function() { return getReferenceContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referenceContentIsOff", function() { return referenceContentIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referenceContentIs1", function() { return referenceContentIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referenceContentIs2", function() { return referenceContentIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlternativeText", function() { return getAlternativeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsOff", function() { return alternativeTextIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt1", function() { return alternativeTextIsAlt1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt2", function() { return alternativeTextIsAlt2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt3", function() { return alternativeTextIsAlt3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoTitleDisplay", function() { return getLoTitleDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loTitleDisplayIsOn", function() { return loTitleDisplayIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loTitleDisplayIsOff", function() { return loTitleDisplayIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityTitleDisplay", function() { return getActivityTitleDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityTitleDisplayIsOn", function() { return activityTitleDisplayIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityTitleDisplayIsOff", function() { return activityTitleDisplayIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudioIconBehaviour", function() { return getAudioIconBehaviour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioIconBehaviourIsStop", function() { return audioIconBehaviourIsStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioIconBehaviourIsPause", function() { return audioIconBehaviourIsPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoFullscreenButton", function() { return getLoFullscreenButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loFullscreenButtonIsOff", function() { return loFullscreenButtonIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loFullscreenButtonIsOn", function() { return loFullscreenButtonIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserVisibility", function() { return getUserVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsAll", function() { return userVisibilityIsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsTeacher", function() { return userVisibilityIsTeacher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsStudent", function() { return userVisibilityIsStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTryAgainBehaviour", function() { return getTryAgainBehaviour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsButton", function() { return tryAgainBehaviourIsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsAutomatic", function() { return tryAgainBehaviourIsAutomatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsAutomaticAfterTime", function() { return tryAgainBehaviourIsAutomaticAfterTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavigationMenu", function() { return getNavigationMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsOff", function() { return navigationMenuIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsAuto", function() { return navigationMenuIsAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsCustom", function() { return navigationMenuIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplaySettings", function() { return getDisplaySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaySettingsIsOff", function() { return displaySettingsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaySettingsIsOn", function() { return displaySettingsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceBanks", function() { return getResourceBanks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceBanksIsOff", function() { return resourceBanksIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceBanksIsOn", function() { return resourceBanksIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTtsGeneralRules", function() { return getTtsGeneralRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsGeneralRulesIsOff", function() { return ttsGeneralRulesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsGeneralRulesIsOn", function() { return ttsGeneralRulesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTtsLoRules", function() { return getTtsLoRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsLoRulesIsOff", function() { return ttsLoRulesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsLoRulesIsOn", function() { return ttsLoRulesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTtsActivityRules", function() { return getTtsActivityRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsActivityRulesIsOff", function() { return ttsActivityRulesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsActivityRulesIsOn", function() { return ttsActivityRulesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityHelp", function() { return getActivityHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityHelpIsOff", function() { return activityHelpIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityHelpIsOn", function() { return activityHelpIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCopyrightInformation", function() { return getCopyrightInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyrightInformationIsOff", function() { return copyrightInformationIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyrightInformationIsOn", function() { return copyrightInformationIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOnlineCheck", function() { return getOnlineCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlineCheckIsOff", function() { return onlineCheckIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlineCheckIsOn", function() { return onlineCheckIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswersInstant", function() { return getCheckAnswersInstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsOff", function() { return checkAnswersInstantIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsOn", function() { return checkAnswersInstantIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsAutomatic", function() { return checkAnswersInstantIsAutomatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslationBlock", function() { return getTranslationBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translationBlockIsOff", function() { return translationBlockIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translationBlockIsOn", function() { return translationBlockIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreRounding", function() { return getScoreRounding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsFloat", function() { return scoreRoundingIsFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRoundup", function() { return scoreRoundingIsRoundup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRound", function() { return scoreRoundingIsRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRounddown", function() { return scoreRoundingIsRounddown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextButtonText", function() { return getNextButtonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextButtonTextIsDefault", function() { return nextButtonTextIsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextButtonTextIsCustom", function() { return nextButtonTextIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswersDisplay", function() { return getCheckAnswersDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersDisplayIsMarkingAndFeedback", function() { return checkAnswersDisplayIsMarkingAndFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersDisplayIsMarkingOnly", function() { return checkAnswersDisplayIsMarkingOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstructionPopUp", function() { return getInstructionPopUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instructionPopUpIsOff", function() { return instructionPopUpIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instructionPopUpIsOn", function() { return instructionPopUpIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResetWholeLo", function() { return getResetWholeLo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetWholeLoIsOff", function() { return resetWholeLoIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetWholeLoIsOn", function() { return resetWholeLoIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowNextLo", function() { return getShowNextLo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNextLoIsOff", function() { return showNextLoIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNextLoIsOn", function() { return showNextLoIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowPreviousLo", function() { return getShowPreviousLo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPreviousLoIsOff", function() { return showPreviousLoIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPreviousLoIsOn", function() { return showPreviousLoIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoNotesArea", function() { return getLoNotesArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loNotesAreaIsOff", function() { return loNotesAreaIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loNotesAreaIsOn", function() { return loNotesAreaIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudioSpeed", function() { return getAudioSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioSpeedIsOff", function() { return audioSpeedIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioSpeedIsOn", function() { return audioSpeedIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScorm2004AbsoluteValues", function() { return getScorm2004AbsoluteValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorm2004AbsoluteValuesIsOff", function() { return scorm2004AbsoluteValuesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorm2004AbsoluteValuesIsOn", function() { return scorm2004AbsoluteValuesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndResultsButton", function() { return getEndResultsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultsButtonIsEvery", function() { return endResultsButtonIsEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultsButtonIsLast", function() { return endResultsButtonIsLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeSpentInSections", function() { return getTimeSpentInSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeSpentInSectionsIsOff", function() { return timeSpentInSectionsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeSpentInSectionsIsOn", function() { return timeSpentInSectionsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCloseAfterSubmit", function() { return getCloseAfterSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAfterSubmitIsOff", function() { return closeAfterSubmitIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAfterSubmitIsOn", function() { return closeAfterSubmitIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPracticeScreen", function() { return getPracticeScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "practiceScreenIsOff", function() { return practiceScreenIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "practiceScreenIsOn", function() { return practiceScreenIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaPlaybackLimit", function() { return getMediaPlaybackLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIsOff", function() { return mediaPlaybackLimitIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs1", function() { return mediaPlaybackLimitIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs2", function() { return mediaPlaybackLimitIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs3", function() { return mediaPlaybackLimitIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs4", function() { return mediaPlaybackLimitIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs5", function() { return mediaPlaybackLimitIs5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTtsLanguage", function() { return getTtsLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsLanguageIsOff", function() { return ttsLanguageIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsLanguageIsOn", function() { return ttsLanguageIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScorm12AbsoluteValues", function() { return getScorm12AbsoluteValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorm12AbsoluteValuesIsOn", function() { return scorm12AbsoluteValuesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorm12AbsoluteValuesIsOff", function() { return scorm12AbsoluteValuesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegressiveScoring", function() { return getRegressiveScoring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regressiveScoringIsOff", function() { return regressiveScoringIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regressiveScoringIsOn", function() { return regressiveScoringIsOn; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./react-app/modules/lo/selector/index.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/trim */ "./node_modules/lodash/trim.js");
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_2__);
/* this is generated from options.xml, don't edit */



/* 001 */

const getDictionary = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "dictionary");
const dictionaryIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "dictionary") === "false";
const dictionaryIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "dictionary") === "true";
/* 006 */

const getNotesArea = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "notesArea");
const notesAreaIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "notesArea") === "false";
const notesAreaIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "notesArea") === "true";
/* 009 */

const getInteractivePhonemicChart = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "interactivePhonemicChart");
const interactivePhonemicChartIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "interactivePhonemicChart") === "false";
const interactivePhonemicChartIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "interactivePhonemicChart") === "true";
/* 021 */

const getRevealObject = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "revealObject");
const revealObjectIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "revealObject") === "false";
const revealObjectIsAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "revealObject") === "all";
const revealObjectIsProgressive = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "revealObject") === "progressive";
const revealObjectIsProgressiveplushide = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "revealObject") === "progressiveplushide";
/* 023 */

const getPinObject = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "pinObject");
const pinObjectIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "pinObject") === "false";
const pinObjectIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "pinObject") === "true";
/* 025 */

const getPrevious = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "previous");
const previousIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "previous") === "true";
const previousIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "previous") === "false";
const previousIsAfterSubmitted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "previous") === "afterSubmitted";
/* 026 */

const getForwardButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "forwardButton");
const forwardButtonIsNext = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "forwardButton") === "next";
const forwardButtonIsAdaptive = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "forwardButton") === "adaptive";
/* 027 */

const getEnumeration = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "enumeration");
const enumerationIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumeration") === "false";
const enumerationIsNumber = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumeration") === "number";
const enumerationIsNumberNoDot = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumeration") === "number_no_dot";
const enumerationIsLetter = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumeration") === "letter";
const enumerationIsCapitalletter = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumeration") === "capitalletter";
const enumerationIsBullet = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumeration") === "bullet";
const enumerationIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumeration") === "custom";
/* 028 */

const getEnumerationAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "enumerationAnswers");
const enumerationAnswersIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumerationAnswers") === "false";
const enumerationAnswersIsNumber = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumerationAnswers") === "number";
const enumerationAnswersIsNumberNoDot = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumerationAnswers") === "number_no_dot";
const enumerationAnswersIsLetter = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumerationAnswers") === "letter";
const enumerationAnswersIsCapitalletter = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumerationAnswers") === "capitalletter";
const enumerationAnswersIsBullet = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumerationAnswers") === "bullet";
const enumerationAnswersIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "enumerationAnswers") === "custom";
/* 029 */

const getPrefill = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "prefill");
const prefillIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "prefill") === "false";
const prefillIsFirstitem = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "prefill") === "firstitem";
const prefillIsFirstblock = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "prefill") === "firstblock";
/* 034 */

const getGaptextAudio = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "gaptextAudio");
const gaptextAudioIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "gaptextAudio") === "false";
const gaptextAudioIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "gaptextAudio") === "true";
/* 038 */

const getSpeakLearnerInput = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "speakLearnerInput");
const speakLearnerInputIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "speakLearnerInput") === "false";
const speakLearnerInputIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "speakLearnerInput") === "true";
/* 040 */

const getFeedback = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "feedback");
const feedbackIsNormal = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedback") === "normal";
const feedbackIsInstant = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedback") === "instant";
/* 043 */

const getFeedbackSoundEffects = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "feedbackSoundEffects");
const feedbackSoundEffectsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackSoundEffects") === "off";
const feedbackSoundEffectsIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackSoundEffects") === "custom";
/* 044 */

const getSoundEffects = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "soundEffects");
const soundEffectsIsNone = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "soundEffects") === "none";
const soundEffectsIsSoundEffects = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "soundEffects") === "sound_effects";
/* 045 */

const getTryAgain = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "tryAgain");
const tryAgainIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "tryAgain") === "false";
const tryAgainIsLock = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "tryAgain") === "lock";
const tryAgainIsFrozen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "tryAgain") === "frozen";
const tryAgainIsClear = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "tryAgain") === "clear";
const tryAgainIsKeepall = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "tryAgain") === "keepall";
/* 046 */

const getScoreValues = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "scoreValues");
const scoreValuesIs1PointAction = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scoreValues") === "1_point_action";
const scoreValuesIs1PointQuestion = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scoreValues") === "1_point_question";
/* 047 */

const getEndResultScreen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "endResultScreen");
const endResultScreenIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultScreen") === "false";
const endResultScreenIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultScreen") === "true";
const endResultScreenIsButtonAfterScore = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultScreen") === "buttonAfterScore";
/* 050 */

const getProgressBar = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "progressBar");
const progressBarIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "progressBar") === "true";
const progressBarIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "progressBar") === "false";
const progressBarIsAuto = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "progressBar") === "auto";
const progressBarIsScreenSelection = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "progressBar") === "screenSelection";
/* 051 */

const getAutomaticNext = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "automaticNext");
const automaticNextIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "automaticNext") === "false";
const automaticNextIsQuestions = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "automaticNext") === "questions";
const automaticNextIsTimer = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "automaticNext") === "timer";
/* 052 */

const getAudioSupport = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "audioSupport");
const audioSupportIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "audioSupport") === "false";
const audioSupportIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "audioSupport") === "true";
/* 054 */

const getPrintable = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "printable");
const printableIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "printable") === "false";
const printableIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "printable") === "true";
/* 056 */

const getImageAsTrigger = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "imageAsTrigger");
const imageAsTriggerIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "imageAsTrigger") === "false";
const imageAsTriggerIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "imageAsTrigger") === "true";
/* 072 */

const getConserveAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "conserveAnswers");
const conserveAnswersIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "conserveAnswers") === "true";
const conserveAnswersIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "conserveAnswers") === "false";
/* 107 */

const getAddTextObject = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "addTextObject");
const addTextObjectIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "addTextObject") === "false";
const addTextObjectIsNormal = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "addTextObject") === "normal";
/* 114 */

const getSave = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "save");
const saveIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "save") === "off";
const saveIsSkinbutton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "save") === "skinbutton";
const saveIsButtonOnly = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "save") === "button_only";
/* 162 */

const getStayInView = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "stayInView");
const stayInViewIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "stayInView") === "false";
const stayInViewIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "stayInView") === "true";
/* 311 */

const getCheckAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "checkAnswers");
const checkAnswersIsAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswers") === "always";
const checkAnswersIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswers") === "false";
const checkAnswersIsAfterOne = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswers") === "afterOne";
const checkAnswersIsAfterAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswers") === "afterAll";
const checkAnswersIsBeforeSubmitted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswers") === "beforeSubmitted";
/* 312 */

const getSeeAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "seeAnswers");
const seeAnswersIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "seeAnswers") === "on";
const seeAnswersIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "seeAnswers") === "off";
const seeAnswersIsBeforeInteraction = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "seeAnswers") === "beforeInteraction";
/* 313 */

const getReset = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "reset");
const resetIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "reset") === "on";
const resetIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "reset") === "off";
const resetIsBeforeSubmitted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "reset") === "beforeSubmitted";
/* 315 */

const getSubmissions = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "submissions");
const submissionsIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "1";
const submissionsIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "2";
const submissionsIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "3";
const submissionsIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "4";
const submissionsIs5 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "5";
const submissionsIs6 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "6";
const submissionsIs7 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "7";
const submissionsIs8 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "8";
const submissionsIs9 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "9";
const submissionsIs10 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "10";
const submissionsIs11 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "11";
const submissionsIs12 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "12";
const submissionsIs13 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "13";
const submissionsIs14 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "14";
const submissionsIs15 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "15";
const submissionsIs16 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "16";
const submissionsIs17 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "17";
const submissionsIs18 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "18";
const submissionsIs19 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "19";
const submissionsIs20 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "20";
const submissionsIsUnlimited = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "submissions") === "unlimited";
/* 317 */

const getRunningScore = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "runningScore");
const runningScoreIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "runningScore") === "false";
const runningScoreIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "runningScore") === "true";
/* 318 */

const getShowHints = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "showHints");
const showHintsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showHints") === "off";
const showHintsIsAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showHints") === "always";
const showHintsIsCheckScore = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showHints") === "checkScore";
/* 319 */

const getHints = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "hints");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
/* 322 */

const getDelayedFeedback = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "delayedFeedback");
const delayedFeedbackIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "delayedFeedback") === "false";
const delayedFeedbackIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "delayedFeedback") === "true";
const delayedFeedbackIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "delayedFeedback") === "custom";
/* 334 */

const getShowSubmit = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "showSubmit");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
const showSubmitIsAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showSubmit") === "always";
const showSubmitIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showSubmit") === "off";
const showSubmitIsAfterOne = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showSubmit") === "afterOne";
const showSubmitIsAfterAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showSubmit") === "afterAll";
const showSubmitIsEachScreen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showSubmit") === "eachScreen";
/* 335 */

const getFinishSubmit = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "finishSubmit");
const finishSubmitIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "finishSubmit") === "off";
const finishSubmitIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "finishSubmit") === "on";
/* 336 */

const getShowForward = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "showForward");
const showForwardIsAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showForward") === "always";
const showForwardIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showForward") === "off";
const showForwardIsAfterOne = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showForward") === "afterOne";
const showForwardIsAfterSubmitted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showForward") === "afterSubmitted";
const showForwardIsAfterAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showForward") === "afterAll";
const showForwardIsAfterCheckAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showForward") === "afterCheckAnswers";
const showForwardIsAfterSeeAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showForward") === "afterSeeAnswers";
/* 341 */

const getAutosave = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "autosave");
const autosaveIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "autosave") === "on";
const autosaveIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "autosave") === "off";
/* 342 */

const getIntroScreen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "introScreen");
const introScreenIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "introScreen") === "off";
const introScreenIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "introScreen") === "on";
/* 345 */

const getManualMarking = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "manualMarking");
const manualMarkingIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "manualMarking") === "off";
const manualMarkingIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "manualMarking") === "on";
/* 346 */

const getFeedbackBand1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "feedbackBand1");
const feedbackBand1IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackBand1") === "false";
const feedbackBand1IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackBand1") === "custom";
/* 347 */

const getFeedbackBand2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "feedbackBand2");
const feedbackBand2IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackBand2") === "false";
const feedbackBand2IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackBand2") === "custom";
/* 348 */

const getFeedbackBand3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "feedbackBand3");
const feedbackBand3IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackBand3") === "false";
const feedbackBand3IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackBand3") === "custom";
/* 349 */

const getFeedbackBand4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "feedbackBand4");
const feedbackBand4IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackBand4") === "false";
const feedbackBand4IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "feedbackBand4") === "custom";
/* 352 */

const getSpecialCharactersStudent = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "specialCharactersStudent");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
/* 353 */

const getActivityFeedbackBand1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "activityFeedbackBand1");
const activityFeedbackBand1IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityFeedbackBand1") === "false";
const activityFeedbackBand1IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityFeedbackBand1") === "custom";
/* 354 */

const getActivityFeedbackBand2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "activityFeedbackBand2");
const activityFeedbackBand2IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityFeedbackBand2") === "false";
const activityFeedbackBand2IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityFeedbackBand2") === "custom";
/* 355 */

const getActivityFeedbackBand3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "activityFeedbackBand3");
const activityFeedbackBand3IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityFeedbackBand3") === "false";
const activityFeedbackBand3IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityFeedbackBand3") === "custom";
/* 356 */

const getActivityFeedbackBand4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "activityFeedbackBand4");
const activityFeedbackBand4IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityFeedbackBand4") === "false";
const activityFeedbackBand4IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityFeedbackBand4") === "custom";
/* 357 */

const getActivityFeedbackThresholds = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "activityFeedbackThresholds");
const activityFeedbackThresholdsIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityFeedbackThresholds") === "custom";
/* 368 */

const getAnnotationTools = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "annotationTools");
const annotationToolsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "annotationTools") === "off";
const annotationToolsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "annotationTools") === "on";
const annotationToolsIsOnlyForTeachers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "annotationTools") === "only_for_teachers";
const annotationToolsIsOnlySupplements = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "annotationTools") === "only_supplements";
/* 371 */

const getShowInfoText = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "showInfoText");
const showInfoTextIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showInfoText") === "off";
const showInfoTextIsTooltip = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showInfoText") === "tooltip";
const showInfoTextIsDialog = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showInfoText") === "dialog";
/* 373 */

const getContinuousEnumeration = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "continuousEnumeration");
const continuousEnumerationIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "continuousEnumeration") === "off";
const continuousEnumerationIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "continuousEnumeration") === "on";
/* 375 */

const getLoSections = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "loSections");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
/* 378 */

const getEndResultAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "endResultAlways");
const endResultAlwaysIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultAlways") === "off";
const endResultAlwaysIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultAlways") === "on";
const endResultAlwaysIsButtonAfterScore = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultAlways") === "buttonAfterScore";
/* 379 */

const getExamsTimer = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "examsTimer");
const examsTimerIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "examsTimer") === "off";
const examsTimerIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "examsTimer") === "on";
/* 383 */

const getActivityPool = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "activityPool");
const activityPoolIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityPool") === "off";
const activityPoolIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityPool") === "on";
const activityPoolIsRandomiseAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityPool") === "randomiseAll";
/* 384 */

const getCheckMaxAttempts = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "checkMaxAttempts");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
/* 388 */

const getSendScores = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "sendScores");
const sendScoresIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "sendScores") === "off";
const sendScoresIsUnlimited = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "sendScores") === "unlimited";
const sendScoresIs1Submission = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "sendScores") === "1_submission";
const sendScoresIsFinalCheckAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "sendScores") === "final_check_answers";
/* 390 */

const getDesignPackSubstyle = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "designPackSubstyle");
const designPackSubstyleIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "designPackSubstyle") === "off";
const designPackSubstyleIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "designPackSubstyle") === "on";
/* 391 */

const getEndResultsReturn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "endResultsReturn");
const endResultsReturnIsLast = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultsReturn") === "last";
const endResultsReturnIsFirst = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultsReturn") === "first";
/* 394 */

const getScoreValuesPerBlock = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "scoreValuesPerBlock");
const scoreValuesPerBlockIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scoreValuesPerBlock") === "off";
const scoreValuesPerBlockIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scoreValuesPerBlock") === "Custom";
/* 396 */

const getTextboxAutogrow = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "textboxAutogrow");
const textboxAutogrowIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "textboxAutogrow") === "off";
const textboxAutogrowIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "textboxAutogrow") === "on";
/* 419 */

const getRestoreLoState = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "restoreLoState");
const restoreLoStateIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "restoreLoState") === "on";
const restoreLoStateIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "restoreLoState") === "off";
/* 421 */

const getWikiTool = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "wikiTool");
const wikiToolIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "wikiTool") === "off";
const wikiToolIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "wikiTool") === "on";
/* 427 */

const getTeamScoring = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "teamScoring");
const teamScoringIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "teamScoring") === "off";
const teamScoringIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "teamScoring") === "on";
/* 428 */

const getReferenceContent = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "referenceContent");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
const referenceContentIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "referenceContent") === "off";
const referenceContentIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "referenceContent") === "1";
const referenceContentIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "referenceContent") === "2";
/* 430 */

const getAlternativeText = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "alternativeText");
const alternativeTextIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "alternativeText") === "off";
const alternativeTextIsAlt1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "alternativeText") === "alt1";
const alternativeTextIsAlt2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "alternativeText") === "alt2";
const alternativeTextIsAlt3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "alternativeText") === "alt3";
/* 432 */

const getLoTitleDisplay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "loTitleDisplay");
const loTitleDisplayIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "loTitleDisplay") === "on";
const loTitleDisplayIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "loTitleDisplay") === "off";
/* 433 */

const getActivityTitleDisplay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "activityTitleDisplay");
const activityTitleDisplayIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityTitleDisplay") === "on";
const activityTitleDisplayIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityTitleDisplay") === "off";
/* 441 */

const getAudioIconBehaviour = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "audioIconBehaviour");
const audioIconBehaviourIsStop = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "audioIconBehaviour") === "stop";
const audioIconBehaviourIsPause = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "audioIconBehaviour") === "pause";
/* 443 */

const getLoFullscreenButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "loFullscreenButton");
const loFullscreenButtonIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "loFullscreenButton") === "off";
const loFullscreenButtonIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "loFullscreenButton") === "on";
/* 445 */

const getUserVisibility = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "userVisibility");
const userVisibilityIsAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "userVisibility") === "all";
const userVisibilityIsTeacher = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "userVisibility") === "teacher";
const userVisibilityIsStudent = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "userVisibility") === "student";
/* 448 */

const getTryAgainBehaviour = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "tryAgainBehaviour");
const tryAgainBehaviourIsButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "tryAgainBehaviour") === "button";
const tryAgainBehaviourIsAutomatic = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "tryAgainBehaviour") === "automatic";
const tryAgainBehaviourIsAutomaticAfterTime = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "tryAgainBehaviour") === "automatic_after_time";
/* 452 */

const getNavigationMenu = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "navigationMenu");
const navigationMenuIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "navigationMenu") === "off";
const navigationMenuIsAuto = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "navigationMenu") === "auto";
const navigationMenuIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "navigationMenu") === "custom";
/* 453 */

const getDisplaySettings = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "displaySettings");
const displaySettingsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "displaySettings") === "off";
const displaySettingsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "displaySettings") === "on";
/* 454 */

const getResourceBanks = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "resourceBanks");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
const resourceBanksIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "resourceBanks") === "off";
const resourceBanksIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "resourceBanks") === "on";
/* 455 */

const getTtsGeneralRules = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "ttsGeneralRules");
const ttsGeneralRulesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "ttsGeneralRules") === "off";
const ttsGeneralRulesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "ttsGeneralRules") === "on";
/* 456 */

const getTtsLoRules = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "ttsLoRules");
const ttsLoRulesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "ttsLoRules") === "off";
const ttsLoRulesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "ttsLoRules") === "on";
/* 457 */

const getTtsActivityRules = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "ttsActivityRules");
const ttsActivityRulesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "ttsActivityRules") === "off";
const ttsActivityRulesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "ttsActivityRules") === "on";
/* 459 */

const getActivityHelp = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "activityHelp");
const activityHelpIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityHelp") === "off";
const activityHelpIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "activityHelp") === "on";
/* 484 */

const getCopyrightInformation = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "copyrightInformation");
const copyrightInformationIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "copyrightInformation") === "off";
const copyrightInformationIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "copyrightInformation") === "on";
/* 487 */

const getOnlineCheck = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "onlineCheck");
const onlineCheckIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "onlineCheck") === "off";
const onlineCheckIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "onlineCheck") === "on";
/* 493 */

const getCheckAnswersInstant = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "checkAnswersInstant");
const checkAnswersInstantIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswersInstant") === "off";
const checkAnswersInstantIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswersInstant") === "on";
const checkAnswersInstantIsAutomatic = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswersInstant") === "automatic";
/* 505 */

const getTranslationBlock = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "translationBlock");
const translationBlockIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "translationBlock") === "off";
const translationBlockIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "translationBlock") === "on";
/* 510 */

const getScoreRounding = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "scoreRounding");
const scoreRoundingIsFloat = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scoreRounding") === "float";
const scoreRoundingIsRoundup = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scoreRounding") === "roundup";
const scoreRoundingIsRound = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scoreRounding") === "round";
const scoreRoundingIsRounddown = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scoreRounding") === "rounddown";
/* 511 */

const getNextButtonText = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "nextButtonText");
const nextButtonTextIsDefault = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "nextButtonText") === "default";
const nextButtonTextIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "nextButtonText") === "custom";
/* 512 */

const getCheckAnswersDisplay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "checkAnswersDisplay");
const checkAnswersDisplayIsMarkingAndFeedback = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswersDisplay") === "marking_and_feedback";
const checkAnswersDisplayIsMarkingOnly = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "checkAnswersDisplay") === "marking_only";
/* 520 */

const getInstructionPopUp = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "instructionPopUp");
const instructionPopUpIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "instructionPopUp") === "off";
const instructionPopUpIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "instructionPopUp") === "on";
/* 521 */

const getResetWholeLo = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "resetWholeLo");
const resetWholeLoIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "resetWholeLo") === "off";
const resetWholeLoIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "resetWholeLo") === "on";
/* 522 */

const getShowNextLo = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "showNextLo");
const showNextLoIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showNextLo") === "off";
const showNextLoIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showNextLo") === "on";
/* 523 */

const getShowPreviousLo = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "showPreviousLo");
const showPreviousLoIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showPreviousLo") === "off";
const showPreviousLoIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "showPreviousLo") === "on";
/* 524 */

const getLoNotesArea = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "loNotesArea");
const loNotesAreaIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "loNotesArea") === "off";
const loNotesAreaIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "loNotesArea") === "on";
/* 525 */

const getAudioSpeed = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "audioSpeed");
const audioSpeedIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "audioSpeed") === "off";
const audioSpeedIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "audioSpeed") === "on";
/* 527 */

const getScorm2004AbsoluteValues = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "scorm2004AbsoluteValues");
const scorm2004AbsoluteValuesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scorm2004AbsoluteValues") === "off";
const scorm2004AbsoluteValuesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scorm2004AbsoluteValues") === "on";
/* 532 */

const getEndResultsButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "endResultsButton");
const endResultsButtonIsEvery = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultsButton") === "every";
const endResultsButtonIsLast = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "endResultsButton") === "last";
/* 533 */

const getTimeSpentInSections = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "timeSpentInSections");
const timeSpentInSectionsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "timeSpentInSections") === "off";
const timeSpentInSectionsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "timeSpentInSections") === "on";
/* 543 */

const getCloseAfterSubmit = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "closeAfterSubmit");
const closeAfterSubmitIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "closeAfterSubmit") === "off";
const closeAfterSubmitIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "closeAfterSubmit") === "on";
/* 544 */

const getPracticeScreen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "practiceScreen");
const practiceScreenIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "practiceScreen") === "off";
const practiceScreenIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "practiceScreen") === "on";
/* 545 */

const getMediaPlaybackLimit = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "mediaPlaybackLimit");
const mediaPlaybackLimitIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "off";
const mediaPlaybackLimitIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "1";
const mediaPlaybackLimitIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "2";
const mediaPlaybackLimitIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "3";
const mediaPlaybackLimitIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "4";
const mediaPlaybackLimitIs5 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "5";
/* 546 */

const getTtsLanguage = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "ttsLanguage");
const ttsLanguageIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "ttsLanguage") === "off";
const ttsLanguageIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "ttsLanguage") === "on";
/* 548 */

const getScorm12AbsoluteValues = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "scorm12AbsoluteValues");
const scorm12AbsoluteValuesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scorm12AbsoluteValues") === "on";
const scorm12AbsoluteValuesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "scorm12AbsoluteValues") === "off";
/* 549 */

const getRegressiveScoring = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionValueByName"])(state, props, "regressiveScoring");
const regressiveScoringIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "regressiveScoring") === "off";
const regressiveScoringIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getLoOptionKeyByName"])(state, props, "regressiveScoring") === "on";

/***/ }),

/***/ "./react-app/modules/lo/selector/options.js":
/*!**************************************************!*\
  !*** ./react-app/modules/lo/selector/options.js ***!
  \**************************************************/
/*! exports provided: getLoOptions, getLoOptionValueByName, getLoOptionKeyByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoOptions", function() { return getLoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoOptionValueByName", function() { return getLoOptionValueByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoOptionKeyByName", function() { return getLoOptionKeyByName; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _options_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options/selector */ "./react-app/modules/options/selector/index.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_3__);





const getState = state => state.lo;

const getLoOptions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createDraftSafeSelector"])(getState, lo => lo.options);
const getLoOptionValueByName = re_reselect__WEBPACK_IMPORTED_MODULE_1___default()([getLoOptions, _options_selector__WEBPACK_IMPORTED_MODULE_2__["getOptionListAsList"], _options_selector__WEBPACK_IMPORTED_MODULE_2__["getOptionName"]], (loOptions, optionsList, optionName) => {
  if (!loOptions || !optionsList || !optionName) {
    return;
  }

  const {
    loOption,
    option
  } = getOptionObjects(loOptions, optionsList, optionName);

  if (!option) {
    return;
  }

  if (loOption) {
    return loOption.value || loOption.key;
  } else {
    return option.values.first().key;
  }
})(_options_selector__WEBPACK_IMPORTED_MODULE_2__["getOptionName"]);
const getLoOptionKeyByName = re_reselect__WEBPACK_IMPORTED_MODULE_1___default()([getLoOptions, _options_selector__WEBPACK_IMPORTED_MODULE_2__["getOptionListAsList"], _options_selector__WEBPACK_IMPORTED_MODULE_2__["getOptionName"]], (loOptions, optionsList, optionName) => {
  if (!loOptions || !optionsList || !optionName) {
    return;
  }

  const {
    loOption,
    option
  } = getOptionObjects(loOptions, optionsList, optionName);

  if (!option) {
    return;
  }

  if (loOption) {
    return loOption.key;
  } else {
    return option.values.first().key;
  }
})(_options_selector__WEBPACK_IMPORTED_MODULE_2__["getOptionName"]);

const getOptionObjects = (loOptions, optionsList, optionName) => {
  let option = optionsList.find(op => lodash_camelCase__WEBPACK_IMPORTED_MODULE_3___default()(op.name) === lodash_camelCase__WEBPACK_IMPORTED_MODULE_3___default()(optionName));
  let loOption = loOptions.get(option.id.toString());
  return {
    option,
    loOption
  };
};

/***/ }),

/***/ "./react-app/modules/screens/selector/data.js":
/*!****************************************************!*\
  !*** ./react-app/modules/screens/selector/data.js ***!
  \****************************************************/
/*! exports provided: getScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreen", function() { return getScreen; });
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_0__);


const getState = state => state.screens;

const getScreenId = (state, props) => props.screenId;

const getScreen = re_reselect__WEBPACK_IMPORTED_MODULE_0___default()([getScreenId, getState], (id, screens) => {
  if (!id || !screens) {
    return;
  }

  return screens[id.toString()];
})(getScreenId);

/***/ }),

/***/ "./react-app/modules/screens/selector/index.js":
/*!*****************************************************!*\
  !*** ./react-app/modules/screens/selector/index.js ***!
  \*****************************************************/
/*! exports provided: getScreen, getScreenOptionValueByName, getScreenOptionKeyByName, getDictionary, dictionaryIsFalse, dictionaryIsTrue, getNotesArea, notesAreaIsFalse, notesAreaIsTrue, getInteractivePhonemicChart, interactivePhonemicChartIsFalse, interactivePhonemicChartIsTrue, getRevealObject, revealObjectIsFalse, revealObjectIsAll, revealObjectIsProgressive, revealObjectIsProgressiveplushide, getPinObject, pinObjectIsFalse, pinObjectIsTrue, getPrevious, previousIsTrue, previousIsFalse, previousIsAfterSubmitted, getForwardButton, forwardButtonIsNext, forwardButtonIsAdaptive, getEnumeration, enumerationIsFalse, enumerationIsNumber, enumerationIsNumberNoDot, enumerationIsLetter, enumerationIsCapitalletter, enumerationIsBullet, enumerationIsCustom, getEnumerationAnswers, enumerationAnswersIsFalse, enumerationAnswersIsNumber, enumerationAnswersIsNumberNoDot, enumerationAnswersIsLetter, enumerationAnswersIsCapitalletter, enumerationAnswersIsBullet, enumerationAnswersIsCustom, getPrefill, prefillIsFalse, prefillIsFirstitem, prefillIsFirstblock, getGaptextAudio, gaptextAudioIsFalse, gaptextAudioIsTrue, getSpeakLearnerInput, speakLearnerInputIsFalse, speakLearnerInputIsTrue, getFeedback, feedbackIsNormal, feedbackIsInstant, getFeedbackSoundEffects, feedbackSoundEffectsIsOff, feedbackSoundEffectsIsCustom, getSoundEffects, soundEffectsIsNone, soundEffectsIsSoundEffects, getTryAgain, tryAgainIsFalse, tryAgainIsLock, tryAgainIsFrozen, tryAgainIsClear, tryAgainIsKeepall, getScoreValues, scoreValuesIs1PointAction, scoreValuesIs1PointQuestion, getEndResultScreen, endResultScreenIsFalse, endResultScreenIsTrue, endResultScreenIsButtonAfterScore, getProgressBar, progressBarIsTrue, progressBarIsFalse, progressBarIsAuto, progressBarIsScreenSelection, getAutomaticNext, automaticNextIsFalse, automaticNextIsQuestions, automaticNextIsTimer, getAudioSupport, audioSupportIsFalse, audioSupportIsTrue, getPrintable, printableIsFalse, printableIsTrue, getImageAsTrigger, imageAsTriggerIsFalse, imageAsTriggerIsTrue, getConserveAnswers, conserveAnswersIsTrue, conserveAnswersIsFalse, getAddTextObject, addTextObjectIsFalse, addTextObjectIsNormal, getUseClickClick, useClickClickIsFalse, useClickClickIsTrue, getPoolAlignment, poolAlignmentIsNone, poolAlignmentIsTop, poolAlignmentIsBottom, poolAlignmentIsLeft, poolAlignmentIsRight, poolAlignmentIsFree, getPairAlignment, pairAlignmentIsOntop, pairAlignmentIsHorizontal, pairAlignmentIsVertical, getGaps, gapsIsVariable, gapsIsSamelongest, gapsIsInvisible, gapsIsFixed, getSave, saveIsOff, saveIsSkinbutton, saveIsButtonOnly, getErrorCorrection, errorCorrectionIsReplace, errorCorrectionIsLine, errorCorrectionIsSentence, getSignalError, signalErrorIsOff, signalErrorIsHighlight, signalErrorIsButtonAfterAttempts, signalErrorIsButton, getMaxLength, maxLengthIsFalse, maxLengthIsWords, maxLengthIsChars, getMultipleDestinations, multipleDestinationsIsOne, multipleDestinationsIsUnlimited, multipleDestinationsIsRestricted, getDropIndicator, dropIndicatorIsTrue, dropIndicatorIsFalse, getCardBack, cardBackIsDefault, cardBackIsDefaultsets, cardBackIsImage, cardBackIsImagesets, getCardLayout, cardLayoutIsDefault, cardLayoutIsSets, getCardFormat, cardFormatIsPortrait, cardFormatIsLandscape, cardFormatIsSquare, getLinkingLinesSets, linkingLinesSetsIsPairs, linkingLinesSetsIsTriplets, linkingLinesSetsIsQuadruples, linkingLinesSetsIsQuintuples, getSize, sizeIsDummy, getCase, caseIsUpper, caseIsLower, getStayInView, stayInViewIsFalse, stayInViewIsTrue, getDragAlignment, dragAlignmentIsVertical, dragAlignmentIsHorizontal, dragAlignmentIsHorizontalSingleWord, getHideRadiobuttons, hideRadiobuttonsIsFalse, hideRadiobuttonsIsTrue, hideRadiobuttonsIsCustom, getCluePosition, cluePositionIsInside, cluePositionIsOutside, getChoiceAlignment, choiceAlignmentIsVertical, choiceAlignmentIsHorizontal, choiceAlignmentIsInline, getCheckAnswers, checkAnswersIsAlways, checkAnswersIsFalse, checkAnswersIsAfterOne, checkAnswersIsAfterAll, checkAnswersIsBeforeSubmitted, getSeeAnswers, seeAnswersIsOn, seeAnswersIsOff, seeAnswersIsBeforeInteraction, getReset, resetIsOn, resetIsOff, resetIsBeforeSubmitted, getSubmissions, submissionsIs1, submissionsIs2, submissionsIs3, submissionsIs4, submissionsIs5, submissionsIs6, submissionsIs7, submissionsIs8, submissionsIs9, submissionsIs10, submissionsIs11, submissionsIs12, submissionsIs13, submissionsIs14, submissionsIs15, submissionsIs16, submissionsIs17, submissionsIs18, submissionsIs19, submissionsIs20, submissionsIsUnlimited, getRunningScore, runningScoreIsFalse, runningScoreIsTrue, getShowHints, showHintsIsOff, showHintsIsAlways, showHintsIsCheckScore, getHints, getDelayedFeedback, delayedFeedbackIsFalse, delayedFeedbackIsTrue, delayedFeedbackIsCustom, getCaseInsensitive, caseInsensitiveIsFalse, caseInsensitiveIsTrue, getIgnorePunctuation, ignorePunctuationIsFalse, ignorePunctuationIsTrue, getRandomiseAnswers, randomiseAnswersIsTrue, randomiseAnswersIsFalse, getCardPerRow, cardPerRowIsCards, getHideCheckboxes, hideCheckboxesIsFalse, hideCheckboxesIsTrue, getShowSubmit, showSubmitIsAlways, showSubmitIsOff, showSubmitIsAfterOne, showSubmitIsAfterAll, showSubmitIsEachScreen, getFinishSubmit, finishSubmitIsOff, finishSubmitIsOn, getShowForward, showForwardIsAlways, showForwardIsOff, showForwardIsAfterOne, showForwardIsAfterSubmitted, showForwardIsAfterAll, showForwardIsAfterCheckAnswers, showForwardIsAfterSeeAnswers, getTargetZones, targetZonesIsFalse, targetZonesIsTrue, getValidationMessage, validationMessageIsFalse, validationMessageIsCustom, getAutosave, autosaveIsOn, autosaveIsOff, getIntroScreen, introScreenIsOff, introScreenIsOn, getManualMarking, manualMarkingIsOff, manualMarkingIsOn, getFeedbackBand1, feedbackBand1IsFalse, feedbackBand1IsCustom, getFeedbackBand2, feedbackBand2IsFalse, feedbackBand2IsCustom, getFeedbackBand3, feedbackBand3IsFalse, feedbackBand3IsCustom, getFeedbackBand4, feedbackBand4IsFalse, feedbackBand4IsCustom, getSpecialCharactersStudent, getActivityFeedbackBand1, activityFeedbackBand1IsFalse, activityFeedbackBand1IsCustom, getActivityFeedbackBand2, activityFeedbackBand2IsFalse, activityFeedbackBand2IsCustom, getActivityFeedbackBand3, activityFeedbackBand3IsFalse, activityFeedbackBand3IsCustom, getActivityFeedbackBand4, activityFeedbackBand4IsFalse, activityFeedbackBand4IsCustom, getActivityFeedbackThresholds, activityFeedbackThresholdsIsCustom, getSpellcheck, spellcheckIsOff, spellcheckIsOn, getShowInColumns, showInColumnsIsFalse, showInColumnsIsTrue, getIgnoreAccents, ignoreAccentsIsOff, ignoreAccentsIsOn, getEraser, eraserIsOff, eraserIsOn, getAnnotationTools, annotationToolsIsOff, annotationToolsIsOn, annotationToolsIsOnlyForTeachers, annotationToolsIsOnlySupplements, getShowInfoText, showInfoTextIsOff, showInfoTextIsTooltip, showInfoTextIsDialog, getQuestionPool, questionPoolIsNo, questionPoolIsYes, getContinuousEnumeration, continuousEnumerationIsOff, continuousEnumerationIsOn, getLoSections, getQuestionDisplay, questionDisplayIsAll, questionDisplayIsActive, questionDisplayIsShowNext, questionDisplayIsShowNextAndHidePrevious, getEndResultAlways, endResultAlwaysIsOff, endResultAlwaysIsOn, endResultAlwaysIsButtonAfterScore, getExamsTimer, examsTimerIsOff, examsTimerIsOn, getEnumerationInternal, enumerationInternalIsAll, enumerationInternalIsCorrect, getActivityPool, activityPoolIsOff, activityPoolIsOn, activityPoolIsRandomiseAll, getCheckMaxAttempts, getSendScores, sendScoresIsOff, sendScoresIsUnlimited, sendScoresIs1Submission, sendScoresIsFinalCheckAnswers, getDesignPackSubstyle, designPackSubstyleIsOff, designPackSubstyleIsOn, getEndResultsReturn, endResultsReturnIsLast, endResultsReturnIsFirst, getScoreValuesPerBlock, scoreValuesPerBlockIsOff, scoreValuesPerBlockIsCustom, getExportFile, exportFileIsOff, exportFileIsOn, getTextboxAutogrow, textboxAutogrowIsOff, textboxAutogrowIsOn, getCheckboxSelections, checkboxSelectionsIsTotalCorrect, checkboxSelectionsIsAll, getRepeatAnswers, repeatAnswersIsAllow, repeatAnswersIsPrevent, getFreeDragLocation, freeDragLocationIsOff, freeDragLocationIsBetweenWords, freeDragLocationIsBetweenLetters, getPoolStacks, poolStacksIsOff, poolStacksIs1, poolStacksIs2, poolStacksIs3, poolStacksIs4, getAudioInGap, audioInGapIsOff, audioInGapIsOn, getOrderDependency, orderDependencyIsOff, orderDependencyIsFirstAnswer, orderDependencyIsOn, getGapResize, gapResizeIsOff, gapResizeIsOn, getScoreCalculation, scoreCalculationIsOnlyCorrect, scoreCalculationIsSubtractIncorrect, getPoolOrder, poolOrderIsOff, poolOrderIsAlphabetical, poolOrderIsNatural, getAutomaticCapitalisation, automaticCapitalisationIsOff, automaticCapitalisationIsOn, getMarkingStyle, markingStyleIsHighlight, markingStyleIsCircle, markingStyleIsUnderline, getContainerStyle, containerStyleIsNormal, containerStyleIsCustom, getAnswerDisplay, answerDisplayIsColumns, answerDisplayIsRows, getLinkBehaviour, linkBehaviourIsDrag, linkBehaviourIsTouch, getRestoreLoState, restoreLoStateIsOn, restoreLoStateIsOff, getWikiTool, wikiToolIsOff, wikiToolIsOn, getOperator, operatorIsAddition, operatorIsMultiplication, getGapCharacters, gapCharactersIsDontshow, gapCharactersIsShow, getLayers, layersIs2, layersIs3, layersIs4, layersIs5, layersIs6, getTeamScoring, teamScoringIsOff, teamScoringIsOn, getReferenceContent, referenceContentIsOff, referenceContentIs1, referenceContentIs2, getAlternativeText, alternativeTextIsOff, alternativeTextIsAlt1, alternativeTextIsAlt2, alternativeTextIsAlt3, getAudioPlayback, audioPlaybackIsAuto, audioPlaybackIsManual, audioPlaybackIsBeforeCardFlip, getLoTitleDisplay, loTitleDisplayIsOn, loTitleDisplayIsOff, getActivityTitleDisplay, activityTitleDisplayIsOn, activityTitleDisplayIsOff, getNumberColumns, numberColumnsIs3, numberColumnsIs4, numberColumnsIs5, getAutomaticPlay, automaticPlayIsOff, automaticPlayIsOn, automaticPlayIsOnMagnify, getShuffleControl, shuffleControlIsOff, shuffleControlIsOn, getAdditionalImageControl, additionalImageControlIsOff, additionalImageControlIsOn, getAudioIconBehaviour, audioIconBehaviourIsStop, audioIconBehaviourIsPause, getUserSelection, userSelectionIsOff, userSelectionIsSelectForCorrect, userSelectionIsSelectForError, getLoFullscreenButton, loFullscreenButtonIsOff, loFullscreenButtonIsOn, getUserVisibility, userVisibilityIsAll, userVisibilityIsTeacher, userVisibilityIsStudent, getCluesInColumns, cluesInColumnsIsOff, cluesInColumnsIsOn, getTryAgainBehaviour, tryAgainBehaviourIsButton, tryAgainBehaviourIsAutomatic, tryAgainBehaviourIsAutomaticAfterTime, getSeeAllAnswers, seeAllAnswersIsOff, seeAllAnswersIsOn, getSeeNextAnswer, seeNextAnswerIsOff, seeNextAnswerIsOn, getNavigationMenu, navigationMenuIsOff, navigationMenuIsAuto, navigationMenuIsCustom, getDisplaySettings, displaySettingsIsOff, displaySettingsIsOn, getResourceBanks, resourceBanksIsOff, resourceBanksIsOn, getTtsGeneralRules, ttsGeneralRulesIsOff, ttsGeneralRulesIsOn, getTtsLoRules, ttsLoRulesIsOff, ttsLoRulesIsOn, getTtsActivityRules, ttsActivityRulesIsOff, ttsActivityRulesIsOn, getActivityHelp, activityHelpIsOff, activityHelpIsOn, getFeedbackCorrect, feedbackCorrectIsNo, feedbackCorrectIsCustom, getFeedbackIncorrect, feedbackIncorrectIsNo, feedbackIncorrectIsCustom, getTargetImage, targetImageIsCustom, getTargetGeneratorImage, targetGeneratorImageIsCustom, getTargetGeneratorLocation, targetGeneratorLocationIsBottomRight, targetGeneratorLocationIsBottomLeft, targetGeneratorLocationIsTopRight, targetGeneratorLocationIsTopLeft, getSelectedTargetImage, selectedTargetImageIsCustom, getBackgroundImage, backgroundImageIsCustom, getScoreboard, scoreboardIsOff, scoreboardIsOn, getCountdownTimer, countdownTimerIsOff, countdownTimerIsOn, getMaximumDuration, maximumDurationIsOff, maximumDurationIsCustom, getMaximumItems, maximumItemsIsOff, maximumItemsIsCustom, getMovementSpeed, movementSpeedIsSlow, movementSpeedIsMedium, movementSpeedIsFast, getGenerationSpeed, generationSpeedIsSlow, generationSpeedIsMedium, generationSpeedIsFast, getGameOverMessage, gameOverMessageIsCustom, getSolutionHint, solutionHintIsOff, solutionHintIsOn, getIgnoreSpaces, ignoreSpacesIsOff, ignoreSpacesIsOn, getNumberInput, numberInputIsAny, numberInputIsNatural, numberInputIsInteger, getCopyrightInformation, copyrightInformationIsOff, copyrightInformationIsOn, getTargetOnscreenDuration, targetOnscreenDurationIsOff, targetOnscreenDurationIsCustom, getOnlineCheck, onlineCheckIsOff, onlineCheckIsOn, getSignalTargets, signalTargetsIsOff, signalTargetsIsOn, getCheckAnswersInstant, checkAnswersInstantIsOff, checkAnswersInstantIsOn, checkAnswersInstantIsAutomatic, getValidateDependentGaps, validateDependentGapsIsOff, validateDependentGapsIsOn, getPlayAll, playAllIsOff, playAllIsOn, getDownloadAudio, downloadAudioIsOff, downloadAudioIsOn, getHideLines, hideLinesIsOff, hideLinesIsOn, getGapfillBehaviour, gapfillBehaviourIsDrag, gapfillBehaviourIsTapItem, gapfillBehaviourIsTapTarget, gapfillBehaviourIsTapSwap, getGroupHeadings, groupHeadingsIsOff, groupHeadingsIsCustom, getDisplayAsCompleted, displayAsCompletedIsOff, displayAsCompletedIsOn, getOriginOfTargets, originOfTargetsIsDefault, originOfTargetsIsCustom, getTranslationBlock, translationBlockIsOff, translationBlockIsOn, getFlashFirstAnswer, flashFirstAnswerIsOff, flashFirstAnswerIsOn, getSetUserRole, setUserRoleIsFree, setUserRoleIsRole1, setUserRoleIsRole2, getScoreRounding, scoreRoundingIsFloat, scoreRoundingIsRoundup, scoreRoundingIsRound, scoreRoundingIsRounddown, getNextButtonText, nextButtonTextIsDefault, nextButtonTextIsCustom, getCheckAnswersDisplay, checkAnswersDisplayIsMarkingAndFeedback, checkAnswersDisplayIsMarkingOnly, getOriginalAudioPlayback, originalAudioPlaybackIsBothRoles, originalAudioPlaybackIsNonSelectedRoleOnly, getNumberOfChances, numberOfChancesIs1, numberOfChancesIs2, numberOfChancesIs3, numberOfChancesIs4, numberOfChancesIs5, getKeyboardDisplay, keyboardDisplayIsOff, keyboardDisplayIsOn, getRevealSolution, revealSolutionIsAfterFinalChance, revealSolutionIsWithButton, getHangmanTimer, hangmanTimerIsOff, hangmanTimerIsCustom, getInstructionPopUp, instructionPopUpIsOff, instructionPopUpIsOn, getResetWholeLo, resetWholeLoIsOff, resetWholeLoIsOn, getShowNextLo, showNextLoIsOff, showNextLoIsOn, getShowPreviousLo, showPreviousLoIsOff, showPreviousLoIsOn, getLoNotesArea, loNotesAreaIsOff, loNotesAreaIsOn, getAudioSpeed, audioSpeedIsOff, audioSpeedIsOn, getScorm2004AbsoluteValues, scorm2004AbsoluteValuesIsOff, scorm2004AbsoluteValuesIsOn, getHighlightSelection, highlightSelectionIsWords, highlightSelectionIsLetters, getDisplayRecordingTest, displayRecordingTestIsOff, displayRecordingTestIsOn, getEndResultsButton, endResultsButtonIsEvery, endResultsButtonIsLast, getTimeSpentInSections, timeSpentInSectionsIsOff, timeSpentInSectionsIsOn, getNumberOfTeams, numberOfTeamsIs1, numberOfTeamsIs2, numberOfTeamsIs3, numberOfTeamsIs4, getNumberOfCategories, numberOfCategoriesIsOff, numberOfCategoriesIs1, numberOfCategoriesIs2, numberOfCategoriesIs3, numberOfCategoriesIs4, numberOfCategoriesIs5, numberOfCategoriesIs6, numberOfCategoriesIs7, numberOfCategoriesIs8, numberOfCategoriesIs9, getNumberOfQuestions, numberOfQuestionsIsOff, numberOfQuestionsIs1, numberOfQuestionsIs2, numberOfQuestionsIs3, numberOfQuestionsIs4, numberOfQuestionsIs5, numberOfQuestionsIs6, numberOfQuestionsIs7, numberOfQuestionsIs8, numberOfQuestionsIs9, getSkip, skipIsOff, skipIsOn, getRestartGame, restartGameIsOff, restartGameIsOn, getNewGame, newGameIsOff, newGameIsOn, getCloseAfterSubmit, closeAfterSubmitIsOff, closeAfterSubmitIsOn, getPracticeScreen, practiceScreenIsOff, practiceScreenIsOn, getMediaPlaybackLimit, mediaPlaybackLimitIsOff, mediaPlaybackLimitIs1, mediaPlaybackLimitIs2, mediaPlaybackLimitIs3, mediaPlaybackLimitIs4, mediaPlaybackLimitIs5, getTtsLanguage, ttsLanguageIsOff, ttsLanguageIsOn, getScorm12AbsoluteValues, scorm12AbsoluteValuesIsOn, scorm12AbsoluteValuesIsOff, getRegressiveScoring, regressiveScoringIsOff, regressiveScoringIsOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./react-app/modules/screens/selector/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreen", function() { return _data__WEBPACK_IMPORTED_MODULE_0__["getScreen"]; });

/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./react-app/modules/screens/selector/options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenOptionValueByName", function() { return _options__WEBPACK_IMPORTED_MODULE_1__["getScreenOptionValueByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenOptionKeyByName", function() { return _options__WEBPACK_IMPORTED_MODULE_1__["getScreenOptionKeyByName"]; });

/* harmony import */ var _optionValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionValues */ "./react-app/modules/screens/selector/optionValues.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDictionary", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getDictionary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dictionaryIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["dictionaryIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dictionaryIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["dictionaryIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNotesArea", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNotesArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notesAreaIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["notesAreaIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notesAreaIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["notesAreaIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInteractivePhonemicChart", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getInteractivePhonemicChart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interactivePhonemicChartIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["interactivePhonemicChartIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interactivePhonemicChartIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["interactivePhonemicChartIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRevealObject", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getRevealObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["revealObjectIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["revealObjectIsAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsProgressive", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["revealObjectIsProgressive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsProgressiveplushide", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["revealObjectIsProgressiveplushide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPinObject", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPinObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pinObjectIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["pinObjectIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pinObjectIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["pinObjectIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrevious", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPrevious"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previousIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["previousIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previousIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["previousIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previousIsAfterSubmitted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["previousIsAfterSubmitted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getForwardButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getForwardButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardButtonIsNext", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["forwardButtonIsNext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardButtonIsAdaptive", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["forwardButtonIsAdaptive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnumeration", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getEnumeration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsNumber", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationIsNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsNumberNoDot", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationIsNumberNoDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsLetter", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationIsLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsCapitalletter", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationIsCapitalletter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsBullet", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationIsBullet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnumerationAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getEnumerationAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationAnswersIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsNumber", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationAnswersIsNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsNumberNoDot", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationAnswersIsNumberNoDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsLetter", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationAnswersIsLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsCapitalletter", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationAnswersIsCapitalletter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsBullet", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationAnswersIsBullet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationAnswersIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrefill", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPrefill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prefillIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["prefillIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prefillIsFirstitem", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["prefillIsFirstitem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prefillIsFirstblock", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["prefillIsFirstblock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGaptextAudio", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getGaptextAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gaptextAudioIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gaptextAudioIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gaptextAudioIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gaptextAudioIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpeakLearnerInput", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSpeakLearnerInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "speakLearnerInputIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["speakLearnerInputIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "speakLearnerInputIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["speakLearnerInputIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedback", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackIsNormal", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackIsNormal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackIsInstant", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackIsInstant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackSoundEffects", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFeedbackSoundEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackSoundEffectsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackSoundEffectsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackSoundEffectsIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackSoundEffectsIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSoundEffects", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSoundEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "soundEffectsIsNone", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["soundEffectsIsNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "soundEffectsIsSoundEffects", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["soundEffectsIsSoundEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTryAgain", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTryAgain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["tryAgainIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsLock", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["tryAgainIsLock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsFrozen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["tryAgainIsFrozen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsClear", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["tryAgainIsClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsKeepall", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["tryAgainIsKeepall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScoreValues", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getScoreValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreValuesIs1PointAction", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreValuesIs1PointAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreValuesIs1PointQuestion", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreValuesIs1PointQuestion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndResultScreen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getEndResultScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultScreenIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultScreenIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsButtonAfterScore", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultScreenIsButtonAfterScore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProgressBar", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getProgressBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progressBarIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["progressBarIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progressBarIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["progressBarIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progressBarIsAuto", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["progressBarIsAuto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progressBarIsScreenSelection", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["progressBarIsScreenSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAutomaticNext", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAutomaticNext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["automaticNextIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsQuestions", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["automaticNextIsQuestions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsTimer", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["automaticNextIsTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudioSupport", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAudioSupport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioSupportIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioSupportIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioSupportIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioSupportIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrintable", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPrintable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printableIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["printableIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printableIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["printableIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageAsTrigger", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getImageAsTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageAsTriggerIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["imageAsTriggerIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageAsTriggerIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["imageAsTriggerIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConserveAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getConserveAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "conserveAnswersIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["conserveAnswersIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "conserveAnswersIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["conserveAnswersIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAddTextObject", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAddTextObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTextObjectIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["addTextObjectIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTextObjectIsNormal", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["addTextObjectIsNormal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUseClickClick", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getUseClickClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClickClickIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["useClickClickIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClickClickIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["useClickClickIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPoolAlignment", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPoolAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsNone", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolAlignmentIsNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsTop", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolAlignmentIsTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsBottom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolAlignmentIsBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsLeft", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolAlignmentIsLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsRight", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolAlignmentIsRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsFree", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolAlignmentIsFree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPairAlignment", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPairAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairAlignmentIsOntop", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["pairAlignmentIsOntop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairAlignmentIsHorizontal", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["pairAlignmentIsHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairAlignmentIsVertical", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["pairAlignmentIsVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGaps", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getGaps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapsIsVariable", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapsIsVariable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapsIsSamelongest", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapsIsSamelongest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapsIsInvisible", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapsIsInvisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapsIsFixed", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapsIsFixed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSave", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["saveIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveIsSkinbutton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["saveIsSkinbutton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveIsButtonOnly", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["saveIsButtonOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getErrorCorrection", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getErrorCorrection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorCorrectionIsReplace", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["errorCorrectionIsReplace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorCorrectionIsLine", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["errorCorrectionIsLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorCorrectionIsSentence", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["errorCorrectionIsSentence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSignalError", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSignalError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signalErrorIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["signalErrorIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signalErrorIsHighlight", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["signalErrorIsHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signalErrorIsButtonAfterAttempts", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["signalErrorIsButtonAfterAttempts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signalErrorIsButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["signalErrorIsButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxLength", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getMaxLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxLengthIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["maxLengthIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxLengthIsWords", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["maxLengthIsWords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxLengthIsChars", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["maxLengthIsChars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMultipleDestinations", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getMultipleDestinations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multipleDestinationsIsOne", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["multipleDestinationsIsOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multipleDestinationsIsUnlimited", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["multipleDestinationsIsUnlimited"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multipleDestinationsIsRestricted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["multipleDestinationsIsRestricted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDropIndicator", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getDropIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropIndicatorIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["dropIndicatorIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropIndicatorIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["dropIndicatorIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCardBack", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCardBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardBackIsDefault", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardBackIsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardBackIsDefaultsets", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardBackIsDefaultsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardBackIsImage", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardBackIsImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardBackIsImagesets", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardBackIsImagesets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCardLayout", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCardLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardLayoutIsDefault", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardLayoutIsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardLayoutIsSets", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardLayoutIsSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCardFormat", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCardFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardFormatIsPortrait", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardFormatIsPortrait"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardFormatIsLandscape", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardFormatIsLandscape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardFormatIsSquare", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardFormatIsSquare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLinkingLinesSets", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getLinkingLinesSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkingLinesSetsIsPairs", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["linkingLinesSetsIsPairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkingLinesSetsIsTriplets", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["linkingLinesSetsIsTriplets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkingLinesSetsIsQuadruples", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["linkingLinesSetsIsQuadruples"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkingLinesSetsIsQuintuples", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["linkingLinesSetsIsQuintuples"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSize", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeIsDummy", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["sizeIsDummy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCase", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caseIsUpper", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["caseIsUpper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caseIsLower", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["caseIsLower"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStayInView", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getStayInView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stayInViewIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["stayInViewIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stayInViewIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["stayInViewIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDragAlignment", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getDragAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragAlignmentIsVertical", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["dragAlignmentIsVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragAlignmentIsHorizontal", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["dragAlignmentIsHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragAlignmentIsHorizontalSingleWord", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["dragAlignmentIsHorizontalSingleWord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHideRadiobuttons", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getHideRadiobuttons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideRadiobuttonsIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["hideRadiobuttonsIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideRadiobuttonsIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["hideRadiobuttonsIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideRadiobuttonsIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["hideRadiobuttonsIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCluePosition", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCluePosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cluePositionIsInside", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cluePositionIsInside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cluePositionIsOutside", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cluePositionIsOutside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChoiceAlignment", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getChoiceAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choiceAlignmentIsVertical", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["choiceAlignmentIsVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choiceAlignmentIsHorizontal", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["choiceAlignmentIsHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choiceAlignmentIsInline", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["choiceAlignmentIsInline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCheckAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersIsAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAfterOne", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersIsAfterOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAfterAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersIsAfterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsBeforeSubmitted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersIsBeforeSubmitted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSeeAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSeeAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["seeAnswersIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["seeAnswersIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsBeforeInteraction", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["seeAnswersIsBeforeInteraction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReset", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["resetIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["resetIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIsBeforeSubmitted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["resetIsBeforeSubmitted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSubmissions", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSubmissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs5", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs6", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs7", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs8", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs9", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs10", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs10"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs11", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs11"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs12", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs12"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs13", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs13"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs14", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs14"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs15", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs15"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs16", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs16"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs17", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs17"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs18", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs18"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs19", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs19"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIs20", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIs20"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "submissionsIsUnlimited", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["submissionsIsUnlimited"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRunningScore", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getRunningScore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runningScoreIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["runningScoreIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runningScoreIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["runningScoreIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowHints", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getShowHints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showHintsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showHintsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showHintsIsAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showHintsIsAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showHintsIsCheckScore", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showHintsIsCheckScore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHints", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getHints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDelayedFeedback", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getDelayedFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["delayedFeedbackIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["delayedFeedbackIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["delayedFeedbackIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCaseInsensitive", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCaseInsensitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["caseInsensitiveIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["caseInsensitiveIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIgnorePunctuation", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getIgnorePunctuation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignorePunctuationIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ignorePunctuationIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignorePunctuationIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ignorePunctuationIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomiseAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getRandomiseAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomiseAnswersIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["randomiseAnswersIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomiseAnswersIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["randomiseAnswersIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCardPerRow", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCardPerRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cardPerRowIsCards", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cardPerRowIsCards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHideCheckboxes", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getHideCheckboxes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideCheckboxesIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["hideCheckboxesIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideCheckboxesIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["hideCheckboxesIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowSubmit", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getShowSubmit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showSubmitIsAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showSubmitIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAfterOne", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showSubmitIsAfterOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAfterAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showSubmitIsAfterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsEachScreen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showSubmitIsEachScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFinishSubmit", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFinishSubmit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "finishSubmitIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["finishSubmitIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "finishSubmitIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["finishSubmitIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowForward", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getShowForward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showForwardIsAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showForwardIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterOne", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showForwardIsAfterOne"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterSubmitted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showForwardIsAfterSubmitted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showForwardIsAfterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterCheckAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showForwardIsAfterCheckAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterSeeAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showForwardIsAfterSeeAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTargetZones", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTargetZones"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetZonesIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetZonesIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetZonesIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetZonesIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getValidationMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validationMessageIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["validationMessageIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validationMessageIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["validationMessageIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAutosave", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAutosave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autosaveIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["autosaveIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autosaveIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["autosaveIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntroScreen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getIntroScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introScreenIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["introScreenIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introScreenIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["introScreenIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getManualMarking", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getManualMarking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manualMarkingIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["manualMarkingIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manualMarkingIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["manualMarkingIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFeedbackBand1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand1IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackBand1IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand1IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackBand1IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFeedbackBand2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand2IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackBand2IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand2IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackBand2IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFeedbackBand3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand3IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackBand3IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand3IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackBand3IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFeedbackBand4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand4IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackBand4IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackBand4IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackBand4IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpecialCharactersStudent", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSpecialCharactersStudent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getActivityFeedbackBand1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand1IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityFeedbackBand1IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand1IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityFeedbackBand1IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getActivityFeedbackBand2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand2IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityFeedbackBand2IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand2IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityFeedbackBand2IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getActivityFeedbackBand3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand3IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityFeedbackBand3IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand3IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityFeedbackBand3IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getActivityFeedbackBand4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand4IsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityFeedbackBand4IsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand4IsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityFeedbackBand4IsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackThresholds", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getActivityFeedbackThresholds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackThresholdsIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityFeedbackThresholdsIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSpellcheck", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSpellcheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spellcheckIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["spellcheckIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spellcheckIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["spellcheckIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowInColumns", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getShowInColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showInColumnsIsFalse", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showInColumnsIsFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showInColumnsIsTrue", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showInColumnsIsTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIgnoreAccents", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getIgnoreAccents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignoreAccentsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ignoreAccentsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignoreAccentsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ignoreAccentsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEraser", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getEraser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eraserIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["eraserIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eraserIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["eraserIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAnnotationTools", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAnnotationTools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["annotationToolsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["annotationToolsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOnlyForTeachers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["annotationToolsIsOnlyForTeachers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOnlySupplements", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["annotationToolsIsOnlySupplements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowInfoText", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getShowInfoText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showInfoTextIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsTooltip", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showInfoTextIsTooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsDialog", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showInfoTextIsDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQuestionPool", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getQuestionPool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "questionPoolIsNo", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["questionPoolIsNo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "questionPoolIsYes", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["questionPoolIsYes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContinuousEnumeration", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getContinuousEnumeration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "continuousEnumerationIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["continuousEnumerationIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "continuousEnumerationIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["continuousEnumerationIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoSections", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getLoSections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQuestionDisplay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getQuestionDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "questionDisplayIsAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["questionDisplayIsAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "questionDisplayIsActive", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["questionDisplayIsActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "questionDisplayIsShowNext", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["questionDisplayIsShowNext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "questionDisplayIsShowNextAndHidePrevious", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["questionDisplayIsShowNextAndHidePrevious"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndResultAlways", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getEndResultAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultAlwaysIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultAlwaysIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsButtonAfterScore", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultAlwaysIsButtonAfterScore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExamsTimer", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getExamsTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "examsTimerIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["examsTimerIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "examsTimerIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["examsTimerIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnumerationInternal", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getEnumerationInternal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationInternalIsAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationInternalIsAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerationInternalIsCorrect", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["enumerationInternalIsCorrect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityPool", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getActivityPool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityPoolIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityPoolIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsRandomiseAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityPoolIsRandomiseAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheckMaxAttempts", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCheckMaxAttempts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSendScores", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSendScores"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["sendScoresIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsUnlimited", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["sendScoresIsUnlimited"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendScoresIs1Submission", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["sendScoresIs1Submission"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsFinalCheckAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["sendScoresIsFinalCheckAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDesignPackSubstyle", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getDesignPackSubstyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "designPackSubstyleIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["designPackSubstyleIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "designPackSubstyleIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["designPackSubstyleIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndResultsReturn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getEndResultsReturn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultsReturnIsLast", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultsReturnIsLast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultsReturnIsFirst", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultsReturnIsFirst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScoreValuesPerBlock", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getScoreValuesPerBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreValuesPerBlockIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreValuesPerBlockIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreValuesPerBlockIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreValuesPerBlockIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExportFile", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getExportFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportFileIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["exportFileIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exportFileIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["exportFileIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextboxAutogrow", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTextboxAutogrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textboxAutogrowIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["textboxAutogrowIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textboxAutogrowIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["textboxAutogrowIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheckboxSelections", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCheckboxSelections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkboxSelectionsIsTotalCorrect", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkboxSelectionsIsTotalCorrect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkboxSelectionsIsAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkboxSelectionsIsAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRepeatAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getRepeatAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatAnswersIsAllow", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["repeatAnswersIsAllow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatAnswersIsPrevent", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["repeatAnswersIsPrevent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFreeDragLocation", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFreeDragLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freeDragLocationIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["freeDragLocationIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freeDragLocationIsBetweenWords", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["freeDragLocationIsBetweenWords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freeDragLocationIsBetweenLetters", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["freeDragLocationIsBetweenLetters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPoolStacks", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPoolStacks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolStacksIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolStacksIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolStacksIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolStacksIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolStacksIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolStacksIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolStacksIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolStacksIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolStacksIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolStacksIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudioInGap", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAudioInGap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioInGapIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioInGapIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioInGapIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioInGapIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrderDependency", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getOrderDependency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderDependencyIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["orderDependencyIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderDependencyIsFirstAnswer", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["orderDependencyIsFirstAnswer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderDependencyIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["orderDependencyIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGapResize", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getGapResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapResizeIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapResizeIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapResizeIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapResizeIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScoreCalculation", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getScoreCalculation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreCalculationIsOnlyCorrect", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreCalculationIsOnlyCorrect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreCalculationIsSubtractIncorrect", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreCalculationIsSubtractIncorrect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPoolOrder", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPoolOrder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolOrderIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolOrderIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolOrderIsAlphabetical", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolOrderIsAlphabetical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "poolOrderIsNatural", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["poolOrderIsNatural"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAutomaticCapitalisation", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAutomaticCapitalisation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticCapitalisationIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["automaticCapitalisationIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticCapitalisationIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["automaticCapitalisationIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMarkingStyle", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getMarkingStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markingStyleIsHighlight", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["markingStyleIsHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markingStyleIsCircle", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["markingStyleIsCircle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markingStyleIsUnderline", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["markingStyleIsUnderline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContainerStyle", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getContainerStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containerStyleIsNormal", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["containerStyleIsNormal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containerStyleIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["containerStyleIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAnswerDisplay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAnswerDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "answerDisplayIsColumns", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["answerDisplayIsColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "answerDisplayIsRows", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["answerDisplayIsRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLinkBehaviour", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getLinkBehaviour"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkBehaviourIsDrag", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["linkBehaviourIsDrag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkBehaviourIsTouch", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["linkBehaviourIsTouch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRestoreLoState", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getRestoreLoState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restoreLoStateIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["restoreLoStateIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restoreLoStateIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["restoreLoStateIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWikiTool", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getWikiTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wikiToolIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["wikiToolIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wikiToolIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["wikiToolIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperator", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getOperator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operatorIsAddition", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["operatorIsAddition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operatorIsMultiplication", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["operatorIsMultiplication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGapCharacters", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getGapCharacters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapCharactersIsDontshow", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapCharactersIsDontshow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapCharactersIsShow", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapCharactersIsShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLayers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layersIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["layersIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layersIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["layersIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layersIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["layersIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layersIs5", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["layersIs5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layersIs6", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["layersIs6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTeamScoring", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTeamScoring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teamScoringIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["teamScoringIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teamScoringIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["teamScoringIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReferenceContent", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getReferenceContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "referenceContentIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["referenceContentIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "referenceContentIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["referenceContentIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "referenceContentIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["referenceContentIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlternativeText", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAlternativeText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["alternativeTextIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["alternativeTextIsAlt1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["alternativeTextIsAlt2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["alternativeTextIsAlt3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudioPlayback", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAudioPlayback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioPlaybackIsAuto", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioPlaybackIsAuto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioPlaybackIsManual", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioPlaybackIsManual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioPlaybackIsBeforeCardFlip", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioPlaybackIsBeforeCardFlip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoTitleDisplay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getLoTitleDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loTitleDisplayIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["loTitleDisplayIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loTitleDisplayIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["loTitleDisplayIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityTitleDisplay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getActivityTitleDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityTitleDisplayIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityTitleDisplayIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityTitleDisplayIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityTitleDisplayIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberColumns", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNumberColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberColumnsIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberColumnsIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberColumnsIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberColumnsIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberColumnsIs5", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberColumnsIs5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAutomaticPlay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAutomaticPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticPlayIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["automaticPlayIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticPlayIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["automaticPlayIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "automaticPlayIsOnMagnify", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["automaticPlayIsOnMagnify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShuffleControl", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getShuffleControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffleControlIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["shuffleControlIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffleControlIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["shuffleControlIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAdditionalImageControl", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAdditionalImageControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "additionalImageControlIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["additionalImageControlIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "additionalImageControlIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["additionalImageControlIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudioIconBehaviour", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAudioIconBehaviour"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioIconBehaviourIsStop", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioIconBehaviourIsStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioIconBehaviourIsPause", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioIconBehaviourIsPause"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserSelection", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getUserSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSelectionIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["userSelectionIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSelectionIsSelectForCorrect", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["userSelectionIsSelectForCorrect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSelectionIsSelectForError", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["userSelectionIsSelectForError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoFullscreenButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getLoFullscreenButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loFullscreenButtonIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["loFullscreenButtonIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loFullscreenButtonIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["loFullscreenButtonIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserVisibility", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getUserVisibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["userVisibilityIsAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsTeacher", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["userVisibilityIsTeacher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsStudent", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["userVisibilityIsStudent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCluesInColumns", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCluesInColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cluesInColumnsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cluesInColumnsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cluesInColumnsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["cluesInColumnsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTryAgainBehaviour", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTryAgainBehaviour"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["tryAgainBehaviourIsButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsAutomatic", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["tryAgainBehaviourIsAutomatic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsAutomaticAfterTime", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["tryAgainBehaviourIsAutomaticAfterTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSeeAllAnswers", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSeeAllAnswers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeAllAnswersIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["seeAllAnswersIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeAllAnswersIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["seeAllAnswersIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSeeNextAnswer", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSeeNextAnswer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeNextAnswerIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["seeNextAnswerIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seeNextAnswerIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["seeNextAnswerIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNavigationMenu", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNavigationMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["navigationMenuIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsAuto", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["navigationMenuIsAuto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["navigationMenuIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplaySettings", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getDisplaySettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displaySettingsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["displaySettingsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displaySettingsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["displaySettingsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResourceBanks", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getResourceBanks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resourceBanksIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["resourceBanksIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resourceBanksIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["resourceBanksIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTtsGeneralRules", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTtsGeneralRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsGeneralRulesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ttsGeneralRulesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsGeneralRulesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ttsGeneralRulesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTtsLoRules", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTtsLoRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsLoRulesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ttsLoRulesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsLoRulesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ttsLoRulesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTtsActivityRules", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTtsActivityRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsActivityRulesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ttsActivityRulesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsActivityRulesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ttsActivityRulesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActivityHelp", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getActivityHelp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityHelpIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityHelpIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activityHelpIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["activityHelpIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackCorrect", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFeedbackCorrect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackCorrectIsNo", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackCorrectIsNo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackCorrectIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackCorrectIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeedbackIncorrect", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFeedbackIncorrect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackIncorrectIsNo", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackIncorrectIsNo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feedbackIncorrectIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["feedbackIncorrectIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTargetImage", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTargetImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetImageIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetImageIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTargetGeneratorImage", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTargetGeneratorImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorImageIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetGeneratorImageIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTargetGeneratorLocation", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTargetGeneratorLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorLocationIsBottomRight", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetGeneratorLocationIsBottomRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorLocationIsBottomLeft", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetGeneratorLocationIsBottomLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorLocationIsTopRight", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetGeneratorLocationIsTopRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorLocationIsTopLeft", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetGeneratorLocationIsTopLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedTargetImage", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSelectedTargetImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectedTargetImageIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["selectedTargetImageIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundImage", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getBackgroundImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundImageIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["backgroundImageIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScoreboard", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getScoreboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreboardIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreboardIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreboardIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreboardIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCountdownTimer", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCountdownTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countdownTimerIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["countdownTimerIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countdownTimerIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["countdownTimerIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaximumDuration", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getMaximumDuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maximumDurationIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["maximumDurationIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maximumDurationIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["maximumDurationIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaximumItems", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getMaximumItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maximumItemsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["maximumItemsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maximumItemsIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["maximumItemsIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMovementSpeed", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getMovementSpeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "movementSpeedIsSlow", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["movementSpeedIsSlow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "movementSpeedIsMedium", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["movementSpeedIsMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "movementSpeedIsFast", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["movementSpeedIsFast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGenerationSpeed", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getGenerationSpeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generationSpeedIsSlow", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["generationSpeedIsSlow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generationSpeedIsMedium", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["generationSpeedIsMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generationSpeedIsFast", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["generationSpeedIsFast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGameOverMessage", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getGameOverMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gameOverMessageIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gameOverMessageIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSolutionHint", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSolutionHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "solutionHintIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["solutionHintIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "solutionHintIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["solutionHintIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIgnoreSpaces", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getIgnoreSpaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignoreSpacesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ignoreSpacesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignoreSpacesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ignoreSpacesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberInput", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNumberInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberInputIsAny", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberInputIsAny"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberInputIsNatural", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberInputIsNatural"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberInputIsInteger", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberInputIsInteger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCopyrightInformation", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCopyrightInformation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyrightInformationIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["copyrightInformationIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyrightInformationIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["copyrightInformationIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTargetOnscreenDuration", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTargetOnscreenDuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetOnscreenDurationIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetOnscreenDurationIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetOnscreenDurationIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["targetOnscreenDurationIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOnlineCheck", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getOnlineCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlineCheckIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["onlineCheckIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlineCheckIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["onlineCheckIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSignalTargets", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSignalTargets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signalTargetsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["signalTargetsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signalTargetsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["signalTargetsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswersInstant", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCheckAnswersInstant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersInstantIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersInstantIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsAutomatic", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersInstantIsAutomatic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValidateDependentGaps", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getValidateDependentGaps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateDependentGapsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["validateDependentGapsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateDependentGapsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["validateDependentGapsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPlayAll", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPlayAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playAllIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["playAllIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playAllIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["playAllIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDownloadAudio", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getDownloadAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadAudioIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["downloadAudioIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadAudioIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["downloadAudioIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHideLines", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getHideLines"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLinesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["hideLinesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLinesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["hideLinesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGapfillBehaviour", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getGapfillBehaviour"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapfillBehaviourIsDrag", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapfillBehaviourIsDrag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapfillBehaviourIsTapItem", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapfillBehaviourIsTapItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapfillBehaviourIsTapTarget", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapfillBehaviourIsTapTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gapfillBehaviourIsTapSwap", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["gapfillBehaviourIsTapSwap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGroupHeadings", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getGroupHeadings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupHeadingsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["groupHeadingsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupHeadingsIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["groupHeadingsIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplayAsCompleted", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getDisplayAsCompleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displayAsCompletedIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["displayAsCompletedIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displayAsCompletedIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["displayAsCompletedIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOriginOfTargets", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getOriginOfTargets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "originOfTargetsIsDefault", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["originOfTargetsIsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "originOfTargetsIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["originOfTargetsIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTranslationBlock", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTranslationBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translationBlockIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["translationBlockIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translationBlockIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["translationBlockIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFlashFirstAnswer", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getFlashFirstAnswer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flashFirstAnswerIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["flashFirstAnswerIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flashFirstAnswerIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["flashFirstAnswerIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetUserRole", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSetUserRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUserRoleIsFree", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["setUserRoleIsFree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUserRoleIsRole1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["setUserRoleIsRole1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUserRoleIsRole2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["setUserRoleIsRole2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScoreRounding", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getScoreRounding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsFloat", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreRoundingIsFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRoundup", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreRoundingIsRoundup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRound", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreRoundingIsRound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRounddown", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scoreRoundingIsRounddown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextButtonText", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNextButtonText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextButtonTextIsDefault", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["nextButtonTextIsDefault"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextButtonTextIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["nextButtonTextIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswersDisplay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCheckAnswersDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersDisplayIsMarkingAndFeedback", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersDisplayIsMarkingAndFeedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAnswersDisplayIsMarkingOnly", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["checkAnswersDisplayIsMarkingOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOriginalAudioPlayback", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getOriginalAudioPlayback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "originalAudioPlaybackIsBothRoles", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["originalAudioPlaybackIsBothRoles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "originalAudioPlaybackIsNonSelectedRoleOnly", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["originalAudioPlaybackIsNonSelectedRoleOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberOfChances", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNumberOfChances"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfChancesIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfChancesIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfChancesIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfChancesIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs5", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfChancesIs5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getKeyboardDisplay", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getKeyboardDisplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyboardDisplayIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["keyboardDisplayIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyboardDisplayIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["keyboardDisplayIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRevealSolution", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getRevealSolution"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealSolutionIsAfterFinalChance", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["revealSolutionIsAfterFinalChance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revealSolutionIsWithButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["revealSolutionIsWithButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHangmanTimer", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getHangmanTimer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hangmanTimerIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["hangmanTimerIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hangmanTimerIsCustom", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["hangmanTimerIsCustom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstructionPopUp", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getInstructionPopUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instructionPopUpIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["instructionPopUpIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instructionPopUpIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["instructionPopUpIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResetWholeLo", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getResetWholeLo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetWholeLoIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["resetWholeLoIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetWholeLoIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["resetWholeLoIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowNextLo", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getShowNextLo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNextLoIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showNextLoIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNextLoIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showNextLoIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShowPreviousLo", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getShowPreviousLo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showPreviousLoIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showPreviousLoIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showPreviousLoIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["showPreviousLoIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLoNotesArea", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getLoNotesArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loNotesAreaIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["loNotesAreaIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loNotesAreaIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["loNotesAreaIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudioSpeed", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getAudioSpeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioSpeedIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioSpeedIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioSpeedIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["audioSpeedIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScorm2004AbsoluteValues", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getScorm2004AbsoluteValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scorm2004AbsoluteValuesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scorm2004AbsoluteValuesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scorm2004AbsoluteValuesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scorm2004AbsoluteValuesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHighlightSelection", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getHighlightSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highlightSelectionIsWords", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["highlightSelectionIsWords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highlightSelectionIsLetters", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["highlightSelectionIsLetters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplayRecordingTest", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getDisplayRecordingTest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displayRecordingTestIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["displayRecordingTestIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "displayRecordingTestIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["displayRecordingTestIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndResultsButton", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getEndResultsButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultsButtonIsEvery", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultsButtonIsEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endResultsButtonIsLast", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["endResultsButtonIsLast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimeSpentInSections", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTimeSpentInSections"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSpentInSectionsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["timeSpentInSectionsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSpentInSectionsIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["timeSpentInSectionsIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberOfTeams", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNumberOfTeams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfTeamsIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfTeamsIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfTeamsIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfTeamsIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfTeamsIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfTeamsIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfTeamsIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfTeamsIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberOfCategories", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNumberOfCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs5", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIs5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs6", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIs6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs7", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIs7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs8", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIs8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs9", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfCategoriesIs9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberOfQuestions", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNumberOfQuestions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs5", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIs5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs6", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIs6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs7", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIs7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs8", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIs8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs9", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["numberOfQuestionsIs9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSkip", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getSkip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["skipIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["skipIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRestartGame", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getRestartGame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restartGameIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["restartGameIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restartGameIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["restartGameIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewGame", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getNewGame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newGameIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["newGameIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newGameIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["newGameIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCloseAfterSubmit", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getCloseAfterSubmit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeAfterSubmitIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["closeAfterSubmitIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeAfterSubmitIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["closeAfterSubmitIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPracticeScreen", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getPracticeScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "practiceScreenIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["practiceScreenIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "practiceScreenIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["practiceScreenIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMediaPlaybackLimit", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getMediaPlaybackLimit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["mediaPlaybackLimitIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs1", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["mediaPlaybackLimitIs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs2", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["mediaPlaybackLimitIs2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs3", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["mediaPlaybackLimitIs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs4", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["mediaPlaybackLimitIs4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs5", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["mediaPlaybackLimitIs5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTtsLanguage", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getTtsLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsLanguageIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ttsLanguageIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ttsLanguageIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["ttsLanguageIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScorm12AbsoluteValues", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getScorm12AbsoluteValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scorm12AbsoluteValuesIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scorm12AbsoluteValuesIsOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scorm12AbsoluteValuesIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["scorm12AbsoluteValuesIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRegressiveScoring", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["getRegressiveScoring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regressiveScoringIsOff", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["regressiveScoringIsOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regressiveScoringIsOn", function() { return _optionValues__WEBPACK_IMPORTED_MODULE_2__["regressiveScoringIsOn"]; });





/***/ }),

/***/ "./react-app/modules/screens/selector/optionValues.js":
/*!************************************************************!*\
  !*** ./react-app/modules/screens/selector/optionValues.js ***!
  \************************************************************/
/*! exports provided: getDictionary, dictionaryIsFalse, dictionaryIsTrue, getNotesArea, notesAreaIsFalse, notesAreaIsTrue, getInteractivePhonemicChart, interactivePhonemicChartIsFalse, interactivePhonemicChartIsTrue, getRevealObject, revealObjectIsFalse, revealObjectIsAll, revealObjectIsProgressive, revealObjectIsProgressiveplushide, getPinObject, pinObjectIsFalse, pinObjectIsTrue, getPrevious, previousIsTrue, previousIsFalse, previousIsAfterSubmitted, getForwardButton, forwardButtonIsNext, forwardButtonIsAdaptive, getEnumeration, enumerationIsFalse, enumerationIsNumber, enumerationIsNumberNoDot, enumerationIsLetter, enumerationIsCapitalletter, enumerationIsBullet, enumerationIsCustom, getEnumerationAnswers, enumerationAnswersIsFalse, enumerationAnswersIsNumber, enumerationAnswersIsNumberNoDot, enumerationAnswersIsLetter, enumerationAnswersIsCapitalletter, enumerationAnswersIsBullet, enumerationAnswersIsCustom, getPrefill, prefillIsFalse, prefillIsFirstitem, prefillIsFirstblock, getGaptextAudio, gaptextAudioIsFalse, gaptextAudioIsTrue, getSpeakLearnerInput, speakLearnerInputIsFalse, speakLearnerInputIsTrue, getFeedback, feedbackIsNormal, feedbackIsInstant, getFeedbackSoundEffects, feedbackSoundEffectsIsOff, feedbackSoundEffectsIsCustom, getSoundEffects, soundEffectsIsNone, soundEffectsIsSoundEffects, getTryAgain, tryAgainIsFalse, tryAgainIsLock, tryAgainIsFrozen, tryAgainIsClear, tryAgainIsKeepall, getScoreValues, scoreValuesIs1PointAction, scoreValuesIs1PointQuestion, getEndResultScreen, endResultScreenIsFalse, endResultScreenIsTrue, endResultScreenIsButtonAfterScore, getProgressBar, progressBarIsTrue, progressBarIsFalse, progressBarIsAuto, progressBarIsScreenSelection, getAutomaticNext, automaticNextIsFalse, automaticNextIsQuestions, automaticNextIsTimer, getAudioSupport, audioSupportIsFalse, audioSupportIsTrue, getPrintable, printableIsFalse, printableIsTrue, getImageAsTrigger, imageAsTriggerIsFalse, imageAsTriggerIsTrue, getConserveAnswers, conserveAnswersIsTrue, conserveAnswersIsFalse, getAddTextObject, addTextObjectIsFalse, addTextObjectIsNormal, getUseClickClick, useClickClickIsFalse, useClickClickIsTrue, getPoolAlignment, poolAlignmentIsNone, poolAlignmentIsTop, poolAlignmentIsBottom, poolAlignmentIsLeft, poolAlignmentIsRight, poolAlignmentIsFree, getPairAlignment, pairAlignmentIsOntop, pairAlignmentIsHorizontal, pairAlignmentIsVertical, getGaps, gapsIsVariable, gapsIsSamelongest, gapsIsInvisible, gapsIsFixed, getSave, saveIsOff, saveIsSkinbutton, saveIsButtonOnly, getErrorCorrection, errorCorrectionIsReplace, errorCorrectionIsLine, errorCorrectionIsSentence, getSignalError, signalErrorIsOff, signalErrorIsHighlight, signalErrorIsButtonAfterAttempts, signalErrorIsButton, getMaxLength, maxLengthIsFalse, maxLengthIsWords, maxLengthIsChars, getMultipleDestinations, multipleDestinationsIsOne, multipleDestinationsIsUnlimited, multipleDestinationsIsRestricted, getDropIndicator, dropIndicatorIsTrue, dropIndicatorIsFalse, getCardBack, cardBackIsDefault, cardBackIsDefaultsets, cardBackIsImage, cardBackIsImagesets, getCardLayout, cardLayoutIsDefault, cardLayoutIsSets, getCardFormat, cardFormatIsPortrait, cardFormatIsLandscape, cardFormatIsSquare, getLinkingLinesSets, linkingLinesSetsIsPairs, linkingLinesSetsIsTriplets, linkingLinesSetsIsQuadruples, linkingLinesSetsIsQuintuples, getSize, sizeIsDummy, getCase, caseIsUpper, caseIsLower, getStayInView, stayInViewIsFalse, stayInViewIsTrue, getDragAlignment, dragAlignmentIsVertical, dragAlignmentIsHorizontal, dragAlignmentIsHorizontalSingleWord, getHideRadiobuttons, hideRadiobuttonsIsFalse, hideRadiobuttonsIsTrue, hideRadiobuttonsIsCustom, getCluePosition, cluePositionIsInside, cluePositionIsOutside, getChoiceAlignment, choiceAlignmentIsVertical, choiceAlignmentIsHorizontal, choiceAlignmentIsInline, getCheckAnswers, checkAnswersIsAlways, checkAnswersIsFalse, checkAnswersIsAfterOne, checkAnswersIsAfterAll, checkAnswersIsBeforeSubmitted, getSeeAnswers, seeAnswersIsOn, seeAnswersIsOff, seeAnswersIsBeforeInteraction, getReset, resetIsOn, resetIsOff, resetIsBeforeSubmitted, getSubmissions, submissionsIs1, submissionsIs2, submissionsIs3, submissionsIs4, submissionsIs5, submissionsIs6, submissionsIs7, submissionsIs8, submissionsIs9, submissionsIs10, submissionsIs11, submissionsIs12, submissionsIs13, submissionsIs14, submissionsIs15, submissionsIs16, submissionsIs17, submissionsIs18, submissionsIs19, submissionsIs20, submissionsIsUnlimited, getRunningScore, runningScoreIsFalse, runningScoreIsTrue, getShowHints, showHintsIsOff, showHintsIsAlways, showHintsIsCheckScore, getHints, getDelayedFeedback, delayedFeedbackIsFalse, delayedFeedbackIsTrue, delayedFeedbackIsCustom, getCaseInsensitive, caseInsensitiveIsFalse, caseInsensitiveIsTrue, getIgnorePunctuation, ignorePunctuationIsFalse, ignorePunctuationIsTrue, getRandomiseAnswers, randomiseAnswersIsTrue, randomiseAnswersIsFalse, getCardPerRow, cardPerRowIsCards, getHideCheckboxes, hideCheckboxesIsFalse, hideCheckboxesIsTrue, getShowSubmit, showSubmitIsAlways, showSubmitIsOff, showSubmitIsAfterOne, showSubmitIsAfterAll, showSubmitIsEachScreen, getFinishSubmit, finishSubmitIsOff, finishSubmitIsOn, getShowForward, showForwardIsAlways, showForwardIsOff, showForwardIsAfterOne, showForwardIsAfterSubmitted, showForwardIsAfterAll, showForwardIsAfterCheckAnswers, showForwardIsAfterSeeAnswers, getTargetZones, targetZonesIsFalse, targetZonesIsTrue, getValidationMessage, validationMessageIsFalse, validationMessageIsCustom, getAutosave, autosaveIsOn, autosaveIsOff, getIntroScreen, introScreenIsOff, introScreenIsOn, getManualMarking, manualMarkingIsOff, manualMarkingIsOn, getFeedbackBand1, feedbackBand1IsFalse, feedbackBand1IsCustom, getFeedbackBand2, feedbackBand2IsFalse, feedbackBand2IsCustom, getFeedbackBand3, feedbackBand3IsFalse, feedbackBand3IsCustom, getFeedbackBand4, feedbackBand4IsFalse, feedbackBand4IsCustom, getSpecialCharactersStudent, getActivityFeedbackBand1, activityFeedbackBand1IsFalse, activityFeedbackBand1IsCustom, getActivityFeedbackBand2, activityFeedbackBand2IsFalse, activityFeedbackBand2IsCustom, getActivityFeedbackBand3, activityFeedbackBand3IsFalse, activityFeedbackBand3IsCustom, getActivityFeedbackBand4, activityFeedbackBand4IsFalse, activityFeedbackBand4IsCustom, getActivityFeedbackThresholds, activityFeedbackThresholdsIsCustom, getSpellcheck, spellcheckIsOff, spellcheckIsOn, getShowInColumns, showInColumnsIsFalse, showInColumnsIsTrue, getIgnoreAccents, ignoreAccentsIsOff, ignoreAccentsIsOn, getEraser, eraserIsOff, eraserIsOn, getAnnotationTools, annotationToolsIsOff, annotationToolsIsOn, annotationToolsIsOnlyForTeachers, annotationToolsIsOnlySupplements, getShowInfoText, showInfoTextIsOff, showInfoTextIsTooltip, showInfoTextIsDialog, getQuestionPool, questionPoolIsNo, questionPoolIsYes, getContinuousEnumeration, continuousEnumerationIsOff, continuousEnumerationIsOn, getLoSections, getQuestionDisplay, questionDisplayIsAll, questionDisplayIsActive, questionDisplayIsShowNext, questionDisplayIsShowNextAndHidePrevious, getEndResultAlways, endResultAlwaysIsOff, endResultAlwaysIsOn, endResultAlwaysIsButtonAfterScore, getExamsTimer, examsTimerIsOff, examsTimerIsOn, getEnumerationInternal, enumerationInternalIsAll, enumerationInternalIsCorrect, getActivityPool, activityPoolIsOff, activityPoolIsOn, activityPoolIsRandomiseAll, getCheckMaxAttempts, getSendScores, sendScoresIsOff, sendScoresIsUnlimited, sendScoresIs1Submission, sendScoresIsFinalCheckAnswers, getDesignPackSubstyle, designPackSubstyleIsOff, designPackSubstyleIsOn, getEndResultsReturn, endResultsReturnIsLast, endResultsReturnIsFirst, getScoreValuesPerBlock, scoreValuesPerBlockIsOff, scoreValuesPerBlockIsCustom, getExportFile, exportFileIsOff, exportFileIsOn, getTextboxAutogrow, textboxAutogrowIsOff, textboxAutogrowIsOn, getCheckboxSelections, checkboxSelectionsIsTotalCorrect, checkboxSelectionsIsAll, getRepeatAnswers, repeatAnswersIsAllow, repeatAnswersIsPrevent, getFreeDragLocation, freeDragLocationIsOff, freeDragLocationIsBetweenWords, freeDragLocationIsBetweenLetters, getPoolStacks, poolStacksIsOff, poolStacksIs1, poolStacksIs2, poolStacksIs3, poolStacksIs4, getAudioInGap, audioInGapIsOff, audioInGapIsOn, getOrderDependency, orderDependencyIsOff, orderDependencyIsFirstAnswer, orderDependencyIsOn, getGapResize, gapResizeIsOff, gapResizeIsOn, getScoreCalculation, scoreCalculationIsOnlyCorrect, scoreCalculationIsSubtractIncorrect, getPoolOrder, poolOrderIsOff, poolOrderIsAlphabetical, poolOrderIsNatural, getAutomaticCapitalisation, automaticCapitalisationIsOff, automaticCapitalisationIsOn, getMarkingStyle, markingStyleIsHighlight, markingStyleIsCircle, markingStyleIsUnderline, getContainerStyle, containerStyleIsNormal, containerStyleIsCustom, getAnswerDisplay, answerDisplayIsColumns, answerDisplayIsRows, getLinkBehaviour, linkBehaviourIsDrag, linkBehaviourIsTouch, getRestoreLoState, restoreLoStateIsOn, restoreLoStateIsOff, getWikiTool, wikiToolIsOff, wikiToolIsOn, getOperator, operatorIsAddition, operatorIsMultiplication, getGapCharacters, gapCharactersIsDontshow, gapCharactersIsShow, getLayers, layersIs2, layersIs3, layersIs4, layersIs5, layersIs6, getTeamScoring, teamScoringIsOff, teamScoringIsOn, getReferenceContent, referenceContentIsOff, referenceContentIs1, referenceContentIs2, getAlternativeText, alternativeTextIsOff, alternativeTextIsAlt1, alternativeTextIsAlt2, alternativeTextIsAlt3, getAudioPlayback, audioPlaybackIsAuto, audioPlaybackIsManual, audioPlaybackIsBeforeCardFlip, getLoTitleDisplay, loTitleDisplayIsOn, loTitleDisplayIsOff, getActivityTitleDisplay, activityTitleDisplayIsOn, activityTitleDisplayIsOff, getNumberColumns, numberColumnsIs3, numberColumnsIs4, numberColumnsIs5, getAutomaticPlay, automaticPlayIsOff, automaticPlayIsOn, automaticPlayIsOnMagnify, getShuffleControl, shuffleControlIsOff, shuffleControlIsOn, getAdditionalImageControl, additionalImageControlIsOff, additionalImageControlIsOn, getAudioIconBehaviour, audioIconBehaviourIsStop, audioIconBehaviourIsPause, getUserSelection, userSelectionIsOff, userSelectionIsSelectForCorrect, userSelectionIsSelectForError, getLoFullscreenButton, loFullscreenButtonIsOff, loFullscreenButtonIsOn, getUserVisibility, userVisibilityIsAll, userVisibilityIsTeacher, userVisibilityIsStudent, getCluesInColumns, cluesInColumnsIsOff, cluesInColumnsIsOn, getTryAgainBehaviour, tryAgainBehaviourIsButton, tryAgainBehaviourIsAutomatic, tryAgainBehaviourIsAutomaticAfterTime, getSeeAllAnswers, seeAllAnswersIsOff, seeAllAnswersIsOn, getSeeNextAnswer, seeNextAnswerIsOff, seeNextAnswerIsOn, getNavigationMenu, navigationMenuIsOff, navigationMenuIsAuto, navigationMenuIsCustom, getDisplaySettings, displaySettingsIsOff, displaySettingsIsOn, getResourceBanks, resourceBanksIsOff, resourceBanksIsOn, getTtsGeneralRules, ttsGeneralRulesIsOff, ttsGeneralRulesIsOn, getTtsLoRules, ttsLoRulesIsOff, ttsLoRulesIsOn, getTtsActivityRules, ttsActivityRulesIsOff, ttsActivityRulesIsOn, getActivityHelp, activityHelpIsOff, activityHelpIsOn, getFeedbackCorrect, feedbackCorrectIsNo, feedbackCorrectIsCustom, getFeedbackIncorrect, feedbackIncorrectIsNo, feedbackIncorrectIsCustom, getTargetImage, targetImageIsCustom, getTargetGeneratorImage, targetGeneratorImageIsCustom, getTargetGeneratorLocation, targetGeneratorLocationIsBottomRight, targetGeneratorLocationIsBottomLeft, targetGeneratorLocationIsTopRight, targetGeneratorLocationIsTopLeft, getSelectedTargetImage, selectedTargetImageIsCustom, getBackgroundImage, backgroundImageIsCustom, getScoreboard, scoreboardIsOff, scoreboardIsOn, getCountdownTimer, countdownTimerIsOff, countdownTimerIsOn, getMaximumDuration, maximumDurationIsOff, maximumDurationIsCustom, getMaximumItems, maximumItemsIsOff, maximumItemsIsCustom, getMovementSpeed, movementSpeedIsSlow, movementSpeedIsMedium, movementSpeedIsFast, getGenerationSpeed, generationSpeedIsSlow, generationSpeedIsMedium, generationSpeedIsFast, getGameOverMessage, gameOverMessageIsCustom, getSolutionHint, solutionHintIsOff, solutionHintIsOn, getIgnoreSpaces, ignoreSpacesIsOff, ignoreSpacesIsOn, getNumberInput, numberInputIsAny, numberInputIsNatural, numberInputIsInteger, getCopyrightInformation, copyrightInformationIsOff, copyrightInformationIsOn, getTargetOnscreenDuration, targetOnscreenDurationIsOff, targetOnscreenDurationIsCustom, getOnlineCheck, onlineCheckIsOff, onlineCheckIsOn, getSignalTargets, signalTargetsIsOff, signalTargetsIsOn, getCheckAnswersInstant, checkAnswersInstantIsOff, checkAnswersInstantIsOn, checkAnswersInstantIsAutomatic, getValidateDependentGaps, validateDependentGapsIsOff, validateDependentGapsIsOn, getPlayAll, playAllIsOff, playAllIsOn, getDownloadAudio, downloadAudioIsOff, downloadAudioIsOn, getHideLines, hideLinesIsOff, hideLinesIsOn, getGapfillBehaviour, gapfillBehaviourIsDrag, gapfillBehaviourIsTapItem, gapfillBehaviourIsTapTarget, gapfillBehaviourIsTapSwap, getGroupHeadings, groupHeadingsIsOff, groupHeadingsIsCustom, getDisplayAsCompleted, displayAsCompletedIsOff, displayAsCompletedIsOn, getOriginOfTargets, originOfTargetsIsDefault, originOfTargetsIsCustom, getTranslationBlock, translationBlockIsOff, translationBlockIsOn, getFlashFirstAnswer, flashFirstAnswerIsOff, flashFirstAnswerIsOn, getSetUserRole, setUserRoleIsFree, setUserRoleIsRole1, setUserRoleIsRole2, getScoreRounding, scoreRoundingIsFloat, scoreRoundingIsRoundup, scoreRoundingIsRound, scoreRoundingIsRounddown, getNextButtonText, nextButtonTextIsDefault, nextButtonTextIsCustom, getCheckAnswersDisplay, checkAnswersDisplayIsMarkingAndFeedback, checkAnswersDisplayIsMarkingOnly, getOriginalAudioPlayback, originalAudioPlaybackIsBothRoles, originalAudioPlaybackIsNonSelectedRoleOnly, getNumberOfChances, numberOfChancesIs1, numberOfChancesIs2, numberOfChancesIs3, numberOfChancesIs4, numberOfChancesIs5, getKeyboardDisplay, keyboardDisplayIsOff, keyboardDisplayIsOn, getRevealSolution, revealSolutionIsAfterFinalChance, revealSolutionIsWithButton, getHangmanTimer, hangmanTimerIsOff, hangmanTimerIsCustom, getInstructionPopUp, instructionPopUpIsOff, instructionPopUpIsOn, getResetWholeLo, resetWholeLoIsOff, resetWholeLoIsOn, getShowNextLo, showNextLoIsOff, showNextLoIsOn, getShowPreviousLo, showPreviousLoIsOff, showPreviousLoIsOn, getLoNotesArea, loNotesAreaIsOff, loNotesAreaIsOn, getAudioSpeed, audioSpeedIsOff, audioSpeedIsOn, getScorm2004AbsoluteValues, scorm2004AbsoluteValuesIsOff, scorm2004AbsoluteValuesIsOn, getHighlightSelection, highlightSelectionIsWords, highlightSelectionIsLetters, getDisplayRecordingTest, displayRecordingTestIsOff, displayRecordingTestIsOn, getEndResultsButton, endResultsButtonIsEvery, endResultsButtonIsLast, getTimeSpentInSections, timeSpentInSectionsIsOff, timeSpentInSectionsIsOn, getNumberOfTeams, numberOfTeamsIs1, numberOfTeamsIs2, numberOfTeamsIs3, numberOfTeamsIs4, getNumberOfCategories, numberOfCategoriesIsOff, numberOfCategoriesIs1, numberOfCategoriesIs2, numberOfCategoriesIs3, numberOfCategoriesIs4, numberOfCategoriesIs5, numberOfCategoriesIs6, numberOfCategoriesIs7, numberOfCategoriesIs8, numberOfCategoriesIs9, getNumberOfQuestions, numberOfQuestionsIsOff, numberOfQuestionsIs1, numberOfQuestionsIs2, numberOfQuestionsIs3, numberOfQuestionsIs4, numberOfQuestionsIs5, numberOfQuestionsIs6, numberOfQuestionsIs7, numberOfQuestionsIs8, numberOfQuestionsIs9, getSkip, skipIsOff, skipIsOn, getRestartGame, restartGameIsOff, restartGameIsOn, getNewGame, newGameIsOff, newGameIsOn, getCloseAfterSubmit, closeAfterSubmitIsOff, closeAfterSubmitIsOn, getPracticeScreen, practiceScreenIsOff, practiceScreenIsOn, getMediaPlaybackLimit, mediaPlaybackLimitIsOff, mediaPlaybackLimitIs1, mediaPlaybackLimitIs2, mediaPlaybackLimitIs3, mediaPlaybackLimitIs4, mediaPlaybackLimitIs5, getTtsLanguage, ttsLanguageIsOff, ttsLanguageIsOn, getScorm12AbsoluteValues, scorm12AbsoluteValuesIsOn, scorm12AbsoluteValuesIsOff, getRegressiveScoring, regressiveScoringIsOff, regressiveScoringIsOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDictionary", function() { return getDictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaryIsFalse", function() { return dictionaryIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaryIsTrue", function() { return dictionaryIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotesArea", function() { return getNotesArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notesAreaIsFalse", function() { return notesAreaIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notesAreaIsTrue", function() { return notesAreaIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInteractivePhonemicChart", function() { return getInteractivePhonemicChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactivePhonemicChartIsFalse", function() { return interactivePhonemicChartIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interactivePhonemicChartIsTrue", function() { return interactivePhonemicChartIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevealObject", function() { return getRevealObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsFalse", function() { return revealObjectIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsAll", function() { return revealObjectIsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsProgressive", function() { return revealObjectIsProgressive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealObjectIsProgressiveplushide", function() { return revealObjectIsProgressiveplushide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPinObject", function() { return getPinObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinObjectIsFalse", function() { return pinObjectIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinObjectIsTrue", function() { return pinObjectIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrevious", function() { return getPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousIsTrue", function() { return previousIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousIsFalse", function() { return previousIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousIsAfterSubmitted", function() { return previousIsAfterSubmitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForwardButton", function() { return getForwardButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardButtonIsNext", function() { return forwardButtonIsNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardButtonIsAdaptive", function() { return forwardButtonIsAdaptive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumeration", function() { return getEnumeration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsFalse", function() { return enumerationIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsNumber", function() { return enumerationIsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsNumberNoDot", function() { return enumerationIsNumberNoDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsLetter", function() { return enumerationIsLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsCapitalletter", function() { return enumerationIsCapitalletter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsBullet", function() { return enumerationIsBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationIsCustom", function() { return enumerationIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumerationAnswers", function() { return getEnumerationAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsFalse", function() { return enumerationAnswersIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsNumber", function() { return enumerationAnswersIsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsNumberNoDot", function() { return enumerationAnswersIsNumberNoDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsLetter", function() { return enumerationAnswersIsLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsCapitalletter", function() { return enumerationAnswersIsCapitalletter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsBullet", function() { return enumerationAnswersIsBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationAnswersIsCustom", function() { return enumerationAnswersIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefill", function() { return getPrefill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefillIsFalse", function() { return prefillIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefillIsFirstitem", function() { return prefillIsFirstitem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefillIsFirstblock", function() { return prefillIsFirstblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaptextAudio", function() { return getGaptextAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaptextAudioIsFalse", function() { return gaptextAudioIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaptextAudioIsTrue", function() { return gaptextAudioIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpeakLearnerInput", function() { return getSpeakLearnerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speakLearnerInputIsFalse", function() { return speakLearnerInputIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speakLearnerInputIsTrue", function() { return speakLearnerInputIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedback", function() { return getFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackIsNormal", function() { return feedbackIsNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackIsInstant", function() { return feedbackIsInstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackSoundEffects", function() { return getFeedbackSoundEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackSoundEffectsIsOff", function() { return feedbackSoundEffectsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackSoundEffectsIsCustom", function() { return feedbackSoundEffectsIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSoundEffects", function() { return getSoundEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soundEffectsIsNone", function() { return soundEffectsIsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soundEffectsIsSoundEffects", function() { return soundEffectsIsSoundEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTryAgain", function() { return getTryAgain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsFalse", function() { return tryAgainIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsLock", function() { return tryAgainIsLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsFrozen", function() { return tryAgainIsFrozen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsClear", function() { return tryAgainIsClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainIsKeepall", function() { return tryAgainIsKeepall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreValues", function() { return getScoreValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreValuesIs1PointAction", function() { return scoreValuesIs1PointAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreValuesIs1PointQuestion", function() { return scoreValuesIs1PointQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndResultScreen", function() { return getEndResultScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsFalse", function() { return endResultScreenIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsTrue", function() { return endResultScreenIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultScreenIsButtonAfterScore", function() { return endResultScreenIsButtonAfterScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressBar", function() { return getProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarIsTrue", function() { return progressBarIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarIsFalse", function() { return progressBarIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarIsAuto", function() { return progressBarIsAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarIsScreenSelection", function() { return progressBarIsScreenSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutomaticNext", function() { return getAutomaticNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsFalse", function() { return automaticNextIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsQuestions", function() { return automaticNextIsQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticNextIsTimer", function() { return automaticNextIsTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudioSupport", function() { return getAudioSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioSupportIsFalse", function() { return audioSupportIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioSupportIsTrue", function() { return audioSupportIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrintable", function() { return getPrintable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printableIsFalse", function() { return printableIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printableIsTrue", function() { return printableIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageAsTrigger", function() { return getImageAsTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageAsTriggerIsFalse", function() { return imageAsTriggerIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageAsTriggerIsTrue", function() { return imageAsTriggerIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConserveAnswers", function() { return getConserveAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conserveAnswersIsTrue", function() { return conserveAnswersIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conserveAnswersIsFalse", function() { return conserveAnswersIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddTextObject", function() { return getAddTextObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTextObjectIsFalse", function() { return addTextObjectIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTextObjectIsNormal", function() { return addTextObjectIsNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUseClickClick", function() { return getUseClickClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClickClickIsFalse", function() { return useClickClickIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClickClickIsTrue", function() { return useClickClickIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoolAlignment", function() { return getPoolAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsNone", function() { return poolAlignmentIsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsTop", function() { return poolAlignmentIsTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsBottom", function() { return poolAlignmentIsBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsLeft", function() { return poolAlignmentIsLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsRight", function() { return poolAlignmentIsRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolAlignmentIsFree", function() { return poolAlignmentIsFree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPairAlignment", function() { return getPairAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairAlignmentIsOntop", function() { return pairAlignmentIsOntop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairAlignmentIsHorizontal", function() { return pairAlignmentIsHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairAlignmentIsVertical", function() { return pairAlignmentIsVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaps", function() { return getGaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapsIsVariable", function() { return gapsIsVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapsIsSamelongest", function() { return gapsIsSamelongest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapsIsInvisible", function() { return gapsIsInvisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapsIsFixed", function() { return gapsIsFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSave", function() { return getSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIsOff", function() { return saveIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIsSkinbutton", function() { return saveIsSkinbutton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveIsButtonOnly", function() { return saveIsButtonOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorCorrection", function() { return getErrorCorrection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorCorrectionIsReplace", function() { return errorCorrectionIsReplace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorCorrectionIsLine", function() { return errorCorrectionIsLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorCorrectionIsSentence", function() { return errorCorrectionIsSentence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignalError", function() { return getSignalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalErrorIsOff", function() { return signalErrorIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalErrorIsHighlight", function() { return signalErrorIsHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalErrorIsButtonAfterAttempts", function() { return signalErrorIsButtonAfterAttempts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalErrorIsButton", function() { return signalErrorIsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxLength", function() { return getMaxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLengthIsFalse", function() { return maxLengthIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLengthIsWords", function() { return maxLengthIsWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLengthIsChars", function() { return maxLengthIsChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleDestinations", function() { return getMultipleDestinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipleDestinationsIsOne", function() { return multipleDestinationsIsOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipleDestinationsIsUnlimited", function() { return multipleDestinationsIsUnlimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipleDestinationsIsRestricted", function() { return multipleDestinationsIsRestricted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDropIndicator", function() { return getDropIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropIndicatorIsTrue", function() { return dropIndicatorIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropIndicatorIsFalse", function() { return dropIndicatorIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardBack", function() { return getCardBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardBackIsDefault", function() { return cardBackIsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardBackIsDefaultsets", function() { return cardBackIsDefaultsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardBackIsImage", function() { return cardBackIsImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardBackIsImagesets", function() { return cardBackIsImagesets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardLayout", function() { return getCardLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLayoutIsDefault", function() { return cardLayoutIsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLayoutIsSets", function() { return cardLayoutIsSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardFormat", function() { return getCardFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardFormatIsPortrait", function() { return cardFormatIsPortrait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardFormatIsLandscape", function() { return cardFormatIsLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardFormatIsSquare", function() { return cardFormatIsSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinkingLinesSets", function() { return getLinkingLinesSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkingLinesSetsIsPairs", function() { return linkingLinesSetsIsPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkingLinesSetsIsTriplets", function() { return linkingLinesSetsIsTriplets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkingLinesSetsIsQuadruples", function() { return linkingLinesSetsIsQuadruples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkingLinesSetsIsQuintuples", function() { return linkingLinesSetsIsQuintuples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSize", function() { return getSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeIsDummy", function() { return sizeIsDummy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCase", function() { return getCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseIsUpper", function() { return caseIsUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseIsLower", function() { return caseIsLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStayInView", function() { return getStayInView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stayInViewIsFalse", function() { return stayInViewIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stayInViewIsTrue", function() { return stayInViewIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDragAlignment", function() { return getDragAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragAlignmentIsVertical", function() { return dragAlignmentIsVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragAlignmentIsHorizontal", function() { return dragAlignmentIsHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragAlignmentIsHorizontalSingleWord", function() { return dragAlignmentIsHorizontalSingleWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHideRadiobuttons", function() { return getHideRadiobuttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideRadiobuttonsIsFalse", function() { return hideRadiobuttonsIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideRadiobuttonsIsTrue", function() { return hideRadiobuttonsIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideRadiobuttonsIsCustom", function() { return hideRadiobuttonsIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCluePosition", function() { return getCluePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cluePositionIsInside", function() { return cluePositionIsInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cluePositionIsOutside", function() { return cluePositionIsOutside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChoiceAlignment", function() { return getChoiceAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choiceAlignmentIsVertical", function() { return choiceAlignmentIsVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choiceAlignmentIsHorizontal", function() { return choiceAlignmentIsHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choiceAlignmentIsInline", function() { return choiceAlignmentIsInline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswers", function() { return getCheckAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAlways", function() { return checkAnswersIsAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsFalse", function() { return checkAnswersIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAfterOne", function() { return checkAnswersIsAfterOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsAfterAll", function() { return checkAnswersIsAfterAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersIsBeforeSubmitted", function() { return checkAnswersIsBeforeSubmitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeeAnswers", function() { return getSeeAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsOn", function() { return seeAnswersIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsOff", function() { return seeAnswersIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeAnswersIsBeforeInteraction", function() { return seeAnswersIsBeforeInteraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReset", function() { return getReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIsOn", function() { return resetIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIsOff", function() { return resetIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIsBeforeSubmitted", function() { return resetIsBeforeSubmitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubmissions", function() { return getSubmissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs1", function() { return submissionsIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs2", function() { return submissionsIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs3", function() { return submissionsIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs4", function() { return submissionsIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs5", function() { return submissionsIs5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs6", function() { return submissionsIs6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs7", function() { return submissionsIs7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs8", function() { return submissionsIs8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs9", function() { return submissionsIs9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs10", function() { return submissionsIs10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs11", function() { return submissionsIs11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs12", function() { return submissionsIs12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs13", function() { return submissionsIs13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs14", function() { return submissionsIs14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs15", function() { return submissionsIs15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs16", function() { return submissionsIs16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs17", function() { return submissionsIs17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs18", function() { return submissionsIs18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs19", function() { return submissionsIs19; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIs20", function() { return submissionsIs20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submissionsIsUnlimited", function() { return submissionsIsUnlimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunningScore", function() { return getRunningScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runningScoreIsFalse", function() { return runningScoreIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runningScoreIsTrue", function() { return runningScoreIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowHints", function() { return getShowHints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHintsIsOff", function() { return showHintsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHintsIsAlways", function() { return showHintsIsAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHintsIsCheckScore", function() { return showHintsIsCheckScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHints", function() { return getHints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDelayedFeedback", function() { return getDelayedFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsFalse", function() { return delayedFeedbackIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsTrue", function() { return delayedFeedbackIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayedFeedbackIsCustom", function() { return delayedFeedbackIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaseInsensitive", function() { return getCaseInsensitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveIsFalse", function() { return caseInsensitiveIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveIsTrue", function() { return caseInsensitiveIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIgnorePunctuation", function() { return getIgnorePunctuation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignorePunctuationIsFalse", function() { return ignorePunctuationIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignorePunctuationIsTrue", function() { return ignorePunctuationIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomiseAnswers", function() { return getRandomiseAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomiseAnswersIsTrue", function() { return randomiseAnswersIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomiseAnswersIsFalse", function() { return randomiseAnswersIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardPerRow", function() { return getCardPerRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardPerRowIsCards", function() { return cardPerRowIsCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHideCheckboxes", function() { return getHideCheckboxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideCheckboxesIsFalse", function() { return hideCheckboxesIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideCheckboxesIsTrue", function() { return hideCheckboxesIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowSubmit", function() { return getShowSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAlways", function() { return showSubmitIsAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsOff", function() { return showSubmitIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAfterOne", function() { return showSubmitIsAfterOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsAfterAll", function() { return showSubmitIsAfterAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSubmitIsEachScreen", function() { return showSubmitIsEachScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFinishSubmit", function() { return getFinishSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishSubmitIsOff", function() { return finishSubmitIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishSubmitIsOn", function() { return finishSubmitIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowForward", function() { return getShowForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAlways", function() { return showForwardIsAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsOff", function() { return showForwardIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterOne", function() { return showForwardIsAfterOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterSubmitted", function() { return showForwardIsAfterSubmitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterAll", function() { return showForwardIsAfterAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterCheckAnswers", function() { return showForwardIsAfterCheckAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showForwardIsAfterSeeAnswers", function() { return showForwardIsAfterSeeAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetZones", function() { return getTargetZones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetZonesIsFalse", function() { return targetZonesIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetZonesIsTrue", function() { return targetZonesIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationMessage", function() { return getValidationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationMessageIsFalse", function() { return validationMessageIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationMessageIsCustom", function() { return validationMessageIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutosave", function() { return getAutosave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autosaveIsOn", function() { return autosaveIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autosaveIsOff", function() { return autosaveIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntroScreen", function() { return getIntroScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introScreenIsOff", function() { return introScreenIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introScreenIsOn", function() { return introScreenIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManualMarking", function() { return getManualMarking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manualMarkingIsOff", function() { return manualMarkingIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manualMarkingIsOn", function() { return manualMarkingIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand1", function() { return getFeedbackBand1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand1IsFalse", function() { return feedbackBand1IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand1IsCustom", function() { return feedbackBand1IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand2", function() { return getFeedbackBand2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand2IsFalse", function() { return feedbackBand2IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand2IsCustom", function() { return feedbackBand2IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand3", function() { return getFeedbackBand3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand3IsFalse", function() { return feedbackBand3IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand3IsCustom", function() { return feedbackBand3IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackBand4", function() { return getFeedbackBand4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand4IsFalse", function() { return feedbackBand4IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackBand4IsCustom", function() { return feedbackBand4IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialCharactersStudent", function() { return getSpecialCharactersStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand1", function() { return getActivityFeedbackBand1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand1IsFalse", function() { return activityFeedbackBand1IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand1IsCustom", function() { return activityFeedbackBand1IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand2", function() { return getActivityFeedbackBand2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand2IsFalse", function() { return activityFeedbackBand2IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand2IsCustom", function() { return activityFeedbackBand2IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand3", function() { return getActivityFeedbackBand3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand3IsFalse", function() { return activityFeedbackBand3IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand3IsCustom", function() { return activityFeedbackBand3IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackBand4", function() { return getActivityFeedbackBand4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand4IsFalse", function() { return activityFeedbackBand4IsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackBand4IsCustom", function() { return activityFeedbackBand4IsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityFeedbackThresholds", function() { return getActivityFeedbackThresholds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedbackThresholdsIsCustom", function() { return activityFeedbackThresholdsIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpellcheck", function() { return getSpellcheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spellcheckIsOff", function() { return spellcheckIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spellcheckIsOn", function() { return spellcheckIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowInColumns", function() { return getShowInColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInColumnsIsFalse", function() { return showInColumnsIsFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInColumnsIsTrue", function() { return showInColumnsIsTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIgnoreAccents", function() { return getIgnoreAccents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreAccentsIsOff", function() { return ignoreAccentsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreAccentsIsOn", function() { return ignoreAccentsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraser", function() { return getEraser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eraserIsOff", function() { return eraserIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eraserIsOn", function() { return eraserIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnotationTools", function() { return getAnnotationTools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOff", function() { return annotationToolsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOn", function() { return annotationToolsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOnlyForTeachers", function() { return annotationToolsIsOnlyForTeachers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annotationToolsIsOnlySupplements", function() { return annotationToolsIsOnlySupplements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowInfoText", function() { return getShowInfoText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsOff", function() { return showInfoTextIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsTooltip", function() { return showInfoTextIsTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfoTextIsDialog", function() { return showInfoTextIsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestionPool", function() { return getQuestionPool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionPoolIsNo", function() { return questionPoolIsNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionPoolIsYes", function() { return questionPoolIsYes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContinuousEnumeration", function() { return getContinuousEnumeration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousEnumerationIsOff", function() { return continuousEnumerationIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousEnumerationIsOn", function() { return continuousEnumerationIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoSections", function() { return getLoSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestionDisplay", function() { return getQuestionDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionDisplayIsAll", function() { return questionDisplayIsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionDisplayIsActive", function() { return questionDisplayIsActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionDisplayIsShowNext", function() { return questionDisplayIsShowNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionDisplayIsShowNextAndHidePrevious", function() { return questionDisplayIsShowNextAndHidePrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndResultAlways", function() { return getEndResultAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsOff", function() { return endResultAlwaysIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsOn", function() { return endResultAlwaysIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultAlwaysIsButtonAfterScore", function() { return endResultAlwaysIsButtonAfterScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExamsTimer", function() { return getExamsTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examsTimerIsOff", function() { return examsTimerIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examsTimerIsOn", function() { return examsTimerIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumerationInternal", function() { return getEnumerationInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationInternalIsAll", function() { return enumerationInternalIsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerationInternalIsCorrect", function() { return enumerationInternalIsCorrect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityPool", function() { return getActivityPool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsOff", function() { return activityPoolIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsOn", function() { return activityPoolIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityPoolIsRandomiseAll", function() { return activityPoolIsRandomiseAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckMaxAttempts", function() { return getCheckMaxAttempts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSendScores", function() { return getSendScores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsOff", function() { return sendScoresIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsUnlimited", function() { return sendScoresIsUnlimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendScoresIs1Submission", function() { return sendScoresIs1Submission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendScoresIsFinalCheckAnswers", function() { return sendScoresIsFinalCheckAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesignPackSubstyle", function() { return getDesignPackSubstyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designPackSubstyleIsOff", function() { return designPackSubstyleIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designPackSubstyleIsOn", function() { return designPackSubstyleIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndResultsReturn", function() { return getEndResultsReturn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultsReturnIsLast", function() { return endResultsReturnIsLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultsReturnIsFirst", function() { return endResultsReturnIsFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreValuesPerBlock", function() { return getScoreValuesPerBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreValuesPerBlockIsOff", function() { return scoreValuesPerBlockIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreValuesPerBlockIsCustom", function() { return scoreValuesPerBlockIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExportFile", function() { return getExportFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportFileIsOff", function() { return exportFileIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportFileIsOn", function() { return exportFileIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextboxAutogrow", function() { return getTextboxAutogrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textboxAutogrowIsOff", function() { return textboxAutogrowIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textboxAutogrowIsOn", function() { return textboxAutogrowIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckboxSelections", function() { return getCheckboxSelections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxSelectionsIsTotalCorrect", function() { return checkboxSelectionsIsTotalCorrect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxSelectionsIsAll", function() { return checkboxSelectionsIsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepeatAnswers", function() { return getRepeatAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatAnswersIsAllow", function() { return repeatAnswersIsAllow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatAnswersIsPrevent", function() { return repeatAnswersIsPrevent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFreeDragLocation", function() { return getFreeDragLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeDragLocationIsOff", function() { return freeDragLocationIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeDragLocationIsBetweenWords", function() { return freeDragLocationIsBetweenWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeDragLocationIsBetweenLetters", function() { return freeDragLocationIsBetweenLetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoolStacks", function() { return getPoolStacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolStacksIsOff", function() { return poolStacksIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolStacksIs1", function() { return poolStacksIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolStacksIs2", function() { return poolStacksIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolStacksIs3", function() { return poolStacksIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolStacksIs4", function() { return poolStacksIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudioInGap", function() { return getAudioInGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioInGapIsOff", function() { return audioInGapIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioInGapIsOn", function() { return audioInGapIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderDependency", function() { return getOrderDependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderDependencyIsOff", function() { return orderDependencyIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderDependencyIsFirstAnswer", function() { return orderDependencyIsFirstAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderDependencyIsOn", function() { return orderDependencyIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGapResize", function() { return getGapResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapResizeIsOff", function() { return gapResizeIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapResizeIsOn", function() { return gapResizeIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreCalculation", function() { return getScoreCalculation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreCalculationIsOnlyCorrect", function() { return scoreCalculationIsOnlyCorrect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreCalculationIsSubtractIncorrect", function() { return scoreCalculationIsSubtractIncorrect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoolOrder", function() { return getPoolOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolOrderIsOff", function() { return poolOrderIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolOrderIsAlphabetical", function() { return poolOrderIsAlphabetical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolOrderIsNatural", function() { return poolOrderIsNatural; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutomaticCapitalisation", function() { return getAutomaticCapitalisation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticCapitalisationIsOff", function() { return automaticCapitalisationIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticCapitalisationIsOn", function() { return automaticCapitalisationIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkingStyle", function() { return getMarkingStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markingStyleIsHighlight", function() { return markingStyleIsHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markingStyleIsCircle", function() { return markingStyleIsCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markingStyleIsUnderline", function() { return markingStyleIsUnderline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainerStyle", function() { return getContainerStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerStyleIsNormal", function() { return containerStyleIsNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerStyleIsCustom", function() { return containerStyleIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnswerDisplay", function() { return getAnswerDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answerDisplayIsColumns", function() { return answerDisplayIsColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answerDisplayIsRows", function() { return answerDisplayIsRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinkBehaviour", function() { return getLinkBehaviour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkBehaviourIsDrag", function() { return linkBehaviourIsDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkBehaviourIsTouch", function() { return linkBehaviourIsTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRestoreLoState", function() { return getRestoreLoState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreLoStateIsOn", function() { return restoreLoStateIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreLoStateIsOff", function() { return restoreLoStateIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWikiTool", function() { return getWikiTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wikiToolIsOff", function() { return wikiToolIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wikiToolIsOn", function() { return wikiToolIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperator", function() { return getOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorIsAddition", function() { return operatorIsAddition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorIsMultiplication", function() { return operatorIsMultiplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGapCharacters", function() { return getGapCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapCharactersIsDontshow", function() { return gapCharactersIsDontshow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapCharactersIsShow", function() { return gapCharactersIsShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayers", function() { return getLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layersIs2", function() { return layersIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layersIs3", function() { return layersIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layersIs4", function() { return layersIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layersIs5", function() { return layersIs5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layersIs6", function() { return layersIs6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTeamScoring", function() { return getTeamScoring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamScoringIsOff", function() { return teamScoringIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamScoringIsOn", function() { return teamScoringIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReferenceContent", function() { return getReferenceContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referenceContentIsOff", function() { return referenceContentIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referenceContentIs1", function() { return referenceContentIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referenceContentIs2", function() { return referenceContentIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlternativeText", function() { return getAlternativeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsOff", function() { return alternativeTextIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt1", function() { return alternativeTextIsAlt1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt2", function() { return alternativeTextIsAlt2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alternativeTextIsAlt3", function() { return alternativeTextIsAlt3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudioPlayback", function() { return getAudioPlayback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioPlaybackIsAuto", function() { return audioPlaybackIsAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioPlaybackIsManual", function() { return audioPlaybackIsManual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioPlaybackIsBeforeCardFlip", function() { return audioPlaybackIsBeforeCardFlip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoTitleDisplay", function() { return getLoTitleDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loTitleDisplayIsOn", function() { return loTitleDisplayIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loTitleDisplayIsOff", function() { return loTitleDisplayIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityTitleDisplay", function() { return getActivityTitleDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityTitleDisplayIsOn", function() { return activityTitleDisplayIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityTitleDisplayIsOff", function() { return activityTitleDisplayIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberColumns", function() { return getNumberColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberColumnsIs3", function() { return numberColumnsIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberColumnsIs4", function() { return numberColumnsIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberColumnsIs5", function() { return numberColumnsIs5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutomaticPlay", function() { return getAutomaticPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticPlayIsOff", function() { return automaticPlayIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticPlayIsOn", function() { return automaticPlayIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automaticPlayIsOnMagnify", function() { return automaticPlayIsOnMagnify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShuffleControl", function() { return getShuffleControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleControlIsOff", function() { return shuffleControlIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleControlIsOn", function() { return shuffleControlIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdditionalImageControl", function() { return getAdditionalImageControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "additionalImageControlIsOff", function() { return additionalImageControlIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "additionalImageControlIsOn", function() { return additionalImageControlIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudioIconBehaviour", function() { return getAudioIconBehaviour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioIconBehaviourIsStop", function() { return audioIconBehaviourIsStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioIconBehaviourIsPause", function() { return audioIconBehaviourIsPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserSelection", function() { return getUserSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSelectionIsOff", function() { return userSelectionIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSelectionIsSelectForCorrect", function() { return userSelectionIsSelectForCorrect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSelectionIsSelectForError", function() { return userSelectionIsSelectForError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoFullscreenButton", function() { return getLoFullscreenButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loFullscreenButtonIsOff", function() { return loFullscreenButtonIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loFullscreenButtonIsOn", function() { return loFullscreenButtonIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserVisibility", function() { return getUserVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsAll", function() { return userVisibilityIsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsTeacher", function() { return userVisibilityIsTeacher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userVisibilityIsStudent", function() { return userVisibilityIsStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCluesInColumns", function() { return getCluesInColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cluesInColumnsIsOff", function() { return cluesInColumnsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cluesInColumnsIsOn", function() { return cluesInColumnsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTryAgainBehaviour", function() { return getTryAgainBehaviour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsButton", function() { return tryAgainBehaviourIsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsAutomatic", function() { return tryAgainBehaviourIsAutomatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryAgainBehaviourIsAutomaticAfterTime", function() { return tryAgainBehaviourIsAutomaticAfterTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeeAllAnswers", function() { return getSeeAllAnswers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeAllAnswersIsOff", function() { return seeAllAnswersIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeAllAnswersIsOn", function() { return seeAllAnswersIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeeNextAnswer", function() { return getSeeNextAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeNextAnswerIsOff", function() { return seeNextAnswerIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeNextAnswerIsOn", function() { return seeNextAnswerIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavigationMenu", function() { return getNavigationMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsOff", function() { return navigationMenuIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsAuto", function() { return navigationMenuIsAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationMenuIsCustom", function() { return navigationMenuIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplaySettings", function() { return getDisplaySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaySettingsIsOff", function() { return displaySettingsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaySettingsIsOn", function() { return displaySettingsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceBanks", function() { return getResourceBanks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceBanksIsOff", function() { return resourceBanksIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceBanksIsOn", function() { return resourceBanksIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTtsGeneralRules", function() { return getTtsGeneralRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsGeneralRulesIsOff", function() { return ttsGeneralRulesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsGeneralRulesIsOn", function() { return ttsGeneralRulesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTtsLoRules", function() { return getTtsLoRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsLoRulesIsOff", function() { return ttsLoRulesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsLoRulesIsOn", function() { return ttsLoRulesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTtsActivityRules", function() { return getTtsActivityRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsActivityRulesIsOff", function() { return ttsActivityRulesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsActivityRulesIsOn", function() { return ttsActivityRulesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityHelp", function() { return getActivityHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityHelpIsOff", function() { return activityHelpIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityHelpIsOn", function() { return activityHelpIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackCorrect", function() { return getFeedbackCorrect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackCorrectIsNo", function() { return feedbackCorrectIsNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackCorrectIsCustom", function() { return feedbackCorrectIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedbackIncorrect", function() { return getFeedbackIncorrect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackIncorrectIsNo", function() { return feedbackIncorrectIsNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackIncorrectIsCustom", function() { return feedbackIncorrectIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetImage", function() { return getTargetImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetImageIsCustom", function() { return targetImageIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetGeneratorImage", function() { return getTargetGeneratorImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorImageIsCustom", function() { return targetGeneratorImageIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetGeneratorLocation", function() { return getTargetGeneratorLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorLocationIsBottomRight", function() { return targetGeneratorLocationIsBottomRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorLocationIsBottomLeft", function() { return targetGeneratorLocationIsBottomLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorLocationIsTopRight", function() { return targetGeneratorLocationIsTopRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetGeneratorLocationIsTopLeft", function() { return targetGeneratorLocationIsTopLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTargetImage", function() { return getSelectedTargetImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedTargetImageIsCustom", function() { return selectedTargetImageIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundImage", function() { return getBackgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImageIsCustom", function() { return backgroundImageIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreboard", function() { return getScoreboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreboardIsOff", function() { return scoreboardIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreboardIsOn", function() { return scoreboardIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountdownTimer", function() { return getCountdownTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countdownTimerIsOff", function() { return countdownTimerIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countdownTimerIsOn", function() { return countdownTimerIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaximumDuration", function() { return getMaximumDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumDurationIsOff", function() { return maximumDurationIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumDurationIsCustom", function() { return maximumDurationIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaximumItems", function() { return getMaximumItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumItemsIsOff", function() { return maximumItemsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumItemsIsCustom", function() { return maximumItemsIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovementSpeed", function() { return getMovementSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movementSpeedIsSlow", function() { return movementSpeedIsSlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movementSpeedIsMedium", function() { return movementSpeedIsMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movementSpeedIsFast", function() { return movementSpeedIsFast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenerationSpeed", function() { return getGenerationSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generationSpeedIsSlow", function() { return generationSpeedIsSlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generationSpeedIsMedium", function() { return generationSpeedIsMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generationSpeedIsFast", function() { return generationSpeedIsFast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameOverMessage", function() { return getGameOverMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOverMessageIsCustom", function() { return gameOverMessageIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSolutionHint", function() { return getSolutionHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solutionHintIsOff", function() { return solutionHintIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solutionHintIsOn", function() { return solutionHintIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIgnoreSpaces", function() { return getIgnoreSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreSpacesIsOff", function() { return ignoreSpacesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreSpacesIsOn", function() { return ignoreSpacesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberInput", function() { return getNumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberInputIsAny", function() { return numberInputIsAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberInputIsNatural", function() { return numberInputIsNatural; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberInputIsInteger", function() { return numberInputIsInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCopyrightInformation", function() { return getCopyrightInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyrightInformationIsOff", function() { return copyrightInformationIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyrightInformationIsOn", function() { return copyrightInformationIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetOnscreenDuration", function() { return getTargetOnscreenDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetOnscreenDurationIsOff", function() { return targetOnscreenDurationIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetOnscreenDurationIsCustom", function() { return targetOnscreenDurationIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOnlineCheck", function() { return getOnlineCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlineCheckIsOff", function() { return onlineCheckIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlineCheckIsOn", function() { return onlineCheckIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignalTargets", function() { return getSignalTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalTargetsIsOff", function() { return signalTargetsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalTargetsIsOn", function() { return signalTargetsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswersInstant", function() { return getCheckAnswersInstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsOff", function() { return checkAnswersInstantIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsOn", function() { return checkAnswersInstantIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersInstantIsAutomatic", function() { return checkAnswersInstantIsAutomatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidateDependentGaps", function() { return getValidateDependentGaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDependentGapsIsOff", function() { return validateDependentGapsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDependentGapsIsOn", function() { return validateDependentGapsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayAll", function() { return getPlayAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAllIsOff", function() { return playAllIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAllIsOn", function() { return playAllIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownloadAudio", function() { return getDownloadAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadAudioIsOff", function() { return downloadAudioIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadAudioIsOn", function() { return downloadAudioIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHideLines", function() { return getHideLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLinesIsOff", function() { return hideLinesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLinesIsOn", function() { return hideLinesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGapfillBehaviour", function() { return getGapfillBehaviour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapfillBehaviourIsDrag", function() { return gapfillBehaviourIsDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapfillBehaviourIsTapItem", function() { return gapfillBehaviourIsTapItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapfillBehaviourIsTapTarget", function() { return gapfillBehaviourIsTapTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapfillBehaviourIsTapSwap", function() { return gapfillBehaviourIsTapSwap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupHeadings", function() { return getGroupHeadings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupHeadingsIsOff", function() { return groupHeadingsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupHeadingsIsCustom", function() { return groupHeadingsIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayAsCompleted", function() { return getDisplayAsCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayAsCompletedIsOff", function() { return displayAsCompletedIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayAsCompletedIsOn", function() { return displayAsCompletedIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginOfTargets", function() { return getOriginOfTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originOfTargetsIsDefault", function() { return originOfTargetsIsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originOfTargetsIsCustom", function() { return originOfTargetsIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslationBlock", function() { return getTranslationBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translationBlockIsOff", function() { return translationBlockIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translationBlockIsOn", function() { return translationBlockIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlashFirstAnswer", function() { return getFlashFirstAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashFirstAnswerIsOff", function() { return flashFirstAnswerIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashFirstAnswerIsOn", function() { return flashFirstAnswerIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetUserRole", function() { return getSetUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserRoleIsFree", function() { return setUserRoleIsFree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserRoleIsRole1", function() { return setUserRoleIsRole1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserRoleIsRole2", function() { return setUserRoleIsRole2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScoreRounding", function() { return getScoreRounding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsFloat", function() { return scoreRoundingIsFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRoundup", function() { return scoreRoundingIsRoundup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRound", function() { return scoreRoundingIsRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreRoundingIsRounddown", function() { return scoreRoundingIsRounddown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextButtonText", function() { return getNextButtonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextButtonTextIsDefault", function() { return nextButtonTextIsDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextButtonTextIsCustom", function() { return nextButtonTextIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckAnswersDisplay", function() { return getCheckAnswersDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersDisplayIsMarkingAndFeedback", function() { return checkAnswersDisplayIsMarkingAndFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswersDisplayIsMarkingOnly", function() { return checkAnswersDisplayIsMarkingOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginalAudioPlayback", function() { return getOriginalAudioPlayback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originalAudioPlaybackIsBothRoles", function() { return originalAudioPlaybackIsBothRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originalAudioPlaybackIsNonSelectedRoleOnly", function() { return originalAudioPlaybackIsNonSelectedRoleOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOfChances", function() { return getNumberOfChances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs1", function() { return numberOfChancesIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs2", function() { return numberOfChancesIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs3", function() { return numberOfChancesIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs4", function() { return numberOfChancesIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfChancesIs5", function() { return numberOfChancesIs5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyboardDisplay", function() { return getKeyboardDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardDisplayIsOff", function() { return keyboardDisplayIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardDisplayIsOn", function() { return keyboardDisplayIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevealSolution", function() { return getRevealSolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealSolutionIsAfterFinalChance", function() { return revealSolutionIsAfterFinalChance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealSolutionIsWithButton", function() { return revealSolutionIsWithButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHangmanTimer", function() { return getHangmanTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hangmanTimerIsOff", function() { return hangmanTimerIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hangmanTimerIsCustom", function() { return hangmanTimerIsCustom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstructionPopUp", function() { return getInstructionPopUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instructionPopUpIsOff", function() { return instructionPopUpIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instructionPopUpIsOn", function() { return instructionPopUpIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResetWholeLo", function() { return getResetWholeLo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetWholeLoIsOff", function() { return resetWholeLoIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetWholeLoIsOn", function() { return resetWholeLoIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowNextLo", function() { return getShowNextLo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNextLoIsOff", function() { return showNextLoIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNextLoIsOn", function() { return showNextLoIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowPreviousLo", function() { return getShowPreviousLo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPreviousLoIsOff", function() { return showPreviousLoIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPreviousLoIsOn", function() { return showPreviousLoIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoNotesArea", function() { return getLoNotesArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loNotesAreaIsOff", function() { return loNotesAreaIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loNotesAreaIsOn", function() { return loNotesAreaIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudioSpeed", function() { return getAudioSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioSpeedIsOff", function() { return audioSpeedIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioSpeedIsOn", function() { return audioSpeedIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScorm2004AbsoluteValues", function() { return getScorm2004AbsoluteValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorm2004AbsoluteValuesIsOff", function() { return scorm2004AbsoluteValuesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorm2004AbsoluteValuesIsOn", function() { return scorm2004AbsoluteValuesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighlightSelection", function() { return getHighlightSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightSelectionIsWords", function() { return highlightSelectionIsWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightSelectionIsLetters", function() { return highlightSelectionIsLetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayRecordingTest", function() { return getDisplayRecordingTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayRecordingTestIsOff", function() { return displayRecordingTestIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayRecordingTestIsOn", function() { return displayRecordingTestIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndResultsButton", function() { return getEndResultsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultsButtonIsEvery", function() { return endResultsButtonIsEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endResultsButtonIsLast", function() { return endResultsButtonIsLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeSpentInSections", function() { return getTimeSpentInSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeSpentInSectionsIsOff", function() { return timeSpentInSectionsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeSpentInSectionsIsOn", function() { return timeSpentInSectionsIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOfTeams", function() { return getNumberOfTeams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfTeamsIs1", function() { return numberOfTeamsIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfTeamsIs2", function() { return numberOfTeamsIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfTeamsIs3", function() { return numberOfTeamsIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfTeamsIs4", function() { return numberOfTeamsIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOfCategories", function() { return getNumberOfCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIsOff", function() { return numberOfCategoriesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs1", function() { return numberOfCategoriesIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs2", function() { return numberOfCategoriesIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs3", function() { return numberOfCategoriesIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs4", function() { return numberOfCategoriesIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs5", function() { return numberOfCategoriesIs5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs6", function() { return numberOfCategoriesIs6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs7", function() { return numberOfCategoriesIs7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs8", function() { return numberOfCategoriesIs8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCategoriesIs9", function() { return numberOfCategoriesIs9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOfQuestions", function() { return getNumberOfQuestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIsOff", function() { return numberOfQuestionsIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs1", function() { return numberOfQuestionsIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs2", function() { return numberOfQuestionsIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs3", function() { return numberOfQuestionsIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs4", function() { return numberOfQuestionsIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs5", function() { return numberOfQuestionsIs5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs6", function() { return numberOfQuestionsIs6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs7", function() { return numberOfQuestionsIs7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs8", function() { return numberOfQuestionsIs8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfQuestionsIs9", function() { return numberOfQuestionsIs9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkip", function() { return getSkip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipIsOff", function() { return skipIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipIsOn", function() { return skipIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRestartGame", function() { return getRestartGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartGameIsOff", function() { return restartGameIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartGameIsOn", function() { return restartGameIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewGame", function() { return getNewGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGameIsOff", function() { return newGameIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGameIsOn", function() { return newGameIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCloseAfterSubmit", function() { return getCloseAfterSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAfterSubmitIsOff", function() { return closeAfterSubmitIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAfterSubmitIsOn", function() { return closeAfterSubmitIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPracticeScreen", function() { return getPracticeScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "practiceScreenIsOff", function() { return practiceScreenIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "practiceScreenIsOn", function() { return practiceScreenIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaPlaybackLimit", function() { return getMediaPlaybackLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIsOff", function() { return mediaPlaybackLimitIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs1", function() { return mediaPlaybackLimitIs1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs2", function() { return mediaPlaybackLimitIs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs3", function() { return mediaPlaybackLimitIs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs4", function() { return mediaPlaybackLimitIs4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaPlaybackLimitIs5", function() { return mediaPlaybackLimitIs5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTtsLanguage", function() { return getTtsLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsLanguageIsOff", function() { return ttsLanguageIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ttsLanguageIsOn", function() { return ttsLanguageIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScorm12AbsoluteValues", function() { return getScorm12AbsoluteValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorm12AbsoluteValuesIsOn", function() { return scorm12AbsoluteValuesIsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scorm12AbsoluteValuesIsOff", function() { return scorm12AbsoluteValuesIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegressiveScoring", function() { return getRegressiveScoring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regressiveScoringIsOff", function() { return regressiveScoringIsOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regressiveScoringIsOn", function() { return regressiveScoringIsOn; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./react-app/modules/screens/selector/index.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! he */ "./node_modules/he/he.js");
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/trim */ "./node_modules/lodash/trim.js");
/* harmony import */ var lodash_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_trim__WEBPACK_IMPORTED_MODULE_2__);
/* this is generated from options.xml, don't edit */



/* 001 */

const getDictionary = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "dictionary");
const dictionaryIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "dictionary") === "false";
const dictionaryIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "dictionary") === "true";
/* 006 */

const getNotesArea = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "notesArea");
const notesAreaIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "notesArea") === "false";
const notesAreaIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "notesArea") === "true";
/* 009 */

const getInteractivePhonemicChart = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "interactivePhonemicChart");
const interactivePhonemicChartIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "interactivePhonemicChart") === "false";
const interactivePhonemicChartIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "interactivePhonemicChart") === "true";
/* 021 */

const getRevealObject = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "revealObject");
const revealObjectIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "revealObject") === "false";
const revealObjectIsAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "revealObject") === "all";
const revealObjectIsProgressive = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "revealObject") === "progressive";
const revealObjectIsProgressiveplushide = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "revealObject") === "progressiveplushide";
/* 023 */

const getPinObject = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "pinObject");
const pinObjectIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "pinObject") === "false";
const pinObjectIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "pinObject") === "true";
/* 025 */

const getPrevious = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "previous");
const previousIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "previous") === "true";
const previousIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "previous") === "false";
const previousIsAfterSubmitted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "previous") === "afterSubmitted";
/* 026 */

const getForwardButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "forwardButton");
const forwardButtonIsNext = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "forwardButton") === "next";
const forwardButtonIsAdaptive = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "forwardButton") === "adaptive";
/* 027 */

const getEnumeration = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "enumeration");
const enumerationIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumeration") === "false";
const enumerationIsNumber = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumeration") === "number";
const enumerationIsNumberNoDot = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumeration") === "number_no_dot";
const enumerationIsLetter = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumeration") === "letter";
const enumerationIsCapitalletter = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumeration") === "capitalletter";
const enumerationIsBullet = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumeration") === "bullet";
const enumerationIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumeration") === "custom";
/* 028 */

const getEnumerationAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "enumerationAnswers");
const enumerationAnswersIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumerationAnswers") === "false";
const enumerationAnswersIsNumber = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumerationAnswers") === "number";
const enumerationAnswersIsNumberNoDot = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumerationAnswers") === "number_no_dot";
const enumerationAnswersIsLetter = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumerationAnswers") === "letter";
const enumerationAnswersIsCapitalletter = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumerationAnswers") === "capitalletter";
const enumerationAnswersIsBullet = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumerationAnswers") === "bullet";
const enumerationAnswersIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumerationAnswers") === "custom";
/* 029 */

const getPrefill = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "prefill");
const prefillIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "prefill") === "false";
const prefillIsFirstitem = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "prefill") === "firstitem";
const prefillIsFirstblock = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "prefill") === "firstblock";
/* 034 */

const getGaptextAudio = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "gaptextAudio");
const gaptextAudioIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gaptextAudio") === "false";
const gaptextAudioIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gaptextAudio") === "true";
/* 038 */

const getSpeakLearnerInput = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "speakLearnerInput");
const speakLearnerInputIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "speakLearnerInput") === "false";
const speakLearnerInputIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "speakLearnerInput") === "true";
/* 040 */

const getFeedback = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "feedback");
const feedbackIsNormal = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedback") === "normal";
const feedbackIsInstant = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedback") === "instant";
/* 043 */

const getFeedbackSoundEffects = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "feedbackSoundEffects");
const feedbackSoundEffectsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackSoundEffects") === "off";
const feedbackSoundEffectsIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackSoundEffects") === "custom";
/* 044 */

const getSoundEffects = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "soundEffects");
const soundEffectsIsNone = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "soundEffects") === "none";
const soundEffectsIsSoundEffects = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "soundEffects") === "sound_effects";
/* 045 */

const getTryAgain = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "tryAgain");
const tryAgainIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "tryAgain") === "false";
const tryAgainIsLock = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "tryAgain") === "lock";
const tryAgainIsFrozen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "tryAgain") === "frozen";
const tryAgainIsClear = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "tryAgain") === "clear";
const tryAgainIsKeepall = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "tryAgain") === "keepall";
/* 046 */

const getScoreValues = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "scoreValues");
const scoreValuesIs1PointAction = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreValues") === "1_point_action";
const scoreValuesIs1PointQuestion = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreValues") === "1_point_question";
/* 047 */

const getEndResultScreen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "endResultScreen");
const endResultScreenIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultScreen") === "false";
const endResultScreenIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultScreen") === "true";
const endResultScreenIsButtonAfterScore = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultScreen") === "buttonAfterScore";
/* 050 */

const getProgressBar = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "progressBar");
const progressBarIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "progressBar") === "true";
const progressBarIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "progressBar") === "false";
const progressBarIsAuto = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "progressBar") === "auto";
const progressBarIsScreenSelection = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "progressBar") === "screenSelection";
/* 051 */

const getAutomaticNext = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "automaticNext");
const automaticNextIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "automaticNext") === "false";
const automaticNextIsQuestions = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "automaticNext") === "questions";
const automaticNextIsTimer = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "automaticNext") === "timer";
/* 052 */

const getAudioSupport = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "audioSupport");
const audioSupportIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioSupport") === "false";
const audioSupportIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioSupport") === "true";
/* 054 */

const getPrintable = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "printable");
const printableIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "printable") === "false";
const printableIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "printable") === "true";
/* 056 */

const getImageAsTrigger = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "imageAsTrigger");
const imageAsTriggerIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "imageAsTrigger") === "false";
const imageAsTriggerIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "imageAsTrigger") === "true";
/* 072 */

const getConserveAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "conserveAnswers");
const conserveAnswersIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "conserveAnswers") === "true";
const conserveAnswersIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "conserveAnswers") === "false";
/* 107 */

const getAddTextObject = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "addTextObject");
const addTextObjectIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "addTextObject") === "false";
const addTextObjectIsNormal = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "addTextObject") === "normal";
/* 109 */

const getUseClickClick = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "useClickClick");
const useClickClickIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "useClickClick") === "false";
const useClickClickIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "useClickClick") === "true";
/* 111 */

const getPoolAlignment = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "poolAlignment");
const poolAlignmentIsNone = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolAlignment") === "none";
const poolAlignmentIsTop = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolAlignment") === "top";
const poolAlignmentIsBottom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolAlignment") === "bottom";
const poolAlignmentIsLeft = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolAlignment") === "left";
const poolAlignmentIsRight = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolAlignment") === "right";
const poolAlignmentIsFree = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolAlignment") === "free";
/* 112 */

const getPairAlignment = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "pairAlignment");
const pairAlignmentIsOntop = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "pairAlignment") === "ontop";
const pairAlignmentIsHorizontal = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "pairAlignment") === "horizontal";
const pairAlignmentIsVertical = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "pairAlignment") === "vertical";
/* 113 */

const getGaps = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "gaps");
const gapsIsVariable = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gaps") === "variable";
const gapsIsSamelongest = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gaps") === "samelongest";
const gapsIsInvisible = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gaps") === "invisible";
const gapsIsFixed = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gaps") === "fixed";
/* 114 */

const getSave = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "save");
const saveIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "save") === "off";
const saveIsSkinbutton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "save") === "skinbutton";
const saveIsButtonOnly = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "save") === "button_only";
/* 118 */

const getErrorCorrection = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "errorCorrection");
const errorCorrectionIsReplace = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "errorCorrection") === "replace";
const errorCorrectionIsLine = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "errorCorrection") === "line";
const errorCorrectionIsSentence = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "errorCorrection") === "sentence";
/* 119 */

const getSignalError = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "signalError");
const signalErrorIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "signalError") === "off";
const signalErrorIsHighlight = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "signalError") === "highlight";
const signalErrorIsButtonAfterAttempts = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "signalError") === "buttonAfterAttempts";
const signalErrorIsButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "signalError") === "button";
/* 120 */

const getMaxLength = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "maxLength");
const maxLengthIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "maxLength") === "false";
const maxLengthIsWords = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "maxLength") === "words";
const maxLengthIsChars = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "maxLength") === "chars";
/* 122 */

const getMultipleDestinations = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "multipleDestinations");
const multipleDestinationsIsOne = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "multipleDestinations") === "one";
const multipleDestinationsIsUnlimited = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "multipleDestinations") === "unlimited";
const multipleDestinationsIsRestricted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "multipleDestinations") === "restricted";
/* 128 */

const getDropIndicator = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "dropIndicator");
const dropIndicatorIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "dropIndicator") === "true";
const dropIndicatorIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "dropIndicator") === "false";
/* 148 */

const getCardBack = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "cardBack");
const cardBackIsDefault = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardBack") === "default";
const cardBackIsDefaultsets = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardBack") === "defaultsets";
const cardBackIsImage = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardBack") === "image";
const cardBackIsImagesets = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardBack") === "imagesets";
/* 149 */

const getCardLayout = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "cardLayout");
const cardLayoutIsDefault = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardLayout") === "default";
const cardLayoutIsSets = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardLayout") === "sets";
/* 150 */

const getCardFormat = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "cardFormat");
const cardFormatIsPortrait = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardFormat") === "portrait";
const cardFormatIsLandscape = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardFormat") === "landscape";
const cardFormatIsSquare = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardFormat") === "square";
/* 154 */

const getLinkingLinesSets = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "linkingLinesSets");
const linkingLinesSetsIsPairs = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "linkingLinesSets") === "pairs";
const linkingLinesSetsIsTriplets = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "linkingLinesSets") === "triplets";
const linkingLinesSetsIsQuadruples = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "linkingLinesSets") === "quadruples";
const linkingLinesSetsIsQuintuples = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "linkingLinesSets") === "quintuples";
/* 158 */

const getSize = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "size");
const sizeIsDummy = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "size") === "dummy";
/* 160 */

const getCase = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "case");
const caseIsUpper = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "case") === "upper";
const caseIsLower = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "case") === "lower";
/* 162 */

const getStayInView = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "stayInView");
const stayInViewIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "stayInView") === "false";
const stayInViewIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "stayInView") === "true";
/* 300 */

const getDragAlignment = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "dragAlignment");
const dragAlignmentIsVertical = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "dragAlignment") === "vertical";
const dragAlignmentIsHorizontal = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "dragAlignment") === "horizontal";
const dragAlignmentIsHorizontalSingleWord = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "dragAlignment") === "horizontal_single_word";
/* 302 */

const getHideRadiobuttons = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "hideRadiobuttons");
const hideRadiobuttonsIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "hideRadiobuttons") === "false";
const hideRadiobuttonsIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "hideRadiobuttons") === "true";
const hideRadiobuttonsIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "hideRadiobuttons") === "custom";
/* 305 */

const getCluePosition = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "cluePosition");
const cluePositionIsInside = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cluePosition") === "inside";
const cluePositionIsOutside = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cluePosition") === "outside";
/* 306 */

const getChoiceAlignment = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "choiceAlignment");
const choiceAlignmentIsVertical = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "choiceAlignment") === "vertical";
const choiceAlignmentIsHorizontal = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "choiceAlignment") === "horizontal";
const choiceAlignmentIsInline = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "choiceAlignment") === "inline";
/* 311 */

const getCheckAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "checkAnswers");
const checkAnswersIsAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswers") === "always";
const checkAnswersIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswers") === "false";
const checkAnswersIsAfterOne = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswers") === "afterOne";
const checkAnswersIsAfterAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswers") === "afterAll";
const checkAnswersIsBeforeSubmitted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswers") === "beforeSubmitted";
/* 312 */

const getSeeAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "seeAnswers");
const seeAnswersIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "seeAnswers") === "on";
const seeAnswersIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "seeAnswers") === "off";
const seeAnswersIsBeforeInteraction = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "seeAnswers") === "beforeInteraction";
/* 313 */

const getReset = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "reset");
const resetIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "reset") === "on";
const resetIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "reset") === "off";
const resetIsBeforeSubmitted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "reset") === "beforeSubmitted";
/* 315 */

const getSubmissions = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "submissions");
const submissionsIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "1";
const submissionsIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "2";
const submissionsIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "3";
const submissionsIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "4";
const submissionsIs5 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "5";
const submissionsIs6 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "6";
const submissionsIs7 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "7";
const submissionsIs8 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "8";
const submissionsIs9 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "9";
const submissionsIs10 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "10";
const submissionsIs11 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "11";
const submissionsIs12 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "12";
const submissionsIs13 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "13";
const submissionsIs14 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "14";
const submissionsIs15 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "15";
const submissionsIs16 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "16";
const submissionsIs17 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "17";
const submissionsIs18 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "18";
const submissionsIs19 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "19";
const submissionsIs20 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "20";
const submissionsIsUnlimited = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "submissions") === "unlimited";
/* 317 */

const getRunningScore = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "runningScore");
const runningScoreIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "runningScore") === "false";
const runningScoreIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "runningScore") === "true";
/* 318 */

const getShowHints = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "showHints");
const showHintsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showHints") === "off";
const showHintsIsAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showHints") === "always";
const showHintsIsCheckScore = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showHints") === "checkScore";
/* 319 */

const getHints = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "hints");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
/* 322 */

const getDelayedFeedback = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "delayedFeedback");
const delayedFeedbackIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "delayedFeedback") === "false";
const delayedFeedbackIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "delayedFeedback") === "true";
const delayedFeedbackIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "delayedFeedback") === "custom";
/* 323 */

const getCaseInsensitive = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "caseInsensitive");
const caseInsensitiveIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "caseInsensitive") === "false";
const caseInsensitiveIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "caseInsensitive") === "true";
/* 324 */

const getIgnorePunctuation = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "ignorePunctuation");
const ignorePunctuationIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ignorePunctuation") === "false";
const ignorePunctuationIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ignorePunctuation") === "true";
/* 326 */

const getRandomiseAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "randomiseAnswers");
const randomiseAnswersIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "randomiseAnswers") === "true";
const randomiseAnswersIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "randomiseAnswers") === "false";
/* 327 */

const getCardPerRow = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "cardPerRow");
const cardPerRowIsCards = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cardPerRow") === "cards";
/* 330 */

const getHideCheckboxes = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "hideCheckboxes");
const hideCheckboxesIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "hideCheckboxes") === "false";
const hideCheckboxesIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "hideCheckboxes") === "true";
/* 334 */

const getShowSubmit = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "showSubmit");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
const showSubmitIsAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showSubmit") === "always";
const showSubmitIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showSubmit") === "off";
const showSubmitIsAfterOne = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showSubmit") === "afterOne";
const showSubmitIsAfterAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showSubmit") === "afterAll";
const showSubmitIsEachScreen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showSubmit") === "eachScreen";
/* 335 */

const getFinishSubmit = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "finishSubmit");
const finishSubmitIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "finishSubmit") === "off";
const finishSubmitIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "finishSubmit") === "on";
/* 336 */

const getShowForward = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "showForward");
const showForwardIsAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showForward") === "always";
const showForwardIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showForward") === "off";
const showForwardIsAfterOne = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showForward") === "afterOne";
const showForwardIsAfterSubmitted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showForward") === "afterSubmitted";
const showForwardIsAfterAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showForward") === "afterAll";
const showForwardIsAfterCheckAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showForward") === "afterCheckAnswers";
const showForwardIsAfterSeeAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showForward") === "afterSeeAnswers";
/* 337 */

const getTargetZones = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "targetZones");
const targetZonesIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetZones") === "false";
const targetZonesIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetZones") === "true";
/* 340 */

const getValidationMessage = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "validationMessage");
const validationMessageIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "validationMessage") === "false";
const validationMessageIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "validationMessage") === "custom";
/* 341 */

const getAutosave = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "autosave");
const autosaveIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "autosave") === "on";
const autosaveIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "autosave") === "off";
/* 342 */

const getIntroScreen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "introScreen");
const introScreenIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "introScreen") === "off";
const introScreenIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "introScreen") === "on";
/* 345 */

const getManualMarking = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "manualMarking");
const manualMarkingIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "manualMarking") === "off";
const manualMarkingIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "manualMarking") === "on";
/* 346 */

const getFeedbackBand1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "feedbackBand1");
const feedbackBand1IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackBand1") === "false";
const feedbackBand1IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackBand1") === "custom";
/* 347 */

const getFeedbackBand2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "feedbackBand2");
const feedbackBand2IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackBand2") === "false";
const feedbackBand2IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackBand2") === "custom";
/* 348 */

const getFeedbackBand3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "feedbackBand3");
const feedbackBand3IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackBand3") === "false";
const feedbackBand3IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackBand3") === "custom";
/* 349 */

const getFeedbackBand4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "feedbackBand4");
const feedbackBand4IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackBand4") === "false";
const feedbackBand4IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackBand4") === "custom";
/* 352 */

const getSpecialCharactersStudent = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "specialCharactersStudent");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
/* 353 */

const getActivityFeedbackBand1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "activityFeedbackBand1");
const activityFeedbackBand1IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityFeedbackBand1") === "false";
const activityFeedbackBand1IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityFeedbackBand1") === "custom";
/* 354 */

const getActivityFeedbackBand2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "activityFeedbackBand2");
const activityFeedbackBand2IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityFeedbackBand2") === "false";
const activityFeedbackBand2IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityFeedbackBand2") === "custom";
/* 355 */

const getActivityFeedbackBand3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "activityFeedbackBand3");
const activityFeedbackBand3IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityFeedbackBand3") === "false";
const activityFeedbackBand3IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityFeedbackBand3") === "custom";
/* 356 */

const getActivityFeedbackBand4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "activityFeedbackBand4");
const activityFeedbackBand4IsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityFeedbackBand4") === "false";
const activityFeedbackBand4IsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityFeedbackBand4") === "custom";
/* 357 */

const getActivityFeedbackThresholds = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "activityFeedbackThresholds");
const activityFeedbackThresholdsIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityFeedbackThresholds") === "custom";
/* 361 */

const getSpellcheck = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "spellcheck");
const spellcheckIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "spellcheck") === "off";
const spellcheckIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "spellcheck") === "on";
/* 362 */

const getShowInColumns = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "showInColumns");
const showInColumnsIsFalse = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showInColumns") === "false";
const showInColumnsIsTrue = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showInColumns") === "true";
/* 364 */

const getIgnoreAccents = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "ignoreAccents");
const ignoreAccentsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ignoreAccents") === "off";
const ignoreAccentsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ignoreAccents") === "on";
/* 367 */

const getEraser = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "eraser");
const eraserIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "eraser") === "off";
const eraserIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "eraser") === "on";
/* 368 */

const getAnnotationTools = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "annotationTools");
const annotationToolsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "annotationTools") === "off";
const annotationToolsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "annotationTools") === "on";
const annotationToolsIsOnlyForTeachers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "annotationTools") === "only_for_teachers";
const annotationToolsIsOnlySupplements = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "annotationTools") === "only_supplements";
/* 371 */

const getShowInfoText = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "showInfoText");
const showInfoTextIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showInfoText") === "off";
const showInfoTextIsTooltip = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showInfoText") === "tooltip";
const showInfoTextIsDialog = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showInfoText") === "dialog";
/* 372 */

const getQuestionPool = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "questionPool");
const questionPoolIsNo = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "questionPool") === "no";
const questionPoolIsYes = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "questionPool") === "yes";
/* 373 */

const getContinuousEnumeration = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "continuousEnumeration");
const continuousEnumerationIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "continuousEnumeration") === "off";
const continuousEnumerationIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "continuousEnumeration") === "on";
/* 375 */

const getLoSections = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "loSections");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
/* 376 */

const getQuestionDisplay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "questionDisplay");
const questionDisplayIsAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "questionDisplay") === "all";
const questionDisplayIsActive = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "questionDisplay") === "active";
const questionDisplayIsShowNext = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "questionDisplay") === "show_next";
const questionDisplayIsShowNextAndHidePrevious = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "questionDisplay") === "show_next_and_hide_previous";
/* 378 */

const getEndResultAlways = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "endResultAlways");
const endResultAlwaysIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultAlways") === "off";
const endResultAlwaysIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultAlways") === "on";
const endResultAlwaysIsButtonAfterScore = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultAlways") === "buttonAfterScore";
/* 379 */

const getExamsTimer = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "examsTimer");
const examsTimerIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "examsTimer") === "off";
const examsTimerIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "examsTimer") === "on";
/* 382 */

const getEnumerationInternal = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "enumerationInternal");
const enumerationInternalIsAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumerationInternal") === "all";
const enumerationInternalIsCorrect = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "enumerationInternal") === "correct";
/* 383 */

const getActivityPool = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "activityPool");
const activityPoolIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityPool") === "off";
const activityPoolIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityPool") === "on";
const activityPoolIsRandomiseAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityPool") === "randomiseAll";
/* 384 */

const getCheckMaxAttempts = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "checkMaxAttempts");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
/* 388 */

const getSendScores = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "sendScores");
const sendScoresIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "sendScores") === "off";
const sendScoresIsUnlimited = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "sendScores") === "unlimited";
const sendScoresIs1Submission = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "sendScores") === "1_submission";
const sendScoresIsFinalCheckAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "sendScores") === "final_check_answers";
/* 390 */

const getDesignPackSubstyle = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "designPackSubstyle");
const designPackSubstyleIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "designPackSubstyle") === "off";
const designPackSubstyleIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "designPackSubstyle") === "on";
/* 391 */

const getEndResultsReturn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "endResultsReturn");
const endResultsReturnIsLast = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultsReturn") === "last";
const endResultsReturnIsFirst = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultsReturn") === "first";
/* 394 */

const getScoreValuesPerBlock = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "scoreValuesPerBlock");
const scoreValuesPerBlockIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreValuesPerBlock") === "off";
const scoreValuesPerBlockIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreValuesPerBlock") === "Custom";
/* 395 */

const getExportFile = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "exportFile");
const exportFileIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "exportFile") === "off";
const exportFileIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "exportFile") === "on";
/* 396 */

const getTextboxAutogrow = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "textboxAutogrow");
const textboxAutogrowIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "textboxAutogrow") === "off";
const textboxAutogrowIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "textboxAutogrow") === "on";
/* 397 */

const getCheckboxSelections = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "checkboxSelections");
const checkboxSelectionsIsTotalCorrect = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkboxSelections") === "total_correct";
const checkboxSelectionsIsAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkboxSelections") === "all";
/* 398 */

const getRepeatAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "repeatAnswers");
const repeatAnswersIsAllow = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "repeatAnswers") === "allow";
const repeatAnswersIsPrevent = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "repeatAnswers") === "prevent";
/* 399 */

const getFreeDragLocation = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "freeDragLocation");
const freeDragLocationIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "freeDragLocation") === "off";
const freeDragLocationIsBetweenWords = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "freeDragLocation") === "between_words";
const freeDragLocationIsBetweenLetters = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "freeDragLocation") === "between_letters";
/* 400 */

const getPoolStacks = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "poolStacks");
const poolStacksIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolStacks") === "off";
const poolStacksIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolStacks") === "1";
const poolStacksIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolStacks") === "2";
const poolStacksIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolStacks") === "3";
const poolStacksIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolStacks") === "4";
/* 401 */

const getAudioInGap = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "audioInGap");
const audioInGapIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioInGap") === "off";
const audioInGapIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioInGap") === "on";
/* 402 */

const getOrderDependency = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "orderDependency");
const orderDependencyIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "orderDependency") === "off";
const orderDependencyIsFirstAnswer = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "orderDependency") === "first_answer";
const orderDependencyIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "orderDependency") === "on";
/* 403 */

const getGapResize = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "gapResize");
const gapResizeIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gapResize") === "off";
const gapResizeIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gapResize") === "on";
/* 404 */

const getScoreCalculation = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "scoreCalculation");
const scoreCalculationIsOnlyCorrect = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreCalculation") === "onlyCorrect";
const scoreCalculationIsSubtractIncorrect = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreCalculation") === "subtractIncorrect";
/* 406 */

const getPoolOrder = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "poolOrder");
const poolOrderIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolOrder") === "off";
const poolOrderIsAlphabetical = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolOrder") === "alphabetical";
const poolOrderIsNatural = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "poolOrder") === "natural";
/* 407 */

const getAutomaticCapitalisation = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "automaticCapitalisation");
const automaticCapitalisationIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "automaticCapitalisation") === "off";
const automaticCapitalisationIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "automaticCapitalisation") === "on";
/* 408 */

const getMarkingStyle = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "markingStyle");
const markingStyleIsHighlight = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "markingStyle") === "highlight";
const markingStyleIsCircle = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "markingStyle") === "circle";
const markingStyleIsUnderline = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "markingStyle") === "underline";
/* 412 */

const getContainerStyle = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "containerStyle");
const containerStyleIsNormal = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "containerStyle") === "normal";
const containerStyleIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "containerStyle") === "custom";
/* 416 */

const getAnswerDisplay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "answerDisplay");
const answerDisplayIsColumns = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "answerDisplay") === "columns";
const answerDisplayIsRows = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "answerDisplay") === "rows";
/* 417 */

const getLinkBehaviour = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "linkBehaviour");
const linkBehaviourIsDrag = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "linkBehaviour") === "drag";
const linkBehaviourIsTouch = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "linkBehaviour") === "touch";
/* 419 */

const getRestoreLoState = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "restoreLoState");
const restoreLoStateIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "restoreLoState") === "on";
const restoreLoStateIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "restoreLoState") === "off";
/* 421 */

const getWikiTool = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "wikiTool");
const wikiToolIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "wikiTool") === "off";
const wikiToolIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "wikiTool") === "on";
/* 422 */

const getOperator = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "operator");
const operatorIsAddition = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "operator") === "addition";
const operatorIsMultiplication = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "operator") === "multiplication";
/* 425 */

const getGapCharacters = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "gapCharacters");
const gapCharactersIsDontshow = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gapCharacters") === "dontshow";
const gapCharactersIsShow = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gapCharacters") === "show";
/* 426 */

const getLayers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "layers");
const layersIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "layers") === "2";
const layersIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "layers") === "3";
const layersIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "layers") === "4";
const layersIs5 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "layers") === "5";
const layersIs6 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "layers") === "6";
/* 427 */

const getTeamScoring = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "teamScoring");
const teamScoringIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "teamScoring") === "off";
const teamScoringIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "teamScoring") === "on";
/* 428 */

const getReferenceContent = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "referenceContent");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
const referenceContentIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "referenceContent") === "off";
const referenceContentIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "referenceContent") === "1";
const referenceContentIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "referenceContent") === "2";
/* 430 */

const getAlternativeText = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "alternativeText");
const alternativeTextIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "alternativeText") === "off";
const alternativeTextIsAlt1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "alternativeText") === "alt1";
const alternativeTextIsAlt2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "alternativeText") === "alt2";
const alternativeTextIsAlt3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "alternativeText") === "alt3";
/* 431 */

const getAudioPlayback = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "audioPlayback");
const audioPlaybackIsAuto = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioPlayback") === "auto";
const audioPlaybackIsManual = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioPlayback") === "manual";
const audioPlaybackIsBeforeCardFlip = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioPlayback") === "before_card_flip";
/* 432 */

const getLoTitleDisplay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "loTitleDisplay");
const loTitleDisplayIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "loTitleDisplay") === "on";
const loTitleDisplayIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "loTitleDisplay") === "off";
/* 433 */

const getActivityTitleDisplay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "activityTitleDisplay");
const activityTitleDisplayIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityTitleDisplay") === "on";
const activityTitleDisplayIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityTitleDisplay") === "off";
/* 435 */

const getNumberColumns = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "numberColumns");
const numberColumnsIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberColumns") === "3";
const numberColumnsIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberColumns") === "4";
const numberColumnsIs5 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberColumns") === "5";
/* 437 */

const getAutomaticPlay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "automaticPlay");
const automaticPlayIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "automaticPlay") === "off";
const automaticPlayIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "automaticPlay") === "on";
const automaticPlayIsOnMagnify = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "automaticPlay") === "on_magnify";
/* 438 */

const getShuffleControl = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "shuffleControl");
const shuffleControlIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "shuffleControl") === "off";
const shuffleControlIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "shuffleControl") === "on";
/* 439 */

const getAdditionalImageControl = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "additionalImageControl");
const additionalImageControlIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "additionalImageControl") === "off";
const additionalImageControlIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "additionalImageControl") === "on";
/* 441 */

const getAudioIconBehaviour = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "audioIconBehaviour");
const audioIconBehaviourIsStop = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioIconBehaviour") === "stop";
const audioIconBehaviourIsPause = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioIconBehaviour") === "pause";
/* 442 */

const getUserSelection = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "userSelection");
const userSelectionIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "userSelection") === "off";
const userSelectionIsSelectForCorrect = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "userSelection") === "select_for_correct";
const userSelectionIsSelectForError = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "userSelection") === "select_for_error";
/* 443 */

const getLoFullscreenButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "loFullscreenButton");
const loFullscreenButtonIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "loFullscreenButton") === "off";
const loFullscreenButtonIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "loFullscreenButton") === "on";
/* 445 */

const getUserVisibility = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "userVisibility");
const userVisibilityIsAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "userVisibility") === "all";
const userVisibilityIsTeacher = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "userVisibility") === "teacher";
const userVisibilityIsStudent = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "userVisibility") === "student";
/* 446 */

const getCluesInColumns = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "cluesInColumns");
const cluesInColumnsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cluesInColumns") === "off";
const cluesInColumnsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "cluesInColumns") === "on";
/* 448 */

const getTryAgainBehaviour = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "tryAgainBehaviour");
const tryAgainBehaviourIsButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "tryAgainBehaviour") === "button";
const tryAgainBehaviourIsAutomatic = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "tryAgainBehaviour") === "automatic";
const tryAgainBehaviourIsAutomaticAfterTime = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "tryAgainBehaviour") === "automatic_after_time";
/* 449 */

const getSeeAllAnswers = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "seeAllAnswers");
const seeAllAnswersIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "seeAllAnswers") === "off";
const seeAllAnswersIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "seeAllAnswers") === "on";
/* 450 */

const getSeeNextAnswer = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "seeNextAnswer");
const seeNextAnswerIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "seeNextAnswer") === "off";
const seeNextAnswerIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "seeNextAnswer") === "on";
/* 452 */

const getNavigationMenu = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "navigationMenu");
const navigationMenuIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "navigationMenu") === "off";
const navigationMenuIsAuto = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "navigationMenu") === "auto";
const navigationMenuIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "navigationMenu") === "custom";
/* 453 */

const getDisplaySettings = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "displaySettings");
const displaySettingsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "displaySettings") === "off";
const displaySettingsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "displaySettings") === "on";
/* 454 */

const getResourceBanks = (state, props) => {
  let val = Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "resourceBanks");

  try {
    val = JSON.parse(Object(he__WEBPACK_IMPORTED_MODULE_1__["decode"])(lodash_trim__WEBPACK_IMPORTED_MODULE_2___default()(val)));
  } catch (e) {
    /**/
  }

  return val;
};
const resourceBanksIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "resourceBanks") === "off";
const resourceBanksIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "resourceBanks") === "on";
/* 455 */

const getTtsGeneralRules = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "ttsGeneralRules");
const ttsGeneralRulesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ttsGeneralRules") === "off";
const ttsGeneralRulesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ttsGeneralRules") === "on";
/* 456 */

const getTtsLoRules = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "ttsLoRules");
const ttsLoRulesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ttsLoRules") === "off";
const ttsLoRulesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ttsLoRules") === "on";
/* 457 */

const getTtsActivityRules = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "ttsActivityRules");
const ttsActivityRulesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ttsActivityRules") === "off";
const ttsActivityRulesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ttsActivityRules") === "on";
/* 459 */

const getActivityHelp = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "activityHelp");
const activityHelpIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityHelp") === "off";
const activityHelpIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "activityHelp") === "on";
/* 462 */

const getFeedbackCorrect = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "feedbackCorrect");
const feedbackCorrectIsNo = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackCorrect") === "no";
const feedbackCorrectIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackCorrect") === "custom";
/* 463 */

const getFeedbackIncorrect = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "feedbackIncorrect");
const feedbackIncorrectIsNo = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackIncorrect") === "no";
const feedbackIncorrectIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "feedbackIncorrect") === "custom";
/* 465 */

const getTargetImage = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "targetImage");
const targetImageIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetImage") === "custom";
/* 466 */

const getTargetGeneratorImage = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "targetGeneratorImage");
const targetGeneratorImageIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetGeneratorImage") === "custom";
/* 467 */

const getTargetGeneratorLocation = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "targetGeneratorLocation");
const targetGeneratorLocationIsBottomRight = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetGeneratorLocation") === "bottom_right";
const targetGeneratorLocationIsBottomLeft = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetGeneratorLocation") === "bottom_left";
const targetGeneratorLocationIsTopRight = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetGeneratorLocation") === "top_right";
const targetGeneratorLocationIsTopLeft = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetGeneratorLocation") === "top_left";
/* 469 */

const getSelectedTargetImage = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "selectedTargetImage");
const selectedTargetImageIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "selectedTargetImage") === "custom";
/* 470 */

const getBackgroundImage = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "backgroundImage");
const backgroundImageIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "backgroundImage") === "custom";
/* 471 */

const getScoreboard = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "scoreboard");
const scoreboardIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreboard") === "off";
const scoreboardIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreboard") === "on";
/* 472 */

const getCountdownTimer = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "countdownTimer");
const countdownTimerIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "countdownTimer") === "off";
const countdownTimerIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "countdownTimer") === "on";
/* 473 */

const getMaximumDuration = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "maximumDuration");
const maximumDurationIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "maximumDuration") === "off";
const maximumDurationIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "maximumDuration") === "custom";
/* 474 */

const getMaximumItems = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "maximumItems");
const maximumItemsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "maximumItems") === "off";
const maximumItemsIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "maximumItems") === "custom";
/* 475 */

const getMovementSpeed = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "movementSpeed");
const movementSpeedIsSlow = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "movementSpeed") === "slow";
const movementSpeedIsMedium = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "movementSpeed") === "medium";
const movementSpeedIsFast = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "movementSpeed") === "fast";
/* 476 */

const getGenerationSpeed = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "generationSpeed");
const generationSpeedIsSlow = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "generationSpeed") === "slow";
const generationSpeedIsMedium = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "generationSpeed") === "medium";
const generationSpeedIsFast = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "generationSpeed") === "fast";
/* 477 */

const getGameOverMessage = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "gameOverMessage");
const gameOverMessageIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gameOverMessage") === "custom";
/* 479 */

const getSolutionHint = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "solutionHint");
const solutionHintIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "solutionHint") === "off";
const solutionHintIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "solutionHint") === "on";
/* 480 */

const getIgnoreSpaces = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "ignoreSpaces");
const ignoreSpacesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ignoreSpaces") === "off";
const ignoreSpacesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ignoreSpaces") === "on";
/* 483 */

const getNumberInput = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "numberInput");
const numberInputIsAny = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberInput") === "any";
const numberInputIsNatural = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberInput") === "natural";
const numberInputIsInteger = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberInput") === "integer";
/* 484 */

const getCopyrightInformation = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "copyrightInformation");
const copyrightInformationIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "copyrightInformation") === "off";
const copyrightInformationIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "copyrightInformation") === "on";
/* 485 */

const getTargetOnscreenDuration = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "targetOnscreenDuration");
const targetOnscreenDurationIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetOnscreenDuration") === "off";
const targetOnscreenDurationIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "targetOnscreenDuration") === "custom";
/* 487 */

const getOnlineCheck = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "onlineCheck");
const onlineCheckIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "onlineCheck") === "off";
const onlineCheckIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "onlineCheck") === "on";
/* 492 */

const getSignalTargets = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "signalTargets");
const signalTargetsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "signalTargets") === "off";
const signalTargetsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "signalTargets") === "on";
/* 493 */

const getCheckAnswersInstant = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "checkAnswersInstant");
const checkAnswersInstantIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswersInstant") === "off";
const checkAnswersInstantIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswersInstant") === "on";
const checkAnswersInstantIsAutomatic = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswersInstant") === "automatic";
/* 495 */

const getValidateDependentGaps = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "validateDependentGaps");
const validateDependentGapsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "validateDependentGaps") === "off";
const validateDependentGapsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "validateDependentGaps") === "on";
/* 497 */

const getPlayAll = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "playAll");
const playAllIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "playAll") === "off";
const playAllIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "playAll") === "on";
/* 498 */

const getDownloadAudio = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "downloadAudio");
const downloadAudioIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "downloadAudio") === "off";
const downloadAudioIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "downloadAudio") === "on";
/* 499 */

const getHideLines = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "hideLines");
const hideLinesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "hideLines") === "off";
const hideLinesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "hideLines") === "on";
/* 501 */

const getGapfillBehaviour = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "gapfillBehaviour");
const gapfillBehaviourIsDrag = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gapfillBehaviour") === "drag";
const gapfillBehaviourIsTapItem = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gapfillBehaviour") === "tap_item";
const gapfillBehaviourIsTapTarget = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gapfillBehaviour") === "tap_target";
const gapfillBehaviourIsTapSwap = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "gapfillBehaviour") === "tap_swap";
/* 502 */

const getGroupHeadings = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "groupHeadings");
const groupHeadingsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "groupHeadings") === "off";
const groupHeadingsIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "groupHeadings") === "custom";
/* 503 */

const getDisplayAsCompleted = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "displayAsCompleted");
const displayAsCompletedIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "displayAsCompleted") === "off";
const displayAsCompletedIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "displayAsCompleted") === "on";
/* 504 */

const getOriginOfTargets = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "originOfTargets");
const originOfTargetsIsDefault = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "originOfTargets") === "default";
const originOfTargetsIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "originOfTargets") === "custom";
/* 505 */

const getTranslationBlock = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "translationBlock");
const translationBlockIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "translationBlock") === "off";
const translationBlockIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "translationBlock") === "on";
/* 508 */

const getFlashFirstAnswer = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "flashFirstAnswer");
const flashFirstAnswerIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "flashFirstAnswer") === "off";
const flashFirstAnswerIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "flashFirstAnswer") === "on";
/* 509 */

const getSetUserRole = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "setUserRole");
const setUserRoleIsFree = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "setUserRole") === "Free";
const setUserRoleIsRole1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "setUserRole") === "role_1";
const setUserRoleIsRole2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "setUserRole") === "role_2";
/* 510 */

const getScoreRounding = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "scoreRounding");
const scoreRoundingIsFloat = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreRounding") === "float";
const scoreRoundingIsRoundup = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreRounding") === "roundup";
const scoreRoundingIsRound = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreRounding") === "round";
const scoreRoundingIsRounddown = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scoreRounding") === "rounddown";
/* 511 */

const getNextButtonText = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "nextButtonText");
const nextButtonTextIsDefault = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "nextButtonText") === "default";
const nextButtonTextIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "nextButtonText") === "custom";
/* 512 */

const getCheckAnswersDisplay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "checkAnswersDisplay");
const checkAnswersDisplayIsMarkingAndFeedback = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswersDisplay") === "marking_and_feedback";
const checkAnswersDisplayIsMarkingOnly = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "checkAnswersDisplay") === "marking_only";
/* 513 */

const getOriginalAudioPlayback = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "originalAudioPlayback");
const originalAudioPlaybackIsBothRoles = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "originalAudioPlayback") === "both_roles";
const originalAudioPlaybackIsNonSelectedRoleOnly = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "originalAudioPlayback") === "non_selected_role_only";
/* 516 */

const getNumberOfChances = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "numberOfChances");
const numberOfChancesIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfChances") === "1";
const numberOfChancesIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfChances") === "2";
const numberOfChancesIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfChances") === "3";
const numberOfChancesIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfChances") === "4";
const numberOfChancesIs5 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfChances") === "5";
/* 517 */

const getKeyboardDisplay = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "keyboardDisplay");
const keyboardDisplayIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "keyboardDisplay") === "off";
const keyboardDisplayIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "keyboardDisplay") === "on";
/* 518 */

const getRevealSolution = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "revealSolution");
const revealSolutionIsAfterFinalChance = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "revealSolution") === "after_final_chance";
const revealSolutionIsWithButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "revealSolution") === "with_button";
/* 519 */

const getHangmanTimer = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "hangmanTimer");
const hangmanTimerIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "hangmanTimer") === "off";
const hangmanTimerIsCustom = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "hangmanTimer") === "custom";
/* 520 */

const getInstructionPopUp = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "instructionPopUp");
const instructionPopUpIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "instructionPopUp") === "off";
const instructionPopUpIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "instructionPopUp") === "on";
/* 521 */

const getResetWholeLo = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "resetWholeLo");
const resetWholeLoIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "resetWholeLo") === "off";
const resetWholeLoIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "resetWholeLo") === "on";
/* 522 */

const getShowNextLo = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "showNextLo");
const showNextLoIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showNextLo") === "off";
const showNextLoIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showNextLo") === "on";
/* 523 */

const getShowPreviousLo = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "showPreviousLo");
const showPreviousLoIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showPreviousLo") === "off";
const showPreviousLoIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "showPreviousLo") === "on";
/* 524 */

const getLoNotesArea = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "loNotesArea");
const loNotesAreaIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "loNotesArea") === "off";
const loNotesAreaIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "loNotesArea") === "on";
/* 525 */

const getAudioSpeed = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "audioSpeed");
const audioSpeedIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioSpeed") === "off";
const audioSpeedIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "audioSpeed") === "on";
/* 527 */

const getScorm2004AbsoluteValues = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "scorm2004AbsoluteValues");
const scorm2004AbsoluteValuesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scorm2004AbsoluteValues") === "off";
const scorm2004AbsoluteValuesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scorm2004AbsoluteValues") === "on";
/* 529 */

const getHighlightSelection = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "highlightSelection");
const highlightSelectionIsWords = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "highlightSelection") === "words";
const highlightSelectionIsLetters = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "highlightSelection") === "letters";
/* 531 */

const getDisplayRecordingTest = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "displayRecordingTest");
const displayRecordingTestIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "displayRecordingTest") === "off";
const displayRecordingTestIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "displayRecordingTest") === "on";
/* 532 */

const getEndResultsButton = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "endResultsButton");
const endResultsButtonIsEvery = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultsButton") === "every";
const endResultsButtonIsLast = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "endResultsButton") === "last";
/* 533 */

const getTimeSpentInSections = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "timeSpentInSections");
const timeSpentInSectionsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "timeSpentInSections") === "off";
const timeSpentInSectionsIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "timeSpentInSections") === "on";
/* 535 */

const getNumberOfTeams = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "numberOfTeams");
const numberOfTeamsIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfTeams") === "1";
const numberOfTeamsIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfTeams") === "2";
const numberOfTeamsIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfTeams") === "3";
const numberOfTeamsIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfTeams") === "4";
/* 536 */

const getNumberOfCategories = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "numberOfCategories");
const numberOfCategoriesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "off";
const numberOfCategoriesIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "1";
const numberOfCategoriesIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "2";
const numberOfCategoriesIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "3";
const numberOfCategoriesIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "4";
const numberOfCategoriesIs5 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "5";
const numberOfCategoriesIs6 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "6";
const numberOfCategoriesIs7 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "7";
const numberOfCategoriesIs8 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "8";
const numberOfCategoriesIs9 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfCategories") === "9";
/* 537 */

const getNumberOfQuestions = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "numberOfQuestions");
const numberOfQuestionsIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "off";
const numberOfQuestionsIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "1";
const numberOfQuestionsIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "2";
const numberOfQuestionsIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "3";
const numberOfQuestionsIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "4";
const numberOfQuestionsIs5 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "5";
const numberOfQuestionsIs6 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "6";
const numberOfQuestionsIs7 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "7";
const numberOfQuestionsIs8 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "8";
const numberOfQuestionsIs9 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "numberOfQuestions") === "9";
/* 538 */

const getSkip = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "skip");
const skipIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "skip") === "off";
const skipIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "skip") === "on";
/* 539 */

const getRestartGame = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "restartGame");
const restartGameIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "restartGame") === "off";
const restartGameIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "restartGame") === "on";
/* 540 */

const getNewGame = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "newGame");
const newGameIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "newGame") === "off";
const newGameIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "newGame") === "on";
/* 543 */

const getCloseAfterSubmit = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "closeAfterSubmit");
const closeAfterSubmitIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "closeAfterSubmit") === "off";
const closeAfterSubmitIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "closeAfterSubmit") === "on";
/* 544 */

const getPracticeScreen = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "practiceScreen");
const practiceScreenIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "practiceScreen") === "off";
const practiceScreenIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "practiceScreen") === "on";
/* 545 */

const getMediaPlaybackLimit = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "mediaPlaybackLimit");
const mediaPlaybackLimitIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "off";
const mediaPlaybackLimitIs1 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "1";
const mediaPlaybackLimitIs2 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "2";
const mediaPlaybackLimitIs3 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "3";
const mediaPlaybackLimitIs4 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "4";
const mediaPlaybackLimitIs5 = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "mediaPlaybackLimit") === "5";
/* 546 */

const getTtsLanguage = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "ttsLanguage");
const ttsLanguageIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ttsLanguage") === "off";
const ttsLanguageIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "ttsLanguage") === "on";
/* 548 */

const getScorm12AbsoluteValues = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "scorm12AbsoluteValues");
const scorm12AbsoluteValuesIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scorm12AbsoluteValues") === "on";
const scorm12AbsoluteValuesIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "scorm12AbsoluteValues") === "off";
/* 549 */

const getRegressiveScoring = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionValueByName"])(state, props, "regressiveScoring");
const regressiveScoringIsOff = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "regressiveScoring") === "off";
const regressiveScoringIsOn = (state, props) => Object(_index__WEBPACK_IMPORTED_MODULE_0__["getScreenOptionKeyByName"])(state, props, "regressiveScoring") === "on";

/***/ }),

/***/ "./react-app/modules/screens/selector/options.js":
/*!*******************************************************!*\
  !*** ./react-app/modules/screens/selector/options.js ***!
  \*******************************************************/
/*! exports provided: getScreenOptionValueByName, getScreenOptionKeyByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenOptionValueByName", function() { return getScreenOptionValueByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenOptionKeyByName", function() { return getScreenOptionKeyByName; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! re-reselect */ "./node_modules/re-reselect/dist/index.js");
/* harmony import */ var re_reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(re_reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./react-app/modules/screens/selector/data.js");
/* harmony import */ var _options_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../options/selector */ "./react-app/modules/options/selector/index.js");
/* harmony import */ var _lo_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lo/selector */ "./react-app/modules/lo/selector/index.js");






const getScreenOptions = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createDraftSafeSelector"])([_data__WEBPACK_IMPORTED_MODULE_3__["getScreen"]], screen => screen.options);
const getScreenOptionValueByName = re_reselect__WEBPACK_IMPORTED_MODULE_1___default()([getScreenOptions, _lo_selector__WEBPACK_IMPORTED_MODULE_5__["getLoOptions"], _options_selector__WEBPACK_IMPORTED_MODULE_4__["getOptionListAsList"], _options_selector__WEBPACK_IMPORTED_MODULE_4__["getOptionName"]], (screenOptions, loOptions, optionsList, optionName) => {
  if (!screenOptions || !loOptions || !optionsList || !optionName) {
    return;
  }

  const {
    screenOption,
    loOption,
    option
  } = getOptionObjects(screenOptions, loOptions, optionsList, optionName);

  if (!option) {
    return;
  }

  if (screenOption) {
    return screenOption.value || screenOption.key;
  } else if (loOption) {
    return loOption.value || loOption.key;
  } else {
    return option.values.first().key;
  }
})(_options_selector__WEBPACK_IMPORTED_MODULE_4__["getOptionName"]);
const getScreenOptionKeyByName = re_reselect__WEBPACK_IMPORTED_MODULE_1___default()([getScreenOptions, _lo_selector__WEBPACK_IMPORTED_MODULE_5__["getLoOptions"], _options_selector__WEBPACK_IMPORTED_MODULE_4__["getOptionListAsList"], _options_selector__WEBPACK_IMPORTED_MODULE_4__["getOptionName"]], (screenOptions, loOptions, optionsList, optionName) => {
  if (!screenOptions || !loOptions || !optionsList || !optionName) {
    return;
  }

  const {
    screenOption,
    loOption,
    option
  } = getOptionObjects(screenOptions, loOptions, optionsList, optionName);

  if (!option) {
    return;
  }

  if (screenOption) {
    return screenOption.key;
  } else if (loOption) {
    return loOption.key;
  } else {
    return option.values.first().key;
  }
})(_options_selector__WEBPACK_IMPORTED_MODULE_4__["getOptionName"]);

const getOptionObjects = (screenOptions, loOptions, optionsList, optionName) => {
  let option = optionsList.find(op => lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default()(op.name) === lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default()(optionName));
  let loOption = loOptions[option.id.toString()];
  let screenOption = screenOptions[option.id.toString()];
  return {
    option,
    loOption,
    screenOption
  };
};

/***/ }),

/***/ "./react-app/utils/registerActivityType.js":
/*!*************************************************!*\
  !*** ./react-app/utils/registerActivityType.js ***!
  \*************************************************/
/*! exports provided: registerActivityType, getActivityTypeIsRegistered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerActivityType", function() { return registerActivityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityTypeIsRegistered", function() { return getActivityTypeIsRegistered; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./react-app/store/index.js");

const registeredActivityTypes = {};
const registerActivityType = ({
  activityType,
  reducer,
  saga
}) => {
  if (reducer) {
    Object(_store__WEBPACK_IMPORTED_MODULE_0__["injectReducer"])(reducer);
  }

  if (saga) {
    Object(_store__WEBPACK_IMPORTED_MODULE_0__["injectSagas"])(saga);
  }

  registeredActivityTypes[activityType] = true;
};
const getActivityTypeIsRegistered = activityType => {
  return Boolean(registeredActivityTypes[activityType]);
};

/***/ })

}]);
//# sourceMappingURL=../dist-maps/ICCrossword-react-lib.bundle.js.map
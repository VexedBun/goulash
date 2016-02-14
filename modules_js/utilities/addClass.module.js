'use strict';

/**
 * addClass()
 *
 * @module          utilities/addClass
 * @author          Kristian Cox
 * @version         1.0.0
 * @description     Adds a class to a HTMLElement
 * @param           {HTMLElement} element - the element to add the class to
 * @param           {String} className - the class to add to the element
 */
export function addClass(element, className)
{
    if (element.classList) {
        element.classList.add(className);
    } else {
        element.className += ' ' + className;
    }
}

'use strict';

/**
 * A generic callback that can contain any code to be run after the function executes
 *
 * @callback genericCallback
 */

/**
 * forEach()
 *
 * @module          utilities/forEach
 * @author          Kristian Cox
 * @version         1.0.0
 * @description     Iterates through an array, or a list of nodes
 * @param           {array} array - the array to iterate over
 * @param           {genericCallback} callback - the code to run for each item in the array
 * @param           {*} scope - the scope
 */
export function forEach(array, callback, scope)
{
    for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
}

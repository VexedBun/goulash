'use strict';

/**
 * A generic callback that can contain any code to be run after the function executes
 *
 * @callback genericCallback
 */

/**
 * documentReady()
 *
 * @module          utilities/documentReady
 * @author          Kristian Cox
 * @version         1.0.0
 * @description     Runs a callback function after the DOM has finished loading
 * @param           {genericCallback} callback - contains code to be executed after DOM has finished loading
 */
export function documentReady(callback)
{
   if(document.readyState !== 'loading') {
       callback();
   } else {
       document.addEventListener('DOMContentLoaded', callback);
   }
}

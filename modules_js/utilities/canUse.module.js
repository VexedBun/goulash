'use strict';

/**
 * canUse()
 *
 * @module          utilities/canUse
 * @author          Kristian Cox
 * @version         1.0.0
 * @description     Performs a test to determine if a feature is supported by the browser
 * @param           {String} feature - The name of the feature
 * @returns         {boolean}
 */
export function canUse(feature)
{
    switch(feature) {
        case 'template':
            return 'content' in document.createElement('template');
    }
}

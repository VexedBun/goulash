'use strict';

import {canUse} from 'canUse.module';

/**
 * convertTemplate()
 *
 * @module          utilities/convertTemplate
 * @author          Kristian Cox
 * @version         1.0.0
 * @description     Converts a <template> element into a usable HTMLElement
 * @param           {HTMLElement} template - The <template> to Convert
 * @returns         {HTMLElement}
 */
export function convertTemplate(template)
{
    if(canUse('template')) {
        let fragment    = document.importNode(template.content, true);
        let temp        = document.createElement('div');
        temp.appendChild(fragment);
        return temp.firstElementChild;
    } else {
        return template.firstElementChild.cloneNode(true);
    }
}

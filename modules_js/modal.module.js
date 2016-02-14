'use strict';

/**
 * Modal Window Class
 *
 * @class
 * @author          Kristian Cox
 * @version         1.3.2
 * @description     A simple modal module
 * @property        {(HTMLElement|DocumentFragment)} element
 * @property        {HTMLElement} cancel - A reference to the cancal/close button
 * @property        {HTMLElement} confirm - A reference to the confirm button
 * @property        {String} title - The title to use for the Modal
 * @property        {String} body - The text to use for the body of the Modal
 * @property        {Object} args - Contains the defaults for user passed arguments
 * @property        {Object} settings - Contains the settings for every Modal instance

 */

import {addClass}           from './utilities/addClass.module';
import {convertTemplate}    from './utilities/convertTemplate.module';

export class Modal
{
    element;
    cancel;
    confirm;
    title;
    body;

    args = {
        type:      'success',
        title:     '',
        body:      '',
        callbacks: {}
    };

    settings = {
        elements: {
            confirm:   '.modal__confirm',
            cancel:    '.modal__cancel',
            title:     '.modal__header',
            body:      '.modal__body'
        },
        classes: {
            success:   'modal--success',
            info:      'modal--info',
            warning:   'modal--warning',
            danger:    'modal--danger'
        }
    };


    /**
     * Instantiates the Modal class
     *
     * @param {HTMLElement} template - The <template> element to clone
     * @param {Object[]} args - The options to pass to the Modal
     * @param {string} [args.type=success] - The type of modal window to display
     * @param {string} args.title - The Modal's title
     * @param {string} args.body - The Modal's message to display
     * @param {Object[]} args.callbacks - Optional callbacks to use
     */

    constructor(template, args)
    {
        if(typeof template === 'undefined') {
            throw new Error('[Modal Module] No template element was specified.');
        }

        this.element = convertTemplate(template);

        this.args               = Object.assign(this.args, args);

        this.title              = this.element.querySelector(this.settings.elements.title);
        this.body               = this.element.querySelector(this.settings.elements.body);
        this.confirm            = this.element.querySelector(this.settings.elements.confirm);
        this.cancel             = this.element.querySelector(this.settings.elements.cancel);

        addClass(this.element, this.settings.classes[this.args.type]);

        this.title.innerHTML    = this.args.title;
        this.body.innerHTML     = this.args.body;

        this.element            = document.body.appendChild(this.element);

        this.addListeners();
        this.confirm.focus();
    }

    /**
     * Attaches the event listeners and binds 'this'
     */
    addListeners()
    {
        this.destroy = this.destroy.bind(this);
        this.cancel.addEventListener('click', this.destroy);
    }

    /**
     * Detaches all event listeners
     */
    removeListeners()
    {
        this.cancel.removeEventListener('click', this.destroy);
    }

    /**
     * Destroys the element and optionally runs the close callback
     */
    destroy()
    {
        this.removeListeners();

        if(typeof this.args.callbacks.close !== 'undefined') {
            this.args.callbacks.close();
        }

        this.element.parentElement.removeChild(this.element);
    }
}

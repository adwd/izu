/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface IzuButtons {}
  interface IzuInput {}
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLIzuButtonsElement extends Components.IzuButtons, HTMLStencilElement {}
  var HTMLIzuButtonsElement: {
    prototype: HTMLIzuButtonsElement;
    new (): HTMLIzuButtonsElement;
  };

  interface HTMLIzuInputElement extends Components.IzuInput, HTMLStencilElement {}
  var HTMLIzuInputElement: {
    prototype: HTMLIzuInputElement;
    new (): HTMLIzuInputElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'izu-buttons': HTMLIzuButtonsElement;
    'izu-input': HTMLIzuInputElement;
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface IzuButtons extends JSXBase.HTMLAttributes<HTMLIzuButtonsElement> {
    'onToggleOff'?: (event: CustomEvent<any>) => void;
    'onToggleOn'?: (event: CustomEvent<any>) => void;
    'onWriteOff'?: (event: CustomEvent<any>) => void;
    'onWriteOn'?: (event: CustomEvent<any>) => void;
  }
  interface IzuInput extends JSXBase.HTMLAttributes<HTMLIzuInputElement> {}
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'izu-buttons': IzuButtons;
    'izu-input': IzuInput;
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}



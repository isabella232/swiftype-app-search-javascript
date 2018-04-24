'use strict'

/**
 * An individual search result
 */
export default class ResultItem {
  constructor(data) {
    this.data = data
  }

  /**
   * Return the HTML-unsafe raw value for a field, if it exists
   *
   * @param {String} key - name of the field
   *
   * @returns {any} the raw value of the field
   */
  getRaw(key) {
    return this.data[key].raw
  }

  /**
   * Return the HTML-safe snippet value for a field, if it exists
   *
   * @param {String} key - name of the field
   *
   * @returns {any} the snippet value of the field
   */
  getSnippet(key) {
    return this.data[key].snippet
  }
}
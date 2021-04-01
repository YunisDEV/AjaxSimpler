import { getCookie } from './utils'

class AjaxSimpler {
    constructor({
        csrftoken = null
    } = {}) {
        this._csrf_value = null
        this.csrftoken = csrftoken
        this._def_heads = {}
    }

    // Setting and getting csrftoken
    get csrftoken() {
        return this._csrf_value
    }
    set csrftoken(value) {
        if (value) this._csrf_value = getCookie(value)
    }

    // Getting and setting default headers
    addDefaultHeader(name, value) {
        this._def_heads[name] = value
    }
    deleteDefaultHeader(name){
        delete this._def_heads[name]
    }

    defaultHeaders() {
        let head = this._def_heads
        if (this.csrftoken) {
            head["X-CSRFToken"] = this.csrftoken
        }
        return head
    }

    // GET method
    GET(url, data = {}, header = {}) {
        return new Promise((resolve, reject) => {
            $.ajax({
                headers: {
                    ...this.defaultHeaders(),
                    ...header
                },
                data,
                url,
                type: "GET",
                success: function (data) {
                    resolve(data)
                },
                error: function (err) {
                    reject(err)
                }
            })
        })
    }

    // POST method
    POST(url, data = {}, header = {}) {
        return new Promise((resolve, reject) => {
            $.ajax({
                headers: {
                    ...this.defaultHeaders(),
                    ...header
                },
                data,
                url,
                type: "POST",
                success: function (data) {
                    resolve(data)
                },
                error: function (err) {
                    reject(err)
                }
            })
        })
    }
}

export default AjaxSimpler
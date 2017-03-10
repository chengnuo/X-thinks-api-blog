'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    console.log("少年你好")
    return this.display();
  }
  fuckAction(){
    //auto render template file index_index.html
    console.log("fuck")
    //return this.display();
    return this.success({
        "message":"fuck"
    });
  }
}

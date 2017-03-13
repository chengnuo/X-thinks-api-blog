'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async loginAction(){
    //auto render template file index_index.html
    let myPost = this.post();

    let userData = await this.model('user')
            .where({
                email: myPost.email,
                password:myPost.password
            })
            .find();
    console.log(userData)
    if(!think.isEmpty(userData)){
        return this.success()
    }else{
        return this.fail()
    }
  }

}

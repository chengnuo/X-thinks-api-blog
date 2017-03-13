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

    let userInfo = await this.model('user')
            .where({
                email: myPost.email,
                password:myPost.password
            })
            .find();
    console.log(userInfo)

    if(!think.isEmpty(userInfo)){
        await this.session('userInfo', userInfo);
        return this.success({
            "userInfo":userInfo
        })
    }else{
        return this.fail()
    }
  }

}

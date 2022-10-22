import utils from '../utils/common'

export default{
    install: (app) => {
        app.config.globalProperties.$utils = utils
    }
}
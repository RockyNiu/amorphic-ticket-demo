import * as Vue from 'vue';
import * as VueI18n from 'vue-i18n';
let en = require('./en.json');
let cn = require('./cn.json');

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'en',
    messages: {
        'en': en,
        'cn': cn
    }
})
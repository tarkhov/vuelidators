import { helpers } from 'vuelidate/lib/validators'
export default helpers.regex('alphaNum', /^[a-zA-Z0-9\s]*$/)

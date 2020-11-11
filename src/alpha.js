import { helpers } from 'vuelidate/lib/validators'
export default helpers.regex('alpha', /^[a-zA-Z\s]*$/)

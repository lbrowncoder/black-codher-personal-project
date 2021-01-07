import * as yup from 'yup';

let reviewValidateSchema = yup.object().shape({
    name: yup.string(). required(),
    email: yup.string().email().required(),
    ContactNumber: yup.number().required().positive().integer(),
})




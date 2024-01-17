import * as yup from "yup"

const phoneRegExp = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/
const aadharRegex = /^\d{4}\s\d{4}\s\d{4}$/
const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/

export const personalDetailSchema = yup
  .object({
    name: yup.string().required("Name is a required field"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .max(100)
      .required("Age is a required field"),
    sex: yup.string().required("Sex is a required field"),
    mobile: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid (+91)")
      .required("Mobile is a required field"),
    govtIdType: yup.string().required("Govt. Id type is a required field"),
    govtId: yup
      .string()
      .required("Govt. Id is a required field")
      .when("govtIdType", (govtIdType, schema) => {
        if (govtIdType[0] === "Aadhar") {
          return schema.matches(
            aadharRegex,
            "Aadhar Card is not valid (add space after 4 digits)",
          )
        } else {
          return schema.matches(panRegex, "PAN Card is not valid")
        }
      }),
  })
  .required()

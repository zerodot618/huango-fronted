// 登录
// class LoginField {
//     labelText: String
//     labelFor: String
//     id: String
//     name: String
//     type: String
//     autoComplete: String
//     isRequired: Boolean
//     placeholder: String
// }

const loginFields: Array<Object> = [
    {
        labelText: "Email",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "请输入邮箱地址"
    },
    {
        labelText: "密码",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "请输入你的密码"
    }
]

// 注册
const signupFields = [
    {
        labelText: "用户名",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "请输入账号"
    },
    {
        labelText: "Email",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "请输入邮箱地址"
    },
    {
        labelText: "密码",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "请输入密码"
    },
    {
        labelText: "确认密码",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        autoComplete: "confirm-password",
        isRequired: true,
        placeholder: "请输入确认密码"
    }
]

export { loginFields, signupFields }
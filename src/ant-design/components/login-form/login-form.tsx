import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="gmail"
        rules={[
          {
            required: true,
            message: "Bitte geben Sie Ihre E-Mail ein!",
            type: "email",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="bla bla bla "
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Bitte geben Sie Ihr Passwort ein!" },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="bla bla bla"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">Lassen Sie uns ein neues Konto erstellen</a>
      </Form.Item>
    </Form>
  );
};

export default App;
// #components-form-demo-normal-login .login-form {
//   max-width: 300px;
// }
// #components-form-demo-normal-login .login-form-forgot {
//   float: right;
// }
// #components-form-demo-normal-login .ant-col-rtl .login-form-forgot {
//   float: left;
// }
// #components-form-demo-normal-login .login-form-button {
//   width: 100%;
// }

import { Form, Input, Button, Layout } from 'antd'
import {LoginOutlined} from '@ant-design/icons'

function LoginForm(props){    
  const [form] = Form.useForm();
  const onFinish = (values) => {
    try{
      fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {'Content-Type':'application/json'}

      }).then(response => response.json())
        .then(data => isAccepted(data))

    } catch (e) {
        console.error(e)
    }
  }

  function isAccepted(data) {
    if(data.hasOwnProperty('error')){
          alert("Something went wrong :(")

    } else {
        props.onLoginUser(data)
        alert("You logged in :)")
    }
  }


  return(
    <Layout className="container" type="flex" justify="center" align="middle">
      
      <Form form={form} labelCol={{span: 8}} wrapperCol={{span: 8}} initialValues={{remember: true}} 
      labelAlign="center" name="login" onFinish={onFinish}>

        <Form.Item label="E-mail" name="email" rules={[{required: true, 
          message: 'Please enter your email!', },]}>
        <Input placeholder="example@email.com" type="email" required ></Input>
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{required: true, 
          message: 'Please enter your password!', },]}>
        <Input placeholder="secret ;)" type="password" required></Input>
        </Form.Item>

        <Form.Item style={{display: "flex", flexDirection: "center", justifyContent:"center" }}>
        <Button type="primary" htmlType="submit"><LoginOutlined />Log in</Button>
        </Form.Item>
        
      </Form>
    </Layout>
  )
}

export default LoginForm
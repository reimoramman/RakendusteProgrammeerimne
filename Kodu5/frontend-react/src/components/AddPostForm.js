import {Form, Input, Button, Layout} from 'antd'
import {FileAddOutlined} from '@ant-design/icons'

function AddPostsForm(){
  const [form] = Form.useForm()
  const onFinish = (values) => {

  try{
    fetch('http://localhost:8081/api/post/create', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {'Content-Type':'application/json'}
    })

  } catch (e) {
      console.error(e)
  }
      alert("Post successfully added")
      console.log('Success:', values)
      form.resetFields()
  }


  return(

    <Layout className="container" type="flex" justify="center" align="middle">

    <Form form={form} labelCol={{span: 8,}} wrapperCol={{span: 8,}} initialValues={{remember: true,}}
    onFinish={onFinish} autoComplete="off">

      <Form.Item label="Title" name="title" rules={[{required: true, 
      message: 'Please enter a title!', },]}>
      <Input/>
      </Form.Item>

      <Form.Item label="Text" name="text" rules={[{required: true, 
      message: 'Please enter some text!', },]}>
      <Input.TextArea showCount maxLength={3000}/>
      </Form.Item>

      <Form.Item wrapperCol={{offset: 8,span: 8,}}>
      <Button type="primary" htmlType="submit"><FileAddOutlined/>Add new post</Button>
      </Form.Item>

    </Form>
    </Layout>

  )
}

export default AddPostsForm
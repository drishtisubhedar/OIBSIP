import React from 'react';
import { Alert, Button, Card, Flex, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import userLogin from '../hooks/userLogin';
import Spin from 'antd/lib/spin';

const Login = () => {
    const {error, loading, loginUser} = userLogin();
    const handleLogin = async (values) =>{
        await loginUser(values);
    }
    return (
        <Card className='form-main'>
            <Flex align='center'>
                {/*Image*/}
                <Flex flex={1}>
                    <img src='https://i.pinimg.com/564x/7c/c6/37/7cc6371b12bdcae59e0cd65dd669ab5e.jpg' className='login-image'></img>
                </Flex>

                {/*form*/}
                <Flex vertical flex={1}>
                    <Typography.Title level={3} strong className='title'>
                        Sign In
                    </Typography.Title>
                    <Typography.Text type='secondary' strong className='subheading'>
                        Key to your success!
                    </Typography.Text>
                    <Form layout="vertical" onFinish={handleLogin} autoComplete='off'>
                        <Form.Item label="Email" name="email" rules={[
                            {
                                required: true,
                                message: "Please enter Email id "
                            },
                            {
                                type: 'email',
                                message: 'Email id is not valid!',
                            }
                        ]}>
                            <Input size='large' placeholder="Enter Email" />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[
                            {
                                required: true,
                                message: "Please enter Password "
                            },
                        ]}>
                            <Input.Password size='large' placeholder="Enter Password" />
                        </Form.Item>

                        { error && (
                            <Alert description={error} type='error' showIcon closable className='alert'/>
                        )}

                        <Form.Item>
                            <Button type={`${loading ? '': 'primary'}`} htmlType='submit' size='large' className='button'> {loading ? <Spin/> : 'Sign In'}</Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to="/">
                                <Button size='large' className='button2'>Create an Account</Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Flex>
            </Flex>
        </Card>
    )
};

export default Login;
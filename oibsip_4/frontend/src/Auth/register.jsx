import React from 'react';
import { Alert, Button, Card, Flex, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Spin from 'antd/lib/spin';
import userSignup from '../hooks/userSignUp';


const Register = () => {
    const {loading, error, registerUser} = userSignup();
    const handleRegister = (values) => {
        registerUser(values);
    };

    return (
        <Card className='form-main'>
            <Flex align='center'>
                {/*form*/}
                <Flex vertical flex={1}>
                    <Typography.Title level={3} strong className='title'>
                        Create an account
                    </Typography.Title>
                    <Typography.Text type='secondary' strong className='subheading'>
                        Join us!
                    </Typography.Text>
                    <Form layout="vertical" onFinish={handleRegister} autoComplete='off'>
                        <Form.Item label="Full Name" name="name" rules={[
                            {
                                required: true,
                                message: "Please enter Full name"
                            },
                        ]}>
                            <Input size='large' placeholder="Enter Full name" />
                        </Form.Item>
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
                        <Form.Item label="Password" name="passwordConfirm" rules={[
                            {
                                required: true,
                                message: "Please Re-enter Password "
                            },
                        ]}>
                            <Input.Password size='large' placeholder="Re-enter Password" />
                        </Form.Item>

                        { error && (
                            <Alert description={error} type='error' showIcon closable className='alert'/>
                        )}

                        <Form.Item>
                            <Button type={`${loading ? '': 'primary'}`} htmlType='submit' size='large' className='button'> {loading ? <Spin/> : 'Create Account'}</Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to="/login">
                                <Button size='large' className='button2'>Sign-In</Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Flex>

                {/*Image*/}
                <Flex flex={1}>
                    <img src='https://i.pinimg.com/564x/fe/86/f6/fe86f661ea9aa27c6e1ecd7c5ac6b5b2.jpg' className='signup-image'></img>
                </Flex>
            </Flex>
        </Card>
    )
};

export default Register;
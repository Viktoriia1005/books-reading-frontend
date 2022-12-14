import {
    Button,
    Container,
    DesktopBox,
    EnterBtn,
    ErrText,
    Form,
    GoogleIcon,
    Input,
    Label,
    LabelText,
    Link,
    LinkBox,
    LinkSpan,
    MobBox,
    PasLabel,
    Span,
    TabletBox,
} from './SignUpForm.styled';
import googleIcon from '../../images/svg/google-icon.png';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/auth-operations';

const SignUpForm = () => {
    const [checkPas, setCheckPas] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const isPassMatch = (Pas, confirmPas) => {
        if (Pas !== confirmPas) {
            setCheckPas(false);
            return false;
        }
        setCheckPas(true);
        return true;
    };

    const onSubmit = data => {
        const { password, confirmPas, name, email } = data;

        if (!isPassMatch(password, confirmPas)) return;

        const signUpData = { name, email, password };

        dispatch(signUp(signUpData));
    };

    return (
        <>
            <Container>
                <DesktopBox>
                    <TabletBox>
                        <MobBox>
                            <Button href="https://books-reading-goit.herokuapp.com/auth/google">
                                <GoogleIcon>
                                    <img
                                        src={googleIcon}
                                        alt="google"
                                        width="18px"
                                        height="18px"
                                    />
                                </GoogleIcon>
                                Google
                            </Button>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Label>
                                    <LabelText>
                                        ?????????<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="text"
                                        placeholder="..."
                                        autoFocus="on"
                                        name="name"
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message:
                                                    '???????? ????????? ???????????????????????',
                                            },

                                            minLength: {
                                                value: 3,
                                                message:
                                                    '????????? ?????????????? ???????? ???????????? ?????????? ????????????????',
                                            },

                                            pattern: {
                                                value: /[??-????-??0-9a-zA-Z][^\W]/,
                                                message:
                                                    '????????? ?????????????? ???????????????????? ???????????? ?? ???????? ???? ????????',
                                            },
                                        })}
                                        aria-invalid={
                                            errors.name ? 'true' : 'false'
                                        }
                                    />

                                    {errors.name && (
                                        <ErrText role="alert">
                                            {errors.name?.message}
                                        </ErrText>
                                    )}
                                </Label>

                                <Label>
                                    <LabelText>
                                        ???????????????????? ????????????<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="email"
                                        placeholder="your@email.com"
                                        name="email"
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: '?????????????? ?????? email',
                                            },
                                            pattern: {
                                                value: /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                                                message:
                                                    '?????????????? ?????????????????? ???????????????????? ???????????? ',
                                            },
                                        })}
                                        aria-invalid={
                                            errors.email ? 'true' : 'false'
                                        }
                                    />
                                    {errors.email && (
                                        <ErrText role="alert">
                                            {errors.email?.message}
                                        </ErrText>
                                    )}
                                </Label>

                                <PasLabel>
                                    <LabelText>
                                        ????????????<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="password"
                                        placeholder="..."
                                        name="password"
                                        {...register('password', {
                                            required: "???????? ???????????? ????????'????????????",
                                            pattern: {
                                                value: /^([A-Za-z]|[0-9])+$/,
                                                message:
                                                    '???????????? ?????????????? ???????????????????? ?? ???????????????????? ???????? ???? ????????',
                                            },
                                            minLength: {
                                                value: 6,
                                                message:
                                                    '?????????????? ???????????? ???? ?????????? 6 ????????????????',
                                            },
                                        })}
                                        aria-invalid={
                                            errors.password ? 'true' : 'false'
                                        }
                                    />
                                    {errors.password && (
                                        <ErrText role="alert">
                                            {errors.password?.message}
                                        </ErrText>
                                    )}
                                </PasLabel>

                                <PasLabel>
                                    <LabelText>
                                        ?????????????????????? ????????????<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="password"
                                        placeholder="..."
                                        name="confirmPas"
                                        {...register('confirmPas', {
                                            required: true,
                                        })}
                                        aria-invalid={
                                            errors.confirmPas ? 'true' : 'false'
                                        }
                                    />
                                    {!checkPas && (
                                        <ErrText role="alert">
                                            ???????????? ?????????????????? ???????? ????????????????????
                                        </ErrText>
                                    )}
                                </PasLabel>

                                <EnterBtn
                                    variant="accent"
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    ??????????????????????????????
                                </EnterBtn>
                            </Form>

                            <LinkBox>
                                <LinkSpan>?????? ?? ?????????</LinkSpan>{' '}
                                <Link to={'/signin'}>????????????</Link>
                            </LinkBox>
                        </MobBox>
                    </TabletBox>
                </DesktopBox>
            </Container>
        </>
    );
};

export default SignUpForm;

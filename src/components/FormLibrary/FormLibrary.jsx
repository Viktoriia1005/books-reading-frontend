import {Controller, useForm} from 'react-hook-form';
import {Button, Form, Icon, Input, Label, Wrapper,} from './FormLibrary.styled';
import icons from '../../images/svg/icons.svg';
import {Link} from 'react-router-dom';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useState} from 'react';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {format} from 'date-fns';
import {WrapYear, YearPicker} from '../Modals/RatingModal/RatingModal.styled';

const FormLibrary = () => {
    const { register, handleSubmit, reset, control } = useForm();
    const [reqDate, setReqDate] = useState(new Date());

    const onSubmit = data => {
        const { title, author, pages } = data;
        const year = format(data.reqDate, 'yyyy');
        const newBook = { title, author, pages, year };

        console.log(newBook);
        reset();
    };

    return (
        <Wrapper>
            <Link to={'..'}>
                <Icon width="24" height="12">
                    <use href={`${icons}#icon-arrowBack`} />
                </Icon>
            </Link>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>
                    Назва книги
                    <Input
                        {...register('title', { required: true })}
                        type="text"
                        name="title"
                        placeholder="..."
                        variant={'border'}
                    />
                </Label>
                <Label>
                    Автор книги
                    <Input
                        {...register('author', { required: true })}
                        type="text"
                        name="author"
                        placeholder="..."
                    />
                </Label>
                <Controller
                    name="reqDate"
                    defaultValue={reqDate}
                    control={control}
                    render={({ field: { onChange, ...restField } }) => (
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                views={['year']}
                                onChange={event => {
                                    onChange(event);
                                    setReqDate(event);
                                }}
                                renderInput={params => (
                                    <Label>
                                        <span>Рік випуску</span>
                                        <WrapYear>
                                            <YearPicker {...params} />
                                        </WrapYear>
                                    </Label>
                                )}
                                {...restField}
                            />
                        </LocalizationProvider>
                    )}
                />
                <Label>
                    Кількість сторінок
                    <Input
                        {...register('pages', { required: true })}
                        type="number"
                        name="pages"
                        placeholder="..."
                        min="1"
                    />
                </Label>

                <Button type="submit" variant={'transparent'}>
                    Додати
                </Button>
            </Form>
        </Wrapper>
    );
};

export default FormLibrary;

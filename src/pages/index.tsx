import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInformData = {
  email: string,
  password: string
}

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório.').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
}).required()

export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  console.log(errors)

  const handleSignIn: SubmitHandler<SignInformData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000)) // fazer a função demorar 2 segundos

    console.log(values)


  }

  // const handleSignIn = data => console.log(data)

  return (
    <Flex
      w="100vw"
      h='100vh'
      alignItems='center'
      justify='center'>

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>

          <Input
            name='email'
            type='email'
            label='E-mail'
            error={errors.email}
            {...register('email')}
          />

          <Input
            name='password'
            type='password'
            label='Senha'
            error={errors.password}
            {...register('password')}
          />


        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={isSubmitting} // propriedade do chakra e passa dentro uma função do useForm
        >
          Entrar
        </Button>
      </Flex>

    </Flex>
  )
}

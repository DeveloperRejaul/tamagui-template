import { Link } from 'expo-router';
import { YStack } from 'tamagui';
import Input from '@component/input/input'

import { Container, Title, Subtitle, Button, ButtonText } from '@config'
import { useForm } from 'react-hook-form';

export default function Page() {
  const { control, handleSubmit } = useForm()

  const onsubmit = (data: any) => {
    console.log(data);
  }

  return (
    <Container flex={1} justifyContent="space-between" alignItems="center">
      <YStack>
        <Title>Hello World</Title>
        <Subtitle>This is the first page of your app.</Subtitle>
      </YStack>
      <Input control={control} name='email' defaultValue='' />

      <Button onPress={handleSubmit(onsubmit)}>
        <ButtonText>Submit</ButtonText>
      </Button>

      <Link href="/details" asChild>
        <Button>
          <ButtonText>Show Details</ButtonText>
        </Button>
      </Link>
    </Container>
  );
}

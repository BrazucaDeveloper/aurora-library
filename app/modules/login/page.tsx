import { Field, Form } from '@my-components/form';
import { Button } from '@shadcn-ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@shadcn-ui/card';
import { Input } from '@shadcn-ui/input';
import { Label } from '@shadcn-ui/label';
import { useId } from 'react';

export function LoginPage() {
	const formId = useId();

	return (
		<Card className='w-full max-w-md'>
			<CardHeader>
				<CardTitle>Welcome to back!</CardTitle>
				<CardDescription>
					Enter your credentials below to login to your account.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form method='POST' id={formId} className='space-y-6'>
					<Field>
						<Label htmlFor='useremail'>Email</Label>
						<Input
							required
							type='email'
							id='useremail'
							name='user-email'
							autoComplete='email'
							placeholder='Insert your email'
							className='h-11'
						/>
					</Field>

					<Field>
						<Label htmlFor='userpasswd'>Senha</Label>
						<Input
							required
							id='userpasswd'
							type='password'
							name='user-passwd'
							autoComplete='off'
							placeholder='Insert your password'
							className='h-11'
						/>
					</Field>
				</Form>
			</CardContent>

			<CardFooter>
				<Button type='submit' form={formId} className='h-11 w-full text-balance'>
					Continuar
				</Button>
			</CardFooter>
		</Card>
	);
}

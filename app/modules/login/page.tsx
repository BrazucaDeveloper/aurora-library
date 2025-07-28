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
import { Form } from 'react-router';

export function LoginPage() {
	return (
		<Card className='w-full max-w-md'>
			<CardHeader>
				<CardTitle>Welcome to back!</CardTitle>
				<CardDescription>
					Enter your credentials below to login to your account.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form method='POST' id='auth-form' className='space-y-6'>
					<div className='space-y-2'>
						<Label htmlFor='useremail'>Email</Label>
						<Input
							required
							type='email'
							id='useremail'
							name='user-email'
							autoComplete='email'
							placeholder='Insert your email'
							className='h-12'
						/>
					</div>

					<div className='space-y-2'>
						<Label htmlFor='userpasswd'>Senha</Label>
						<Input
							required
							id='userpasswd'
							type='password'
							name='user-passwd'
							autoComplete='off'
							placeholder='Insert your password'
							className='h-12'
						/>
					</div>
				</Form>
			</CardContent>

			<CardFooter className='mt-4'>
				<Button
					type='submit'
					form='auth-form'
					className='w-full h-12 text-balance'
				>
					Continuar
				</Button>
			</CardFooter>
		</Card>
	);
}

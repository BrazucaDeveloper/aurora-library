import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@shadcn-ui/card"

import { Button } from "@shadcn-ui/button"

import { LoginForm } from "./login-form"

export function LoginPage() {
	return (
		<Card className="w-full max-w-md">
			<CardHeader>
				<CardTitle className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
					Welcome to back!
				</CardTitle>
				<CardDescription className="text-center">
					Enter your credentials below to login to your account.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<LoginForm />
			</CardContent>

			<CardFooter className="mt-4">
				<Button
					type="submit"
					form="auth-form"
					className="w-full h-12 text-balance"
				>
					Continuar
				</Button>
			</CardFooter>
		</Card>
	);
}

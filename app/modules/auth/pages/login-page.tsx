import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@shadcn-ui/card"

import { Input } from "@shadcn-ui/input"
import { Label } from "@shadcn-ui/label"
import { Button } from "@shadcn-ui/button"

import { Form } from "react-router"

export function LoginPage() {
	return (
		<Card className="bg-transparent border-0 text-stone-200 w-full max-w-md">
			<CardHeader>
				<CardTitle className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
					Welcome to back!
				</CardTitle>
				<CardDescription className="text-center text-stone-400">
					Enter your credentials below to login to your account.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form method="POST" id="auth-form" className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor='userlogin'>Email</Label>
						<Input
							required
							type="email"
							id='userlogin'
							name="userlogin"
							placeholder="Insert your email"
							className="h-12 bg-stone-800"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor='userpasswd'>Senha</Label>
						<Input
							required
							id="userpasswd"
							type="password"
							name="userpasswd"
							placeholder="Insert your password"
							className="h-12 bg-stone-800"
						/>
					</div>
				</Form>
			</CardContent>

			<CardFooter className="mt-4">
				<Button
					type="submit"
					form="auth-form"
					variant="secondary"
					className="w-full h-12 text-balance"
				>
					Continuar
				</Button>
			</CardFooter>
		</Card>
	);
}

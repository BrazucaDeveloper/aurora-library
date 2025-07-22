import { Form } from "react-router";

import { Input } from "@shadcn-ui/input";
import { Label } from "@shadcn-ui/label";

export function LoginForm() {
  return (
    <Form method="post" id="auth-form" className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor='userlogin'>Email</Label>
        <Input
          required
          type="email"
          id='userlogin'
          name="userlogin"
          placeholder="Insert your email"
          className="h-12"
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
          className="h-12"
        />
      </div>
    </Form>
  );
}
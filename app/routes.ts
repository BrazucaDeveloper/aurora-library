import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('layouts/auth.layout.tsx', [
    index("./_public/login.tsx"),
  ]),

  layout('layouts/workspace.layout.tsx', [
    route('/dashboard', './_private/workspace/dashboard.tsx'),
    route('/clients/:cid?', './_private/workspace/clients.tsx'),
    route('/books/:bid?', './_private/workspace/books.tsx'),
    route('/loans/:lid?', './_private/workspace/loans.tsx'),
  ]),
] satisfies RouteConfig;

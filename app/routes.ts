import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('layouts/auth.layout.tsx', [
    index("routes/_public/login.tsx"),
  ]),

  layout('layouts/workspace.layout.tsx', [
    route('/dashboard', 'routes/_private/workspace/dashboard.tsx'),
    route('/clients/:cid?', 'routes/_private/workspace/clients.tsx'),
    route('/books/:bid?', 'routes/_private/workspace/books.tsx'),
    route('/loans/:lid?', 'routes/_private/workspace/loans.tsx'),
  ]),
] satisfies RouteConfig;

// React Router generated types for route:
// features/products/pages/daily-leaderboard-page.tsx

import type * as T from "react-router/route-module";

import type { Info as Parent0 } from "../../../../+types/root.js";

type Module = typeof import("../daily-leaderboard-page.js");

export type Info = {
  parents: [Parent0];
  id: "features/products/pages/daily-leaderboard-page";
  file: "features/products/pages/daily-leaderboard-page.tsx";
  path: "products/leaderboards/daily/:year/:month/:day";
  params: { year: string; month: string; day: string } & {
    [key: string]: string | undefined;
  };
  module: Module;
  loaderData: T.CreateLoaderData<Module>;
  actionData: T.CreateActionData<Module>;
};

export namespace Route {
  export type LinkDescriptors = T.LinkDescriptors;
  export type LinksFunction = () => LinkDescriptors;

  export type MetaArgs = T.CreateMetaArgs<Info>;
  export type MetaDescriptors = T.MetaDescriptors;
  export type MetaFunction = (args: MetaArgs) => MetaDescriptors;

  export type HeadersArgs = T.HeadersArgs;
  export type HeadersFunction = (args: HeadersArgs) => Headers | HeadersInit;

  export type unstable_MiddlewareFunction =
    T.CreateServerMiddlewareFunction<Info>;
  export type unstable_ClientMiddlewareFunction =
    T.CreateClientMiddlewareFunction<Info>;
  export type LoaderArgs = T.CreateServerLoaderArgs<Info>;
  export type ClientLoaderArgs = T.CreateClientLoaderArgs<Info>;
  export type ActionArgs = T.CreateServerActionArgs<Info>;
  export type ClientActionArgs = T.CreateClientActionArgs<Info>;

  export type HydrateFallbackProps = T.CreateHydrateFallbackProps<Info>;
  export type ComponentProps = T.CreateComponentProps<Info>;
  export type ErrorBoundaryProps = T.CreateErrorBoundaryProps<Info>;
}

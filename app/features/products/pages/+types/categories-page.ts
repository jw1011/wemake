import type { LoaderArgs, ActionArgs, MetaFunction } from "@react-router/dev";

export interface Route {
  LoaderArgs: LoaderArgs;
  ActionArgs: ActionArgs;
  MetaFunction: MetaFunction;
  ComponentProps: {
    loaderData: {};
  };
}

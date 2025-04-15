import type { LoaderArgs, ActionArgs, MetaFunction } from "@react-router/dev";

export interface Route {
  LoaderArgs: LoaderArgs & {
    params: {
      category: string;
    };
  };
  ActionArgs: ActionArgs;
  MetaFunction: MetaFunction;
  ComponentProps: {
    loaderData: {
      category: string;
    };
  };
}

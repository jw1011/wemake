import type { LoaderArgs, ActionArgs, MetaFunction } from "@react-router/dev";

export interface Route {
  LoaderArgs: LoaderArgs & {
    params: {
      year: string;
      month: string;
    };
  };
  ActionArgs: ActionArgs;
  MetaFunction: MetaFunction;
  ComponentProps: {
    loaderData: {
      year: string;
      month: string;
    };
  };
}

import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction as RRMetaFunction,
  ComponentProps as RRComponentProps,
} from "@react-router/dev";

export namespace Route {
  export type LoaderArgs = LoaderFunctionArgs;
  export type ActionArgs = ActionFunctionArgs;
  export type MetaFunction = RRMetaFunction;
  export type ComponentProps = RRComponentProps;
}

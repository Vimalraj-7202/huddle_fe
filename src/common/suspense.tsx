import { CircularProgress, Box } from "@mui/material";
import {
  Suspense,
  lazy,
  type ComponentType,
  type LazyExoticComponent,
  type ReactElement,
} from "react";

type PageModule = { default: ComponentType<object> };

export function Spinner() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress
        size={100}
        thickness={1}
        sx={{
          color: "#3642bb",
        }}
      />
    </Box>
  );
}

export const loadPage = (importer: () => Promise<unknown>) =>
  lazy(importer as () => Promise<PageModule>);

export const SuspenseWrapper = <P extends object>(
  Component: LazyExoticComponent<ComponentType<P>>
) => {
  const Wrapped = (props: P): ReactElement => (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );
  return Wrapped;
};

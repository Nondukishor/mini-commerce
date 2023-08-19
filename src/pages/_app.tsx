import "@/styles/globals.css";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { AppPropsWithLayout } from "../../utils/type";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    (Component.getLayout as any) || ((page: ReactElement) => page);

  return <Provider store={store}> {
    getLayout(<Component {...pageProps} />)}
  </Provider>
}

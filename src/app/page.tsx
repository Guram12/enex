


import MainPageClient from "./MainPageClient";
import Providers from "./utils/I18n_provider";



export default function Page() {
  return (
    <Providers>
      <MainPageClient />
    </Providers>
  );
}
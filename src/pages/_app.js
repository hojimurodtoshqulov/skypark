import { appWithTranslation } from "next-i18next";
import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import "@/styles/main.scss";
// import "https://db.onlinewebfonts.com/c/1238db2fc008ce88465a792fad1e5519?family=Druk+Wide+Medium+Regular";

function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default appWithTranslation(App);

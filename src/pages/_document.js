import { Html, Head, Main, NextScript } from "next/document";
import SEO from "@/components/SEO";
export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<SEO />
			<link rel="icon" href="/images/head_logo.png" sizes="any" />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

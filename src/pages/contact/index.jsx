import React from "react";
import ZoneShowcase from "@/components/zoneShowcase";
import Social from "@/components/social";
import Times from "@/components/times";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Location from "@/components/location/location";

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

const Contact = () => {
	const { t } = useTranslation();
	const contactShowcase = {
		title: t("contact.title"),
		heading: "+998 90 788 66 61",
		text: t("contact.text"),
	};
	return (
		<>
			<ZoneShowcase data={contactShowcase} />
			<Location />
			<Social />
			<Times />
		</>
	);
};

export default Contact;

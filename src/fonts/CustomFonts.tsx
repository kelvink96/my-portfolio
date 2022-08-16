import { Global } from '@mantine/core';
import thin from './Poppins/Poppins-Thin.woff2';
import extraLight from './Poppins/Poppins-ExtraLight.woff2';
import light from './Poppins/Poppins-Light.woff2';
import regular from './Poppins/Poppins-Regular.woff2';
import medium from './Poppins/Poppins-Medium.woff2';
import semiBold from './Poppins/Poppins-SemiBold.woff2';
import bold from './Poppins/Poppins-Bold.woff2';
import extraBold from './Poppins/Poppins-ExtraBold.woff2';
import heavy from './Poppins/Poppins-Black.woff2';

export function CustomFonts() {
	return (
		<Global
			styles={[
				{
					'@font-face': {
						fontFamily: 'Poppins',
						src: `url('${thin}') format("woff2")`,
						fontWeight: 100,
						fontStyle: 'normal',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Poppins',
						src: `url('${extraLight}') format("woff2")`,
						fontWeight: 200,
						fontStyle: 'normal',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Poppins',
						src: `url('${light}') format("woff2")`,
						fontWeight: 300,
						fontStyle: 'normal',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Poppins',
						src: `url('${regular}') format("woff2")`,
						fontWeight: 400,
						fontStyle: 'normal',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Poppins',
						src: `url('${medium}') format("woff2")`,
						fontWeight: 500,
						fontStyle: 'normal',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Poppins',
						src: `url('${semiBold}') format("woff2")`,
						fontWeight: 600,
						fontStyle: 'normal',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Poppins',
						src: `url('${bold}') format("woff2")`,
						fontWeight: 700,
						fontStyle: 'normal',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Poppins',
						src: `url('${extraBold}') format("woff2")`,
						fontWeight: 800,
						fontStyle: 'normal',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Poppins',
						src: `url('${heavy}') format("woff2")`,
						fontWeight: 900,
						fontStyle: 'normal',
					},
				},
			]}
		/>
	);
}

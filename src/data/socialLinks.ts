import {
	BrandBehance,
	BrandDribbble,
	BrandFacebook,
	BrandGithub,
	BrandInstagram,
	BrandLinkedin,
	BrandTwitter,
	BrandYoutube,
	Underline
} from "tabler-icons-react";

enum socialLinkType {
	socialProfile,
	showcaseProfile
}

export const socialLinks = {
	"links": [
		{
			"link": "https://www.facebook.com/kelvinkk96",
			"label": "facebook",
			"icon": BrandFacebook,
			"type": socialLinkType.socialProfile
		},
		{
			"link": "https://www.linkedin.com/in/kelvink96/",
			"label": "linkedin",
			"icon": BrandLinkedin,
			"type": socialLinkType.socialProfile
		},
		{
			"link": "https://www.twitter.com/kelvink_96",
			"label": "twitter",
			"icon": BrandTwitter,
			"type": socialLinkType.socialProfile
		},
		{
			"link": "https://www.instagram.com/kelvink_96/",
			"label": "instagram",
			"icon": BrandInstagram,
			"type": socialLinkType.socialProfile
		},
		{
			"link": "https://www.youtube.com/channel/UCtSLVZBTdEw475v3NmKfQ3g",
			"label": "youtube",
			"icon": BrandYoutube,
			"type": socialLinkType.socialProfile
		},
		{
			"link": "https://dribbble.com/kelvink96",
			"label": "dribbble",
			"icon": BrandDribbble,
			"type": socialLinkType.showcaseProfile
		},
		{
			"link": "https://www.behance.net/kelvink96",
			"label": "behance",
			"icon": BrandBehance,
			"type": socialLinkType.showcaseProfile
		},
		{
			"link": "https://www.uplabs.com/kelvink96",
			"label": "uplabs",
			"icon": Underline,
			"type": socialLinkType.showcaseProfile
		},
		{
			"link": "https://www.github.com/kelvink96",
			"label": "github",
			"icon": BrandGithub,
			"type": socialLinkType.showcaseProfile
		},


	]
}

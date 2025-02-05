const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
	if (IS_DEV) {
		return "com.sasha98.StickerSmash.dev";
	}

	if (IS_PREVIEW) {
		return "com.sasha98.StickerSmash.preview";
	}

	return "com.sasha98.StickerSmash";
};

const getAppName = () => {
	if (IS_DEV) {
		return "StickerSmash (Dev)";
	}

	if (IS_PREVIEW) {
		return "StickerSmash (Preview)";
	}

	return "StickerSmash: Emoji Stickers";
};

export default {
	name: getAppName(),
	slug: "StickerSmash",
	version: "1.0.0",
	orientation: "portrait",
	icon: "./assets/images/icon.png",
	scheme: "myapp",
	userInterfaceStyle: "automatic",
	newArchEnabled: true,
	ios: {
		supportsTablet: true,
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/images/adaptive-icon.png",
			backgroundColor: "#ffffff",
		},
		package: getUniqueIdentifier(),
	},
	web: {
		bundler: "metro",
		output: "static",
		favicon: "./assets/images/favicon.png",
	},
	plugins: [
		"expo-router",
		[
			"expo-splash-screen",
			{
				image: "./assets/images/icon.png",
				imageWidth: 200,
				resizeMode: "contain",
				backgroundColor: "#ffffff",
			},
		],
	],
	experiments: {
		typedRoutes: true,
	},
	updates: {
		url: "https://u.expo.dev/0f15540a-97e7-4d9b-87ff-443cacac289f",
	},
	runtimeVersion: {
		policy: "appVersion",
	},
	extra: {
		router: {
			origin: false,
		},
		eas: {
			projectId: "0f15540a-97e7-4d9b-87ff-443cacac289f",
		},
	},
	owner: "sasha98",
};

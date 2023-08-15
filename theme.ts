import { buildLegacyTheme } from "sanity";

//color props for sanity backend
export const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--aj-brand": "#f7ab0a",
    "--my-red": "#db4437",
    "--my-yellow": "#f4b400",
    "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
    //base colors
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#665",
    "--gray-base": "#665",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    "--brand-primary": props["--aj-brand"],

    "--default-button-color": "#665",
    "--default-button-primary-color": props["--aj-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],

    "--state-info-color": props["--aj-brand"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--aj-brand"],
});
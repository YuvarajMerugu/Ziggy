// Connection between nextjs application and sanity
import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "fgbfp1u8",
    dataset: 'production',
    apiVersion: "2022-11-13",
    useCdn: true,
    token: "skDbyhL2Xe1X4Z52PcatTIPw1OEqhrzGflroGUWpg1WTnAxGfxv7EvSdLis1GZC2LDJ1OlNhfBC4mzht4aT6Vvgm8hZ2QzhPGxwYNRjvfUW6qWUBXqpp97rPU6G4pIRlvR1dV6RSIXjAFmKuc64wiq8xT5te3w27328HBm0Ape0quM8gS8OM",

})
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)

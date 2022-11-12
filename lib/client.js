// Connection between nextjs application and sanity
import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client=sanityClient({
    projectId:"fgbfp1u8",
    dataset:'production',
    apiVersion: "2022-11-11",
    useCdn: true,
    toekn:"skfvHs1FIoRmNXSQe0GDU3voQKF7e4HX1rYxwxelAT2cwi9UbpQEmFzWraBDgoo4A5ENhYpUj6NjQ2ECDqbOuZvM0JqR0FooM0WDdy13mT9h7lB8lOWqhBBNQZQeQxTWT6gL2jMLWMDTDyXsrjElIHqAauly5pB6QIg1ZVX4bxVEeTl5GPk1"

})
const builder=ImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source)

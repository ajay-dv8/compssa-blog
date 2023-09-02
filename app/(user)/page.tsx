import { draftMode } from "next/headers";
import { groq } from 'next-sanity'
import { getClient } from "@/lib/sanity.client";
import PreviewProvider from "../../components/previewProvider";
import BlogList from "@/components/BlogList";

//import PreviewDocumentsCount from "@/components/PreviewDocumentsCount";
//import { client } from "@/sanity/lib/client";

export const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_creaedAt desc)`;

/* rerender every 2mins */
/* REMOVE COMMENT ON PROD BUILD */
//export const revalidate = 120
export default async function HomePage() {

  const preview = draftMode().isEnabled;

  if (preview) {
    return (
      <PreviewProvider token={""}>

      {/** preview blog list
      <PreviewDocumentsCount data={''}/>
      */}
      </PreviewProvider>
    );
  }

  const posts = await getClient.fetch(query);
  return (
    <>
    <BlogList post={posts}/>
    </>
  );
}

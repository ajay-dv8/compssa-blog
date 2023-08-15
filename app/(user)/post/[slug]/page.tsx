import {urlForImage} from '@/lib/urlFor';
import { getClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from 'next/image';
import user from '../../../../public/user.svg'
import { Category } from '@/typings';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/richTextComponent';
//import { client } from '@/sanity/lib/client';

type Props = {
    params: {
        slug: string | React.ReactNode;
    }
};

/*revalidate the page every 2 mins*/
//export const revalidate = 120;

/*this is to builld static pages to speed up the app*/
/*like the blog pages are built at build time or when the app is started*/

/*  SSR
export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
  { slug } `;

  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug.slug.current); 

  return slugRoutes.map((slug: any) => ({
    slug,
  }));
}
*/
async function Post({ params: { slug  } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `;

  const post /*: Post*/ = await getClient.fetch(query, { slug });
{post.description}
  return (
    <article className='px-10 pb-28'>
      <section className=' space-x-2 border-[#f7ab0a] text-white'>
        <div className='relative min-h-56 flex flec-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 p-10 blur-sm'>
            <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.author.name}
              fill
              className='mx-auto object-center object-cover'
            />
          </div>

          <section className='p-5 bg-[#f7ab0a] w-full'>
            <div className='flex flex-col md:flex-row gap-y-5 justify-between'>
              <div>
                <h1 className='text-4xl font-extrabold'>
                  {post.title}
                </h1>

                <p>
                  {new Date(post._createdAt).toLocaleDateString
                    ('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year:'numeric',
                    })
                  }
                </p>
              </div>

              <div className='flex items-center space-x-2'>
                <Image
                  src={post.author.image ? urlForImage(post.author.image).url() : user}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className='rounded-full'
                />

                <div className=''>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <span>{/* author BIO/ goes here if needed */}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className='italic pt-10'>{post.description}</h2>
              
              <div className='flex item-center justify-end mt-auto space-x-2'>
                {post.categories ? post.categories.map ((category: Category) => (
                  <p key={category._id}
                    className='bg-gray-800 text-white rounded-full px-3 py-1 text-sm font-semibold mt-4'
                  >
                    {category.title}
                  </p>
                )) : ''}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText 
        value={post.body}
        components={RichTextComponents}
      />

    </article>
  )
}

export default Post
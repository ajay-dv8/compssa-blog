import { createClient } from 'next-sanity';
//import {cache} from 'react'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset =   process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = '2023-07-16';

export const getClient = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: false,
  });

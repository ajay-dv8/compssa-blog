import { Author } from "next/dist/lib/metadata/types/metadata-types"
import { Image, Reference } from "sanity"
import { Block } from "typescript"

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Post extends Base {
    author?: Author;
    body?: Block[] | any;
    categories?: Category | '' | any;
    mainImage?: Image | '' | any;
    slug?: Slug;
    title?: string;
    description?: string;
}

interface Author extends Base {
    bio?: Block[];
    image?: Image;
    name?: string;
    slug?: slug;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: 'reference';
}

interface Slug {
    _type: 'slug';
    current: string;
}

interface Block {
    _key?: string;
    _type?: "block";
    children?: Span[];
    markDefs?: any[];
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
    split?: (separator: string | RegExp) => string[];
    text?: string
}

interface Span {
    _key: string
    _type: 'span';
    text: string;
    marks: string;
}

interface Category extends Base {
    title: string;
    description: string;
}

interface MainImage {
    _type: 'image';
    asset: Reference;
}
interface Title {
    _type: 'string';
    asset: string;
}

interface Children {
    _type: 'string';
    asset: string;
}
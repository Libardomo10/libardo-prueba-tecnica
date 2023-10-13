export interface Response {
    data: Array<Data>;
    pagination: Pagination;
    meta: Meta; 
}

export interface Data {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: any;
    user: any;
    analytics_response_payload: string;
    analytics: any;
  }

export interface Pagination {
    total_count: number;
    count: number;
    offset: number;
}

export interface Meta {
    status: number;
    msg: string;
    response_id: string;
}
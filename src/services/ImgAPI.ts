export enum Options {
    search = '/search/photos',
}

export interface IGetProps {
    option: Options,
    query: string,
}

export interface IData {
    total: number,
    total_pages: number,
    results: [{
        id: string,
        slug: string,
        description: string,
        urls: {
            raw: string,
            full: string,
            regular: string,
            small: string,
            thumb: string,
            small_s3: string,
        }
    }]
}

export interface IImg {
    id: string,
    slug: string,
    description: string,
    urls: {
        raw: string,
        full: string,
        regular: string,
        small: string,
        thumb: string,
        small_s3: string,
    }
}

class ImgAPI {
    private baseUrl = 'https://api.unsplash.com';
    private key = 'VxlfJhGqZp_q8IUTwj5kS7i0rppc4i2AHgpGQKNf3Hw';
    private imgsPerPage = 30;
    private orientation = 'landscape';

    public async get(props: IGetProps): Promise<IData> {
        const response = await fetch(`${this.baseUrl}${props.option}?orientation=${this.orientation}&per_page=${this.imgsPerPage}&query=${props.query}&client_id=${this.key}`);
        const data = await response.json();
        return data;
    }
}

const imgAPI = new ImgAPI();
export default imgAPI;
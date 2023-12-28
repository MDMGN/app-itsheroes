export type HeroShonen = {
    data:{
        mal_id:     number;
        url:        string;
        images:     Images;
        name:       string;
        name_kanji: string;
        nicknames:  any[];
        favorites:  number;
        about:      string;
    }
}

export type HeroShonenSearch = {
       data:Array<{
        mal_id:     number;
        url:        string;
        images:     Images;
        name:       string;
        name_kanji: string;
        nicknames:  any[];
        favorites:  number;
        about:      string;
   }>,
       pagination:{
            last_visible_page: 7,
            has_next_page: boolean,
            current_page: 1,
            items: {
            count: number,
            total: number,
            per_page: number
        }
       }
}

export type Images = {
    jpg:  Jpg;
    webp: Webp;
}

export type Jpg = {
    image_url: string;
}

export type Webp = {
    image_url:       string;
    small_image_url: string;
}
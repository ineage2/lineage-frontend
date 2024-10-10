import ApiService from '../apiService';

class NewsService extends ApiService {
    private servicePrefix: string = 'news';

    index(perPage: number, page: number, headers?: Record<string, string>) {
        const params = new URLSearchParams({
            perPage: perPage.toString(),
            page: page.toString(),
        })

        const url = `/${this.servicePrefix}?${params.toString()}`;

        return this.request('get', url, undefined, headers || undefined);
    };

    show(id: number, headers?: Record<string, string>) {
        const url = `/${this.servicePrefix}/${id}`;

        return this.request('get', url, undefined, headers || undefined);
    }
}

export default new NewsService();

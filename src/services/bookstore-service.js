export class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Гарри Поттер и дары смерти',
            author: 'Джоан К. Роалинг',
            price: 770,
            image: 'https://www.hobbitcomics.ru/image/cache/catalog/tovar16/vvvvvvvvvvvvv4etewrywyu-600x900.jpg'
        },
        {
            id: 2,
            title: 'Гарри Поттер и тайная компната',
            author: 'Джоан К. Роалинг',
            price: 490,
            image: 'https://www.knigosvet.com/img/w300/2316.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random > 0.75){
                    reject(new Error(`code: ${random}`))
                } else {
                    resolve(this.data)
                }
            }, 700)

        });
    }
}

export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Пуаро',
                author: 'Агата Кристи'
            },
            {
                id: 2,
                title: 'Преступление и наказание',
                author: 'Достоевский Ф.М.'
            }
        ];
    }
}
export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'The Mist',
            author: 'Stephen King',
            price: 35.99,
            coverImage: 'https://img-gorod.ru/28/904/2890462_detail.jpg'
        },
        {
            id: 2,
            title: 'The North Water',
            author: 'Ian McGuire',
            price: 27.99,
            coverImage: 'https://img-gorod.ru/28/905/2890529_detail.jpg'
        },
        {
            id: 3,
            title: 'Dancing With The Octopus',
            author: 'Debora Harding',
            price: 42.99,
            coverImage: 'https://img-gorod.ru/28/904/2890401_detail.jpg'
        },
        {
            id: 4,
            title: 'Take Me',
            author: 'Fora J. Ob',
            price: 44.99,
            coverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327872673l/66080.jpg'
        },
        {
            id: 5,
            title: 'Infernal City - Elder Scrolls!',
            author: 'Greg Keyes',
            price: 33.99,
            coverImage: 'https://img-gorod.ru/28/907/2890723_detail.jpg'
        },
        {
            id: 6,
            title: 'The Witcher. Blood Of Elves',
            author: 'Andrzej Sapkowski',
            price: 29.99,
            coverImage: 'https://m.media-amazon.com/images/I/41dhNAlYGML.jpg'
        },
        {
            id: 7,
            title: 'The Concise Mastery',
            author: 'Robert Greene',
            price: 27.99,
            coverImage: 'https://img-gorod.ru/28/903/2890339_detail.jpg'
        },
        {
            id: 8,
            title: 'Dune',
            author: 'Frank Herrbert',
            price: 36.99,
            coverImage: 'https://img-gorod.ru/27/051/2705149_detail.jpg'
        },
        {
            id: 9,
            title: 'Harry Potter and the Philosopher`s Stone',
            author: 'J.K. Rowling',
            price: 32.99,
            coverImage: 'https://img-gorod.ru/24/446/2444651_detail.jpg'
        },
        {
            id: 10,
            title: 'Troy. Our Greatest Story Retold',
            author: 'Stephen Fry',
            price: 43.99,
            coverImage: 'https://img-gorod.ru/28/900/2890088_detail.jpg'
        },
        {
            id: 11,
            title: 'Of Mice and Men',
            author: 'John Steinbeck',
            price: 47.99,
            coverImage: 'https://img-gorod.ru/28/900/2890087_detail.jpg'
        },
        {
            id: 12,
            title: 'The Gunslinger',
            author: 'Stephen King',
            price: 28.99,
            coverImage: 'https://img-gorod.ru/23/525/2352528_detail.jpg'
        },
        {
            id: 13,
            title: 'Misery',
            author: 'Stephen King',
            price: 27.99,
            coverImage: 'https://img-gorod.ru/22/880/2288038_detail.jpg'
        },
        {
            id: 14,
            title: 'Red Sparrow',
            author: 'Jason Statham',
            price: 42.99,
            coverImage: 'https://img-gorod.ru/28/905/2890571_detail.jpg'
        },
        {
            id: 15,
            title: 'Snug A Collection of Comics about Dating Your Best Friend',
            author: 'Catana Comics',
            price: 17.99,
            coverImage: 'https://img-gorod.ru/28/906/2890624_detail.jpg'
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.data.length) {
                    resolve(this.data)
                } else {
                    const error = new Error('there is no data');
                    reject(error)
                }
            }, 1000);
        });
    }
};

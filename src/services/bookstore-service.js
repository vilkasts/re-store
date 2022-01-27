export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Godel: A Life Of Logic',
      author: 'Andy D. Ream',
      price: 35.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51jy5uAaHGL._SX331_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Give Me A Chance',
      author: 'Iwill Notfail',
      price: 27.99,
      coverImage: 'https://m.media-amazon.com/images/I/513YmS6EgnL.jpg'
    },
    {
      id: 3,
      title: 'Smart Junior',
      author: 'Thatswhat Youneed',
      price: 42.99,
      coverImage: 'https://studentsbook.net/upload/iblock/9f0/9f0e3d71041996f8367c7cac029e64a6.jpg'
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
      title: 'Ну возьми меня!',
      author: 'Нара Боту',
      price: 33.99,
      coverImage: 'https://st.litnet.com/uploads/covers/220/1616694042_61.jpg'
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

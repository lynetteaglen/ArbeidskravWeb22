// Her har vi laget et array med bøker

const booksService = (function () {

    const booksArray = [

        {
            name: 'Dune',
            image: 'dune.jpeg',
            genre: 'Fantasy',
            author: 'Frank Herbert'
        },
        {
            name: 'The Daily Stoic',
            image: 'stoic.jpeg',
            genre: 'Self help',
            author: 'Ryan Holiday & Stephen Hanselman'
        },
        {
            name: 'Marcus Aurelius Meditations',
            image: 'marcus.jpg',
            genre: 'Spirituality',
            author: 'Marcus Aurelius'
        },
        {
            name: 'Sapiens',
            image: 'sapiens.jpeg',
            genre: 'Science',
            author: 'Yuval Noah Harrari'
        },
        {
            name: 'Harry Potter and the philospohers stone',
            image: 'harry.jpeg',
            genre: 'Fantasy',
            author: 'J.K. Rowling '
        },
        {
            name: 'Eleanor and Park',
            image: 'eleanor.jpeg',
            genre: 'Fiction',
            author: 'Rainbow Powell'
        }, 

        {
            name: 'Matilda', 
            image: 'matilda.jpeg', 
            genre: 'Kids', 
            author: 'Roald Dahl'
        }, 
        {
            name: 'The Alchemist', 
            image: 'alc.jpeg', 
            genre: 'Fantasy', 
            author: 'Paulo Coelho'
        }, 
        {
            name: 'Lullabies', 
            image: 'lul.jpeg', 
            genre: 'Poesi', 
            author: 'Lang Leav'
        }
    ]

    const getAllBooks = () => {
        return booksArray;
    }

    // Funksjon for å filtrere søk
    const getBooksByName = (bookName) => {
        return booksArray.filter(bookObject => bookObject.name === bookName)
    }

    return { getAllBooks, getBooksByName }

}())

export default booksService;




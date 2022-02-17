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
        }
    ]

    const getAllBooks = () => {
        return booksArray; 
    }

    return {getAllBooks}

}())

export default booksService;  




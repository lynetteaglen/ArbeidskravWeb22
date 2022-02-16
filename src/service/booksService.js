const booksService = (function () {

    const booksArray = [

        {
            name: 'Dune', 
            genre: 'Fantasy', 
            author: 'Frank Herbert'
        }, 
        {
            name: 'The Daily Stoic',
            genre: 'Self help',
            author: 'Ryan Holiday & Stephen Hanselman'
        }, 
        {
            name: 'Marcus Aurelius Meditations', 
            genre: 'Spirituality', 
            author: 'Marcus Aurelius'
        }, 
        {
            name: 'Sapiens', 
            genre: 'Science', 
            author: 'Yuval Noah Harrari'
        }, 
        {
            name: 'Harry Potter and the philospohers stone',
            genre: 'Fantasy', 
            author: 'J.K. Rowling '
        },
        {
            name: 'Eleanor and Park', 
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




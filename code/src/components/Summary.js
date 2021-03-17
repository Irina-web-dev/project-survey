import React from 'react'

const Summary = ({enjoyReading, readingFormat, book, isChecked}) => {

    return (
        <div className="summary">
            <h2>Thank you for your participation in the survey!</h2>
            <h3>Here you can find a summary of your answers:</h3>
            <ul>
                <li>How much do you enjoy reading: <span className='highlighted-text'>{enjoyReading}</span></li>
                <li>The format you prefer reading the most:<span className='highlighted-text'>{readingFormat}</span></li>
                <li>Your favorite book:<span className='highlighted-text'>{book}</span></li>
                <li>Your agreement to add your favorite book to our list of recommended books: <span className='highlighted-text'>{isChecked ? 'I agree' : 'I do not agree'}</span></li>
            </ul>
        </div>
    )
}

export default Summary